import { useEffect, useState } from "react";

import { add_pi_uid, show_comment_box_bi, weightId } from "../utils/Utils";
import { BiCircle, BiRefresh, BiSquareRounded } from "react-icons/bi";
import { FiTriangle } from "react-icons/fi";
import { Bi_save, get_bi_evaluation_by_bi, get_pi_bi_evaluation_list } from "../Request";
import Swal from "sweetalert2";
import { IoIosArrowForward } from "react-icons/io";

export default function StudentMullayonBehave({
  all_bis,
  assessment_uid,
  teacher,
  student,
  teacher_uid,
  submitObj,
  setsubmitObj,
  submitData,
  setsubmitData,
  is_draft,
  submitObj_wid_null,
}: any) {
  // console.log(`is_draft`, is_draft);
  const own_SUbjects__: any = localStorage.getItem("own_subjet") || "";
  const own_SUbjects = own_SUbjects__ ? JSON.parse(own_SUbjects__) : "";
  const pi_attribute_weight =
    own_SUbjects?.data?.data?.pi_attribute_weight || [];
  const class_room_id = localStorage.getItem("class_room_id");

  const [msg, setmsg] = useState<any>("");
  const [err, seterr] = useState<any>("");
  const [comment_status, setcomment_status] = useState<any>(false);
  const [submited, setsubmited] = useState<any>(false);
  const [showModal, setShowModal] = useState<any>(false);

  // const handleSave = async (e: any, submit_status: any) => {
  //   try {
  //     const data: any = submitData.map((d: any) => {
  //       d.submit_status = submit_status;
  //       return d;
  //     });

  //     if (submit_status == 2) {
  //       if (submitData.length == 10) {
  //         await Bi_save(data);
  //         setmsg("আপনার তথ্য সংরক্ষণ করা হয়েছে");
  //         setsubmited(true);
  //       } else {
  //         if (submitData.length > 0) {
  //           setcomment_status(true);
  //         }

  //         checkedIn_comment(submitObj);
  //       }

  //       seterr("");
  //     } else {
  //       await Bi_save(data);
  //       setsubmited(true);
  //       setmsg("আপনার খসড়া সংরক্ষণ করা হয়েছে");
  //       seterr("");
  //     }
  //   } catch (error) {
  //     seterr(" কিছু ভুল হয়েছে");
  //   }
  // };

  const handleSave = async (e: any, submit_status: any) => {
    try {
      const data: any = submitData.map((d: any) => {
        d.submit_status = submit_status;
        return d;
      });

      if (submit_status == 2) {
        if (submitData.length == 10) {
          Swal.fire({
            title: "আপনি কি তথ্য সংরক্ষণ করতে চান?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "না",
            confirmButtonText: "হ্যাঁ",
          }).then(async (result) => {
            if (result.isConfirmed) {
              await Bi_save(data);

              let own_subjet: any = await get_pi_bi_evaluation_list(2);

              localStorage.setItem(
                "pi_bi_evaluation_list",
                JSON.stringify(own_subjet.data.data)
              );

              setsubmited(true);
              Swal.fire({
                title: "আপনার তথ্য সংরক্ষণ করা হয়েছে!",
                icon: "success",
              });
            }
          });
        } else {
          if (submitData.length > 0) {
            setcomment_status(true);
          } else {
            Swal.fire({
              icon: "error",
              title: "আপনি কোন কিছু নির্বাচন করেন নি!",
              confirmButtonText: "হ্যাঁ",
            });
          }

          checkedIn_comment(submitObj);
        }

        seterr("");
      } else {
        if (submitData.length == 0) {
          Swal.fire({
            icon: "error",
            title: "আপনি কোন কিছু নির্বাচন করেন নি!",
            confirmButtonText: "হ্যাঁ",
          });
        } else {
          await Bi_save(data);
          setsubmited(true);
          setmsg("আপনার খসড়া সংরক্ষণ করা হয়েছে");
          seterr("");
        }
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "কিছু ভুল হয়েছে!",
        confirmButtonText: "হ্যাঁ",
      });
      // seterr(" কিছু ভুল হয়েছে");
    }
  };

  // console.log("showModal", showModal);

  const save_PI_evalution = async (
    pi_uid: any,
    weight_uid: any,
    student_id: any,
    bi_uid: any,
    remark: any
  ) => {
    try {
      const params: any = {
        evaluate_type: assessment_uid,
        bi_uid,
        weight_uid,
        class_room_uid: class_room_id,
        student_uid: student_id,
        teacher_uid: teacher_uid,
        submit_status: 2,
        is_approved: 1,
        remark,
        pi_uid,
      };

      if (remark) {
        const obj: any = { ...submitObj, [bi_uid + "_" + student_id]: params };
        setsubmitObj(obj);

        submit_object_common_func(remark, obj, pi_uid, student_id, weight_uid);
      } else {
        if (submitObj[bi_uid + "_" + student_id]) {
          if (submitObj[bi_uid + "_" + student_id].weight_uid == weight_uid) {
            delete submitObj[bi_uid + "_" + student_id];

            setsubmitObj(submitObj);

            submit_object_common_func(
              remark,
              submitObj,
              pi_uid,
              student_id,
              weight_uid
            );
          } else {
            const obj: any = {
              ...submitObj,
              [bi_uid + "_" + student_id]: params,
            };
            setsubmitObj(obj);

            submit_object_common_func(
              remark,
              obj,
              pi_uid,
              student_id,
              weight_uid
            );
          }
        } else {
          const obj: any = {
            ...submitObj,
            [bi_uid + "_" + student_id]: params,
          };
          setsubmitObj(obj);
          submit_object_common_func(
            remark,
            obj,
            pi_uid,
            student_id,
            weight_uid
          );
        }
      }
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

    const sumbitArray: any = [];

    for (const x in obj) {
      let id: any = obj[x].pi_uid + "_" + obj[x].student_uid;
      let el: any = document.getElementById(id);
      if (el) {
        el.style.background = "#69CB1C";
      }

      // console.log(`el`, el);

      sumbitArray.push(obj[x]);
    }

    setsubmitData(sumbitArray);
  };

  const form_arry_comment = (obj: any) => {
    const sumbitArray: any = [];
    for (const x in obj) {
      if (obj[x].weight_uid || obj[x].remark) {
        sumbitArray.push(obj[x]);
      }
    }

    setsubmitData(sumbitArray);
  };

  const checkedIn_comment = (obj: any) => {
    for (const x in obj) {
      const clss_id = "__" + obj[x].student_uid;
      const all_elem: any = document.getElementsByClassName(clss_id);

      for (let index = 0; index < all_elem.length; index++) {
        const element: any = all_elem[index];
        element.style.display = "block";
      }
    }

    const sumbitArray: any = [];

    for (const x in obj) {
      if (obj[x].weight_uid || obj[x].remark) {
        const comment_id =
          "comment_id_" + obj[x].pi_uid + "_" + obj[x].student_uid;
        // const textarea_id = obj[x].bi_uid + "_" + obj[x].student_uid;
        const textarea_id = x;
        const el: any = document.getElementsByClassName(textarea_id)[0];
        const el_comment: any = document.getElementById(comment_id);

        el.style.display = "none";
        el_comment.style.visibility = "hidden";
        sumbitArray.push(obj[x]);
      }
    }

    setsubmitData(sumbitArray);
  };

  const submit_object_common_func = (
    remark: any,
    obj: any,
    bi_uid: any,
    student_id: any,
    weight_uid: any
  ) => {
    if (remark) {
      form_arry_comment(obj);
    } else {
      if (remark == null && weight_uid == null) {
        delete obj[bi_uid + "_" + student_id];
      }
      checkedIn(obj);
    }
  };

  // console.log(`submitData`, submitData);
  // console.log("all_bis", all_bis);


  return (
    <div className="content">
      <div className="row">
        <div className="border-0">
          <div className="">
            <div className="d-flex justify-content-between flex-md-row flex-column align-items-center ">
              <h5>শিক্ষার্থীর নাম: {student?.student_name_bn} </h5>
              <h5>শিক্ষার্থীর রোল: {student?.roll} </h5>
              {/* <p>রোল নম্বর #৩২১০০</p> */}
            </div>

            {/* {comment_status && (
              <button
                className="border-0  rounded shadow-sm bg-white"
                onClick={(e: any) => refresh()}
                title="প্রথম থেকে আবার শুরু করুন"
              >
                <BiRefresh className="fs-3 text-secondary" />
              </button>
            )} */}
          </div>

          {!submited && (
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
                    <div
                      className="col-sm-6 col-md-3 py-2 all_pi_arrtiburte_tr pointer"
                      key={k}
                      id={"comment_id_" + w_d.uid + "_" + student?.uid}
                    >
                      {!comment_status && (
                        <div
                          className="card p-2 h-100 shadow-sm border-0 rounded-0"
                          onClick={(e: any) => {
                            if (is_draft == 1) {
                              save_PI_evalution(
                                w_d.uid,
                                w_d.weight_uid,
                                student.uid,
                                w_d.bi_uid,
                                null
                              );
                            }
                          }}
                        >
                          {show_comment_box_bi(
                            w_d,
                            submitObj_wid_null,
                            student.uid
                          ) == "" ? (
                            <div
                              className="d-flex gap-2"
                              style={{ cursor: "pointer" }}
                            >
                              <div
                                className="all_pi_arrtiburte"
                                style={{
                                  border: "1px solid #eee",
                                  padding: "5px 6px",
                                  borderRadius: "3px",
                                  maxHeight: "40px",
                                  cursor: "pointer",
                                }}
                                id={w_d.uid + "_" + student?.uid}
                              >
                                {weightId(
                                  pi_attribute_weight,
                                  w_d?.weight_uid
                                ) == "Square" && (
                                    <BiSquareRounded className="fs-5 mt-1" />
                                  )}
                                {weightId(
                                  pi_attribute_weight,
                                  w_d?.weight_uid
                                ) == "Circle" && (
                                    <BiCircle className="fs-5 mt-1" />
                                  )}
                                {weightId(
                                  pi_attribute_weight,
                                  w_d?.weight_uid
                                ) == "Triangle" && (
                                    <FiTriangle className="fs-5 mt-1" />
                                  )}

                                {/* <TiTick className={`${styles.tick_mark}`} /> */}
                              </div>
                              <div>
                                <h6 style={{ fontSize: "14px" }}>
                                  {w_d.title_bn}
                                </h6>
                              </div>
                            </div>
                          ) : (
                            <>
                              {is_draft == "2" && (
                                <>
                                  <div
                                    className="d-flex gap-2"
                                    style={{ cursor: "pointer" }}
                                  >
                                    <div
                                      className="all_pi_arrtiburte"
                                      style={{
                                        border: "1px solid #eee",
                                        padding: "5px 6px",
                                        borderRadius: "3px",
                                        maxHeight: "40px",
                                        cursor: "pointer",
                                      }}
                                      id={w_d.uid + "_" + student?.uid}
                                    >
                                      {weightId(
                                        pi_attribute_weight,
                                        w_d?.weight_uid
                                      ) == "Square" && (
                                          <BiSquareRounded className="fs-5 mt-1" />
                                        )}
                                      {weightId(
                                        pi_attribute_weight,
                                        w_d?.weight_uid
                                      ) == "Circle" && (
                                          <BiCircle className="fs-5 mt-1" />
                                        )}
                                      {weightId(
                                        pi_attribute_weight,
                                        w_d?.weight_uid
                                      ) == "Triangle" && (
                                          <FiTriangle className="fs-5 mt-1" />
                                        )}

                                      {/* <TiTick className={`${styles.tick_mark}`} /> */}
                                    </div>
                                    <div>
                                      <h6 style={{ fontSize: "14px" }}>
                                        {w_d.title_bn}
                                      </h6>

                                      <p>
                                        {show_comment_box_bi(
                                          w_d,
                                          submitObj_wid_null,
                                          student.uid
                                        )}
                                      </p>
                                    </div>
                                  </div>
                                </>
                              )


                              }
                            </>
                          )}
                        </div>
                      )}

                      {k === 0 && (
                        <div>
                          {is_draft == "1" && (
                            <textarea
                              onChange={(e: any) =>
                                save_PI_evalution(
                                  w_d.uid,
                                  null,
                                  student.uid,
                                  w_d.bi_uid,
                                  e.target.value == "" ? null : e.target.value
                                )
                              }
                              placeholder={
                                "আপনি কেন চিহ্নিত করেননি তার কারণ লিখুন..."
                              }
                              title="required"
                              style={{
                                display: "none",
                                border: "1px solid red",
                              }}
                              className={
                                "all_textarea form-control __" +
                                student?.uid +
                                " " +
                                w_d.bi_uid +
                                "_" +
                                student?.uid
                              }
                              id=""
                              cols={60}
                              rows={4}
                            ></textarea>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </>
              ))}
            </div>
          )}

          <div className="d-flex justify-content-between align-items-center pe-5 mb-2">
            {is_draft == "1" ? (
              <>
                {!submited && (
                  // <button
                  //   type="button"
                  //   className="btn btn-warning m-1 "
                  //   style={{
                  //     color: "#000",
                  //     paddingLeft: "90px",
                  //     paddingRight: "90px",
                  //   }}
                  //   onClick={(e) => handleSave(e, 1)}
                  // >
                  //   খসড়া
                  // </button>

                  <button type="button" className="btn btn-sm btn-outline-secondary"
                    onClick={(e) => handleSave(e, 1)} >
                    <div className=" d-flex justify-content-center align-items-center gap-2 p-1">
                      <span className="text-sm">খসড়া সংরক্ষণ করুন</span>
                      <span style={{ marginBottom: "0.1rem" }}> <IoIosArrowForward /> </span>
                    </div>
                  </button>
                )}

                {msg && <h6 className="text-success">{msg}</h6>}

                {err && <h6 className="text-danger">{err}</h6>}
                {!submited && (
                  // <button
                  //   type="button"
                  //   className="btn btn-primay px-5 "
                  //   style={{
                  //     backgroundColor: "#428F92",
                  //     color: "#fff",
                  //   }}
                  //   onClick={(e) => handleSave(e, 2)}
                  // >
                  //   সংরক্ষণ করুন
                  // </button>
                  <button type="button"
                    className="btn btn-sm "
                    onClick={(e) => handleSave(e, 2)}
                    style={{
                      backgroundColor: "#428F92",
                      color: "#fff",
                    }}
                  >
                    <div className=" d-flex justify-content-center align-items-center gap-2 px-5 py-1">
                      <span className="text-sm">জমা দিন</span>
                      <span style={{ marginBottom: "0.1rem" }}> <IoIosArrowForward /> </span>
                    </div>
                  </button>
                )}
              </>
            ) : (
              <div className="col-md-12">
                <div className="row p-1">
                  <p className="text-success text-center">
                    আপনার তথ্য সংরক্ষণ করা হয়েছিল
                  </p>
                </div>
              </div>
            )}
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
