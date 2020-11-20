import React from "react";
import { Link, Redirect } from "react-router-dom";
import useForm from "../../hooks/useForm";
import * as S from "./style";

import { Button } from "../../components/Form/Button/Button";
import { Input } from "../../components/Form/Input/Input";
import { Error } from "../../components/Helper/Error/Error";

import { UserContext } from "../../UserContext";

const Login = () => {
  const { login } = React.useContext(UserContext);
  const email = useForm("email");
  const password = useForm();

  const { userLogin, erro, loading } = React.useContext(UserContext);

  if (login === true) {
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
          <Error error={erro} />
        </form>
        <Link className="perdeu" to="/login/criar">
          Perdeu a senha?
        </Link>
        <S.Cadastro>
          <S.Subtitle>Cadastre-se</S.Subtitle>
          <p>Ainda não possui conta? Cadastre-se no site.</p>
          <Button>
            <Link style={{ color: "white" }} to="/login/criar">
              Cadastro
            </Link>
          </Button>
        </S.Cadastro>
      </S.Section>
    </S.Login>
  );
};

export default Login;
