import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

export const Calculator = () => {
    const dispatch = useDispatch();
    const Display = useSelector((state) => state.display);
    const history = useSelector((state) => state.history);
    const [displayExpression, setDisplayExpression] = useState('');
    const historyLimit = 20;

    const addHistory = (element) => {
        let newHistory = [...history];
        if (newHistory.length === historyLimit) {
            newHistory.shift();
        }
        newHistory.push(element);
        dispatch({type: 'HISTORY', payload: newHistory});
    }

    const handleElementClick = (element) => {
        if (element === '=') {
            handleEquals();
            return;
        }
        setDisplayExpression(displayExpression + element);
        addHistory(element);
        dispatch({type: 'DISPLAY', payload: "" + Display + element});
    };

    const handleClear = () => {
        setDisplayExpression('');
        addHistory('clear');
        dispatch({type: 'DISPLAY', payload: ""});
    };

    const handleEquals = () => {
        let result;
        if (displayExpression === '') {
            result = 0;
        }
        try {
            result = eval(displayExpression);
            if (result === 'Infinity') {
                throw new Error('Invalid expression');
            }
            setDisplayExpression(result.toString());
            dispatch({type: 'DISPLAY', payload: result});
            addHistory('=');
        } catch (error) {
            dispatch({type: 'DISPLAY', payload: 'Invalid expression'});
        }
    };

    const buttonRows = [
        ['7', '8', '9', '*'],
        ['4', '5', '6', '/'],
        ['1', '2', '3', '+'],
        ['0', '.', '=', '-']
    ]

    return (

        <div className="
            calculator
            container
            text-center
            mt-5 w-25
            border border-black rounded"
             style={{
                 minWidth: '170px',
                 maxWidth: '200px',
             }}>
            <div className="
                display
                row
                align-items-center
                mx-1 mb-3"
                 style={{
                     borderBottom: "2px solid #000000",
                     minHeight: "30px",
                 }}>
                {Display}
            </div>
            <div className="buttons">
                {buttonRows.slice(0, 4).map((row, rowIndex) => (
                    <div
                        key={rowIndex}
                        className="
                        button-row
                        row
                        align-items-center
                        justify-content-evenly
                        flex-nowrap"
                    >
                        {row.map((element, elementIndex) => (
                            <button
                                className="
                                col-4
                                btn btn-light
                                border-black
                                m-1 mb-2 p-0
                                justify-content-center"
                                style={{
                                    height: '30px',
                                    width: '30px',
                                }}
                                type="button"
                                key={elementIndex}
                                onClick={() => handleElementClick(element)}
                            >
                                {element}
                            </button>
                        ))}
                    </div>
                ))}
                <div className="
                row
                align-items-center
                justify-content-end">
                    <button
                        className="
                        col-4
                        btn btn-danger
                        border-black
                        text-black
                        m-1 mb-2 p-0
                        justify-content-center"
                        onClick={() => handleClear()}
                    >
                        C
                    </button>
                </div>
            </div>
        </div>
    )
}
