import React from 'react'

export const StyledButton = ({
    className,
    bsColor,
    bsBorder,
    type,
    onClick,
    text
    }) => {
    return (
        <button
            className={`btn btn-${bsColor} border-${bsBorder} ${className}`}
            type={`${type}`}
            onClick={onClick}
        >
            {text}
        </button>
    )
}
