import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getEmp = () => {
  return async (dispatch) => {
    try {
      dispatch(employeeLoading());
      const response = await axios.get(
        "http://localhost:8080/company/employees"
      );
      dispatch(fetchEmployeesFulfiled(response.data));
    } catch (error) {
      dispatch(employeeRejected);
    }
  };
};

export const addNewEmployee = (employeeData) => {
  return async (dispatch) => {
    try {
      
      const empName = employeeData.empName;
      const salary = employeeData.salary;
      const empDateofJoin = employeeData.empDateofJoin;
      const companyId = employeeData.comId;

      console.log(companyId);

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
       console.log(updateEmployee);
       dispatch(employeeLoading());
       const response = await axios.put(`http://localhost:8080/company/employees/${updateEmployee.empId}`, updateEmployee);
       dispatch(updateEmployeeFulfiled(updateEmployee));
       dispatch(getEmp());
     } catch (error) {
       dispatch(employeeRejected());
     }
   };
 };

export const mainSlice = createSlice({
  name: "main",
  initialState: { employee: [], loading: false, error: null },
  reducers: {
    fetchEmployeesFulfiled: (state, action) => {
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
   updateEmployeeFulfiled: (state, action) => {
     state.loading = false;
     let tempEmp = [...state.employee];
     let remove = tempEmp.filter((e) => e.empId != action.payload.empId);
     remove.push(action.payload);
     state.employee = remove;
   },
  },
});
export const {
  fetchEmployeesFulfiled,
  employeeLoading,
  employeeRejected,
  addEmployee,
  deleteEmployee,
  updateEmployeeFulfiled,
} = mainSlice.actions;

export default mainSlice.reducer;
