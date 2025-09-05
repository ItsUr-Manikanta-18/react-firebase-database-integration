import React from "react";
import { useNavigate } from "react-router-dom";

const Enter_Retrieve_Data = () => {
  const navigate = useNavigate();

  return (
    <div>
        <div className="show-options">
      <button onClick={() => navigate("/write")}>Enter Employ Data</button>
      <button onClick={() => navigate("/read")}>Retrieve Employ Data</button>
      </div>
    </div>
  );
};

export default Enter_Retrieve_Data;
