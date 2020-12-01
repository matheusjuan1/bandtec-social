import React from "react";
import { Link, Redirect } from "react-router-dom";
import useForm from "../../hooks/useForm";
import * as S from "./style";

import { Button } from "../../components/Form/Button/Button";
import { Input } from "../../components/Form/Input/Input";
import { Error } from "../../components/Helper/Error";
import Head from '../../components/Helper/Head';
import { UserContext } from "../../UserContext";

const Login = () => {
  const email = useForm("email");
  const password = useForm();

  const { userLogin, erro, loading, login } = React.useContext(UserContext);

  if (login) {
    return <Redirect to={{ pathname: "/" }} />;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (email.validate() && password.validate()) {
      userLogin(email.value, password.value);
    }
  }

  return (
    <S.Login>
      <Head title="Login"/>
      <S.Background></S.Background>
      <S.Section className="animeLeft forms">
        <h1 className="title">Login</h1>
        <form onSubmit={handleSubmit}>
          <Input id="email" label="Email Bandtec" {...email} />
          <Input id="senha" type="password" label="Senha" {...password} />
          {!loading ? (
            <Button>Entrar</Button>
          ) : (
            <Button disabled>Carregando...</Button>
          )}
          <Error error={erro && 'Dados incorretos'} />
        </form>
        <Link className="perdeu" to="/login/criar">
          Perdeu a senha?
        </Link>
        <S.Cadastro>
          <S.Subtitle>Cadastre-se</S.Subtitle>
          <p>Ainda não possui conta? Cadastre-se no site.</p>
          <Link style={{ color: "white" }} to="/cadastro">
            <Button>
              Cadastro
          </Button>
          </Link>
        </S.Cadastro>
      </S.Section>
    </S.Login>
  );
};

export default Login;
