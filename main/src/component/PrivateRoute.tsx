import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';


const PrivateRoute = ({ children, ...rest } :any) => {
    const auth :any = JSON.parse(localStorage.getItem("customer_login_auth"))
  ? JSON.parse(localStorage.getItem("customer_login_auth"))
  : JSON.parse(localStorage.getItem("otpCustomer"));

    return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;