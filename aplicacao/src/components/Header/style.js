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
        height: 8vmin;
    }

    .login {
        color: white!important;
        display: flex;
        align-items:center;
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