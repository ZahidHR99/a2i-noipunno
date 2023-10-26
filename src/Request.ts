import axios from "axios";

const API_URL = import.meta.env.VITE_REACT_APP_API_URL;


export function test(data:any) {
    const page_list = `${API_URL}/user/customerLogin`;
  
    const options = {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data,
      url: page_list,
    };
  
    return axios(options);
  }