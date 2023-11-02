import React from "react";
import { Link } from "react-router-dom";

export default function DetailsShikhonMullayon({
  showDetailsshikhonKalinMullayon,
  assessment_uid,
  pi_attr,
}: any) {
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
                        {d?.pi_id} {" "}
                      </h6>
                      

                      <Link
                        onClick={(e) => {
                          localStorage.setItem(
                            "pi_attr",
                            JSON.stringify(d?.pi_attribute)
                          );

                          localStorage.setItem("pi_attr_name", d?.name_bn);
                        }}
                        to={
                          "/student-mullayon/" +
                          assessment_uid +
                          "/" +
                          showDetailsshikhonKalinMullayon.uid
                        }
                        // to={
                        //   "/student-mullayon/" +
                        //   assessment_uid +
                        //   "/" +
                        //   showDetailsshikhonKalinMullayon.uid
                        // }
                        className="text-decoration-none"
                      >
                        <h6
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onClick={(e: any) => pi_attr(d, e)}
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
    </div>
  );
}
