import styled from 'styled-components';

export const NewPost = styled.div`
    width: 100%;
    margin: 2rem auto 1.5rem auto;
    background-color: white;
    border: 1px solid silver;
    border-radius: 13px;
    padding: 1rem;

    textarea {
        width: 100%;
        resize: none;
        height: 3rem;
        padding: 1vmin 1.2vmin;
        border: 1px solid silver;
        border-radius: 10px;
        font-family: 'Exo 2', sans-serif;
    }

    h4 {
        text-align: left;
        margin: 0.8vmin;
    }

    .btnImg {
        background-color: #00bacf;
        font-size: 1.6rem;
        cursor: pointer;
        border: none;
        border-radius: 0.6rem;
        color: white!important;
        font-family: 'Exo 2', sans-serif;
        padding: .7rem 1rem;
        margin: .8rem .5rem;
        font-weight: bold;
        transition: 0.1s;
        min-width: 7rem;
    }

    .btnImg:hover,.btnImg:focus {
        outline: none;
        box-shadow: 0 0 5px #00bacf;
    }

    .btnPub {
        margin: .8rem .5rem;
        float: right;
    }


    &:disabled {
        opacity: 0.5;
        cursor: wait;
    }
    
`;
