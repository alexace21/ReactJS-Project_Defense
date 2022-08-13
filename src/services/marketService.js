import * as request from './requester';
const baseUrl = 'http://localhost:3005';


export const create = (offerDetails) => request.post(`${baseUrl}/market`, offerDetails);
export const getAll = () => request.get(`${baseUrl}/market`);
export const del = (offerId) => request.post(`${baseUrl}/market/${offerId}`, offerId);