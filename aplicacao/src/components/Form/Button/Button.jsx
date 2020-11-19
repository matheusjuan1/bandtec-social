import React from 'react';
import * as S from './style';

export const Button = ({children, ...props}) => {
    return (
        <S.Button {...props}>
            {children}
        </S.Button>
    )
}
