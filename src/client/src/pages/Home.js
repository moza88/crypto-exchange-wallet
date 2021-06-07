import React, { useState, useEffect } from "react";
import "../app/App.css";

function App() {
    const [users, setUsers] = useState([]);
    const[priceData, setPriceData] = useState([]);

    const dotenv = require('dotenv');
    dotenv.config();

    const ENDPOINT = "http://127.0.0.1:4001";


    useEffect(() => {
        fetch("/api/users")
            .then(res => res.json())
            .then(json => setUsers(json.users));
        // Specify how to clean up after this effect:
        return () => {};
    }, []); // empty 2nd arg - only runs once


    return (
        <div className="App">
            <header className="App-header">

                <br />
                <p>
                    {process.env.NODE_ENV}
                    <code>GET /api/users</code>:{" "}
                    {users.length ? users.join(", ") : "loading..."}
                </p>

                <p>
                </p>
                <br />

            </header>
        </div>
    );
}

export default App;
