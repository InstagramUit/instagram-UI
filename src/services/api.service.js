// api/axiosClient.js
import axios from "axios";
import { parse, stringify } from 'qs'
// Set up default config for http requests here

// Please have a look at here `https://github.com/axios/axios#request-config` for the full list of configs


const axiosClient = axios.create({
    baseURL: global.config.API,
    headers: {
        "content-type": "application/json",
    },
    paramsSerializer: {
        encode: parse,
        serialize: stringify,
    },
});
axiosClient.interceptors.request.use(async (config) => {
    // Handle token here ...
    return config;
});
axiosClient.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data;
        }
        return response;
    },
    (error) => {
        return Promise.reject(error)
    }
);

export default axiosClient;
