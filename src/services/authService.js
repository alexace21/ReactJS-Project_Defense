import * as request from './requester';

const baseUrl = 'http://localhost:3005';

export const login = (email, password) => request.post(`${baseUrl}/login`, { email, password });

export const logout = async (accessToken) => {
    try {
        const response = await fetch(`${baseUrl}/logout`, {
            headers: {
                'X-Authorization': accessToken
            }
        });

        return response;
    } catch (error) {
        console.log(error);
    }
};

export const register = (email, password) => request.post(`${baseUrl}/register`, { email, password });

export const updateUser = (userId, data) => request.put(`${baseUrl}/users/${userId}`, {data});

export const getAll = async() => await request.get(`${baseUrl}/users`);

export const getOne = async(userId) => await request.get(`${baseUrl}/users/${userId}`);

