import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

export const Header = () => {
    const username = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleTabClick = (path) => {
      if (path === window.location.pathname){
          return;
      }

      navigate(path);
    };

    const handleLogout = () => {
      dispatch({type: "HISTORY", payload: [] });
      dispatch({type: "SET_USER", payload: ""});
      dispatch({type: "DISPLAY", payload: ""});
      navigate('/login');
    };

    return (
        <header className="
        container
        text-center
        min-vw-100
        border border-primary">
            {/*<div>Header</div>*/}
            <div className="tabs
            row
            align-items-center
            justify-content-lg-start">
                <button
                    className={`col-2 btn btn btn-${window.location.pathname === '/' ? 'info' : 'light'} border-black tab `}
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
