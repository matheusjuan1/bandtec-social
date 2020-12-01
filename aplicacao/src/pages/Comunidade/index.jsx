import React from 'react'
import { CardUser } from '../../components/CardUser/CardUser';
import user from '../../services/apiUser';
import {Input} from '../../components/Form/Input/Input';
import * as S from './style';
import Head from '../../components/Helper/Head';

const Comunidade = () => {
    const [users, setUsers] = React.useState([]);
    const [search, setSearch] = React.useState(null);
    const [users2, setUsers2] = React.useState([]);

    React.useEffect(() => {
        async function fetchData() {
            await user.get('/').then((res) => setUsers(res.data))
        }
        fetchData()
    }, [])

    React.useEffect(() => {
        if (search !== null) {
            if (search !== "") {
                setUsers2(users.filter(user => (user.name.toLowerCase()).includes(search.toLowerCase())))
            } 
        }      
    }, [search, users])

    return (
        <section className="container animeTop">
            <Head title="Comunidade"/>
            <S.HeaderCom>
                <h1 className="title">Comunidade BandTec</h1>
                <S.Barra>
                    <i className="fas fa-search"></i>
                    <Input placeholder="Buscar" onChange={({target}) => setSearch(target.value)} />
                </S.Barra>
            </S.HeaderCom>
            <S.Users>
                {users && users2.length < 1 && users.map(user => 
                    <CardUser key={user.id} user={user} /> 
                )}
                {users2.length > 0 && users2.map(user =>  
                    <CardUser key={user.id} user={user} /> 
                )}
            </S.Users> 
            
        </section>
    )
}

export default Comunidade;