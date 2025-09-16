import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./authslice.js"
import blogReducer from './blogslice.js'
import sharereducer from './shareSlice.js'
const store = configureStore({
    reducer : {
        auth : authReducer,
        blog : blogReducer,
        share: sharereducer
    }
})

export default store