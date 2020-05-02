import React, {Fragment, useReducer, useRef} from "react";
import reducer from "./reducer";

const initialState = {
    group: 'rooms',
    bookableIndex: 0,
    hasDetails: true,
    isPresenting: true
};

function Bookables({ bookablesByGroup }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const {group, bookableIndex, hasDetails, isPresenting} = state;

    const bookables = bookablesByGroup[group] || [];
    const bookable = bookables[bookableIndex];
    const groups = Object.keys(bookablesByGroup);

    const timerRef = useRef(null);
    const nextButtonRef = useRef();

    function changeGroup(e) {
        dispatch({
            type: "SET_GROUP",
            payload: e.target.value
        });
    }

    function changeBookable(selectedIndex, keepPresenting) {
        if(timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }    
        dispatch({
            type: "SET_BOOKABLE",
            payload: {
                selectedIndex,
                isPresenting: keepPresenting
            }
        });

        if(!keepPresenting) {
            nextButtonRef.current.focus();
        }
    }

    function nextBookable() {
        changeBookable((state.bookableIndex + 1) % bookables.length);
    }

    function autoNext() {
        changeBookable((state.bookableIndex + 1) % bookables.length, true);
    }

    if(isPresenting && timerRef.current===null) {
        timerRef.current= setTimeout(autoNext, 3000);
    }

    function toggleDetails(e) {
        dispatch({
            type: "SET_HAS_DETAILS",
            payload: e.target.checked
        })
    }

    return (
        <Fragment>
            <div>
                <select value={group} onChange={changeGroup}>
                    {groups.map(g => <option value={g} key={g}>{g}</option>)}
                </select>
                <ul className="bookables">
                    {bookables.map((b,i) => (
                        <li
                         key={b.title}
                         className={i=== bookableIndex ? "selected" : null} 
                         onClick={() => changeBookable(i)}   
                        >
                            {b.title}
                        </li>
                    ))}
                </ul>
                <p>
                    <button onClick={nextBookable} ref={nextButtonRef}>Next</button>
                </p>
            </div>
            <div className="bookableDetails">
                {bookable && (
                    <Fragment>
                        <p style={{ marginTop: 0 }}>
                            <label>
                                <input
                                    type="checkBox"
                                    onChange={toggleDetails}
                                    checked={hasDetails}
                                />
                            Show Details    
                            </label>
                        </p>
                        {hasDetails && (
                            <div>
                                <h2>{bookable.title}</h2>
                                <p>{bookable.notes}</p>
                            </div>
                        )}
                    </Fragment>
                )}
            </div>
        </Fragment>
    );

};

export default Bookables;