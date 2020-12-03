import styled from 'styled-components';
import Back from  '../../assets/undraw_develop_app_kvt2.svg'

export const Cadastro = styled.section`
  display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 100vh;
    gap: 2rem;

    .forms {
        max-width:30rem;
        padding: 1.5rem;
        padding-top: 0rem;
    }

    @media (max-width: 40rem) {
        grid-template-columns: 1fr;

        &::before {
            display: none;
        }

        .forms {
            max-width: 100%
        }
        .preview {
            display: none;
        }
    }
`;

export const Preview = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding-top: 10rem;
    background: url(${Back}) center center no-repeat;
`
