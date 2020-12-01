import React from 'react';
import { Button } from '../../components/Form/Button/Button';
import Loading from '../../components/Helper/Loading/Loading';
import NewPost from '../../components/NewPost/NewPost';
import { Post } from '../../components/Post/Post';
import api from '../../services/api';
import { UserContext } from '../../UserContext';
import * as S from "./style";
import Head from '../../components/Helper/Head';


const Profile = () => {
    const [posts, setPosts] = React.useState([]);
    const {dados} = React.useContext(UserContext);

    React.useEffect(() => {
        if (dados) loadPosts();
    }, [dados, loadPosts]);

    async function loadPosts() {
        const response = await api.post(`/${dados.idUsuario}`);
        setPosts(response.data);
    }
        return (
            <>
            {dados ? 
                <div className="container">
                    <Head title={dados.name} />
                <S.Perfil>
                    <img alt='' src={dados.ftperfil} />
                    <S.Infos>
                        <h1>{dados.name}</h1>
                        <h3><i className="fas fa-at"></i> {dados.email}</h3>
                        <h3><i className="fas fa-mobile-alt"></i> {dados.celular}</h3>
                        <h3><i className="far fa-building"></i> {dados.cargo}</h3>
                        <h3><i className="fas fa-calendar-alt"></i> {dados.dataNasc}</h3>
                    </S.Infos>
                    <S.DivButton>
                        <Button>Editar Perfil</Button>
                    </S.DivButton>
                </S.Perfil>
                <NewPost/>
                <div>
                    {posts.map(post => (
                        <Post key={post.id} post={post} />
                    ))}
                </div>
            </div> : <Loading />
            }
            </>
        )
}

export default Profile;