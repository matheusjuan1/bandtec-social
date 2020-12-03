import axios from 'axios';

const user = axios.create({ baseURL: 'https://apibs.azurewebsites.net/usuario'});

export default user;