import Breadcumbtitle from "../layout/Breadcumb";
import "./Home.style.module.css"
import teacherImg from "../../public/assets/noipunno/images/avatar/teacher.png";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const MyProfile = () => {
  const [userDetails, setuserDetails] = useState<any>({});


  useEffect(() => {
    const get_loacl_storage_data = JSON.parse(localStorage.getItem("customer_login_auth"));
    if (get_loacl_storage_data) {
      setuserDetails(get_loacl_storage_data.user);
    }
  }, []);

  // console.log("userDetails", userDetails);

  return (
    <>
      <Breadcumbtitle title={"আমার প্রোফাইল"} />

      <div className="container rounded bg-white mt-5 mb-5 bg-body-secondary">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <Image className="w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPiOzT5S40iGQK4a5dlk5GoDetf2vVByrepiK4LLt8HGp_Yp0TPZfSDcjnvsGTvsUkjWI&usqp=CAU" alt="" fluid />
              {/* <span className="font-weight-bold">Edogaru</span><span className="text-black-50">edogaru@mail.com.my</span><span> </span> */}
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">নামঃ আরাফাত {userDetails.name}</h4>
              </div>

              <div className="row mt-2 ">
                <h6 className="col-md-12 d-flex gap-1">
                  <label >ইমেইলঃ </label>
                  <label>shakhawat@gmail.com</label>
                </h6>
              </div>

              <div className="row mt-2 ">
                <h6 className="col-md-12 d-flex gap-1">
                  <label > ইউজার আইডিঃ </label>
                  <label>০১৫১৭১৮৯৪৮০</label>
                </h6>
              </div>
              <div className="row mt-2 ">
                <h6 className="col-md-12 d-flex gap-1">
                  <label > মোবাইলঃ</label>
                  <label>০১৫১৭১৮৯৪৮০</label>
                </h6>
              </div>


              <div className="mt-5 text-center">
                <Link to={'edit-teacher-profile'}>
                  <button className="btn btn-primary profile-button" type="button">
                    প্রোফাইল আপডেট করুন
                  </button>
                </Link>

              </div>
            </div>
          </div>

        </div>
      </div>


    </>
  );
};

export default MyProfile;