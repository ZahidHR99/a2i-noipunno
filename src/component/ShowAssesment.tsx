import React, { useState } from "react";
import { PiBookOpenTextBold } from "react-icons/pi";
import { BsFillFileEarmarkArrowDownFill } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import styles from "./Home.style.module.css";
import { IoIosArrowUp } from "react-icons/io";
import { SlBookOpen } from "react-icons/sl";
import { Link } from "react-router-dom";

export default function ShowAssesment({
  seshowCompitance,
  setassessment_uid,
  setMullayon_name,
  allassessmet,
  own_data,
  setallassessmet,
}: any) {
  const [parodorshita_acoron_tab, setparodorshita_acoron_tab] = useState(0);
  const [ShowSecounderyTab, setShowSecounderyTab] = useState<any>({});

  return (
    <div className="container">
      <div className="row">
        <div className="d-flex align-items-center assestment-tabs">
          <div className="card shadow-lg border-0 w-100 rounded">
            <ul className="nav d-flex mt-2 justify-content-around py-1 ">
              {own_data?.assessments.map((d: any, key: any) => (
                <>
                  <li className={`nav-item`}>
                    <a
                      className={`nav-link link-secondary ${
                        styles.nav_tab_bottom_border
                      } ${key === 0 ? "active" : ""} `}
                      id="expertness-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#expertness"
                      href="#"
                      onClick={(e) => {
                        setparodorshita_acoron_tab(key);
                        setallassessmet(d?.assessment_details);
                      }}
                    >
                      <SlBookOpen className="me-1" /> {d.assessment_name_bn}{" "}
                      
                    </a>
                  </li>
                </>
              ))}
            </ul>

            <div className="tab-content" id="tabContent">
              {parodorshita_acoron_tab === 0 && (
                <div
                  className={"tab-pane fade show active"}
                  id="provati"
                  role="tabpanel"
                  aria-labelledby="provati-tab"
                >
                  <div className="row">
                    <ul className="nav d-flex mt-2 justify-content-around py-1">
                      {allassessmet?.map((ass_d: any, ky: any) => (
                        <li className={`nav-item`} key={ky}>
                          <a
                            className={`fw-bold nav-link link-secondary ${
                              styles.nav_tab_bottom_border
                            } ${ShowSecounderyTab?.id === ass_d.uid ? " active" : ""} `}
                            id="expertness-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#expertness"
                            href="#"
                            onClick={(e: any) => {
                              seshowCompitance(true);
                              setparodorshita_acoron_tab(0);
                              setassessment_uid(ass_d.uid);
                              setShowSecounderyTab({...ShowSecounderyTab , ["id"] : ass_d.uid})
                              setMullayon_name(
                                ass_d.assessment_details_name_bn
                              );
                            }}
                          >
                            <SlBookOpen className="me-1" />{" "}
                            {ass_d.assessment_details_name_bn}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <div className="tab-content" id="tabContent">
              {parodorshita_acoron_tab === 1 && (
                <div
                  className={"tab-pane fade show active"}
                  id="expertness"
                  role="tabpanel"
                  aria-labelledby="expertness-tab"
                >
                  <div className="row">
                    <ul className="nav d-flex mt-2 justify-content-around py-1">
                      {allassessmet?.map((ass_d: any, ky: any) => (
                        <li className={`nav-item`} key={ky}>
                          <Link
                            className={`fw-bold nav-link link-secondary ${
                              styles.nav_tab_bottom_border
                            } ${ShowSecounderyTab?.id === ass_d.uid ? " active" : ""} `}
                            id="expertness-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#expertness"
                            to={"/student-mullayon-behave/" + ass_d.uid}
                            onClick={(e: any) => {
                              setparodorshita_acoron_tab(1);
                              seshowCompitance(true);
                              setassessment_uid(ass_d.uid);
                              setShowSecounderyTab({...ShowSecounderyTab , ["id"] : ass_d.uid})
                              setMullayon_name(
                                ass_d.assessment_details_name_bn
                              );
                            }}
                          >
                            <SlBookOpen className="me-1" />{" "}
                            {ass_d.assessment_details_name_bn}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
