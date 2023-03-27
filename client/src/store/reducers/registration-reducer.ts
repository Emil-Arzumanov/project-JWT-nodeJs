import {createSlice} from "@reduxjs/toolkit";

interface initState {
    number: number
}

const initialState: initState = {
    number: 0,
}

const regSlice = createSlice({
    name: "registration",
    initialState,
    reducers: {
        increment(state) {
            state.number += 1;
        },
    }
});

export const {
    increment
} = regSlice.actions

export default regSlice.reducer
