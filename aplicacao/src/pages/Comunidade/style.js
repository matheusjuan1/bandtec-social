import styled from 'styled-components';

export const HeaderCom = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
    justify-items: center;
    margin-bottom: 1rem;

  @media (max-width: 40rem) {
        grid-template-columns: 1fr;
        justify-items: center;
    }
`;

export const Barra = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;

    input{
        margin-top:1rem;
        border: 1px solid gray;
        border-radius: 0px 10px 10px 0px;
    }

    i {
        margin-top:1.35rem;
        border:1px solid gray;
        border-radius: 10px 0px 0px 10px;
        padding-left: 1.5rem;
        padding-top: 1rem;
        margin-left: 3rem;
        height: 2.96rem;
        width: 4rem;
        background-color: #eee;
    };

    @media (max-width: 40rem) {
        i{
            margin-left: 0;
        }
    }
`

export const Users = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: center;

    @media (max-width: 1010px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 780px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 530px) {
        grid-template-columns: 1fr;
    }
`