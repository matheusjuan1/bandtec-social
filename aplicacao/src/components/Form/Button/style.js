import styled from 'styled-components';

export const Button = styled.button`
    font-size: 1.5rem;
    cursor: pointer;
    border: none;
    border-radius: 0.6rem;
    background-color: #FF005C;
    color: white!important;
    font-family: 'Exo 2', sans-serif;
    padding: .7rem 1.2rem;
    font-weight: bold;
    transition: 0.1s;
    min-width: 7rem;

    &:hover, &:focus {
        outline: none;
        box-shadow: 0 0 5px #FF005C;
    }

    &:disabled {
        opacity: 0.5;
        cursor: wait;
    }
`