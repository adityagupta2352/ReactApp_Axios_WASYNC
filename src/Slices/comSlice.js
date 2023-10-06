import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCompany = () => {
  return async (dispatch) => {
    try {
      dispatch(companyLoading());
      const response = await axios.get("http://localhost:8080/company/");
      console.log(response.data);
      dispatch(fetchCompany(response.data));
    } catch (error) {
      dispatch(companyLoadingFailed());
    }
  };
};

export const addNewCompany = (companyData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/company/",
        companyData
      );
      dispatch(addCompany(response.data));
    } catch (error) {
      dispatch(companyLoadingFailed());
    }
  };
};

export const deleteCom = (comId) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/company/${comId}`
      );
      // console.log(response.data);
      dispatch(deleteCompany(comId));
    } catch (error) {
      dispatch(companyLoadingFailed());
    }
  };
};

export const companyUpdation = (updateCompanyData) => {
  return async (dispatch) => {
    try {
      dispatch(companyLoading());
      const response = await axios.put(
        `http://localhost:8080/company/${updateCompanyData.comId}`,
        updateCompanyData
      );
      dispatch(updateCompany(updateCompanyData));
    } catch (error) {
      dispatch(companyLoadingFailed);
    }
  };
};

export const comSlice = createSlice({
  name: "com",
  initialState: {
    company: [],
    isloading: false,
    error: null,
  },
  reducers: {
    fetchCompany: (state, action) => {
      state.isloading = false;
      state.company = action.payload;
    },
    companyLoading: (state, action) => {
      state.isloading = true;
    },
    companyLoadingFailed: (state, action) => {
      state.isloading = false;
      state.error = true;
    },
    addCompany: (state, action) => {
      state.isloading = true;
      let comList = [...state.company];
      comList.push(action.payload);
      state.company = comList;
    },
    deleteCompany: (state, action) => {
      state.isloading = false;
      state.company = state.company.filter(
        (company) => company.comId !== action.payload
      );
    },
    updateCompany: (state, action) => {
      state.isloading = false;
      state.company = state.company.map((c) =>
        c.comId === action.payload.comId ? action.payload : c
      );
    }
    
  },
});

export const {
  fetchCompany,
  companyLoading,
  companyLoadingFailed,
  addCompany,
  deleteCompany,
  updateCompany,
} = comSlice.actions;
export default comSlice.reducer;
