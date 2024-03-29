import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {LoginPage} from "../Pages/LoginPage.jsx";
import {MainPage} from "../Pages/MainPage.jsx";
import {CalcPage} from "../Pages/CalcPage.jsx";
import {HistoryPage} from "../Pages/HistoryPage.jsx";
import {useSelector} from "react-redux";

export const AppRoutes = () => {
    const username = useSelector((state) => state.user);

    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/" element={ username === '' ? (<LoginPage />) : (<MainPage />) }>
                        <Route path="/" element={<CalcPage/>}/>
                        <Route path="/history" element={<HistoryPage/>}/>
                    </Route>
                </Routes>
        </BrowserRouter>
    )
}
