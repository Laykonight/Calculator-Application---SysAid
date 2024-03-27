import React from 'react'
import { Header } from "../components/Header.jsx";
import { Outlet } from "react-router-dom";

export const MainPage = () => {
    return (
        <div>
            <Header/>
            <Outlet />
        </div>
    )
}
