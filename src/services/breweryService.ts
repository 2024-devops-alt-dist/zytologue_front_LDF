import apiClient from "./api";

export const getBreweries = () => apiClient.get("/breweries");
export const getBreweryById = (id: number) => apiClient.get(`/breweries/${id}`);