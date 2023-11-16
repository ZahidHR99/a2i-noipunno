import React, { useEffect, useState } from "react";
import styles from "./Home.style.module.css";
import { SlBookOpen } from "react-icons/sl";
import { Link } from "react-router-dom";
import { pis_list_func } from "../utils/Utils";

export default function ShowAssesment({
  seshowCompitance,
  setassessment_uid,
  setMullayon_name,
  allassessmet,
  own_data,
  setparodorshita_acoron_tab,
  parodorshita_acoron_tab,
  setallassessmet,
  pi_selection,
  allCompitance,
  setShowcollaps
}: any) {
  const [ShowSecounderyTab, setShowSecounderyTab] = useState<any>({});

  const fetchData = async () => {

    try {
      seshowCompitance(true);
      setparodorshita_acoron_tab(0);
      setassessment_uid(allassessmet[0]?.uid);
      setShowSecounderyTab({
        ...ShowSecounderyTab,
        ["id"]: allassessmet[0].uid,
      });
      setMullayon_name(allassessmet[0]?.assessment_details_name_bn);
      pis_list_func(allCompitance, "");
    } catch (error: any) {}
  };

  const tabAcorongoto = async (key: number) => {
    try {
      pis_list_func(allCompitance, "");
      setparodorshita_acoron_tab(key);
      seshowCompitance(true);
      setassessment_uid(own_data?.assessments[key]?.assessment_details[0].uid);
      setShowSecounderyTab({
        ...ShowSecounderyTab,
        ["id"]: own_data?.assessments[key]?.assessment_details[0].uid,
      });
      setMullayon_name(
        own_data?.assessments[key]?.assessment_details[0]
          ?.assessment_details_name_bn
      );
    } catch (error: any) {}
  };

  const pi_selection_list_by_subject = async (key: number) => {
    try {
      const subject = pi_selection.find((data) => data.assessment_type == key);
      const pi_list = subject?.pi_list;
      pis_list_func(allCompitance, pi_list);

    } catch (error: any) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(`parodorshita_acoron_tab`, ShowSecounderyTab, parodorshita_acoron_tab);

  return (
    <div className="container">
      <div className="row">
        <div className="d-flex align-items-center assestment-tabs">
          <div className="card shadow-lg border-0 w-100 rounded">
            <ul className="nav d-flex mt-2 justify-content-around py-1 ">
              {own_data?.assessments.map((d: any, key: any) => (
                <li className={`nav-item`} key={key}>
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
                      tabAcorongoto(key);
                      setallassessmet(d?.assessment_details);
                      setShowcollaps({})
                    }}
                  >
                    <SlBookOpen className="me-1" /> {d.assessment_name_bn}{" "}
                  </a>
                </li>
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
                            } ${
                              ShowSecounderyTab?.id === ass_d.uid
                                ? " active"
                                : ""
                            } `}
                            id="expertness-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#expertness"
                            href="#"
                            onClick={(e: any) => {
                              seshowCompitance(true);
                              setparodorshita_acoron_tab(0);
                              setassessment_uid(ass_d.uid);

                              pi_selection_list_by_subject(ass_d.uid);

                              setShowSecounderyTab({
                                ...ShowSecounderyTab,
                                ["id"]: ass_d.uid,
                              });
                              setMullayon_name(
                                ass_d.assessment_details_name_bn
                              );
                              setShowcollaps({})
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
                            } ${
                              ShowSecounderyTab?.id === ass_d.uid
                                ? " active"
                                : ""
                            } `}
                            id="expertness-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#expertness"
                            to={"/student-mullayon-behave/" + ass_d.uid}
                            onClick={(e: any) => {
                              setparodorshita_acoron_tab(1);
                              seshowCompitance(true);
                              setassessment_uid(ass_d.uid);
                              setShowSecounderyTab({
                                ...ShowSecounderyTab,
                                ["id"]: ass_d.uid,
                              });
                              setMullayon_name(
                                ass_d.assessment_details_name_bn
                              );
                              setShowcollaps({})
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
