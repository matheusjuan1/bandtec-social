import React from 'react';
import { Button } from '../../components/Form/Button/Button';
import { Post } from '../../components/Post/Post';
import api from '../../services/api';
import { UserContext } from '../../UserContext';
import './styles.css';


const Profile = () => {
    const [posts, setPosts] = React.useState([]);
    const {dados} = React.useContext(UserContext);

    React.useEffect(() => {
        if (dados) loadPosts();
    }, [dados]);

    async function loadPosts() {
        const response = await api.post(`/${dados.idUsuario}`);
        setPosts(response.data);
    }
        return (
            <>
            {dados ? 
                <div className="container">
                <div className="perfil">
                    <img alt='' src={dados.ftperfil} />
                    <div>
                        <h3>{dados.name}</h3>
                        <Button>Editar Perfil</Button>
                        <h5>{dados.email}</h5>
                        <h5>{dados.celular}</h5>
                        <h5>{dados.cargo}</h5>
                        <h5>{dados.dataNasc}</h5>
                    </div>
                </div>
                <div className="posts-list">
                    {posts.map(post => (
                        <Post key={post.id} post={post} />
                    ))}
                </div>
            </div> : <p>Carregando...</p>
            }
            </>
        )
}

export default Profile;