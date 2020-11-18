import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';

import Upload from '../../components/Upload';
import FileList from '../../components/FileList'
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
// import NewPost from '../../components/NewPost';


export default class Main extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        // const [conteudo, setConteudo ] = React.useState('');
    }

    state = {
        posts: [],
        lconteudo: '',
        usuario: 1,
        uploadFile: []
    };


    componentDidMount() {
        this.loadPosts();
    }

    handleUpload = files => {
        console.log(files)
    }


    loadPosts = async () => {
        const res = await api.get('/');
        this.setState({ posts: res.data });
    }

    createPosts = async () => {
        if (this.state.lconteudo !== '') {
            await api.post('/', {
                conteudo: this.state.lconteudo,
                fkUsuario: this.state.usuario
            }).then(function (res) {
                console.log(res);
            }).catch(function (error) {
                console.log(error);
            });
            this.setState({ lconteudo: '' });
            this.componentDidMount();
        }
    }



    handleChange(event) {
        this.setState({ lconteudo: event.target.value });
    }


    render() {
        return (
            <div className="mainSession">
                <Header />
                {/* <NewPost setConteudo={this.setConteudo} /> */}
                <div className="newPost">
                    <div>
                        <h6>Matheus Juan</h6>
                        <form>
                            <label htmlFor=""></label>
                            <textarea placeholder="No que você está pensando?" onChange={this.handleChange} value={this.state.lconteudo}></textarea>
                            <Upload onUpload={this.handleUpload}/>
                            <FileList />
                        </form>
                        <button onClick={this.createPosts}>Criar Post</button>
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
                            <p>
                                {post.conteudo}
                                {post.image ? 
                                    <div className="post-image">
                                        <img alt='' src={post.imageUrl} />
                                    </div> : ''
                                }
                            </p>
                        </article>
                    ))}
                </div>
                <NavBar pagina="home" />
            </div>
        )
    }


}