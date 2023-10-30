import styles from "./Home.style.module.css";
import { SlBookOpen } from "react-icons/sl";

const EditTeacherProfile = () => {
 return (
  <div className="container mt-5">
   <div className="d-flex align-items-center">
    <div className="card shadow-lg border-0 w-100 rounded">
     <ul className="nav d-flex mt-2 justify-content-around py-1">
      <li className={`nav-item`}>
       <a
        className={`nav-link link-secondary ${styles.nav_tab_bottom_border} active`}
        id="expertness-tab"
        data-bs-toggle="tab"
        data-bs-target="#expertness"
        href="#"
       >
        <SlBookOpen className="me-1" /> প্রোফাইল আপডেট করুন
       </a>
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


        <div className="form-group col-6 col-sm-4 col-md-3">
         <div className="mb-3" style={{ fontSize: "12px" }}>
          <label className="form-label"> আপনার নাম দিন</label>
          <div className="input-group">
           <input type="text" id="pin" className="form-control" name="name" placeholder="নাম" />
          </div>
         </div>
        </div>




        <div className="form-group col-6 col-sm-4 col-md-3">
         <div className="mb-3" style={{ fontSize: "12px" }}>
          <label className="form-label">মোবাইল নাম্বার</label>
          <div className="input-group">
           <input type="text" id="pin" className="form-control" name="name" placeholder="নাম্বার" />
          </div>
         </div>
        </div>


        <div className="form-group col-6 col-sm-4 col-md-3">
         <div className="mb-3" style={{ fontSize: "12px" }}>
          <label className="form-label">মোবাইল নাম্বার</label>
          <div className="input-group">
           <input type="text" id="pin" className="form-control" name="name" placeholder="নাম্বার" />
          </div>
         </div>
        </div>


        <div className="col-6 col-sm-4 col-md-3">
         <div className="mb-3" style={{ fontSize: "12px" }}>
          <label className="form-label">
           শাখা নির্বাচন করুন
          </label>
          <select
           className="form-select p-2"
           aria-label="Default select example"
           style={{ fontSize: "12px" }}
          >
           <option selected> শাখা নির্বাচন করুন</option>
           <option value="1">পদ্মা শাখা</option>
           <option value="2">Two</option>
           <option value="3">Three</option>
          </select>
         </div>
        </div>
        <div className="col-6 col-sm-4 col-md-3">
         <div className="mb-3" style={{ fontSize: "12px" }}>
          <label className="form-label">
           বিষয় নির্বাচন করুন
          </label>
          <select
           className="form-select p-2"
           aria-label="Default select example"
           style={{ fontSize: "12px" }}
          >
           <option selected>বিষয় নির্বাচন করুন</option>
           <option value="1">সবগুলি</option>
           <option value="2">Two</option>
           <option value="3">Three</option>
          </select>
         </div>
        </div>
        <div className="col-6 col-sm-4 col-md-3">
         <div className="mb-3" style={{ fontSize: "12px" }}>
          <label className="form-label">
           মূল্যায়ন শিরোনাম নির্বাচন করুন
          </label>
          <select
           className="form-select p-2"
           aria-label="Default select example"
           style={{ fontSize: "12px" }}
          >
           <option selected>
            {" "}
            মূল্যায়ন শিরোনাম নির্বাচন করুন
           </option>
           <option value="1">শিখন কালীন মূল্যায়ন</option>
           <option value="2">Two</option>
           <option value="3">Three</option>
          </select>
         </div>
        </div>
        <div className="col-6 col-sm-4 col-md-3">
         <div className="mb-3" style={{ fontSize: "12px" }}>
          <label className="form-label">
           যোগ্যতা নির্বাচন করুন
          </label>
          <select
           className="form-select p-2"
           aria-label="Default select example"
           style={{ fontSize: "12px" }}
          >
           <option selected>যোগ্যতা নির্বাচন করুন</option>
           <option value="1">সকল যোগ্যতা</option>
           <option value="2">Two</option>
           <option value="3">Three</option>
          </select>
         </div>
        </div>
        <div className="col-6 col-sm-4 col-md-3">
         <div className="mb-3" style={{ fontSize: "12px" }}>
          <label className="form-label">
           পারদর্শিকতার সূচক নির্বাচন করুন
          </label>
          <select
           className="form-select p-2"
           aria-label="Default select example"
           style={{ fontSize: "12px" }}
          >
           <option selected>
            পারদর্শিকতার সূচক নির্বাচন করুন
           </option>
           <option value="1">সকল সূচক</option>
           <option value="2">Two</option>
           <option value="3">Three</option>
          </select>
         </div>
        </div>
        <div className="col-6 col-sm-4 col-md-3">
         <div className="mb-3">
          <label className="form-label mt-3"></label>
          <div className="input-group">
           <input
            className="form-control py-1 border-right-0 border-0"
            type="search"
            defaultValue="নিম্নে মূল্যায়ন প্রতিবেদন দেখুন"
            id="example-search-input"
            style={{
             fontSize: "12px",
             backgroundColor: "#428F92",
            }}
           />
           <span
            className="input-group-append rounded-end"
            style={{
             fontSize: "12px",
             backgroundColor: "#428F92",
            }}
           >
            <button
             className="btn btn-outline-secondary py-1 border-0"
             type="button"
             style={{
              backgroundColor: "#428F92",
             }}
            >
             <i className="fa fa-search" />
            </button>
           </span>
          </div>
         </div>
        </div>
       </div>
      </div>
      <div
       className="tab-pane fade"
       id="behaviour"
       role="tabpanel"
       aria-labelledby="behaviour-tab"
      >
       <div className="row p-5">
        <div className="col-6 col-sm-4 col-md-3">
         <div className="mb-3" style={{ fontSize: "12px" }}>
          <label className="form-label">
           শ্রেণী নির্বাচন করুন
          </label>
          <select
           className="form-select p-2"
           aria-label="Default select example"
           style={{ fontSize: "12px" }}
          >
           <option selected>শ্রেণী নির্বাচন করুন</option>
           <option value="1">ষষ্ঠ শ্রেণী</option>
           <option value="2">Two</option>
           <option value="3">Three</option>
          </select>
         </div>
        </div>
        <div className="col-6 col-sm-4 col-md-3">
         <div className="mb-3" style={{ fontSize: "12px" }}>
          <label className="form-label">
           সেশন নির্বাচন করুন
          </label>
          <select
           className="form-select p-2"
           aria-label="Default select example"
           style={{ fontSize: "12px" }}
          >
           <option selected> সেশন নির্বাচন করুন</option>
           <option value="1">প্রভাতি সেশন</option>
           <option value="2">Two</option>
           <option value="3">Three</option>
          </select>
         </div>
        </div>
        <div className="col-6 col-sm-4 col-md-3">
         <div className="mb-3" style={{ fontSize: "12px" }}>
          <label className="form-label">
           শাখা নির্বাচন করুন
          </label>
          <select
           className="form-select p-2"
           aria-label="Default select example"
           style={{ fontSize: "12px" }}
          >
           <option selected> শাখা নির্বাচন করুন</option>
           <option value="1">পদ্মা শাখা</option>
           <option value="2">Two</option>
           <option value="3">Three</option>
          </select>
         </div>
        </div>
        <div className="col-6 col-sm-4 col-md-3">
         <div className="mb-3" style={{ fontSize: "12px" }}>
          <label className="form-label">
           বিষয় নির্বাচন করুন
          </label>
          <select
           className="form-select p-2"
           aria-label="Default select example"
           style={{ fontSize: "12px" }}
          >
           <option selected>বিষয় নির্বাচন করুন</option>
           <option value="1">সবগুলি</option>
           <option value="2">Two</option>
           <option value="3">Three</option>
          </select>
         </div>
        </div>
        <div className="col-6 col-sm-4 col-md-3">
         <div className="mb-3" style={{ fontSize: "12px" }}>
          <label className="form-label">
           মূল্যায়ন শিরোনাম নির্বাচন করুন
          </label>
          <select
           className="form-select p-2"
           aria-label="Default select example"
           style={{ fontSize: "12px" }}
          >
           <option selected>
            {" "}
            মূল্যায়ন শিরোনাম নির্বাচন করুন
           </option>
           <option value="1">শিখন কালীন মূল্যায়ন</option>
           <option value="2">Two</option>
           <option value="3">Three</option>
          </select>
         </div>
        </div>
        <div className="col-6 col-sm-4 col-md-3">
         <div className="mb-3" style={{ fontSize: "12px" }}>
          <label className="form-label">
           যোগ্যতা নির্বাচন করুন
          </label>
          <select
           className="form-select p-2"
           aria-label="Default select example"
           style={{ fontSize: "12px" }}
          >
           <option selected>যোগ্যতা নির্বাচন করুন</option>
           <option value="1">সকল যোগ্যতা</option>
           <option value="2">Two</option>
           <option value="3">Three</option>
          </select>
         </div>
        </div>
        <div className="col-6 col-sm-4 col-md-3">
         <div className="mb-3" style={{ fontSize: "12px" }}>
          <label className="form-label">
           পারদর্শিকতার সূচক নির্বাচন করুন
          </label>
          <select
           className="form-select p-2"
           aria-label="Default select example"
           style={{ fontSize: "12px" }}
          >
           <option selected>
            পারদর্শিকতার সূচক নির্বাচন করুন
           </option>
           <option value="1">সকল সূচক</option>
           <option value="2">Two</option>
           <option value="3">Three</option>
          </select>
         </div>
        </div>
        <div className="col-6 col-sm-4 col-md-3">
         <div className="mb-3">
          <label className="form-label mt-3"></label>
          <div className="input-group">
           <input
            className="form-control py-1 border-right-0 border-0"
            type="search"
            defaultValue="নিম্নে মূল্যায়ন প্রতিবেদন দেখুন"
            id="example-search-input"
            style={{
             fontSize: "12px",
             backgroundColor: "#428F92",
            }}
           />
           <span
            className="input-group-append rounded-end"
            style={{
             fontSize: "12px",
             backgroundColor: "#428F92",
            }}
           >
            <button
             className="btn btn-outline-secondary py-1 border-0"
             type="button"
             style={{
              backgroundColor: "#428F92",
             }}
            >
             <i className="fa fa-search" />
            </button>
           </span>
          </div>
         </div>
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