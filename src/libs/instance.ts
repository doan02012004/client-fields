import axios from "axios";
import { config } from "./config";
import { getNewAccessToken } from "./data/auth";
import { jwtDecode } from "jwt-decode";
import dayjs from 'dayjs';

const instanceAxios = axios.create({
    baseURL: `${config.DOMAIN_SERVER}`,
    withCredentials: true
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
instanceAxios.interceptors.request.use(async (config) => {
    const accessToken = JSON.parse(localStorage.getItem('access_token') || 'null');
    console.log(accessToken)
    if (!accessToken) return config;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const decoded = jwtDecode(accessToken) as any;
    const isExpired = dayjs.unix(decoded.exp).diff(dayjs()) < 30000; // dưới 30 giây thì refresh token 
  
    if (isExpired) {
      try {
        const data = await getNewAccessToken()
        localStorage.setItem('access_token', JSON.stringify(data.accessToken))
  
        config.headers.Authorization = `Bearer ${data.accessToken}`;
      } catch (error) {
        console.error('Refresh Token Failed', error);
        localStorage.clear();
        // window.location.href = '/auth/login'; // redirect to login
      }
    } else {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
  
    return config;
  }, (error) => Promise.reject(error));
  

instanceAxios.interceptors.response.use(function (response) {
    return response;
}, async function (error) {
    const originalRequest = error.config;
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
            // gọi api để refeshToken
            const data = await getNewAccessToken()
            localStorage.setItem('access_token', JSON.stringify(data.accessToken))
            // // Cập nhật accessToken mới vào localStorage hoặc state
            instanceAxios.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;
            // Cập nhật lại accessToken trong header của request cũ và thử lại request
            originalRequest.headers['Authorization'] = `Bearer ${data.accessToken}`;
            return instanceAxios(originalRequest);
        } catch (error) {
            console.log('error authentication', error)
            localStorage.removeItem('access_token')
            localStorage.removeItem('user')
            // window.location.href = '/auth/login';
        }
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default instanceAxios