import styled from 'styled-components';

export const Post = styled.article`
    background-color: white;
    border: 1px solid silver;
    padding: 2vmin 2vmin 3vmin 3vmin;
    border-radius: 15px;
    width: 100%;
    margin: 0.8vmin auto;
    text-align: left;
    display: grid;

    .conteudo p{
        font-size: 1.5rem;
    }

    button {
        float: inline-end;
    }
`;

export const ProfilePost = styled.div`
    float: left;
    display: flex;
    margin-bottom: 1vmin;
    justify-content: space-between;

    img {
        width: 40px;
        height: 40px;
        border-radius: 100%;
    }
    .group-post {
        display: grid;
        grid-template-columns:2.5rem 13.5rem;
    }

    h4 {
        margin: 0.2vmin 1vmin;
    }
    h5 {
        color: #919191;
        margin: auto 1.7vmin;
    }
`

export const PostImage = styled.div`
    position: relative;
    width: 100%;
    margin: 2.3vmin 0 1vmin 0;
    height: 80vmin;
    overflow: hidden;
    border-radius: 2.5vmin;
    border: 0.3px silver solid;

    img {
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        width: 100%;
        height: auto;
    }
`

export const ButtonDelete = styled.div`
    border: none;
    outline:none;
    background-color: transparent;
    cursor: pointer;
    padding-right: .3rem;

    &:hover {
        color: #FF005C;
    }
`