import axios from 'axios';

const DP_Axios = axios.create({
    baseURL: "http://datpd"
});

export default DP_Axios;
