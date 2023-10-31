import React, { useState } from 'react';
import { loginPassword } from '../Request';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from "../../public/assets/images/noipunno-new-logo.svg";


export default function Login() {
  const navigate = useNavigate();
  const [error, seterror] = useState("");


  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const datas = new FormData(event.target);

    const { data }: any = await loginPassword(datas);

    // console.log("data", data.status);

    if (data?.status === true) {
      // console.log("user Details", data?.data.user)
      const token = data?.data?.access_token;
      localStorage.setItem('customer_login_auth', JSON.stringify(data?.data))
      localStorage.setItem('token', token)
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      // navigate("/");
      window.location.assign("/");
    } else {
      seterror("Wrong Crediantial")
    }

  }


}
