import React from "react";
import Accordion from "react-bootstrap/Accordion";
import {
  teacher_dashboard,
  teacher_own_subject,
  get_pi_bi_evaluation_list,
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
  subject_name,
  make_group_by,
} from "../utils/Utils";
// import {handleConvertToPdf} from "./Pdf"
import Breadcumb from "../layout/Breadcumb";
import Pdf from "./Pdf";
// import { toPng } from "html-to-image";
import { toPng } from "html-to-image";
import { jsPDF } from "jspdf";
import { Link } from "react-router-dom";

export default function StudentTranscript() {
  const [shift, setShift] = useState([]);
  const [subject, setsubject] = useState([]);
  const [student_name, setstudent_name] = useState<any>("");
  const [version, setversion] = useState<any>([]);
  const [own_data, setown_data] = useState<any>([]);
  const [all_bis, setall_bis] = useState<any>([]);

  const [teacher, setteacher] = useState<any>({});
  const [loader, setloader] = useState(true);
  const [selectedSunject, setselectedSunject] = useState<any>("");
  const [data, setdata] = useState<any>({});
  const [responseData, setResponseData] = useState(null);
  const [pi_data, setPi_data] = useState<any>([]);

  const [allFelter, setallFelter] = useState<any>({});

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
    setversion(teacher_dash?.data?.versions)
    setsubject(all_subject);
    setloader(false);

  };


  useEffect(() => {
    fetchData();
  }, []);

  const uniqueclass = [
    ...new Set(subject.map((data) => data?.subject?.class_uid)),
  ];

  const uniqueSections = [...new Set(subject.map((data) => data?.section))];
  const uniqueshift = [...new Set(subject.map((data) => data?.shift))];
  const uniquebranch = [
    ...new Set(subject.map((data) => data?.own_subjet?.class_room?.branch_id)),
  ];
  const uniquestudents = [
    ...new Set(subject.map((data) => data?.own_subjet?.class_room?.students)),
  ];
  // const uniqueSection = [...new Set(subject.map(data => data?.section?.name))];
  // Render options for unique subjects

  let studnt: any = [];

  for (let index = 0; index < uniquestudents.length; index++) {
    const element = uniquestudents[index];

    for (let i = 0; i < element.length; i++) {
      const element2 = element[i];
      studnt.push(element2);
    }
  }

  const Stuent_result = Object.values(
    studnt.reduce((acc, obj) => ({ ...acc, [obj.uid]: obj }), {})
  );


  const fetchDataFromAPI = async () => {
    try {
      const data = await get_pi_bi_evaluation_list(2); // Call your API function here

      // Set the response data to state to display or use it in your component
      setResponseData(data);
      setPi_data(data?.data?.data?.pi_evaluation_list);

      const allPi = data?.data?.data?.pi_evaluation_list
      
      const student_pi = allPi.filter((d: any) =>{
        if(d.student_uid == student_name || student_name == ""){
          return true;
        }
        
      })

      let groupByData =  make_group_by(student_pi)

      let x =  Object.entries(groupByData)
      console.log("pi_data",x,groupByData, student_name, student_pi);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    
  };


  const new_student = Stuent_result.filter((d: any) => {
    if (d.class == allFelter.class && d.branch == allFelter.branch && allFelter.shift == d.shift && allFelter.section == d.section && allFelter.version == d.version ) {
      return true
    }
  });



  console.log("allFelter", Stuent_result, allFelter ,new_student);

  return (
    <div className="my-4">
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
                    className={`fw-bold nav-link link-secondary ${styles.nav_tab_bottom_border}`}
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
                          ব্রাঞ্চ নির্বাচন করুনzzzzzzzzz
                        </label>
                        <select
                          className="form-select p-2"
                          name="branch"
                          aria-label="Default select example"
                          style={{ fontSize: "12px" }}
                          onChange={(e) =>
                            setallFelter({
                              ...allFelter,
                              [e.target.name]: e.target.value,
                            })
                          }
                        >
                          <option value={""}>ব্রাঞ্চ নির্বাচন করুন</option>
                          {uniquebranch?.map((data, index) => (
                            <option key={index} value={data}>
                              {branch_name(data)} ব্রাঞ্চ
                            </option>
                          ))}

                          {/* {shifts?.map((data, index) => (
                              <option key={index} value="1">{data.shift_name}</option>
                              ))} */}
                        </select>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3">
                      <div className="mb-3" style={{ fontSize: "12px" }}>
                        <label className="form-label">সেশন নির্বাচন করুন</label>
                        <select
                          className="form-select p-2"
                          name="shift"
                          aria-label="Default select example"
                          style={{ fontSize: "12px" }}
                          onChange={(e) =>
                            setallFelter({
                              ...allFelter,
                              [e.target.name]: e.target.value,
                            })
                          }
                        >
                          <option value={""}>সেশন নির্বাচন করুন</option>
                          {uniqueshift?.map((data, index) => (
                            <option key={index} value={data}>
                              {shift_name(data)} সেশন
                            </option>
                          ))}
                          {/* {shifts?.map((data, index) => (
                              <option key={index} value="1">{data.shift_name}</option>
                              ))} */}
                        </select>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3">
                      <div className="mb-3" style={{ fontSize: "12px" }}>
                        <label className="form-label">
                          ভার্সন নির্বাচন করুন
                        </label>
                        <select
                          className="form-select p-2"
                          name="version"
                          aria-label="Default select example"
                          style={{ fontSize: "12px" }}
                          onChange={(e) =>
                            setallFelter({
                              ...allFelter,
                              [e.target.name]: e.target.value,
                            })
                          }
                        >
                          <option value={""}>ভার্সন নির্বাচন করুন</option>
                          {version?.map((data, index) => (
                            <option key={index} value={data.uid}>
                              {data?.version_name}
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
                          name="section"
                          onChange={(e) =>
                            setallFelter({
                              ...allFelter,
                              [e.target.name]: e.target.value,
                            })
                          }
                        >
                          <option value={""}>শাখা নির্বাচন করুন</option>

                          {uniqueSections?.map((data, index) => (
                            <option key={index} value={data}>
                              {section_name(data)} শাখা
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3">
                      <div className="mb-3" style={{ fontSize: "12px" }}>
                        <label className="form-label">
                          শ্রেণী নির্বাচন করুন
                        </label>
                        <select
                          className="form-select p-2"
                          aria-label="Default select example"
                          style={{ fontSize: "12px" }}
                          name="class"
                          onChange={(e) =>
                            setallFelter({
                              ...allFelter,
                              [e.target.name]: e.target.value,
                            })
                          }
                        >
                          <option value={""}>শ্রেণী নির্বাচন করুন</option>
                          {uniqueclass?.map((data, index) => (
                            <option key={index} value={data}>
                              {data} শ্রেণী
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* <div className="col-6 col-sm-4 col-md-3">
                      <div className="mb-3" style={{ fontSize: "12px" }}>
                        <label className="form-label">বিষয় নির্বাচন করুন</label>
                        <select
                          className="form-select p-2"
                          aria-label="Default select example"
                          style={{ fontSize: "12px" }}
                          name="subject"
                          onChange={(e) =>
                            setallFelter({
                              ...allFelter,
                              [e.target.name]: e.target.value,
                            })
                          }
                        >
                          <option value={""}>বিষয়</option>
                          {uniqueSubjects.map((d: any) => (
                            <option value={d}>{subject_name(d)}</option>
                          ))}
                        </select>
                      </div>
                    </div> */}

                    {allFelter.branch &&
                      allFelter.class &&
                      allFelter.section &&
                      allFelter.shift && 
                      allFelter.version && 
                      (
                        
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
                              <option value={""}>শিক্ষার্থী </option>

                              {new_student?.map((data: any, index) => (
                                <option key={index} value={data?.uid}>
                                  {data?.student_name_bn ||
                                    data?.student_name_en}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                     )}
                    <div className="col-6 col-sm-4 col-md-3 pointer">
                      <div className="mb-3">
                        <label className="form-label "></label>
                        <div className="input-group">
                          <button
                            onClick={fetchDataFromAPI}
                            className="form-control py-1 border-right-0 border-0"
                            defaultValue="নিম্নে মূল্যায়ন প্রতিবেদন দেখুন"
                            id="example-search-input"
                            style={{
                              fontSize: "12px",
                              backgroundColor: "#428F92",
                            }}
                          >
                            নিম্নে মূল্যায়ন প্রতিবেদন দেখুন
                            <div
                              className="btn btn-outline-secondary py-1 border-0"
                              type="button"
                              style={{
                                backgroundColor: "#428F92",
                              }}
                            >
                              <i className="fa fa-search" />
                            </div>
                          </button>
                          <span
                            className="input-group-append rounded-end"
                            style={{
                              fontSize: "12px",
                              backgroundColor: "#428F92",
                            }}
                          ></span>
                        </div>
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
                  className="tab-pane fade show active"
                  id="expertness"
                  role="tabpanel"
                  aria-labelledby="expertness-tab"
                >
                  <div className="row p-5">
                    <div className="col-6 col-sm-4 col-md-3">
                      <div className="mb-3" style={{ fontSize: "12px" }}>
                        <label className="form-label">
                          ব্রাঞ্চ নির্বাচন করুন
                        </label>
                        <select
                          className="form-select p-2"
                          name="branch"
                          aria-label="Default select example"
                          style={{ fontSize: "12px" }}
                          onChange={(e) =>
                            setallFelter({
                              ...allFelter,
                              [e.target.name]: e.target.value,
                            })
                          }
                        >
                          <option value={""}>ব্রাঞ্চ নির্বাচন করুন</option>
                          {uniquebranch?.map((data, index) => (
                            <option key={index} value={data}>
                              {branch_name(data)} ব্রাঞ্চ
                            </option>
                          ))}

                          {/* {shifts?.map((data, index) => (
                              <option key={index} value="1">{data.shift_name}</option>
                              ))} */}
                        </select>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3">
                      <div className="mb-3" style={{ fontSize: "12px" }}>
                        <label className="form-label">সেশন নির্বাচন করুন</label>
                        <select
                          className="form-select p-2"
                          name="shift"
                          aria-label="Default select example"
                          style={{ fontSize: "12px" }}
                          onChange={(e) =>
                            setallFelter({
                              ...allFelter,
                              [e.target.name]: e.target.value,
                            })
                          }
                        >
                          <option value={""}>সেশন নির্বাচন করুন</option>
                          {uniqueshift?.map((data, index) => (
                            <option key={index} value={data}>
                              {shift_name(data)} সেশন
                            </option>
                          ))}
                          {/* {shifts?.map((data, index) => (
                              <option key={index} value="1">{data.shift_name}</option>
                              ))} */}
                        </select>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3">
                      <div className="mb-3" style={{ fontSize: "12px" }}>
                        <label className="form-label">
                          ভার্সন নির্বাচন করুন
                        </label>
                        <select
                          className="form-select p-2"
                          name="version"
                          aria-label="Default select example"
                          style={{ fontSize: "12px" }}
                          onChange={(e) =>
                            setallFelter({
                              ...allFelter,
                              [e.target.name]: e.target.value,
                            })
                          }
                        >
                          <option value={""}>ভার্সন নির্বাচন করুন</option>
                          {version?.map((data, index) => (
                            <option key={index} value={data.uid}>
                              {data?.version_name}
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
                          name="section"
                          onChange={(e) =>
                            setallFelter({
                              ...allFelter,
                              [e.target.name]: e.target.value,
                            })
                          }
                        >
                          <option value={""}>শাখা নির্বাচন করুন</option>

                          {uniqueSections?.map((data, index) => (
                            <option key={index} value={data}>
                              {section_name(data)} শাখা
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3">
                      <div className="mb-3" style={{ fontSize: "12px" }}>
                        <label className="form-label">
                          শ্রেণী নির্বাচন করুন
                        </label>
                        <select
                          className="form-select p-2"
                          aria-label="Default select example"
                          style={{ fontSize: "12px" }}
                          name="class"
                          onChange={(e) =>
                            setallFelter({
                              ...allFelter,
                              [e.target.name]: e.target.value,
                            })
                          }
                        >
                          <option value={""}>শ্রেণী নির্বাচন করুন</option>
                          {uniqueclass?.map((data, index) => (
                            <option key={index} value={data}>
                              {data} শ্রেণী
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* <div className="col-6 col-sm-4 col-md-3">
                      <div className="mb-3" style={{ fontSize: "12px" }}>
                        <label className="form-label">বিষয় নির্বাচন করুন</label>
                        <select
                          className="form-select p-2"
                          aria-label="Default select example"
                          style={{ fontSize: "12px" }}
                          name="subject"
                          onChange={(e) =>
                            setallFelter({
                              ...allFelter,
                              [e.target.name]: e.target.value,
                            })
                          }
                        >
                          <option value={""}>বিষয়</option>
                          {uniqueSubjects.map((d: any) => (
                            <option value={d}>{subject_name(d)}</option>
                          ))}
                        </select>
                      </div>
                    </div> */}

                    {allFelter.branch &&
                      allFelter.class &&
                      allFelter.section &&
                      allFelter.shift && 
                      allFelter.version && 
                      (
                        
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
                              <option value={""}>শিক্ষার্থী </option>

                              {new_student?.map((data: any, index) => (
                                <option key={index} value={data?.uid}>
                                  {data?.student_name_bn ||
                                    data?.student_name_en}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                     )}
                    <div className="col-6 col-sm-4 col-md-3 pointer">
                      <div className="mb-3">
                        <label className="form-label "></label>
                        <div className="input-group">
                          <button
                            onClick={fetchDataFromAPI}
                            className="form-control py-1 border-right-0 border-0"
                            defaultValue="নিম্নে মূল্যায়ন প্রতিবেদন দেখুন"
                            id="example-search-input"
                            style={{
                              fontSize: "12px",
                              backgroundColor: "#428F92",
                            }}
                          >
                            নিম্নে মূল্যায়ন প্রতিবেদন দেখুন
                            <div
                              className="btn btn-outline-secondary py-1 border-0"
                              type="button"
                              style={{
                                backgroundColor: "#428F92",
                              }}
                            >
                              <i className="fa fa-search" />
                            </div>
                          </button>
                          <span
                            className="input-group-append rounded-end"
                            style={{
                              fontSize: "12px",
                              backgroundColor: "#428F92",
                            }}
                          ></span>
                        </div>
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
              </div>
              <h6 className="m-2">শিখনকালীন মূল্যায়ন প্রতিবেদন (PI)</h6>
              
              {Stuent_result?.map((data, index) => (
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="px-4">
                      <div className="d-flex justify-content-between flex-md-row flex-column align-items-center p-3 border-bottom">
                        <h5>শিক্ষার্থীর নাম: {data.student_name_bn} </h5>

                        <p>রোল নম্বর #{data.roll}</p>
                        <div className="">
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"
                            onClick={(e) => setdata(data)}
                          >
                            ডাউনলোড করুন
                          </button>
                        </div>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      {/* <div className="container border">
                        <div className="row pb-5 pt-2">
                          <div className="col-sm-6 col-md-3 py-2">
                            <div className="border-0 p-2 h-100">
                              <div className="d-flex">
                                <div>
                                  <h6>পারদর্শিতা সূচক ৬.১.১ </h6>
                                  <h6 style={{ fontSize: "14px" }}>
                                    নিজের এবং অন্যের প্রয়োজন ও আবেগ বিবেচনায়
                                    নিয়ে যোগাযোগ করতে পারছে।
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-3 py-2">
                            <div
                              className="card h-100 shadow-lg border-0 p-2"
                              style={{ backgroundColor: "#F0FAE9" }}
                            >
                              <div className="d-flex">
                                <div>
                                  <TiTick className={`${styles.tick_mark}`} />
                                </div>
                                <div>
                                  <h6 style={{ fontSize: "14px" }}>
                                    নিজের এবং অন্যের প্রয়োজন ও আবেগ বিবেচনায়
                                    নিয়ে যোগাযোগ করতে পারছে।
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-3 py-2">
                            <div className="card shadow-lg border-0 p-2 h-100">
                              <div className="d-flex ">
                                <div>
                                  <TiTick className={`${styles.tick_mark}`} />
                                </div>
                                <div>
                                  <h6 style={{ fontSize: "14px" }}>
                                    দলের কর্মপরিকল্পনায় বা সিদ্ধান্তগ্রহণে
                                    যথাযথভাবে অংশগ্রহণ না করলেও দলীয় নির্দেশনা
                                    অনুযায়ী নিজের দায়িত্বটুকু যথাযথভাবে পালন
                                    করছে
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-3 py-2">
                            <div
                              className="card shadow-lg border-0 p-2 h-100"
                              style={{ backgroundColor: "#F0FAE9" }}
                            >
                              <div className="d-flex">
                                <div>
                                  <TiTick className={`${styles.tick_mark}`} />
                                </div>
                                <div>
                                  <h6 style={{ fontSize: "14px" }}>
                                    দলের সিদ্ধান্ত ও কর্মপরিকল্পনায় সক্রিয়
                                    অংশগ্রহণ করছে, সেই অনুযায়ী নিজের ভূমিকা
                                    যথাযথভাবে পালন করছে
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-3 py-2">
                            <div className="border-0 p-2 h-100">
                              <div className="d-flex">
                                <div>
                                  <h6>পারদর্শিতা সূচক ৬.১.১ </h6>
                                  <h6 style={{ fontSize: "14px" }}>
                                    নিজের এবং অন্যের প্রয়োজন ও আবেগ বিবেচনায়
                                    নিয়ে যোগাযোগ করতে পারছে।
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-3 py-2">
                            <div
                              className="card h-100 shadow-lg border-0 p-2"
                              style={{ backgroundColor: "#F0FAE9" }}
                            >
                              <div className="d-flex">
                                <div>
                                  <TiTick className={`${styles.tick_mark}`} />
                                </div>
                                <div>
                                  <h6 style={{ fontSize: "14px" }}>
                                    নিজের এবং অন্যের প্রয়োজন ও আবেগ বিবেচনায়
                                    নিয়ে যোগাযোগ করতে পারছে।
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-3 py-2">
                            <div className="card shadow-lg border-0 p-2 h-100">
                              <div className="d-flex ">
                                <div>
                                  <TiTick className={`${styles.tick_mark}`} />
                                </div>
                                <div>
                                  <h6 style={{ fontSize: "14px" }}>
                                    দলের কর্মপরিকল্পনায় বা সিদ্ধান্তগ্রহণে
                                    যথাযথভাবে অংশগ্রহণ না করলেও দলীয় নির্দেশনা
                                    অনুযায়ী নিজের দায়িত্বটুকু যথাযথভাবে পালন
                                    করছে
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-3 py-2">
                            <div
                              className="card shadow-lg border-0 p-2 h-100"
                              style={{ backgroundColor: "#F0FAE9" }}
                            >
                              <div className="d-flex">
                                <div>
                                  <TiTick className={`${styles.tick_mark}`} />
                                </div>
                                <div>
                                  <h6 style={{ fontSize: "14px" }}>
                                    দলের সিদ্ধান্ত ও কর্মপরিকল্পনায় সক্রিয়
                                    অংশগ্রহণ করছে, সেই অনুযায়ী নিজের ভূমিকা
                                    যথাযথভাবে পালন করছে
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-3 py-2">
                            <div className="border-0 p-2 h-100">
                              <div className="d-flex">
                                <div>
                                  <h6>পারদর্শিতা সূচক ৬.১.১ </h6>
                                  <h6 style={{ fontSize: "14px" }}>
                                    নিজের এবং অন্যের প্রয়োজন ও আবেগ বিবেচনায়
                                    নিয়ে যোগাযোগ করতে পারছে।
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-3 py-2">
                            <div
                              className="card h-100 shadow-lg border-0 p-2"
                              style={{ backgroundColor: "#F0FAE9" }}
                            >
                              <div className="d-flex">
                                <div>
                                  <TiTick className={`${styles.tick_mark}`} />
                                </div>
                                <div>
                                  <h6 style={{ fontSize: "14px" }}>
                                    নিজের এবং অন্যের প্রয়োজন ও আবেগ বিবেচনায়
                                    নিয়ে যোগাযোগ করতে পারছে।
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-3 py-2">
                            <div className="card shadow-lg border-0 p-2 h-100">
                              <div className="d-flex ">
                                <div>
                                  <TiTick className={`${styles.tick_mark}`} />
                                </div>
                                <div>
                                  <h6 style={{ fontSize: "14px" }}>
                                    দলের কর্মপরিকল্পনায় বা সিদ্ধান্তগ্রহণে
                                    যথাযথভাবে অংশগ্রহণ না করলেও দলীয় নির্দেশনা
                                    অনুযায়ী নিজের দায়িত্বটুকু যথাযথভাবে পালন
                                    করছে
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-3 py-2">
                            <div
                              className="card shadow-lg border-0 p-2 h-100"
                              style={{ backgroundColor: "#F0FAE9" }}
                            >
                              <div className="d-flex">
                                <div>
                                  <TiTick className={`${styles.tick_mark}`} />
                                </div>
                                <div>
                                  <h6 style={{ fontSize: "14px" }}>
                                    দলের সিদ্ধান্ত ও কর্মপরিকল্পনায় সক্রিয়
                                    অংশগ্রহণ করছে, সেই অনুযায়ী নিজের ভূমিকা
                                    যথাযথভাবে পালন করছে
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              ))}

              {/* <div id="accordion">
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                      <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        <div className="d-flex justify-content-between flex-md-row flex-column align-items-center p-3 border-bottom">
                          <div className="">
                            <h5>শিক্ষার্থীর নাম: {student_name} </h5>
                            <p>রোল নম্বর #৩২১০০</p>
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
                          
                        </div>
                      </button>
                    </h5>
                  </div>

                  <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body">
                      <section >
                         <div className="container">
          <button onClick={handleConvertToPdf} type="button" className="btn btn-primary">Download</button>
        </div> 

                        <div id="contentToConvert" className="container border">
                          <div className="row p-2">
                            <div className="text-center py-3">
                              <h6 style={{ fontSize: "14px" }}>মডেল একাডেমি</h6>
                              <h6 style={{ fontSize: "14px" }}>[একটি আদর্শ উচ্চ বিদ্যালয়]</h6>
                              <h6 style={{ fontSize: "14px" }}>
                                প্রিন্সিপাল আব্দুল কাশেম সড়ক, সরকারি ডি-টাইপ কলোনী, মিরপুর-১,
                                ঢাকা-১২১৬
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
                                      style={{ fontSize: "10px", fontWeight: "bold" }}
                                    >
                                      শিক্ষার্থীর নাম: {student_name}
                                    </th>
                                    <th style={{ fontSize: "10px", fontWeight: "bold" }}>
                                      শিক্ষার্থীর আইডি: ৩২১০০
                                    </th>
                                  </tr>
                                  <tr>
                                    <th style={{ fontSize: "10px", fontWeight: "bold" }}>
                                      শ্রেণী: {selectedSunject?.class}
                                    </th>
                                    <th style={{ fontSize: "10px", fontWeight: "bold" }}>
                                      শাখা: {section_name(selectedSunject?.section)}
                                    </th>
                                    <th style={{ fontSize: "10px", fontWeight: "bold" }}>
                                      বিষয়: {selectedSunject?.subject?.name}
                                    </th>
                                    <th style={{ fontSize: "10px", fontWeight: "bold" }}>
                                      বিষয় শিক্ষকের নাম: {selectedSunject?.teacher?.name_en}
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
                                      style={{ fontSize: "10px", fontWeight: "bold" }}
                                    >
                                      পারদর্শিতা সূচক (PI)
                                    </th>
                                    <th
                                      colSpan={2}
                                      style={{ fontSize: "10px", fontWeight: "bold" }}
                                    >
                                      শিক্ষার্থীর পারদর্শিতা মাত্রা
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="w-25">
                                      ৬.১.১ <br />
                                      নিজের এবং অন্যের প্রয়োজন ও আবেগ বিবেচনায় নিয়ে যোগাযোগ করতে
                                      পারছে।
                                    </td>
                                    <td className="w-25">
                                      <BsCheckCircle className="fs-5 pe-1" />
                                      অন্যের সাথে যোগাযোগের সময়ে নিজের চাহিদা প্রকাশ করতে পারছে।
                                    </td>
                                    <td className="w-25">
                                      অন্যের কাছে নিজের চাহিদা প্রকাশ করার সময় ঐ ব্যক্তির আগ্রহ,
                                      চাহিদা ও আবেগ বিবেচনায় নিতে পারছে।
                                    </td>
                                    <td className="w-25">
                                      মর্যাদাপূর্ণ শারীরিক ভাষা প্রয়োগের পাশাপাশি ব্যাক্তির সাথে
                                      সম্পর্কের ধরন অনুযায়ী যথাযথভাবে সম্বোধন করতে পারছে
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="w-25">
                                      ৬.১.১ <br />
                                      নিজের এবং অন্যের প্রয়োজন ও আবেগ বিবেচনায় নিয়ে যোগাযোগ করতে
                                      পারছে।
                                    </td>
                                    <td className="w-25">
                                      <BsCheckCircle className="fs-5 pe-1" />
                                      অন্যের সাথে যোগাযোগের সময়ে নিজের চাহিদা প্রকাশ করতে পারছে।
                                    </td>
                                    <td className="w-25">
                                      অন্যের কাছে নিজের চাহিদা প্রকাশ করার সময় ঐ ব্যক্তির আগ্রহ,
                                      চাহিদা ও আবেগ বিবেচনায় নিতে পারছে।
                                    </td>
                                    <td className="w-25">
                                      মর্যাদাপূর্ণ শারীরিক ভাষা প্রয়োগের পাশাপাশি ব্যাক্তির সাথে
                                      সম্পর্কের ধরন অনুযায়ী যথাযথভাবে সম্বোধন করতে পারছে
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="w-25">
                                      ৬.১.১ <br />
                                      নিজের এবং অন্যের প্রয়োজন ও আবেগ বিবেচনায় নিয়ে যোগাযোগ করতে
                                      পারছে।
                                    </td>
                                    <td className="w-25">
                                      <BsCheckCircle className="fs-5 pe-1" />
                                      অন্যের সাথে যোগাযোগের সময়ে নিজের চাহিদা প্রকাশ করতে পারছে।
                                    </td>
                                    <td className="w-25">
                                      অন্যের কাছে নিজের চাহিদা প্রকাশ করার সময় ঐ ব্যক্তির আগ্রহ,
                                      চাহিদা ও আবেগ বিবেচনায় নিতে পারছে।
                                    </td>
                                    <td className="w-25">
                                      মর্যাদাপূর্ণ শারীরিক ভাষা প্রয়োগের পাশাপাশি ব্যাক্তির সাথে
                                      সম্পর্কের ধরন অনুযায়ী যথাযথভাবে সম্বোধন করতে পারছে
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="w-25">
                                      ৬.১.১ <br />
                                      নিজের এবং অন্যের প্রয়োজন ও আবেগ বিবেচনায় নিয়ে যোগাযোগ করতে
                                      পারছে।
                                    </td>
                                    <td className="w-25">
                                      <BsCheckCircle className="fs-5 pe-1" />
                                      অন্যের সাথে যোগাযোগের সময়ে নিজের চাহিদা প্রকাশ করতে পারছে।
                                    </td>
                                    <td className="w-25">
                                      অন্যের কাছে নিজের চাহিদা প্রকাশ করার সময় ঐ ব্যক্তির আগ্রহ,
                                      চাহিদা ও আবেগ বিবেচনায় নিতে পারছে।
                                    </td>
                                    <td className="w-25">
                                      মর্যাদাপূর্ণ শারীরিক ভাষা প্রয়োগের পাশাপাশি ব্যাক্তির সাথে
                                      সম্পর্কের ধরন অনুযায়ী যথাযথভাবে সম্বোধন করতে পারছে
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
                      </section>                      </div>
                  </div>
                </div>
              </div> */}
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

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                <h5>শিক্ষার্থীর নাম:{data.student_name_bn} </h5>

                <p>রোল নম্বর # {data.roll}</p>
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <Pdf data={data} selectedSunject={selectedSunject} />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
