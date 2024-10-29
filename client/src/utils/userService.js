import instance from './api';

export const getAllUsers = async () => {
    const response = await instance.get(`/users`)
    return response.data;
}

export const getUserById = async (userId) => {
    const response = await instance.get(`/users/${userId}`)
    return response.data;
}

export const addUser = async () => {
    
}

export const updateUser = async () => {

}

export const deleteUserById = async () => {
    
}