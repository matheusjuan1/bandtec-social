import React from "react";
import user from "../../services/apiUser";
import { useHistory } from "react-router-dom";
import { Input } from "../../components/Form/Input/Input";
import { Select } from "../../components/Form/Select/Select";
import * as S from './style';
import { Button } from "../../components/Form/Button/Button";
import useForm from "../../hooks/useForm";

const Cadastro = () => {
  const firstName= useForm();
  const lastName = useForm();
  const email = useForm("email");
  const celular = useForm();
  const cargo = useForm()
  const sexo = useForm()
  const dataNasc = useForm()
  const senha = useForm()
  const confirSenha = useForm()

  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();
    // await user
    //   .post("/cadastrar", {
    //     firstName: firstName,
    //     lastName: lastName,
    //     email: email,
    //     celular: celular,
    //     cargo: cargo,
    //     sexo: sexo,
    //     dataNasc: dataNasc,
    //     senha: senha,
    //   })
    //   .then(function (res) {
    //     history.push("/login");
    //   })
    //   .catch(function (erro) {
    //     console.log(erro);
    //   });
  }

  return (
    <S.Cadastro>
      <div className="animeLeft">
        <h1 className="title">Cadastre-se</h1>
        <form onSubmit={handleSubmit}>
          <Input
            id="firstName"
            label="Primeiro Nome"
            {...firstName}
          />
          <Input
            id="lastName"
            label="Segundo Nome"
            {...lastName}
          />
          <Input
            id="email"
            type="email"
            label="E-mail BandTec"
            {...email}
          />
          <Input
            id="celular"
            label="Celular"
            {...celular}
          />
          <Input 
            id="cargo"
            label="Cargo"
            {...cargo}
          />
          <Select
            label="Sexo"
            options={["Feminino", "Masculino", "Outro"]}
            {...sexo}
          />
          <Input
            id="dataNasc"
            type="date"
            label="Data de Nascimento"
            {...dataNasc}
          />
          <Input
            id="senha"
            type="password"
            label="Senha"
            {...senha}
          />
          <Input
            id="confirmSenha"
            type="password"
            label="Confirme a senha"

          />
          <Button>Cadastrar</Button>
        </form>
      </div>
    </S.Cadastro>
  );
};

export default Cadastro;
