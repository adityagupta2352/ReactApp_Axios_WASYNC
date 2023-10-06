import React from "react";
import { Modal, Button } from "react-bootstrap";

const ViewEmployeeModal = ({ show, handleClose, employees, companyName }) => {
  return (
    <Modal show={show} onHide={handleClose} dialogClassName="wider-modal">
      <Modal.Header closeButton>
        <Modal.Title>Employees of {companyName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <table className="table table-striped" style={{ border: "1px solid #000", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Date Of Joining</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.empId}>
                <td>{emp.empId}</td>
                <td>{emp.empName}</td>
                <td>{emp.empDateofJoin}</td>
                <td>{emp.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ViewEmployeeModal;
