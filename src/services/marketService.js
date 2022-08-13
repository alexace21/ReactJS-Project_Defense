import * as request from './requester';
const baseUrl = 'http://localhost:3005';


export const create = (offerDetails) => request.post(`${baseUrl}/market`, offerDetails);
export const getAll = () => request.get(`${baseUrl}/market`);
export const del = (offerId) => request.del(`${baseUrl}/market/${offerId}`);
export const getOne = async(offerId) => await request.get(`${baseUrl}/market/${offerId}`);
export const udpateOne = async (offerId, data) => request.put(`${baseUrl}/market/${offerId}`, {data});
