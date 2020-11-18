import React from 'react';
import * as S from './style';
import { Link } from 'react-router-dom'
import {logo} from './assets/logo.png';

const Header = () => (
    <S.Header className="container">
        <Link to="/" >
            <img src={logo} alt="" />
        </Link>
        <Link  to="/login">
            <p className="login">Login/ Criar</p>
        </Link>
    </S.Header>
);

export default Header;