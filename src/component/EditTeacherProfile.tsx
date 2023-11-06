import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import styles from "./Home.style.module.css";
import { SlBookOpen } from "react-icons/sl";
import { useEffect, useState } from "react";
import { update_teacher_profile } from "../Request";

const EditTeacherProfile = () => {

 const [userDetails, setuserDetails] = useState<any>({});
 const { caid, eiin, name, email, phone_no, role } = userDetails;

 useEffect(() => {
  const items = JSON.parse(localStorage.getItem("customer_login_auth"));
  if (items) {
   setuserDetails(items.user);
  }
 }, []);

 const handleTeacherProfileEdit = async (event: any) => {

  event.preventDefault()
  const formDatas = new FormData(event.target);

  const { data }: any = await update_teacher_profile(caid, formDatas);

  if (data.status === true) {
   alert("Profile update Successfully!")
   // localStorage.setItem('customer_login_auth', JSON.stringify(data?.data))
   // const datas = JSON.parse(localStorage.getItem("customer_login_auth"));
   // console.log("local-sorege datas", datas.user);
  }
  else
   alert("Something error!")
 }


 return (
  <div className="container my-5">
   <div className="d-flex align-items-center">
    <div className="card shadow-lg border-0 w-100 rounded">
     <ul className="nav d-flex mt-2 justify-content-around py-1">
      <li className={`nav-item`}>
       <h4>  প্রোফাইল আপডেট করুন </h4>
      </li>

     </ul>
     <div className="tab-content" id="tabContent" style={{ backgroundColor: "#E4FEFF" }} >
      <div className="tab-pane fade show active" id="expertness" role="tabpanel" aria-labelledby="expertness-tab" >

       <form className="row p-5" onSubmit={handleTeacherProfileEdit}>


        {/* <div className="form-group  col-sm-4 col-md-6">
         <div className="mb-3" style={{ fontSize: "16px" }}>
          <label className="form-label"> শিক্ষকের ছবি আপলোড করুন</label>
          <div className="input-group mb-3">
           <input type="file" className="form-control" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" aria-label="Upload" />
          </div>
         </div>
        </div> */}

        <div className="form-group  col-sm-4 col-md-6">
         <div className="mb-3" style={{ fontSize: "16px" }}>
          <label className="form-label">নাম</label>
          <div className="input-group">
           <input type="text" id="pin" className="form-control" name="name" defaultValue={name} />
          </div>
         </div>
        </div>

        <div className="form-group  col-sm-4 col-md-6">
         <div className="mb-3" style={{ fontSize: "16px" }}>
          <label className="form-label">ইউজার আইডি</label>
          <div className="input-group">
           <input type="text" id="pin" className="form-control" name="caid" defaultValue={eiin} />
          </div>
         </div>
        </div>

        <div className="form-group  col-sm-4 col-md-6">
         <div className="mb-3" style={{ fontSize: "16px" }}>
          <label className="form-label">ফোন নম্বর</label>
          <div className="input-group">
           <input type="text" id="pin" className="form-control" name="phone_no" defaultValue={phone_no} />
          </div>
         </div>
        </div>

        {/* <div className="form-group  col-sm-4 col-md-6">
         <div className="mb-3" style={{ fontSize: "16px" }}>
          <label className="form-label">শিক্ষকের পদবি</label>
          <div className="input-group">
           <input type="text" id="pin" className="form-control" name="role" defaultValue={role} />
          </div>
         </div>
        </div> */}

        <div className="form-group col-sm-4 col-md-6">
         <div className="mb-3" >
          <label className="form-label" >
           পদবি
          </label>
          <select name="role" className="form-select p-2 form-control" aria-label="Default select example" style={{ fontSize: "16px" }} >
           <option selected style={{ fontSize: "16px" }}>
            {" "}
            পদবী নির্বাচন করুন
           </option>
           <option value={1}>শিক্ষক</option>
           <option value={2}>সহকারী শিক্ষক</option>
           <option value={3}>প্রধান শিক্ষক</option>
          </select>
         </div>
        </div>

        <div className="form-group  col-sm-4 col-md-6">
         <div className="mb-3" style={{ fontSize: "16px" }}>
          <label className="form-label">ইমেইল আইডি </label>
          <div className="input-group">
           <input type="text" id="pin" className="form-control" name="email" defaultValue={email} />
          </div>
         </div>
        </div>

        <div className="d-flex justify-content-end align-items-center pt-5 pe-5">
         <button type="submit" className="btn btn-primay px-5" style={{ backgroundColor: "#428F92", color: "#fff", }} > একাউন্ট আপডেট করুন{" "} <MdOutlineKeyboardArrowRight className="fs-3" style={{ marginTop: "-0.3rem", }} />{" "} </button>
        </div>
       </form>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default EditTeacherProfile;