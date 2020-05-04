import React, {useState} from "react";
import data from "../db";

function Bookables({ bookable, setBookable }) {
    const [group, setGroup] = useState("rooms");
    const bookables = data.bookables[group] || [];
    const groups = Object.keys(data.bookables) || [];

    if(!bookables.includes(bookable)) {
        setBookable(bookables[0]);
    }

    return (
        <div>
            <select
                value={group}
                onChange={e => setGroup(e.target.value)}
                selected={group}
            >
                {groups.map(g => <option value={g} key={g}>{g}</option> )}
            </select>

            <ul className="bookables">
                {bookables.map((b) => (
                    <li
                        key={b.title}
                        className={
                            b.id === (bookable && bookable.id) ?
                                "selected" : null
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