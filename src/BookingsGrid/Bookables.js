import React, {useState} from "react";
import {bookables} from "../db";

function Bookables ( { bookable, setBookable } ) {
    const [ group, setGroup] = useState("rooms");
    const bookablesInGroup = bookables[group] || [];
    const groups = Object.keys(bookables) || [];

    if(!bookablesInGroup.includes(bookable)) {
        setBookable(bookablesInGroup[0]);
    }

    return (
        <div>
            <select 
                value={group}
                onChange={e => setGroup(e.target.value)}
                selected={group}
            >
                {groups.map( g => <option value={g} key={g}>{g}</option>)}
            </select>

            <ul className="bookables">
                {bookablesInGroup.map((b) => (
                    <li
                        key={b.title}
                        className={b.id === (bookable && bookable.id) ?
                            "selected": null
                        }
                        onClick={() => setBookable(b)}
                    >
                        {b.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Bookables;
