import React from 'react';
import homeStyle from "./HomePage.module.css";

const HomePage = () => {
    return (
        <div className={homeStyle.mainWrapper}>
            <div className={homeStyle.wrapper}>
                <h1>Welcome Emil!</h1>
                <button className={homeStyle.mainButton}>LogOut</button>
            </div>
        </div>
    );
};

export default HomePage;