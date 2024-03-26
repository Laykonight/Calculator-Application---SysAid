import React, {useEffect} from 'react'
import { useSelector } from 'react-redux';

export const History = () => {
    const history = useSelector((state) => state.history);

    useEffect(() => {
        // This effect runs whenever the history state changes
        console.log("History updated:", history); // Optional for debugging
    }, [history]); // Dependency array: re-run on history changes

    return (
        // <div>History</div>
    <div className="history">
        <h2>History</h2>
        <ul>
            {history.length > 0 ? (
                history.map((item, index) => (
                    <li key={index}>{item}</li>
                ))
            ) : (
                <li>No history yet.</li>
            )}
        </ul>
    </div>
    )
}
