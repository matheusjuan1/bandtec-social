import React from 'react';
import {Button} from '../Form/Button/Button';
import * as S from './style'

export const CardUser = ({user}) => {
    return (
        <S.CardUser>
            <img src={user.ftperfil} alt=""/>
            <p>{user.name}</p>
            <p>{user.cargo}</p>
            <p>{user.email}</p>
            <Button>Visualizar perfil</Button>
        </S.CardUser>
    )
}
