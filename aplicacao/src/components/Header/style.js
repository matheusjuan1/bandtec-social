import styled from 'styled-components';

export const Header = styled.header`
    height: 10vmin;
    box-shadow: 0px 1px 1px rgba(0,0,0,0.1);
    position: fixed;
    width: 100%;
    z-index: 99;
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
        padding-top: 0.5rem;
        cursor: pointer;
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

    .navActive {
        transition: .3s;
        transform: initial;
        opacity: 1;
        z-index: 100;
        pointer-events: all!important;
    }

`

export const Nav = styled.nav`
    justify-content: space-between;
    display: flex;
    align-items: center;
`

export const NavM = styled.nav`
    display: block;
    position: absolute;
    top: 48px;
    right: 11.5%;
    background: white;
    box-shadow: 0 1px 2px rgba(0,0,0, .2);
    border-radius: .5rem;
    transform: translateY(-10px);
    opacity: 0;
    color: #333;
    padding: .5rem;
    pointer-events: none;


    a, button {
        display: flex; 
        align-items: center;
        background: none;
        width: 100%;
        border: none;
        border-bottom: 1px solid #eee;
        padding: .5rem;
        color: #333;
        transition: .2s;
        cursor: pointer!important;
    }

    a:focus, a:hover, button:focus, button:hover {
        color: #FF005C;
    }

    p {
        padding: .3rem;
        padding-top: .5rem;
    }

    svg {
        width: 22px;
        height: auto;
        margin-right: .5rem
    }
`

export const Icons = styled.div`
    color: rgba(100, 100,100, 0.9);
    font-size: 1.8rem;
    width: 100%;
    text-align: center;

    i{
        margin: auto .8rem;
        padding-top: .6rem;
        transition: 0.2s;
    }

    i:hover {
        color: #FF005C;
    }
`