import React from "react";
import { PiBookOpenText } from "react-icons/pi";
import DetailsShikhonMullayon from "./DetailsShikhonMullayon";
import styles from "./Home.style.module.css";
import StudentMullayonBehave from "./StudentMullayonBehave";

export default function AcorongotoComponent({
  all_bis,
  Student,
  assessment_uid,
  Showcollaps,
  setShowcollaps,
  teacher
}: any) {
  console.log(`assessment_uid----`, assessment_uid);
  return (
    <div className="py-2">
      <div className="row">
        {Student.map((d: any, key: any) => (
          <>
            <div
              key={key}
              onClick={(e: any) => {
                // setshowDetailsshikhonKalinMullayon(d);

                setShowcollaps({
                  ...Showcollaps,
                  [key]: Showcollaps[key] ? !Showcollaps[key] : true,
                });
              }}
              style={{ cursor: "pointer" }}
              className="col-sm-12 col-md-12"
            >
              <div className={`d-flex align-items-center py-2 gap-2`}>
                <div
                  className={`card shadow-lg border-0 p-1 w-100 ${styles.card_hover}`}
                >
                  <div className="d-flex justify-content-between">
                    <div className="d-flex justify-content-between align-items-center w-100 px-1">
                      <div className="py-2" style={{ color: "#428F92" }}>
                        <PiBookOpenText className="me-2" />
                        {d.student_name_bn}
                      </div>
                      <div
                        className="px-2 rounded text-white"
                        style={{ backgroundColor: "#428F92" }}
                      >
                        {d?.class == "6" ? "ষষ্ঠ শ্রেণি" : "সপ্তম শ্রেণি"}
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
                <StudentMullayonBehave
                  all_bis={all_bis}
                  assessment_uid={assessment_uid}
                  teacher={teacher}
                />
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
