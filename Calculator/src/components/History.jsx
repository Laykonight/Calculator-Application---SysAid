import React from 'react'
import { useSelector } from 'react-redux';

export const History = () => {
    const history = useSelector((state) => state.history);

    return (
    <div className="history">
        <h2>History</h2>
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
    )
}
