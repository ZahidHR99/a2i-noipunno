import { FiTriangle } from "react-icons/fi";
import { useState, useEffect } from "react";
// import {  MdOutlineArrowForwardIos } from "react-icons/md";

import { BiCircle, BiFilterAlt, BiSquareRounded } from "react-icons/bi";

import { Pi_save, teacher_own_subject } from "../Request";
import { GoPerson } from "react-icons/go";
import { toast } from "../utils";

const own_SUbjects__: any = localStorage.getItem("own_subjet") || "";
const own_SUbjects = own_SUbjects__ ? JSON.parse(own_SUbjects__) : "";
const class_room_id = localStorage.getItem("class_room_id");

export default function StudentMullayonModal({
  assessment_uid,
  competence_uid,
  al_pi_attr,
  pi_name,
  setpi_name,
}: any) {
  const [Student, setStudent] = useState<any>([]);
  const [teacher, setteacher] = useState<any>({});
  const [comment_status, setcomment_status] = useState<any>(false);
  const [submitObj, setsubmitObj] = useState<any>({});
  const [msg, setmsg] = useState<any>("");
  const [err, seterr] = useState<any>("");
  const [submitData, setsubmitData] = useState<any>([]);
  const fetchData = async () => {
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
    setteacher(own_subjet.data.data.user);
    localStorage.setItem("own_subjet", JSON.stringify(own_subjet));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSave = async (e: any, submit_status: any) => {
    try {
      console.log(`submitDateeeea`, submit_status, Student, submitData);
      const data: any = submitData.map((d: any) => {
        d.submit_status = submit_status;
        return d;
      });
      

      if (submit_status == 2) {

        if (Student.length === submitData.length ) {

          console.log(3333);
          
          await Pi_save(data);
          setmsg("আপনার তথ্য সংরক্ষণ করা হয়েছে");
          
        } else {

          console.log(1111111 , submitObj);

          setcomment_status(true)
          checkedIn_comment(submitObj)

        }
        
        
        seterr("");
      } else {
        setmsg("আপনার খসড়া সংরক্ষণ করা হয়েছে");
        seterr("");
      }
    } catch (error) {

      console.log("err" , error);
      
      seterr(" কিছু ভুল হয়েছে");
      setmsg("");
    }
  };

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
        class_room_id,
        student_uid: student_id,
        teacher_uid: teacher.caid,
        submit_status: 2,
        is_approved: 1,
        remark: null,
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








  const save_PI_evalution_comment = async (
    pi_uid: any,
    weight_uid: any = undefined,
    student_id: any,
    remark:any
  ) => {
    try {
      const params: any = {
        evaluate_type: assessment_uid,
        competence_uid,
        pi_uid,
        class_room_id,
        weight_uid:null,
        student_uid: student_id,
        teacher_uid: teacher.caid,
        submit_status: 2,
        is_approved: 1,
        remark,
      };

      const obj: any = { ...submitObj, [student_id]: params };
      setsubmitObj(obj);
      form_arry_comment(obj);
      
    } catch (error) {
      console.log(`error`, error);
    }
  };


  const form_arry_comment = (obj: any) => {
    
    const sumbitArray: any = [];
    for (const x in obj) {

      if (obj[x].weight_uid || obj[x].remark ) {
      sumbitArray.push(obj[x]);
      }
    }

    setsubmitData(sumbitArray);
  };


  const checkedIn_comment = (obj: any) => {
    let all_elem: any = document.getElementsByClassName("all_textarea");

    for (let index = 0; index < all_elem.length; index++) {
      const element: any = all_elem[index];
      element.style.display = "block";
    }

    const sumbitArray: any = [];

    for (const x in obj) {

      if (obj[x].weight_uid || obj[x].remark ) {



        const comment_id = "comment_id_"+x
        const el: any = document.getElementsByClassName(x)[0];
        const el_comment: any = document.getElementById(comment_id);

        console.log("iddd" , x , el);
        el.style.display = "none"; 
        el_comment.style.display = "none"; 
        sumbitArray.push(obj[x]);
        
      }
      
      
    }

    setsubmitData(sumbitArray);
  };

  console.log(`submitObj`, submitObj , submitData);

  return (
    <div className="content">
      <div className="col-md-12">
        <div className="row p-1">
          <table className="table table-lg table-responsive">
            <thead>
              <tr>
                <th scope="col" style={{ width: "30%" }}>
                  শিক্ষার্থীর নাম {/* <BiFilterAlt className="fs-5 ms-4" /> */}
                </th>
                <th scope="col" style={{ width: "20%" }}></th>
                <th scope="col" style={{ width: "20%" }}>
                  {/* <BiFilterAlt className="fs-5" /> */}
                </th>
                <th scope="col" style={{ width: "20%" }}></th>
              </tr>
            </thead>
            <tbody>
              {Student.map((studnt: any, k: any) => (
                <tr key={k}>
                  <>
                    <td
                      style={{
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                      id={"comment_id_"+studnt.uid}
                    >
                      <GoPerson className="fs-6 fw-bold" />{" "}
                      {studnt.student_name_bn}
                      <br />
                      {studnt.uid}
                    </td>

                    {al_pi_attr?.map((pi_attr: any, kedy: any) => (
                      <td style={{}} key={kedy}>
                        <div className= "d-flex gap-2">

                          {
                            !comment_status && <>
                            
                            
                          <div
                            id={pi_attr.weight_uid + "-" + studnt.uid}
                            className="all_pi_arrtiburte"
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
                                studnt.uid
                              )
                            }
                          >
                            {/* <input type="radio" className="d-none" name={pi_attr.pi_uid + "-" + studnt.uid} id={pi_attr.weight_uid + "-"+ studnt.uid} /> */}{" "}
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


                          <div>{pi_attr.title_bn}</div>

                          </>
                          }


                          {
                            kedy === 0 && 

                            <div>
                            <textarea onChange={(e:any) =>
                              save_PI_evalution_comment(
                                pi_attr.uid,
                                undefined,
                                studnt.uid,
                                e.target.value
                              )
                            } placeholder= {"আপনি কেন "+studnt.student_name_bn+" কে চিহ্নিত করেননি তা আমাদের বলুন..." } title="required" style={{display:"none" , border : "1px solid red"}} className={"form-control all_textarea "+ studnt.uid }   id="" cols={60} rows={4}>

                            </textarea>
                          </div>
                          }

                          

                          
                        </div>
                      </td>
                    ))}
                  </>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="d-flex justify-content-between align-items-center pe-5 mb-5">
          <button
            type="button"
            className="btn btn-warning  my-2"
            style={{
              // backgroundColor: "#",
              color: "#000",
              paddingLeft: "90px",
              paddingRight: "90px",
            }}
            onClick={(e) => handleSave(e, 1)}
          >
            খসড়া
          </button>
          {msg && <h6 className="text-success">{msg}</h6>}

          {err && <h6 className="text-danger">{err}</h6>}

          <button
            type="button"
            className="btn btn-primay px-5 "
            style={{
              backgroundColor: "#428F92",
              color: "#fff",
            }}
            onClick={(e) => handleSave(e, 2)}
          >
            <span>
              সংরক্ষণ করুন {"   "}
              {/* {"   "}<MdOutlineArrowForwardIos  /> */}
              <img src="/assets/images/arrow-right.png" alt="" />
            </span>
          </button>

          {/* <button type="submit" className="btn btn-primay px-5" style={{ backgroundColor: "#428F92", color: "#fff", }} > একাউন্ট আপডেট করুন{" "} <MdOutlineKeyboardArrowRight className="fs-3" style={{ marginTop: "-0.3rem", }} />{" "} </button> */}
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n            .np-table th,\n            td {\n                font-size: 11px;\n            }\n        ",
        }}
      />

      {/* studnts List end */}
    </div>
  );
}
