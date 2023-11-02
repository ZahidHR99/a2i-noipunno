
import studentImage from "../../public/assets/noipunno/images/avatar/Layer_1.png";
import styles from "./Home.style.module.css";
import { BiRadioCircle } from "react-icons/bi";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useEffect, useState } from "react";
import { all_student } from "../Request";
import Accordion from 'react-bootstrap/Accordion';

import Breadcumb from "../layout/Breadcumb";
import { Button, Modal } from 'react-bootstrap';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const StudentList = () => {


  const [students, setStudents] = useState([])

  useEffect(() => {
    window.scroll(0, 0)
    all_student()
      .then((res) => {
        setStudents(res.data.data)
        console.log(res.data.data);
      })

  }, []);

  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);


  const handleShowModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  console.log("Select Items", selectedItem);


  return (
    <>
      <Breadcumb title={"শিক্ষার্থীর তালিকা"} />
      <div className="container" my-5>
        <section>
          <div className="row p-0 m-0 ">
            {students?.map((student, index) => (
              <div key={index} className="col-sm-6 col-md-3 col-lg-4 p-2 g-2  border">
                <div className="d-flex justify-content-start align-items-center gap-5 ">
                  <div>
                    <img src={studentImage} className="img-fluid" style={{ height: "50px" }} />
                  </div>

                  <div className="d-flex flex-column justify-content-center align-items-start">
                    <div>
                      <h5 className={styles.teacherName}>নামঃ {student?.student_name_bn} </h5>
                      <h5 className={styles.teacherName}>রোলঃ {student?.roll} </h5>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                      <button onClick={() => handleShowModal(student)} className="btn btn-primay btn-sm d-flex justify-content-center align-items-center" style={{ backgroundColor: "#428F92", color: "#fff", }} >
                        বিস্তারিত{" "}
                        <MdOutlineKeyboardArrowRight className="fs-3" />{" "}
                      </button>
                    </div>
                  </div>

                </div>


              </div>
            ))}

            <Modal className="mt-5" show={showModal} onHide={handleCloseModal} size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered>

              <Modal.Header>
                <Modal.Title>
                  শিক্ষার্থীর বিস্তারিত তথ্য
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="">
                <div>
                  <div className="d-flex" style={{ marginLeft: "-1.5rem" }} >
                    <ul className={`${styles.teacher_info_list_group}`}>
                      <li>
                        {" "}
                        <BiRadioCircle />
                        রোলঃ
                      </li>
                    </ul>
                    <ul className={`${styles.teacher_info_list_group}`}>
                      <li> {selectedItem?.roll || "no-entry"}</li>
                    </ul>
                  </div>

                  <div
                    className="d-flex"
                    style={{ marginLeft: "-1.5rem" }}
                  >

                    <ul className={`${styles.teacher_info_list_group}`}>
                      <li>
                        {" "}
                        <BiRadioCircle />
                        মোবাইল :
                      </li>
                    </ul>
                    <ul className={`${styles.teacher_info_list_group}`}>
                      <li> {selectedItem?.student_mobile_no || "no-entry"}</li>
                    </ul>
                  </div>
                  <div
                    className="d-flex"
                    style={{ marginLeft: "-1.5rem" }}
                  >

                    <ul className={`${styles.teacher_info_list_group}`}>
                      <li>
                        {" "}
                        <BiRadioCircle />
                        ইমেইল :
                      </li>
                    </ul>
                    <ul className={`${styles.teacher_info_list_group}`}>
                      <li> {selectedItem?.email || "no-entry"}</li>
                    </ul>
                  </div>
                  <div
                    className="d-flex"
                    style={{ marginLeft: "-1.5rem" }}
                  >
                    <ul className={`${styles.teacher_info_list_group}`}>
                      <li>
                        <BiRadioCircle /> জন্ম তারিখ :
                      </li>
                    </ul>
                    <ul className={`${styles.teacher_info_list_group}`}>
                      <li> {selectedItem?.date_of_birth || "no-entry"}</li>
                    </ul>
                  </div>
                  <div
                    className="d-flex"
                    style={{ marginLeft: "-1.5rem" }}
                  >
                    <ul className={`${styles.teacher_info_list_group}`}>
                      <li>
                        <BiRadioCircle /> লিঙ্গ :
                      </li>
                    </ul>
                    <ul className={`${styles.teacher_info_list_group}`}>
                      <li> {selectedItem?.gender || "no-entry"}</li>
                    </ul>
                  </div>
                  <div
                    className="d-flex"
                    style={{ marginLeft: "-1.5rem" }}
                  >
                    <ul className={`${styles.teacher_info_list_group}`}>
                      <li>
                        <BiRadioCircle /> রেজিস্টেশন তারিখ :
                      </li>
                    </ul>
                    <ul className={`${styles.teacher_info_list_group}`}>
                      <li>{selectedItem?.registration_year || "no-entry"} </li>
                    </ul>
                  </div>
                  <div
                    className="d-flex"
                    style={{ marginLeft: "-1.5rem" }}
                  >
                    <ul className={`${styles.teacher_info_list_group}`}>
                      <li>
                        <BiRadioCircle />
                        ধর্ম :
                      </li>
                    </ul>
                    <ul className={`${styles.teacher_info_list_group}`}>
                      <li>{selectedItem?.religion || "no-entry"} </li>
                    </ul>
                  </div>
                  <div
                    className="d-flex"
                    style={{ marginLeft: "-1.5rem" }}
                  >
                    <ul className={`${styles.teacher_info_list_group}`}>
                      <li>
                        <BiRadioCircle />
                        জন্মস্থান  :
                      </li>
                    </ul>
                    <ul className={`${styles.teacher_info_list_group}`}>
                      <li>{selectedItem?.birth_place || "no-entry"} </li>
                    </ul>
                  </div>
                  <div
                    className="d-flex"
                    style={{ marginLeft: "-1.5rem" }}
                  >
                    <ul className={`${styles.teacher_info_list_group}`}>
                      <li>
                        <BiRadioCircle />
                        বর্তমান ঠিকানা  :
                      </li>
                    </ul>
                    <ul className={`${styles.teacher_info_list_group}`}>
                      <li>{selectedItem?.present_address || "no-entry"} </li>
                    </ul>
                  </div>
                  <div
                    className="d-flex"
                    style={{ marginLeft: "-1.5rem" }}
                  >
                    <ul className={`${styles.teacher_info_list_group}`}>
                      <li>
                        <BiRadioCircle />
                        স্থায়ী ঠিকানা  :
                      </li>
                    </ul>
                    <ul className={`${styles.teacher_info_list_group}`}>
                      <li>{selectedItem?.permanent_addres || "no-entry"} </li>
                    </ul>
                  </div>
                  <div
                    className="d-flex"
                    style={{ marginLeft: "-1.5rem" }}
                  >
                    <ul className={`${styles.teacher_info_list_group}`}>
                      <li>
                        <BiRadioCircle />
                        অভিবাবকের-ফোন :
                      </li>
                    </ul>
                    <ul className={`${styles.teacher_info_list_group}`}>
                      <li> {selectedItem?.guardian_mobile_no || "013654582555"}</li>
                    </ul>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                  বন্ধ করুন
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </section>
      </div>
    </>
  );
};

export default StudentList;