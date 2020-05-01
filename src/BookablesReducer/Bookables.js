import React, {Fragment, useReducer} from "react";
import reducer from "./reducer";

const initialState ={
    group: 'rooms',
    bookableIndex: 0,
    hasDetails: true
};

function Bookables({ bookablesByGroup }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const {group, bookableIndex, hasDetails} = state;

    const bookables = bookablesByGroup[group] || [];
    const bookable = bookables[bookableIndex];
    const groups = Object.keys(bookablesByGroup);

    function changeGroup(e) {
        // setGroup(e.target.value);
        dispatch({
            type: "SET_GROUP",
            payload: e.target.value
        });
    }

    function changeBookable(selectedIndex) {
        // setBookableIndex(selectedIndex);
        dispatch({
            type: "SET_BOOKABLE",
            payload: selectedIndex

        });
    }

    function nextBookable() {
        // setBookableIndex((bookableIndex+1) %bookables.length);
        dispatch({
            type: "SET_BOOKABLE",
            payload: (state.bookableIndex + 1) % bookables.length
        });
    }

    function toggleDetails(e) {
        // setHasDetails(e.target.checked);
        dispatch({
            type: "SET_HAS_DETAILS",
            payload: e.target.checked
        })
    }

    return (
        <Fragment>
            <div>
                <select value={group} onChange={changeGroup}>
                    {
                        groups.map(g => <option value={g} key={g}>{g}</option>)
                    }
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
                    <button onClick={nextBookable} autoFocus>Next </button>
                </p>
            </div>
            <div className="bookableDetails">
                {bookable && (
                    <Fragment>
                        <p style={{ marginTop: 0}}>
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