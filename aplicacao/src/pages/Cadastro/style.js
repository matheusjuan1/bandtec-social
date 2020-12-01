import styled from 'styled-components';
import Back from  '../../assets/undraw_my_app_grf2.svg'

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
    /* background: url(${Back}) center center no-repeat; */
    img {
        height: 12rem;
        width: 12rem;
        border-radius: 100%;
        margin: 1rem auto;
        border: 3px solid #FF005C;
        box-shadow: 0px 2px 6px rgba(0,0,0,.6);
    }
`
