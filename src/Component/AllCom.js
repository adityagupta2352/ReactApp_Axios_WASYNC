import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCompany } from "../Slices/comSlice";
import "./App1.css";
import ViewEmployeeModal from "../MainComponet/ViewEmployeeModal";

export const AllCom = () => {
  const { company } = useSelector((state) => state.com);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompany());
  }, []);

  const [selectedCompany, setSelectedCompany] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = (company) => {
    setSelectedCompany(company);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCompany(null);
    setModalOpen(false);
  };

  return (
    <div className="App-header1">
      <h2>Company Data</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Company Name</th>
            <th scope="col">Total Employee</th>
            <th scope="col">Employee List</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {company.map((company) => (
            <tr key={company.comId}>
              <td>{company.comId}</td>
              <td>{company.comName}</td>
              <td>{company.comNumOfEmp}</td>
              <td>
                <button
                  className="view-employee-button"
                  onClick={() => openModal(company)}
                >
                  View Employees
                </button>
              </td>
              <td>
                <button
                  className="delete-button"
                  // onClick={() => handleDelete(employee.empId)}
                >
                  Delete
                </button>
                <button
                  className="delete-button"
                  // onClick={() => handleUpdate(employee)}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ViewEmployeeModal
        show={isModalOpen}
        handleClose={closeModal}
        employees={selectedCompany ? selectedCompany.employeeList : []}
        companyName={selectedCompany ? selectedCompany.comName : ""}
      />
    </div>
  );
};
