import styled from 'styled-components';

export const Wrapper = styled.div`
    margin-bottom: 1rem;

    p {
        color: #f31;
        font-size: .875rem;
        margin-top: 0.2rem
    }
`;

export const Input = styled.input`
    border: 1px solid #eee;
    display: block;
    width: 100%;
    font-size: 1rem;
    padding: .8rem;
    border-radius: .4rem;
    background: #eee;
    transition: 0.2s;

    &:focus, &:hover {
        outline: none;
        border-color: #FF005C;
        background: white;
        box-shadow: 0 0 0 3px #fdc9dc;
    } 
`;

export const Label = styled.label`
    display: block;
    font-size: 1rem;
    line-height: 1;
    padding-bottom: .4rem;
`
