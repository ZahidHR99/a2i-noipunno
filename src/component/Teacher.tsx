/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import {
  all_teachers,
  teacher_dashboard,
  teacher_own_subject,
} from "../Request";

import styles from "./Home.style.module.css";
import { BiSidebar } from "react-icons/bi";
import { SlBookOpen } from "react-icons/sl";
import ProfileCard from "./ProfileCard";
// import { Link } from "react-router-dom";
import { PiBookOpenText } from "react-icons/pi";
import { Link } from "react-router-dom";
import DetailsShikhonMullayon from "./DetailsShikhonMullayon";

const own_SUbjects__: any = localStorage.getItem("own_subjet") || "";
const own_SUbjects = own_SUbjects__ ? JSON.parse(own_SUbjects__) : "";

const teacher_dash__: any = localStorage.getItem("teacher_dashboard") || "";
const teacher_dash = teacher_dash__ ? JSON.parse(teacher_dash__) : "";

export default function Teacher() {
  const [subject, setsubject] = useState([]);
  const [element, setelement] = useState<any>("");
  const [Showcollaps, setShowcollaps] = useState<any>({});
  const [shikhonKalinMullayon, setshikhonKalinMullayon] = useState([]);
  const [allassessmet, setallassessmet] = useState([]);
  const [assessment_uid, setassessment_uid] = useState("");
  const [pi_attrbute, setpi_attrbute] = useState([]);
  const [own_data, setown_data] = useState<any>([]);
  const [selected_subject, setselected_subject] = useState<any>("");
  const [Mullayon_name, setMullayon_name] = useState<any>("");
  const [showSkillBehaibor, seshowSkillBehaibor] = useState(false);
  const [showDetailsshikhonKalinMullayon, setshowDetailsshikhonKalinMullayon] =
    useState<any>("");
  const [showSubject, seshowSubject] = useState(true);
  const [showCompitance, seshowCompitance] = useState(false);
  const [parodorshita_acoron_tab, setparodorshita_acoron_tab] = useState(0);

  const fetchData = async () => {
    let own_subjet: any = "";
    if (own_SUbjects) {
      own_subjet = own_SUbjects;
    } else {
      own_subjet = await teacher_own_subject();
      localStorage.setItem("own_subjet", JSON.stringify(own_subjet));
    }

    let data: any = "";
    if (teacher_dash) {
      data = teacher_dash;
    } else {
      const data_dash: any = await teacher_dashboard();
      data = data_dash.data;
      localStorage.setItem("teacher_dashboard", JSON.stringify(data_dash.data));
    }

    const al_teacher: any = await all_teachers();

    setown_data(own_subjet?.data?.data);

    let all_subject: any = [];
    own_subjet.data.data.subjects.map((d: any) => {
      data.data.subjects.map((d_2: any) => {
        if (d_2.uid === d.subject_id) {
          al_teacher.data.data.map((al_tech: any) => {
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

  const skill_behaibor_count = async (datas: any) => {
    seshowSkillBehaibor(true);
    seshowSubject(false);
    setselected_subject(datas);
    setshikhonKalinMullayon(datas.own_subjet.competence);
    console.log(`datas`, datas);
    setallassessmet(own_data.assessments[0].assessment_details);
  };

  console.log(`assessment_uid`, assessment_uid, element);

  useEffect(() => {
    fetchData();
  }, []);

  const pi_attr = (data: any, e: any = "") => {
    setpi_attrbute(data.pi_attribute);
    setelement(e);
  };

  console.log(`Showcollaps`, Showcollaps);

  return (
    <div className="content">
      {subject.length == 0 && "loading..."}

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
                    <h5
                      onClick={(e) => {
                        seshowSubject(true);
                        setelement(e);
                      }}
                    >
                      <BiSidebar /> {showSubject && "বিষয়সমূহ"}
                      {showSkillBehaibor && "পারদর্শিতা এবং আচরণগত মূল্যায়ন"}
                    </h5>
                  </div>
                </div>
                <div className="row">
                  {showSubject && (
                    <>
                      {subject.map((d: any, key: any) => (
                        <div
                          className="col-6 col-sm-4 col-md-6 col-lg-4 col-xl-3"
                          style={{ cursor: "pointer" }}
                          key={key}
                          onClick={(e) => {
                            skill_behaibor_count(d);
                            setelement(e);
                          }}
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
                                {d?.subject.class_uid == "6" ? "ষষ্ঠ" : "সপ্তম"}
                                শ্রেণি
                              </h5>
                              <h5 className={styles.class_teacher}>
                                শ্রেণি শিক্ষক :
                                <span> {d?.teacher?.name_en}</span>
                              </h5>
                            </div>
                            <div className="flex-md-row flex-lg-row d-flex  justify-content-center gap-2">
                              <h6 className={styles.session}>প্রভাতি সেশন</h6>
                              <h6 className={styles.horizontal_bar}>। </h6>
                              <h6 className={styles.branch}>পদ্মা শাথা</h6>
                            </div>
                          </div>
                        </div>
                      ))}
                    </>
                  )}

                  {showSkillBehaibor && (
                    <div className="row">
                      <ul className="nav justify-content-around bg-white py-1 rounded assestment-tabs ">
                        {own_data?.assessments.map((d: any, key: any) => (
                          <li className="nav-item fs-4 py-2" key={key}>
                            <a
                              className={
                                key === 0
                                  ? "nav-link link-secondary active"
                                  : "nav-link link-secondary"
                              }
                              id={key === 0 ? "provati" : "sondha_session"}
                              data-bs-toggle="tab"
                              data-bs-target={
                                key === 0
                                  ? "#provati-tab"
                                  : "#sondha_session-tab"
                              }
                              onClick={(e) => {
                                setparodorshita_acoron_tab(key);
                                setallassessmet(d?.assessment_details);
                                setelement(e);
                              }}
                              href="#"
                            >
                              {d.assessment_name_bn}
                            </a>
                          </li>
                        ))}
                      </ul>
                      <div className="tab-content p-2" id="tabContent">
                        <div
                          className={
                            parodorshita_acoron_tab === 0
                              ? "tab-pane fade show active"
                              : "tab-pane fade"
                          }
                          id="provati"
                          role="tabpanel"
                          aria-labelledby="provati-tab"
                        >
                          <div className="row">
                            <ul className="nav justify-content-around bg-white py-1 rounded">
                              {allassessmet?.map((ass_d: any, ky: any) => (
                                <li
                                  style={{ cursor: "pointer" }}
                                  className="nav-item fs-6 py-1"
                                  key={ky}
                                  onClick={(e: any) => {
                                    setelement(e);
                                    seshowCompitance(true);
                                    setassessment_uid(ass_d.uid);
                                    setMullayon_name(
                                      ass_d.assessment_details_name_bn
                                    );
                                  }}
                                >
                                  {ass_d.assessment_details_name_bn}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div
                          className={
                            parodorshita_acoron_tab === 1
                              ? "tab-pane fade show active"
                              : "tab-pane fade"
                          }
                          id="sondha_session"
                          role="tabpanel"
                          aria-labelledby="sondha_session-tab"
                        >
                          <div className="row">
                            <ul className="nav justify-content-around bg-white py-1 rounded">
                              {allassessmet.map((ass_d: any, ky: any) => (
                                <li
                                  style={{ cursor: "pointer" }}
                                  className="nav-item fs-6 py-1"
                                  key={ky}
                                  onClick={(e: any) => {
                                    setelement(e);
                                    seshowCompitance(true);
                                    setassessment_uid(ass_d.uid);
                                    setMullayon_name(
                                      ass_d.assessment_details_name_bn
                                    );
                                  }}
                                >
                                  {ass_d.assessment_details_name_bn}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {showCompitance && (
                    <>
                      <div className="py-5">
                        <h3
                          className="text-center py-2 text-white"
                          style={{ backgroundColor: "#428F92" }}
                        >
                          {Mullayon_name} / অভিজ্ঞতা
                        </h3>
                        <h5>অধ্যায় নির্বাচন করুন</h5>
                        <div className="row">
                          {shikhonKalinMullayon.map((d: any, key: any) => (
                            <>
                              <div
                                key={key}
                                onClick={(e: any) => {
                                  setshowDetailsshikhonKalinMullayon(d);
                                  setelement(e);
                                  setShowcollaps({
                                    ...Showcollaps,
                                    [key]: Showcollaps[key]
                                      ? !Showcollaps[key]
                                      : true,
                                  });
                                }}
                                style={{ cursor: "pointer" }}
                                className="col-sm-12 col-md-12"
                              >
                                <div
                                  className={`d-flex align-items-center py-2 gap-2`}
                                >
                                  <div
                                    className={`card shadow-lg border-0 p-1 w-100 ${styles.card_hover}`}
                                  >
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex justify-content-between align-items-center w-100 px-1">
                                        <div
                                          className="py-2"
                                          style={{ color: "#428F92" }}
                                        >
                                          <PiBookOpenText className="me-2" />
                                          {d.name_bn}
                                        </div>
                                        <div
                                          className="px-2 rounded text-white"
                                          style={{ backgroundColor: "#428F92" }}
                                        >
                                          {d?.pis.length}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div
                                className={
                                  Showcollaps[key] && Showcollaps[key] == true
                                    ? "collapse show"
                                    : "collapse"
                                }
                              >
                                <div className="card card-body">
                                  {showDetailsshikhonKalinMullayon && (
                                    <DetailsShikhonMullayon
                                      showDetailsshikhonKalinMullayon={
                                        showDetailsshikhonKalinMullayon
                                      }
                                      assessment_uid={assessment_uid}
                                      pi_attr={pi_attr}
                                    />
                                  )}
                                </div>
                              </div>
                            </>
                          ))}
                        </div>
                      </div>
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
