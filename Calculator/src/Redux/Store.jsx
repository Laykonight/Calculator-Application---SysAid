import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: '',
    history: [],
    display: '',
};
const historyLimit = 20;
const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        addHistory: (state, action) => {
            const newHistory = [...state.history, action.payload];
            if (newHistory.length > historyLimit) {
                newHistory.shift();
            }
            state.history = newHistory;
        },
        setDisplay: (state, action) => {
            state.display = action.payload;
        },
        logout: (state) => {
            state.display = '';
            state.history = [];
            state.user = '';
        },
        clearHistory: (state) => {
            state.history = [];
        },
    },
});

export const { setUser, addHistory, setDisplay, logout, clearHistory } = calculatorSlice.actions;

export const store = configureStore({ reducer: calculatorSlice.reducer });