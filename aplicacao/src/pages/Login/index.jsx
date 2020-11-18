import React from "react";
import "./styles.css";
import user from "../../services/apiUser";
import { Route, useHistory, Routes } from "react-router-dom";


// import { Redirect } from 'react-router';

import { Input } from "../../components/Form/Input/Input";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");

  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();
    await user.post("/autenticar", {
        email: email,
        senha: senha,
    })
      .then((res) =>
        localStorage.setItem("token", JSON.stringify(res.data)),
        history.push("/"),
      )
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <Routes>
        <Route></Route>
        <div className="mainLogin">
          <i className="far fa-user-circle"></i>
          <br />
          <form onSubmit={handleSubmit}>
            <Input
              id="email"
              placeholder="Email"
              value={email}
              setValue={setEmail}
            />
            <br />
            <Input
              id="senha"
              placeholder="Senha"
              value={senha}
              setValue={setSenha}
            />
            <br />
            <button>Entrar</button>
          </form>
          <br />
          <br />
          <a href="#">Esqueceu a senha?</a>
          <br />
          <br />
          Não possui uma conta? <a href="#">Cadastre-se</a>
        </div>
      </Routes>
    </div>
  );
};

export default Login;
