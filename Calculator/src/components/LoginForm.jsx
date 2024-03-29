import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { StyledButton } from "./StyledButton.jsx";
import { StyledLable } from "./StyledLable.jsx";
import { StyledInput } from "./StyledInput.jsx";
import {FormRow} from "./FormRow.jsx";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const isValid = isFormValid();

        if (isValid) {
            dispatch({type: "SET_USER", payload: username});
            navigate('/');
        }
    };

    const isFormValid = () => {
        setUsernameError('');
        setEmailError('');
        let isValid = true;

        if (username.trim() === '') {
            setUsernameError('Please enter a username.');
            isValid = false;
        }

        if (!emailRegex.test(email.trim())) {
            setEmailError('Please enter a valid email address.');
            isValid = false;
        }

        return isValid;
    };

    return (
        <div className={`login-form page`}>
            <div className="
                container
                text-start
                border border-black
                w-75 mt-5 pb-4 px-3"
                 style={{
                     maxWidth: "700px",
                     minWidth: "350px",
                 }}>
                <header className="fs-5 mb-3">Login</header>
                <form onSubmit={handleSubmit}>
                    <FormRow>
                        <StyledLable
                            htmlFor="username"
                            text="Username"
                        />
                        <StyledInput
                            className={`${usernameError ? 'is-invalid' : ''}`}
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder={usernameError}
                        />
                    </FormRow>
                    <FormRow>
                        <StyledLable
                            htmlFor="email"
                            text="Email"
                        />
                        <StyledInput
                            className={`${emailError ? 'is-invalid' : ''}`}
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={emailError}
                        />
                    </FormRow>
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
