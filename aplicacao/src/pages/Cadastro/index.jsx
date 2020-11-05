import React, { Component } from 'react';
import './styles.css';
import user from '../../services/apiUser';

import Header from '../../components/Header';

export default class Cadastro extends Component {
    constructor(props) {
        super(props);
    }

    register = async () => {
        await user.post('/cadastrar', {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            celular: this.state.celuar,
            cargo: this.state.cargo,
            sexo: this.state.sexo,
            dataNasc: this.state.dataNasc,
            senha: this.state.senha
        }).then(function (res) {
            console.log("Deu certo");
        }).catch(function (erro) {
            console.log(erro)
        })
    }

    check() {
        //
    }

    render() {
        return (
            <div>
                <Header />
                <div className="camposCadastro">
                    <h1>Bem-vindo(a)!</h1>
                    <form id="cadastro" ation="/cadasctro" method="POST">
                        <label for="">Primeiro Nome:</label><br />
                        <input type="text" name="firstName" id="priNome" /><br />
                        <label for="">Segundo Nome:</label><br />
                        <input type="text" name="lastName" id="segNome" /><br />
                        <label for="">E-mail BandTec:</label><br />
                        <input type="email" name="email" id="email" /><br />
                        <label for="">Celular:</label><br />
                        <input name="celular" type="text" /><br />
                        <label for="" >Cargo:</label><br />
                        <input type="text" name="cargo" id="cargo" /><br />
                        <label for="">Sexo:</label><br />
                        <select name="sexo" id="">
                            <option value="feminino">Feminino</option>
                            <option value="masculino">Masculino</option>
                            <option value="outro">Outro</option>
                        </select><br />
                        <label for="">Data de Nascimento:</label><br />
                        <input name="dataNasc" id="dataNasc" type="date" /><br />
                        <label for="">Senha:</label><br />
                        <input type="text" name="senha" /><br />
                        <label for="">Confirme sua senha:</label><br />
                        <input type="text" name="confirSenha" /><br />
                    </form>
                    <button>Cadastrar</button>
                </div>
            </div>
        )
    }
}