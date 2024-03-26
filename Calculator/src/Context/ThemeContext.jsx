import React, { createContext, useState } from 'react';

const ThemeContext = createContext({
    mode: 'light',
    toggleMode: () => {},
});

const ThemeProvider = ({ children }) => {
    const [mode, setMode] = useState('light');

    const toggleMode = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ mode, toggleMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeProvider };