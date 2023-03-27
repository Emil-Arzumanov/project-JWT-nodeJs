import React from "react";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {increment} from "../../store/reducers/registration-reducer";


function MainPage() {
    const navigate = useNavigate();
    const registration = useAppSelector(state => state.registration);
    const dispatch = useAppDispatch();

    return (
        <div>
            <div>
                main
                <p>
                    {registration.number}
                </p>
                <button onClick={() => {
                    dispatch(increment())
                }}>increment</button>
            </div>
            <button onClick={() => {
                navigate("/auth", {replace: true})
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

