import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { companyUpdation, deleteCom, getCompany } from "../Slices/comSlice";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ViewEmployeeModal from "../MainComponet/ViewEmployeeModal";
import "./App1.css";
import CompanyComponent from "../MainComponet/CompanyComponent";

export const AllCom = () => {
  const dispatch = useDispatch();
  const { company } = useSelector((state) => state.com);

  const [show, setShow] = useState(false);
  const [updateCompany, setUpdateCompany] = useState({});

  const handleClose = () => {
    setShow(false);
    setUpdateCompany({});
  };

  const handleShow = () => {
    setShow(true);
  };

  useEffect(() => {
    dispatch(getCompany());
  }, []);

  const [selectedCompany, setSelectedCompany] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleUpdate = (company) => {
    setUpdateCompany(company);
    handleShow();
  }

  const handleUpdateSave = () => {
    dispatch(companyUpdation(updateCompany));
    handleClose();
  }

  const openModal = (company) => {
    setSelectedCompany(company);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCompany(null);
    setModalOpen(false);
  };

  return (
    <>
    <div>
       <CompanyComponent></CompanyComponent>
    </div>
    <div className="App-header1">
      <h2>Company Details</h2>
      <table className="table table-striped" style={{ border: "1px solid #000", borderCollapse: "collapse" }}>
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
                  onClick={() => dispatch(deleteCom(company.comId))}
                >
                  Delete
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleUpdate(company)}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Company</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="form-group" >
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                value={updateCompany ? updateCompany.comName : ""}
                onChange={(e) =>
                  setUpdateCompany({
                    ...updateCompany,
                    comName: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdateSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <ViewEmployeeModal
        show={isModalOpen}
        handleClose={closeModal}
        employees={selectedCompany ? selectedCompany.employeeList : []}
        companyName={selectedCompany ? selectedCompany.comName : ""}
      />
    </div>
    </>
  );
};
