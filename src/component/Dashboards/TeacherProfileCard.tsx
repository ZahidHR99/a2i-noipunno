import { useEffect, useState } from "react";
import '../../assets/dashboard_materials/css/dashboard.css';
import { Link } from "react-router-dom";
import editIcon from '../../assets/dashboard_materials/images/dashboard/edit-2.svg';
import teacherProfileImg from '../../assets/dashboard_materials/images/dashboard/60px.png';
import starIcon from '../../assets/dashboard_materials/images/dashboard/ico.svg';
import messageIcon from '../../assets/dashboard_materials/images/dashboard/message.svg';
import darkMoodIcon from '../../assets/dashboard_materials/images/dashboard/moon.svg';
import eyeIcon from '../../assets/dashboard_materials/images/dashboard/eye.svg';


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
              <img src={editIcon} alt="edit-icon" />
            </div>
          </Link>

          <div className="profile-img">
            <img src={teacherProfileImg} alt="teacher-profile" />

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
              <img src={starIcon} alt="starIcon" />
            </div>
            <div className="single-icon">
              <img src={messageIcon} alt="messageIcon" />
            </div>
            <div className="single-icon">
              <img src={darkMoodIcon} alt="darkMoodIcon" />
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
            <img src={eyeIcon} alt="eyeIcon" />
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