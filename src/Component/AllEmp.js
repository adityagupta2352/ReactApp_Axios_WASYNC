import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmp, deleteEmp, employeeUpdation } from "../Slices/mainSlice";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./App1.css";

const AllEmp = () => {
  const dispatch = useDispatch();
  const { employee } = useSelector((state) => state.main);

  const [show, setShow] = useState(false);
  const [updateEmployee, setUpdateEmployee] = useState({});

  const handleClose = () => {
    setShow(false);
    setUpdateEmployee({});
  };

  const handleShow = () => setShow(true);

  useEffect(() => {
    dispatch(getEmp());
  }, []);

  const handleDelete = (empId) => {
    dispatch(deleteEmp(empId));
  };

  const handleUpdate = (employee) => {
    setUpdateEmployee(employee);
    handleShow();
  };

  const handleUpdateSave = () => {
    dispatch(employeeUpdation(updateEmployee));
    handleClose();
  };

  return (
    <div className="App-header1">
      <h2>Employee Data</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Joining Date</th>
            <th scope="col">Salary</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employee.map((employee) => (
            <tr key={employee.empId}>
              <td>{employee.empId}</td>
              <td>{employee.empName}</td>
              <td>{employee.empDateofJoin}</td>
              <td>{employee.salary}</td>
              <td>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(employee.empId)}
                >
                  Delete
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleUpdate(employee)}
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
          <Modal.Title>Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                value={updateEmployee ? updateEmployee.empName : ""}
                onChange={(e) =>
                  setUpdateEmployee({
                    ...updateEmployee,
                    empName: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-group">
              <label>Salary</label>
              <input
                type="text"
                className="form-control"
                value={updateEmployee ? updateEmployee.salary : ""}
                onChange={(e) =>
                  setUpdateEmployee({
                    ...updateEmployee,
                    salary: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-group">
              <label>Joining Date</label>
              <input
                type="date"
                className="form-control"
                value={updateEmployee ? updateEmployee.empDateofJoin : ""}
                onChange={(e) =>
                  setUpdateEmployee({
                    ...updateEmployee,
                    empDateofJoin: e.target.value,
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
    </div>
  );
};

export default AllEmp;
