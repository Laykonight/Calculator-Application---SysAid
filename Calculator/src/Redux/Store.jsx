import { configureStore } from '@reduxjs/toolkit';

const initialState = {
    user: '', // Store user info
    history: [], // Store calculator button history
    display: '', // Store current calculator display
    result: '', // Store calculation result
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: action.payload };
        case 'HISTORY':
            return { ...state, history: action.payload };
        case 'DISPLAY':
            return { ...state, display: action.payload };
        default:
            return state;
    }
};

const store = configureStore({ reducer });

export default store;