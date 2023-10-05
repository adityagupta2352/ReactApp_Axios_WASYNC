import React, { useState } from "react";
import { Display } from "./Display";

const buttonStyles = {
  margin: "10px",
  backgroundColor: "#007bff",
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
      <button style={buttonStyles} onClick={() => handle("CompanyComponent")}>
        Company
      </button>
      <button style={buttonStyles} onClick={() => handle("EmployeeComponent")}>
        Employee
      </button>

      <Display page={currentPage} />
    </div>
  );
};
