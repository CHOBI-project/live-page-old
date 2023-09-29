import { createSlice } from "@reduxjs/toolkit";

const initComment: string[] = [];

export const commentArr = createSlice({
    name: "comment",
    initialState: initComment,
    reducers: {
        getComment  : ((state, action) => { state.push(action.payload) }),
        resetComment: () =>  { return initComment },
    }
});
export const { getComment, resetComment } = commentArr.actions;
export default commentArr.reducer;