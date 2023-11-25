import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProfileCard() {
  const [userDetails, setuserDetails] = useState<any>({});
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("customer_login_auth"));
    if (items) {
      setuserDetails(items.user);
    }
  }, []);

  console.log(userDetails);


  return (

    <>
      {/* <div className="col-md-12">
        <div className="card np-card head-teacher-card">
          <div className="head-teacher-top w-100">
            <div className="d-flex justify-content-end ">
              <Link to={"/edit-teacher-profile"}>
                <button className="btn">
                  <img src="/assets/images/edit.svg" />
                </button>
              </Link>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center ">
              <img
                src="/assets/noipunno/images/avatar/teacher.png"
                className="border rounded-circle p-3 bg-light"
                alt=""
              />
              <p className="mt-3 p-2">
                {(userDetails?.user_type_id == 1 && "শিক্ষক") ||
                  (userDetails?.user_type_id == 2 && "সহকারী শিক্ষক") ||
                  (userDetails?.user_type_id == 3 && "প্রধান শিক্ষক")}
              </p>
            </div>

          </div>
          <div className="head-teacher-bottom d-flex flex-column ">
            <div className="w-100 d-flex flex-column  align-items-center justify-content-center mt-3 ">
              <h5>{userDetails?.name}</h5>
              <small>{userDetails?.eiin}</small>
              <small>{userDetails?.email}</small>
              <small>{userDetails?.phone_no}</small>

            </div>
            <button className="m-3 profile-button">
              <Link to={"/teacher-profile"} className="text-decoration-none">

                <p className="pt-2">আমার প্রোফাইল</p>
              </Link>
            </button>
          </div>
        </div>
      </div> */}


      <div className="col-lg-2 col-md-6">
        <div className="card teacher-profile border-0">
          <div className="card-header border-0">
            <Link to={"/edit-teacher-profile"}>
              <div className="edit-icon">
                <img src="../../public/assets/teacherDashboard/images/dashboard/edit-2.svg" alt="" />

              </div>
            </Link>

            <div className="profile-img">
              <img src="../../public/assets/teacherDashboard/images/dashboard/60px.png" alt="" />

            </div>
            <div className="teacher-title">
              <h2>
                {/* প্রধান শিক্ষক */}
                {(userDetails?.user_type_id == 1 && "শিক্ষক") ||
                  (userDetails?.user_type_id == 2 && "সহকারী শিক্ষক") ||
                  (userDetails?.user_type_id == 3 && "প্রধান শিক্ষক")}
              </h2>
            </div>
            <div className="icon">
              <div className="single-icon">
                <img src="../../public/assets/teacherDashboard/images/dashboard/ico.svg" alt="" />
              </div>
              <div className="single-icon">
                <img src="../../public/assets/teacherDashboard/images/dashboard/message.svg" alt="" />
              </div>
              <div className="single-icon">
                <img src="../../public/assets/teacherDashboard/images/dashboard/moon.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="teacher-info">
            <h2 className="card-title">
              {/* আতাউর রহমান */}
              {userDetails?.name}
            </h2>
            <p className="card-text">
              {/* 95481468716473 */}
              {userDetails?.eiin}
            </p>
            {/* <p className="card-text">পাবনা জিলা স্কুল, পাবনা</p> */}
            <p className="card-text">School Name- No entry</p>

            <div className="button">
              <img src="../../public/assets/teacherDashboard/images/dashboard/eye.svg" alt="" />
              <Link to={"/teacher-profile"}>
                আমার প্রোফাইল
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
