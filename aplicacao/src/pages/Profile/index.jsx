import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';

import NavBar from '../../components/NavBar';

export default class Profile extends Component {

    state = {
        posts: [],
        usuario: []
    }


    componentDidMount() {
        this.loadPosts();
    }

    loadPosts = async () => {
        const response = await api.post('/1');
        this.setState({
            posts: response.data,
            usuario: response.data[0].usuario
        });
    }

    render() {
        return (
            <div className="mainSession">
                <div className="perfil">
                    <img alt='' src="images/sem-perfil.jpg" />
                    <div>
                        <h3>{this.state.usuario.firstName} {this.state.usuario.lastName}</h3>
                        <button>Editar Perfil</button>
                        <h5>{this.state.usuario.email}</h5>
                        <h5>{this.state.usuario.celular}</h5>
                        <h5>{this.state.usuario.cargo}</h5>
                        <h5>{this.state.usuario.dataNasc}</h5>
                    </div>
                </div>
                <div className="posts-list">
                    {this.state.posts.map(post => (
                        <article key={post.id} className="post">
                            <div className="profile-post">
                                <img alt='' src="images/sem-perfil.jpg"></img>
                                <div className="profile-post-name">
                                    <h5>{post.usuario.firstName} {post.usuario.lastName}</h5>
                                    <h6>{post.createdAt}</h6>
                                </div>
                            </div>
                            <p>{post.conteudo}</p>
                        </article>
                    ))}
                </div>
                <NavBar pagina="perfil"/>
            </div>
        )
    }
}