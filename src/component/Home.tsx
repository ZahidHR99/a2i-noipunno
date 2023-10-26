import React from 'react'

export default function Home() {
  return (
    <div className="content">
  <div className="dashboard-section">
    <section className="np-breadcumb-section pt-5" style={{ height: "80vh" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="row" style={{ rowGap: 10 }}>
              <div className="col-md-6">
                <a
                  href="https://teacher.project-ca.com/teachers"
                  style={{ textDecoration: "unset" }}
                >
                  <div className="card np-card">
                    <div className="card-body" style={{ textAlign: "center" }}>
                      <h2
                        style={{
                          margin: 0,
                          fontSize: 18,
                          color: "rgba(45, 102, 104, 1)"
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
                    <div className="card-body" style={{ textAlign: "center" }}>
                      <h2
                        style={{
                          margin: 0,
                          fontSize: 18,
                          color: "rgba(45, 102, 104, 1)"
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
                    <div className="card-body" style={{ textAlign: "center" }}>
                      <h2
                        style={{
                          margin: 0,
                          fontSize: 18,
                          color: "rgba(45, 102, 104, 1)"
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
                    <div className="card-body" style={{ textAlign: "center" }}>
                      <h2
                        style={{
                          margin: 0,
                          fontSize: 18,
                          color: "rgba(45, 102, 104, 1)"
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
                    <div className="card-body" style={{ textAlign: "center" }}>
                      <h2
                        style={{
                          margin: 0,
                          fontSize: 18,
                          color: "rgba(45, 102, 104, 1)"
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
                    <div className="card-body" style={{ textAlign: "center" }}>
                      <h2
                        style={{
                          margin: 0,
                          fontSize: 18,
                          color: "rgba(45, 102, 104, 1)"
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
                    <div className="card-body" style={{ textAlign: "center" }}>
                      <h2
                        style={{
                          margin: 0,
                          fontSize: 18,
                          color: "rgba(45, 102, 104, 1)"
                        }}
                      >
                        শাখা যোগ করুন
                      </h2>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
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
                    <p className="mt-3 p-2">প্রধান শিক্ষক</p>
                  </div>
                  <div className="head-teacher-top-icons d-flex justify-content-center align-items-center">
                    <img src="https://teacher.project-ca.com/frontend/noipunno/images/icons/star.svg" />
                    <img src="https://teacher.project-ca.com/frontend/noipunno/images/icons/message.svg" />
                    <img src="https://teacher.project-ca.com/frontend/noipunno/images/icons/moon.svg" />
                  </div>
                </div>
                <div className="head-teacher-bottom d-flex flex-column ">
                  <div className="w-100 d-flex flex-column  align-items-center justify-content-center mt-3 ">
                    <h5>Asraful</h5>
                    <small>113030820230001</small>
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
        </div>
      </div>
    </section>
  </div>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n            .np-table th,\n            td {\n                font-size: 11px;\n            }\n        "
    }}
  />
</div>

  )
}







