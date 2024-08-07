import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/ReactToastify.css';
import pwd from '../../assets/images/pwd.png';
import pwdh from '../../assets/images/pwdh.png';
import './Register.css'

const Login = ({ onToggleForm }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!username.trim()) {
                setUsernameError("Username is required");
                return;
            }
            if (!password.trim()) {
                setPasswordError("Password is required");
                return;
            }

            const data = {
                username: username,
                password: password
            }
            const res = await axios.post("http://localhost:4000/login", data)
                
            console.log(res.data.status);
            console.log(res.data);
            if (res.data.status === 200) {
                toast.success("Login Success");
            }
            else if (res.data.status === 404) {
                if (res.data.message === "Enter valid user") {
                    toast.error("Enter valid user");
                } else if (res.data.message === "Enter valid password") {
                    toast.error("Enter valid password");
                }
                else {
                    toast.error("Login failed: " + res.data.message);
                }
            } else {
                toast.error("Login failed");
            }
        }

        catch (error) {
            console.error("Login error:", error);
            toast.error("An error occurred. Please try again later.");
        }
    }
    return (
        <>
            <center>
                <div className="flex flex-col items-center w-1/2 border-x-2 border-y-2 p-4 m-4 form">
                    <div className="flex flex-col w-full mb-4">
                        <label className="self-start mb-2 font-bold"  > Username:</label>
                        <input className={`mb-2 p-2 border rounded-lg  bg-[rgba(250,250,250,0.8)] w-full ${usernameError ? "border-red-500" : ""
                            }`} type="text" value={username} onChange={(e) => { setUsername(e.target.value); setUsernameError("") }} />
                        {usernameError && <span className="text-red-500">{usernameError}</span>}

                    </div>
                    <div className="flex flex-col w-full mb-4 relative">
                        <label className="self-start mb-2 font-bold">Password</label><br />
                        <input className={` mb-2 p-2 border rounded-lg bg-[rgba(250,250,250,0.8)] w-full ${passwordError ? "border-red-500" : ""
                            }`} type={isPasswordVisible ? "text" : "password"} value={password} onChange={(e) => { setPassword(e.target.value); setPasswordError("") }} />
                        {passwordError && <span className="text-red-500">{passwordError}</span>}
                        <button onClick={togglePasswordVisibility} className="pwd">
                            <img src={isPasswordVisible ? pwd : pwdh} alt="" className="h-8 w-8" />
                        </button>
                    </div>
                    <button
                        className="w-full py-2 mt-8 bg-purple-800 text-white text-xl rounded-lg cursor-pointer"
                        onClick={handleSubmit}
                    >
                        Login
                    </button>
                    <div className="flex items-center mt-4">
                        Do not have an account?
                        <div
                            className="ml-2 text-[rgba(73,47,29,1)] cursor-pointer"
                            onClick={onToggleForm}
                        >
                            Register
                        </div>
                    </div>
                </div>
            </center>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                newestOnTop={false}
                pauseOnHover
            />
        </>
    )
}

export default Login
