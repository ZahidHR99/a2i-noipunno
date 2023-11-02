import { useState } from "react";

import styles from "./Home.style.module.css";
import { PiBookOpenText } from "react-icons/pi";
import DetailsShikhonMullayonBehave from "./DetailsShikhonMullayonBehave";

export default function StudentMullayonBehave({
  all_bis,
  assessment_uid,
  teacher
}: any) {

  const [Showcollaps, setShowcollaps] = useState<any>({});
  const [pi_attrbute, setpi_attrbute] = useState([]);


  const pi_attr = (data: any, e: any = "") => {
    setpi_attrbute(data.pi_attribute);
  };
  return (
    <div className="content">
      <div className="row p-3">
        <div className="row">
          {all_bis.map((d: any, key: any) => (
            <>
              <div
                key={key}
                onClick={(e: any) => {
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
                    ? "collapse "
                    : "collapse show"
                }
              >
                <div className="card card-body">
                  {d && (
                    <DetailsShikhonMullayonBehave
                      showDetailsshikhonKalinMullayon={d}
                      assessment_uid={assessment_uid}
                      pi_attr={pi_attr}
                      teacher={teacher}
                    />
                  )}
                </div>

                
              </div>
            </>
          ))}
          <button>Save</button>
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
