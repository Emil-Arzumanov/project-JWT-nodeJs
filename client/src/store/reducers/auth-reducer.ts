import {createSlice} from "@reduxjs/toolkit";

interface initState {
    number: number,
    isAuth: boolean
}

const initialState: initState = {
    number: 0,
    isAuth: false,
}

const authSlice = createSlice({
    name: "authorization",
    initialState,
    reducers: {
        increment(state) {
            state.number += 1;
        },
    }
});

export const {
    increment
} = authSlice.actions

export default authSlice.reducer
