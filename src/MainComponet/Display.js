import React from "react";
import AllEmp from "../Component/AllEmp";
import AddEmp from "../Component/AddEmp";
import { AllCom } from "../Component/AllCom";
import EmployeeComponent from "./EmployeeComponent";
import CompanyComponent from "./CompanyComponent";
import AddCom from "../Component/AddCom";

export const Display = ({ page }) => {
  return (
    <div>
      {page === "CompanyComponent" ? (
        <CompanyComponent />
      ) : page === "EmployeeComponent" ? (
        <EmployeeComponent></EmployeeComponent>
      ) : page === "AllEmp" ? (
        <AllEmp></AllEmp>
      ) : page === "AddEmp" ? (
        <AddEmp></AddEmp>
      ) : page === "AllCom" ? (
        <AllCom></AllCom>
      ) : page === "AddCom" ? (
        <AddCom></AddCom>
      ) : null}
    </div>
  );
};
