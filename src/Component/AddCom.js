import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewCompany } from "../Slices/comSlice";
import CompanyComponent from "../MainComponet/CompanyComponent";

const AddCom = () => {

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
    
      const [companyData, SetCompanyData] = useState({
        comName: "",
      });
    
      function handleChange(event) {
        const { name, value } = event.target;
        SetCompanyData({
          ...companyData,
          [name]: value,
        });
      }
    
      const handleAdd = () => {
        dispatch(addNewCompany(companyData));
    
        SetCompanyData({
          comName: "",
        });
    };
    
  return (
    <>
    <div>
       <CompanyComponent></CompanyComponent>
    </div>
    <div className="App-header1">
      <h2>Add Company</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          placeholder="Company Name"
          name="comName"
          style={inputStyle}
          value={companyData.comName}
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

export default AddCom;
