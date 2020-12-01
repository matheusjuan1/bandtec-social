import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  top: 0px;
  left: 0px;
  z-index: 1000;
`;

export const Loading = styled.div`
    margin: auto;
    width: 80px;
    display: flex;
    background-color: rgba(255, 255, 255, .5);
    justify-content: center;
    align-items: center;
`