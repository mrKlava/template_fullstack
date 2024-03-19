import { createSlice } from "@reduxjs/toolkit"


// create initial state
const initialState = {
  user: JSON.parse(localStorage.getItem("user") || null), 
  isLoading: false,
  error: ''
}

// create slice - 
export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    
    /* Login */

    loginFetch(state) {
      state.isLoading = true
      state.error = ''
    },
    loginSuccess(state, action) {
      state.isLoading = false
      state.user = action.payload
      console.log(action)
    },
    loginFailed(state, action) {
      state.isLoading = false
      state.error = action.payload
    },

    /* Register */

    registerFetch(state) {
      state.isLoading = true
      state.error = ''
    },
    registerSuccess(state, action) {
      state.isLoading = false
      state.error = action.payload
    },
    registerFailed(state, action) {
      state.isLoading = false
      state.error = action.payload
    },

    /* Logout */

    logoutFetch(state) {
      state.isLoading = true
      state.error = ''
    },
    logoutSuccess(state) {
      state.isLoading = false
      state.user = null
      state.error = ''
    },
    logoutFailed(state, action) {
      state.isLoading = false
      state.error = action.payload
    }
  }
})

export default userSlice.reducer