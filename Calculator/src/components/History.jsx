import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearHistory } from '../Redux/Store.jsx';
import { StyledButton } from "./StyledButton.jsx";

export const History = () => {
    const history = useSelector((state) => state.history);
    const dispatch = useDispatch();

    const handleClearHistory = () => {
        dispatch(clearHistory());
    };

    return (
        <div className="history m-2 h-100">
            <div className="d-flex flex-column align-items-start h-100">
                <div
                    className="flex-grow-1 overflow-y-auto p-2 w-100"
                    style={{}}
                >
                    <ol>
                        {history.length > 0 ? (
                            history.map((item, index) => (
                                <li key={index}>
                                    {item}
                                </li>
                            ))
                        ) : (
                            <li>No history yet.</li>
                        )}
                    </ol>
                </div>
                <div className="mt-auto align-self-center">
                    <StyledButton
                        className="btn-sm text-black"
                        bsColor="danger"
                        bsBorder="black"
                        type="button"
                        onClick={handleClearHistory}
                        text="Clear History"
                    />
                </div>
            </div>
        </div>
    );
};