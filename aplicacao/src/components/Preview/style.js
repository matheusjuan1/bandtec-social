import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;
  align-items: center;
  color: #444;
  width: 100%;
  height: auto;
  overflow: hidden;

`;

export const PreviewI = styled.div`
    height: auto;
    width: 100%;
    overflow: hidden;

    img {
        width: 100%;
        border-radius: 7px;
    }
`

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
