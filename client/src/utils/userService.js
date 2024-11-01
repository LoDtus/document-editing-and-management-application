import instance from './api';

export const getAllUsers = async () => {
    const response = await instance.get(`/users`)
    return response.data;
}

export const chechExists = async (userId) => {
    const response = await instance.get(`/users/check/${userId}`);
    return response.data;
}

export const checkSignIn = async (userId, password) => {
    const response = await instance.get(`/users/${userId}/${password}`);
    return response.data;
}

export const addUser = async (userId, password) => {
    const response = await instance.post(`/users`, {
        "user_id": userId,
        "user_password": `{noop}${password}`,
        "active": 1
    });
    return response.status === 200;
}

export const updateUser = async (userId, password) => {
    const response = await instance.put(`/users`, {
        "user_id": userId,
        "user_password": `{noop}${password}`,
        "active": 1
    });
    return response.status === 200;
}

export const deleteUserById = async (userId) => {
    const response = await instance.delete(`/users/${userId}`);
    return response.data;
}