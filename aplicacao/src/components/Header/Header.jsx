import React from 'react';
import * as S from './style';
import Logo from '../../assets/logo.png';
import {ReactComponent as Usuario} from '../../assets/usuario.svg'
import { UserContext} from '../../UserContext';
import {ReactComponent as Sair} from '../../assets/sair.svg'
import {ReactComponent as User} from '../../assets/user.svg'
import {ReactComponent as Users} from '../../assets/users.svg'

const Header = () => {
    const {dados, userLogout} = React.useContext(UserContext);
    const [menu, setMenu] = React.useState(false);
    return (
    <S.Header >
        <S.Nav className="container">
           <a href="/" >
            <img src={Logo} alt="" />
            </a>
            {dados ? (
            <div onClick={() => setMenu(!menu)} className="login" to="perfil">
                {dados.name} <img className="imgperfil" src={dados.ftperfil} alt=""/> 
                <S.NavM className={menu && "navActive"}>
                <a href="/perfil">
                    <User />
                    Minha Conta
                </a>
                <a href="/comunidade">
                    <Users />
                    BandTechrs
                </a>
                <button onClick={userLogout}>
                    <Sair />
                    Sair
                </button>
                <S.Icons>
                    <i className="fab fa-facebook-square"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-linkedin"></i>
                </S.Icons>
                <p>BandTec Social © 2020</p>
            </S.NavM>
            </div>) : 
            (<a className="login" href="/login">
                Login/ Criar <Usuario  className="usuarioSvg"/>
            </a> )}
        </S.Nav>
    </S.Header>
    )
};

export default Header;