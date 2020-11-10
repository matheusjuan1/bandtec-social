import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

const NavBar = () => (
    <S.NavBar hidden="" >
        <S.Items>
            <Link to="/"><li><i className="fas fa-home"></i></li></Link>
            <Link to="/"><li><i className="fas fa-plus-square"></i></li></Link>
            <Link to="/perfil"><li><i className="fas fa-user-alt"></i></li></Link>
        </S.Items>
    </S.NavBar>
);

export default NavBar;
