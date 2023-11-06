import { useState } from "react";

import { weightId } from "../utils/Utils";
import { BiCircle, BiSquareRounded } from "react-icons/bi";
import { FiTriangle } from "react-icons/fi";
import { Bi_save } from "../Request";

export default function StudentMullayonBehave({
  all_bis,
  assessment_uid,
  teacher,
  student,
}: any) {
  const own_SUbjects__: any = localStorage.getItem("own_subjet") || "";
  const own_SUbjects = own_SUbjects__ ? JSON.parse(own_SUbjects__) : "";
  const pi_attribute_weight =
    own_SUbjects?.data?.data?.pi_attribute_weight || [];
  const class_room_id = localStorage.getItem("class_room_id");

  const [submitObj, setsubmitObj] = useState<any>({});
  const [submitData, setsubmitData] = useState<any>([]);

  const handleSave = async (e: any, submit_status: any) => {
    try {
      const data: any = submitData.map((d: any) => {
        d.submit_status = submit_status;
        return d;
      });

      await Bi_save(data);

      if (submit_status == 1) {
        alert("Saved Draft");
      } else {
        alert("Saved Successfully");
      }
    } catch (error) {
      alert("something went wrong");
    }
  };

  const save_PI_evalution = async (
    pi_uid: any,
    weight_uid: any,
    student_id: any,
    bi_uid: any
  ) => {
    try {
      const params: any = {
        evaluate_type: assessment_uid,
        bi_uid: pi_uid,
        weight_uid,
        class_room_id,
        student_uid: student_id,
        teacher_uid: teacher.caid,
        submit_status: 2,
        is_approved: 1,
        remark: null,
      };

      let obj: any = { ...submitObj, [bi_uid + "_" + student_id]: params };

      // console.log(`obj`, obj);
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
      element.style.color = "";
      // element.style.background = "";
    }

    const sumbitArray: any = [];

    for (const x in obj) {
      let id: any = obj[x].bi_uid + "_" + obj[x].student_uid;
      let el: any = document.getElementById(id);
      el.style.color = "green";

      sumbitArray.push(obj[x]);
    }

    setsubmitData(sumbitArray);
  };


  return (
    <div className="content">
      <div className="row p-3">
        <div className="row">
          <div className="card shadow-lg border-0">
            <div className="d-flex justify-content-between flex-md-row flex-column align-items-center p-3 border-bottom">
              <div className="">
                <h5>শিক্ষার্থীর নাম: {student?.student_name_bn} </h5>
                {/* <p>রোল নম্বর #৩২১০০</p> */}
              </div>
            </div>
            <div className="row pb-5 pt-2">
              {all_bis.map((d: any, key: any) => (
                <>
                  <div className="col-sm-6 col-md-3 py-2">
                    <div className="border-0 p-2 h-100">
                      <div className="d-flex">
                        <div>
                          <h6 style={{ fontSize: "14px" }}>{d.name_bn}</h6>
                        </div>
                      </div>
                    </div>
                  </div>

                  {d?.weights.map((w_d: any, k: any) => (
                    <div className="col-sm-6 col-md-3 py-2" key={k}>
                      <div
                        className="card bg-light h-100 shadow-lg border-0 p-2 all_pi_arrtiburte"
                        style={{ backgroundColor: "#F0FAE9" }}
                        id={w_d.uid + "_" + student?.uid}
                      >
                        <div
                          className="d-flex "
                          style={{ cursor: "pointer" }}
                          onClick={(e: any) =>
                            save_PI_evalution(
                              w_d.uid,
                              w_d.weight_uid,
                              student.uid,
                              w_d.bi_uid
                            )
                          }
                        >
                          <div>
                            {weightId(pi_attribute_weight, w_d?.weight_uid) ==
                              "Square" && (
                              <BiSquareRounded className="fs-5 mt-1" />
                            )}
                            {weightId(pi_attribute_weight, w_d?.weight_uid) ==
                              "Circle" && <BiCircle className="fs-5 mt-1" />}
                            {weightId(pi_attribute_weight, w_d?.weight_uid) ==
                              "Triangle" && (
                              <FiTriangle className="fs-5 mt-1" />
                            )}

                            {/* <TiTick className={`${styles.tick_mark}`} /> */}
                          </div>
                          <div>
                            <h6 style={{ fontSize: "14px" }}>{w_d.title_bn}</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              ))}
            </div>

            <div className="d-flex justify-content-end align-items-center pe-5 mb-2">
              <button
                type="button"
                className="btn btn-warning m-1 "
                style={{
                  color: "#000",
                  paddingLeft: "90px",
                  paddingRight: "90px",
                }}
                onClick={(e) => handleSave(e, 1)}
              >
                খসড়া
              </button>

              <button
                type="button"
                className="btn btn-primay px-5 "
                style={{
                  backgroundColor: "#428F92",
                  color: "#fff",
                }}
                onClick={(e) => handleSave(e, 2)}
              >
                সংরক্ষণ করুন
              </button>
            </div>
          </div>
        </div>
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
