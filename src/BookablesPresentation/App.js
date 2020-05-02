import React from "react";
import "../App.css";
import bookablesData from "../bookablesData";
import Bookables from "./Bookables";

const App = () => {
    return (
        <div>
            <Bookables bookablesByGroup={bookablesData} />
        </div>
    );
};

export default App;
