import React, {useContext, useState} from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {ThemeContext} from "../Context/ThemeContext.jsx";
import {StyledButton} from "./StyledButton.jsx";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const { mode }  = useContext(ThemeContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        const isValid = validateForm();

        if (isValid) {
            dispatch({ type: "SET_USER", payload: username });
            navigate('/');
        }
    };

    const validateForm = () => {
        if (username.trim() === '') {
            alert('Please enter a username.');
            return false;
        }

        if (!emailRegex.test(email.trim())) {
            alert('Please enter a valid email address.');
            return false;
        }

        return true;
    };

    return (
        <div className={`login-form `}>
            <div className="container w-75 text-start border border-black mt-5 pb-5 px-3"
                 style={{
                     maxWidth: "700px",
                     minWidth: "350px",
                 }}>
                <header className="fs-5 mb-3">Login</header>
                <form onSubmit={handleSubmit}>

                    <div className="d-flex justify-content-start align-items-center mb-3">
                        <label className="form-label w-25 me-auto" htmlFor="username">Username:</label>
                        <input
                            className="form-control ms-4"
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="d-flex justify-content-start align-items-center mb-3">
                        <label className="form-label w-25 me-auto" htmlFor="email">Email:</label>
                        <input
                            className="form-control ms-4"
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="row justify-content-end">
                        <StyledButton
                            className="col-3 text-black me-3 p-0"
                            bsColor="outline-primary"
                            bsBorder="black"
                            type="submit"
                            text="Login"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}
