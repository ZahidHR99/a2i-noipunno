import axios from "axios";

const API_URL = import.meta.env.VITE_REACT_APP_API_URL;


export function loginPassword(data) {
 const page_list = `${API_URL}/v1/login`;

 const options = {
  method: "POST",
  headers: { "content-type": "application/x-www-form-urlencoded" },
  data,
  url: page_list,
 };

 return axios(options);
}