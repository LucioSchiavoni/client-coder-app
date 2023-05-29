import axios from 'axios';


const clienteAxios = axios.create({
    baseURL: "https://server-coder-app-production.up.railway.app/"

});

export default clienteAxios;