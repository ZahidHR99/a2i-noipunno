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
import { Spinner } from "react-bootstrap";
import ShowAssesment from "./ShowAssesment";
import ParodorshitaComponent from "./ParodorshitaComponent";
import AcorongotoComponent from "./AcorongotoComponent";
import BreadcumbHome from "../layout/BreadcumbHome";
import { section_name, shift_name, teacher_name } from "../utils/Utils";
import { useLocation } from "react-router-dom";

export default function Teacher() {
  const [shift, setShift] = useState([]);
  const [subject, setsubject] = useState([]);
  const [allCompitance, setallCompitance] = useState<any>({});
  const [element, setelement] = useState<any>("");
  const [Showcollaps, setShowcollaps] = useState<any>({});
  const [shikhonKalinMullayon, setshikhonKalinMullayon] = useState([]);
  const [allassessmet, setallassessmet] = useState([]);
  const [assessment_uid, setassessment_uid] = useState("");
  const [pi_attrbute, setpi_attrbute] = useState([]);
  const [pi_selection, setpi_selection] = useState([]);
  const [own_data, setown_data] = useState<any>([]);
  const [all_bis, setall_bis] = useState<any>([]);
  const [selected_subject, setselected_subject] = useState<any>("");
  const [Mullayon_name, setMullayon_name] = useState<any>("");
  const [showSkillBehaibor, seshowSkillBehaibor] = useState(false);
  const [ShowProfile, setShowProfile] = useState(true);
  const [Student, setStudent] = useState<any>([]);
  const [teacher, setteacher] = useState<any>({});
  const [teacher_uid, setteacher_uid] = useState<any>("");
  const [showDetailsshikhonKalinMullayon, setshowDetailsshikhonKalinMullayon] =
    useState<any>("");
  const [showSubject, seshowSubject] = useState(true);
  const [loader, setloader] = useState(true);
  const [showSubjectname, seshowSubjectname] = useState("");
  const [showCompitance, seshowCompitance] = useState(false);
  const [parodorshita_acoron_tab, setparodorshita_acoron_tab] = useState(0);

  const location = useLocation()
  console.log(location.pathname);

  const [total_student, setTotal_student] = useState<any>([]);
  const [total_teacher, setTotal_teacher] = useState<any>([]);
  const [total_class, setTotal_class] = useState<any>([]);

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

    const all_subject: any = [];

    let compitnc_obj = {}
    own_subjet.data.data.subjects.map((d: any) => {
      data.data.subjects.map((d_2: any) => {
        if (d_2.uid === d.subject_id) {
          data.data.teachers.map((al_tech: any) => {
            if (d.teacher_id == al_tech.uid) {

              const obj: any = {
                subject: d_2,
                own_subjet: d,
                teacher: al_tech,
              };
              d.oviggota.map((competnc) => {
                compitnc_obj = { ...compitnc_obj, [competnc.uid]: competnc }
              })
              all_subject.push(obj);
            }
          });
        }
      });
    });


    setall_bis(own_subjet.data.data.bis);
    setallCompitance(compitnc_obj)
    setsubject(all_subject);
    setloader(false);
  };

  const skill_behaibor_count = async (datas: any) => {
    seshowSkillBehaibor(true);
    seshowSubject(false);
    setselected_subject(datas);
    setshikhonKalinMullayon(datas.own_subjet.oviggota);
    setallassessmet(own_data.assessments[0].assessment_details);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const pi_attr = (data: any, e: any = "") => {
    setpi_attrbute(data.pi_attribute);
    setelement(e);
  };



  const student_lsit = async () => {
    const student: any = [];
    const studentsData = JSON.parse(localStorage.getItem('own_subjet'));

    if (student) {
      studentsData?.data?.data?.subjects.map((std_data: any) => {
        return std_data?.class_room?.students?.map((stu_data: any) => {
          stu_data.competence = std_data.competence;
          student.push(stu_data);
        });
      });

      const uniqueObjectsArray = student.filter(
        (obj: any, index: any, self: any) =>
          index === self.findIndex((o: any) => o.uid === obj.uid)
      );
      setTotal_student(uniqueObjectsArray);
    }


  };

  const teacher_list = async () => {
    const teachersData = JSON.parse(localStorage.getItem('teacher_dashboard'));
    setTotal_teacher(teachersData?.data?.teachers)
  };

  const all_class = async () => {
    const local_storege_data = JSON.parse(localStorage.getItem('teacher_dashboard'));
    setTotal_class(local_storege_data?.data?.subjects);
  };

  useEffect(() => {
    fetchData();
    student_lsit();
    teacher_list();
    all_class();
  }, []);

  // console.log("all_student", all_student);
  // console.log("all_teacher", all_teacher);

  // function togglePopup() {
  //   var popup = document.getElementById("popup");
  //   if (popup.style.display === "none" || popup.style.display === "") {
  //     popup.style.display = "block";
  //     overlay.style.display = "none";
  //   } else {
  //     popup.style.display = "none";
  //     overlay.style.display = "none";
  //   }
  // }


  return (
    <div className="content mb-5">
      {loader && (
        <div className={loader && styles.loading_container}>
          {loader && <Spinner animation="border" />}
        </div>
      )}

      {!ShowProfile && (
        <BreadcumbHome
          showSubjectname={showSubjectname}
          setShowProfile={setShowProfile}
          seshowSubject={seshowSubject}
          title={" পারদর্শিতা এবং আচরণগত মূল্যায়ন"}
          selected_subject={selected_subject}
        />
      )}
      {!loader && (
        <div className="dashboard-section ">
          <section className="np-breadcumb-section pt-2 pb-5">
            <div className="container">
              <div className="row mt-1">
                {/* {ShowProfile && (location.pathname !== "/mollayon-koron")  && (
                  <div className="col-md-3 mt-2">
                    <ProfileCard />
                  </div>
                )} */}

                <div
                  className={
                    // ShowProfile ?
                    // "col-md-9" :
                    "col-md-12"} >
                  <div className={`row d-flex gap-2 ${styles.subject_container}`}>

                    <div className="d-flex" style={{ cursor: "pointer" }}>
                      <h5
                        onClick={(e) => {
                          seshowSubject(true);
                          setShowProfile(true);
                        }}
                      >
                        {showSubject && subject.length > 0 && (
                          <>
                            বিষয়ভিত্তিক তথ্য ও মূল্যায়ন{" "}
                          </>
                        )}
                        {subject.length == 0 && (
                          <>কোন বিষয় খুঁজে পাওয়া যায়নি</>
                        )}

                        {/* {showSkillBehaibor && <><MdArrowBackIosNew className="fs-3 text-secondary" /> পারদর্শিতা এবং আচরণগত মূল্যায়ন </>  } */}
                      </h5>
                    </div>
                  </div>
                  <div className="row">

                    {showSubject && (
                      <>
                        {subject.map((d: any, key: any) => (
                          <div
                            className="col-sm-12 col-md-6 col-lg-3 col-xl-2 g-2"
                            style={{ cursor: "pointer" }}
                            key={key}
                            onClick={(e) => {
                              skill_behaibor_count(d);
                              seshowSubjectname(d.subject.name)
                              setStudent(d?.own_subjet?.class_room?.students)

                              setteacher_uid(d?.own_subjet.teacher_id)
                              setStudent(d?.own_subjet?.class_room?.students)
                              setShowProfile(false)
                              localStorage.setItem(
                                "class_room_id",
                                d.own_subjet.class_room_id
                              );

                              localStorage.setItem(
                                "subject_id",
                                d.own_subjet.subject_id
                              );

                              setpi_selection(d.own_subjet?.pi_selection)
                            }}
                          >
                            <div className="card shadow-sm border-0 p-1 p-lg-3 teacher-list-card h-100 rounded-sm">
                              <div className="gap-1 gap-lg-3 justify-content-center">
                                <div className={`d-flex justify-content-center py-2 pb-4 ${styles.subject_number}`}>
                                  {/* <div
                                    className={`p-3 border border-1 border-light rounded-circle ${styles.icon_bg_color}`}
                                  >
                                    <div className={styles.icons}>
                                      <SlBookOpen className="fs-3" />
                                    </div>
                                  </div> */}
                                  <div className={styles.icon_sub}>
                                    <img src="../../public/assets/teacherDashboard/images/dashboard/bicon.svg" alt="" />
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
                                  <span
                                    style={{
                                      display: "block",
                                    }}
                                  >
                                    {teacher_name(
                                      d.own_subjet.class_room.class_teacher_id
                                    )}
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
                              pi_selection={pi_selection}
                              allCompitance={allCompitance}
                              setShowcollaps={setShowcollaps}
                            />
                          </>
                        )}

                        {showCompitance && (
                          <>
                            {
                              parodorshita_acoron_tab === 0 &&
                              <ParodorshitaComponent pi_selection={pi_selection} teacher_uid={teacher_uid} Student={Student} assessment_uid={assessment_uid} pi_attr={pi_attr} showDetailsshikhonKalinMullayon={showDetailsshikhonKalinMullayon} Showcollaps={Showcollaps} setShowcollaps={setShowcollaps} Mullayon_name={Mullayon_name} shikhonKalinMullayon={shikhonKalinMullayon} setshowDetailsshikhonKalinMullayon={setshowDetailsshikhonKalinMullayon} />
                            }


                            {
                              parodorshita_acoron_tab === 1 &&
                              <AcorongotoComponent teacher_uid={teacher_uid} teacher={teacher} Student={Student} all_bis={all_bis} assessment_uid={assessment_uid} pi_attr={pi_attr} showDetailsshikhonKalinMullayon={showDetailsshikhonKalinMullayon} Showcollaps={Showcollaps} setShowcollaps={setShowcollaps} Mullayon_name={Mullayon_name} shikhonKalinMullayon={shikhonKalinMullayon} setshowDetailsshikhonKalinMullayon={setshowDetailsshikhonKalinMullayon} />

                            }

                          </>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
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