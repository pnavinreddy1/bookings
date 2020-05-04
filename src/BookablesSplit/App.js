import React, { useState } from "react";
import "../App.css";

import Bookables from "./Bookables";
import BookableDetails from "./BookableDetails";
import Bookings from "./Bookings";
import UserPicker from "./UserPicker";

const App = () => {
    const [ bookable, setBookable ] = useState();

    return (
        <div className="App">
            <header>
                <UserPicker />
            </header>
        
        <main>
            <Bookables
                bookable={bookable}
                setBookable={setBookable}
            />
            <Bookings 
                bookable={bookable}
            />                
        </main>

        <aside>
            <BookableDetails
                bookable={bookable}
            />
        </aside>
        </div>

    );

};

export default App;