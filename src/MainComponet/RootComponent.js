import React, { useState } from "react";
import { Display } from "./Display";
import { Link } from "react-router-dom";
import CompanyComponent from "./CompanyComponent";

const buttonStyles = {
  margin: "5px",
  fontSize:"12px",
  backgroundColor: "#333",
  color: "white",
  padding: "10px 20px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

export const RootComponent = () => {
  const handle = (page) => {
    setCurrentPage(page);
  };

  const [currentPage, setCurrentPage] = useState(null);

  return (
    <div className="App-header1">
      <Link to="/CompanyComponent" className="btn btn-danger">
        Company
      </Link>
      <Link to="/EmployeeComponent" className="btn btn-danger">
        Employee
      </Link>
      <Display page={currentPage} />
    </div>
  );
};
