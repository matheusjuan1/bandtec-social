import React from 'react';
import * as S from './style';
import {Link, NavLink } from 'react-router-dom'
// import {logo} from '../../assets/logo.png';
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
           <Link to="/" >
            <img src="./images/logo.png" alt="" />
            </Link>
            {dados ? (
            <div onClick={() => setMenu(!menu)} className="login" to="perfil">
                {dados.name} <img className="imgperfil" src={dados.ftperfil} alt=""/> 
                <S.NavM className={menu && "navActive"}>
                <NavLink to="/perfil">
                    <User />
                    Minha Conta
                </NavLink>
                <NavLink to="/moodle">
                    <Users />
                    BandTechrs
                </NavLink>
                <button onClick={userLogout}>
                    <Sair />
                    Sair
                </button>
                <p>BandTec Social @ 2020</p>
            </S.NavM>
            </div>) : 
            (<Link className="login" to="login">
                Login/ Criar <Usuario  className="usuarioSvg"/>
            </Link> )}
        </S.Nav>
        
    </S.Header>
    )
};

export default Header;