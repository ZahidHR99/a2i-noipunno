import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import styles from "./Home.style.module.css";
import { SlBookOpen } from "react-icons/sl";

const EditTeacherProfile = () => {

 return (
  <div className="container my-5">
   <div className="d-flex align-items-center">
    <div className="card shadow-lg border-0 w-100 rounded">
     <ul className="nav d-flex mt-2 justify-content-around py-1">
      <li className={`nav-item`}>
       <h4>  প্রোফাইল আপডেট করুন </h4>
      </li>

     </ul>
     <div
      className="tab-content"
      id="tabContent"
      style={{ backgroundColor: "#E4FEFF" }}
     >
      <div
       className="tab-pane fade show active"
       id="expertness"
       role="tabpanel"
       aria-labelledby="expertness-tab"
      >
       <div className="row p-5">
        <div className="form-group   col-sm-4 col-md-6">
         <div className="mb-3" style={{ fontSize: "16px" }}>
          <label className="form-label"> শিক্ষকের Login ID (System auto generated)</label>
          <div className="input-group">
           <input type="text" id="pin" className="form-control" name="name" placeholder="" />
          </div>
         </div>
        </div>

        <div className="form-group  col-sm-4 col-md-6">
         <div className="mb-3" style={{ fontSize: "16px" }}>
          <label className="form-label"> শিক্ষকের ছবি আপলোড করুন</label>
          <div className="input-group mb-3">

           <input type="file" class="form-control" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" aria-label="Upload" />
          </div>
         </div>
        </div>

        <div className="form-group  col-sm-4 col-md-6">
         <div className="mb-3" style={{ fontSize: "16px" }}>
          <label className="form-label">শিক্ষকের নাম</label>
          <div className="input-group">
           <input type="text" id="pin" className="form-control" name="name" placeholder="" />
          </div>
         </div>
        </div>


        <div className="form-group  col-sm-4 col-md-6">
         <div className="mb-3" style={{ fontSize: "16px" }}>
          <label className="form-label">শিক্ষকের আইডি</label>
          <div className="input-group">
           <input type="text" id="pin" className="form-control" name="name" placeholder="" />
          </div>
         </div>
        </div>


        <div className="form-group  col-sm-4 col-md-6">
         <div className="mb-3" style={{ fontSize: "16px" }}>
          <label className="form-label">শিক্ষকের পদবি</label>
          <div className="input-group">
           <input type="text" id="pin" className="form-control" name="name" placeholder="" />
          </div>
         </div>
        </div>

        <div className="form-group  col-sm-4 col-md-6">
         <div className="mb-3" style={{ fontSize: "16px" }}>
          <label className="form-label">শিক্ষকের ফোন নম্বর</label>
          <div className="input-group">
           <input type="text" id="pin" className="form-control" name="name" placeholder="" />
          </div>
         </div>
        </div>

        <div className="form-group  col-sm-4 col-md-6">
         <div className="mb-3" style={{ fontSize: "16px" }}>
          <label className="form-label">ইমেইল আইডি </label>
          <div className="input-group">
           <input type="text" id="pin" className="form-control" name="name" placeholder="" />
          </div>
         </div>
        </div>



        <div className="form-group  col-sm-4 col-md-6">
         <div className="mb-3" >
          <label className="form-label" >
           বিভাগ
          </label>
          <select
           className="form-select p-2 form-control"
           aria-label="Default select example"
           style={{ fontSize: "16px" }}
          >
           <option selected style={{ fontSize: "16px" }}>
            {" "}
            বিভাগ নির্বাচন করুন
           </option>
           <option value="1">ঢাকা</option>
           <option value="2">চট্টগ্রাম</option>
           <option value="3">সিলেট</option>
          </select>
         </div>
        </div>


        <div className="form-group  col-sm-4 col-md-6">
         <div className="mb-3" style={{ fontSize: "16px" }}>
          <label className="form-label">
           জেলা
          </label>
          <select
           className="form-select p-2 "
           aria-label="Default select example"
           style={{ fontSize: "16px" }}
          >
           <option selected style={{ fontSize: "16px" }}>
            {" "}
            জেলা নির্বাচন করুন
           </option>
           <option value="1">বরগুনা</option>
           <option value="2">বরিশাল</option>
           <option value="3">ভোলা</option>
          </select>
         </div>
        </div>


        <div className="form-group  col-sm-4 col-md-6">
         <div className="mb-3" style={{ fontSize: "16px" }}>
          <label className="form-label" style={{ fontSize: "16px" }}>
           উপজেলা
          </label>
          <select
           className="form-select p-2 "
           aria-label="Default select example"
           style={{ fontSize: "16px" }}
          >
           <option selected style={{ fontSize: "16px" }}>
            {" "}
            উপজেলা নির্বাচন করুন
           </option>
           <option value="1">ফকিরাহাট</option>
           <option value="2">মোল্লাহাট</option>
           <option value="3">সারানখোলা</option>
          </select>
         </div>
        </div>


        <div className="d-flex justify-content-end align-items-center pt-5 pe-5">
         <button type="button" className="btn btn-primay px-5" style={{ backgroundColor: "#428F92", color: "#fff", }} > একাউন্ট আপডেট করুন{" "} <MdOutlineKeyboardArrowRight className="fs-3" style={{ marginTop: "-0.3rem", }} />{" "} </button>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default EditTeacherProfile;