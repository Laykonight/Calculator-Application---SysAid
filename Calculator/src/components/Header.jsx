import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

export const Header = () => {
    const username = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log(username)
    const handleTabClick = (path) => {
      if (path === window.location.pathname){
          return;
      }

      navigate(path);
    };

    const handleLogout = () => {

      dispatch({type: "HISTORY", payload: [] });
      dispatch({type: "SET_USER", payload: username});
      navigate('/login');
    };

    return (
        <header className="header">
            <div>Header</div>
            <div className="tabs">
                <button
                    className={`tab ${window.location.pathname === '/' ? 'active' : ''}`}
                    onClick={() => handleTabClick('/')}
                >
                    Calculator
                </button>
                <button
                    className={`tab ${window.location.pathname === '/history' ? 'active' : ''}`}
                    onClick={() => handleTabClick('/history')}
                >
                    History
                </button>
            </div>
            <div className="user-info">
                <span>Welcome, {username}</span>

                <button onClick={handleLogout}>Logout</button>
            </div>
        </header>
    )
}
