import React, { useState } from "react";
import app from "../firebaseConfig";
import { getDatabase, ref, set, push } from "firebase/database";
import { useNavigate } from "react-router-dom";

const Register_Page = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmpassword, setConfirmpassword] = useState("");

  // error states
  let [nameerror, setNameerror] = useState("");
  let [emailerror, setEmailerror] = useState("");
  let [passworderror, setPassworderror] = useState("");
  let [confirmpassworderror, setConfirmpassworderror] = useState("");

  const navigate = useNavigate();

  const saveData = async () => {
    // reset errors
    setNameerror("");
    setEmailerror("");
    setPassworderror("");
    setConfirmpassworderror("");

    let hasError = false;

    if (!name) {
      setNameerror("Name required");
      hasError = true;
    }
    if (!email) {
      setEmailerror("Email required");
      hasError = true;
    } else if (!email.includes("@")) {
      setEmailerror("Email must contain '@'");
      hasError = true;
    }
    if (!password) {
      setPassworderror("Password required");
      hasError = true;
    }
    if (password !== confirmpassword) {
      setConfirmpassworderror("Passwords don't match");
      hasError = true;
    }

    if (hasError) return;

    const db = getDatabase(app);
    const newDoc = push(ref(db, "Credentials"));
    set(newDoc, {
      name: name,
      email: email,
      password: password,
    })
      .then(() => {
        alert("Registration successful, please login.");
        setName("");
        setEmail("");
        setPassword("");
        setConfirmpassword("");
        navigate("/"); // back to login
      })
      .catch((error) => {
        alert("Error: " + error.message);
      });
  };

  return (
    <div>
    <div className="register-form">
      <h2>Sign-Up Form</h2>
      <div className="two-btns">
        <div className="login-btn" onClick={() => navigate("/")}>
            Login
          </div>
          <div className="signup-btn" onClick={() => navigate("/register")}>
            Sign Up
          </div>
      </div>

        <label>Name:</label>
        
        <input
          className="input-field"
          type="text"
          placeholder="Name of the employ"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <span style={{ color: "red" }}>{nameerror}</span>
        <br />

        <label>Email:</label>
        
        <input
          className="input-field"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span style={{ color: "red" }}>{emailerror}</span>
        <br />

        <label>Password:</label>
        
        <input
          className="input-field"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span style={{ color: "red" }}>{passworderror}</span>
        <br />

        <label>Confirm Password:</label>
       
        <input
          className="input-field"
          type="password"
          placeholder="Confirm password"
          value={confirmpassword}
          onChange={(e) => setConfirmpassword(e.target.value)}
        />
        <span style={{ color: "red" }}>{confirmpassworderror}</span>
        <br />

        <button className="click-btn" onClick={saveData}>
          Register
        </button>
      
    </div>
    </div>
  );
};

export default Register_Page;
