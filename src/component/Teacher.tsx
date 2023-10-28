import React, { useEffect, useState } from "react";
import {
  all_teachers,
  teacher_dashboard,
  teacher_own_subject,
} from "../Request";

import TeacherImg from "../assets/images/teacher.png";

import styles from "./Home.style.module.css";
import { BiSidebar } from "react-icons/bi";
import { BsCloudSun, BsMoon } from "react-icons/bs";
import { SlBookOpen } from "react-icons/sl";
import { HiOutlineSun, HiOutlineDotsVertical } from "react-icons/hi";
import ProfileCard from "./ProfileCard";
import { Link } from "react-router-dom";

export default function Teacher() {
  const [subject, setsubject] = useState([]);
  const [own_data, setown_data] = useState([]);
  const [showSkillBehaibor, seshowSkillBehaibor] = useState(false);
  const [showSubject, seshowSubject] = useState(true);

  const fetchData = async () => {
    const { data }: any = await teacher_dashboard();
    const own_subjet: any = await teacher_own_subject();
    const al_teacher: any = await all_teachers();

    setown_data(own_subjet?.data?.data);

    let all_subject: any = [];
    own_subjet.data.data.subjects.map((d: any, k: any) => {
      data.data.subjects.map((d_2: any, key: any) => {
        if (d_2.uid === d.subject_id) {
          al_teacher.data.data.map((al_tech: any, ky: any) => {
            if (d.teacher_id == al_tech.uid) {
              let obj: any = {
                subject: d_2,
                own_subjet: d,
                teacher: al_tech,
              };

              all_subject.push(obj);
            }
          });
        }
      });
    });

    setsubject(all_subject);
  };

  const skill_behaibor_count = (data: any) => {
    console.log(`data`, data);
  };

  useEffect(() => {
    fetchData();
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
                  {showSubject && (
                    <>
                      {subject.map((d: any, key: any) => (
                        <div
                          className="col-6 col-sm-4 col-md-3"
                          key={key}
                          onClick={(e) => skill_behaibor_count(d)}
                        >
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
                              <h5 className={styles.subject}>
                                {d?.subject?.name}
                              </h5>

                              <h5 className={styles.std_class}>
                                {" "}
                                {d?.subject.class_uid == "6"
                                  ? "ষষ্ঠ"
                                  : "সপ্তম"}{" "}
                                শ্রেণি
                              </h5>
                              <h5 className={styles.class_teacher}>
                                শ্রেণি শিক্ষক :{" "}
                                <span> {d?.teacher?.name_en}</span>
                              </h5>
                            </div>
                            <div className="flex-md-column flex-lg-row d-flex  justify-content-center gap-2">
                              <h6 className={styles.session}>প্রভাতি সেশন</h6>
                              <h6 className={styles.horizontal_bar}>। </h6>
                              <h6 className={styles.branch}>পদ্মা শাথা</h6>
                            </div>
                          </div>
                        </div>
                      ))}
                    </>
                  )}
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
