import React from "react";
import {useNavigate} from "react-router-dom";


function AuthPage() {
    const navigate = useNavigate();

    return (
        <div>
            <div>
                auth
            </div>
            <button onClick={() => {
                navigate("/", {replace: true})
            }}>Main</button>
            <button onClick={() => {
                navigate("/registration", {replace: true})
            }}>RegIn</button>
        </div>
    );
}

export default AuthPage;

