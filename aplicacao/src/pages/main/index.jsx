import React from 'react';
import api from '../../services/api';
import { UserContext } from "../../UserContext";

import './styles.css';

import NavBar from '../../components/NavBar';
// import { Button } from '../../components/Form/Button/Button';
import NewPost from '../../components/NewPost';


const Main = () => {

    const {dados} = React.useContext(UserContext);
    const [posts, setPosts] = React.useState([]);
    const [post, setPost] = React.useState('');


    // uploadFile: []

    async function loadPosts() {
        const res = await api.get('/');
        setPosts(res.data);
    }

    React.useEffect(() => {
        loadPosts();
    }, [])

    // handleUpload = files => {
    //     console.log(files)
    // }


    async function createPost(event) {
        event.preventDefault();
        if (post !== '') {
            await api.post('/', {
                conteudo: post,
                fkUsuario: dados.idUsuario
            }).then(function (res) {
                console.log(res);
            }).catch(function (error) {
                console.log(error);
            });
            setPost('');
            loadPosts();
        }
    }

        return (
            <div className="mainSession">
                <NewPost setPost={setPost} post={post} dados={dados} createPost={createPost} />
                <div className="posts-list animeTop">
                    {posts.map(post => (
                        <article key={post.id} className="post">
                            <div className="profile-post">
                                <img alt='' src={post.usuario.ftperfil}></img>
                                <div className="profile-post-name">
                                    <h5>{post.usuario.name}</h5>
                                    <h6>{post.createdAt}</h6>
                                </div>
                            </div>
                            <p>
                                {post.conteudo}
                                {post.image && 
                                    <div className="post-image">
                                        <img alt='' src={post.imageUrl} />
                                    </div>
                                }
                            </p>
                        </article>
                    ))}
                </div>
                <NavBar pagina="home" />
            </div>
        )
}

export default Main;