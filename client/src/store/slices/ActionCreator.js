import { userSlice } from "./userSlice"
import { usersSlice } from "./usersSlice"
import { httpRequest } from "../../axios"


/** Login user
 * will make http request with user credentials and if success will update local storage
 * 
 * @param {{str, str}} user_id 
 * @param {{str, str}} pwd 
 * @return {void}
 */
export const userLogin = (cred) => async (dispatch) => {
  try {
    dispatch( userSlice.actions.loginFetch() )
    const resp = await httpRequest.post('/auth/login', cred)
    localStorage.setItem("user", JSON.stringify(resp.data))
    // if success update the state with data
    dispatch( userSlice.actions.loginSuccess(resp.data) )
  } catch (err) {
    // if error update the error message
    dispatch( userSlice.actions.loginFailed(err.response.data) )
  }
}


/** Register user
 * will make http request with user credentials and if success will update local storage
 * 
 * @param {{str, str, str}} firstname 
 * @param {{str, str, str}} lastname 
 * @param {{str, str, str}} pwd 
 * @return {void}
 */
export const userRegister = (cred) => async (dispatch) => {
  try {
    dispatch( userSlice.actions.registerFetch() )
    const resp = await httpRequest.post('/auth/register', cred)
    dispatch( userSlice.actions.registerSuccess(resp.data) )
  } catch (err) {
    // if error update the error message
    dispatch( userSlice.actions.registerFailed(err) )
  }
}


/** Logout user
 * remove user from local storage, state and deletes cookie with token on back end 
 * 
 * @return {void}
 */
export const userLogout = () => async (dispatch) => {
  try {
    dispatch( userSlice.actions.logoutFetch() )
    await httpRequest.post('/auth/logout')
    dispatch( userSlice.actions.logoutSuccess() )
    // remove user from local storage
    localStorage.removeItem("user")
  } catch (err) {
    // if error update the error message
    dispatch( userSlice.actions.logoutFailed(err) )
  }
}


/** Get all registered users
 * on success set users state with array of all users
 * 
 * @return {void}
 */
export const getUsers = () => async (dispatch) => {
  try {
    dispatch( usersSlice.actions.getUsersFetch() )
    const resp = await httpRequest.get('/users')
    dispatch( usersSlice.actions.getUsersSuccess(resp.data) )
  } catch (err) {
    // if error update the error message
    dispatch( usersSlice.actions.getUsersFailed(err.message) )
  }
}
