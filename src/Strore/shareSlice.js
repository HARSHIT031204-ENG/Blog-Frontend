import { createSlice } from "@reduxjs/toolkit";



const ShareSlice = createSlice({
    name : "share",
    initialState : {
        postUrl : " ",
    },
    reducers : {
        postreducer :(state, action) => {
            state.postUrl = action.payload
        }
    }
})


export const {postreducer} = ShareSlice.actions
export default ShareSlice.reducer
