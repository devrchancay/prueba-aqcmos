import axios from "axios";

const baseURL = "http://pruebas.aquicreamos.com/";
const axiosConfig = { baseURL };

const customAxios = axios.create(axiosConfig);

//creo que esto no va a ser necesario;
// customAxios.interceptors.response.use(
//   response => {
//     return response;
//   },
//   error => {
//     if (error.response) {
//       return Promise.reject(error.reject);
//     }
//   }
// );

export default customAxios;
