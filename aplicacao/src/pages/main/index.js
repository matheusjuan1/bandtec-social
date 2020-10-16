import React, { Component } from 'react';
import api from '../../services/api';


export default class Main extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        this.loadPosts();
    }

    loadPosts = async () => {
        const response = await api.get('/');

        console.log(response)
    }


    render() {
        return <h1>Contagem de posts: {this.state.posts.length}</h1>
    }
}