import axios from 'axios';
import authSlice from '../slices/authSlice';
import { useDispatch } from 'react-redux';

const instance = axios.create({
    baseURL: 'http://localhost:8080'
});

let auth = {
    username: '',
    password: ''
};

export function SetAuthCredentials(username, password, remmemberMe, signinAt) {
    auth.username = username;
    auth.password = password;
    
    const dispatch = useDispatch();
    dispatch(authSlice.actions.setAuth({
        username,
        password,
        remmemberMe,
        signinAt
    }));
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