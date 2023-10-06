import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getEmp = () => {
  return async (dispatch) => {
    try {
      dispatch(employeeLoading());
      const response = await axios.get("http://localhost:8080/company/employees");
      dispatch(fetchEmployeesFulfilled(response.data));
    } catch (error) {
      dispatch(employeeRejected());
    }
  };
};

export const addNewEmployee = (employeeData) => {
  return async (dispatch) => {
    try {
      const companyId = employeeData.comId;
      const empName = employeeData.empName;
      const salary = employeeData.salary;
      const empDateofJoin = employeeData.empDateofJoin;

      const response = await axios.post(
        `http://localhost:8080/company/${companyId}/employees`,
        {
          empName,
          salary: parseInt(salary),
          empDateofJoin,
        }
      );
    } catch (error) {
      dispatch(employeeRejected());
    }
  };
};

export const deleteEmp = (empId) => {
  return async (dispatch) => {
    try {
      dispatch(employeeLoading());
      const response = await axios.delete(
        `http://localhost:8080/company/employees/${empId}`
      );
      dispatch(deleteEmployee(empId));
    } catch (error) {
      dispatch(employeeRejected());
    }
  };
};

export const employeeUpdation = (updateEmployee) => {
  return async (dispatch) => {
    try {
      dispatch(employeeLoading());
      const response = await axios.put(
        `http://localhost:8080/company/employees/${updateEmployee.empId}`,
        updateEmployee
      );
      dispatch(updateEmployeeFulfilled(updateEmployee));
    } catch (error) {
      dispatch(employeeRejected());
    }
  };
};

export const mainSlice = createSlice({
  name: "main",
  initialState: { employee: [], loading: false, error: null },
  reducers: {
    fetchEmployeesFulfilled: (state, action) => {
      state.loading = false;
      state.employee = action.payload;
    },
    employeeLoading: (state, action) => {
      state.loading = true;
    },
    employeeRejected: (state, action) => {
      state.loading = false;
      state.error = true;
    },
    addEmployee: (state, action) => {
      state.loading = true;
      let empList = [...state.employee];
      empList.push(action.payload);
      state.employee = empList;
    },
    deleteEmployee: (state, action) => {
      state.loading = false;
      state.employee = state.employee.filter(
        (employee) => employee.empId !== action.payload
      );
    },
    updateEmployeeFulfilled: (state, action) => {
      state.loading = false;
      state.employee = state.employee.map((e) =>
        e.empId === action.payload.empId ? action.payload : e
      );
    },
  },
});

export const {
  fetchEmployeesFulfilled,
  employeeLoading,
  employeeRejected,
  addEmployee,
  deleteEmployee,
  updateEmployeeFulfilled,
} = mainSlice.actions;

export default mainSlice.reducer;
