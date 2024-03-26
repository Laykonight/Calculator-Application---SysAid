import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

export const Calculator = () => {
    const dispatch = useDispatch();
    const Display = useSelector((state) => state.display); // string
    const history = useSelector((state) => state.history); // Array
    const [displayExpression, setDisplayExpression] = useState('');

    const addHistory = (element) => {
        let newHistory = [...history];
        if (newHistory.length === 20) {
            newHistory.shift();
        }
        newHistory.push(element);
        dispatch({type: 'HISTORY', payload: newHistory});
    }

    const handleElementClick = (element) => {
        setDisplayExpression(displayExpression + element); // Update setDisplayExpression with number
        addHistory(element);
        dispatch({type: 'DISPLAY', payload: "" + Display + element});
    };

    const handleClear = () => {
        setDisplayExpression(''); // Reset expression
        addHistory('clear');
        dispatch({type: 'DISPLAY', payload: ""}); // Clear display
    };

    const handleEquals = () => {
        let result;
        if (displayExpression === ''){
            result = 0;
        }
        try {
            result = eval(displayExpression); // Evaluate expression using eval (be cautious)
            if (result === 'Infinity'){
                throw new Error('Invalid expression');
            }
            setDisplayExpression(result.toString()); // Update expression with result
            dispatch({type: 'DISPLAY', payload: result}); // Update display with result
            addHistory('='); // Update history
        } catch (error) {
            dispatch({type: 'DISPLAY', payload: 'Invalid expression'}); // Update display with error message
        }
    };

    // useEffect(() => {
    //     // This effect runs whenever the history state changes
    //     console.log("History updated:", history); // Optional for debugging
    // }, [history]); // Dependency array: re-run on history changes

    return (

        <div className="calculator">
            <div>Calculator</div>
            <div className="display" style={{
                border: "2px solid red",
                minHeight: "30px",
            }}>{Display}</div>
            <div className="buttons">
                <button onClick={() => handleElementClick('7')}>7</button>
                <button onClick={() => handleElementClick('8')}>8</button>
                <button onClick={() => handleElementClick('9')}>9</button>
                <button onClick={() => handleElementClick('/')}>/</button>
                <br/>
                <button onClick={() => handleElementClick('4')}>4</button>
                <button onClick={() => handleElementClick('5')}>5</button>
                <button onClick={() => handleElementClick('6')}>6</button>
                <button onClick={() => handleElementClick('*')}>*</button>
                <br/>
                <button onClick={() => handleElementClick('1')}>1</button>
                <button onClick={() => handleElementClick('2')}>2</button>
                <button onClick={() => handleElementClick('3')}>3</button>
                <button onClick={() => handleElementClick('-')}>-</button>
                <br/>
                <button onClick={() => handleEquals()}>=</button>
                <button onClick={() => handleElementClick('.')}>.</button>
                <button onClick={() => handleElementClick('0')}>0</button>
                <button onClick={() => handleElementClick('+')}>+</button>
                <br/>
                <button onClick={() => handleClear()}>C</button>
            </div>
        </div>
    )
}
