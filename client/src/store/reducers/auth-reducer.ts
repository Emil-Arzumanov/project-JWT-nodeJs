import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IAuth} from "../../models/IAuth";
import {IReg} from "../../models/IReg";
import {IPayload} from "../../models/IPayload";

interface initState {
    number: number,
    isAuth: boolean,
    authInputs: IAuth,
    regInputs: IReg
}

const initialState: initState = {
    number: 0,
    isAuth: false,
    authInputs: {
        email: "",
        password: ""
    },
    regInputs: {
        email: "",
        password: ""
    },
}

const authSlice = createSlice({
    name: "authorization",
    initialState,
    reducers: {
        updateAuthInput(state, {payload}: PayloadAction<IPayload>) {
            state.authInputs[payload.name as keyof typeof state.authInputs] = payload.value
        },
        updateRegInput(state, {payload}: PayloadAction<IPayload>) {
            state.regInputs[payload.name as keyof typeof state.regInputs] = payload.value
        },

    }
});

export const {
    updateAuthInput,
    updateRegInput
} = authSlice.actions

export default authSlice.reducer
