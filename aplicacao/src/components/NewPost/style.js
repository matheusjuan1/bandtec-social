import styled from 'styled-components';

export const NewPost = styled.div`
    width: 60%;
    margin: 2rem 20% 5rem 20%;

    textarea {
        width: 100%;
        resize: none;
        height: 5rem;
        padding: 1vmin 1.2vmin;
        border: 1px solid silver;
        border-radius: 16px;
        font-family: 'Exo 2', sans-serif;
    }

    h4 {
        text-align: left;
        margin: 0.8vmin;
    }

    Button {
        float: right;
        margin: .9rem 2rem;
    }
`;
