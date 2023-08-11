import axios from 'axios';

// http://localhost:8080  'DEV'
// https://server-coder-app-production.up.railway.app  'PRO'
const clienteAxios = axios.create({
    baseURL: "http://localhost:8080"

});

export default clienteAxios;