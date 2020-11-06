import React, { Component } from 'react';
import './styles.css';
import user from '../../services/apiUser';
import history from '../../history';

import { Redirect } from 'react-router';


import Header from '../../components/Header';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.emailChange = this.emailChange.bind(this);
        this.senhaChange = this.senhaChange.bind(this);

    }

    state = {
        email: '',
        senha: ''
    }

    emailChange(event) {
        this.setState({ email: event.target.value });
    }

    senhaChange(event) {
        this.setState({ senha: event.target.value });
    }

    auth = async () => {
        await user.post('/autenticar', {
            email: this.state.email,
            senha: this.state.senha
        }).then(function (res) {
            localStorage.setItem('token', JSON.stringify(res));
            history.push('/')
            // return window.location.reload;
        }).catch(function (error) {
            console.log(error)
        })
    }


    render() {
        return (
            <div>
                <Header />
                <div className="mainLogin">
                    <i className="far fa-user-circle"></i><br />
                    <form action="/login" method="POST" id="formLogin">
                        <input onChange={this.emailChange} autofocus id="emailLogin" type="email" placeholder="E-mail" /><br />
                        <input onChange={this.senhaChange} type="password" placeholder="Senha" /><br />
                    </form>
                    <button onClick={this.auth}>Entrar</button><br /><br />
                    <a href="#">Esqueceu a senha?</a><br /><br />
                Não possui uma conta? <a href="#">Cadastre-se</a>
                </div>
            </div>

        )
    }

}    