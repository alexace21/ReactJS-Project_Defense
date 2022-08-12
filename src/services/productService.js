import * as request from './requester';
const baseUrl = 'http://localhost:3005';

export const create = (name, category, price, image, summary, owner) => request.post(`${baseUrl}/create`, {name, category, price, image, summary, owner});
export const getOne = async(productId) => await request.get(`${baseUrl}/product-details/${productId}`);
export const getOneDetailed = async(ownerId) => await request.get(`${baseUrl}/product-details/${productId}`);
export const udpateOne = async (productId, data) => request.put(`${baseUrl}/product-details/${productId}`, {data});