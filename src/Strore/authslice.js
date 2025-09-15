import {createSlice} from "@reduxjs/toolkit"
import axios from "axios"
const authslice = createSlice({
    name : "auth",
    initialState: {
        user: JSON.parse(localStorage.getItem('user')) || null,
        isAuthentiacted: !!localStorage.getItem('user'),
    },
    reducers : {
        loginsuccess :(state, action) => {
            state.user = action.payload
            state.isAuthentiacted = true
        },
        logoutsuccess : (state, action) => {
            state.user = action.payload
            state.isAuthentiacted = false
        }
    }
})

export const {loginsuccess, logoutsuccess} = authslice.actions
export default authslice.reducer
