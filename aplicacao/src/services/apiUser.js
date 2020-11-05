import axios from 'axios';

const user = axios.create({ baseURL: 'http://localhost:3030/usuario'});

export default user;