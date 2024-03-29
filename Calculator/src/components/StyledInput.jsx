import React from 'react'

export const StyledInput = ({
    className,
    type,
    id,
    value,
    onChange,
    placeholder
    }) => {
    return (
        <input
            className={`form-control ms-4 ${className}`}
            type={`${type}`}
            id={`${id}`}
            value={value}
            onChange={onChange}
            placeholder={`${placeholder}`}

        />
    )
}
