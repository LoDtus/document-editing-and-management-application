import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080'
});

let auth = {
    username: '',
    password: ''
};

export function setAuthCredentials(username, password) {
    auth.username = username;
    auth.password = password;
}

instance.interceptors.request.use(
    function (config) {
        config.auth = {
            // username: auth.username,
            // password: auth.password,
            username: 'phamthihoaithu',
            password: '567',
        };
        return config;
    }, function (error) {
        return Promise.reject(error);
});

instance.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        if (error.response && error.response.status === 400) {
            return {data: null};
        }
        return Promise.reject(error);
    }
);

export default instance;