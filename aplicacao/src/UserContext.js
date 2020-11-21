import React from 'react';
import user from './services/apiUser';

export const UserContext = React.createContext()

export const UserStorage = ({ children }) => {

    const [dados, setDados] = React.useState(null);
    const [login, setLogin] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [erro, setError] = React.useState(null);

    const userLogout = React.useCallback(async function userLogout() {
        setDados(null);
        setLogin(false);
        setError(null);
        setLoading(false);
        window.localStorage.removeItem('token');
    }, [])


    async function getUser(token) {
        const response = await user
            .get("/AUTH_JWT", {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
        setDados(await response.data);
        setLogin(true);
    }

    async function userLogin(email, password) {
        try {
            setError(null);
            setLoading(true);
            const tokenRes = await user
                .post("/autenticar", {
                    email: email,
                    senha: password,
                })
            if(tokenRes.status !== 200) throw new Error('Email e/ou senha inválido!')
            const { data } = tokenRes;
            window.localStorage.setItem('token', data);
            getUser(data);
        } catch (error) {
            console.log(error)
            setError(error.message);
            setLogin(false);
        }finally {
            setLoading(false);
        }

    }

    React.useEffect(() => {
        async function autoLogin() {
            const token = window.localStorage.getItem('token');
            if (token) {
                try {
                    setError(null);
                    setLoading(true);
                    const response = await user.get('/VALIDATE_JWT', {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    })
                    if (response.status !== 200) throw new Error('Token inválido');
                    getUser(token);
                } catch (error) {
                    userLogout();
                } finally {
                    setLoading(false);
                }
            } else {
                setLogin(false);
            }
        }
        autoLogin()
    }, [userLogout])

    return (
        <UserContext.Provider value={{ dados, userLogin, userLogout, erro, loading, login }}>
            {children}
        </UserContext.Provider>
    )
}
