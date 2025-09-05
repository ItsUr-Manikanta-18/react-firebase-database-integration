import React, { useState } from "react";
import app from "../firebaseConfig";
import { getDatabase, ref, set, push } from "firebase/database";

const Write = () => {
    let [inputValue1, setInputValue1] = useState("");
    let [inputValue2, setInputValue2] = useState("");
    let [inputValue3, setInputValue3] = useState("");

    const saveData = async () => {
    const db = getDatabase(app);
    const newDoc = push(ref(db, "Employ"));
    set(newDoc, {
      employName: inputValue1,
      employRole: inputValue2,
      employSalary: inputValue3
    })
      .then(() => {
        alert("Data saved");
      })
      .catch((error) => {
        alert("Error: " + error.message);
      });
  };

    return (
        <div>
            <div className="main-div">
                <h1>Enter The Employ Details</h1>
                <div className="details-div">
                    <label>Name:</label>
                    <input type="text" placeholder="Name of the employ" value={inputValue1} onChange={(e)=>setInputValue1(e.target.value)} /><br />
                </div>
                <div className="details-div">
                    <label>Role:</label>
                    <input type="text" placeholder="Role of the employ" value={inputValue2} onChange={(e)=>setInputValue2(e.target.value)}/><br />
                </div>
                <div className="details-div">
                    <label>Salary:</label>
                    <input type="text" placeholder="Salary of the employ" value={inputValue3} onChange={(e)=>setInputValue3(e.target.value)} /><br />
                </div>
                <button onClick={saveData}>Save Data</button>
            </div>
        </div>
    )
}
export default Write;