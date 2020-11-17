import React from "react";
import "./styles.css";
import user from "../../services/apiUser";
import { useHistory } from "react-router-dom";

// import { Redirect } from 'react-router';

import Header from "../../components/Header";
import { Input } from "../../components/Form/Input/Input";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");

  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();
    // await user.post("/autenticar", {
    //     email: email,
    //     senha: senha,
    //   })
      fetch('http://localhost:3030/usuario/autenticar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          email: email,
          senha: senha
        }
      })
      .then((res) =>
        // localStorage.setItem("token", JSON.stringify(res.data)),
        //history.push("/"),
        console.log(res)
      )
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <Header />
      <div className="mainLogin">
        <i className="far fa-user-circle"></i>
        <br />
        <form onSubmit={handleSubmit}>
          <Input
            id="email"
            placeholder="Email"
            value={email}
            setValue={setEmail}
          /><br/>
          <Input
            id="senha"
            placeholder="Senha"
            value={senha}
            setValue={setSenha}
          /><br/>
          <button>Entrar</button>
        </form>
        <br />
        <br />
        <a href="#">Esqueceu a senha?</a>
        <br />
        <br />
        Não possui uma conta? <a href="#">Cadastre-se</a>
      </div>
    </div>
  );
};

export default Login;
