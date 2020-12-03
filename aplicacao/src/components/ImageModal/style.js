import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0px;
  left: 0px;
  background-color: rgba(0,0,0,.8);
  display: flex;
  z-index: 1000!important;

`;

export const Image = styled.div`
  width: 55%;
  max-height: 90%;
  border-radius: 8px;
  margin-left: 22.5%;
  margin-top: 5.1%;
  opacity: 0;
  overflow: hidden;
  transform: scale(.7);
  animation: scaleUp .3s forwards;
  background: url(${props => props.src}) center center no-repeat;
  background-position: cover;
  background-size: 100%;

  @keyframes scaleUp {
    to {
      opacity: 1;
      transform: initial;
    }
  }

`
