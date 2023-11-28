import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const TeacherProfileCard = () => {
  const [userDetails, setuserDetails] = useState<any>({});
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("customer_login_auth"));
    if (items) {
      setuserDetails(items.user);
    }
  }, []);

  // console.log(userDetails);

  return (
    <div className="col-lg-2 col-md-6">
      <div className="card teacher-profile border-0">
        <div className="card-header border-0">
          <Link to={"/edit-teacher-profile"}>
            <div className="edit-icon">
              <img src="assets/teacherDashboard/images/dashboard/edit-2.svg" alt="" />
            </div>
          </Link>

          <div className="profile-img">
            <img src="assets/teacherDashboard/images/dashboard/60px.png" alt="" />

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
              <img src="assets/teacherDashboard/images/dashboard/ico.svg" alt="" />
            </div>
            <div className="single-icon">
              <img src="assets/teacherDashboard/images/dashboard/message.svg" alt="" />
            </div>
            <div className="single-icon">
              <img src="assets/teacherDashboard/images/dashboard/moon.svg" alt="" />
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
            <img src="assets/teacherDashboard/images/dashboard/eye.svg" alt="" />
            <Link to={"/teacher-profile"}>
              আমার প্রোফাইল
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherProfileCard;