import axios from "axios";
import { config } from "./config";

const instanceAxios = axios.create({
    baseURL:`${config.DOMAIN_SERVER}`,
    withCredentials:true
})

export default instanceAxios