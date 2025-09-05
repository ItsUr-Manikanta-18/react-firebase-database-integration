import React, { useState } from "react";
import app from "../firebaseConfig";
import { getDatabase, ref, get } from "firebase/database";

function Read() {
    let [employArray, setEmployArray] = useState([]);

    const fetchData = async () => {
        const db = getDatabase(app);
        const dbRef = ref(db, "Employ"); // match same path as Write.js
        const snapshot = await get(dbRef);

        if (snapshot.exists()) {
            // include id + data
            const data = Object.entries(snapshot.val()).map(([id, details]) => ({
                id,
                ...details,
            }));
            setEmployArray(data);
        } else {
            alert("No data found");
        }
    };
    fetchData();
    

    return (
        <div>
            <div className="show-table">
                <h1>Employ Details</h1>
                <ul>
                    {employArray.map((item) => (
                        <li key={item.id}>
                            {item.employName} — {item.employRole} — {item.employSalary}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Read;
