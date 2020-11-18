import styled from 'styled-components';



export const NavBar = styled.nav`
    height: 7vmin;
    width: 100%;
    background-color: silver;
    position: fixed;
    bottom: 0;

    .active li {
       color: #00BACF;
       border-top: #00BACF 3px solid;
    }
`;

export const Items = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    text-align: center;
    cursor: pointer;
    color: #232323!important;

    /* li {
        border-top:  ${({ativo}) => (ativo ? 'silver 3px solid' : '#00BACF 3px solid')};
        transition: 0.1s
    } */
    i {
        font-size: 3.5vmin;
        padding: 1.5vmin 0;
    }

    li {
        transition: 0.1s;
        list-style: none;
        border-top: silver 3px solid;
    }
    li:hover {
        border-top: #00BACF 3px solid;
        color: #00BACF!important;
        text-shadow: #00BACF 0px 0px 3px;
    }
    
`;