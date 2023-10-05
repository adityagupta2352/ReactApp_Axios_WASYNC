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

const CompanyComponent = (page) => {
  
  // const handle = (page) => {
    // setCurrentPage(page);
  // };
  
  const navigate = useNavigate();
  // const [currentPage, setCurrentPage] = useState(null);

  return (
    <div>
      <button style={buttonStyles} onClick={() => navigate("/AllCom")}>
        Get All Company
      </button>
      <button style={buttonStyles} onClick={() => navigate("/AddCom")}>
        Add Company
      </button>

      {/* <Display page={currentPage} /> */}
    </div>
  );
};

export default CompanyComponent;
