import React from 'react';
import * as S from './style';
import {NavLink } from 'react-router-dom'
// import {logo} from '../../assets/logo.png';
import {ReactComponent as Usuario} from '../../assets/usuario.svg'
import { UserContext} from '../../UserContext'

const Header = () => {
    const {dados} = React.useContext(UserContext);
    return (
    <S.Header >
        <S.Nav className="container">
           <NavLink to="/" >
            <img src="./images/logo.png" alt="" />
            </NavLink>
            {dados ? (
            <NavLink className="login" to="perfil">
                {dados.name} <img className="imgperfil" src={dados.ftperfil} alt=""/>   
            </NavLink>) : 
            (<NavLink className="login" to="login">
                Login/ Criar <Usuario  className="usuarioSvg"/>
            </NavLink> )}
        </S.Nav>
        
    </S.Header>
    )
};

export default Header;