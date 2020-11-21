import React from 'react'

export const Select = ({options, label, value, setValue, ...props}) => {
    return (
        <label>
            {label}
           <select style={{textDecoration: 'Capitalize'}} {...props} value={value} onChange={({target}) => setValue(target.value)}>
               <option value='' disabled>Selecione</option>
               {options.map(option => 
                    <option key={option} value={option}>{option}</option>
                )}
            </select> 
        </label>
    )
}
