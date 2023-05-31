import React from 'react';
import homeStyle from "./HomePage.module.css";
import {logout} from "../../store/reducers/auth-reducer";
import {useAppDispatch} from "../../hooks/redux";

const HomePage = () => {
    const dispatch = useAppDispatch();

    return (
        <div className={homeStyle.mainWrapper}>
            <div className={homeStyle.wrapper}>
                <h1>Welcome Emil!</h1>
                <button className={homeStyle.mainButton} onClick={() => {
                    dispatch(logout());
                }}>LogOut</button>
            </div>
        </div>
    );
};

export default HomePage;