import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StyledButton} from "./StyledButton.jsx";

export const Calculator = () => {
    const dispatch = useDispatch();
    const Display = useSelector((state) => state.display);
    const history = useSelector((state) => state.history);
    const [displayExpression, setDisplayExpression] = useState(Display);
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
        if (displayExpression === 'Invalid expression'){
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
            result = eval(displayExpression)
            if (result === Infinity) {

                dispatch({type: 'DISPLAY', payload: 'Invalid expression'});
                return;
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
                 minWidth: '200px',
                 maxWidth: '250px',
             }}
        >
            <div className="
                display
                row
                align-items-center
                mx-1 mb-3
                border-bottom border-black border-2"
                 style={{ minHeight: "40px" }}>
                {Display}
            </div>
            <div className="buttons">
                {buttonRows.slice(0, 4).map((row, rowIndex) => (
                    <div
                        key={rowIndex}
                        className="d-flex"
                    >
                        {row.map((element, elementIndex) => (
                            <div className="flex-fill" key={elementIndex}>
                                <StyledButton
                                    className="m-1"
                                    bsColor="light"
                                    bsBorder="black"
                                    type="button"
                                    onClick={() => handleElementClick(element)}
                                    text={element}
                                />
                            </div>
                        ))}
                    </div>
                ))}
                <div className="
                    row
                    align-items-center
                    justify-content-end">
                    <StyledButton
                        className="col-4 text-black m-1 mb-2 p-0"
                        bsColor="danger"
                        bsBorder="black"
                        type="button"
                        onClick={() => handleClear()}
                        text="C"
                    />
                </div>
            </div>
        </div>
    )
}
