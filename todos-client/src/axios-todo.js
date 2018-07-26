import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://todos-bbc0e.firebaseio.com'
});

export default instance;