import React from "react";
import {
  all_teachers,
  teacher_dashboard,
  teacher_own_subject,
} from "../Request";
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
  const SaveAsPDFHandler = () => {
    const dom: any = document.getElementById("print");
    toPng(dom)
      .then((dataUrl: any) => {
        const img = new Image();
        img.crossOrigin = "annoymous";
        img.src = dataUrl;
        img.onload = () => {
          // Initialize the PDF.
          const pdf = new jsPDF({
            orientation: "portrait",
            unit: "in",
            format: [5.5, 8.5],
          });

          // Define reused data
          const imgProps = pdf.getImageProperties(img);
          const imageType = imgProps.fileType;
          const pdfWidth = pdf.internal.pageSize.getWidth();

          // Calculate the number of pages.
          const pxFullHeight = imgProps.height;
          const pxPageHeight = Math.floor((imgProps.width * 8.5) / 5.5);
          const nPages = Math.ceil(pxFullHeight / pxPageHeight);

          // Define pageHeight separately so it can be trimmed on the final page.
          let pageHeight = pdf.internal.pageSize.getHeight();

          // Create a one-page canvas to split up the full image.
          const pageCanvas = document.createElement("canvas");
          const pageCtx: any = pageCanvas.getContext("2d");
          pageCanvas.width = imgProps.width;
          pageCanvas.height = pxPageHeight;

          for (let page = 0; page < nPages; page++) {
            // Trim the final page to reduce file size.
            if (page === nPages - 1 && pxFullHeight % pxPageHeight !== 0) {
              pageCanvas.height = pxFullHeight % pxPageHeight;
              pageHeight = (pageCanvas.height * pdfWidth) / pageCanvas.width;
            }
            // Display the page.
            const w = pageCanvas.width;
            const h = pageCanvas.height;
            pageCtx.fillStyle = "white";
            pageCtx.fillRect(0, 0, w, h);
            pageCtx.drawImage(img, 0, page * pxPageHeight, w, h, 0, 0, w, h);

            // Add the page to the PDF.
            if (page) pdf.addPage();

            const imgData = pageCanvas.toDataURL(`image/${imageType}`, 1);
            pdf.addImage(imgData, imageType, 0, 0, pdfWidth, pageHeight);
          }
          // Output / Save
          // pdf.save(`sales-report${moment().format('YYYY-MM-DD')}.pdf`)
          pdf.save(`students-001.pdf`);
        };
      })
      .catch((error: any) => {
        console.error("oops, something went wrong!", error);
      });
  };

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

  console.log("====================================");
  console.log(subject, selectedSunject);
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
                        <label className="form-label">বিষয় নির্বাচন করুন</label>
                        <select
                          className="form-select p-2"
                          aria-label="Default select example"
                          style={{ fontSize: "12px" }}
                          onChange={(e) => storeSubjectData(e.target.value)}
                        >
                          <option selected value={""}>
                            বিষয় নির্বাচন করুন
                          </option>
                          {subject?.map((data, index) => (
                            <option key={index} value={JSON.stringify(data)}>
                              {data?.subject?.name}
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
                        >
                          {selectedSunject?.class ? (
                            <option selected>
                              {selectedSunject?.class == "6" ? "6 " : " 7 "}
                            </option>
                          ) : (
                            <option selected value={""}>
                              শ্রেণী নির্বাচন করুন
                            </option>
                          )}
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
                        >
                          <option selected>শিক্ষার্থী নির্বাচন করুন</option>

                          {selectedSunject?.own_subjet?.class_room?.students?.map(
                            (data, index) => (
                              <option key={index} value="1">
                                {data.student_name_bn}
                              </option>
                            )
                          )}
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
              <div className="card shadow-lg border-0">
                <div className="d-flex justify-content-between flex-md-row flex-column align-items-center p-3 border-bottom">
                  <div className="">
                    <h5>শিক্ষার্থীর নাম: ইনতিশার পারভেজ </h5>
                    <p>রোল নম্বর #৩২১০০</p>
                  </div>
                  <div className="d-flex gap-2" onClick={SaveAsPDFHandler}>
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
                <div className="d-flex py-2 flex-lg-row flex-column">
                  <div className="d-flex py-1">
                    <div className="d-flex px-1" style={{ fontSize: "14px" }}>
                      <PiBookOpenTextBold className="fs-5 mx-1" />
                      বাংলা
                    </div>
                    <div className="d-flex px-1" style={{ fontSize: "14px" }}>
                      <PiBookOpenTextBold className="fs-5 mx-1" />
                      গনিত
                    </div>
                    <div className="d-flex px-1" style={{ fontSize: "14px" }}>
                      <PiBookOpenTextBold className="fs-5 mx-1" />
                      ইংরেজি
                    </div>
                  </div>
                  <div className="d-flex py-1">
                    <div className="d-flex px-1" style={{ fontSize: "14px" }}>
                      <PiBookOpenTextBold className="fs-5 mx-1" />
                      জীবন ও জীবিকা
                    </div>
                    <div className="d-flex px-1" style={{ fontSize: "14px" }}>
                      <PiBookOpenTextBold className="fs-5 mx-1" />
                      স্বাস্থ্য সুরক্ষা
                    </div>
                  </div>
                  <div className="d-flex py-1">
                    <div className="d-flex px-1" style={{ fontSize: "14px" }}>
                      <PiBookOpenTextBold className="fs-5 mx-1" />
                      ডিজিটাল প্রযুক্তি
                    </div>
                    <div className="d-flex px-1" style={{ fontSize: "14px" }}>
                      <PiBookOpenTextBold className="fs-5 mx-1" />
                      ইসলাম শিক্ষা
                    </div>
                    <div className="d-flex px-1" style={{ fontSize: "14px" }}>
                      <PiBookOpenTextBold className="fs-5 mx-1" />
                      বিজ্ঞান
                    </div>
                  </div>
                  <div className="d-flex py-1">
                    <div className="d-flex px-1" style={{ fontSize: "14px" }}>
                      <PiBookOpenTextBold className="fs-5 mx-1" />
                      জীবন ও জীবিকা
                    </div>
                    <div className="d-flex px-1" style={{ fontSize: "14px" }}>
                      <PiBookOpenTextBold className="fs-5 mx-1" />
                      জীবন ও জীবিকা
                    </div>
                  </div>
                </div>
                {/* subjects list end */}
                <div className="row pb-5 pt-2" id="print">
                  <div className="col-sm-6 col-md-3 py-2">
                    <div className="border-0 p-2 h-100">
                      <div className="d-flex">
                        <div>
                          <h6>পারদর্শিতা সূচক ৬.১.১ </h6>
                          <h6 style={{ fontSize: "14px" }}>
                            নিজের এবং অন্যের প্রয়োজন ও আবেগ বিবেচনায় নিয়ে
                            যোগাযোগ করতে পারছে।
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
                            নিজের এবং অন্যের প্রয়োজন ও আবেগ বিবেচনায় নিয়ে
                            যোগাযোগ করতে পারছে।
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
                            দলের কর্মপরিকল্পনায় বা সিদ্ধান্তগ্রহণে যথাযথভাবে
                            অংশগ্রহণ না করলেও দলীয় নির্দেশনা অনুযায়ী নিজের
                            দায়িত্বটুকু যথাযথভাবে পালন করছে
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
                            দলের সিদ্ধান্ত ও কর্মপরিকল্পনায় সক্রিয় অংশগ্রহণ
                            করছে, সেই অনুযায়ী নিজের ভূমিকা যথাযথভাবে পালন করছে
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
                            নিজের এবং অন্যের প্রয়োজন ও আবেগ বিবেচনায় নিয়ে
                            যোগাযোগ করতে পারছে।
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
                            নিজের এবং অন্যের প্রয়োজন ও আবেগ বিবেচনায় নিয়ে
                            যোগাযোগ করতে পারছে।
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
                            দলের কর্মপরিকল্পনায় বা সিদ্ধান্তগ্রহণে যথাযথভাবে
                            অংশগ্রহণ না করলেও দলীয় নির্দেশনা অনুযায়ী নিজের
                            দায়িত্বটুকু যথাযথভাবে পালন করছে
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
                            দলের সিদ্ধান্ত ও কর্মপরিকল্পনায় সক্রিয় অংশগ্রহণ
                            করছে, সেই অনুযায়ী নিজের ভূমিকা যথাযথভাবে পালন করছে
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
                            নিজের এবং অন্যের প্রয়োজন ও আবেগ বিবেচনায় নিয়ে
                            যোগাযোগ করতে পারছে।
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
                            নিজের এবং অন্যের প্রয়োজন ও আবেগ বিবেচনায় নিয়ে
                            যোগাযোগ করতে পারছে।
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
                            দলের কর্মপরিকল্পনায় বা সিদ্ধান্তগ্রহণে যথাযথভাবে
                            অংশগ্রহণ না করলেও দলীয় নির্দেশনা অনুযায়ী নিজের
                            দায়িত্বটুকু যথাযথভাবে পালন করছে
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
                            দলের সিদ্ধান্ত ও কর্মপরিকল্পনায় সক্রিয় অংশগ্রহণ
                            করছে, সেই অনুযায়ী নিজের ভূমিকা যথাযথভাবে পালন করছে
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
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
          <div className={`container border ${styles.ff_nikosh}`}>
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
              <div className="table-responsive">
                <table className="table table-bordered table-sm table-responsive">
                  <thead>
                    <tr>
                      <th
                        colSpan={3}
                        style={{ fontSize: "10px", fontWeight: "bold" }}
                      >
                        শিক্ষার্থীর নাম: ইনতিশার পারভেজ
                      </th>
                      <th style={{ fontSize: "10px", fontWeight: "bold" }}>
                        শিক্ষার্থীর আইডি: ৩২১০০
                      </th>
                    </tr>
                    <tr>
                      <th style={{ fontSize: "10px", fontWeight: "bold" }}>
                        শ্রেণী: ষষ্ঠ
                      </th>
                      <th style={{ fontSize: "10px", fontWeight: "bold" }}>
                        শাখা: পদ্মা
                      </th>
                      <th style={{ fontSize: "10px", fontWeight: "bold" }}>
                        বিষয়: বাংলা
                      </th>
                      <th style={{ fontSize: "10px", fontWeight: "bold" }}>
                        বিষয় শিক্ষকের নাম: তামান্না হাসিন
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
                      <td style={{ minWidth: "300px" }}>
                        ৬.১.১ <br />
                        নিজের এবং অন্যের প্রয়োজন ও আবেগ বিবেচনায় নিয়ে যোগাযোগ
                        করতে পারছে।
                      </td>
                      <td style={{ minWidth: "300px" }}>
                        <BsCheckCircle className="fs-5 pe-1" />
                        অন্যের সাথে যোগাযোগের সময়ে নিজের চাহিদা প্রকাশ করতে
                        পারছে।
                      </td>
                      <td style={{ minWidth: "300px" }}>
                        অন্যের কাছে নিজের চাহিদা প্রকাশ করার সময় ঐ ব্যক্তির
                        আগ্রহ, চাহিদা ও আবেগ বিবেচনায় নিতে পারছে।
                      </td>
                      <td style={{ minWidth: "300px" }}>
                        মর্যাদাপূর্ণ শারীরিক ভাষা প্রয়োগের পাশাপাশি ব্যাক্তির
                        সাথে সম্পর্কের ধরন অনুযায়ী যথাযথভাবে সম্বোধন করতে পারছে
                      </td>
                    </tr>
                    <tr>
                      <td style={{ minWidth: "300px" }}>
                        ৬.১.১ <br />
                        নিজের এবং অন্যের প্রয়োজন ও আবেগ বিবেচনায় নিয়ে যোগাযোগ
                        করতে পারছে।
                      </td>
                      <td style={{ minWidth: "300px" }}>
                        <BsCheckCircle className="fs-5 pe-1" />
                        অন্যের সাথে যোগাযোগের সময়ে নিজের চাহিদা প্রকাশ করতে
                        পারছে।
                      </td>
                      <td style={{ minWidth: "300px" }}>
                        অন্যের কাছে নিজের চাহিদা প্রকাশ করার সময় ঐ ব্যক্তির
                        আগ্রহ, চাহিদা ও আবেগ বিবেচনায় নিতে পারছে।
                      </td>
                      <td style={{ minWidth: "300px" }}>
                        মর্যাদাপূর্ণ শারীরিক ভাষা প্রয়োগের পাশাপাশি ব্যাক্তির
                        সাথে সম্পর্কের ধরন অনুযায়ী যথাযথভাবে সম্বোধন করতে পারছে
                      </td>
                    </tr>
                    <tr>
                      <td style={{ minWidth: "300px" }}>
                        ৬.১.১ <br />
                        নিজের এবং অন্যের প্রয়োজন ও আবেগ বিবেচনায় নিয়ে যোগাযোগ
                        করতে পারছে।
                      </td>
                      <td style={{ minWidth: "300px" }}>
                        <BsCheckCircle className="fs-5 pe-1" />
                        অন্যের সাথে যোগাযোগের সময়ে নিজের চাহিদা প্রকাশ করতে
                        পারছে।
                      </td>
                      <td style={{ minWidth: "300px" }}>
                        অন্যের কাছে নিজের চাহিদা প্রকাশ করার সময় ঐ ব্যক্তির
                        আগ্রহ, চাহিদা ও আবেগ বিবেচনায় নিতে পারছে।
                      </td>
                      <td style={{ minWidth: "300px" }}>
                        মর্যাদাপূর্ণ শারীরিক ভাষা প্রয়োগের পাশাপাশি ব্যাক্তির
                        সাথে সম্পর্কের ধরন অনুযায়ী যথাযথভাবে সম্বোধন করতে পারছে
                      </td>
                    </tr>
                    <tr>
                      <td style={{ minWidth: "300px" }}>
                        ৬.১.১ <br />
                        নিজের এবং অন্যের প্রয়োজন ও আবেগ বিবেচনায় নিয়ে যোগাযোগ
                        করতে পারছে।
                      </td>
                      <td style={{ minWidth: "300px" }}>
                        <BsCheckCircle className="fs-5 pe-1" />
                        অন্যের সাথে যোগাযোগের সময়ে নিজের চাহিদা প্রকাশ করতে
                        পারছে।
                      </td>
                      <td style={{ minWidth: "300px" }}>
                        অন্যের কাছে নিজের চাহিদা প্রকাশ করার সময় ঐ ব্যক্তির
                        আগ্রহ, চাহিদা ও আবেগ বিবেচনায় নিতে পারছে।
                      </td>
                      <td style={{ minWidth: "300px" }}>
                        মর্যাদাপূর্ণ শারীরিক ভাষা প্রয়োগের পাশাপাশি ব্যাক্তির
                        সাথে সম্পর্কের ধরন অনুযায়ী যথাযথভাবে সম্বোধন করতে পারছে
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
                    className="w-50 ps-5"
                    style={{ fontSize: "14px", fontWeight: "bold" }}
                  >
                    প্রধান শিক্ষকের স্বাক্ষরঃ
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
