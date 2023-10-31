import React from "react";
import TeacherImg from "../assets/images/teacher.png";
import { FiStar, FiTriangle } from "react-icons/fi";
import { useState, useEffect } from "react";

import styles from "./Home.style.module.css";
import {
  BiCircle,
  BiFilterAlt,
  BiSidebar,
  BiSquareRounded,
} from "react-icons/bi";
import { BsCloudSun, BsMoon } from "react-icons/bs";
import { SlBookOpen } from "react-icons/sl";
import {
  HiOutlineSun,
  HiOutlineDotsVertical,
  HiOutlineDotsHorizontal,
} from "react-icons/hi";
import ProfileCard from "./ProfileCard";
import { Pi_save, teacher_dashboard, teacher_own_subject } from "../Request";
import { useParams } from "react-router-dom";
import {
  MdArrowBackIosNew,
  MdArrowForwardIos,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { GoPerson } from "react-icons/go";

const own_SUbjects__: any = localStorage.getItem("own_subjet") || "";
const own_SUbjects = own_SUbjects__ ? JSON.parse(own_SUbjects__) : "";

const all_pi_arrtibute_name: any = localStorage.getItem("pi_attr_name") || "";
const all_pi_arrtibute_: any = localStorage.getItem("pi_attr") || "";
const all_pi_arrtibute = all_pi_arrtibute_ ? JSON.parse(all_pi_arrtibute_) : "";
export default function StudentMullayon(props:any) {
  const { assessment_uid, competence_uid }: any = useParams();
  const [Student, setStudent] = useState<any>([]);
  const [teacher, setteacher] = useState<any>({});
  const [submitObj, setsubmitObj] = useState<any>({});
  const [individual_student, setindividual_student] = useState<any>({});
  const [pi_name, setpi_name] = useState<any>("");
  const [showToggle, setshowToggle] = useState<any>({});
  const [compitance, setcompitance] = useState<any>([]);
  const [al_pi_attr, setal_pi_attr] = useState<any>([]);
  const fetchData = async () => {


    const all_pi_arrtibute_name: any = localStorage.getItem("pi_attr_name") || "";
const all_pi_arrtibute_: any = localStorage.getItem("pi_attr") || "";
const all_pi_arrtibute = all_pi_arrtibute_ ? JSON.parse(all_pi_arrtibute_) : "";

    setpi_name(all_pi_arrtibute_name)
    setal_pi_attr(all_pi_arrtibute)
    let own_subjet: any = "";
    if (own_SUbjects) {
      own_subjet = own_SUbjects;
    } else {
      own_subjet = await teacher_own_subject();
      localStorage.setItem("own_subjet", JSON.stringify(own_subjet));
    }

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

    console.log(`uniqueObjectsArray`, uniqueObjectsArray);
    setcompitance(uniqueObjectsArray[0].competence);
    setteacher(own_subjet.data.data.user);
    localStorage.setItem("own_subjet", JSON.stringify(own_subjet));
  };

  useEffect(() => {
    fetchData();
  }, []);



  const handleSave =async (e:any) => {
    
  }


  const save_PI_evalution = async (
    pi_uid: any,
    weight_uid: any,
    student_id: any
  ) => {
    try {


      const params: any = {
        evaluate_type : assessment_uid,
        competence_uid,
        pi_uid,
        weight_uid,
        student_uid : student_id,
        teacher_uid : teacher.caid,
        submit_status :2,
        is_approved:1,
      };


      console.log(`weight_uid`,  weight_uid);

      let id = weight_uid + student_id

      let el :any = document.getElementById(id)
      el.checked = true

      console.log(`el`, el);



      setsubmitObj({...submitObj , [student_id]: params })
      // let { data } = await Pi_save(
      //   assessment_uid,
      //   competence_uid,
      //   pi_uid,
      //   weight_uid,
      //   student_id,
      //   teacher.caid,
      //   2,
      //   1
      // );

      // if (data.status) {
      //   alert("Success");
      // }
    } catch (error) {
      alert("SOmething went wrong");
    }
  };

  console.log(`Student`, submitObj);

  return (
    <div className="content">
      <div className="dashboard-section">
        <section className="np-breadcumb-section pt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <ProfileCard />
              </div>
              <div className="col-md-9">
              <div className="row d-flex gap-2">
                  <div></div>
                  <div className="d-flex">
                    <h5>
                      <BiSidebar /> {pi_name}
                    </h5>
                  </div>
                </div>

                <div className="row">
                  <table className="table table-sm">
                    <thead>
                      <tr>
                        <th scope="col" style={{ width: "5%" }}>
                          শিক্ষার্থীর <BiFilterAlt className="fs-5 ms-4" />
                        </th>
                        <th scope="col" style={{ width: "30%" }}></th>
                        <th scope="col" style={{ width: "30%" }}>
                          <BiFilterAlt className="fs-5" />
                        </th>
                        <th scope="col" style={{ width: "30%" }}></th>
                      </tr>
                    </thead>
                    <tbody>
                      {Student.map((teacher: any, k: any) => (
                        <tr key={k}>
                          <>
                            <td
                              style={{
                                width: "5%",
                              }}
                            >
                              <GoPerson className="fs-6" />{" "}
                              {teacher.student_name_bn}
                              <br />
                              {teacher.uid}
                            </td>

                            {al_pi_attr.map((pi_attr: any, kedy: any) => (
                              <td
                                style={{
                                  width: "30%",
                                }}
                                key={kedy}
                              >
                                <input type="radio" name={pi_attr.pi_uid} id={pi_attr.weight_uid + teacher.uid} />
                                
                                <div className="d-flex gap-2">
                                  <div
                                  
                                    className=""
                                    style={{
                                      border: "1px solid #eee",
                                      padding: "5px 6px",
                                      borderRadius: "3px",
                                      maxHeight: "40px",
                                    }}
                                    
                                    onClick={() =>
                                      save_PI_evalution(
                                        pi_attr.uid,
                                        pi_attr.weight_uid,
                                        teacher.uid
                                      )
                                    }
                                  >
                                    {" "}
                                    {pi_attr.weight.name == "Square" && (
                                      <BiSquareRounded className="fs-5 mt-1" />
                                    )}
                                    {pi_attr.weight.name == "Circle" && (
                                      <BiCircle className="fs-5 mt-1" />
                                    )}
                                    {pi_attr.weight.name == "Triangle" && (
                                      <FiTriangle className="fs-5 mt-1" />
                                    )}
                                  </div>
                                  
                                  <div htmlFor={pi_attr.weight_uid + teacher.uid} >{pi_attr.title_bn}</div>
                                </div>
                              </td>
                            ))}
                          </>
                        </tr>
                      ))}
                    </tbody>
                    <button type="button" className="btn btn-sm btn-primary m-2" onClick={(e)=>handleSave(e)}>Save</button>
                  </table>

                  
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
