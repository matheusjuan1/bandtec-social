import React from 'react'

export const Input = ({id, label, value, setValue, ...props}) => {
    return (
        <label htmlFor={id}>
            {label}
            <input id={id} type='text' value={value} onChange={({ target }) => setValue(target.value)} {...props}/>
        </label>
    )
}
