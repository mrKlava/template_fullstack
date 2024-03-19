import { combineReducers, configureStore } from "@reduxjs/toolkit"
import userReducer from "./slices/userSlice"
import usersReducer from "./slices/usersSlice"


// combine all reducers in one and pass it to store
const rootReducer = combineReducers({
  userReducer,
  usersReducer
})

// Setting up the store
export default configureStore({
  reducer: rootReducer
})