import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage } from './Pages/LoginPage.jsx';
import { CalcPage } from './Pages/CalcPage.jsx';
import { HistoryPage } from './Pages/HistoryPage.jsx';
import { ThemeProvider } from './Context/ThemeContext.jsx';
import store from './Redux/Store.jsx';
import { Provider } from 'react-redux';

export const App = () => {
    return (
        <Provider store={store}>
            <ThemeProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/" element={<CalcPage />} />
                        <Route path="/history" element={<HistoryPage />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    );
};
