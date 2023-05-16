import React from "react";
import {useNavigate} from "react-router-dom";
import regStyle from "./RegistrationPage.module.css";


function RegistrationPage() {
    const navigate = useNavigate();

    return (
        <div className={regStyle.mainWrapper}>
            <div className={regStyle.wrapper}>
                <div className={regStyle.menuName}>
                    <h1>Registration</h1>
                </div>
                <div className={regStyle.textInputWrapper}>
                    <div className={regStyle.textInput}>
                        <p>Email</p>
                        <input type="text"/>
                    </div>
                </div>
                <div className={regStyle.textInputWrapper}>
                    <div className={regStyle.textInput}>
                        <p>Password</p>
                        <input type="text"/>
                    </div>
                </div>
                <div className={regStyle.confirmationButtonWrapper}>
                    <div className={regStyle.confirmationButton}>
                        <button>RegIn</button>
                    </div>
                </div>
                <div className={regStyle.buttonsWrapper}>
                    <div className={regStyle.buttons}>
                        <button onClick={() => {
                            navigate("/", {replace: true})
                        }}>Main Page</button>
                        <button onClick={() => {
                            navigate("/login", {replace: true})
                        }}>LogIn Page</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegistrationPage;