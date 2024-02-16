import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";

const axiosRequest = axios.create({
  baseURL: process.env.API_URL,
});

axiosRequest.interceptors.request.use(
    async (config) => {
      if(config.url !== '/users/login'){
        
        const token = await AsyncStorage.getItem("userToken");
        if (token && token !== '') {
          config.headers.Authorization = `Bearer ${token}`;
          if (config.headers['Content-Type'] === undefined) {
            config.headers['Content-Type'] = 'application/json'
          }
        }
      }
     
      return config;
    }
);

axiosRequest.interceptors.response.use(
  response => {
      return response
}, error => {
    throw error;
})

export default axiosRequest;
