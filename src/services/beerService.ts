import apiClient from './api';

export const getBeers = () => apiClient.get('/beers');
export const getBeerById = (id: number) => apiClient.get(`/beers/${id}`);