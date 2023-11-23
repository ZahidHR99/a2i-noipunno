import React from "react";
import {
  all_teachers,
  teacher_dashboard,
  teacher_own_subject,
} from "../Request";
import html2pdf from "html2pdf.js";

import { BsCheckCircle } from "react-icons/bs";
import { useState, useEffect } from "react";
import { PiBookOpenTextBold } from "react-icons/pi";
import { BsFillFileEarmarkArrowDownFill } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import styles from "./Home.style.module.css";
import { IoIosArrowUp } from "react-icons/io";
import { SlBookOpen } from "react-icons/sl";
import {
  section_name,
  shift_name,
  teacher_name,
  branch_name,
} from "../utils/Utils";
import Breadcumb from "../layout/Breadcumb";
// import { toPng } from "html-to-image";
import { toPng } from "html-to-image";
import { jsPDF } from "jspdf";

export default function StudentTranscript() {
  const [shift, setShift] = useState([]);
  const [subject, setsubject] = useState([]);
  const [student_name, setstudent_name] = useState<any>("");

  const [element, setelement] = useState<any>("");
  const [Showcollaps, setShowcollaps] = useState<any>({});
  const [shikhonKalinMullayon, setshikhonKalinMullayon] = useState([]);
  const [allassessmet, setallassessmet] = useState([]);
  const [assessment_uid, setassessment_uid] = useState("");
  const [pi_attrbute, setpi_attrbute] = useState([]);
  const [own_data, setown_data] = useState<any>([]);
  const [all_bis, setall_bis] = useState<any>([]);
  const [selected_subject, setselected_subject] = useState<any>("");
  const [Mullayon_name, setMullayon_name] = useState<any>("");
  const [showSkillBehaibor, seshowSkillBehaibor] = useState(false);
  const [ShowProfile, setShowProfile] = useState(true);
  const [Student, setStudent] = useState<any>([]);
  const [teacher, setteacher] = useState<any>({});
  const [showDetailsshikhonKalinMullayon, setshowDetailsshikhonKalinMullayon] =
    useState<any>("");
  const [showSubject, seshowSubject] = useState(true);
  const [loader, setloader] = useState(true);
  const [showSubjectname, seshowSubjectname] = useState("");
  const [showCompitance, seshowCompitance] = useState(false);
  const [parodorshita_acoron_tab, setparodorshita_acoron_tab] = useState(0);
  const [selectedSunject, setselectedSunject] = useState<any>({});

  const fetchData = async () => {
    const own_SUbjects__: any = localStorage.getItem("own_subjet") || "";
    const own_SUbjects = own_SUbjects__ ? JSON.parse(own_SUbjects__) : "";

    const teacher_dash__: any = localStorage.getItem("teacher_dashboard") || "";
    const teacher_dash = teacher_dash__ ? JSON.parse(teacher_dash__) : "";

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

    // const al_teacher: any = await all_teachers();
    setown_data(own_subjet?.data?.data);
    setteacher(own_subjet.data.data.user);

    let all_subject: any = [];
    own_subjet.data.data.subjects.map((d: any) => {
      data.data.subjects.map((d_2: any) => {
        if (d_2.uid === d.subject_id) {
          data.data.teachers.map((al_tech: any) => {
            if (d.teacher_id == al_tech.uid) {
              let obj: any = {
                subject: d_2,
                own_subjet: d,
                teacher: al_tech,
                section: d.class_room.section_id,
                class: d.class_room.class_id,
                shift: d.class_room.shift_id,
                students: d.class_room.students.student_name_bn,
              };

              all_subject.push(obj);
            }
          });
        }
        // data.data.classes.map((d_3: any) => {
        //   if (d_3.class_id === class) {
        //     let obj: any = {
        //       class: d_3.name_bn,
        //     };

        //   }
        // })
      });
    });
    setall_bis(own_subjet.data.data.bis);

    setsubject(all_subject);
    setloader(false);

    console.log("====================================");
    // console.log("class",class);
    console.log("====================================");
  };

  const skill_behaibor_count = async (datas: any) => {
    seshowSkillBehaibor(true);
    seshowSubject(false);
    setselected_subject(datas);
    setshikhonKalinMullayon(datas.own_subjet.competence);
    setallassessmet(own_data.assessments[0].assessment_details);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const pi_attr = (data: any, e: any = "") => {
    setpi_attrbute(data.pi_attribute);
    setelement(e);
  };

  const handleConvertToPdf = () => {
    const element = document.getElementById("contentToConvert");

    const options = {
      margin: 10,
      filename: "converted-document.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    const pdf = html2pdf().from(element).set(options).outputPdf();
    pdf.save();
  };
  const uniqueSubjects = [
    ...new Set(subject.map((data) => data?.subject?.name)),
  ];
  const uniqueclass = [
    ...new Set(subject.map((data) => data?.subject?.class_uid)),
  ];
  // const uniqueSection = [...new Set(subject.map(data => data?.section?.name))];
  // Render options for unique subjects
  const uniqueSubjectOptions = uniqueSubjects.map((subject, index) => (
    <option key={index} value={subject}>
      {subject}
    </option>
  ));

  console.log("====================================");
  console.log("uniqueclass", subject, uniqueclass);
  console.log("====================================");

  const storeSubjectData = (data: any) => {
    console.log("====================================");
    console.log("data", data);
    console.log("====================================");
    if (data) {
      setselectedSunject(JSON.parse(data));
    } else {
      setselectedSunject({});
    }
  };

  const getSection = (class_id: any) => {
    console.log("====================================", class_id, subject);

    // const uniquesection = [...new Set(subject.map(data => data?.subject?.class_uid == class_id ? data?.subject?.section : ))];
    // if(class_id === subject.class_uid){
    //  const section = subject.sections;
    // }
    const uniqueSections = [
      ...new Set(
        subject
          .filter((data) => data?.subject?.class_uid === class_id)
          .map((data) => data?.subject?.section)
      ),
    ];
  };

  console.log("====================================");
  console.log("subject", subject, selectedSunject);
  console.log("====================================");

  return (
    <div className="">
      {/* report end */}
      {/* expertness assessment start */}

      <div className="container">
        <div className="row">
          <Breadcumb title={"মূল্যায়ন প্রতিবেদন"} />
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
                    <SlBookOpen className="me-1" /> পারদর্শিতার মূল্যায়ন
                    প্রতিবেদন(PI)
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link link-secondary ${styles.nav_tab_bottom_border}`}
                    id="behaviour-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#behaviour"
                    href="#"
                  >
                    <SlBookOpen className="me-1" /> আচরণগত মূল্যায়ন
                    প্রতিবেদন(BI)
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
                    <div className="col-6 col-sm-4 col-md-3">
                      <div className="mb-3" style={{ fontSize: "12px" }}>
                        <label className="form-label">
                          শ্রেণী নির্বাচন করুন
                        </label>
                        <select
                          className="form-select p-2"
                          aria-label="Default select example"
                          style={{ fontSize: "12px" }}
                          onChange={(e: any) => getSection(e.target.value)}
                        >
                          <option selected>Class নির্বাচন করুন</option>
                          {uniqueclass?.map((data, index) => (
                            <option key={index} value={data}>
                              {data}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="col-6 col-sm-4 col-md-3">
                      <div className="mb-3" style={{ fontSize: "12px" }}>
                        <label className="form-label">শাখা নির্বাচন করুন</label>
                        <select
                          className="form-select p-2"
                          aria-label="Default select example"
                          style={{ fontSize: "12px" }}
                        >
                          {selectedSunject?.section ? (
                            <option selected>
                              {section_name(selectedSunject?.section)}
                            </option>
                          ) : (
                            <option selected>শাখা নির্বাচন করুন</option>
                          )}
                        </select>
                      </div>
                    </div>

                    <div className="col-6 col-sm-4 col-md-3">
                      <div className="mb-3" style={{ fontSize: "12px" }}>
                        <label className="form-label">
                          Shift নির্বাচন করুন
                        </label>
                        <select
                          className="form-select p-2"
                          aria-label="Default select example"
                          style={{ fontSize: "12px" }}
                        >
                          {selectedSunject?.shift ? (
                            <option selected>
                              {shift_name(selectedSunject?.shift)}
                            </option>
                          ) : (
                            <option selected>শাখা নির্বাচন করুন</option>
                          )}
                          {/* {shifts?.map((data, index) => (
                              <option key={index} value="1">{data.shift_name}</option>
                              ))} */}
                        </select>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3">
                      <div className="mb-3" style={{ fontSize: "12px" }}>
                        <label className="form-label">বিষয় নির্বাচন করুন</label>
                        <select
                          className="form-select p-2"
                          aria-label="Default select example"
                          style={{ fontSize: "12px" }}
                          onChange={(e) => storeSubjectData(e.target.value)}
                        >
                          <option selected value={""}>
                            বিষয়
                          </option>
                          {uniqueSubjectOptions}
                        </select>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3">
                      <div className="mb-3" style={{ fontSize: "12px" }}>
                        <label className="form-label">
                          ব্রাঞ্চ নির্বাচন করুন
                        </label>
                        <select
                          className="form-select p-2"
                          aria-label="Default select example"
                          style={{ fontSize: "12px" }}
                        >
                          {selectedSunject?.own_subjet?.class_room
                            ?.branch_id ? (
                            <option selected>
                              {branch_name(
                                selectedSunject?.own_subjet.class_room.branch_id
                              )}
                            </option>
                          ) : (
                            <option selected>ব্রাঞ্চ নির্বাচন করুন</option>
                          )}
                          {/* {shifts?.map((data, index) => (
                              <option key={index} value="1">{data.shift_name}</option>
                              ))} */}
                        </select>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3">
                      <div className="mb-3" style={{ fontSize: "12px" }}>
                        <label className="form-label">
                          শিক্ষার্থী নির্বাচন করুন
                        </label>
                        <select
                          className="form-select p-2"
                          aria-label="Default select example"
                          style={{ fontSize: "12px" }}
                          onChange={(e) => setstudent_name(e.target.value)}
                        >
                          <option selected>শিক্ষার্থী নির্বাচন করুন</option>

                          {selectedSunject?.own_subjet?.class_room?.students?.map(
                            (data, index) => (
                              <option key={index} value={data.student_name_bn}>
                                {data.student_name_bn}
                              </option>
                            )
                          )}
                        </select>
                      </div>
                    </div>

                    {/* <div className="col-6 col-sm-4 col-md-3">
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
                    </div> */}
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
                        <label className="form-label">সেশন নির্বাচন করুন</label>
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
                        <label className="form-label">শাখা নির্বাচন করুন</label>
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
                        <label className="form-label">বিষয় নির্বাচন করুন</label>
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
              <h6 className="m-2">শিখনকালীন মূল্যায়ন প্রতিবেদন (PI)</h6>
              <div id="accordion">
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        <div className="d-flex justify-content-between flex-md-row flex-column align-items-center p-3 border-bottom">
                          <div className="">
                            <h5>শিক্ষার্থীর নাম: {student_name} </h5>
                            <p>রোল নম্বর #৩২১০০</p>
                          </div>
                          <div
                            className="d-flex gap-2"
                            onClick={handleConvertToPdf}
                          >
                            <div className={`${styles.download_btn}`}>
                              <BsFillFileEarmarkArrowDownFill className="fs-4 me-2" />
                              ডাউনলোড করুন
                            </div>
                            <div className={`${styles.download_icon}`}>
                              <IoIosArrowUp className="fs-2" />
                            </div>
                          </div>
                        </div>
                      </button>
                    </h5>
                  </div>

                  <div
                    id="collapseOne"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <section>
                        {/* <div className="container">
          <button onClick={handleConvertToPdf} type="button" className="btn btn-primary">Download</button>
        </div> */}

                        <div id="contentToConvert" className="container border">
                          <div className="row p-2">
                            <div className="text-center py-3">
                              <h6 style={{ fontSize: "14px" }}>মডেল একাডেমি</h6>
                              <h6 style={{ fontSize: "14px" }}>
                                [একটি আদর্শ উচ্চ বিদ্যালয়]
                              </h6>
                              <h6 style={{ fontSize: "14px" }}>
                                প্রিন্সিপাল আব্দুল কাশেম সড়ক, সরকারি ডি-টাইপ
                                কলোনী, মিরপুর-১, ঢাকা-১২১৬
                              </h6>
                              <h6
                                style={{ fontSize: "14px", fontWeight: "bold" }}
                              >
                                ষাণ্মাসিক সামষ্টিক মূল্যায়ন (PI) এর বিষয়ভিত্তিক
                                ট্রান্সক্রিপ্ট-২০২৩
                              </h6>
                            </div>
                            <div className="">
                              <table className="table table-bordered table-sm table-responsive">
                                <thead>
                                  <tr>
                                    <th
                                      colSpan={3}
                                      style={{
                                        fontSize: "10px",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      শিক্ষার্থীর নাম: {student_name}
                                    </th>
                                    <th
                                      style={{
                                        fontSize: "10px",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      শিক্ষার্থীর আইডি: ৩২১০০
                                    </th>
                                  </tr>
                                  <tr>
                                    <th
                                      style={{
                                        fontSize: "10px",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      শ্রেণী: {selectedSunject?.class}
                                    </th>
                                    <th
                                      style={{
                                        fontSize: "10px",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      শাখা:{" "}
                                      {section_name(selectedSunject?.section)}
                                    </th>
                                    <th
                                      style={{
                                        fontSize: "10px",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      বিষয়: {selectedSunject?.subject?.name}
                                    </th>
                                    <th
                                      style={{
                                        fontSize: "10px",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      বিষয় শিক্ষকের নাম:{" "}
                                      {selectedSunject?.teacher?.name_en}
                                    </th>
                                  </tr>
                                  <tr>
                                    <th
                                      className="text-center"
                                      colSpan={4}
                                      style={{
                                        fontSize: "12px",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      পারদর্শিতার সূচকের মাত্রা
                                    </th>
                                  </tr>
                                  <tr>
                                    <th
                                      colSpan={2}
                                      style={{
                                        fontSize: "10px",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      পারদর্শিতা সূচক (PI)
                                    </th>
                                    <th
                                      colSpan={2}
                                      style={{
                                        fontSize: "10px",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      শিক্ষার্থীর পারদর্শিতা মাত্রা
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="w-25">
                                      ৬.১.১ <br />
                                      নিজের এবং অন্যের প্রয়োজন ও আবেগ বিবেচনায়
                                      নিয়ে যোগাযোগ করতে পারছে।
                                    </td>
                                    <td className="w-25">
                                      <BsCheckCircle className="fs-5 pe-1" />
                                      অন্যের সাথে যোগাযোগের সময়ে নিজের চাহিদা
                                      প্রকাশ করতে পারছে।
                                    </td>
                                    <td className="w-25">
                                      অন্যের কাছে নিজের চাহিদা প্রকাশ করার সময় ঐ
                                      ব্যক্তির আগ্রহ, চাহিদা ও আবেগ বিবেচনায়
                                      নিতে পারছে।
                                    </td>
                                    <td className="w-25">
                                      মর্যাদাপূর্ণ শারীরিক ভাষা প্রয়োগের
                                      পাশাপাশি ব্যাক্তির সাথে সম্পর্কের ধরন
                                      অনুযায়ী যথাযথভাবে সম্বোধন করতে পারছে
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="w-25">
                                      ৬.১.১ <br />
                                      নিজের এবং অন্যের প্রয়োজন ও আবেগ বিবেচনায়
                                      নিয়ে যোগাযোগ করতে পারছে।
                                    </td>
                                    <td className="w-25">
                                      <BsCheckCircle className="fs-5 pe-1" />
                                      অন্যের সাথে যোগাযোগের সময়ে নিজের চাহিদা
                                      প্রকাশ করতে পারছে।
                                    </td>
                                    <td className="w-25">
                                      অন্যের কাছে নিজের চাহিদা প্রকাশ করার সময় ঐ
                                      ব্যক্তির আগ্রহ, চাহিদা ও আবেগ বিবেচনায়
                                      নিতে পারছে।
                                    </td>
                                    <td className="w-25">
                                      মর্যাদাপূর্ণ শারীরিক ভাষা প্রয়োগের
                                      পাশাপাশি ব্যাক্তির সাথে সম্পর্কের ধরন
                                      অনুযায়ী যথাযথভাবে সম্বোধন করতে পারছে
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="w-25">
                                      ৬.১.১ <br />
                                      নিজের এবং অন্যের প্রয়োজন ও আবেগ বিবেচনায়
                                      নিয়ে যোগাযোগ করতে পারছে।
                                    </td>
                                    <td className="w-25">
                                      <BsCheckCircle className="fs-5 pe-1" />
                                      অন্যের সাথে যোগাযোগের সময়ে নিজের চাহিদা
                                      প্রকাশ করতে পারছে।
                                    </td>
                                    <td className="w-25">
                                      অন্যের কাছে নিজের চাহিদা প্রকাশ করার সময় ঐ
                                      ব্যক্তির আগ্রহ, চাহিদা ও আবেগ বিবেচনায়
                                      নিতে পারছে।
                                    </td>
                                    <td className="w-25">
                                      মর্যাদাপূর্ণ শারীরিক ভাষা প্রয়োগের
                                      পাশাপাশি ব্যাক্তির সাথে সম্পর্কের ধরন
                                      অনুযায়ী যথাযথভাবে সম্বোধন করতে পারছে
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="w-25">
                                      ৬.১.১ <br />
                                      নিজের এবং অন্যের প্রয়োজন ও আবেগ বিবেচনায়
                                      নিয়ে যোগাযোগ করতে পারছে।
                                    </td>
                                    <td className="w-25">
                                      <BsCheckCircle className="fs-5 pe-1" />
                                      অন্যের সাথে যোগাযোগের সময়ে নিজের চাহিদা
                                      প্রকাশ করতে পারছে।
                                    </td>
                                    <td className="w-25">
                                      অন্যের কাছে নিজের চাহিদা প্রকাশ করার সময় ঐ
                                      ব্যক্তির আগ্রহ, চাহিদা ও আবেগ বিবেচনায়
                                      নিতে পারছে।
                                    </td>
                                    <td className="w-25">
                                      মর্যাদাপূর্ণ শারীরিক ভাষা প্রয়োগের
                                      পাশাপাশি ব্যাক্তির সাথে সম্পর্কের ধরন
                                      অনুযায়ী যথাযথভাবে সম্বোধন করতে পারছে
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <div className="d-flex pt-5 pb-1">
                                <div
                                  className="w-50"
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  বিষয় শিক্ষকের স্বাক্ষরঃ
                                </div>
                                <div
                                  className="w-50"
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  প্রধান শিক্ষকের স্বাক্ষরঃ
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="card shadow-lg border-0">
                <div className="d-flex justify-content-between flex-md-row flex-column align-items-center p-3 border-bottom">
                  <div className="">
                    <h5>শিক্ষার্থীর নাম: {student_name} </h5>
                    <p>রোল নম্বর #৩২১০০</p>
                  </div>
                  <div className="d-flex gap-2" onClick={handleConvertToPdf}>
                    <div className={`${styles.download_btn}`}>
                      <BsFillFileEarmarkArrowDownFill className="fs-4 me-2" />
                      ডাউনলোড করুন
                    </div>
                    <div className={`${styles.download_icon}`}>
                      <IoIosArrowUp className="fs-2" />
                    </div>
                  </div>
                </div>
                {/* subjects list start */}
                <div className="content mb-5 mt-0">
                  {/* {loader && (
        <div className={loader && styles.loading_container}>
          {loader && <Spinner animation="border" />}
        </div>
      )} */}

                  {!ShowProfile && (
                    <BreadcumbHome
                      showSubjectname={showSubjectname}
                      setShowProfile={setShowProfile}
                      seshowSubject={seshowSubject}
                      title={" পারদর্শিতা এবং আচরণগত মূল্যায়ন"}
                    />
                  )}
                  {!loader && (
                    <div className="dashboard-section">
                      <section className="np-breadcumb-section pt-2 pb-5">
                        <div className="container">
                          {/* <div className="row">
                {ShowProfile && (
                  <div className="col-md-3">
                    <ProfileCard />
                  </div>
                )}

                <div className={ShowProfile ? "col-md-9" : "col-md-12"}>
                  <div className="row d-flex gap-2">
                    <div></div>
                    <div className="d-flex" style={{ cursor: "pointer" }}>
                      <h5
                        onClick={(e) => {
                          seshowSubject(true);
                          setShowProfile(true);
                        }}
                      >
                        {showSubject && subject.length > 0 && (
                          <>
                            <BiSidebar /> বিষয়সমূহ{" "}
                          </>
                        )}
                        {subject.length == 0 && (
                          <>কোন বিষয় খুঁজে পাওয়া যায়নি</>
                        )}

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
                              seshowSubjectname(d.subject.name);
                              setStudent(d?.own_subjet?.class_room?.students);
                              setShowProfile(false);
                              localStorage.setItem(
                                "class_room_id",
                                d.own_subjet.class_room_id
                              );
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
                                  {d?.subject.class_uid == "6"
                                    ? "ষষ্ঠ "
                                    : "সপ্তম "}
                                  শ্রেণি
                                </h5>
                                <h5 className={styles.class_teacher}>
                                  শ্রেণি শিক্ষক :
                                  <span>
                                    {teacher_name(d.own_subjet.teacher_id)}
                                  </span>
                                </h5>
                              </div>
                              <div className="flex-md-row flex-lg-row d-flex  justify-content-center gap-2">
                                <h6 className={styles.session}>
                                  {shift_name(d.own_subjet.class_room.shift_id)}{" "}
                                  সেশন
                                </h6>
                                <h6 className={styles.horizontal_bar}>। </h6>
                                <h6 className={styles.branch}>
                                  {section_name(
                                    d.own_subjet.class_room.section_id
                                  )}{" "}
                                  শাথা
                                </h6>
                              </div>
                            </div>
                          </div>
                        ))}
                      </>
                    )}

                    {ShowProfile === false && (
                      <>
                        {showSkillBehaibor && (
                          <>
                            <ShowAssesment
                              seshowCompitance={seshowCompitance}
                              setassessment_uid={setassessment_uid}
                              setMullayon_name={setMullayon_name}
                              allassessmet={allassessmet}
                              parodorshita_acoron_tab={parodorshita_acoron_tab}
                              own_data={own_data}
                              setallassessmet={setallassessmet}
                              setparodorshita_acoron_tab={
                                setparodorshita_acoron_tab
                              }
                            />
                          </>
                        )}

                        {showCompitance && (
                          <>
                            {parodorshita_acoron_tab === 0 && (
                              <ParodorshitaComponent
                                Student={Student}
                                assessment_uid={assessment_uid}
                                pi_attr={pi_attr}
                                showDetailsshikhonKalinMullayon={
                                  showDetailsshikhonKalinMullayon
                                }
                                Showcollaps={Showcollaps}
                                setShowcollaps={setShowcollaps}
                                Mullayon_name={Mullayon_name}
                                shikhonKalinMullayon={shikhonKalinMullayon}
                                setshowDetailsshikhonKalinMullayon={
                                  setshowDetailsshikhonKalinMullayon
                                }
                              />
                            )}

                            {parodorshita_acoron_tab === 1 && (
                              <AcorongotoComponent
                                teacher={teacher}
                                Student={Student}
                                all_bis={all_bis}
                                assessment_uid={assessment_uid}
                                pi_attr={pi_attr}
                                showDetailsshikhonKalinMullayon={
                                  showDetailsshikhonKalinMullayon
                                }
                                Showcollaps={Showcollaps}
                                setShowcollaps={setShowcollaps}
                                Mullayon_name={Mullayon_name}
                                shikhonKalinMullayon={shikhonKalinMullayon}
                                setshowDetailsshikhonKalinMullayon={
                                  setshowDetailsshikhonKalinMullayon
                                }
                              />
                            )}
                          </>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div> */}
                        </div>
                      </section>
                    </div>
                  )}

                  <section>
                    {/* <div className="container">
          <button onClick={handleConvertToPdf} type="button" className="btn btn-primary">Download</button>
        </div> */}

                    <div id="contentToConvert" className="container border">
                      <div className="row p-2">
                        <div className="text-center py-3">
                          <h6 style={{ fontSize: "14px" }}>মডেল একাডেমি</h6>
                          <h6 style={{ fontSize: "14px" }}>
                            [একটি আদর্শ উচ্চ বিদ্যালয়]
                          </h6>
                          <h6 style={{ fontSize: "14px" }}>
                            প্রিন্সিপাল আব্দুল কাশেম সড়ক, সরকারি ডি-টাইপ কলোনী,
                            মিরপুর-১, ঢাকা-১২১৬
                          </h6>
                          <h6 style={{ fontSize: "14px", fontWeight: "bold" }}>
                            ষাণ্মাসিক সামষ্টিক মূল্যায়ন (PI) এর বিষয়ভিত্তিক
                            ট্রান্সক্রিপ্ট-২০২৩
                          </h6>
                        </div>
                        <div className="">
                          <table className="table table-bordered table-sm table-responsive">
                            <thead>
                              <tr>
                                <th
                                  colSpan={3}
                                  style={{
                                    fontSize: "10px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  শিক্ষার্থীর নাম: {student_name}
                                </th>
                                <th
                                  style={{
                                    fontSize: "10px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  শিক্ষার্থীর আইডি: ৩২১০০
                                </th>
                              </tr>
                              <tr>
                                <th
                                  style={{
                                    fontSize: "10px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  শ্রেণী: {selectedSunject?.class}
                                </th>
                                <th
                                  style={{
                                    fontSize: "10px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  শাখা: {section_name(selectedSunject?.section)}
                                </th>
                                <th
                                  style={{
                                    fontSize: "10px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  বিষয়: {selectedSunject?.subject?.name}
                                </th>
                                <th
                                  style={{
                                    fontSize: "10px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  বিষয় শিক্ষকের নাম:{" "}
                                  {selectedSunject?.teacher?.name_en}
                                </th>
                              </tr>
                              <tr>
                                <th
                                  className="text-center"
                                  colSpan={4}
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  পারদর্শিতার সূচকের মাত্রা
                                </th>
                              </tr>
                              <tr>
                                <th
                                  colSpan={2}
                                  style={{
                                    fontSize: "10px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  পারদর্শিতা সূচক (PI)
                                </th>
                                <th
                                  colSpan={2}
                                  style={{
                                    fontSize: "10px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  শিক্ষার্থীর পারদর্শিতা মাত্রা
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="w-25">
                                  ৬.১.১ <br />
                                  নিজের এবং অন্যের প্রয়োজন ও আবেগ বিবেচনায় নিয়ে
                                  যোগাযোগ করতে পারছে।
                                </td>
                                <td className="w-25">
                                  <BsCheckCircle className="fs-5 pe-1" />
                                  অন্যের সাথে যোগাযোগের সময়ে নিজের চাহিদা প্রকাশ
                                  করতে পারছে।
                                </td>
                                <td className="w-25">
                                  অন্যের কাছে নিজের চাহিদা প্রকাশ করার সময় ঐ
                                  ব্যক্তির আগ্রহ, চাহিদা ও আবেগ বিবেচনায় নিতে
                                  পারছে।
                                </td>
                                <td className="w-25">
                                  মর্যাদাপূর্ণ শারীরিক ভাষা প্রয়োগের পাশাপাশি
                                  ব্যাক্তির সাথে সম্পর্কের ধরন অনুযায়ী
                                  যথাযথভাবে সম্বোধন করতে পারছে
                                </td>
                              </tr>
                              <tr>
                                <td className="w-25">
                                  ৬.১.১ <br />
                                  নিজের এবং অন্যের প্রয়োজন ও আবেগ বিবেচনায় নিয়ে
                                  যোগাযোগ করতে পারছে।
                                </td>
                                <td className="w-25">
                                  <BsCheckCircle className="fs-5 pe-1" />
                                  অন্যের সাথে যোগাযোগের সময়ে নিজের চাহিদা প্রকাশ
                                  করতে পারছে।
                                </td>
                                <td className="w-25">
                                  অন্যের কাছে নিজের চাহিদা প্রকাশ করার সময় ঐ
                                  ব্যক্তির আগ্রহ, চাহিদা ও আবেগ বিবেচনায় নিতে
                                  পারছে।
                                </td>
                                <td className="w-25">
                                  মর্যাদাপূর্ণ শারীরিক ভাষা প্রয়োগের পাশাপাশি
                                  ব্যাক্তির সাথে সম্পর্কের ধরন অনুযায়ী
                                  যথাযথভাবে সম্বোধন করতে পারছে
                                </td>
                              </tr>
                              <tr>
                                <td className="w-25">
                                  ৬.১.১ <br />
                                  নিজের এবং অন্যের প্রয়োজন ও আবেগ বিবেচনায় নিয়ে
                                  যোগাযোগ করতে পারছে।
                                </td>
                                <td className="w-25">
                                  <BsCheckCircle className="fs-5 pe-1" />
                                  অন্যের সাথে যোগাযোগের সময়ে নিজের চাহিদা প্রকাশ
                                  করতে পারছে।
                                </td>
                                <td className="w-25">
                                  অন্যের কাছে নিজের চাহিদা প্রকাশ করার সময় ঐ
                                  ব্যক্তির আগ্রহ, চাহিদা ও আবেগ বিবেচনায় নিতে
                                  পারছে।
                                </td>
                                <td className="w-25">
                                  মর্যাদাপূর্ণ শারীরিক ভাষা প্রয়োগের পাশাপাশি
                                  ব্যাক্তির সাথে সম্পর্কের ধরন অনুযায়ী
                                  যথাযথভাবে সম্বোধন করতে পারছে
                                </td>
                              </tr>
                              <tr>
                                <td className="w-25">
                                  ৬.১.১ <br />
                                  নিজের এবং অন্যের প্রয়োজন ও আবেগ বিবেচনায় নিয়ে
                                  যোগাযোগ করতে পারছে।
                                </td>
                                <td className="w-25">
                                  <BsCheckCircle className="fs-5 pe-1" />
                                  অন্যের সাথে যোগাযোগের সময়ে নিজের চাহিদা প্রকাশ
                                  করতে পারছে।
                                </td>
                                <td className="w-25">
                                  অন্যের কাছে নিজের চাহিদা প্রকাশ করার সময় ঐ
                                  ব্যক্তির আগ্রহ, চাহিদা ও আবেগ বিবেচনায় নিতে
                                  পারছে।
                                </td>
                                <td className="w-25">
                                  মর্যাদাপূর্ণ শারীরিক ভাষা প্রয়োগের পাশাপাশি
                                  ব্যাক্তির সাথে সম্পর্কের ধরন অনুযায়ী
                                  যথাযথভাবে সম্বোধন করতে পারছে
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="d-flex pt-5 pb-1">
                            <div
                              className="w-50"
                              style={{ fontSize: "14px", fontWeight: "bold" }}
                            >
                              বিষয় শিক্ষকের স্বাক্ষরঃ
                            </div>
                            <div
                              className="w-50"
                              style={{ fontSize: "14px", fontWeight: "bold" }}
                            >
                              প্রধান শিক্ষকের স্বাক্ষরঃ
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n            .np-table th,\n            td {\n                font-size: 11px;\n            }\n        ",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="d-flex align-items-center py-2 gap-2">
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
                        পারদর্শিতার মূল্যায়ন
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
              </div> */}
        </div>
      </div>
    </div>
  );
}
