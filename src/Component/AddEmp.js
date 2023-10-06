import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewEmployee } from "../Slices/mainSlice";
import EmployeeComponent from "../MainComponet/EmployeeComponent";

const AddEmp = () => {
  const inputStyle = {
    marginBottom: "10px",
    padding: "5px",
    border: "1px solid #ccc",
    borderRadius: "20px",
    width: "40%",
  };

  const inputStyleForJoin = {
    marginBottom: "10px",
    padding: "5px",
    border: "1px solid #ccc",
    borderRadius: "20px",
    width: "37%",
  };

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "40px",
    cursor: "pointer",
  };

  const dispatch = useDispatch();

  const [employeeData, setEmployeeData] = useState({
    empName: "",
    salary: "",
    empDateofJoin: "",
    comId: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setEmployeeData({
      ...employeeData,
      [name]: value,
    });
  }

  const handleAdd = () => {
    dispatch(addNewEmployee(employeeData));

    setEmployeeData({
      empName: "",
      salary: "",
      empDateofJoin: "",
      comId: "",
    });
  };

  return (
    <>
    <div>
       <EmployeeComponent></EmployeeComponent>
    </div>
    <div className="App-header1">
      <h2>Add Employee</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          placeholder="Employee Name"
          name="empName"
          style={inputStyle}
          value={employeeData.empName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Salary:</label>
        <input
          type="text"
          placeholder="Salary"
          name="salary"
          style={inputStyle}
          value={employeeData.salary}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Joining Date:</label>
        <input
          type="text"
          placeholder="Date of Joining"
          name="empDateofJoin"
          style={inputStyle}
          value={employeeData.empDateofJoin}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Company Id:</label>
        <input
          type="text"
          placeholder="Company Id"
          name="comId"
          style={inputStyle}
          value={employeeData.comId}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleAdd} style={buttonStyle}>
        Save
      </button>
    </div>
    </>
  );
};

export default AddEmp;
