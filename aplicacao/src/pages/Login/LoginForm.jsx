import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Button } from '../../components/Form/Button/Button';
import { Input } from '../../components/Form/Input/Input';
import useForm from '../../hooks/useForm';
import { UserContext } from '../../UserContext'; 

function LoginForm() {
    const email = useForm('email');
    const password = useForm();

    const {userLogin} = React.useContext(UserContext);
    
    // const history = useHistory();

    function handleSubmit(event) {
        event.preventDefault();
        if (email.validate() && password.validate()) {
           userLogin(email.value, password.value);
        }
      }

    return (
        <section>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <Input id="email" label="Email Bandtec"  {...email}/>
                <Input id="senha" type="password" label="Senha"  {...password}/>
                <Button>Entrar</Button>
            </form>
            <Link to="/login/criar">Cadastro</Link>
        </section>
    )
}

export default LoginForm;
