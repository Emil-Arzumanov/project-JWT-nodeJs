import React from "react";
import {useNavigate} from "react-router-dom";
import authStyle from "./AuthPage.module.css";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {login, updateAuthInput} from "../../store/reducers/auth-reducer";


function AuthPage() {
    const authSlice = useAppSelector(state => state.authorization)
    const dispatch = useAppDispatch();
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
                        <input type="text"
                               value={authSlice.authInputs.email}
                               onChange={(e) => {
                                   dispatch(updateAuthInput({name:"email",value:e.target.value}));
                               }}
                        />
                    </div>
                </div>
                <div className={authStyle.textInputWrapper}>
                    <div className={authStyle.textInput}>
                        <p>Password</p>
                        <input type="text"
                               value={authSlice.authInputs.password}
                               onChange={(e) => {
                                   dispatch(updateAuthInput({name:"password",value:e.target.value}));
                               }}
                        />
                    </div>
                </div>
                <div className={authStyle.confirmationButtonWrapper}>
                    <div className={authStyle.confirmationButton}>
                        <button onClick={() => {
                            dispatch(login({
                                email: authSlice.authInputs.email,
                                password: authSlice.authInputs.password
                            }))
                        }}>LogIn</button>
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

