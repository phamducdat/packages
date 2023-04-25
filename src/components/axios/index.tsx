import axios from 'axios';

const customAxios = axios.create({
    baseURL: "http://datpd"
});

export default customAxios;
