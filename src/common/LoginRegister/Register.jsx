import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/ReactToastify.css';
import pwd from '../../assets/images/pwd.png';
import pwth from '../../assets/images/pwdh.png';


const Register = ({ onToogleForm }) => {
    const [fname, setFname] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [usernameError, setUsernameError] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!fname.trim()) {
            setNameError("Name is required");
            return;
        }
        if (!username.trim()) {
            setUsernameError("Username is required");
            return;
        }
        if (!email.trim()) {
            setEmailError("Email is required");
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setEmailError("Invalid email format");
            return;
        }
        const passwordRegex =
            /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!password.match(passwordRegex)) {
            setPasswordError(
                "Password must be at least 8 characters long and contain at least one letter, one number, and one special character"
            );
            return;
        }

        // Confirm Password
        if (password !== confirmPassword) {
            setConfirmPasswordError("Passwords do not match");
            return;
        }

        const data = {
            name: fname,
            username: username,
            email: email,
            role: "user",
            password: password
        };
        console.log(data);
        axios
            .post("http://localhost:4000/register", data)
            .then((res) => {
                console.log("res.data : ", res.data);
                if (res) {
                    console.log(res);
                    toast.success("Succesfully registered");
                    onToogleForm();
                }
            })
            .catch((error) => {
                if (error.response && error.response.data) {
                    // Check if the server provided a specific error message
                    if (error.response.data.message) {
                        toast.error("Registration failed: " + error.response.data.message);
                    } else if (
                        error.response.data.errors &&
                        error.response.data.errors.length > 0 &&
                        error.response.data.errors[0].msg
                    ) {
                        // Check if there are validation errors and the first error message is present
                        toast.error(
                            "Registration failed: " + error.response.data.errors[0].msg
                        );
                    } else {
                        // Handle other types of errors
                        toast.error("Registration failed. Please try again.");
                    }
                } else {
                    toast.error("An unexpected error occurred. Please try again later.");
                }
            });
    };


    return (
        <>
            <center>
                <div className="flex flex-col items-center w-1/2 border-x-2 border-y-2 p-4 m-4">
                    <div className="flex flex-col w-full mb-4">
                        <label className="self-start mb-2 font-bold">Name:</label>
                        <input type="text" className={`mb-2 p-2 border rounded-lg border-[rgba(110,89,75,0.4)] bg-[rgba(250,250,250,0.8)] w-full ${nameError ? "border-red-500" : ""
                            }`} value={fname} onChange={(e) => { setFname(e.target.value); setNameError("") }} />
                        {nameError && <span className="text-red-500">{nameError}</span>}
                    </div>
                    <div className="flex flex-col w-full mb-4">
                        <label className="self-start mb-2 font-bold"  > Username:</label>
                        <input className={`mb-2 p-2 border rounded-lg border-[rgba(110,89,75,0.4)] bg-[rgba(250,250,250,0.8)] w-full ${nameError ? "border-red-500" : ""
                            }`} type="text" value={username} onChange={(e) => { setUsername(e.target.value); setUsernameError("") }} />
                        {usernameError && <span className="text-red-500">{usernameError}</span>}

                    </div>
                    <div className="flex flex-col w-full mb-4">
                        <label className="self-start mb-2 font-bold">Email</label>
                        <input className={`mb-2 p-2 border rounded-lg border-[rgba(110,89,75,0.4)] bg-[rgba(250,250,250,0.8)] w-full ${nameError ? "border-red-500" : ""
                            }`} type="email" value={email} onChange={(e) => { setEmail(e.target.value); setEmailError(""); }} />
                        {emailError && <span className="text-red-500">{emailError}</span>}

                    </div>
                    <div className="flex flex-col w-full mb-4">
                        <label className="self-start mb-2 font-bold">Password</label>
                        <input className={`mb-2 p-2 border rounded-lg border-[rgba(110,89,75,0.4)] bg-[rgba(250,250,250,0.8)] w-full ${nameError ? "border-red-500" : ""
                            }`} type="password" value={password} onChange={(e) => { setPassword(e.target.value); setPasswordError("") }} />
                        {passwordError && <span className="text-red-500">{passwordError}</span>}
                    </div>

                    <div className="flex flex-col w-full mb-4">
                        <label className="self-start mb-2 font-bold">Confirm Password</label>
                        <input className={`mb-2 p-2 border rounded-lg border-[rgba(110,89,75,0.4)] bg-[rgba(250,250,250,0.8)] w-full ${nameError ? "border-red-500" : ""
                            }`} type="password" value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value); setConfirmPasswordError("") }} /><br />
                        {confirmPasswordError && <span className="text-red-500">{confirmPasswordError}</span>}

                    </div>
                    <button
                        className="w-full py-2 mt-8 bg-purple-800 text-white text-xl rounded-lg cursor-pointer"
                        onClick={handleSubmit}
                    >
                        Register
                    </button>
                    <div className="flex items-center mt-4">
                        Already have an account?
                        <div
                            className="ml-2 text-[rgba(73,47,29,1)] cursor-pointer"
                            onClick={onToogleForm}
                        >
                            LOGIN
                        </div>
                    </div>
            </div>
            </center>
        
        

            <ToastContainer
                position="top-right"
                autoClose={true}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHovert
                theme="light"
                transition="Bounce"
            />
        </>
    )
}
export default Register;
