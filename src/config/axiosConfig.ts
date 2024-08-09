import axios, { AxiosInstance } from "axios";

const apiCall: AxiosInstance = axios.create({
    baseURL: 'https://swapi.dev/api/'
})

export default apiCall;