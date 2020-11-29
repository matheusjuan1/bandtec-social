import React from 'react';
import * as S from "./style"

export const Select = ({options, label, value, setValue, ...props}) => {
    return (
        <S.Label>
            {label}
           <S.Select {...props} value={value} onChange={({target}) => setValue(target.value)}>
               <option value='' disabled>Selecione</option>
               {options.map(option => 
                    <option key={option} value={option}>{option}</option>
                )}
            </S.Select> 
        </S.Label>
    )
}
