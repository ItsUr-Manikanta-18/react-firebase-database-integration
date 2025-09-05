import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';
import Write from "./Components/Write";
import Read from "./Components/Read";
import Enter_Retrieve_Data from "./Components/Enter_Retrieve_Data";
import Register_Page from "./Components/Register_Page";
import Login_Page from "./Components/Login_Page";
import Home from "./Components/Home";

function App() {
  return (
   <Router>
      <Routes>

        <Route path="/" element={<Login_Page />} />
        <Route path="/register" element={<Register_Page />} />
        <Route path="/home" element={<Home />} />
        <Route path="/write" element={<Write />} />
        <Route path="/read" element={<Read />} /> 
      </Routes>
    </Router>
  );
}

export default App;
