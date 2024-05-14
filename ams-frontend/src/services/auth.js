// sumit Shamra

import axios from 'axios'
const BASE_URL = 'http://localhost:8000'

async function handleLogin(employee){
    try {
        const response = await axios.post(`${BASE_URL}/login`, employee);
        console.log("auth service", response.data);
        return response;
      } catch (error) {
          console.log("auth service", error);
          return error;
      }
}
async function handleRegister(employee){
    try {
        const response = await axios.post(`${BASE_URL}/register`, employee);
        console.log("auth service", response.data);
        return response;
      } catch (error) {
          console.log("auth service", error);
          return error;
      }
}


export default {
    handleLogin,
    handleRegister
}