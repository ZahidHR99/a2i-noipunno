import TeacherImg from "../assets/images/teacher.png";
import { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import styles from "./Home.style.module.css";
import { BiRadioCircle, } from "react-icons/bi";
import { all_teachers } from "../Request";
import Breadcumb from "../layout/Breadcumb";
import { Button, Modal, Spinner } from 'react-bootstrap';


export default function TeachersList() {

  const [teachers, setTeachers] = useState<any>([]);

  const fetchData = async () => {
    const teachersData = JSON.parse(localStorage.getItem('teacher_dashboard'));
    setTeachers(teachersData.data.teachers)

  };

  useEffect(() => {
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

  console.log("Select Items", teachers);

  return (
    <>
      {/* {<div className={styles.loading_container}>
        <Spinner animation="border" />
      </div>} */}
      <Breadcumb title={"শিক্ষকের তালিকা"} />
      {(teachers?.length == 0) ? <div className={styles.loading_container}><Spinner animation="border" /> </div> : <div className="container mb-5">
        <section className="my-2">
          <div className={`${styles.grid_view} p-0 m-0 `}>
            {teachers?.map((teacher, index) => (
              <div key={index} className="card p-2 border ">
                <div className="d-flex justify-content-start align-items-center gap-5">
                  <div>
                    <img src={TeacherImg} className="img-fluid" />
                  </div>

                  <div className="d-flex flex-column justify-content-center align-items-start">
                    <div>
                      <h5 className={styles.teacherName}>নামঃ {teacher?.name_en} </h5>
                      <h5 className={styles.teacherName}>আইডিঃ {teacher?.uid}</h5>
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
          </div>


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
              <div className="flex-md-column flex-lg-row d-flex justify-content-start gap-1 p-2 mb-2">
                <div className={styles.cardDesc}>বাংলা</div>
                <div className={styles.cardDesc}>জীবন ও জীবিকা</div>
                <div className={styles.cardDesc}>বিজ্ঞান</div>
              </div>

              <div className="">
                <div className="d-flex" style={{ marginLeft: "-1.5rem" }} >
                  <ul className={`${styles.teacher_info_list_group}`}>
                    <li> {" "} <BiRadioCircle /> মোবাইল : </li>
                  </ul>
                  <ul className={`${styles.teacher_info_list_group}`}>
                    <li> {selectedItem?.mobile_no}</li>
                  </ul>
                </div>
                <div className="d-flex" style={{ marginLeft: "-1.5rem" }} >
                  <ul className={`${styles.teacher_info_list_group}`}>
                    <li> <BiRadioCircle /> জন্ম তারিখ : </li>
                  </ul>
                  <ul className={`${styles.teacher_info_list_group}`}>
                    <li> ১২/১০/১৯৭৭</li>
                  </ul>
                </div>
                <div className="d-flex" style={{ marginLeft: "-1.5rem" }} >
                  <ul className={`${styles.teacher_info_list_group}`}>
                    <li> <BiRadioCircle /> লিঙ্গ : </li>
                  </ul>
                  <ul className={`${styles.teacher_info_list_group}`}>
                    <li> মহিলা</li>
                  </ul>
                </div>
                <div className="d-flex" style={{ marginLeft: "-1.5rem" }} >
                  <ul className={`${styles.teacher_info_list_group}`}>
                    <li> <BiRadioCircle /> জাতীয়তা : </li>
                  </ul>
                  <ul className={`${styles.teacher_info_list_group}`}>
                    <li> বাংলাদেশী</li>
                  </ul>
                </div>
                <div className="d-flex" style={{ marginLeft: "-1.5rem" }} >
                  <ul className={`${styles.teacher_info_list_group}`}>
                    <li> <BiRadioCircle /> ধর্ম : </li>
                  </ul>
                  <ul className={`${styles.teacher_info_list_group}`}>
                    <li> ইসলাম</li>
                  </ul>
                </div>
                <div className="d-flex" style={{ marginLeft: "-1.5rem" }} >
                  <ul className={`${styles.teacher_info_list_group}`}>
                    <li> <BiRadioCircle /> বৈবাহিক অবস্থা : </li>
                  </ul>
                  <ul className={`${styles.teacher_info_list_group}`}>
                    <li> বিবাহিতা</li>
                  </ul>
                </div>
                <div className="d-flex" style={{ marginLeft: "-1.5rem" }} >
                  <ul className={`${styles.teacher_info_list_group}`}>
                    <li> <BiRadioCircle /> এনআইডি নম্বর : </li>
                  </ul>
                  <ul className={`${styles.teacher_info_list_group}`}>
                    <li> xxx-xxxxxxxxx</li>
                  </ul>
                </div>
                <div className="d-flex" style={{ marginLeft: "-1.5rem" }} >
                  <ul className={`${styles.teacher_info_list_group}`}>
                    <li> <BiRadioCircle /> পদবি : </li> </ul>
                  <ul className={`${styles.teacher_info_list_group}`}>
                    <li> সহকারী শিক্ষক</li>
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
        </section>
      </div>
      }


    </>
  )
}
