import React from "react";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import mainPageStyle from "./MainPage.module.css";
import mainBackground from "../../imgs/mainBackground.jpeg"


function MainPage() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    return (
        <div className={mainPageStyle.mainWrapper}>
            <img className={mainPageStyle.mainBackImg} src={mainBackground} alt=""/>
            <div className={mainPageStyle.mainContent}>
                <h1>Welcome To Main Page!</h1>
                <div className={mainPageStyle.mainButtons}>
                    <button onClick={() => {
                        navigate("/login", {replace: true})
                    }}>Login</button>
                    <button onClick={() => {
                        navigate("/registration", {replace: true})
                    }}>Registration</button>
                </div>
            </div>
        </div>
    );
}

export default MainPage;

