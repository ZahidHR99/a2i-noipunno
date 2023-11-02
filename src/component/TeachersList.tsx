import TeacherImg from "../assets/images/teacher.png";
import { useState, useEffect } from "react";
import { MdArrowBackIosNew, MdOutlineArrowForwardIos, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BiSidebar } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { FiStar } from "react-icons/fi";


import styles from "./Home.style.module.css";
import {
  BiRadioCircle,
} from "react-icons/bi";

import { all_teachers } from "../Request";
import Accordion from 'react-bootstrap/Accordion';
import Breadcumb from "../layout/Breadcumb";

import { Button, Modal } from 'react-bootstrap';


export default function TeachersList() {

  const [teachers, setTeachers] = useState<any>([]);

  const fetchData = async () => {

    const own_subjet: any = await all_teachers();
    localStorage.setItem("all_teachers", JSON.stringify(own_subjet))
  };

  useEffect(() => {
    all_teachers().then((response) => {
      setTeachers(response.data.data);
    });

    fetchData()
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

  // console.log("Select Items", selectedItem);

  return (
    <>
      <Breadcumb title={"শিক্ষকের তালিকা"} />
      <div className="container">
        <section className="my-2 ">
          <div className="row p-0 m-0">
            {teachers?.map((teacher, index) => (
              <div key={index} className="col-sm-6 col-md-3 col-lg-4 p-2 g-2  border">
                <div className="d-flex justify-content-start align-items-center gap-5">
                  <div>
                    <img src={TeacherImg} className="img-fluid" style={{ height: "50px" }} />
                  </div>

                  <div className="d-flex flex-column justify-content-center align-items-start">
                    <div>
                      <h5 className={styles.teacherName}>নামঃ {teacher.name_en} </h5>
                      <h6 className={styles.deg}>{teacher.position}</h6>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                      <button onClick={() => handleShowModal(teacher)} className="btn btn-primay btn-sm d-flex justify-content-center align-items-center" style={{ backgroundColor: "#428F92", color: "#fff", }} >
                        বিস্তারিত{" "}
                        <MdOutlineKeyboardArrowRight className="fs-3" />{" "}
                      </button>
                    </div>
                  </div>

                </div>


              </div>
            ))}

            <Modal className="mt-5" show={showModal} onHide={handleCloseModal} size="lg" aria-labelledby="contained-modal-title-vcenter"
              centered>

              {/* <Modal.Header closeButton>
                <Modal.Title>
                  Details
                </Modal.Title>
              </Modal.Header> */}
              <Modal.Header>
                <Modal.Title>
                  শিক্ষকের বিস্তারিত তথ্য
                </Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <div className="flex-md-column flex-lg-row d-flex  justify-content-start gap-1 p-2 mb-2">
                  <div className={styles.cardDesc}>বাংলা</div>
                  <div className={styles.cardDesc}>জীবন ও জীবিকা</div>
                  <div className={styles.cardDesc}>বিজ্ঞান</div>
                </div>
                <div className="">
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
                      <li> {selectedItem?.mobile_no}</li>
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
                      <li> ১২/১০/১৯৭৭</li>
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
                      <li> মহিলা</li>
                    </ul>
                  </div>
                  <div
                    className="d-flex"
                    style={{ marginLeft: "-1.5rem" }}
                  >
                    <ul className={`${styles.teacher_info_list_group}`}>
                      <li>
                        <BiRadioCircle /> জাতীয়তা :
                      </li>
                    </ul>
                    <ul className={`${styles.teacher_info_list_group}`}>
                      <li> বাংলাদেশী</li>
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
                      <li> ইসলাম</li>
                    </ul>
                  </div>
                  <div
                    className="d-flex"
                    style={{ marginLeft: "-1.5rem" }}
                  >
                    <ul className={`${styles.teacher_info_list_group}`}>
                      <li>
                        <BiRadioCircle />
                        বৈবাহিক অবস্থা :
                      </li>
                    </ul>
                    <ul className={`${styles.teacher_info_list_group}`}>
                      <li> বিবাহিতা</li>
                    </ul>
                  </div>
                  <div
                    className="d-flex"
                    style={{ marginLeft: "-1.5rem" }}
                  >
                    <ul className={`${styles.teacher_info_list_group}`}>
                      <li>
                        <BiRadioCircle />
                        এনআইডি নম্বর :
                      </li>
                    </ul>
                    <ul className={`${styles.teacher_info_list_group}`}>
                      <li> xxx-xxxxxxxxx</li>
                    </ul>
                  </div>
                  <div
                    className="d-flex"
                    style={{ marginLeft: "-1.5rem" }}
                  >
                    <ul className={`${styles.teacher_info_list_group}`}>
                      <li>
                        <BiRadioCircle />
                        পদবি :
                      </li>
                    </ul>
                    <ul className={`${styles.teacher_info_list_group}`}>
                      <li> সহকারী শিক্ষক</li>
                    </ul>
                  </div>
                </div>


              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </section>


      </div>
    </>
  )
}
