import Breadcumbtitle from "../layout/Breadcumb";
import { Image, } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import style from './Home.style.module.css';
import techerAvatar from "../../public/assets/images/teacher.jpeg"


const AmarProfile = () => {
  const [userDetails, setuserDetails] = useState<any>({});


  useEffect(() => {
    const get_loacl_storage_data = JSON.parse(localStorage.getItem("customer_login_auth"));
    if (get_loacl_storage_data) {
      setuserDetails(get_loacl_storage_data.user);
    }
  }, []);

  console.log("userDetails", userDetails);

  return (
    <>
      <Breadcumbtitle title={"আমার প্রোফাইল"} />
      <div className="container  my-2">
        <div className="d-flex align-items-center">
          <div className="card shadow-lg border-0 w-100 rounded">
            <ul className="nav d-flex mt-2 justify-content-around py-1">
              <li className={`nav-item`}>
                <h4> আমার প্রোফাইল  </h4>
              </li>
            </ul>

            <div className="tab-content" id="tabContent" style={{ backgroundColor: "#E4FEFF" }} >
              <div className="tab-pane fade show active" id="expertness" role="tabpanel" aria-labelledby="expertness-tab" >
                <div className="rounded my-2 my-lg-3 w-xl-75 w-lg-75 w-md-50 mx-auto p-2">
                  <div id={style.view_containser} className="p-3 rounded bg-white">
                    <div className="list-group">
                      <Image className="list-group-item" src={techerAvatar} alt="" fluid />
                    </div>
                    <div className="m-0">
                      <ul className="list-group m-0">
                        <li className="list-group-item">
                          <strong>নামঃ </strong> {userDetails?.name}
                        </li>
                        <li className="list-group-item">
                          <strong>পদবীঃ </strong> {userDetails?.user_type?.name}
                        </li>
                        <li className="list-group-item">
                          <strong>ইউজার আইডিঃ </strong> {userDetails?.eiin}
                        </li>
                        <li className="list-group-item">
                          <strong>ইমেইলঃ </strong> {userDetails?.email}
                        </li>
                        <li className="list-group-item">
                          <strong>মোবাইল নাম্বারঃ </strong> {userDetails?.phone_no}
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="d-flex justify-content-end align-items-center pt-3 pe-5">
                    <Link to={'/edit-teacher-profile'}>
                      <button type="submit" className="btn btn-primay px-3" style={{ backgroundColor: "#428F92", color: "#fff", }} > প্রোফাইল হালনাগাদ {" "}
                        <MdOutlineKeyboardArrowRight className="fs-3" style={{ marginTop: "-0.3rem", }} />{" "} </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>


    </>
  );
};

export default AmarProfile;