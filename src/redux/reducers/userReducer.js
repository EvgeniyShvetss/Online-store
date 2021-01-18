import { LOGIN_USER, REGISTRATION_USER } from "../types/user"

const initialState = {
  currentUser: {},
  isAuth: false,
}

function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, currentUser: action.payload, isAuth: true }
    case REGISTRATION_USER:
      return { ...state }
    default:
      return state
  }
}

export default userReducer
