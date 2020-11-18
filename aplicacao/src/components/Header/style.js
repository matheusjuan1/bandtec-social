import styled from 'styled-components';

export const Header = styled.header`
    height: 10vmin;
    box-shadow: 0px 1px 1px rgba(0,0,0,0.1);
    position: fixed;
    width: 100%;
    z-index: 100;
    background: white;
    top: 0px;
    justify-content: space-between;
    display: flex;
    align-items: center;
    height: 4rem;

    img {
        height: 8vmin;
    }

    .login {
        color: #333!important;
    }

    .login::after {
        content: '';
        display: inline-block;
        width: 14px;
        height: 17px;
        background: url("./assets/usuario.svg") no-repeat center center;
        margin-left: .5rem
    }

`