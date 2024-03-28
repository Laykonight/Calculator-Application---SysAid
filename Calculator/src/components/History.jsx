import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {StyledButton} from "./StyledButton.jsx";

export const History = () => {
    const history = useSelector((state) => state.history);
    const dispatch = useDispatch();

    return (
    <div className="history m-2">
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
        <StyledButton
            className="btn-sm text-black"
            bsColor="danger"
            bsBorder="black"
            type="button"
            onClick={() => {dispatch({type: "HISTORY", payload: [] })}}
            text="Clear Hisroty"
        />
    </div>
    )
}
