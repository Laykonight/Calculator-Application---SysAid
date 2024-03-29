import React from 'react'

export const FormRow = ({ className, children }) => {
    return (
        <div className={`
            d-flex
            justify-content-start align-items-center
            mb-3
            ${className}`}>
            {children}
        </div>
    )
}
