
import studentImage from "../assets/images/teacher.png";
import styles from "./Home.style.module.css";
import { BiRadioCircle } from "react-icons/bi";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useEffect, useState } from "react";
import { all_student } from "../Request";

import Breadcumb from "../layout/Breadcumb";

const StudentList = () => {
  const [students, setStudents] = useState([])

  useEffect(() => {
    window.scroll(0, 0)
    all_student()
      .then((res) => {
        setStudents(res.data.data)
        console.log(res.data.data);
      })

  }, [])

  return (
    <div className="">
      <div className="dashboard-section">
      <section className="np-breadcumb-section pt-5">
      <div className="container">
      <div className="row">
      <Breadcumb title={"শিক্ষার্থীর তালিকা"}  /> 
        {students?.map((student, index) => (
          <div key={student?.id} className="col-sm-6 col-md-4 my-2">
            <div key={index} className="card shadow-lg border-0">
              <div className="d-flex justify-content-between gap-3 border-bottom">
                <div className="d-flex gap-3 align-items-center p-2">
                  <div>
                    <img
                      src={student.image || studentImage}
                      className="img-fluid"
                      style={{ height: "50px" }}
                    />
                  </div>
                  <div className="mt-2">
                    <h5 className={styles.teacherName}>
                      {student?.student_name_bn}
                    </h5>
                    <h6 className={styles.deg}>শ্রেণিঃ {student?.class}</h6>
                  </div>
                </div>
                <div className="p-1">
                  <HiOutlineDotsVertical
                    className={`fs-4 ${styles.OutlineDotsVertical}`}
                  />
                </div>
              </div>

              <div className="mt-4">
                <div
                  className="d-flex"
                  style={{ marginLeft: "-1.5rem" }}
                >

                  <ul className={`${styles.teacher_info_list_group}`}>
                    <li>
                      {" "}
                      <BiRadioCircle />
                      রোলঃ
                    </li>
                  </ul>
                  <ul className={`${styles.teacher_info_list_group}`}>
                    <li> {student?.roll || "no-entry"}</li>
                  </ul>
                </div>

                <div
                  className="d-flex"
                  style={{ marginLeft: "-1.5rem" }}
                >

                  <ul className={`${styles.teacher_info_list_group}`}>
                    <li>
                      {" "}
                      <BiRadioCircle />
                      মোবাইল :
                    </li>
                  </ul>
                  <ul className={`${styles.teacher_info_list_group}`}>
                    <li> {student?.student_mobile_no || "no-entry"}</li>
                  </ul>
                </div>
                <div
                  className="d-flex"
                  style={{ marginLeft: "-1.5rem" }}
                >

                  <ul className={`${styles.teacher_info_list_group}`}>
                    <li>
                      {" "}
                      <BiRadioCircle />
                      ইমেইল :
                    </li>
                  </ul>
                  <ul className={`${styles.teacher_info_list_group}`}>
                    <li> {student?.email || "no-entry"}</li>
                  </ul>
                </div>
                <div
                  className="d-flex"
                  style={{ marginLeft: "-1.5rem" }}
                >
                  <ul className={`${styles.teacher_info_list_group}`}>
                    <li>
                      <BiRadioCircle /> জন্ম তারিখ :
                    </li>
                  </ul>
                  <ul className={`${styles.teacher_info_list_group}`}>
                    <li> {student?.date_of_birth || "no-entry"}</li>
                  </ul>
                </div>
                <div
                  className="d-flex"
                  style={{ marginLeft: "-1.5rem" }}
                >
                  <ul className={`${styles.teacher_info_list_group}`}>
                    <li>
                      <BiRadioCircle /> লিঙ্গ :
                    </li>
                  </ul>
                  <ul className={`${styles.teacher_info_list_group}`}>
                    <li> {student?.gender || "no-entry"}</li>
                  </ul>
                </div>
                <div
                  className="d-flex"
                  style={{ marginLeft: "-1.5rem" }}
                >
                  <ul className={`${styles.teacher_info_list_group}`}>
                    <li>
                      <BiRadioCircle /> রেজিস্টেশন তারিখ :
                    </li>
                  </ul>
                  <ul className={`${styles.teacher_info_list_group}`}>
                    <li>{student?.registration_year || "no-entry"} </li>
                  </ul>
                </div>
                <div
                  className="d-flex"
                  style={{ marginLeft: "-1.5rem" }}
                >
                  <ul className={`${styles.teacher_info_list_group}`}>
                    <li>
                      <BiRadioCircle />
                      ধর্ম :
                    </li>
                  </ul>
                  <ul className={`${styles.teacher_info_list_group}`}>
                    <li>{student?.religion || "no-entry"} </li>
                  </ul>
                </div>
                <div
                  className="d-flex"
                  style={{ marginLeft: "-1.5rem" }}
                >
                  <ul className={`${styles.teacher_info_list_group}`}>
                    <li>
                      <BiRadioCircle />
                      জন্মস্থান  :
                    </li>
                  </ul>
                  <ul className={`${styles.teacher_info_list_group}`}>
                    <li>{student?.birth_place || "no-entry"} </li>
                  </ul>
                </div>
                <div
                  className="d-flex"
                  style={{ marginLeft: "-1.5rem" }}
                >
                  <ul className={`${styles.teacher_info_list_group}`}>
                    <li>
                      <BiRadioCircle />
                      বর্তমান ঠিকানা  :
                    </li>
                  </ul>
                  <ul className={`${styles.teacher_info_list_group}`}>
                    <li>{student?.present_address || "no-entry"} </li>
                  </ul>
                </div>
                <div
                  className="d-flex"
                  style={{ marginLeft: "-1.5rem" }}
                >
                  <ul className={`${styles.teacher_info_list_group}`}>
                    <li>
                      <BiRadioCircle />
                      স্থায়ী ঠিকানা  :
                    </li>
                  </ul>
                  <ul className={`${styles.teacher_info_list_group}`}>
                    <li>{student?.permanent_addres || "no-entry"} </li>
                  </ul>
                </div>
                <div
                  className="d-flex"
                  style={{ marginLeft: "-1.5rem" }}
                >
                  <ul className={`${styles.teacher_info_list_group}`}>
                    <li>
                      <BiRadioCircle />
                      অভিবাবকের-ফোন :
                    </li>
                  </ul>
                  <ul className={`${styles.teacher_info_list_group}`}>
                    <li> {student?.guardian_mobile_no || "013654582555"}</li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
      </section>
    </div>
    </div>
  );
};

export default StudentList;