import React from 'react';
import * as S from './style';
import { Link } from 'react-router-dom'
import {logo} from '../../assets/logo.png';
import {ReactComponent as Usuario} from '../../assets/usuario.svg'
import { UserContext} from '../../UserContext'

const Header = () => {
    const {dados} = React.useContext(UserContext);
    return (
    <S.Header >
        <S.Nav className="container">
           <Link to="/" >
            <img src="./images/logo.png" alt="" />
            </Link>
            {dados ? (
            <Link className="login" to="/conta">
                {dados.firstName + ' ' + dados.lastName} <Usuario  className="usuarioSvg"/>
            </Link> ) : 
            (<Link className="login" to="/login">
                Login/ Criar <Usuario  className="usuarioSvg"/>
            </Link> )}
        </S.Nav>
        
    </S.Header>
    )
};

export default Header;