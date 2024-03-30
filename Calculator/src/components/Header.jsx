// import React from 'react'
// import { useNavigate } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import {StyledButton} from "./StyledButton.jsx";
//
// export const Header = () => {
//     const username = useSelector((state) => state.user);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//
//     const handleTabClick = (path) => {
//       if (path === window.location.pathname){
//           return;
//       }
//
//       navigate(path);
//     };
//
//     const handleLogout = () => {
//       dispatch({type: "LOGOUT" });
//       navigate('/login');
//     };
//
//     return (
//         <header className="text-center min-vw-100">
//             <div className="d-flex py-3 bg-dark-subtle">
//                 <div
//                     className="me-auto">
//                     <StyledButton
//                         className="btn-sm rounded-0 ms-3"
//                         bsColor={`${window.location.pathname === '/' ? 'info' : 'light'}`}
//                         bsBorder="black"
//                         type="button"
//                         onClick={() => handleTabClick('/')}
//                         text="Calculator"
//                     />
//                     <StyledButton
//                         className="btn-sm rounded-0"
//                         bsColor={`${window.location.pathname === '/history' ? 'info' : 'light'}`}
//                         bsBorder="black"
//                         type="button"
//                         onClick={() => handleTabClick('/history')}
//                         text="History"
//                     />
//                 </div>
//                 <div>
//                     <StyledButton
//                         className="btn-sm"
//                         bsColor="outline-danger"
//                         bsBorder="danger"
//                         type="button"
//                         onClick={handleLogout}
//                         text="Logout"
//                     />
//                 </div>
//                 <span className="mx-3">
//                     Welcome, {username}
//                 </span>
//             </div>
//         </header>
//     )
// }


import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../Redux/Store.jsx';
import { StyledButton } from "./StyledButton.jsx";

export const Header = () => {
    const username = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleTabClick = (path) => {
        if (path === window.location.pathname) {
            return;
        }

        navigate(path);
    };

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };

    return (
        <header className="text-center min-vw-100">
            <div className="d-flex py-3 bg-dark-subtle">
                <div className="me-auto">
                    <StyledButton
                        className="btn-sm rounded-0 ms-3"
                        bsColor={`${window.location.pathname === '/' ? 'info' : 'light'}`}
                        bsBorder="black"
                        type="button"
                        onClick={() => handleTabClick('/')}
                        text="Calculator"
                    />
                    <StyledButton
                        className="btn-sm rounded-0"
                        bsColor={`${window.location.pathname === '/history' ? 'info' : 'light'}`}
                        bsBorder="black"
                        type="button"
                        onClick={() => handleTabClick('/history')}
                        text="History"
                    />
                </div>
                <div>
                    <StyledButton
                        className="btn-sm"
                        bsColor="outline-danger"
                        bsBorder="danger"
                        type="button"
                        onClick={handleLogout}
                        text="Logout"
                    />
                </div>
                <span className="mx-3">
                    Welcome, {username}
                </span>
            </div>
        </header>
    );
};