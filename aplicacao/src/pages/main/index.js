import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';


export default class Main extends Component {

    constructor(props) {
        super(props);
    
        this.handleChange = this.handleChange.bind(this);
    }
    
    state = {
        posts: [],
        lconteudo: ''
    };

    componentDidMount() {
        this.loadPosts();
    }



    loadPosts = async () => {
        const response = await api.get('/');
        this.setState({ posts: response.data })
    }

    createPosts = async () => {
        if (this.state.lconteudo != '') {
           await api.post('/', {
            conteudo: this.state.lconteudo
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
        this.setState({ lconteudo: ''});
        this.componentDidMount(); 
        } 
    }



    handleChange(event) {
        this.setState({ lconteudo: event.target.value});
    }


    render() {
        return (
            <div className="mainSession">
                <div className="newPost">
                    <div>
                        <h6>Matheus Ferreira</h6>
                        <form id="novo">
                            <label for=""></label>
                            <textarea placeholder="No que você está pensando?" onChange={this.handleChange} value={this.state.lconteudo} id="conteudo"></textarea>
                        </form>
                        <button onClick={this.createPosts}>Criar Post</button>
                    </div>
                </div>
                <div className="posts-list">
                    {this.state.posts.map(post => (
                        <article key={post.id} className="post">
                            <div className="profile-post">
                                <img src="images/sem-perfil.jpg"></img>
                                <div className="profile-post-name">
                                    <h5>Matheus Ferreira</h5>
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