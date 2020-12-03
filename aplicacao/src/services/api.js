import axios from 'axios';

const api = axios.create({baseURL: 'https://apibs.azurewebsites.net/post'});


export default api;
