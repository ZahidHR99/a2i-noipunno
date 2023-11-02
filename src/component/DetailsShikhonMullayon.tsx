import React, { useState } from "react";
import { Link } from "react-router-dom";
import StudentMullayonModal from "./StudentMullayonModal";

export default function DetailsShikhonMullayon({
  showDetailsshikhonKalinMullayon,
  assessment_uid,
  pi_attr,
}: any) {
  const [competence_uid, setcompetence_uid] = useState<any>("");
  const [al_pi_attr, setal_pi_attr] = useState<any>([]);
  const [pi_name, setpi_name] = useState<any>("");
  return (
    <div>
      <h3
        className="text-center py-1 text-white"
        style={{ backgroundColor: "#428F92" }}
      >
        অভিজ্ঞতা {showDetailsshikhonKalinMullayon?.class_uid}.
        {showDetailsshikhonKalinMullayon?.competence_id}
      </h3>
      <h5>{showDetailsshikhonKalinMullayon?.details_bn}</h5>
      <div className="row">
        {showDetailsshikhonKalinMullayon?.pis?.map((d: any, ky: any) => (
          <div className="col-sm-6 col-md-12" key={ky}>
            <div className={`d-flex align-items-center py-2 gap-2`}>
              <div className={`border-0 w-100`}>
                <div className="d-flex justify-content-between">
                  <div className="d-flex justify-content-between align-items-center w-100 px-1">
                    <div className="d-flex" style={{ color: "#428F92" }}>
                      <h6>
                        {showDetailsshikhonKalinMullayon?.class_uid}.
                        {showDetailsshikhonKalinMullayon?.competence_id}.
                        {d?.pi_id}{" "}
                      </h6>

                      <Link
                        onClick={(e) => {
                          pi_attr(d, e);
                          setal_pi_attr(d?.pi_attribute)
                          setcompetence_uid(
                            showDetailsshikhonKalinMullayon.uid
                          );

                          setpi_name(d?.name_bn)
                        }}
                        to={"#"}
                        className="text-decoration-none"
                      >
                        <h6
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          {d?.name_bn}
                        </h6>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>


      <div className="modal" id="exampleModal" style={{zIndex:"99999"}}>
  <div className="modal-dialog modal-xl">
    <div className="modal-content">
      <div className="modal-header">
      <h5 className="modal-title" id="exampleModalLabel">{pi_name}</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="">
      <StudentMullayonModal
                competence_uid={competence_uid}
                assessment_uid={assessment_uid}
                al_pi_attr={al_pi_attr}
                setal_pi_attr={setal_pi_attr}
                pi_name={pi_name}
                setpi_name={setpi_name}
              />
      </div>
      <div className="modal-footer">
      {/* <button type="button" className="btn btn-sm btn-secondary" data-bs-dismiss="modal">Close</button> */}
      </div>
    </div>
  </div>
</div>

    </div>
  );
}
