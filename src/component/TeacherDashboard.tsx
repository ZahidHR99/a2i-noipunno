import "../styles/TeacherDashboard.css";
import "../assets/teacherDashboard/css/app_info.css";
import { subject_name } from "../utils/Utils";
import ProfileCard from "./ProfileCard";
import { useEffect, useState } from "react";
import Teacher from "./Teacher";
import AppInfoIcon1 from "../assets/images/app-info-icons/bd-map.svg";
import AppInfoIcon2 from "../assets/images/app-info-icons/NCTB_logo-2.svg";
import AppInfoIcon3 from "../assets/images/app-info-icons/Aspire_to_Innovate_Seal 2.svg";
import AppInfoIcon4 from "../assets/images/app-info-icons/unicef logo.svg";
import AppInfoIcon5 from "../assets/images/app-info-icons/app-info.svg";

const TeacherDashboard = () => {
  const [all_student, set_All_student] = useState([]);
  const student_lsit = async () => {
    const student: any = [];
    const studentsData = JSON.parse(localStorage.getItem("own_subjet"));
    studentsData.data.data.subjects.map((std_data: any) => {
      return std_data.class_room.students.map((stu_data: any) => {
        stu_data.competence = std_data.competence;
        student.push(stu_data);
      });
    });

    const uniqueObjectsArray = student.filter(
      (obj: any, index: any, self: any) =>
        index === self.findIndex((o: any) => o.uid === obj.uid)
    );
    set_All_student(uniqueObjectsArray);
  };

  const [all_teacher, set_all_teacher] = useState([]);
  const teacher_list = async () => {
    const teachersData = JSON.parse(localStorage.getItem("teacher_dashboard"));
    set_all_teacher(teachersData?.data?.teachers);
  };

  const [total_class, set_Total_class] = useState([]);
  const all_class = async () => {
    const local_storege_data = JSON.parse(
      localStorage.getItem("teacher_dashboard")
    );
    set_Total_class(local_storege_data?.data?.subjects);
  };

  const [teachers, setTeachers] = useState<any>([]);
  const fetchData = async () => {
    const teachersData = JSON.parse(localStorage.getItem("teacher_dashboard"));
    setTeachers(teachersData?.data?.teachers);
  };

  useEffect(() => {
    fetchData();
    student_lsit();
    teacher_list();
    all_class();
  }, []);

  const chatBox = () => {
    alert("this is chat box");
  };
  return (
    <div className="body">
      <>
        {/* student-chart */}
        <section className="container my-3">
          <div className="card-container">
            <div className="row g-3 ">
              {/* <div className="col-lg-2 col-md-6">
                <div className="card teacher-profile border-0">
                  <div className="card-header border-0">
                    <div className="edit-icon">
                      <img src="../../public/assets/teacherDashboard/images/dashboard/edit-2.svg" alt="" />

                    </div>
                    <div className="profile-img">
                      <img src="../../public/assets/teacherDashboard/images/dashboard/60px.png" alt="" />

                    </div>
                    <div className="teacher-title">
                      <h2>প্রধান শিক্ষক</h2>
                    </div>
                    <div className="icon">
                      <div className="single-icon">
                        <img src="../../public/assets/teacherDashboard/images/dashboard/ico.svg" alt="" />
                      </div>
                      <div className="single-icon">
                        <img src="../../public/assets/teacherDashboard/images/dashboard/message.svg" alt="" />
                      </div>
                      <div className="single-icon">
                        <img src="../../public/assets/teacherDashboard/images/dashboard/moon.svg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="teacher-info">
                    <h2 className="card-title">আতাউর রহমান</h2>
                    <p className="card-text">95481468716473</p>
                    <p className="card-text">পাবনা জিলা স্কুল, পাবনা</p>
                    <div className="button">
                      <img src="../../public/assets/teacherDashboard/images/dashboard/eye.svg" alt="" />
                      <a href="#" className="">
                        আমার প্রোফাইল
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}
              <ProfileCard />

              {/* Chart */}

              <div className="col-lg-5 col-md-6">
                <div className="student-chart">
                  <div className="header">
                    <h3>শিক্ষার্থীর হাজিরা</h3>
                    <div className="timeline">
                      <h4>টাইমলাইন</h4>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected="">সাপ্তাহিক </option>
                        <option value={1}>মাসিক</option>
                        <option value={2}>বছর</option>
                      </select>
                    </div>
                    <div className="all">
                      <h4>ক্লাস অনুসারে ফিল্টার</h4>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected="">সব</option>
                        <option value={2}>দিন</option>
                        <option value={3}>মাসিক</option>
                      </select>
                    </div>
                  </div>
                  <div className="chart">
                    <img
                      src="../../public/assets/teacherDashboard/images/dashboard/Chart.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 ">
                <div className="all-teacher-student-card gy-5">
                  <a href="#">
                    <div className="card-container">
                      <div className="total-student">
                        <div className="title">
                          <h3>
                            সর্বমোট
                            <br />
                            <span>শিক্ষার্থী</span>
                          </h3>
                          <h6>শ্রেণী - ষষ্ঠ - সপ্তম</h6>
                        </div>
                        <div className="circle">
                          <h5>{all_student?.length}</h5>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <div className="card-container">
                      <div className="total-student">
                        <div className="title">
                          <h3>
                            সর্বমোট
                            <br />
                            <span>শিক্ষক</span>
                          </h3>
                          <h6>আপনার স্কুল এ</h6>
                        </div>
                        <div className="circle">
                          <h5>{all_teacher?.length}</h5>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <div className="card-container">
                      <div className="total-student">
                        <div className="title">
                          <h3>
                            সর্বমোট
                            <br />
                            <span>শ্রেণী কক্ষ</span>
                          </h3>
                          <h6>আপনার স্কুল এ</h6>
                        </div>
                        <div className="circle">
                          <h5>{total_class?.length}</h5>
                        </div>
                      </div>
                    </div>
                  </a>
                  {/* <a href="#">
                    <div className="card-container">
                      <div className="total-student">
                        <div className="title">
                          <h3>
                            সর্বমোট
                            <br />
                            <span>শিক্ষার্থী</span>
                          </h3>
                          <h6>শ্রেণী - ষষ্ঠ - সপ্তম</h6>
                        </div>
                        <div className="circle">
                          <h5>৯২৩</h5>
                        </div>
                      </div>
                    </div>
                  </a> */}
                </div>
              </div>
              <div className="col-lg-3 col-md-6 ">
                <div className="request-container">
                  <div className="header">
                    <div className="title">
                      <h5 className="request">অনুরোধ</h5>
                      <img
                        src="../../public/assets/teacherDashboard/images/dashboard/dots-vertical.svg"
                        alt=""
                      />
                    </div>
                    <p className="request_paragraph">
                      বিষয়গুলি আপনার পর্যালোচনা করা দরকার
                    </p>
                  </div>
                  <div className="tab-bar">
                    <ul className="nav">
                      <li className="nav-item">
                        <a
                          href="#"
                          id="apply-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#apply"
                        >
                          <img
                            src="../../public/assets/teacherDashboard/images/dashboard/alertico.png"
                            alt=""
                          />
                          <h2>আবেদন</h2>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#"
                          id="notice-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#notice"
                        >
                          <img
                            src="../../public/assets/teacherDashboard/images/dashboard/info-circle.png"
                            alt=""
                          />
                          <h2>বিজ্ঞপ্তি</h2>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* Tab Content */}
                  <div className="tab-content" id="tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="apply"
                      role="tabpanel"
                      aria-labelledby="apply-tab"
                    >
                      <div className="tab-container">
                        <a href="#">
                          <div className="heading">
                            <div className="icon">
                              <img
                                src="../../public/assets/teacherDashboard/images/dashboard/ico2.svg"
                                className="img-fluid"
                                alt="icon"
                              />
                            </div>
                            <h2>ফোন নম্বর পরিবর্তনের অনুরোধ করেছেন</h2>
                          </div>
                          <div className="teachers">
                            <h3>সামিনা চৌধুরী</h3>
                            <h3>|</h3>
                            <h3>সহকারী শিক্ষক</h3>
                          </div>
                          <div className="class-section">
                            <div className="class-day-section">
                              <h6>ষষ্ঠ শ্রেণী</h6>
                              <h6>Day</h6>
                              <h6>Section A</h6>
                            </div>
                            <p>অনুরোধ করেছেন ৬ অক্টোবর ২০২৩</p>
                          </div>
                        </a>
                      </div>
                      <div className="tab-container">
                        <a href="#">
                          <div className="heading">
                            <div className="icon">
                              <img
                                src="../../public/assets/teacherDashboard/images/dashboard/arrow-right2.svg"
                                className="img-fluid"
                                alt="icon"
                              />
                            </div>
                            <h2>বিষয় পরিবর্তনের অনুরোধ করেছেন</h2>
                          </div>
                          <div className="teachers">
                            <h3>সামিনা চৌধুরী</h3>
                            <h3>|</h3>
                            <h3>সহকারী শিক্ষক</h3>
                          </div>
                          <div className="class-section">
                            <div className="class-day-section">
                              <h6>ষষ্ঠ শ্রেণী</h6>
                              <h6>Day</h6>
                              <h6>Section A</h6>
                            </div>
                            <p>অনুরোধ করেছেন ৬ অক্টোবর ২০২৩</p>
                          </div>
                        </a>
                      </div>
                      <div className="tab-container">
                        <a href="#">
                          <div className="heading">
                            <div className="icon">
                              <img
                                src="../../public/assets/teacherDashboard/images/dashboard/arrow-right2.svg"
                                className="img-fluid"
                                alt="icon"
                              />
                            </div>
                            <h2>ফোন নম্বর পরিবর্তনের অনুরোধ করেছেন</h2>
                          </div>
                        </a>
                      </div>
                      <div className="button">
                        <a>সব অনুরোধগুলি দেখুন</a>
                        <img
                          src="../../public/assets/teacherDashboard/images/dashboard/arrow-right.svg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="notice"
                      role="tabpanel"
                      aria-labelledby="notice-tab"
                    >
                      <div className="tab-container">
                        <a href="#">
                          <div className="heading">
                            <div className="icon">
                              <img
                                src="../../public/assets/teacherDashboard/images/dashboard/ico2.svg"
                                className="img-fluid"
                                alt="icon"
                              />
                            </div>
                            <h2>ফোন নম্বর পরিবর্তনের অনুরোধ করেছেন</h2>
                          </div>
                          <div className="teachers">
                            <h3>সামিনা চৌধুরী</h3>
                            <h3>|</h3>
                            <h3>সহকারী শিক্ষক</h3>
                          </div>
                          <div className="class-section">
                            <div className="class-day-section">
                              <h6>ষষ্ঠ শ্রেণী</h6>
                              <h6>Day</h6>
                              <h6>Section A</h6>
                            </div>
                            <p>অনুরোধ করেছেন ৬ অক্টোবর ২০২৩</p>
                          </div>
                        </a>
                      </div>
                      <div className="tab-container">
                        <a href="#">
                          <div className="heading">
                            <div className="icon">
                              <img
                                src="../../public/assets/teacherDashboard/images/dashboard/arrow-right2.svg"
                                className="img-fluid"
                                alt="icon"
                              />
                            </div>
                            <h2>বিষয় পরিবর্তনের অনুরোধ করেছেন</h2>
                          </div>
                          <div className="teachers">
                            <h3>সামিনা চৌধুরী</h3>
                            <h3>|</h3>
                            <h3>সহকারী শিক্ষক</h3>
                          </div>
                          <div className="class-section">
                            <div className="class-day-section">
                              <h6>ষষ্ঠ শ্রেণী</h6>
                              <h6>Day</h6>
                              <h6>Section A</h6>
                            </div>
                            <p>অনুরোধ করেছেন ৬ অক্টোবর ২০২৩</p>
                          </div>
                        </a>
                      </div>
                      <div className="tab-container">
                        <a href="#">
                          <div className="heading">
                            <div className="icon">
                              <img
                                src="../../public/assets/teacherDashboard/images/dashboard/arrow-right2.svg"
                                className="img-fluid"
                                alt="icon"
                              />
                            </div>
                            <h2>ফোন নম্বর পরিবর্তনের অনুরোধ করেছেন</h2>
                          </div>
                        </a>
                      </div>
                      <div className="button">
                        <a>সব অনুরোধগুলি দেখুন</a>
                        <img
                          src="../../public/assets/teacherDashboard/images/dashboard/arrow-right.svg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* report */}
        <section>
          <div className="container report-container">
            <h2>রিপোর্ট</h2>
            <div className="row mt-2 mb-5">
              <div className="col">
                <a href="#" className="student-container">
                  <div className="icon">
                    <img
                      src="../../public/assets/teacherDashboard/images/dashboard/document-text.svg"
                      alt=""
                    />
                  </div>
                  <h2>শিক্ষার্থীদের প্রতিবেদন</h2>
                </a>
              </div>
              <div className="col">
                <a href="#" className="student-container">
                  <div className="icon">
                    <img
                      src="../../public/assets/teacherDashboard/images/dashboard/document-text.svg"
                      alt=""
                    />
                  </div>
                  <h2>শিক্ষার্থীদের প্রতিবেদন</h2>
                </a>
              </div>
              <div className="col">
                <a href="#" className="student-container">
                  <div className="icon">
                    <img
                      src="../../public/assets/teacherDashboard/images/dashboard/document-text.svg"
                      alt=""
                    />
                  </div>
                  <h2>শিক্ষার্থীদের প্রতিবেদন</h2>
                </a>
              </div>
              <div className="col">
                <a href="#" className="student-container">
                  <div className="icon">
                    <img
                      src="../../public/assets/teacherDashboard/images/dashboard/document-text.svg"
                      alt=""
                    />
                  </div>
                  <h2>শিক্ষার্থীদের প্রতিবেদন</h2>
                </a>
              </div>
              <div className="col">
                <a href="#" className="student-container">
                  <div className="icon">
                    <img
                      src="../../public/assets/teacherDashboard/images/dashboard/document-text.svg"
                      alt=""
                    />
                  </div>
                  <h2>শিক্ষার্থীদের প্রতিবেদন</h2>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* subject info*/}
        <section>
          <Teacher />
          {/* <div className="container subject-container">
            <h2>বিষয় ভিত্তিক তথ্য ও মূল্যায়ন</h2>
            <div className="row">
              <div className="col">
                <a href="#" className="subject-number">
                  <div className="icon">
                    <img src="../../public/assets/teacherDashboard/images/dashboard/bicon.svg" alt="" />
                  </div>
                  <h2 className="mt-3">শিক্ষার্থীদের প্রতিবেদন</h2>
                  <div className="total-student">
                    <p>মোট ছাত্র</p>
                    <div className="number">
                      <p className="">54</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col">
                <a href="#" className="subject-number">
                  <div className="icon">
                    <img src="../../public/assets/teacherDashboard/images/dashboard/bicon.svg" alt="" />
                  </div>
                  <h2 className="mt-3">শিক্ষার্থীদের প্রতিবেদন</h2>
                  <div className="total-student">
                    <p>মোট ছাত্র</p>
                    <div className="number">
                      <p className="">54</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col">
                <a href="#" className="subject-number">
                  <div className="icon">
                    <img src="../../public/assets/teacherDashboard/images/dashboard/bicon.svg" alt="" />
                  </div>
                  <h2 className="mt-3">শিক্ষার্থীদের প্রতিবেদন</h2>
                  <div className="total-student">
                    <p>মোট ছাত্র</p>
                    <div className="number">
                      <p className="">54</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col">
                <a href="#" className="subject-number">
                  <div className="icon">
                    <img src="../../public/assets/teacherDashboard/images/dashboard/bicon.svg" alt="" />
                  </div>
                  <h2 className="mt-3">শিক্ষার্থীদের প্রতিবেদন</h2>
                  <div className="total-student">
                    <p>মোট ছাত্র</p>
                    <div className="number">
                      <p className="">54</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col">
                <a href="#" className="subject-number">
                  <div className="icon">
                    <img src="../../public/assets/teacherDashboard/images/dashboard/bicon.svg" alt="" />
                  </div>
                  <h2 className="mt-3">শিক্ষার্থীদের প্রতিবেদন</h2>
                  <div className="total-student">
                    <p>মোট ছাত্র</p>
                    <div className="number">
                      <p className="">54</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div> */}
        </section>
        {/* information on proficiency */}
        <section className="container">
          <div className="proficiency-container">
            <div className="title">
              <h3>পারদর্শিতা সূচক বিষয়ক তথ্য</h3>
              <div className="d-flex justify-content-center align-items-center">
                <div className="pl-container d-flex justify-content-center align-items-center me-3">
                  <div className="pl-primary" />
                  <h4>PI Need to Complete</h4>
                </div>
                <div className="pl-container d-flex justify-content-center align-items-center">
                  <div className="pl-secondary" />
                  <h4>PI Done</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-6">
                <img
                  src="../../public/assets/teacherDashboard/images/dashboard/Chart44.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        {/* teacher list */}
        <section className="container mt-3">
          <div className="teacher-list">
            <div className="title">
              <h3>শিক্ষকের তালিকা</h3>
              <a href="#">View All</a>
            </div>
            <div className="row g-2">
              {teachers.map((teacher, index) => (
                <div key={index} className="col-lg-2 col-md-6 col-sm-12">
                  <div className="teacher-container">
                    <a href="#">
                      <div className="card-top-icon">
                        <img
                          src="../../public/assets/teacherDashboard/images/dashboard/ico.svg"
                          alt=""
                        />
                      </div>
                      <div className="teacher">
                        <img
                          src="../../public/assets/teacherDashboard/images/dashboard/60px.png"
                          alt=""
                        />
                        <div className="name">
                          <h3>
                            {teacher?.name_bn || teacher?.name_en || "no-entry"}
                          </h3>
                          <h4>{teacher?.designation || "no-entry"}</h4>
                        </div>
                      </div>

                      <div className="subjects">
                        {teacher?.assigned_subjects?.length > 0 ? (
                          <>
                            {teacher?.assigned_subjects?.map(
                              (item: any, index: any) => (
                                <div key={index} className="subject">
                                  <h3>{subject_name(item.subject_id)}</h3>
                                </div>
                              )
                            )}
                          </>
                        ) : (
                          <div className="subject">
                            <h3>no-entry</h3>
                          </div>
                        )}
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* class routine  */}
        <section className="container">
          <div className="class-routine-container">
            <div className="class-routine-header">
              <h6 className="p-0 m-0 class_routine">ক্লাস রুটিন</h6>
              <div className="class-routine-selector">
                <div className="timeline">
                  <h4>টাইমলাইন</h4>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected="">সাপ্তাহিক </option>
                    <option value={1}>মাসিক</option>
                    <option value={2}>বছর</option>
                  </select>
                </div>
                <div className="all">
                  <h4>ক্লাস অনুসারে ফিল্টার</h4>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected="">সব</option>
                    <option value={1}>সাপ্তাহিক</option>
                    <option value={2}>দিন</option>
                    <option value={3}>মাসিক</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="class-routine-table">
              <div className="row justify-content-between">
                <ul
                  className="nav text-white d-flex justify-content-between py-2"
                  style={{ color: "#555555" }}
                >
                  <li className="nav-item">
                    <a
                      className="nav-link link-secondary active"
                      id="class-six-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#class-six"
                      href="#"
                    >
                      <div className="d-flex gap-2">
                        {" "}
                        <img
                          src="../../public/assets/teacherDashboard/images/dashboard/profile-2user.svg"
                          alt="user-icon"
                        />{" "}
                        ষষ্ঠ শ্রেণী
                      </div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link link-secondary"
                      id="class-seven-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#class-seven"
                      href="#"
                    >
                      <div className="d-flex gap-2">
                        {" "}
                        <img
                          src="../../public/assets/teacherDashboard/images/dashboard/profile-2user.svg"
                          alt="user-icon"
                        />{" "}
                        সপ্তম শ্রেণী
                      </div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link link-secondary"
                      id="class-eight-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#class-eight"
                      href="#"
                    >
                      <div className="d-flex gap-2">
                        {" "}
                        <img
                          src="../../public/assets/teacherDashboard/images/dashboard/profile-2user.svg"
                          alt="user-icon"
                        />{" "}
                        অষ্টম শ্রেণী
                      </div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link link-secondary"
                      id="class-nine-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#class-nine"
                      href="#"
                    >
                      <div className="d-flex gap-2">
                        {" "}
                        <img
                          src="../../public/assets/teacherDashboard/images/dashboard/profile-2user.svg"
                          alt="user-icon"
                        />{" "}
                        নবম শ্রেণী
                      </div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link link-secondary"
                      id="class-ten-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#class-ten"
                      href="#"
                    >
                      <div className="d-flex gap-2">
                        {" "}
                        <img
                          src="../../public/assets/teacherDashboard/images/dashboard/profile-2user.svg"
                          alt="user-icon"
                        />{" "}
                        দশম শ্রেণী
                      </div>
                    </a>
                  </li>
                </ul>
                <div className="routine-section">
                  <div className="title">
                    <h6>পদ্মা</h6>
                  </div>
                  <div className="title">
                    <h6>মেঘনা</h6>
                  </div>
                  <div className="title">
                    <h6>যমুনা</h6>
                  </div>
                </div>
                <div className="tab-content" id="tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="class-six"
                    role="tabpanel"
                    aria-labelledby="class-six-tab"
                  >
                    <table id="example" className="table border table-hover">
                      <thead>
                        <tr>
                          <th className="" />
                          <th className="tab-th-style">8:00AM - 9:00AM</th>
                          <th className="tab-th-style">8:00AM - 9:00AM</th>
                          <th className="tab-th-style">8:00AM - 9:00AM</th>
                          <th className="tab-th-style">8:00AM - 9:00AM</th>
                          <th className="tab-th-style">8:00AM - 9:00AM</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="class-seven"
                    role="tabpanel"
                    aria-labelledby="class-seven-tab"
                  >
                    <table id="example" className="table border table-hover">
                      <thead>
                        <tr>
                          <th className="" />
                          <th className="tab-th-style">8:00AM - 9:00AM</th>
                          <th className="tab-th-style">8:00AM - 9:00AM</th>
                          <th className="tab-th-style">8:00AM - 9:00AM</th>
                          <th className="tab-th-style">8:00AM - 9:00AM</th>
                          <th className="tab-th-style">8:00AM - 9:00AM</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="class-eight"
                    role="tabpanel"
                    aria-labelledby="class-eight-tab"
                  >
                    <table id="example" className="table border table-hover">
                      <thead>
                        <tr>
                          <th className="" />
                          <th className="tab-th-style">8:00AM - 9:00AM</th>
                          <th className="tab-th-style">8:00AM - 9:00AM</th>
                          <th className="tab-th-style">8:00AM - 9:00AM</th>
                          <th className="tab-th-style">8:00AM - 9:00AM</th>
                          <th className="tab-th-style">8:00AM - 9:00AM</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="class-nine"
                    role="tabpanel"
                    aria-labelledby="class-nine-tab"
                  >
                    <table id="example" className="table border table-hover">
                      <thead>
                        <tr>
                          <th className="" />
                          <th className="tab-th-style">8:00AM - 9:00AM</th>
                          <th className="tab-th-style">8:00AM - 9:00AM</th>
                          <th className="tab-th-style">8:00AM - 9:00AM</th>
                          <th className="tab-th-style">8:00AM - 9:00AM</th>
                          <th className="tab-th-style">8:00AM - 9:00AM</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="class-ten"
                    role="tabpanel"
                    aria-labelledby="class-ten-tab"
                  >
                    <table id="example" className="table border table-hover">
                      <thead>
                        <tr>
                          <th className="" />
                          <th className="tab-th-style">8:00AM - 9:00AM</th>
                          <th className="tab-th-style">8:00AM - 9:00AM</th>
                          <th className="tab-th-style">8:00AM - 9:00AM</th>
                          <th className="tab-th-style">8:00AM - 9:00AM</th>
                          <th className="tab-th-style">8:00AM - 9:00AM</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                        <tr>
                          <td className="tab-first-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                          <td className="tab-td-style">Cell label</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* app info start */}
        <section className="chat_app_info">
          <div className="chat_box">
            <div className="chat_box">
              <div id="popup" className="popup ">
                <div className="popup-app-info-top ">
                  <div className="popup-app-info-reserved">
                    <h2 className="reserved-app-info p-0 m-0">
                      সর্বস্বত্ব সংরক্ষিত ২০২৩
                    </h2>
                  </div>
                  <div className="popup-card-body">
                    <div className="d-flex popup-card-icons">
                      <div className="">
                        <img src={AppInfoIcon1} className="img-fluid" alt="" />
                      </div>
                      <div className="">
                        <img src={AppInfoIcon2} className="img-fluid" alt="" />
                      </div>
                    </div>
                    <div className="popup-card-institutions">
                      <ul>
                        <li>পরিকল্পনা ও বাস্তবায়নে:</li>
                        <li>জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড</li>
                        <li>(এনসিটিবি), শিক্ষা মন্ত্রণালয়,</li>
                        <li>গণপ্রজাতন্ত্রী বাংলাদেশ সরকার</li>
                      </ul>
                    </div>
                  </div>
                  <hr className="m-0 my-2 p-0" />
                  <div className="popup-app-info-bottom">
                    <div className="d-flex popup-card-icons align-items-end">
                      <div className="">
                        <img src={AppInfoIcon3} className="img-fluid" alt="" />
                      </div>
                      <div className="">
                        <img src={AppInfoIcon4} className="img-fluid" alt="" />
                      </div>
                    </div>
                    <div className="popup-card-institutions">
                      <ul>
                        <li>কারিগরি সহায়তায়:</li>
                        <li>এসপায়ার টু ইনোভেট (এটুআই), আইসিটি বিভাগ </li>
                        <li>এবং ইউনিসেফ </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="popup-version-bottom">
                    <div className="d-flex align-items-center popup-version">
                      <p className="popup-version-info text-white">
                        Version 1.0.2 &amp; Last relies 24/10/23
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="chat_btn bg-transparent border-0">
                <img
                  className="app-info-btn"
                  src={AppInfoIcon5}
                  onClick={chatBox}
                  alt="app-info"
                />
              </div>
            </div>
          </div>
        </section>
        {/* app info end */}
      </>
    </div>
  );
};

export default TeacherDashboard;
