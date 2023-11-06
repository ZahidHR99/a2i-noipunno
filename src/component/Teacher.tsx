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
import { Spinner } from "react-bootstrap";
import ShowAssesment from "./ShowAssesment";
import ParodorshitaComponent from "./ParodorshitaComponent";
import AcorongotoComponent from "./AcorongotoComponent";
import { MdArrowBackIosNew } from "react-icons/md";
import Breadcumbtitle from "../layout/Breadcumb";
import BreadcumbHome from "../layout/BreadcumbHome";


export default function Teacher() {
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
  const [showSubjectname, seshowSubjectname] = useState("");
  const [showCompitance, seshowCompitance] = useState(false);
  const [parodorshita_acoron_tab, setparodorshita_acoron_tab] = useState(0);

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

    

    const al_teacher: any = await all_teachers();

    setown_data(own_subjet?.data?.data);

    setteacher(own_subjet.data.data.user)

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




    const student: any = [];

    own_subjet.data.data.subjects.map((std_data: any) => {
      return std_data.class_room.students.map((stu_data: any) => {
        stu_data.competence = std_data.competence;
        student.push(stu_data);
      });
    });

    const uniqueObjectsArray = student.filter(
      (obj: any, index: any, self: any) =>
        index === self.findIndex((o: any) => o.uid === obj.uid)
    );

    setStudent(uniqueObjectsArray);
    setall_bis(own_subjet.data.data.bis);


    
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

  console.log(`subject`, subject , showSubjectname);

  return (
    <div className="content mb-5">
      <div className={subject.length == 0 && styles.loading_container}>
        {subject.length == 0 && <Spinner animation="border" />}
      </div>
      {
        !ShowProfile && <BreadcumbHome showSubjectname={showSubjectname} setShowProfile={setShowProfile} seshowSubject={seshowSubject} title={ " পারদর্শিতা এবং আচরণগত মূল্যায়ন"} />
      }
      

      <div className="dashboard-section">
        <section className="np-breadcumb-section pt-5 pb-5">
          <div className="container">
            <div className="row">
              {
                ShowProfile && <div className="col-md-3">
                <ProfileCard />
              </div>
              }
              
              <div className={ShowProfile ? "col-md-9" : "col-md-12" }>
                <div className="row d-flex gap-2">
                  <div></div>
                  <div className="d-flex" style={{cursor:"pointer"}}>
                    <h5
                      onClick={(e) => {
                        seshowSubject(true);
                        setShowProfile(true)
                      }}
                    >
                       {showSubject && <><BiSidebar /> বিষয়সমূহ </> }

                      
                      {/* {showSkillBehaibor && <><MdArrowBackIosNew className="fs-3 text-secondary" /> পারদর্শিতা এবং আচরণগত মূল্যায়ন </>  } */}
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
                            seshowSubjectname(d.subject.name)
                            setShowProfile(false)
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

                  {
                    ShowProfile === false && <>

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
                        setparodorshita_acoron_tab={setparodorshita_acoron_tab}
                      />
                    </>
                  )}

                  {showCompitance && (
                    <>
                    {
                      parodorshita_acoron_tab === 0 &&
                      <ParodorshitaComponent assessment_uid={assessment_uid} pi_attr={pi_attr} showDetailsshikhonKalinMullayon={showDetailsshikhonKalinMullayon} Showcollaps={Showcollaps} setShowcollaps={setShowcollaps} Mullayon_name={Mullayon_name} shikhonKalinMullayon={shikhonKalinMullayon}  setshowDetailsshikhonKalinMullayon={setshowDetailsshikhonKalinMullayon} />
                    }


                    {
                      parodorshita_acoron_tab === 1 &&
                      <AcorongotoComponent teacher={teacher} Student={Student} all_bis={all_bis} assessment_uid={assessment_uid} pi_attr={pi_attr} showDetailsshikhonKalinMullayon={showDetailsshikhonKalinMullayon} Showcollaps={Showcollaps} setShowcollaps={setShowcollaps} Mullayon_name={Mullayon_name} shikhonKalinMullayon={shikhonKalinMullayon}  setshowDetailsshikhonKalinMullayon={setshowDetailsshikhonKalinMullayon} />

                    }

                    </>
                  )}
                  </>
                  }
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
