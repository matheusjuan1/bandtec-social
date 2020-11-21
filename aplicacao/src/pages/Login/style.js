import styled from 'styled-components';
import image from '../../assets/undraw_taking_selfie_lbo7.svg';

export const Login = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-height: 100vh;
    gap: 2rem;
    transition: .2s;


    .forms {
        max-width:30rem;
        padding: 1.5rem;
        padding-top: .8rem;
        padding-bottom: 0rem;
    }

    @media (max-width: 40rem) {
        grid-template-columns: 1fr;

        &::before {
            display: none;
        }

        .forms {
            max-width: 100%
        }
    }
`

export const Background = styled.div`
    background: url(${image}) no-repeat center center;
    background-size: cover;
    padding-left: 50px;
`

export const Section = styled.section`
    .perdeu {
        display: inline-block;
        color: #666;
        padding:0.5rem 0;
        line-height: 1;
    }
    .perdeu::after {
        content: '';
        height: 2px;
        width: 100%;
        background-color: currentColor;
        display: block;
    }
`;

export const Cadastro = styled.div`
  margin-top: 3rem;
  
  p {
      margin-top: 2rem;
      margin-bottom: 2rem;
  }
`;

export const Subtitle = styled.h2`
    line-height: 1;
    font-size: 2rem;

    &::after {
        content: '';
        display: block;
        background: #ddd;
        height: 0.5rem;
        width: 3rem;
        border-radius: 0.2rem
    }
`;
