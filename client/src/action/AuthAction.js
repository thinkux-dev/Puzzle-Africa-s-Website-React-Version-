import * as AuthApi from '../api/AuthRequest';

export const logIn = (formData) => async(dispatch) => {

  // To interact with reducer, tell the reducer that AUTH has started
  dispatch({type: "AUTH_START"})
  try {
    const {data}  = await AuthApi.logIn(formData);
    console.log("actiondata=>", data)
    dispatch({type: "AUTH_SUCCESS", data: data})
  } catch (error) {
    console.log(error)
    dispatch({type: "AUTH_FAIL"})
  }
};

export const signUp = (formData) => async(dispatch) => {
  // To interact with reducer, tell the reducer that AUTH has started
  dispatch({type: "AUTH_START"})
  try {
    const {data} = await AuthApi.signUp(formData);
    dispatch({type: "AUTH_SUCCESS", data: data})
  } catch (error) {
    console.log(error)
    dispatch({type: "AUTH_FAIL"})
  }
};

export const logOut = () => async(dispatch) => {
  dispatch({type: "LOG_OUT"})
}