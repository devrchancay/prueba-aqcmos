import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://prueba-ramon-chancay.now.sh/"
    : "http://localhost:3001/";
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
