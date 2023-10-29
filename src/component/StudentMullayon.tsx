import React from "react";
import TeacherImg from "../assets/images/teacher.png";
import { FiStar } from "react-icons/fi";
import { useState, useEffect } from "react";

import styles from "./Home.style.module.css";
import { BiSidebar } from "react-icons/bi";
import { BsCloudSun, BsMoon } from "react-icons/bs";
import { SlBookOpen } from "react-icons/sl";
import { HiOutlineSun, HiOutlineDotsVertical } from "react-icons/hi";
import ProfileCard from "./ProfileCard";

export default function StudentMullayon() {

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


                
                </div>
                
              </div>
            </div>
            
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
