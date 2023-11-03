import React, { useState } from "react";
import { Link } from "react-router-dom";
import StudentMullayonModal from "./StudentMullayonModal";
import { Button, Modal } from "react-bootstrap";

export default function DetailsShikhonMullayon({
  showDetailsshikhonKalinMullayon,
  assessment_uid,
  pi_attr,
}: any) {
  const [competence_uid, setcompetence_uid] = useState<any>("");
  const [al_pi_attr, setal_pi_attr] = useState<any>([]);
  const [pi_name, setpi_name] = useState<any>("");

  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };


  return (
    <div>
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
                          setal_pi_attr(d?.pi_attribute);
                          setcompetence_uid(
                            showDetailsshikhonKalinMullayon.uid
                          );

                          setpi_name(d?.name_bn);
                          setShowModal(true)
                        }}
                        to={"#"}
                        
                        className="text-decoration-none text-black"
                      >
                        <h6
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




      <Modal className="mt-5" show={showModal} onHide={handleCloseModal} size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered>

              <Modal.Header closeButton>
                <Modal.Title>
                {pi_name}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="">

              <StudentMullayonModal
                  competence_uid={competence_uid}
                  assessment_uid={assessment_uid}
                  al_pi_attr={al_pi_attr}
                  setal_pi_attr={setal_pi_attr}
                  pi_name={pi_name}
                  setpi_name={setpi_name}
                />
              </Modal.Body>
            </Modal>



    </div>
  );
}
