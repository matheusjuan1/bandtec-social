import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';

export default class Profile extends Component {

    state = {
        posts: []
    }

    
    componentDidMount() {
        this.loadPosts();
    }

    loadPosts = async () => {
        const response = await api.get('/2');
        console.log(response);
        this.setState({ posts: response.data });
    }

    render() {
        return (
            <div className="mainSession">
                <div className="posts-list">
                    {this.state.posts.map(post => (
                        <article key={post.id} className="post">
                            <div className="profile-post">
                                <img src="images/sem-perfil.jpg"></img>
                                <div className="profile-post-name">
                                    <h5>{post.usuario.firstName} {post.usuario.lastName}</h5>
                                    <h6>{post.createdAt}</h6>
                                </div>
                            </div>
                            <p>{post.conteudo}</p>
                        </article>
                    ))}
                </div>
            </div>
        )
    }
}