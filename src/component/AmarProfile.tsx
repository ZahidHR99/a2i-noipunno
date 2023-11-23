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



  return (
    <section className="mx-auto">
      <Breadcumbtitle title={"আমার প্রোফাইল"} />
      <div className="container  my-5 mx-auto">
        <div className="d-flex align-items-center">
          <div className="card shadow-sm border-1 w-100 rounded">
            <ul className="nav d-flex mt-2 justify-content-around py-1">
              <li className={`nav-item`}>
                <h4> আমার প্রোফাইল  </h4>
              </li>
            </ul>

            <div className="container" style={{ backgroundColor: "#E4FEFF" }}>
              <div className="w-75 text-sm-center text-md-start mx-auto ">
                <img src={techerAvatar} loading="lazy" width="150rem" className="img-fluid my-3 border  border-info" />
              </div>

              <table className="table w-75 text-sm mx-auto">
                <tbody className="rounded border border-ligh">
                  <tr className="border-1 rounded">
                    <td className="">
                      <strong>নামঃ</strong>
                    </td>
                    <td className="">{userDetails?.name}</td>
                  </tr>
                  <tr className="border-1">
                    <td className="">
                      <strong>ইউজার আইডিঃ</strong>
                    </td>
                    <td className="">{userDetails?.eiin}</td>
                  </tr>
                  <tr className="border-1">
                    <td className="">
                      <strong>পদবীঃ</strong>
                    </td>
                    <td className="">{userDetails?.user_type?.name}</td>
                  </tr>

                  <tr className="border-1">
                    <td className="">
                      <strong>ইমেইলঃ</strong>
                    </td>
                    <td className="">{userDetails?.email}</td>
                  </tr>
                  <tr className="border-1">
                    <td className="p-1 v">
                      <strong>মোবাইল নাম্বারঃ</strong>
                    </td>
                    <td className="">{userDetails?.phone_no}</td>
                  </tr>

                </tbody>
              </table>
              <div className="d-flex justify-content-end align-items-center py-3 pe-5">
                <Link to={'/edit-teacher-profile'}>
                  <button type="submit" className="btn btn-primay px-3" style={{ backgroundColor: "#428F92", color: "#fff", }} > প্রোফাইল হালনাগাদ {" "}
                    <MdOutlineKeyboardArrowRight className="fs-3" style={{ marginTop: "-0.3rem", }} />{" "} </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmarProfile;