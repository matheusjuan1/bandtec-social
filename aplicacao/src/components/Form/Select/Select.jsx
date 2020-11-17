import React from 'react'

export const Select = ({options, label, value, setValue, ...props}) => {
    return (
        <label>
           <select style={{textDecoration: 'Capitalize'}} {...props} value={value} onChange={({target}) => setValue(target.value)}>
               <option disabled>Selecione</option>
               {options.map(option => 
                    <option key={option} value={option}>{option}</option>
                )}
            </select> 
        </label>
    )
}
