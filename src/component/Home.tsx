import React from "react";
import TeacherImg from "../assets/images/teacher.png";
import { FiStar } from "react-icons/fi";
import { useState, useEffect } from "react"


export default function Home() {

  const [userDetails, setuserDetails] = useState([]);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('customer_login_auth'));
    if (items) {
      setuserDetails(items.user);
    }
  }, []);

  // console.log("userDetails", userDetails);

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
                        <p className="mt-3 p-2">{userDetails?.user_type?.name}</p>
                      </div>
                      <div className="head-teacher-top-icons d-flex justify-content-center align-items-center">
                        <img src="https://teacher.project-ca.com/frontend/noipunno/images/icons/star.svg" />
                        <img src="https://teacher.project-ca.com/frontend/noipunno/images/icons/message.svg" />
                        <img src="https://teacher.project-ca.com/frontend/noipunno/images/icons/moon.svg" />
                      </div>
                    </div>
                    <div className="head-teacher-bottom d-flex flex-column ">
                      <div className="w-100 d-flex flex-column  align-items-center justify-content-center mt-3 ">
                        <h5>{userDetails?.name}</h5>
                        <small>{userDetails?.id}</small>
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
                <div className="row">
                  <div className="col-6 col-sm-4 col-md-3">
                    <div className="card shadow-sm p-1 p-lg-3 my-1 teacher-list-card">
                      <div className="gap-1 gap-lg-3 justify-content-center">
                        <div className="d-flex justify-content-center py-3">
                          <img src={TeacherImg} className="img-fluid" />
                        </div>
                        <h5
                          className="text-center"
                          style={{ fontSize: "10px" }}
                        >
                          Showkat Ali
                        </h5>
                        <h6 className="text-center" style={{ fontSize: "8px" }}>
                          Head Master
                        </h6>
                      </div>
                      <div className="flex-md-column flex-lg-row d-flex  justify-content-center gap-2">
                        <div style={{ fontSize: "10px" }}>বাংলা</div>
                        <div style={{ fontSize: "10px" }}>জীবন o জীবিকা</div>
                        <div style={{ fontSize: "10px" }}>বিজ্ঞান</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3">
                    <div className="card shadow-sm p-1 p-lg-3 my-1 teacher-list-card">
                      <div className="gap-1 gap-lg-3 justify-content-center">
                        <div className="d-flex justify-content-center py-3">
                          <img src={TeacherImg} className="img-fluid" />
                        </div>
                        <h5
                          className="text-center"
                          style={{ fontSize: "10px" }}
                        >
                          Showkat Ali
                        </h5>
                        <h6 className="text-center" style={{ fontSize: "8px" }}>
                          Head Master
                        </h6>
                      </div>
                      <div className="flex-md-column flex-lg-row d-flex  justify-content-center gap-2">
                        <div style={{ fontSize: "10px" }}>বাংলা</div>
                        <div style={{ fontSize: "10px" }}>জীবন o জীবিকা</div>
                        <div style={{ fontSize: "10px" }}>বিজ্ঞান</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3">
                    <div className="card shadow-sm p-1 p-lg-3 my-1 teacher-list-card">
                      <div className="gap-1 gap-lg-3 justify-content-center">
                        <div className="d-flex justify-content-center py-3">
                          <img src={TeacherImg} className="img-fluid" />
                        </div>
                        <h5
                          className="text-center"
                          style={{ fontSize: "10px" }}
                        >
                          Showkat Ali
                        </h5>
                        <h6 className="text-center" style={{ fontSize: "8px" }}>
                          Head Master
                        </h6>
                      </div>
                      <div className="flex-md-column flex-lg-row d-flex  justify-content-center gap-2">
                        <div style={{ fontSize: "10px" }}>বাংলা</div>
                        <div style={{ fontSize: "10px" }}>জীবন o জীবিকা</div>
                        <div style={{ fontSize: "10px" }}>বিজ্ঞান</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3">
                    <div className="card shadow-sm p-1 p-lg-3 my-1 teacher-list-card">
                      <div className="gap-1 gap-lg-3 justify-content-center">
                        <div className="d-flex justify-content-center py-3">
                          <img src={TeacherImg} className="img-fluid" />
                        </div>
                        <h5
                          className="text-center"
                          style={{ fontSize: "10px" }}
                        >
                          Showkat Ali
                        </h5>
                        <h6 className="text-center" style={{ fontSize: "8px" }}>
                          Head Master
                        </h6>
                      </div>
                      <div className="flex-md-column flex-lg-row d-flex  justify-content-center gap-2">
                        <div style={{ fontSize: "10px" }}>বাংলা</div>
                        <div style={{ fontSize: "10px" }}>জীবন o জীবিকা</div>
                        <div style={{ fontSize: "10px" }}>বিজ্ঞান</div>
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
              <div className="d-flex justify-content-between p-3">
                <div>
                  <h6>শিক্ষকের তালিকা</h6>
                </div>
                <div>
                  <h6>View All</h6>
                </div>
              </div>
              <div className="col-6 col-md-2 col-sm-4">
                <div className="card shadow-sm p-1 p-lg-3 my-1 teacher-list-card">
                  <div className="d-flex gap-1 gap-lg-3 ">
                    <div>
                      <img src={TeacherImg} className="img-fluid" />
                    </div>
                    <div>
                      <h5 style={{ fontSize: "10px" }}>Showkat Ali</h5>
                      <h6 style={{ fontSize: "8px" }}>Head Master</h6>
                    </div>
                  </div>
                  <div className="flex-md-column flex-lg-row d-flex  justify-content-start gap-2">
                    <div style={{ fontSize: "10px" }}>বাংলা</div>
                    <div style={{ fontSize: "10px" }}>জীবন o জীবিকা</div>
                    <div style={{ fontSize: "10px" }}>বিজ্ঞান</div>
                  </div>
                  {/* <div className="teacher-list-overlay">
                <div className="our-team-icons d-flex flex-column gap-4 mt-2 justify-content-end">
                  <FiStar />
                </div>
              </div> */}
                </div>
              </div>
              <div className="col-6 col-md-2 col-sm-4">
                <div className="card shadow-sm p-1 p-lg-3 my-1">
                  <div className="d-flex gap-1 gap-lg-3 ">
                    <div>
                      <img src={TeacherImg} className="img-fluid" />
                    </div>
                    <div>
                      <h5 style={{ fontSize: "10px" }}>Showkat Ali</h5>
                      <h6 style={{ fontSize: "8px" }}>Head Master</h6>
                    </div>
                  </div>
                  <div className="flex-md-column flex-lg-row d-flex  justify-content-start gap-2">
                    <div style={{ fontSize: "10px" }}>বাংলা</div>
                    <div style={{ fontSize: "10px" }}>জীবন o জীবিকা</div>
                    <div style={{ fontSize: "10px" }}>বিজ্ঞান</div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-2 col-sm-4">
                <div className="card shadow-sm p-1 p-lg-3 my-1">
                  <div className="d-flex gap-1 gap-lg-3 ">
                    <div>
                      <img src={TeacherImg} className="img-fluid" />
                    </div>
                    <div>
                      <h5 style={{ fontSize: "10px" }}>Showkat Ali</h5>
                      <h6 style={{ fontSize: "8px" }}>Head Master</h6>
                    </div>
                  </div>
                  <div className="flex-md-column flex-lg-row d-flex  justify-content-start gap-2">
                    <div style={{ fontSize: "10px" }}>বাংলা</div>
                    <div style={{ fontSize: "10px" }}>জীবন o জীবিকা</div>
                    <div style={{ fontSize: "10px" }}>বিজ্ঞান</div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-2 col-sm-4">
                <div className="card shadow-sm p-1 p-lg-3 my-1">
                  <div className="d-flex gap-1 gap-lg-3 ">
                    <div>
                      <img src={TeacherImg} className="img-fluid" />
                    </div>
                    <div>
                      <h5 style={{ fontSize: "10px" }}>Showkat Ali</h5>
                      <h6 style={{ fontSize: "8px" }}>Head Master</h6>
                    </div>
                  </div>
                  <div className="flex-md-column flex-lg-row d-flex  justify-content-start gap-2">
                    <div style={{ fontSize: "10px" }}>বাংলা</div>
                    <div style={{ fontSize: "10px" }}>জীবন o জীবিকা</div>
                    <div style={{ fontSize: "10px" }}>বিজ্ঞান</div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-2 col-sm-4">
                <div className="card shadow-sm p-1 p-lg-3 my-1">
                  <div className="d-flex gap-1 gap-lg-3 ">
                    <div>
                      <img src={TeacherImg} className="img-fluid" />
                    </div>
                    <div>
                      <h5 style={{ fontSize: "10px" }}>Showkat Ali</h5>
                      <h6 style={{ fontSize: "8px" }}>Head Master</h6>
                    </div>
                  </div>
                  <div className="flex-md-column flex-lg-row d-flex  justify-content-start gap-2">
                    <div style={{ fontSize: "10px" }}>বাংলা</div>
                    <div style={{ fontSize: "10px" }}>জীবন o জীবিকা</div>
                    <div style={{ fontSize: "10px" }}>বিজ্ঞান</div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-2 col-sm-4">
                <div className="card shadow-sm p-1 p-lg-3 my-1">
                  <div className="d-flex gap-1 gap-lg-3 ">
                    <div>
                      <img src={TeacherImg} className="img-fluid" />
                    </div>
                    <div>
                      <h5 style={{ fontSize: "10px" }}>Showkat Ali</h5>
                      <h6 style={{ fontSize: "8px" }}>Head Master</h6>
                    </div>
                  </div>
                  <div className="flex-md-column flex-lg-row d-flex  justify-content-start gap-2">
                    <div style={{ fontSize: "10px" }}>বাংলা</div>
                    <div style={{ fontSize: "10px" }}>জীবন o জীবিকা</div>
                    <div style={{ fontSize: "10px" }}>বিজ্ঞান</div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-2 col-sm-4">
                <div className="card shadow-sm p-1 p-lg-3 my-1">
                  <div className="d-flex gap-1 gap-lg-3 ">
                    <div>
                      <img src={TeacherImg} className="img-fluid" />
                    </div>
                    <div>
                      <h5 style={{ fontSize: "10px" }}>Showkat Ali</h5>
                      <h6 style={{ fontSize: "8px" }}>Head Master</h6>
                    </div>
                  </div>
                  <div className="flex-md-column flex-lg-row d-flex  justify-content-start gap-2">
                    <div style={{ fontSize: "10px" }}>বাংলা</div>
                    <div style={{ fontSize: "10px" }}>জীবন o জীবিকা</div>
                    <div style={{ fontSize: "10px" }}>বিজ্ঞান</div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-2 col-sm-4">
                <div className="card shadow-sm p-1 p-lg-3 my-1">
                  <div className="d-flex gap-1 gap-lg-3 ">
                    <div>
                      <img src={TeacherImg} className="img-fluid" />
                    </div>
                    <div>
                      <h5 style={{ fontSize: "10px" }}>Showkat Ali</h5>
                      <h6 style={{ fontSize: "8px" }}>Head Master</h6>
                    </div>
                  </div>
                  <div className="flex-md-column flex-lg-row d-flex  justify-content-start gap-2">
                    <div style={{ fontSize: "10px" }}>বাংলা</div>
                    <div style={{ fontSize: "10px" }}>জীবন o জীবিকা</div>
                    <div style={{ fontSize: "10px" }}>বিজ্ঞান</div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-2 col-sm-4">
                <div className="card shadow-sm p-1 p-lg-3 my-1">
                  <div className="d-flex gap-1 gap-lg-3 ">
                    <div>
                      <img src={TeacherImg} className="img-fluid" />
                    </div>
                    <div>
                      <h5 style={{ fontSize: "10px" }}>Showkat Ali</h5>
                      <h6 style={{ fontSize: "8px" }}>Head Master</h6>
                    </div>
                  </div>
                  <div className="flex-md-column flex-lg-row d-flex  justify-content-start gap-2">
                    <div style={{ fontSize: "10px" }}>বাংলা</div>
                    <div style={{ fontSize: "10px" }}>জীবন o জীবিকা</div>
                    <div style={{ fontSize: "10px" }}>বিজ্ঞান</div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-2 col-sm-4">
                <div className="card shadow-sm p-1 p-lg-3 my-1">
                  <div className="d-flex gap-1 gap-lg-3 ">
                    <div>
                      <img src={TeacherImg} className="img-fluid" />
                    </div>
                    <div>
                      <h5 style={{ fontSize: "10px" }}>Showkat Ali</h5>
                      <h6 style={{ fontSize: "8px" }}>Head Master</h6>
                    </div>
                  </div>
                  <div className="flex-md-column flex-lg-row d-flex  justify-content-start gap-2">
                    <div style={{ fontSize: "10px" }}>বাংলা</div>
                    <div style={{ fontSize: "10px" }}>জীবন o জীবিকা</div>
                    <div style={{ fontSize: "10px" }}>বিজ্ঞান</div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-2 col-sm-4">
                <div className="card shadow-sm p-1 p-lg-3 my-1">
                  <div className="d-flex gap-1 gap-lg-3 ">
                    <div>
                      <img src={TeacherImg} className="img-fluid" />
                    </div>
                    <div>
                      <h5 style={{ fontSize: "10px" }}>Showkat Ali</h5>
                      <h6 style={{ fontSize: "8px" }}>Head Master</h6>
                    </div>
                  </div>
                  <div className="flex-md-column flex-lg-row d-flex  justify-content-start gap-2">
                    <div style={{ fontSize: "10px" }}>বাংলা</div>
                    <div style={{ fontSize: "10px" }}>জীবন o জীবিকা</div>
                    <div style={{ fontSize: "10px" }}>বিজ্ঞান</div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-2 col-sm-4">
                <div className="card shadow-sm p-1 p-lg-3 my-1">
                  <div className="d-flex gap-1 gap-lg-3 ">
                    <div>
                      <img src={TeacherImg} className="img-fluid" />
                    </div>
                    <div>
                      <h5 style={{ fontSize: "10px" }}>Showkat Ali</h5>
                      <h6 style={{ fontSize: "8px" }}>Head Master</h6>
                    </div>
                  </div>
                  <div className="flex-md-column flex-lg-row d-flex  justify-content-start gap-2">
                    <div style={{ fontSize: "10px" }}>বাংলা</div>
                    <div style={{ fontSize: "10px" }}>জীবন o জীবিকা</div>
                    <div style={{ fontSize: "10px" }}>বিজ্ঞান</div>
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
