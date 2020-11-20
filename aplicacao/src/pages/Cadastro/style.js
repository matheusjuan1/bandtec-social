import styled from 'styled-components';
import image from '../../assets/undraw_social_girl_562b.png'

export const Cadastro = styled.section`
  display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 100vh;
    gap: 2rem;

    &::before {
        display: block;
        content: '';
        background: url(${image}) no-repeat center center;
        background-size: cover;
    }

    .forms {
        max-width:30rem;
        padding: 1.5rem;
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
`;
