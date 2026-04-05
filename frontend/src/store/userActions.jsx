import axios from "../api/axiosconfig";
import { loaduser } from "./userSlice";

export const asyncGetuser = () => async (dispatch, getState) => {
  try {
    console.log("current state >>>",getState());
    const res = await axios.get("/user");
    console.log(res.data);
    dispatch(loaduser(res.data));
  } catch (error) {
    console.log(error);
  }
};