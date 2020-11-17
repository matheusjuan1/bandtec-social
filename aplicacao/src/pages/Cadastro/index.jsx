import React from "react";
import "./styles.css";
import user from "../../services/apiUser";
import { useHistory } from "react-router-dom";

import Header from "../../components/Header";
import { Input } from "../../components/Form/Input/Input";
import { Select } from "../../components/Form/Select/Select";

const Cadastro = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [celular, setCelular] = React.useState("");
  const [cargo, setCargo] = React.useState("");
  const [sexo, setSexo] = React.useState("");
  const [dataNasc, setDataNasc] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [confirSenha, setConfirSenha] = React.useState("");

  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();
    await user
      .post("/cadastrar", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        celular: celular,
        cargo: cargo,
        sexo: sexo,
        dataNasc: dataNasc,
        senha: senha,
      })
      .then(function (res) {
        history.push("/login");
      })
      .catch(function (erro) {
        console.log(erro);
      });
  }

  return (
    <>
      <Header />
      <div className="camposCadastro">
        <h1>Bem-vindo(a)!</h1>
        <form onSubmit={handleSubmit}>
          <Input
            id="firstName"
            label="Primeiro Nome"
            value={firstName}
            setValue={setFirstName}
          />
          <Input
            id="lastName"
            label="Segundo Nome"
            value={lastName}
            setValue={setLastName}
          />
          <Input
            id="email"
            type="email"
            label="E-mail BandTec"
            value={email}
            setValue={setEmail}
          />
          <Input
            id="celular"
            label="Celular"
            value={celular}
            setValue={setCelular}
          />
          <Input id="cargo" label="Cargo" value={cargo} setValue={setCargo} />
          <Select
            label="Sexo"
            options={["Feminino", "Masculino", "Outro"]}
            value={sexo}
            setValue={setSexo}
          />
          <Input
            id="dataNasc"
            type="date"
            label="Data de Nascimento"
            value={dataNasc}
            setValue={setDataNasc}
          />
          <Input
            id="senha"
            type="password"
            label="Senha"
            value={senha}
            setValue={setSenha}
          />
          <Input
            id="confirmSenha"
            type="password"
            label="Confirme a senha"
            value={confirSenha}
            setValue={setConfirSenha}
          />
          <button>Cadastrar</button>
        </form>
      </div>
    </>
  );
};

export default Cadastro;
