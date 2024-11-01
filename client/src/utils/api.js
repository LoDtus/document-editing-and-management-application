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

export function useSetAuthCredentials(username, password, remmemberMe, signinAt) {
    const dispatch = useDispatch();

    const setAuthCredentials = (username, password, rememberMe, signinAt) => {
        auth.username = username;
        auth.password = password;
        
        dispatch(authSlice.actions.setAuth({
            username,
            password,
            rememberMe,
            signinAt
        }));
    };
    return setAuthCredentials;
}

instance.interceptors.request.use(
    function (config) {
        const ignoreMethod = ["get"];
        const ignoreUrl = [
            '/users/',
        ];
        if (!ignoreMethod.includes(config.method) || !ignoreUrl.some(ignore => config.url.includes(ignore))) {
            config.auth = {
                username: auth.username,
                password: auth.password,
            };
        }
        return config;
    }, function (error) {
        return Promise.reject(error);
});

instance.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        const statusList = [400, 401, 403,]
        if (error.response && statusList.includes(error.response.status)) {
            return {data: null};
        }
        return Promise.reject(error);
    }
);
export default instance;