import styled from 'styled-components';

export const NavBar = styled.nav`
    height: 7vmin;
    width: 100%;
    background-color: silver;
    position: fixed;
    bottom: 0;
`;

export const Items = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    text-align: center;
    cursor: pointer;

    li {
        border-top:  silver 3px solid;
        transition: 0.1s
    }
    li:hover {
        border-top: #00BACF 3px solid;
        color: #00BACF;
        text-shadow: #00BACF 0px 0px 3px;
    }
    i {
        font-size: 3.5vmin;
        padding: 1.5vmin 0;
    }

    li {
        list-style: none;
    }
`;