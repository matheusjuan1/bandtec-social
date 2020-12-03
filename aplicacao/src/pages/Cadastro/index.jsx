import React from "react";
import user from "../../services/apiUser";
import { Redirect } from "react-router-dom";
import { Input } from "../../components/Form/Input/Input";
import { Select } from "../../components/Form/Select/Select";
import * as S from "./style";
import { Button } from "../../components/Form/Button/Button";
import {Error} from "../../components/Helper/Error"
import useForm from "../../hooks/useForm";
import { UserContext } from "../../UserContext";
import { useFetch } from "../../hooks/useFetch";
import Head from '../../components/Helper/Head';

const Cadastro = () => {
  const name = useForm();
  const email = useForm("email");
  const celular = useForm();
  const cargo = useForm();
  const [sexo, setSexo] = React.useState("");
  const dataNasc = useForm();
  const senha = useForm("senha");
  const confirSenha = useForm("senha");
  const [img, setImg] = React.useState({})

  const { userLogin, login } = React.useContext(UserContext);
  const { loading, error, request, setError } = useFetch();

  if (login) {
    return <Redirect to={{ pathname: "/" }} />;
  }

  function handleChangeImg({target}) {
    setImg({
      raw: target.files[0]
    })
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', img.raw);
    formData.append('name', name.value);
    formData.append('email', email.value);
    formData.append('celular', celular.value);
    formData.append('cargo', cargo.value);
    formData.append('sexo', sexo);
    formData.append('dataNasc', dataNasc.value);
    formData.append('senha', senha.value);

    if (confirSenha.value === senha.value) {
      const req = user
      .post("/cadastrar", formData);
      const response = await request(req);
      if(response) userLogin(email.value, senha.value);
    } else {
      setError("As senhas devem ser idênticas!")
    }
  }

  return (
    <S.Cadastro>
      <Head title="Cadastro"/>
      <S.Preview className="preview">
      </S.Preview>
      <div className="animeLeft forms">
        <h1 className="title">Cadastre-se</h1>
        <form onSubmit={handleSubmit}>
          <Input id="name" label="Nome" {...name} />
          <Input id="email" type="email" label="E-mail BandTec" {...email} />
          <Input id="celular" label="Celular" {...celular} />
          <Input id="cargo" label="Cargo" {...cargo} />
          <Select
            label="Sexo"
            options={["Feminino", "Masculino", "Outro"]}
            value={sexo}
            required
            setValue={setSexo}
          />
          <Input
            id="dataNasc"
            type="date"
            label="Data de Nascimento"
            {...dataNasc}
          />
          <Input id="senha" type="password" label="Senha" {...senha} />
          <Input
            id="confirmSenha"
            type="password"
            label="Confirme a senha"
            {...confirSenha}
          />
          <Input 
            id="ftperfil"
            type="file"
            label="Imagem de perfil"
            required
            onChange={handleChangeImg}
          />
          {loading ? (
            <Button disabled>Cadastrando</Button>
          ) : (
            <Button>Cadastrar</Button>
          )}
          <Error error={error} />
        </form>
      </div>
    </S.Cadastro>
  );
};

export default Cadastro;
