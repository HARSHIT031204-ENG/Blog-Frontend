import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./authslice.js"
import blogReducer from './blogslice.js'

const store = configureStore({
    reducer : {
        auth : authReducer,
        blog : blogReducer
    }
})

export default store