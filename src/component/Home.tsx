import React from "react";
import TeacherImg from "../assets/images/teacher.png";
import { useState, useEffect } from "react";

import styles from "./Home.style.module.css";
import { FiStar } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";
import { BiSidebar, BiRadioCircle } from "react-icons/bi";
import { BsCloudSun, BsMoon } from "react-icons/bs";
import { SlBookOpen } from "react-icons/sl";
import { MdArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import { HiOutlineSun, HiOutlineDotsVertical } from "react-icons/hi";
import ProfileCard from "./ProfileCard";
import { all_teachers } from "../Request";
import TeachersList from "../layout/TeachersList"


export default function Home() {
  

  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    all_teachers().then((response) => {
      setTeachers(response.data.data);
    });
  }, []);
  

  return (
    <div className="content">
      <div className="dashboard-section">
        <section className="np-breadcumb-section pt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <ProfileCard />
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
                        <div className="d-flex justify-content-center py-2 pb-4">
                          <div
                            className={`p-3 border border-1 border-light rounded-circle ${styles.icon_bg_color}`}
                          >
                            <div className={styles.icons}>
                              <SlBookOpen className="fs-3" />
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
                        <div className="d-flex justify-content-center py-2 pb-4">
                          <div
                            className={`p-3 border border-1 border-light rounded-circle ${styles.icon_bg_color}`}
                          >
                            <div className={styles.icons}>
                              <SlBookOpen className="fs-3" />
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
                        <div className="d-flex justify-content-center py-2 pb-4">
                          <div
                            className={`p-3 border border-1 border-light rounded-circle ${styles.icon_bg_color}`}
                          >
                            <div className={styles.icons}>
                              <SlBookOpen className="fs-3" />
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
                        <div className="d-flex justify-content-center py-2 pb-4">
                          <div
                            className={`p-3 border border-1 border-light rounded-circle ${styles.icon_bg_color}`}
                          >
                            <div className={styles.icons}>
                              <SlBookOpen className="fs-3" />
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
                        <div className="d-flex justify-content-center py-2 pb-4">
                          <div
                            className={`p-3 border border-1 border-light rounded-circle ${styles.icon_bg_color}`}
                          >
                            <div className={styles.icons}>
                              <SlBookOpen className="fs-3" />
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
                        <div className="d-flex justify-content-center py-2 pb-4">
                          <div
                            className={`p-3 border border-1 border-light rounded-circle ${styles.icon_bg_color}`}
                          >
                            <div className={styles.icons}>
                              <SlBookOpen className="fs-3" />
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
            
            {/* Teachers List end */}
            {/* Class Six subject start */}
            <div className="row">
              <h5>ষষ্ঠ শ্রেণি বিষয়</h5>
              <ul className="nav d-flex justify-content-around bg-white py-1 rounded">
                <li className="nav-item">
                  <a
                    className="nav-link link-secondary"
                    id="provati-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#provati"
                    href="#"
                  >
                    <BsCloudSun /> প্রভাতি
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link link-secondary"
                    id="deba_session-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#deba_session"
                    href="#"
                  >
                    <HiOutlineSun /> দিবা সেশন
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link link-secondary active"
                    id="sondha_session-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#sondha_session"
                    href="#"
                  >
                    <BsMoon /> সন্ধা সেশন
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="tabContent">
                <div
                  className="tab-pane fade"
                  id="provati"
                  role="tabpanel"
                  aria-labelledby="provati-tab"
                >
                  <div className="row">
                    <div className="col-6 col-sm-4 col-md-2">
                      <div className="card shadow-lg border-0 p-1 p-lg-3 my-3 teacher-list-card">
                        <div className="gap-1 gap-lg-3 justify-content-center">
                          <div className="d-flex justify-content-center py-2 pb-4">
                            <div
                              className={`p-3 border border-1 border-light rounded-circle ${styles.icon_bg_color}`}
                            >
                              <div className={styles.icons}>
                                <SlBookOpen className="fs-3" />
                              </div>
                            </div>
                          </div>
                          <h5 className={styles.class_six_topics}>
                            জীবন ও জীবিকা
                          </h5>
                          <h5 className={styles.class_six_std_name}>
                            সামিনা চৌধুরী
                          </h5>
                          <h5 className={styles.class_six_branch}>
                            পদ্মা শাথা : <span> PI:৬.১.১</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2">
                      <div className="card shadow-lg border-0 p-1 p-lg-3 my-3 teacher-list-card">
                        <div className="gap-1 gap-lg-3 justify-content-center">
                          <div className="d-flex justify-content-center py-2 pb-4">
                            <div
                              className={`p-3 border border-1 border-light rounded-circle ${styles.icon_bg_color}`}
                            >
                              <div className={styles.icons}>
                                <SlBookOpen className="fs-3" />
                              </div>
                            </div>
                          </div>
                          <h5 className={styles.class_six_topics}>
                            জীবন ও জীবিকা
                          </h5>
                          <h5 className={styles.class_six_std_name}>
                            সামিনা চৌধুরী
                          </h5>
                          <h5 className={styles.class_six_branch}>
                            পদ্মা শাথা : <span> PI:৬.১.১</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2">
                      <div className="card shadow-lg border-0 p-1 p-lg-3 my-3 teacher-list-card">
                        <div className="gap-1 gap-lg-3 justify-content-center">
                          <div className="d-flex justify-content-center py-2 pb-4">
                            <div
                              className={`p-3 border border-1 border-light rounded-circle ${styles.icon_bg_color}`}
                            >
                              <div className={styles.icons}>
                                <SlBookOpen className="fs-3" />
                              </div>
                            </div>
                          </div>
                          <h5 className={styles.class_six_topics}>
                            জীবন ও জীবিকা
                          </h5>
                          <h5 className={styles.class_six_std_name}>
                            সামিনা চৌধুরী
                          </h5>
                          <h5 className={styles.class_six_branch}>
                            পদ্মা শাথা : <span> PI:৬.১.১</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2">
                      <div className="card shadow-lg border-0 p-1 p-lg-3 my-3 teacher-list-card">
                        <div className="gap-1 gap-lg-3 justify-content-center">
                          <div className="d-flex justify-content-center py-2 pb-4">
                            <div
                              className={`p-3 border border-1 border-light rounded-circle ${styles.icon_bg_color}`}
                            >
                              <div className={styles.icons}>
                                <SlBookOpen className="fs-3" />
                              </div>
                            </div>
                          </div>
                          <h5 className={styles.class_six_topics}>
                            জীবন ও জীবিকা
                          </h5>
                          <h5 className={styles.class_six_std_name}>
                            সামিনা চৌধুরী
                          </h5>
                          <h5 className={styles.class_six_branch}>
                            পদ্মা শাথা : <span> PI:৬.১.১</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2">
                      <div className="card shadow-lg border-0 p-1 p-lg-3 my-3 teacher-list-card">
                        <div className="gap-1 gap-lg-3 justify-content-center">
                          <div className="d-flex justify-content-center py-2 pb-4">
                            <div
                              className={`p-3 border border-1 border-light rounded-circle ${styles.icon_bg_color}`}
                            >
                              <div className={styles.icons}>
                                <SlBookOpen className="fs-3" />
                              </div>
                            </div>
                          </div>
                          <h5 className={styles.class_six_topics}>
                            জীবন ও জীবিকা
                          </h5>
                          <h5 className={styles.class_six_std_name}>
                            সামিনা চৌধুরী
                          </h5>
                          <h5 className={styles.class_six_branch}>
                            পদ্মা শাথা : <span> PI:৬.১.১</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2">
                      <div className="card shadow-lg border-0 p-1 p-lg-3 my-3 teacher-list-card">
                        <div className="gap-1 gap-lg-3 justify-content-center">
                          <div className="d-flex justify-content-center py-2 pb-4">
                            <div
                              className={`p-3 border border-1 border-light rounded-circle ${styles.icon_bg_color}`}
                            >
                              <div className={styles.icons}>
                                <SlBookOpen className="fs-3" />
                              </div>
                            </div>
                          </div>
                          <h5 className={styles.class_six_topics}>
                            জীবন ও জীবিকা
                          </h5>
                          <h5 className={styles.class_six_std_name}>
                            সামিনা চৌধুরী
                          </h5>
                          <h5 className={styles.class_six_branch}>
                            পদ্মা শাথা : <span> PI:৬.১.১</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2">
                      <div className="card shadow-lg border-0 p-1 p-lg-3 my-3 teacher-list-card">
                        <div className="gap-1 gap-lg-3 justify-content-center">
                          <div className="d-flex justify-content-center py-2 pb-4">
                            <div
                              className={`p-3 border border-1 border-light rounded-circle ${styles.icon_bg_color}`}
                            >
                              <div className={styles.icons}>
                                <SlBookOpen className="fs-3" />
                              </div>
                            </div>
                          </div>
                          <h5 className={styles.class_six_topics}>
                            জীবন ও জীবিকা
                          </h5>
                          <h5 className={styles.class_six_std_name}>
                            সামিনা চৌধুরী
                          </h5>
                          <h5 className={styles.class_six_branch}>
                            পদ্মা শাথা : <span> PI:৬.১.১</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="deba_session"
                  role="tabpanel"
                  aria-labelledby="deba_session-tab"
                >
                  <div className="row">
                    <div className="col-6 col-sm-4 col-md-2">
                      <div className="card shadow-lg border-0 p-1 p-lg-3 my-3 teacher-list-card">
                        <div className="gap-1 gap-lg-3 justify-content-center">
                          <div className="d-flex justify-content-center py-2 pb-4">
                            <div
                              className={`p-3 border border-1 border-light rounded-circle ${styles.icon_bg_color}`}
                            >
                              <div className={styles.icons}>
                                <SlBookOpen className="fs-3" />
                              </div>
                            </div>
                          </div>
                          <h5 className={styles.class_six_topics}>
                            জীবন ও জীবিকা
                          </h5>
                          <h5 className={styles.class_six_std_name}>
                            সামিনা চৌধুরী
                          </h5>
                          <h5 className={styles.class_six_branch}>
                            পদ্মা শাথা : <span> PI:৬.১.১</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2">
                      <div className="card shadow-lg border-0 p-1 p-lg-3 my-3 teacher-list-card">
                        <div className="gap-1 gap-lg-3 justify-content-center">
                          <div className="d-flex justify-content-center py-2 pb-4">
                            <div
                              className={`p-3 border border-1 border-light rounded-circle ${styles.icon_bg_color}`}
                            >
                              <div className={styles.icons}>
                                <SlBookOpen className="fs-3" />
                              </div>
                            </div>
                          </div>
                          <h5 className={styles.class_six_topics}>
                            জীবন ও জীবিকা
                          </h5>
                          <h5 className={styles.class_six_std_name}>
                            সামিনা চৌধুরী
                          </h5>
                          <h5 className={styles.class_six_branch}>
                            পদ্মা শাথা : <span> PI:৬.১.১</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2">
                      <div className="card shadow-lg border-0 p-1 p-lg-3 my-3 teacher-list-card">
                        <div className="gap-1 gap-lg-3 justify-content-center">
                          <div className="d-flex justify-content-center py-2 pb-4">
                            <div
                              className={`p-3 border border-1 border-light rounded-circle ${styles.icon_bg_color}`}
                            >
                              <div className={styles.icons}>
                                <SlBookOpen className="fs-3" />
                              </div>
                            </div>
                          </div>
                          <h5 className={styles.class_six_topics}>
                            জীবন ও জীবিকা
                          </h5>
                          <h5 className={styles.class_six_std_name}>
                            সামিনা চৌধুরী
                          </h5>
                          <h5 className={styles.class_six_branch}>
                            পদ্মা শাথা : <span> PI:৬.১.১</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2">
                      <div className="card shadow-lg border-0 p-1 p-lg-3 my-3 teacher-list-card">
                        <div className="gap-1 gap-lg-3 justify-content-center">
                          <div className="d-flex justify-content-center py-2 pb-4">
                            <div
                              className={`p-3 border border-1 border-light rounded-circle ${styles.icon_bg_color}`}
                            >
                              <div className={styles.icons}>
                                <SlBookOpen className="fs-3" />
                              </div>
                            </div>
                          </div>
                          <h5 className={styles.class_six_topics}>
                            জীবন ও জীবিকা
                          </h5>
                          <h5 className={styles.class_six_std_name}>
                            সামিনা চৌধুরী
                          </h5>
                          <h5 className={styles.class_six_branch}>
                            পদ্মা শাথা : <span> PI:৬.১.১</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2">
                      <div className="card shadow-lg border-0 p-1 p-lg-3 my-3 teacher-list-card">
                        <div className="gap-1 gap-lg-3 justify-content-center">
                          <div className="d-flex justify-content-center py-2 pb-4">
                            <div
                              className={`p-3 border border-1 border-light rounded-circle ${styles.icon_bg_color}`}
                            >
                              <div className={styles.icons}>
                                <SlBookOpen className="fs-3" />
                              </div>
                            </div>
                          </div>
                          <h5 className={styles.class_six_topics}>
                            জীবন ও জীবিকা
                          </h5>
                          <h5 className={styles.class_six_std_name}>
                            সামিনা চৌধুরী
                          </h5>
                          <h5 className={styles.class_six_branch}>
                            পদ্মা শাথা : <span> PI:৬.১.১</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2">
                      <div className="card shadow-lg border-0 p-1 p-lg-3 my-3 teacher-list-card">
                        <div className="gap-1 gap-lg-3 justify-content-center">
                          <div className="d-flex justify-content-center py-2 pb-4">
                            <div
                              className={`p-3 border border-1 border-light rounded-circle ${styles.icon_bg_color}`}
                            >
                              <div className={styles.icons}>
                                <SlBookOpen className="fs-3" />
                              </div>
                            </div>
                          </div>
                          <h5 className={styles.class_six_topics}>
                            জীবন ও জীবিকা
                          </h5>
                          <h5 className={styles.class_six_std_name}>
                            সামিনা চৌধুরী
                          </h5>
                          <h5 className={styles.class_six_branch}>
                            পদ্মা শাথা : <span> PI:৬.১.১</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2">
                      <div className="card shadow-lg border-0 p-1 p-lg-3 my-3 teacher-list-card">
                        <div className="gap-1 gap-lg-3 justify-content-center">
                          <div className="d-flex justify-content-center py-2 pb-4">
                            <div
                              className={`p-3 border border-1 border-light rounded-circle ${styles.icon_bg_color}`}
                            >
                              <div className={styles.icons}>
                                <SlBookOpen className="fs-3" />
                              </div>
                            </div>
                          </div>
                          <h5 className={styles.class_six_topics}>
                            জীবন ও জীবিকা
                          </h5>
                          <h5 className={styles.class_six_std_name}>
                            সামিনা চৌধুরী
                          </h5>
                          <h5 className={styles.class_six_branch}>
                            পদ্মা শাথা : <span> PI:৬.১.১</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade show active"
                  id="sondha_session"
                  role="tabpanel"
                  aria-labelledby="sondha_session-tab"
                >
                  <div className="row">
                    <div className="col-6 col-sm-4 col-md-2">
                      <div className="card shadow-lg border-0 p-1 p-lg-3 my-3 teacher-list-card">
                        <div className="gap-1 gap-lg-3 justify-content-center">
                          <div className="d-flex justify-content-center py-2 pb-4">
                            <div
                              className={`p-3 border border-1 border-light rounded-circle ${styles.icon_bg_color}`}
                            >
                              <div className={styles.icons}>
                                <SlBookOpen className="fs-3" />
                              </div>
                            </div>
                          </div>
                          <h5 className={styles.class_six_topics}>
                            জীবন ও জীবিকা
                          </h5>
                          <h5 className={styles.class_six_std_name}>
                            সামিনা চৌধুরী
                          </h5>
                          <h5 className={styles.class_six_branch}>
                            পদ্মা শাথা : <span> PI:৬.১.১</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2">
                      <div className="card shadow-lg border-0 p-1 p-lg-3 my-3 teacher-list-card">
                        <div className="gap-1 gap-lg-3 justify-content-center">
                          <div className="d-flex justify-content-center py-2 pb-4">
                            <div
                              className={`p-3 border border-1 border-light rounded-circle ${styles.icon_bg_color}`}
                            >
                              <div className={styles.icons}>
                                <SlBookOpen className="fs-3" />
                              </div>
                            </div>
                          </div>
                          <h5 className={styles.class_six_topics}>
                            জীবন ও জীবিকা
                          </h5>
                          <h5 className={styles.class_six_std_name}>
                            সামিনা চৌধুরী
                          </h5>
                          <h5 className={styles.class_six_branch}>
                            পদ্মা শাথা : <span> PI:৬.১.১</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2">
                      <div className="card shadow-lg border-0 p-1 p-lg-3 my-3 teacher-list-card">
                        <div className="gap-1 gap-lg-3 justify-content-center">
                          <div className="d-flex justify-content-center py-2 pb-4">
                            <div
                              className={`p-3 border border-1 border-light rounded-circle ${styles.icon_bg_color}`}
                            >
                              <div className={styles.icons}>
                                <SlBookOpen className="fs-3" />
                              </div>
                            </div>
                          </div>
                          <h5 className={styles.class_six_topics}>
                            জীবন ও জীবিকা
                          </h5>
                          <h5 className={styles.class_six_std_name}>
                            সামিনা চৌধুরী
                          </h5>
                          <h5 className={styles.class_six_branch}>
                            পদ্মা শাথা : <span> PI:৬.১.১</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2">
                      <div className="card shadow-lg border-0 p-1 p-lg-3 my-3 teacher-list-card">
                        <div className="gap-1 gap-lg-3 justify-content-center">
                          <div className="d-flex justify-content-center py-2 pb-4">
                            <div
                              className={`p-3 border border-1 border-light rounded-circle ${styles.icon_bg_color}`}
                            >
                              <div className={styles.icons}>
                                <SlBookOpen className="fs-3" />
                              </div>
                            </div>
                          </div>
                          <h5 className={styles.class_six_topics}>
                            জীবন ও জীবিকা
                          </h5>
                          <h5 className={styles.class_six_std_name}>
                            সামিনা চৌধুরী
                          </h5>
                          <h5 className={styles.class_six_branch}>
                            পদ্মা শাথা : <span> PI:৬.১.১</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2">
                      <div className="card shadow-lg border-0 p-1 p-lg-3 my-3 teacher-list-card">
                        <div className="gap-1 gap-lg-3 justify-content-center">
                          <div className="d-flex justify-content-center py-2 pb-4">
                            <div
                              className={`p-3 border border-1 border-light rounded-circle ${styles.icon_bg_color}`}
                            >
                              <div className={styles.icons}>
                                <SlBookOpen className="fs-3" />
                              </div>
                            </div>
                          </div>
                          <h5 className={styles.class_six_topics}>
                            জীবন ও জীবিকা
                          </h5>
                          <h5 className={styles.class_six_std_name}>
                            সামিনা চৌধুরী
                          </h5>
                          <h5 className={styles.class_six_branch}>
                            পদ্মা শাথা : <span> PI:৬.১.১</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2">
                      <div className="card shadow-lg border-0 p-1 p-lg-3 my-3 teacher-list-card">
                        <div className="gap-1 gap-lg-3 justify-content-center">
                          <div className="d-flex justify-content-center py-2 pb-4">
                            <div
                              className={`p-3 border border-1 border-light rounded-circle ${styles.icon_bg_color}`}
                            >
                              <div className={styles.icons}>
                                <SlBookOpen className="fs-3" />
                              </div>
                            </div>
                          </div>
                          <h5 className={styles.class_six_topics}>
                            জীবন ও জীবিকা
                          </h5>
                          <h5 className={styles.class_six_std_name}>
                            সামিনা চৌধুরী
                          </h5>
                          <h5 className={styles.class_six_branch}>
                            পদ্মা শাথা : <span> PI:৬.১.১</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2">
                      <div className="card shadow-lg border-0 p-1 p-lg-3 my-3 teacher-list-card">
                        <div className="gap-1 gap-lg-3 justify-content-center">
                          <div className="d-flex justify-content-center py-2 pb-4">
                            <div
                              className={`p-3 border border-1 border-light rounded-circle ${styles.icon_bg_color}`}
                            >
                              <div className={styles.icons}>
                                <SlBookOpen className="fs-3" />
                              </div>
                            </div>
                          </div>
                          <h5 className={styles.class_six_topics}>
                            জীবন ও জীবিকা
                          </h5>
                          <h5 className={styles.class_six_std_name}>
                            সামিনা চৌধুরী
                          </h5>
                          <h5 className={styles.class_six_branch}>
                            পদ্মা শাথা : <span> PI:৬.১.১</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Class Six subject end */}
            {/* teacher info start */}
            <div className="py-5">
              <div className="d-flex align-items-center py-2 gap-2">
                <div className="card shadow-lg border-0 p-2">
                  <MdArrowBackIosNew className="fs-1" />
                </div>
                <div className="card shadow-lg border-0 p-1 w-100">
                  <div className="d-flex justify-content-between">
                    <div>
                      <div style={{ fontSize: "14px" }}>
                        <BiSidebar
                          className={`fs-3 ${styles.teacher_info_list}`}
                        />{" "}
                        শিক্ষকের তালিকা
                      </div>
                      <div style={{ marginLeft: "2rem" }}>
                        <h6 style={{ color: "#C8DFDF", fontSize: "10px" }}>
                          {" "}
                          <AiOutlineHome />
                          Dashboard{" "}
                          <span style={{ color: "#000" }}>
                            {" "}
                            <MdOutlineArrowForwardIos />
                            Data
                          </span>
                        </h6>
                      </div>
                    </div>
                    <div className="d-flex gap-2 align-items-center fs-4">
                      <FiStar /> <HiOutlineDotsVertical />
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="row">
                  {teachers.map((teacher, index) => (
                    <div key={index} className="card shadow-lg border-0 col-md-3 m-2">
                  
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
                            <h5 className={styles.teacherName}>{teacher.name_en}</h5>
                            <h6 className={styles.deg}>{teacher.position}</h6>
                          </div>
                        </div>
                        <div className="p-1">
                          <HiOutlineDotsVertical
                            className={`fs-4 ${styles.OutlineDotsVertical}`}
                          />
                        </div>
                      </div>
                      <div className="flex-md-column flex-lg-row d-flex  justify-content-start gap-1 p-2 mb-2">
                        <div className={styles.cardDesc}>বাংলা</div>
                        <div className={styles.cardDesc}>জীবন ও জীবিকা</div>
                        <div className={styles.cardDesc}>বিজ্ঞান</div>
                      </div>
                      <div className="">
                        <div className="d-flex" style={{ marginLeft: "-1.5rem" }}>
                          {/* {teachers.map((teacher) => (
                          <div key={teacher.id}>
                            <h5 className={styles.teacherName}>{teacher.name}</h5>
                            <h6 className={styles.deg}>{teacher.position}</h6>
                          </div>))} */}
                          <ul className={`${styles.teacher_info_list_group}`}>
                            <li>
                              {" "}
                              <BiRadioCircle />
                              মোবাইল :
                            </li>
                          </ul>
                          <ul className={`${styles.teacher_info_list_group}`}>
                            <li> {teacher.mobile_no }</li>
                          </ul>
                        </div>
                        <div className="d-flex" style={{ marginLeft: "-1.5rem" }}>
                          <ul className={`${styles.teacher_info_list_group}`}>
                            <li>
                              <BiRadioCircle /> জন্ম তারিখ :
                            </li>
                          </ul>
                          <ul className={`${styles.teacher_info_list_group}`}>
                            <li> ১২/১০/১৯৭৭</li>
                          </ul>
                        </div>
                        <div className="d-flex" style={{ marginLeft: "-1.5rem" }}>
                          <ul className={`${styles.teacher_info_list_group}`}>
                            <li>
                              <BiRadioCircle /> লিঙ্গ :
                            </li>
                          </ul>
                          <ul className={`${styles.teacher_info_list_group}`}>
                            <li> মহিলা</li>
                          </ul>
                        </div>
                        <div className="d-flex" style={{ marginLeft: "-1.5rem" }}>
                          <ul className={`${styles.teacher_info_list_group}`}>
                            <li>
                              <BiRadioCircle /> জাতীয়তা :
                            </li>
                          </ul>
                          <ul className={`${styles.teacher_info_list_group}`}>
                            <li> বাংলাদেশী</li>
                          </ul>
                        </div>
                        <div className="d-flex" style={{ marginLeft: "-1.5rem" }}>
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
                        <div className="d-flex" style={{ marginLeft: "-1.5rem" }}>
                          <ul className={`${styles.teacher_info_list_group}`}>
                            <li>
                              <BiRadioCircle />
                              বৈবাহিক অবস্থা :
                            </li>
                          </ul>
                          <ul className={`${styles.teacher_info_list_group}`}>
                            <li> বিবাহিতা</li>
                          </ul>
                        </div>
                        <div className="d-flex" style={{ marginLeft: "-1.5rem" }}>
                          <ul className={`${styles.teacher_info_list_group}`}>
                            <li>
                              <BiRadioCircle />
                              এনআইডি নম্বর :
                            </li>
                          </ul>
                          <ul className={`${styles.teacher_info_list_group}`}>
                            <li> xxx-xxxxxxxxx</li>
                          </ul>
                        </div>
                        <div className="d-flex" style={{ marginLeft: "-1.5rem" }}>
                          <ul className={`${styles.teacher_info_list_group}`}>
                            <li>
                              <BiRadioCircle />
                              পদবি :
                            </li>
                          </ul>
                          <ul className={`${styles.teacher_info_list_group}`}>
                            <li> সহকারী শিক্ষক</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* <div className="col-sm-6 col-md-4">
                  <div className="card shadow-lg border-0">
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
                          <h5 className={styles.teacherName}>Showkat Ali</h5>
                          <h6 className={styles.deg}>Head Master</h6>
                        </div>
                      </div>
                      <div className="p-1">
                        <HiOutlineDotsVertical
                          className={`fs-4 ${styles.OutlineDotsVertical}`}
                        />
                      </div>
                    </div>
                    <div className="flex-md-column flex-lg-row d-flex  justify-content-start gap-1 p-2 mb-2">
                      <div className={styles.cardDesc}>বাংলা</div>
                      <div className={styles.cardDesc}>জীবন ও জীবিকা</div>
                      <div className={styles.cardDesc}>বিজ্ঞান</div>
                    </div>
                    <div className="">
                      <div className="d-flex" style={{ marginLeft: "-1.5rem" }}>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li>
                            {" "}
                            <BiRadioCircle />
                            মোবাইল :
                          </li>
                        </ul>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li> ০১xxxxxxxxx</li>
                        </ul>
                      </div>
                      <div className="d-flex" style={{ marginLeft: "-1.5rem" }}>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li>
                            <BiRadioCircle /> জন্ম তারিখ :
                          </li>
                        </ul>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li> ১২/১০/১৯৭৭</li>
                        </ul>
                      </div>
                      <div className="d-flex" style={{ marginLeft: "-1.5rem" }}>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li>
                            <BiRadioCircle /> লিঙ্গ :
                          </li>
                        </ul>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li> মহিলা</li>
                        </ul>
                      </div>
                      <div className="d-flex" style={{ marginLeft: "-1.5rem" }}>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li>
                            <BiRadioCircle /> জাতীয়তা :
                          </li>
                        </ul>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li> বাংলাদেশী</li>
                        </ul>
                      </div>
                      <div className="d-flex" style={{ marginLeft: "-1.5rem" }}>
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
                      <div className="d-flex" style={{ marginLeft: "-1.5rem" }}>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li>
                            <BiRadioCircle />
                            বৈবাহিক অবস্থা :
                          </li>
                        </ul>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li> বিবাহিতা</li>
                        </ul>
                      </div>
                      <div className="d-flex" style={{ marginLeft: "-1.5rem" }}>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li>
                            <BiRadioCircle />
                            এনআইডি নম্বর :
                          </li>
                        </ul>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li> xxx-xxxxxxxxx</li>
                        </ul>
                      </div>
                      <div className="d-flex" style={{ marginLeft: "-1.5rem" }}>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li>
                            <BiRadioCircle />
                            পদবি :
                          </li>
                        </ul>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li> সহকারী শিক্ষক</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="card shadow-lg border-0">
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
                          <h5 className={styles.teacherName}>Showkat Ali</h5>
                          <h6 className={styles.deg}>Head Master</h6>
                        </div>
                      </div>
                      <div className="p-1">
                        <HiOutlineDotsVertical
                          className={`fs-4 ${styles.OutlineDotsVertical}`}
                        />
                      </div>
                    </div>
                    <div className="flex-md-column flex-lg-row d-flex  justify-content-start gap-1 p-2 mb-2">
                      <div className={styles.cardDesc}>বাংলা</div>
                      <div className={styles.cardDesc}>জীবন ও জীবিকা</div>
                      <div className={styles.cardDesc}>বিজ্ঞান</div>
                    </div>
                    <div className="">
                      <div className="d-flex" style={{ marginLeft: "-1.5rem" }}>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li>
                            {" "}
                            <BiRadioCircle />
                            মোবাইল :
                          </li>
                        </ul>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li> ০১xxxxxxxxx</li>
                        </ul>
                      </div>
                      <div className="d-flex" style={{ marginLeft: "-1.5rem" }}>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li>
                            <BiRadioCircle /> জন্ম তারিখ :
                          </li>
                        </ul>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li> ১২/১০/১৯৭৭</li>
                        </ul>
                      </div>
                      <div className="d-flex" style={{ marginLeft: "-1.5rem" }}>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li>
                            <BiRadioCircle /> লিঙ্গ :
                          </li>
                        </ul>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li> মহিলা</li>
                        </ul>
                      </div>
                      <div className="d-flex" style={{ marginLeft: "-1.5rem" }}>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li>
                            <BiRadioCircle /> জাতীয়তা :
                          </li>
                        </ul>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li> বাংলাদেশী</li>
                        </ul>
                      </div>
                      <div className="d-flex" style={{ marginLeft: "-1.5rem" }}>
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
                      <div className="d-flex" style={{ marginLeft: "-1.5rem" }}>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li>
                            <BiRadioCircle />
                            বৈবাহিক অবস্থা :
                          </li>
                        </ul>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li> বিবাহিতা</li>
                        </ul>
                      </div>
                      <div className="d-flex" style={{ marginLeft: "-1.5rem" }}>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li>
                            <BiRadioCircle />
                            এনআইডি নম্বর :
                          </li>
                        </ul>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li> xxx-xxxxxxxxx</li>
                        </ul>
                      </div>
                      <div className="d-flex" style={{ marginLeft: "-1.5rem" }}>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li>
                            <BiRadioCircle />
                            পদবি :
                          </li>
                        </ul>
                        <ul className={`${styles.teacher_info_list_group}`}>
                          <li> সহকারী শিক্ষক</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            {/* teacher info end */}
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
