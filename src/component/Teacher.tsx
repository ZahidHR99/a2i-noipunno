/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import {
  all_teachers,
  teacher_dashboard,
  teacher_own_subject,
  clssWiseSubject,
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

export default function Teacher() {
  const [shift, setShift] = useState([]);
  const [numberOfStudents, setnumberOfStudents] = useState([]);
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

    let compitnc_obj = {};
    own_subjet.data.data.subjects.map((d: any) => {
      data.data.subjects.map((d_2: any) => {
        if (d_2.uid === d.subject_id) {
          data.data.teachers.map((al_tech: any) => {
            if (d.teacher_id == al_tech.uid) {
              setpi_selection(d.pi_selection);
              const obj: any = {
                subject: d_2,
                own_subjet: d,
                teacher: al_tech,
              };
              d.oviggota.map((competnc) => {
                compitnc_obj = { ...compitnc_obj, [competnc.uid]: competnc };
              });
              all_subject.push(obj);
            }
          });
        }
      });
    });

    setall_bis(own_subjet.data.data.bis);
    setallCompitance(compitnc_obj);
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
    setTotal_student(uniqueObjectsArray);
  };
  console.log("====================================");
  console.log("Total_student", total_student);
  console.log("====================================");

  const teacher_list = async () => {
    const teachersData = JSON.parse(localStorage.getItem("teacher_dashboard"));
    setTotal_teacher(teachersData?.data?.teachers);
  };

  const all_class = async () => {
    const local_storege_data = JSON.parse(
      localStorage.getItem("teacher_dashboard")
    );
    setTotal_class(local_storege_data?.data?.subjects);
  };
  // Retrieve the students array from the data in local storage
  const subjectWiseStudents = async () => {
    const studentsArray = JSON.parse(
      localStorage.getItem("teacher_own_subject")
    );
    setnumberOfStudents(
      studentsArray?.data?.data?.subjects?.class_room?.students?.length
    );
  };
  // Get the number of students (length of the students array)
  // const numberOfStudents = studentsArray.length;

  console.log("Number of students:", teacher_own_subject);

  useEffect(() => {
    fetchData();
    student_lsit();
    teacher_list();
    all_class();
  }, []);

  // console.log("all_student", all_student);
  // console.log("all_teacher", all_teacher);

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
        <div className="dashboard-section">
          <section className="np-breadcumb-section pt-2 pb-5">
            <div className="container">
              <div className="row">
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
                            <BiSidebar /> বিষয়ভিত্তিক তথ্য ও মূল্যায়ন{" "}
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
                            className="col-6 col-sm-4 col-md-6 col-lg-4 col-xl-3"
                            style={{ cursor: "pointer" }}
                            key={key}
                            onClick={(e) => {
                              skill_behaibor_count(d);
                              seshowSubjectname(d.subject.name);
                              setStudent(d?.own_subjet?.class_room?.students);

                              setteacher_uid(d?.own_subjet.teacher_id);
                              setStudent(d?.own_subjet?.class_room?.students);
                              setShowProfile(false);
                              localStorage.setItem(
                                "class_room_id",
                                d.own_subjet.class_room_id
                              );
                            }}
                          >
                            <div className="card shadow-lg border-0 p-1 p-lg-3 teacher-list-card h-100">
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
                              <div
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  gap: 5,
                                  display: "inline-flex",
                                }}
                              >
                                <div
                                  style={{
                                    color: "#7DAEB0",
                                    fontSize: 13,
                                    fontFamily: "Public Sans",
                                    fontWeight: "400",
                                    lineHeight: 2,
                                    wordWrap: "break-word",
                                  }}
                                >
                                  Total Student{" "}
                                </div>
                                <div
                                  style={{
                                    paddingLeft: 5,
                                    paddingRight: 5,
                                    paddingTop: 2,
                                    paddingBottom: 2,
                                    background: "#F0FAE9",
                                    borderRadius: 4,
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    gap: 10,
                                    display: "flex",
                                  }}
                                >
                                  <div
                                    style={{
                                      color: "#69CB1C",
                                      fontSize: 13,
                                      fontFamily: "Public Sans",
                                      fontWeight: "500",
                                      lineHeight: 1,
                                      wordWrap: "break-word",
                                    }}
                                  >
                                    {total_student.length}
                                  </div>
                                </div>
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
                            {parodorshita_acoron_tab === 0 && (
                              <ParodorshitaComponent
                                pi_selection={pi_selection}
                                teacher_uid={teacher_uid}
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
                                teacher_uid={teacher_uid}
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
