import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { addHistory, setDisplay } from '../Redux/Store.jsx';
import { StyledButton } from "./StyledButton.jsx";

export const Calculator = () => {
    const dispatch = useDispatch();
    const [displayExpression, setDisplayExpression] = useState(useSelector((state) => state.display));


    const handleElementClick = (element) => {
        if (element === '=') {
            handleEquals();
            return;
        }
        if (displayExpression === 'Invalid expression'){
            return;
        }
        setDisplayExpression(displayExpression + element);
        dispatch(addHistory(element));
        dispatch(setDisplay(`${displayExpression}${element}`));
    };

    const handleClear = () => {
        setDisplayExpression('');
        dispatch(addHistory('clear'));
        dispatch(setDisplay(''));
    };

    const handleEquals = () => {
        let result;
        if (displayExpression === '') {
            result = 0;
        }
        try {
            result = eval(displayExpression);
            if (result === Infinity) {
                setDisplayExpression('Invalid expression');
                return;
            }
            setDisplayExpression(result.toString());
            dispatch(setDisplay(result));
            dispatch(addHistory('='));
        } catch (error) {
            setDisplayExpression('Invalid expression');
        }
    };

    const buttonRows = [
        ['7', '8', '9', '*'],
        ['4', '5', '6', '/'],
        ['1', '2', '3', '+'],
        ['0', '.', '=', '-']
    ];

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
                {displayExpression}
            </div>
            <div className="buttons">
                {buttonRows.slice(0, buttonRows.length).map((row, rowIndex) => (
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