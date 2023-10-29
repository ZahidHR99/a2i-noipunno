
import TeacherImg from "../assets/images/teacher.png";
import styles from "./Home.style.module.css";
import { BiRadioCircle } from "react-icons/bi";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useEffect, useState } from "react";
import { all_student } from "../Request";

const StudentList = () => {
  const [students, setStudents] = useState([])

  useEffect(() => {
    all_student()
      .then((res) => {
        setStudents(res.data.data)
        console.log(res.data.data);
      })

  }, [])

  return (
    <div className="container">
      <div className="row">
        {students?.map((stuednt, index) => (
          <div key={stuednt?.id} className="col-sm-6 col-md-4 my-2">
            <div key={index} className="card shadow-lg border-0">
              <div className="d-flex justify-content-between gap-3 border-bottom">
                <div className="d-flex gap-3 align-items-center p-2">
                  <div>
                    <img
                      src={TeacherImg}
                      className="img-fluid"
                      style={{ height: "50px" }}
                    />
                  </div>
                  <div className="mt-2">
                    <h5 className={styles.teacherName}>
                      {stuednt?.student_name_bn}
                    </h5>
                    <h6 className={styles.deg}>শ্রেণিঃ {stuednt.class}</h6>
                  </div>
                </div>
                <div className="p-1">
                  <HiOutlineDotsVertical
                    className={`fs-4 ${styles.OutlineDotsVertical}`}
                  />
                </div>
              </div>
              {/* <div className="flex-md-column flex-lg-row d-flex  justify-content-start gap-1 p-2 mb-2">
                <div className={styles.cardDesc}>বাংলা</div>
                <div className={styles.cardDesc}>জীবন ও জীবিকা</div>
                <div className={styles.cardDesc}>বিজ্ঞান</div>
              </div> */}
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
                    <li> {stuednt.brid}</li>
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
                    <li> {stuednt.student_mobile_no}</li>
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
                    <li> {stuednt.date_of_birth || "১০-০২-২০০৭"}</li>
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
                    <li> {stuednt.gender}</li>
                  </ul>
                </div>
                {/* <div
                  className="d-flex"
                  style={{ marginLeft: "-1.5rem" }}
                >
                  <ul className={`${styles.teacher_info_list_group}`}>
                    <li>
                      <BiRadioCircle /> জাতীয়তা :
                    </li>
                  </ul>
                  <ul className={`${styles.teacher_info_list_group}`}>
                    <li> বাংলাদেশী</li>
                  </ul>
                </div> */}
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
                    <li> ইসলাম</li>
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
                    <li> {students.guardian_mobile_no || "013654582555"}</li>
                  </ul>
                </div>
                {/* <div
                  className="d-flex"
                  style={{ marginLeft: "-1.5rem" }}
                >
                  <ul className={`${styles.teacher_info_list_group}`}>
                    <li>
                      <BiRadioCircle />
                      বৈবাহিক অবস্থা :
                    </li>
                  </ul>
                  <ul className={`${styles.teacher_info_list_group}`}>
                    <li> বিবাহিতা</li>
                  </ul>
                </div> */}
                {/* <div
                  className="d-flex"
                  style={{ marginLeft: "-1.5rem" }}
                >
                  <ul className={`${styles.teacher_info_list_group}`}>
                    <li>
                      <BiRadioCircle />
                      এনআইডি নম্বর :
                    </li>
                  </ul>
                  <ul className={`${styles.teacher_info_list_group}`}>
                    <li> xxx-xxxxxxxxx</li>
                  </ul>
                </div> */}
                {/* <div
                  className="d-flex"
                  style={{ marginLeft: "-1.5rem" }}
                >
                  <ul className={`${styles.teacher_info_list_group}`}>
                    <li>
                      <BiRadioCircle />
                      পদবি :
                    </li>
                  </ul>
                  <ul className={`${styles.teacher_info_list_group}`}>
                    <li> সহকারী শিক্ষক</li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default StudentList;