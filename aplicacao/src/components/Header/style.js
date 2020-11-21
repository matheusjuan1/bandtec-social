import styled from 'styled-components';

export const Header = styled.header`
    height: 10vmin;
    box-shadow: 0px 1px 1px rgba(0,0,0,0.1);
    position: fixed;
    width: 100%;
    z-index: 100;
    background: #232323;
    top: 0px;
    height: 4rem;
    color: white!important;

    img {
        margin-top: .5rem;
        height: 3rem;
    }

    .login {
        color: white!important;
        display: flex;
        align-items:center;
        padding-top: 0.5rem
    }

    .imgperfil {
        width: 30px;
        height: 30px;
        border-radius: 100%;
        margin-left: .5rem;
        position: relative;
        top: -3px;
        border: #00bacf 2px solid;
    }

    .usuarioSvg {
        margin-left: .5rem;
        position: relative;
        top: .8px;
        color: white;
    }

`

export const Nav = styled.nav`
    justify-content: space-between;
    display: flex;
    align-items: center;
`