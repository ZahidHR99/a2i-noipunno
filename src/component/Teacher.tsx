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

const own_SUbjects__: any = localStorage.getItem("own_subjet") || "";
const own_SUbjects = own_SUbjects__ ? JSON.parse(own_SUbjects__) : "";


const teacher_dash__: any = localStorage.getItem("teacher_dashboard") || "";
const teacher_dash = teacher_dash__ ? JSON.parse(teacher_dash__) : "";

export default function Teacher() {
  const [subject, setsubject] = useState([]);
  const [element, setelement] = useState<any>("");
  const [shikhonKalinMullayon, setshikhonKalinMullayon] = useState([]);
  const [allassessmet, setallassessmet] = useState([]);
  const [assessment_uid, setassessment_uid] = useState("");
  const [pi_attrbute, setpi_attrbute] = useState([]);
  const [own_data, setown_data] = useState<any>([]);
  const [selected_subject, setselected_subject] = useState<any>("");
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
      const data_dash :any = await teacher_dashboard();
      data = data_dash.data
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
    setshikhonKalinMullayon(datas.own_subjet.competence);
    console.log(`datas`, datas.own_subjet);
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
                      <BiSidebar /> {showSubject && "বিষয়সমূহ"}{" "}
                      {showSkillBehaibor && "পারদর্শিতা এবং আচরণগত মূল্যায়ন"}
                    </h5>
                  </div>
                </div>
                <div className="row">
                  {showSubject && (
                    <>
                      {subject.map((d: any, key: any) => (
                        <div
                          className="col-6 col-sm-4 col-md-3"
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

                  {showSkillBehaibor && (
                    <div className="row">
                      <ul className="nav justify-content-around bg-white py-1 rounded assestment-tabs ">
                        {own_data?.assessments.map((d: any, key: any) => (
                          <li className="nav-item" key={key}>
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
                      <div className="tab-content" id="tabContent">
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
                                  className="nav-item"
                                  key={ky}
                                  onClick={(e: any) => {
                                    setelement(e);
                                    seshowCompitance(true);
                                    setassessment_uid(ass_d.uid);
                                  }}
                                >
                                  {" "}
                                  {ass_d.assessment_details_name_bn}{" "}
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
                            {allassessmet.map((ass_d: any, ky: any) => (
                              <li
                                style={{ cursor: "pointer" }}
                                className="nav-item"
                                key={ky}
                                onClick={(e: any) => {
                                  setelement(e);
                                  seshowCompitance(true);
                                }}
                              >
                                {" "}
                                {ass_d.assessment_details_name_bn}{" "}
                              </li>
                            ))}
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
                          শিখনকালীন মূল্যায়ন / অধ্যায়
                        </h3>
                        <h5>অধ্যায় নির্বাচন করুন</h5>
                        <div className="row">
                          {shikhonKalinMullayon.map((d: any, key: any) => (
                            <div
                              key={key}
                              onClick={(e: any) => {
                                setshowDetailsshikhonKalinMullayon(d);
                                setelement(e);
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
                                        <PiBookOpenText className="me-2" />{" "}
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
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  <br />

                  {showDetailsshikhonKalinMullayon && (
                    <div className="py-5">
                      <h3
                        className="text-center py-2 text-white"
                        style={{ backgroundColor: "#428F92" }}
                      >
                        শিখনকালীন মূল্যায়ন / অধ্যায়{" "}
                        {showDetailsshikhonKalinMullayon?.competence_id} /{" "}
                        {showDetailsshikhonKalinMullayon?.competence_id}.
                        {showDetailsshikhonKalinMullayon?.class_uid}
                      </h3>
                      <h5>{showDetailsshikhonKalinMullayon?.details_bn}</h5>
                      <div className="row">
                        {showDetailsshikhonKalinMullayon?.pis?.map(
                          (d: any, ky: any) => (
                            <div className="col-sm-6 col-md-12" key={ky}>
                              <div
                                className={`d-flex align-items-center py-2 gap-2`}
                              >
                                <div className={`border-0 p-1 w-100`}>
                                  <div className="d-flex justify-content-between">
                                    <div className="d-flex justify-content-between align-items-center w-100 px-1">
                                      <div
                                        className="py-2"
                                        style={{ color: "#428F92" }}
                                      >
                                        <h6>
                                          {
                                            showDetailsshikhonKalinMullayon?.class_uid
                                          }
                                          .
                                          {
                                            showDetailsshikhonKalinMullayon?.competence_id
                                          }
                                          .{d?.pi_id}
                                        </h6>

                                        <Link
                                          onClick={(e) => {
                                            localStorage.setItem(
                                              "pi_attr",
                                              JSON.stringify(d?.pi_attribute)
                                            );

                                            localStorage.setItem(
                                              "pi_attr_name",
                                              d?.name_bn
                                            );
                                          }}
                                          to={"/student-mullayon/" +
                                          assessment_uid +
                                          "/" +
                                          showDetailsshikhonKalinMullayon.uid}
                                          // to={
                                          //   "/student-mullayon/" +
                                          //   assessment_uid +
                                          //   "/" +
                                          //   showDetailsshikhonKalinMullayon.uid
                                          // }
                                          className="text-decoration-none"
                                        >
                                          <h6
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal"
                                            onClick={(e: any) => pi_attr(d, e)}
                                          >
                                            {d?.name_bn}
                                          </h6>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div style={{width: '100%', height: '100%', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 26, display: 'inline-flex'}}>
    <div style={{flex: '1 1 0', background: 'white', boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.10)', borderRadius: 6, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
        <div style={{alignSelf: 'stretch', height: 633, paddingLeft: 24, paddingRight: 24, paddingTop: 15, paddingBottom: 15, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 15, display: 'flex'}}>
            <div style={{alignSelf: 'stretch', paddingTop: 10, paddingBottom: 10, borderBottom: '1px #E5E5E5 solid', justifyContent: 'flex-start', alignItems: 'center', gap: 15, display: 'inline-flex'}}>
                <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 2, display: 'inline-flex'}}>
                    <div style={{color: '#222222', fontSize: 28, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 38, wordWrap: 'break-word'}}>শিক্ষার্থীর নাম: ইনতিশার পারভেজ </div>
                    <div style={{color: '#222222', fontSize: 20, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 30, wordWrap: 'break-word'}}>রোল নম্বর  #৩২১০০</div>
                </div>
                <div style={{justifyContent: 'flex-end', alignItems: 'center', gap: 16, display: 'flex'}}>
                    <div style={{width: 170, height: 48, paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, background: '#E4FEFF', borderRadius: 4, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                        <div style={{height: 24, justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
                            <div style={{width: 20, height: 20, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                                <div style={{width: 20, height: 20, position: 'relative'}}>
                                    <div style={{width: 1.67, height: 5, left: 7.50, top: 9.17, position: 'absolute', border: '1.50px #428F92 solid'}}></div>
                                    <div style={{width: 1.67, height: 1.67, left: 5.83, top: 12.50, position: 'absolute', border: '1.50px #428F92 solid'}}></div>
                                    <div style={{width: 16.67, height: 16.67, left: 1.67, top: 1.67, position: 'absolute', border: '1.50px #428F92 solid'}}></div>
                                    <div style={{width: 6.67, height: 6.67, left: 11.67, top: 1.67, position: 'absolute', border: '1.50px #428F92 solid'}}></div>
                                    <div style={{width: 20, height: 20, left: 0, top: 0, position: 'absolute', opacity: 0}}></div>
                                </div>
                            </div>
                            <div style={{color: '#428F92', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', textTransform: 'capitalize', lineHeight: 24, letterSpacing: 0.32, wordWrap: 'break-word'}}>ডাউনলোড করুন</div>
                        </div>
                    </div>
                    <div style={{width: 48, height: 48, background: '#FFFAE6', borderRadius: 100, justifyContent: 'space-between', alignItems: 'center', display: 'flex'}}>
                        <div style={{width: 24, height: 24, position: 'relative', transform: 'rotate(180deg)', transformOrigin: '0 0'}}>
                            <div style={{width: 24, height: 24, left: 24, top: 24, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', opacity: 0, border: '1px #555555 solid'}}></div>
                            <div style={{width: 15.84, height: 7.10, left: 4.08, top: 8.95, position: 'absolute', border: '1.50px #555555 solid'}}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{alignSelf: 'stretch', height: 46, borderTopLeftRadius: 6, borderTopRightRadius: 6, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
                <div style={{alignSelf: 'stretch', background: 'white', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                        <div style={{width: 101, height: 46, paddingLeft: 10, paddingRight: 10, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
                            <div style={{height: 44, paddingTop: 10, paddingBottom: 10, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                <div style={{width: 24, height: 24, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                                    <div style={{width: 24, height: 24, position: 'relative'}}>
                                        <div style={{width: 20, height: 18.67, left: 2, top: 2.66, position: 'absolute', border: '1.50px #222222 solid'}}></div>
                                        <div style={{width: 0, height: 15, left: 12, top: 5.49, position: 'absolute', border: '1.50px #222222 solid'}}></div>
                                        <div style={{width: 4, height: 5.22, left: 15, top: 2.78, position: 'absolute', border: '1.50px #222222 solid'}}></div>
                                        <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', opacity: 0, border: '1px #222222 solid'}}></div>
                                    </div>
                                </div>
                                <div style={{textAlign: 'center', color: '#222222', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: 22, wordWrap: 'break-word'}}>বাংলা</div>
                            </div>
                            <div style={{alignSelf: 'stretch', height: 2, background: '#428F92'}} />
                        </div>
                    </div>
                    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                        <div style={{alignSelf: 'stretch', height: 46, paddingLeft: 10, paddingRight: 10, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
                            <div style={{paddingTop: 10, paddingBottom: 10, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                <div style={{width: 24, height: 24, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                                    <div style={{width: 24, height: 24, position: 'relative'}}>
                                        <div style={{width: 20, height: 18.67, left: 2, top: 2.66, position: 'absolute', border: '1.50px #222222 solid'}}></div>
                                        <div style={{width: 0, height: 15, left: 12, top: 5.49, position: 'absolute', border: '1.50px #555555 solid'}}></div>
                                        <div style={{width: 2.25, height: 0, left: 5.50, top: 8.49, position: 'absolute', border: '1.50px #555555 solid'}}></div>
                                        <div style={{width: 3, height: 0, left: 5.50, top: 11.49, position: 'absolute', border: '1.50px #555555 solid'}}></div>
                                        <div style={{width: 24, height: 24, left: 24, top: 24, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', opacity: 0, border: '1px #555555 solid'}}></div>
                                    </div>
                                </div>
                                <div style={{textAlign: 'center', color: '#555555', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: 22, wordWrap: 'break-word'}}>গনিত</div>
                            </div>
                            <div style={{alignSelf: 'stretch', height: 2, opacity: 0, background: '#428F92'}} />
                        </div>
                    </div>
                    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                        <div style={{alignSelf: 'stretch', height: 46, paddingLeft: 10, paddingRight: 10, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
                            <div style={{paddingTop: 10, paddingBottom: 10, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                <div style={{width: 24, height: 24, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                                    <div style={{width: 24, height: 24, position: 'relative'}}>
                                        <div style={{width: 20, height: 18.67, left: 2, top: 2.66, position: 'absolute', border: '1.50px #222222 solid'}}></div>
                                        <div style={{width: 0, height: 15, left: 12, top: 5.49, position: 'absolute', border: '1.50px #555555 solid'}}></div>
                                        <div style={{width: 2.25, height: 0, left: 5.50, top: 8.49, position: 'absolute', border: '1.50px #555555 solid'}}></div>
                                        <div style={{width: 3, height: 0, left: 5.50, top: 11.49, position: 'absolute', border: '1.50px #555555 solid'}}></div>
                                        <div style={{width: 24, height: 24, left: 24, top: 24, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', opacity: 0, border: '1px #555555 solid'}}></div>
                                    </div>
                                </div>
                                <div style={{textAlign: 'center', color: '#555555', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: 22, wordWrap: 'break-word'}}>ইংরেজি</div>
                            </div>
                            <div style={{alignSelf: 'stretch', height: 2, opacity: 0, background: '#428F92'}} />
                        </div>
                    </div>
                    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                        <div style={{alignSelf: 'stretch', height: 46, paddingLeft: 10, paddingRight: 10, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
                            <div style={{paddingTop: 10, paddingBottom: 10, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                <div style={{width: 24, height: 24, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                                    <div style={{width: 24, height: 24, position: 'relative'}}>
                                        <div style={{width: 20, height: 18.67, left: 2, top: 2.66, position: 'absolute', border: '1.50px #222222 solid'}}></div>
                                        <div style={{width: 0, height: 15, left: 12, top: 5.49, position: 'absolute', border: '1.50px #555555 solid'}}></div>
                                        <div style={{width: 2.25, height: 0, left: 5.50, top: 8.49, position: 'absolute', border: '1.50px #555555 solid'}}></div>
                                        <div style={{width: 3, height: 0, left: 5.50, top: 11.49, position: 'absolute', border: '1.50px #555555 solid'}}></div>
                                        <div style={{width: 24, height: 24, left: 24, top: 24, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', opacity: 0, border: '1px #555555 solid'}}></div>
                                    </div>
                                </div>
                                <div style={{textAlign: 'center', color: '#555555', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: 22, wordWrap: 'break-word'}}>জীবন ও জীবিকা</div>
                            </div>
                            <div style={{alignSelf: 'stretch', height: 2, opacity: 0, background: '#428F92'}} />
                        </div>
                    </div>
                    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                        <div style={{alignSelf: 'stretch', height: 46, paddingLeft: 10, paddingRight: 10, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
                            <div style={{paddingTop: 10, paddingBottom: 10, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                <div style={{width: 24, height: 24, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                                    <div style={{width: 24, height: 24, position: 'relative'}}>
                                        <div style={{width: 20, height: 18.67, left: 2, top: 2.66, position: 'absolute', border: '1.50px #222222 solid'}}></div>
                                        <div style={{width: 0, height: 15, left: 12, top: 5.49, position: 'absolute', border: '1.50px #555555 solid'}}></div>
                                        <div style={{width: 2.25, height: 0, left: 5.50, top: 8.49, position: 'absolute', border: '1.50px #555555 solid'}}></div>
                                        <div style={{width: 3, height: 0, left: 5.50, top: 11.49, position: 'absolute', border: '1.50px #555555 solid'}}></div>
                                        <div style={{width: 24, height: 24, left: 24, top: 24, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', opacity: 0, border: '1px #555555 solid'}}></div>
                                    </div>
                                </div>
                                <div style={{textAlign: 'center', color: '#555555', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: 22, wordWrap: 'break-word'}}>স্বাস্থ্য সুরক্ষা</div>
                            </div>
                            <div style={{alignSelf: 'stretch', height: 2, opacity: 0, background: '#428F92'}} />
                        </div>
                    </div>
                    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                        <div style={{alignSelf: 'stretch', height: 46, paddingLeft: 10, paddingRight: 10, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
                            <div style={{paddingTop: 10, paddingBottom: 10, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                <div style={{width: 24, height: 24, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                                    <div style={{width: 24, height: 24, position: 'relative'}}>
                                        <div style={{width: 20, height: 18.67, left: 2, top: 2.66, position: 'absolute', border: '1.50px #222222 solid'}}></div>
                                        <div style={{width: 0, height: 15, left: 12, top: 5.49, position: 'absolute', border: '1.50px #555555 solid'}}></div>
                                        <div style={{width: 2.25, height: 0, left: 5.50, top: 8.49, position: 'absolute', border: '1.50px #555555 solid'}}></div>
                                        <div style={{width: 3, height: 0, left: 5.50, top: 11.49, position: 'absolute', border: '1.50px #555555 solid'}}></div>
                                        <div style={{width: 24, height: 24, left: 24, top: 24, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', opacity: 0, border: '1px #555555 solid'}}></div>
                                    </div>
                                </div>
                                <div style={{textAlign: 'center', color: '#555555', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: 22, wordWrap: 'break-word'}}>ডিজিটাল প্রযুক্তি</div>
                            </div>
                            <div style={{alignSelf: 'stretch', height: 2, opacity: 0, background: '#428F92'}} />
                        </div>
                    </div>
                    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                        <div style={{alignSelf: 'stretch', height: 46, paddingLeft: 10, paddingRight: 10, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
                            <div style={{paddingTop: 10, paddingBottom: 10, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                <div style={{width: 24, height: 24, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                                    <div style={{width: 24, height: 24, position: 'relative'}}>
                                        <div style={{width: 20, height: 18.67, left: 2, top: 2.66, position: 'absolute', border: '1.50px #222222 solid'}}></div>
                                        <div style={{width: 0, height: 15, left: 12, top: 5.49, position: 'absolute', border: '1.50px #555555 solid'}}></div>
                                        <div style={{width: 2.25, height: 0, left: 5.50, top: 8.49, position: 'absolute', border: '1.50px #555555 solid'}}></div>
                                        <div style={{width: 3, height: 0, left: 5.50, top: 11.49, position: 'absolute', border: '1.50px #555555 solid'}}></div>
                                        <div style={{width: 24, height: 24, left: 24, top: 24, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', opacity: 0, border: '1px #555555 solid'}}></div>
                                    </div>
                                </div>
                                <div style={{textAlign: 'center', color: '#555555', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: 22, wordWrap: 'break-word'}}>ইসলাম শিক্ষা </div>
                            </div>
                            <div style={{alignSelf: 'stretch', height: 2, opacity: 0, background: '#428F92'}} />
                        </div>
                    </div>
                    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                        <div style={{alignSelf: 'stretch', height: 46, paddingLeft: 10, paddingRight: 10, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
                            <div style={{paddingTop: 10, paddingBottom: 10, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                <div style={{width: 24, height: 24, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                                    <div style={{width: 24, height: 24, position: 'relative'}}>
                                        <div style={{width: 20, height: 18.67, left: 2, top: 2.66, position: 'absolute', border: '1.50px #222222 solid'}}></div>
                                        <div style={{width: 0, height: 15, left: 12, top: 5.49, position: 'absolute', border: '1.50px #555555 solid'}}></div>
                                        <div style={{width: 2.25, height: 0, left: 5.50, top: 8.49, position: 'absolute', border: '1.50px #555555 solid'}}></div>
                                        <div style={{width: 3, height: 0, left: 5.50, top: 11.49, position: 'absolute', border: '1.50px #555555 solid'}}></div>
                                        <div style={{width: 24, height: 24, left: 24, top: 24, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', opacity: 0, border: '1px #555555 solid'}}></div>
                                    </div>
                                </div>
                                <div style={{textAlign: 'center', color: '#555555', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: 22, wordWrap: 'break-word'}}>বিজ্ঞান</div>
                            </div>
                            <div style={{alignSelf: 'stretch', height: 2, opacity: 0, background: '#428F92'}} />
                        </div>
                    </div>
                    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                        <div style={{alignSelf: 'stretch', height: 46, paddingLeft: 10, paddingRight: 10, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
                            <div style={{paddingTop: 10, paddingBottom: 10, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                <div style={{width: 24, height: 24, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                                    <div style={{width: 24, height: 24, position: 'relative'}}>
                                        <div style={{width: 20, height: 18.67, left: 2, top: 2.66, position: 'absolute', border: '1.50px #222222 solid'}}></div>
                                        <div style={{width: 0, height: 15, left: 12, top: 5.49, position: 'absolute', border: '1.50px #555555 solid'}}></div>
                                        <div style={{width: 2.25, height: 0, left: 5.50, top: 8.49, position: 'absolute', border: '1.50px #555555 solid'}}></div>
                                        <div style={{width: 3, height: 0, left: 5.50, top: 11.49, position: 'absolute', border: '1.50px #555555 solid'}}></div>
                                        <div style={{width: 24, height: 24, left: 24, top: 24, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', opacity: 0, border: '1px #555555 solid'}}></div>
                                    </div>
                                </div>
                                <div style={{textAlign: 'center', color: '#555555', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: 22, wordWrap: 'break-word'}}>জীবন ও জীবিকা</div>
                            </div>
                            <div style={{alignSelf: 'stretch', height: 2, opacity: 0, background: '#428F92'}} />
                        </div>
                    </div>
                    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                        <div style={{alignSelf: 'stretch', height: 46, paddingLeft: 10, paddingRight: 10, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
                            <div style={{paddingTop: 10, paddingBottom: 10, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                <div style={{width: 24, height: 24, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                                    <div style={{width: 24, height: 24, position: 'relative'}}>
                                        <div style={{width: 20, height: 18.67, left: 2, top: 2.66, position: 'absolute', border: '1.50px #222222 solid'}}></div>
                                        <div style={{width: 0, height: 15, left: 12, top: 5.49, position: 'absolute', border: '1.50px #555555 solid'}}></div>
                                        <div style={{width: 2.25, height: 0, left: 5.50, top: 8.49, position: 'absolute', border: '1.50px #555555 solid'}}></div>
                                        <div style={{width: 3, height: 0, left: 5.50, top: 11.49, position: 'absolute', border: '1.50px #555555 solid'}}></div>
                                        <div style={{width: 24, height: 24, left: 24, top: 24, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', opacity: 0, border: '1px #555555 solid'}}></div>
                                    </div>
                                </div>
                                <div style={{textAlign: 'center', color: '#555555', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: 22, wordWrap: 'break-word'}}>জীবন ও জীবিকা</div>
                            </div>
                            <div style={{alignSelf: 'stretch', height: 2, opacity: 0, background: '#428F92'}} />
                        </div>
                    </div>
                </div>
            </div>
            <div style={{alignSelf: 'stretch', height: 437, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 6, display: 'flex'}}>
                <div style={{alignSelf: 'stretch', height: 120, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
                    <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                        <div style={{flex: '1 1 0', alignSelf: 'stretch', padding: 20, borderRadius: 4, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 5, display: 'inline-flex'}}>
                            <div style={{alignSelf: 'stretch', color: '#222222', fontSize: 18, fontFamily: 'Noto Sans Bengali', fontWeight: '400', lineHeight: 28, wordWrap: 'break-word'}}>পারদর্শিতা সূচক ৬.১.১ </div>
                            <div style={{alignSelf: 'stretch', color: '#222222', fontSize: 16, fontFamily: 'Noto Sans Bengali', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>নিজের এবং অন্যের প্রয়োজন ও  আবেগ বিবেচনায় নিয়ে যোগাযোগ করতে পারছে।</div>
                        </div>
                        <div style={{flex: '1 1 0', alignSelf: 'stretch', padding: 20, background: 'white', boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.10)', borderRadius: 4, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                            <div style={{alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                <div style={{flex: '1 1 0', color: '#222222', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>অন্যের সাথে যোগাযোগের সময়ে নিজের চাহিদা প্রকাশ করতে পারছে।</div>
                            </div>
                        </div>
                        <div style={{flex: '1 1 0', alignSelf: 'stretch', padding: 20, background: '#F0FAE9', boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.10)', borderRadius: 4, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                            <div style={{alignSelf: 'stretch', justifyContent: 'center', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                                <div style={{width: 24, height: 24, paddingTop: 2, paddingBottom: 2, paddingLeft: 2.50, paddingRight: 1.50, background: '#69CB1C', borderRadius: 15, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                                    <div style={{width: 20, height: 20, position: 'relative', borderRadius: 35, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                                        <div style={{width: 20, height: 20, opacity: 0, border: '1px white solid'}}></div>
                                        <div style={{width: 11.67, height: 7.50, border: '1.50px white solid'}}></div>
                                    </div>
                                </div>
                                <div style={{flex: '1 1 0', color: '#222222', fontSize: 14, fontFamily: 'Roboto', fontWeight: '700', lineHeight: 20, wordWrap: 'break-word'}}>অন্যের কাছে নিজের চাহিদা প্রকাশ করার সময় ঐ ব্যক্তির আগ্রহ, চাহিদা ও আবেগ বিবেচনায় নিতে পারছে।</div>
                            </div>
                        </div>
                        <div style={{flex: '1 1 0', alignSelf: 'stretch', padding: 20, background: 'white', boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.10)', borderRadius: 4, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                            <div style={{alignSelf: 'stretch', justifyContent: 'center', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                                <div style={{flex: '1 1 0', color: '#222222', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>অন্যের কাছে নিজের চাহিদা প্রকাশ করার সময় পরিবেশ - পরিস্থিতির ভিন্নতা অনুযায়ী ব্যক্তির আগ্রহ, চাহিদা ও আবেগ বিবেচনায় নিয়ে যোগাযোগ করতে পারছে।</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{alignSelf: 'stretch', height: 93, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
                    <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                        <div style={{flex: '1 1 0', alignSelf: 'stretch', padding: 20, borderRadius: 4, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 5, display: 'inline-flex'}}>
                            <div style={{alignSelf: 'stretch', color: '#222222', fontSize: 18, fontFamily: 'Noto Sans Bengali', fontWeight: '400', lineHeight: 28, wordWrap: 'break-word'}}>পারদর্শিতা সূচক ৬.১.২ </div>
                            <div style={{alignSelf: 'stretch', color: '#222222', fontSize: 16, fontFamily: 'Noto Sans Bengali', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>মর্যাদা বজায় রেখে যোগাযোগ করতে পারছে।</div>
                        </div>
                        <div style={{flex: '1 1 0', alignSelf: 'stretch', padding: 20, background: 'white', boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.10)', borderRadius: 4, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                            <div style={{alignSelf: 'stretch', justifyContent: 'center', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                                <div style={{flex: '1 1 0', color: '#222222', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>ব্যক্তির সাথে সম্পর্কের ধরন অনুযায়ী মর্যাদাপূর্ণ শারীরিক ভাষা প্রয়োগ করতে পারছে </div>
                            </div>
                        </div>
                        <div style={{flex: '1 1 0', alignSelf: 'stretch', padding: 20, background: 'white', boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.10)', borderRadius: 4, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                            <div style={{alignSelf: 'stretch', justifyContent: 'center', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                                <div style={{flex: '1 1 0', color: '#222222', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>ব্যক্তির সাথে সম্পর্কের ধরন অনুযায়ী যথাযথভাবে সম্বোধন করতে পারছে </div>
                            </div>
                        </div>
                        <div style={{flex: '1 1 0', alignSelf: 'stretch', padding: 20, background: '#F0FAE9', boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.10)', borderRadius: 4, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                            <div style={{alignSelf: 'stretch', justifyContent: 'center', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                                <div style={{width: 24, height: 24, paddingTop: 2, paddingBottom: 2, paddingLeft: 2.50, paddingRight: 1.50, background: '#69CB1C', borderRadius: 15, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                                    <div style={{width: 20, height: 20, position: 'relative', borderRadius: 35, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                                        <div style={{width: 20, height: 20, opacity: 0, border: '1px white solid'}}></div>
                                        <div style={{width: 11.67, height: 7.50, border: '1.50px white solid'}}></div>
                                    </div>
                                </div>
                                <div style={{flex: '1 1 0', color: '#222222', fontSize: 14, fontFamily: 'Roboto', fontWeight: '700', lineHeight: 20, wordWrap: 'break-word'}}>মর্যাদাপূর্ণ শারীরিক ভাষা প্রয়োগের পাশাপাশি ব্যাক্তির সাথে সম্পর্কের ধরন অনুযায়ী যথাযথভাবে সম্বোধন করতে পারছে </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{alignSelf: 'stretch', height: 113, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
                    <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                        <div style={{flex: '1 1 0', alignSelf: 'stretch', padding: 20, borderRadius: 4, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 5, display: 'inline-flex'}}>
                            <div style={{alignSelf: 'stretch', color: '#222222', fontSize: 18, fontFamily: 'Noto Sans Bengali', fontWeight: '400', lineHeight: 28, wordWrap: 'break-word'}}>পারদর্শিতা সূচক ৬.২.১</div>
                            <div style={{alignSelf: 'stretch', color: '#222222', fontSize: 16, fontFamily: 'Noto Sans Bengali', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>বাংলা ধ্বনি ও শব্দের প্রমিত উচ্চারণ করতে পারছে </div>
                        </div>
                        <div style={{flex: '1 1 0', alignSelf: 'stretch', padding: 20, background: '#F0FAE9', boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.10)', borderRadius: 4, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                            <div style={{alignSelf: 'stretch', justifyContent: 'center', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                                <div style={{width: 24, height: 24, paddingTop: 2, paddingBottom: 2, paddingLeft: 2.50, paddingRight: 1.50, background: '#69CB1C', borderRadius: 15, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                                    <div style={{width: 20, height: 20, position: 'relative', borderRadius: 35, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                                        <div style={{width: 20, height: 20, opacity: 0, border: '1px white solid'}}></div>
                                        <div style={{width: 11.67, height: 7.50, border: '1.50px white solid'}}></div>
                                    </div>
                                </div>
                                <div style={{flex: '1 1 0', color: '#222222', fontSize: 14, fontFamily: 'Roboto', fontWeight: '700', lineHeight: 20, wordWrap: 'break-word'}}>বাংলা ধ্বনির প্রমিত উচ্চারণ করতে পারছে </div>
                            </div>
                        </div>
                        <div style={{flex: '1 1 0', alignSelf: 'stretch', padding: 20, background: 'white', boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.10)', borderRadius: 4, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                            <div style={{alignSelf: 'stretch', justifyContent: 'center', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                                <div style={{flex: '1 1 0', color: '#222222', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>পাঠ্যবইয়ের বিভিন্ন শব্দের প্রমিত উচ্চারণ করতে পারছে</div>
                            </div>
                        </div>
                        <div style={{flex: '1 1 0', alignSelf: 'stretch', padding: 20, background: 'white', boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.10)', borderRadius: 4, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                            <div style={{alignSelf: 'stretch', justifyContent: 'center', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                                <div style={{flex: '1 1 0', color: '#222222', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>দৈনন্দিন জীবনে ব্যবহার করা বিভিন্ন শব্দের আঞ্চলিক উচ্চারণ শনাক্ত করে সেগুলোকে প্রমিত রূপে উচ্চারনের অনুশীলন করছে </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{alignSelf: 'stretch', height: 93, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
                    <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                        <div style={{flex: '1 1 0', alignSelf: 'stretch', padding: 20, borderRadius: 4, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 5, display: 'inline-flex'}}>
                            <div style={{alignSelf: 'stretch', color: '#222222', fontSize: 18, fontFamily: 'Noto Sans Bengali', fontWeight: '400', lineHeight: 28, wordWrap: 'break-word'}}>পারদর্শিতা সূচক ৬.২.২</div>
                            <div style={{alignSelf: 'stretch', color: '#222222', fontSize: 16, fontFamily: 'Noto Sans Bengali', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>প্রমিত ভাষায় কথা বলতে পারছে</div>
                        </div>
                        <div style={{flex: '1 1 0', alignSelf: 'stretch', padding: 20, background: 'white', boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.10)', borderRadius: 4, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                            <div style={{alignSelf: 'stretch', justifyContent: 'center', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                                <div style={{flex: '1 1 0', color: '#222222', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>শ্রেণী কার্যক্রম চলাকালে প্রমিত বাংলায় কথা বলার চেষ্টা করছে </div>
                            </div>
                        </div>
                        <div style={{flex: '1 1 0', alignSelf: 'stretch', padding: 20, background: 'white', boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.10)', borderRadius: 4, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                            <div style={{alignSelf: 'stretch', justifyContent: 'center', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                                <div style={{flex: '1 1 0', color: '#222222', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>পরিস্থিতি অনুযায়ী প্রমিত বাংলায় কথা বলতে পারার দক্ষতায় ক্রমান্বয়ে উন্নতি করেছে </div>
                            </div>
                        </div>
                        <div style={{flex: '1 1 0', alignSelf: 'stretch', padding: 20, background: '#F0FAE9', boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.10)', borderRadius: 4, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                            <div style={{alignSelf: 'stretch', justifyContent: 'center', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                                <div style={{width: 24, height: 24, paddingTop: 2, paddingBottom: 2, paddingLeft: 2.50, paddingRight: 1.50, background: '#69CB1C', borderRadius: 15, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                                    <div style={{width: 20, height: 20, position: 'relative', borderRadius: 35, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                                        <div style={{width: 20, height: 20, opacity: 0, border: '1px white solid'}}></div>
                                        <div style={{width: 11.67, height: 7.50, border: '1.50px white solid'}}></div>
                                    </div>
                                </div>
                                <div style={{flex: '1 1 0', color: '#222222', fontSize: 14, fontFamily: 'Roboto', fontWeight: '700', lineHeight: 20, wordWrap: 'break-word'}}>কোনো বিষয়ের উপর প্রমিত বাংলায় কথা <br/>বলতে পারছে </div>
                            </div>
                        </div>
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
