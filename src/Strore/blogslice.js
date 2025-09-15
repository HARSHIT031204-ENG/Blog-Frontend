import { createSlice } from "@reduxjs/toolkit";

const blogslice = createSlice({
    name: "blog",
    initialState: {
        bloglist: []
    },
    reducers: {
        blogcontent: (state, action) => {
            state.bloglist.push(action.payload)
        }
    }
})

export const { blogcontent } = blogslice.actions
export default blogslice.reducer