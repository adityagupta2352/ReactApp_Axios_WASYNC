import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "./logo.png";

const buttonStyles = {
  margin: "8px",
  fontSize: "14px",
  backgroundColor: "#333",
  color: "white",
  padding: "10px 10px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const EmployeeComponent = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={logo}
          alt="Logo"
          style={{ height: "30px", marginRight: "10px" }}
        />
        <button style={buttonStyles} onClick={() => navigate("/AllEmp")}>
          Get All Employee
        </button>
        <button style={buttonStyles} onClick={() => navigate("/AddEmp")}>
          Add Employee
        </button>
      </div>
    </div>
  );
};

export default EmployeeComponent;
