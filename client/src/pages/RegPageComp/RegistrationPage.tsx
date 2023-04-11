import React from "react";
import {useNavigate} from "react-router-dom";


function RegistrationPage() {
    const navigate = useNavigate();

    return (
        <div>
            <div>
                reg
            </div>
            <button onClick={() => {
                navigate("/", {replace: true})
            }}>Main</button>
            <button onClick={() => {
                navigate("/auth", {replace: true})
            }}>Login</button>
        </div>
    );
}

export default RegistrationPage;