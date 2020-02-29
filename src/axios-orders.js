import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://mcburger-reactjs-app.firebaseio.com'
});

export default instance;