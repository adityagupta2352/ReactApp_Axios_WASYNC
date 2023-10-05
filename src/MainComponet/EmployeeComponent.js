import { React, useState } from "react";
// import { Display } from "./Display";
import { useNavigate } from "react-router-dom";

const buttonStyles = {
  margin: "10px",
  backgroundColor: "#007bff",
  color: "white",
  padding: "10px 20px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const EmployeeComponent = (page) => {

  //const handle = (page) => {
  //  setCurrentPage(page);
  //};
  
  const navigate = useNavigate();
  // const [currentPage, setCurrentPage] = useState(null);

  return (
    <div>
      <button style={buttonStyles} onClick={() => navigate("/AllEmp")}>
        Get All Employee
      </button>
      <button style={buttonStyles} onClick={() => navigate("/AddEmp")}>
        Add Employee
      </button>

      {/* <Display page={currentPage} /> */}
    </div>
  );
};

export default EmployeeComponent;
