import Login from "./Login";
import Register from "./Register";

import React, { useState } from 'react'

function LoginRegisterToggle() {
    const [isLoginActive, setIsLoginActive] = useState(true);

    const toggleForm = () => {
        setIsLoginActive(!isLoginActive);
    };

    return (
        <div className="max-h-max pt-5">
            <center>
                <div className="flex items-centerflex justify-center w-1/2 mb-4 rounded-lg border">
                    <button
                        onClick={() => (setIsLoginActive(true))}
                        className={`flex-1 py-2 px-4 text-xl font-medium rounded ease-in-out duration-300
                    ${isLoginActive ? " bg-purple-800 text-white" : "text-black bg-white"}`}
                    >
                        Login
                    </button>
                    <button onClick={() => (setIsLoginActive(false))}
                        className={`flex-1 py-2 px-4 text-xl font-medium rounded ease-in-out duration-300
                    ${!isLoginActive ? " bg-purple-800 text-white" : "text-black bg-white"}`}
                    >Register</button>
                </div>
                <div>
                    {isLoginActive?
                    
                    <Login onToggleForm={toggleForm}/>
                    :
                    <Register onToggleForm={toggleForm}/>
                    }
                </div>
            </center>
        </div>
    )
}

export default LoginRegisterToggle
