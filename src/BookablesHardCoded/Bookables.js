import React, { useState, Fragment } from 'react';

function Bookables({ bookablesByGroup }) {
    // const group = "rooms";
    const [group, setGroup] = useState("kit");
    const bookables = bookablesByGroup[group] || [];
    const [ bookableIndex , setBookableIndex ] = useState(0);
    const groups = Object.keys(bookablesByGroup);

    const bookable = bookables[bookableIndex];

    const [hasDetails, setHasDetails] = useState(false);

    function changeGroup(e) {
        setGroup(e.target.value);
    }
    function changeBookable(selectedIndex) {
        setBookableIndex(selectedIndex);
    }

    function nextBookable() {
        setBookableIndex((bookableIndex+1) % bookables.length);
    }

    function toggleDetails(e) {
        setHasDetails(e.target.checked);
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
                    {bookables.map((b, i) => (
                        <li
                            key={b.title}
                            className={i === bookableIndex ? "selected" : null}
                            onClick={() => changeBookable(i)}
                        >
                            {b.title}
                        </li>
                    ))}
                </ul>
                <p>
                    <button onClick={nextBookable} autoFocus>Next</button>
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