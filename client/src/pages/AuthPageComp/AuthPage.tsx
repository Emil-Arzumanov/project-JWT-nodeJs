import React from "react";
import {useNavigate} from "react-router-dom";
import authStyle from "./AuthPage.module.css";


function AuthPage() {
    const navigate = useNavigate();

    return (
        <div className={authStyle.mainWrapper}>
            <div className={authStyle.wrapper}>
                <div className={authStyle.menuName}>
                    <h1>LogIn</h1>
                </div>
                <div className={authStyle.textInputWrapper}>
                    <div className={authStyle.textInput}>
                        <p>Email</p>
                        <input type="text"/>
                    </div>
                </div>
                <div className={authStyle.textInputWrapper}>
                    <div className={authStyle.textInput}>
                        <p>Password</p>
                        <input type="text"/>
                    </div>
                </div>
                <div className={authStyle.confirmationButtonWrapper}>
                    <div className={authStyle.confirmationButton}>
                        <button>LogIn</button>
                    </div>
                </div>
                <div className={authStyle.buttonsWrapper}>
                    <div className={authStyle.buttons}>
                        <button onClick={() => {
                            navigate("/", {replace: true})
                        }}>Main Page</button>
                        <button onClick={() => {
                            navigate("/registration", {replace: true})
                        }}>Registration Page</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthPage;

