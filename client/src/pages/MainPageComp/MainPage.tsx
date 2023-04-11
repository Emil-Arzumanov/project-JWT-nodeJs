import React from "react";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {increment} from "../../store/reducers/registration-reducer";


function MainPage() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    return (
        <div>
            <div>
                Main page
            </div>
            <button onClick={() => {
                navigate("/login", {replace: true})
            }}>
                Login
            </button>
            <button onClick={() => {
                navigate("/registration", {replace: true})
            }}>
                RegIn
            </button>
        </div>
    );
}

export default MainPage;

