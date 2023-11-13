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

  return (
    <div className="col-md-12">
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
              {(userDetails?.role == 1 && "শিক্ষক") ||
                (userDetails?.role == 2 && "সহকারী শিক্ষক") ||
                (userDetails?.role == 3 && "প্রধান শিক্ষক")}
            </p>
          </div>
          {/* <div className="head-teacher-top-icons d-flex justify-content-center align-items-center">
            <img src="/assets/noipunno/images/icons/star.svg" />
            <img src="/assets/noipunno/images/icons/message.svg" />
            <img src="/assets/noipunno/images/icons/moon.svg" />
          </div> */}
        </div>
        <div className="head-teacher-bottom d-flex flex-column ">
          <div className="w-100 d-flex flex-column  align-items-center justify-content-center mt-3 ">
            <h5>{userDetails?.name}</h5>
            <small>{userDetails?.eiin}</small>
            <small>TOAKUL BAZAR HIGH SCHOOL</small>
          </div>
          <button className="m-3 profile-button">
            <Link to={"/teacher-profile"} className="text-decoration-none">
              {/* <img src="/assets/noipunno/images/icons/eye.svg" /> */}
              <p className="pt-2">আমার প্রোফাইল</p>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
