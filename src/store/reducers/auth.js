import { createSlice } from '@reduxjs/toolkit'
import { login, autoLogin, logout, register } from '../actions/auth'

const initialState = {
    loading: false,
    isAuthenticated: false,
    user: {},
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // For autoLogin to set user data from token decode
        // use in app.js
        setCurrentUser: (state, action) => {
            state.user = action.payload
            state.isAuthenticated = !!Object.keys(action.payload).length
        },
    },
    extraReducers: (builder) => {
        // Register
        builder.addCase(register.pending, (state) => {
            state.loading = true
        })
        builder.addCase(register.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(register.rejected, (state) => {
            state.loading = false
        })
        // Login
        builder.addCase(login.pending, (state) => {
            state.loading = true
        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.loading = false
            state.user = action.payload
            state.isAuthenticated = !!Object.keys(action.payload).length
        })
        builder.addCase(login.rejected, (state) => {
            state.loading = false
            state.user = {}
        })
        // Auto Login
        builder.addCase(autoLogin.fulfilled, (state, action) => {
            state.user = action.payload
            state.isAuthenticated = !!Object.keys(action.payload).length
        })
        builder.addCase(autoLogin.rejected, (state) => {
            state.user = {}
        })
        // Logout
        builder.addCase(logout.fulfilled, (state) => {
            state.user = {}
            state.isAuthenticated = false
        })
    },
})

export default authSlice.reducer
export const { setCurrentUser } = authSlice.actions