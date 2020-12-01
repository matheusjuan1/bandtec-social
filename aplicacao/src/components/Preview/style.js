import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;
  align-items: center;
  color: #444;
  width: 100%;
  height: 30rem;
`;

export const FileInfo = styled.div`
    display: flex;
    float: right;

    div {
        display: flex;
        width: 100%;
        float: right;
        button {
            border: 0;
            background: transparent;
            color: #e57878;
            margin-left: 5px;
            font-size: 2rem!important;
            cursor: pointer;
            float: right;
        }
    }
`;

export const PreviewI = styled.div`
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: center;
    background-image: url(${props => props.src});
    width: 100%;
    border-radius: 5px;
    margin-right: 10px;
`;
