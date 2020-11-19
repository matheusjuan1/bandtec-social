import React from 'react';
import user from './services/apiUser';

export const UserContext = React.createContext()

export const UserStorage = ({ children }) => {

    const [dados, setDados ] = React.useState(null);
    const [login, setLogin ] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [erro, setError] = React.useState(null);

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
        const tokenRes = await user
          .post("/autenticar", {
            email: email,
            senha: password, 
          })
        const {data} = await tokenRes; 
        window.localStorage.setItem('token', data);
        getUser(data);
    }

    return (
        <UserContext.Provider value={{dados, userLogin}}>
            {children}
        </UserContext.Provider>
    )
}
