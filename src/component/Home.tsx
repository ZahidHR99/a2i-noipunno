import React from "react";
import TeacherImg from "../assets/images/teacher.png";
import styles from "./Home.style.module.css";
import { BiSidebar } from "react-icons/bi";
import { IoIosBook } from "react-icons/io";

export default function Home() {
  return (
    <div className="content">
      <div className="dashboard-section">
        <section className="np-breadcumb-section pt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="col-md-12">
                  <div className="card np-card head-teacher-card">
                    <div className="head-teacher-top w-100">
                      <div className="d-flex justify-content-end ">
                        <button className="btn">
                          <img src="https://teacher.project-ca.com/frontend/images/edit.svg" />
                        </button>
                      </div>
                      <div className="d-flex flex-column justify-content-center align-items-center ">
                        <img
                          src="https://teacher.project-ca.com/frontend/noipunno/images/avatar/teacher.png"
                          className="border rounded-circle p-3 bg-light"
                          alt=""
                        />
                        <p className="mt-3 p-2">প্রধান শিক্ষক</p>
                      </div>
                      <div className="head-teacher-top-icons d-flex justify-content-center align-items-center">
                        <img src="https://teacher.project-ca.com/frontend/noipunno/images/icons/star.svg" />
                        <img src="https://teacher.project-ca.com/frontend/noipunno/images/icons/message.svg" />
                        <img src="https://teacher.project-ca.com/frontend/noipunno/images/icons/moon.svg" />
                      </div>
                    </div>
                    <div className="head-teacher-bottom d-flex flex-column ">
                      <div className="w-100 d-flex flex-column  align-items-center justify-content-center mt-3 ">
                        <h5>Asraful</h5>
                        <small>113030820230001</small>
                        <small>TOAKUL BAZAR HIGH SCHOOL</small>
                      </div>
                      <button className="m-3 profile-button">
                        <img src="https://teacher.project-ca.com/frontend/noipunno/images/icons/eye.svg" />
                        <p className="m-0">আমার প্রোফাইল</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="row d-flex gap-2">
                  <div></div>
                  <div className="d-flex">
                    <h5>
                      <BiSidebar /> বিষয়সমূহ
                    </h5>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 col-sm-4 col-md-3">
                    <div className="card shadow-lg border-0 p-1 p-lg-3 my-3 teacher-list-card">
                      <div className="gap-1 gap-lg-3 justify-content-center">
                        <div className="d-flex justify-content-center py-2">
                          <div className="p-2 border border-1 border-light rounded-circle">
                            <div className={styles.icons}>
                              <IoIosBook className="fs-1" />
                            </div>
                          </div>
                        </div>
                        <h5 className={styles.subject}>বাংলা</h5>
                        <h5 className={styles.std_class}>ষষ্ঠ শ্রেণি</h5>
                        <h5 className={styles.class_teacher}>
                          শ্রেণি শিক্ষক : <span> শওকত আলী</span>
                        </h5>
                      </div>
                      <div className="flex-md-column flex-lg-row d-flex  justify-content-center gap-2">
                        <h6 className={styles.session}>প্রভাতি সেশন</h6>
                        <h6 className={styles.horizontal_bar}>। </h6>
                        <h6 className={styles.branch}>পদ্মা শাথা</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3">
                    <div className="card shadow-lg border-0 p-1 p-lg-3 my-3 teacher-list-card">
                      <div className="gap-1 gap-lg-3 justify-content-center">
                        <div className="d-flex justify-content-center py-2">
                          <div className="p-2 border border-1 border-light rounded-circle">
                            <div className={styles.icons}>
                              <IoIosBook className="fs-1" />
                            </div>
                          </div>
                        </div>
                        <h5 className={styles.subject}>বাংলা</h5>
                        <h5 className={styles.std_class}>ষষ্ঠ শ্রেণি</h5>
                        <h5 className={styles.class_teacher}>
                          শ্রেণি শিক্ষক : <span> শওকত আলী</span>
                        </h5>
                      </div>
                      <div className="flex-md-column flex-lg-row d-flex  justify-content-center gap-2">
                        <h6 className={styles.session}>প্রভাতি সেশন</h6>
                        <h6 className={styles.horizontal_bar}>। </h6>
                        <h6 className={styles.branch}>পদ্মা শাথা</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3">
                    <div className="card shadow-lg border-0 p-1 p-lg-3 my-3 teacher-list-card">
                      <div className="gap-1 gap-lg-3 justify-content-center">
                        <div className="d-flex justify-content-center py-2">
                          <div className="p-2 border border-1 border-light rounded-circle">
                            <div className={styles.icons}>
                              <IoIosBook className="fs-1" />
                            </div>
                          </div>
                        </div>
                        <h5 className={styles.subject}>বাংলা</h5>
                        <h5 className={styles.std_class}>ষষ্ঠ শ্রেণি</h5>
                        <h5 className={styles.class_teacher}>
                          শ্রেণি শিক্ষক : <span> শওকত আলী</span>
                        </h5>
                      </div>
                      <div className="flex-md-column flex-lg-row d-flex  justify-content-center gap-2">
                        <h6 className={styles.session}>প্রভাতি সেশন</h6>
                        <h6 className={styles.horizontal_bar}>। </h6>
                        <h6 className={styles.branch}>পদ্মা শাথা</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3">
                    <div className="card shadow-lg border-0 p-1 p-lg-3 my-3 teacher-list-card">
                      <div className="gap-1 gap-lg-3 justify-content-center">
                        <div className="d-flex justify-content-center py-2">
                          <div className="p-2 border border-1 border-light rounded-circle">
                            <div className={styles.icons}>
                              <IoIosBook className="fs-1" />
                            </div>
                          </div>
                        </div>
                        <h5 className={styles.subject}>বাংলা</h5>
                        <h5 className={styles.std_class}>ষষ্ঠ শ্রেণি</h5>
                        <h5 className={styles.class_teacher}>
                          শ্রেণি শিক্ষক : <span> শওকত আলী</span>
                        </h5>
                      </div>
                      <div className="flex-md-column flex-lg-row d-flex  justify-content-center gap-2">
                        <h6 className={styles.session}>প্রভাতি সেশন</h6>
                        <h6 className={styles.horizontal_bar}>। </h6>
                        <h6 className={styles.branch}>পদ্মা শাথা</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3">
                    <div className="card shadow-lg border-0 p-1 p-lg-3 my-3 teacher-list-card">
                      <div className="gap-1 gap-lg-3 justify-content-center">
                        <div className="d-flex justify-content-center py-2">
                          <div className="p-2 border border-1 border-light rounded-circle">
                            <div className={styles.icons}>
                              <IoIosBook className="fs-1" />
                            </div>
                          </div>
                        </div>
                        <h5 className={styles.subject}>বাংলা</h5>
                        <h5 className={styles.std_class}>ষষ্ঠ শ্রেণি</h5>
                        <h5 className={styles.class_teacher}>
                          শ্রেণি শিক্ষক : <span> শওকত আলী</span>
                        </h5>
                      </div>
                      <div className="flex-md-column flex-lg-row d-flex  justify-content-center gap-2">
                        <h6 className={styles.session}>প্রভাতি সেশন</h6>
                        <h6 className={styles.horizontal_bar}>। </h6>
                        <h6 className={styles.branch}>পদ্মা শাথা</h6>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="row" style={{ rowGap: 10 }}>
                  <div className="col-md-6">
                    <a
                      href="https://teacher.project-ca.com/teachers"
                      style={{ textDecoration: "unset" }}
                    >
                      <div className="card np-card">
                        <div
                          className="card-body"
                          style={{ textAlign: "center" }}
                        >
                          <h2
                            style={{
                              margin: 0,
                              fontSize: 18,
                              color: "rgba(45, 102, 104, 1)",
                            }}
                          >
                            শিক্ষক যোগ করুন
                          </h2>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a
                      href="https://teacher.project-ca.com/noipunno-dashboard/branch-add"
                      style={{ textDecoration: "unset" }}
                    >
                      <div className="card np-card">
                        <div
                          className="card-body"
                          style={{ textAlign: "center" }}
                        >
                          <h2
                            style={{
                              margin: 0,
                              fontSize: 18,
                              color: "rgba(45, 102, 104, 1)",
                            }}
                          >
                            ব্রাঞ্চ যোগ করুন
                          </h2>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a
                      href="https://teacher.project-ca.com/noipunno-dashboard/version-add"
                      style={{ textDecoration: "unset" }}
                    >
                      <div className="card np-card">
                        <div
                          className="card-body"
                          style={{ textAlign: "center" }}
                        >
                          <h2
                            style={{
                              margin: 0,
                              fontSize: 18,
                              color: "rgba(45, 102, 104, 1)",
                            }}
                          >
                            ভার্সন যোগ করুন
                          </h2>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a
                      href="https://teacher.project-ca.com/students"
                      style={{ textDecoration: "unset" }}
                    >
                      <div className="card np-card">
                        <div
                          className="card-body"
                          style={{ textAlign: "center" }}
                        >
                          <h2
                            style={{
                              margin: 0,
                              fontSize: 18,
                              color: "rgba(45, 102, 104, 1)",
                            }}
                          >
                            শিক্ষার্থী যোগ করুন
                          </h2>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a
                      href="https://teacher.project-ca.com/noipunno-dashboard/shift-add"
                      style={{ textDecoration: "unset" }}
                    >
                      <div className="card np-card">
                        <div
                          className="card-body"
                          style={{ textAlign: "center" }}
                        >
                          <h2
                            style={{
                              margin: 0,
                              fontSize: 18,
                              color: "rgba(45, 102, 104, 1)",
                            }}
                          >
                            শিফট যোগ করুন
                          </h2>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a
                      href="https://teacher.project-ca.com/noipunno-dashboard/section-add"
                      style={{ textDecoration: "unset" }}
                    >
                      <div className="card np-card">
                        <div
                          className="card-body"
                          style={{ textAlign: "center" }}
                        >
                          <h2
                            style={{
                              margin: 0,
                              fontSize: 18,
                              color: "rgba(45, 102, 104, 1)",
                            }}
                          >
                            সেকশন যোগ করুন
                          </h2>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-12">
                    <a
                      href="https://teacher.project-ca.com/noipunno-dashboard/classroom-add"
                      style={{ textDecoration: "unset" }}
                    >
                      <div className="card np-card">
                        <div
                          className="card-body"
                          style={{ textAlign: "center" }}
                        >
                          <h2
                            style={{
                              margin: 0,
                              fontSize: 18,
                              color: "rgba(45, 102, 104, 1)",
                            }}
                          >
                            শাখা যোগ করুন
                          </h2>
                        </div>
                      </div>
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
            {/* Teachers List start */}
            <div className="row pb-3">
              <div className="d-flex justify-content-between pt-5">
                <div>
                  <h5>শিক্ষকের তালিকা</h5>
                </div>
                <div>
                  <h5>View All</h5>
                </div>
              </div>
              <div className="col-6 col-md-2 col-sm-4">
                <div className="card shadow-lg p-1 p-lg-3 my-3 border-0">
                  <div className="teacher-list-card">
                    <div className="d-flex gap-1 gap-lg-3 ">
                      <div>
                        <img src={TeacherImg} className="img-fluid" />
                      </div>
                      <div>
                        <h5 className={styles.teacherName}>Showkat Ali</h5>
                        <h6 className={styles.deg}>Head Master</h6>
                      </div>
                    </div>
                    <div className="flex-md-column flex-lg-row d-flex  justify-content-start gap-1 mt-2">
                      <div className={styles.cardDesc}>বাংলা</div>
                      <div className={styles.cardDesc}>জীবন ও জীবিকা</div>
                      <div className={styles.cardDesc}>বিজ্ঞান</div>
                    </div>
                    {/* <div className="teacher-list-overla">
                      <div className="teacher-list-overlay d-flex flex-column gap-4 mt-2 justify-content-end">
                        <FiStar />
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-2 col-sm-4">
                <div className="card shadow-lg p-1 p-lg-3 my-3 border-0">
                  <div className="teacher-list-card">
                    <div className="d-flex gap-1 gap-lg-3 ">
                      <div>
                        <img src={TeacherImg} className="img-fluid" />
                      </div>
                      <div>
                        <h5 className={styles.teacherName}>Showkat Ali</h5>
                        <h6 className={styles.deg}>Head Master</h6>
                      </div>
                    </div>
                    <div className="flex-md-column flex-lg-row d-flex  justify-content-start gap-1 mt-2">
                      <div className={styles.cardDesc}>বাংলা</div>
                      <div className={styles.cardDesc}>জীবন ও জীবিকা</div>
                      <div className={styles.cardDesc}>বিজ্ঞান</div>
                    </div>
                    {/* <div className="teacher-list-overla">
                      <div className="teacher-list-overlay d-flex flex-column gap-4 mt-2 justify-content-end">
                        <FiStar />
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-2 col-sm-4">
                <div className="card shadow-lg p-1 p-lg-3 my-3 border-0">
                  <div className="teacher-list-card">
                    <div className="d-flex gap-1 gap-lg-3 ">
                      <div>
                        <img src={TeacherImg} className="img-fluid" />
                      </div>
                      <div>
                        <h5 className={styles.teacherName}>Showkat Ali</h5>
                        <h6 className={styles.deg}>Head Master</h6>
                      </div>
                    </div>
                    <div className="flex-md-column flex-lg-row d-flex  justify-content-start gap-1 mt-2">
                      <div className={styles.cardDesc}>বাংলা</div>
                      <div className={styles.cardDesc}>জীবন ও জীবিকা</div>
                      <div className={styles.cardDesc}>বিজ্ঞান</div>
                    </div>
                    {/* <div className="teacher-list-overla">
                      <div className="teacher-list-overlay d-flex flex-column gap-4 mt-2 justify-content-end">
                        <FiStar />
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-2 col-sm-4">
                <div className="card shadow-lg p-1 p-lg-3 my-3 border-0">
                  <div className="teacher-list-card">
                    <div className="d-flex gap-1 gap-lg-3 ">
                      <div>
                        <img src={TeacherImg} className="img-fluid" />
                      </div>
                      <div>
                        <h5 className={styles.teacherName}>Showkat Ali</h5>
                        <h6 className={styles.deg}>Head Master</h6>
                      </div>
                    </div>
                    <div className="flex-md-column flex-lg-row d-flex  justify-content-start gap-1 mt-2">
                      <div className={styles.cardDesc}>বাংলা</div>
                      <div className={styles.cardDesc}>জীবন ও জীবিকা</div>
                      <div className={styles.cardDesc}>বিজ্ঞান</div>
                    </div>
                    {/* <div className="teacher-list-overla">
                      <div className="teacher-list-overlay d-flex flex-column gap-4 mt-2 justify-content-end">
                        <FiStar />
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-2 col-sm-4">
                <div className="card shadow-lg p-1 p-lg-3 my-3 border-0">
                  <div className="teacher-list-card">
                    <div className="d-flex gap-1 gap-lg-3 ">
                      <div>
                        <img src={TeacherImg} className="img-fluid" />
                      </div>
                      <div>
                        <h5 className={styles.teacherName}>Showkat Ali</h5>
                        <h6 className={styles.deg}>Head Master</h6>
                      </div>
                    </div>
                    <div className="flex-md-column flex-lg-row d-flex  justify-content-start gap-1 mt-2">
                      <div className={styles.cardDesc}>বাংলা</div>
                      <div className={styles.cardDesc}>জীবন ও জীবিকা</div>
                      <div className={styles.cardDesc}>বিজ্ঞান</div>
                    </div>
                    {/* <div className="teacher-list-overla">
                      <div className="teacher-list-overlay d-flex flex-column gap-4 mt-2 justify-content-end">
                        <FiStar />
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-2 col-sm-4">
                <div className="card shadow-lg p-1 p-lg-3 my-3 border-0">
                  <div className="teacher-list-card">
                    <div className="d-flex gap-1 gap-lg-3 ">
                      <div>
                        <img src={TeacherImg} className="img-fluid" />
                      </div>
                      <div>
                        <h5 className={styles.teacherName}>Showkat Ali</h5>
                        <h6 className={styles.deg}>Head Master</h6>
                      </div>
                    </div>
                    <div className="flex-md-column flex-lg-row d-flex  justify-content-start gap-1 mt-2">
                      <div className={styles.cardDesc}>বাংলা</div>
                      <div className={styles.cardDesc}>জীবন ও জীবিকা</div>
                      <div className={styles.cardDesc}>বিজ্ঞান</div>
                    </div>
                    {/* <div className="teacher-list-overla">
                      <div className="teacher-list-overlay d-flex flex-column gap-4 mt-2 justify-content-end">
                        <FiStar />
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-2 col-sm-4">
                <div className="card shadow-lg p-1 p-lg-3 my-3 border-0">
                  <div className="teacher-list-card">
                    <div className="d-flex gap-1 gap-lg-3 ">
                      <div>
                        <img src={TeacherImg} className="img-fluid" />
                      </div>
                      <div>
                        <h5 className={styles.teacherName}>Showkat Ali</h5>
                        <h6 className={styles.deg}>Head Master</h6>
                      </div>
                    </div>
                    <div className="flex-md-column flex-lg-row d-flex  justify-content-start gap-1 mt-2">
                      <div className={styles.cardDesc}>বাংলা</div>
                      <div className={styles.cardDesc}>জীবন ও জীবিকা</div>
                      <div className={styles.cardDesc}>বিজ্ঞান</div>
                    </div>
                    {/* <div className="teacher-list-overla">
                      <div className="teacher-list-overlay d-flex flex-column gap-4 mt-2 justify-content-end">
                        <FiStar />
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-2 col-sm-4">
                <div className="card shadow-lg p-1 p-lg-3 my-3 border-0">
                  <div className="teacher-list-card">
                    <div className="d-flex gap-1 gap-lg-3 ">
                      <div>
                        <img src={TeacherImg} className="img-fluid" />
                      </div>
                      <div>
                        <h5 className={styles.teacherName}>Showkat Ali</h5>
                        <h6 className={styles.deg}>Head Master</h6>
                      </div>
                    </div>
                    <div className="flex-md-column flex-lg-row d-flex  justify-content-start gap-1 mt-2">
                      <div className={styles.cardDesc}>বাংলা</div>
                      <div className={styles.cardDesc}>জীবন ও জীবিকা</div>
                      <div className={styles.cardDesc}>বিজ্ঞান</div>
                    </div>
                    {/* <div className="teacher-list-overla">
                      <div className="teacher-list-overlay d-flex flex-column gap-4 mt-2 justify-content-end">
                        <FiStar />
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-2 col-sm-4">
                <div className="card shadow-lg p-1 p-lg-3 my-3 border-0">
                  <div className="teacher-list-card">
                    <div className="d-flex gap-1 gap-lg-3 ">
                      <div>
                        <img src={TeacherImg} className="img-fluid" />
                      </div>
                      <div>
                        <h5 className={styles.teacherName}>Showkat Ali</h5>
                        <h6 className={styles.deg}>Head Master</h6>
                      </div>
                    </div>
                    <div className="flex-md-column flex-lg-row d-flex  justify-content-start gap-1 mt-2">
                      <div className={styles.cardDesc}>বাংলা</div>
                      <div className={styles.cardDesc}>জীবন ও জীবিকা</div>
                      <div className={styles.cardDesc}>বিজ্ঞান</div>
                    </div>
                    {/* <div className="teacher-list-overla">
                      <div className="teacher-list-overlay d-flex flex-column gap-4 mt-2 justify-content-end">
                        <FiStar />
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-2 col-sm-4">
                <div className="card shadow-lg p-1 p-lg-3 my-3 border-0">
                  <div className="teacher-list-card">
                    <div className="d-flex gap-1 gap-lg-3 ">
                      <div>
                        <img src={TeacherImg} className="img-fluid" />
                      </div>
                      <div>
                        <h5 className={styles.teacherName}>Showkat Ali</h5>
                        <h6 className={styles.deg}>Head Master</h6>
                      </div>
                    </div>
                    <div className="flex-md-column flex-lg-row d-flex  justify-content-start gap-1 mt-2">
                      <div className={styles.cardDesc}>বাংলা</div>
                      <div className={styles.cardDesc}>জীবন ও জীবিকা</div>
                      <div className={styles.cardDesc}>বিজ্ঞান</div>
                    </div>
                    {/* <div className="teacher-list-overla">
                      <div className="teacher-list-overlay d-flex flex-column gap-4 mt-2 justify-content-end">
                        <FiStar />
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-2 col-sm-4">
                <div className="card shadow-lg p-1 p-lg-3 my-3 border-0">
                  <div className="teacher-list-card">
                    <div className="d-flex gap-1 gap-lg-3 ">
                      <div>
                        <img src={TeacherImg} className="img-fluid" />
                      </div>
                      <div>
                        <h5 className={styles.teacherName}>Showkat Ali</h5>
                        <h6 className={styles.deg}>Head Master</h6>
                      </div>
                    </div>
                    <div className="flex-md-column flex-lg-row d-flex  justify-content-start gap-1 mt-2">
                      <div className={styles.cardDesc}>বাংলা</div>
                      <div className={styles.cardDesc}>জীবন ও জীবিকা</div>
                      <div className={styles.cardDesc}>বিজ্ঞান</div>
                    </div>
                    {/* <div className="teacher-list-overla">
                      <div className="teacher-list-overlay d-flex flex-column gap-4 mt-2 justify-content-end">
                        <FiStar />
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-2 col-sm-4">
                <div className="card shadow-lg p-1 p-lg-3 my-3 border-0">
                  <div className="teacher-list-card">
                    <div className="d-flex gap-1 gap-lg-3 ">
                      <div>
                        <img src={TeacherImg} className="img-fluid" />
                      </div>
                      <div>
                        <h5 className={styles.teacherName}>Showkat Ali</h5>
                        <h6 className={styles.deg}>Head Master</h6>
                      </div>
                    </div>
                    <div className="flex-md-column flex-lg-row d-flex  justify-content-start gap-1 mt-2">
                      <div className={styles.cardDesc}>বাংলা</div>
                      <div className={styles.cardDesc}>জীবন ও জীবিকা</div>
                      <div className={styles.cardDesc}>বিজ্ঞান</div>
                    </div>
                    {/* <div className="teacher-list-overla">
                      <div className="teacher-list-overlay d-flex flex-column gap-4 mt-2 justify-content-end">
                        <FiStar />
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            {/* Teachers List end */}
          </div>
        </section>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n            .np-table th,\n            td {\n                font-size: 11px;\n            }\n        ",
        }}
      />

      {/* Teachers List end */}
    </div>
  );
}
