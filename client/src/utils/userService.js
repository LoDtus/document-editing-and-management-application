import instance from './api';

export const getAllUsers = async () => {
    const response = await instance.get(`/users`)
    return response.data;
}