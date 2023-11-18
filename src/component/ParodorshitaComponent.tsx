import React from "react";
import { PiBookOpenText } from "react-icons/pi";
import DetailsShikhonMullayon from "./DetailsShikhonMullayon";
import styles from "./Home.style.module.css";
import { show_compitance } from "../utils/Utils";

export default function ParodorshitaComponent({
  assessment_uid,
  pi_attr,
  showDetailsshikhonKalinMullayon,
  Showcollaps,
  setShowcollaps,
  shikhonKalinMullayon,
  setshowDetailsshikhonKalinMullayon,
  Student,
  teacher_uid,
}: any) {

  // console.log(`shikhonKalinMullayon`, shikhonKalinMullayon);
  return (
    <div className="py-2">
      <div className="row">
        {shikhonKalinMullayon.map((d: any, key: any) => (
          <div key={key}>
            {
              show_compitance(d.uid) &&

              <>
                <div

                  onClick={(e: any) => {
                    setshowDetailsshikhonKalinMullayon(d);

                    setShowcollaps({
                      ...Showcollaps,
                      [key]: Showcollaps[key] ? !Showcollaps[key] : true,
                    });
                  }}
                  style={{ cursor: "pointer" }}
                  className="col-sm-12 col-md-12"
                >
                  <div className={`d-flex align-items-center custom-py-2 gap-2`}>
                    <div
                      className={`card shadow-lg border-0 p-1 w-100 ${styles.card_hover}`}
                    >
                      <div className="d-flex justify-content-between">
                        <div className="d-flex justify-content-between align-items-center w-100 px-1">
                          <div className="py-2" style={{ color: "#428F92" }}>
                            <PiBookOpenText className="me-2" />
                            {d.name_bn}
                          </div>
                          {/* <div
                        className="px-2 rounded text-white"
                        style={{ backgroundColor: "#428F92" }}
                      >
                        {d?.pis.length}
                      </div> */}
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
                    <DetailsShikhonMullayon
                      showDetailsshikhonKalinMullayon={d}
                      assessment_uid={assessment_uid}
                      pi_attr={pi_attr}
                      Student={Student}
                      teacher_uid={teacher_uid}
                    />
                  </div>
                </div>

              </>
            }
          </div>
        ))}
      </div>
    </div>
  );
}
