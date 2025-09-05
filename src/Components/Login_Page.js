import React, { useState, useEffect } from "react";
import app from "../firebaseConfig";
import { getDatabase, ref, get } from "firebase/database";
import { Link, useNavigate } from "react-router-dom";

const Login_Page = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [logindata, setLogindata] = useState([]);
  let [emailError, setEmailError] = useState("");
  let [passwordError, setPasswordError] = useState("");
  let [loginError, setLoginError] = useState(""); // <-- for showing "user not found"

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const db = getDatabase(app);
      const dbRef = ref(db, "Credentials");
      const snapshot = await get(dbRef);

      if (snapshot.exists()) {
        const data = Object.entries(snapshot.val()).map(([id, details]) => ({
          id,
          ...details,
        }));
        setLogindata(data);
      } else {
        alert("Seems you are the first user, please register!");
      }
    };
    fetchData();
  }, []);

  const validate = () => {
    setEmailError("");
    setPasswordError("");
    setLoginError(""); 

    if (!password && !email) {
      setPasswordError("Password Required");
      setEmailError("Email Required");
      return;
    }
    if (!email) {
      setEmailError("Email Required");
      return;
    }
    if (!password) {
      setPasswordError("Password Required");
      return;
    }
    if (!email.includes('@')) {
      setEmailError("Email must contain '@'");
      return;
    }

    let foundUser = null;

    for (let i = 0; i < logindata.length; i++) {
      if (
        logindata[i].email.trim() === email.trim() &&
        logindata[i].password.trim() === password.trim()
      ) {
        foundUser = logindata[i];
        break;
      }
    }

    if (foundUser) {
      navigate("/home", { state: { name: foundUser.name } });
    } else {
      setLoginError("Invalid Details.Don’t have an account?");
    }
  };

  return (
    <>
      <div className="login-form">
        <h2>Sign-In Form</h2>
        <div className="two-btns">
          <div className="login-btn" onClick={() => navigate("/")}>
            Sign In
          </div>
          <div className="signup-btn" onClick={() => navigate("/register")}>
            Sign Up
          </div>
        </div>

        <label>Email-Id:</label>
        <input
          className="input-field"
          type="text"
          placeholder="Enter Email Id"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span className="email-error" style={{ color: "red" }}>
          {emailError}
        </span>
        <br />

        <label>Password:</label>
        <input
          className="input-field"
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span className="password-error" style={{ color: "red" }}>
          {passwordError}
        </span>
        <br />

        <a className="click-btn" onClick={validate}>Login</a>

        <p className="text" style={{ color: "red" }}>
          {loginError && (
            <>
              {loginError} <Link to="/register"><br />Sign-Up Now</Link>
            </>
          )}
        </p>
      </div>
    </>
  );
};

export default Login_Page;
