import { createSlice } from "@reduxjs/toolkit"

// default state
const initialState = {
  users: [],
  isLoading: false,
  error: ''
}

export const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {

    /* Fetch users */

    getUsersFetch(state) {
      state.isLoading = true
      state.error = ''
    },

    getUsersSuccess(state, action) {
      state.isLoading = false
      state.users = action.payload
    },

    getUsersFailed(state, action) {
      state.isLoading = false
      state.error = action.payload
      state.users = []
    }
  }
})

export default usersSlice.reducer