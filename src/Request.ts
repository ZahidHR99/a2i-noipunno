import axios from "axios";

const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

// axios.defaults.headers.post['Authorization'] = `Bearer ${localStorage.getItem('customer_login_auth')}`;

export function loginPassword(data:any) {
 const page_list = `${API_URL}/v1/login`;

 const options = {
  method: "POST",
  headers: { "content-type": "application/json" },
  data,
  url: page_list,
 };

 return axios(options);
}

