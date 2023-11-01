import { useState, useEffect } from "react";

import { teacher_own_subject } from "../Request";
import { useParams } from "react-router-dom";

import styles from "./Home.style.module.css";
import { PiBookOpenText } from "react-icons/pi";
import DetailsShikhonMullayonBehave from "./DetailsShikhonMullayonBehave";

const own_SUbjects__: any = localStorage.getItem("own_subjet") || "";
const own_SUbjects = own_SUbjects__ ? JSON.parse(own_SUbjects__) : "";

const all_pi_arrtibute_name: any = localStorage.getItem("pi_attr_name") || "";
const all_pi_arrtibute_: any = localStorage.getItem("pi_attr") || "";
const all_pi_arrtibute = all_pi_arrtibute_ ? JSON.parse(all_pi_arrtibute_) : "";
export default function StudentMullayonBehave(props: any) {
  const { assessment_uid, competence_uid }: any = useParams();
  const [Student, setStudent] = useState<any>([]);
  const [teacher, setteacher] = useState<any>({});
  const [pi_name, setpi_name] = useState<any>("");
  const [Showcollaps, setShowcollaps] = useState<any>({});
  const [submitData, setsubmitData] = useState<any>([]);
  const [al_pi_attr, setal_pi_attr] = useState<any>([]);
  const [pi_attrbute, setpi_attrbute] = useState([]);
  const [all_bis, setall_bis] = useState<any>([]);
  const fetchData = async () => {
    const all_pi_arrtibute_name: any =
      localStorage.getItem("pi_attr_name") || "";
    const all_pi_arrtibute_: any = localStorage.getItem("pi_attr") || "";
    const all_pi_arrtibute = all_pi_arrtibute_
      ? JSON.parse(all_pi_arrtibute_)
      : "";

    setpi_name(all_pi_arrtibute_name);
    setal_pi_attr(all_pi_arrtibute);
    let own_subjet: any = "";
    if (own_SUbjects) {
      own_subjet = own_SUbjects;
    } else {
      own_subjet = await teacher_own_subject();
      localStorage.setItem("own_subjet", JSON.stringify(own_subjet));
    }

    const student: any = [];

    setall_bis(own_subjet.data.data.bis)
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
    setteacher(own_subjet.data.data.user);
    localStorage.setItem("own_subjet", JSON.stringify(own_subjet));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const showAllBis = (student:any)=>{
    console.log(`studentssss`, student , all_bis );
  }







  const save_PI_evalution = async (
    pi_uid: any,
    weight_uid: any,
    student_id: any
  ) => {
    try {
      const params: any = {
        evaluate_type: assessment_uid,
        competence_uid,
        pi_uid,
        weight_uid,
        student_uid: student_id,
        teacher_uid: teacher.caid,
        submit_status : 2,
        is_approved: 1,
      };
      let obj: any = { ...submitObj, [student_id]: params };
      setsubmitObj(obj);

      checkedIn(obj);
    } catch (error) {
      console.log(`error`, error);
    }
  };

  const checkedIn = (obj: any) => {
    let all_elem: any = document.getElementsByClassName("all_pi_arrtiburte");

    for (let index = 0; index < all_elem.length; index++) {
      const element: any = all_elem[index];
      element.style.background = "";
    }

    let sumbitArray: any = [];

    for (const x in obj) {
      let id: any = obj[x].weight_uid + "-" + x;
      let el: any = document.getElementById(id);
      el.style.background = "#69CB1C";
      sumbitArray.push(obj[x]);
    }

    setsubmitData(sumbitArray);
  };
  const pi_attr = (data: any, e: any = "") => {
    setpi_attrbute(data.pi_attribute);
  };
  console.log(`Student all`, Student , all_bis);

  return (
    <div className="content">
      <div className="dashboard-section">
        <section className="np-breadcumb-section pt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="container">
                  <div className="d-flex align-items-center">
                    <div className="card shadow-lg border-0 w-100 rounded">
                      <ul className="nav d-flex mt-2 justify-content-around py-1">
                        {/* <li className={`nav-item`}>
                          <h4 className="p-1"> {pi_name} </h4>
                        </li> */}
                      </ul>
                      <div className="tab-content" id="tabContent">
                        <div
                          className="tab-pane fade show active"
                          id="expertness"
                          role="tabpanel"
                          aria-labelledby="expertness-tab"
                        >

                          <div className="tab-content" id="tabContent">
                        <div
                          className="tab-pane fade show active"
                          id="expertness"
                          role="tabpanel"
                          aria-labelledby="expertness-tab"
                        >
                          <div className="row p-3">
                            


                          <div className="row">
                          {all_bis.map((d: any, key: any) => (
                            <>
                              <div
                                key={key}
                                onClick={(e: any) => {
                                  setShowcollaps({
                                    ...Showcollaps,
                                    [key]: Showcollaps[key]
                                      ? !Showcollaps[key]
                                      : true,
                                  });
                                }}
                                style={{ cursor: "pointer" }}
                                className="col-sm-12 col-md-12"
                              >
                                <div
                                  className={`d-flex align-items-center py-2 gap-2`}
                                >
                                  <div
                                    className={`card shadow-lg border-0 p-1 w-100 ${styles.card_hover}`}
                                  >
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex justify-content-between align-items-center w-100 px-1">
                                        <div
                                          className="py-2"
                                          style={{ color: "#428F92" }}
                                        >
                                          <PiBookOpenText className="me-2" />
                                          {d.name_bn}
                                        </div>
                                        <div
                                          className="px-2 rounded text-white"
                                          style={{ backgroundColor: "#428F92" }}
                                        >
                                          {d?.weights.length}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div
                                className={
                                  Showcollaps[key] && Showcollaps[key] == true
                                    ? "collapse show"
                                    : "collapse"
                                }
                              >
                                <div className="card card-body">
                                  {d && (
                                    <DetailsShikhonMullayonBehave
                                      showDetailsshikhonKalinMullayon={
                                        d
                                      }
                                      assessment_uid={assessment_uid}
                                      pi_attr={pi_attr}
                                    />
                                  )}
                                </div>
                              </div>
                            </>
                          ))}
                        </div>






                          </div>

                        </div>
                      </div>







                  
                        </div>
                      </div>
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
            "\n            .np-table th,\n            td {\n                font-size: 11px;\n            }\n        ",
        }}
      />

      {/* Teachers List end */}
    </div>
  );
}
