import styled from 'styled-components';

export const Perfil = styled.div`
  margin: 2rem;
  display: grid;
  grid-template-columns: 10rem 1fr 10rem;


  @media (max-width: 660px) {
      grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 585px) {
      grid-template-columns: 1fr;
      justify-items: center;
      text-align: center;

      .divButton {
          margin-top: 1rem!important;
      }

      .infos {
          margin-top: .7rem;
      }
  }
  
  img {
      width: 8rem;
      height: 8rem;
      border-radius: 100%;
      float: left;
      border: 2px solid #FF005C;
      margin-right: 1.5rem;
      cursor: pointer;
  }

`;

export const Infos = styled.div`
    h3 {
        color: #888;
    }
`

export const DivButton = styled.div`
    float: right;
    margin-top: 3rem;
`
