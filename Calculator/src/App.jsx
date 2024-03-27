import React from 'react';
import { ThemeProvider } from './Context/ThemeContext.jsx';
import { Provider } from 'react-redux';
import { AppRoutes } from "./components/AppRoutes.jsx";
import store from './Redux/Store.jsx';

export const App = () => {
    return (
        <Provider store={store}>
            <ThemeProvider>
                <AppRoutes />
            </ThemeProvider>
        </Provider>
    );
};
