import { useState } from 'react';
import { loginPassword } from '../Request';
import axios from 'axios';
import logo from "../../public/assets/images/noipunno-new-logo.svg";
import nav_bottom_logo from "../../public/assets/images/nav_bottom_logo.png";
import { Link } from 'react-router-dom';
import './Home.style.module.css'
import { Helmet } from "react-helmet";


export default function Login() {
  const [error, seterror] = useState("");
  const [showPassword, setShowPassword] = useState(false);


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
      window.location.assign("/");
    } else {
      seterror("Wrong Crediantial")
    }
  }

  const [value, setValue] = useState('');

  const handleChange = event => {
    const result = event.target.value.replace(/\D/g, '');

    setValue(result);
  };



  return (
    <>
      <Helmet>
        <title>নৈপুণ্য - লগ ইন</title>
      </Helmet>
      <div className="login-bg">
        <div className="container">
          <div >
            <div className="row d-flex justify-content-center align-items-center login-container">
              <div className="col-md-7 cols-sm-12">
                <img src={logo} alt="logo" className='mb-3' width={100} />
                <p className="teacher-login-title">বিষয়ভিত্তিক মূল্যায়ন অ্যাপ্লিকেশন</p>
                <p className="np-login-subtitle">অনুগ্রহ করে আপনার অ্যাকাউন্টে সাইন ইন করুন এবং অ্যাডভেঞ্চার শুরু করুন</p>
              </div>
              <div className="col-md-5 cols-sm-12">
                <div className="card login-form-card">
                  {
                    error && <p className="text-center text-danger">{error}</p>
                  }

                  <p className="teacher-login-title text-center">লগ ইন</p>
                  {/* Form Start */}
                  <form noValidate onSubmit={handleSubmit} >


                    <div className="form-group">
                      <label htmlFor="user_type_id" className="login-field-title"> ইউজার টাইপ</label>
                      <div className="input-group">
                        <select className="form-control np-login-form-field_" name="user_type_id" required>
                          <option value={1} selected>শিক্ষক</option>
                          {/* <option value={2}>শিক্ষার্থী</option> */}
                          {/* <option value="3">বিদ্যালয়</option> */}
                          {/* <option value={4}>ব্যবহারকারী</option> */}
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="caid" className="login-field-title"> ইউজার আইডি </label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span>  <img src="/assets/images/user-square.svg" className="np-login-field-icon" alt="logo" /></span>
                        </div>

                        <input onChange={handleChange}
                          className="form-control np-login-form-field"
                          type="text"
                          value={value}
                          required
                          autoComplete="off"
                          placeholder="আপনার ইউজার আইডি দিন"
                          name="caid"
                          id="caid"

                        />

                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="pin" className="login-field-title"> পিন নম্বর </label>
                      <div className="input-group"><img src="/assets/images/lock.svg" className="np-login-field-icon" alt="logo" />
                        <input
                          type={showPassword ? "text" : "password"}
                          id="pin"
                          className="form-control np-login-form-field no-spinners"
                          name="password"
                          required
                          placeholder="আপনার পাসওয়ার্ড দিন"
                        />
                        <div className="input-group-append password-toggle">
                          <span>
                            {
                              showPassword ?
                                <i onClick={() => setShowPassword(!showPassword)} id="password-toggle_2" className="fa fa-eye" /> :
                                <i onClick={() => setShowPassword(!showPassword)} id="password-toggle" className="fa fa-eye-slash" />
                            }
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="form-group form-check my-4">
                      <input type="checkbox" className="form-check-input np-login-checkbox" id="remember" name="remember" />
                      <label className="form-check-label np-login-checbox-text" htmlFor="remember">পিন সংরক্ষণ করুণ</label>
                      <p className="mb-1">
                        <Link to={"https://accounts.project-ca.com/password/reset"} className="link-success" style={{ color: '#428F92' }}>
                          পাসওয়ার্ড ভুলে গেছেন?. ক্লিক করুন
                        </Link>
                      </p>
                    </div>

                    <button type="submit" className="btn login-button text-white"> লগ ইন করুন</button>
                  </form>


                  {/* Form End */}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="switch-container">
            <input type="checkbox" id="switch" className="language-switch" />
            <label htmlFor="switch" className="switch-label">
              <small className="login-language">আপনি কি বাংলাকে আপনার ডিফল্ট ভাষা হিসেবে রাখতে চান ?</small>
              <div className="switch-rail">
                <div className="switch-slider" />
              </div>
            </label>
          </div> */}

          {/* <div className="switch-container">
            <div className='d-flex justify-content-between align-content-center'>
              <div className=''>
                <input type="checkbox" id="switch" className="language-switch" />
                <label htmlFor="switch" className="switch-label d-flex justify-content-start align-items-center gap-4">
                  <small className="login-language">© ২০২৩ সর্বস্বত্ব সংরক্ষিত </small>
                  <small className="login-language">গোপনীয়তা নীতি </small>
                  <small className="login-language">সাহায্য </small>
                  <small className="login-language">কোন প্রশ্ন? </small>
                </label>
              </div>
              <div>
                <img src={nav_bottom_logo} width={217} alt="logos" />
              </div>
            </div>
          </div> */}
        </div>
        <div className="switch-container mt-5">
          <div className='d-flex justify-content-between align-content-center'>
            <div className=''>
              <input type="checkbox" id="switch" className="language-switch" />
              <label htmlFor="switch" className="switch-label d-flex justify-content-start align-items-center gap-4">
                <small className="login-language">© ২০২৩ সর্বস্বত্ব সংরক্ষিত </small>
                <small className="login-language">গোপনীয়তা নীতি </small>
                <small className="login-language">সাহায্য </small>
                <small className="login-language">কোন প্রশ্ন? </small>
              </label>
            </div>
            <div>
              <img src={nav_bottom_logo} width={217} alt="logos" />
            </div>
          </div>
        </div>
      </div>
    </>
  )

}
