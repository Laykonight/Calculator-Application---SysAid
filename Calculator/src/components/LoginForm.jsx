import React, {useState} from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const isValid = validateForm();

        if (isValid) {
            dispatch({ type: "SET_USER", payload: username });
            console.log("username", username);
            navigate('/');
        }
    };

    const validateForm = () => {
        let isValid = true;

        if (username.trim() === '') {
            alert('Please enter a username.');
            isValid = false;
        } else if (!emailRegex.test(email.trim())) {
            alert('Please enter a valid email address.');
            isValid = false;
        }

        return isValid;
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
