import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IAuth} from "../../models/IAuth";
import {IReg} from "../../models/IReg";
import {IPayload} from "../../models/IPayload";
import axios from "axios";

const apiURL = "http://localhost:5000/api/";

export const registration = createAsyncThunk(
    'auth/regin',
    async ({email, password}:IAuth, thunkAPI) => {
        try {
            const response = await axios.post(`${apiURL}registration`,{email, password});
            console.log(response);
            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue(e)
        }
    }
)
export const login = createAsyncThunk(
    'auth/login',
    async ({email, password}:IAuth, thunkAPI) => {
        try {
            const response = await axios.post(`${apiURL}login`,{email, password});
            localStorage.setItem("userToken", JSON.stringify(response.data.accessToken));
            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue(e)
        }
    }
)
export const logout = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
        try {
            const response = await axios.post(`${apiURL}logout`);
            localStorage.removeItem("userToken");
            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue(e)
        }
    }
)

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

    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled.type, (state) => {
            state.isAuth = true;
        })
        builder.addCase(logout.fulfilled.type, (state) => {
            state.isAuth = false;
        })
    },
});

export const {
    updateAuthInput,
    updateRegInput
} = authSlice.actions

export default authSlice.reducer
