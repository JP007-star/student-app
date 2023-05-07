

import axiosInstance from "../helper";
import { studentsConstants } from "./constants";

export const addStudent = (form) => {
    return async (dispatch) => {
      try {
        dispatch({ type: studentsConstants.ADD_STUDENT_REQUEST });
        const res = await axiosInstance.post(`createStudent`, form);
        if (res.status === 201) {
          dispatch({ type: studentsConstants.ADD_STUDENT_SUCCESS });
        
        } else {
          dispatch({ type: studentsConstants.ADD_STUDENT_FAILURE });
        }
      } catch (error) {
        console.log(error);
      }
    };
  };


export  const getStudents = () => {
    return async (dispatch) => {
      try {
        dispatch({ type: studentsConstants.GET_ALL_STUDENTS_REQUEST });
        const res = await axiosInstance.get(`/readAllStudents`);
        if (res.status === 200) {
          const { students } = res.data;
          dispatch({
            type: studentsConstants.GET_ALL_STUDENTS_SUCCESS,
            payload: { students },
          });
        } else {
          dispatch({ type: studentsConstants.GET_ALL_STUDENTS_FAILURE });
        }
      } catch (error) {
        console.log(error);
      }
    };
  };
  