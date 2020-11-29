import styled from 'styled-components';

export const CardUser = styled.div`
    max-width: 15rem;
    padding: 1rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #eee;
    border-radius: 1rem;
    transition: .2s;
    margin-bottom: 1.5rem;
    border: .5px solid #eee;

    &:hover{
        background-color: #FEF;
        border: .5px solid #FF005C;
    }

    img {
        width: 8rem;
        height: 8rem;
        border-radius: 100%;
        margin-bottom: .4rem;
        border: 2px solid #FF005C;
    }

    p {
        margin: .2rem;
    }
    button {
        margin-top: 1rem;
    }
`;
