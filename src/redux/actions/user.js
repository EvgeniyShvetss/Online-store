import { LOGIN_USER, REGISTRATION_USER } from "../types/user"
import api from "../../api"

export const loginUser = (userObj) => ({
  type: LOGIN_USER,
  payload: userObj,
})

export const registerUser = (userObj) => ({
  type: REGISTRATION_USER,
  payload: userObj,
})

export const authenticate = (email, password) => (dispatch) =>
  api("http://localhost:8800/api/user/login", {
    method: "post",
    body: { email, password },
  }).then((data) => {
    dispatch(loginUser(data.data.token))
  })

export const registration = (email, password, name) => (dispatch) =>
  api("http://localhost:8800/api/user/register", {
    method: "post",
    body: { email, password, name },
  }).then((data) => {
    dispatch(registerUser(data))
  })
