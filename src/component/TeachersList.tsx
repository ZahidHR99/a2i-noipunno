import TeacherImg from "../assets/images/teacher.png";
import { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import styles from "./Home.style.module.css";
import Breadcumb from "../layout/Breadcumb";
import { Button, Modal, Spinner } from 'react-bootstrap';


export default function TeachersList() {

  const [teachers, setTeachers] = useState<any>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const fetchData = async () => {
    const teachersData = JSON.parse(localStorage.getItem('teacher_dashboard'));
    setTeachers(teachersData.data.teachers)

  };

  useEffect(() => {
    fetchData()
  }, []);


  const handleShowModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // console.log("Select Items", teachers);

  return (
    <>

      <Breadcumb title={"শিক্ষকের তালিকা"} />

      {(teachers?.length == 0) ? <div className={styles.loading_container}><Spinner animation="border" /> </div> : <div className="container mb-5">
        <section className="my-2">
          <div className={`${styles.grid_view} p-0 m-0 `}>
            {teachers?.map((teacher, index) => (
              <div key={index} id={styles.teacher_card_list} className="card p-2 border ">
                <div className="d-flex justify-content-start align-items-center gap-5">
                  <div>
                    <img src={TeacherImg} className="img-fluid mx-2" />
                  </div>

                  <div className="d-flex flex-column justify-content-center align-items-start">
                    <div>
                      <h5 className={styles.teacherName}>নামঃ {teacher?.name_en || "no-entry"} </h5>
                      <h5 className={styles.teacherName}>আইডিঃ {teacher?.uid || "no-entry"}</h5>
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


          <Modal className="" show={showModal} onHide={handleCloseModal} size="lg" aria-labelledby="contained-modal-title-vcenter"
            centered>

            {/* <Modal.Header closeButton>
                <Modal.Title>
                  Details
                </Modal.Title>
              </Modal.Header> */}

            <Modal.Header>
              <Modal.Title className="container">
                শিক্ষকের নামঃ {selectedItem?.name_en || "no-entry"} <br />
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <div className="container">
                <div className="text-end w-75 mx-auto" >
                  <img src={TeacherImg} width="50rem" className="img-fluid border border-info p-1" />
                </div>

                <table className="table w-75 text-sm mx-auto">
                  <tbody>
                    <tr>
                      <td className="p-1">
                        <strong>আইডিঃ</strong>
                      </td>
                      <td className="p-1">{selectedItem?.uid || "no-entry"}</td>
                    </tr>
                    <tr>
                      <td className="p-1">
                        <strong>পদবিঃ</strong>
                      </td>
                      <td className="p-1">{"সহকারী শিক্ষক"}</td>
                    </tr>
                    <tr>
                      <td className="p-1">
                        <strong>মোবাইলঃ</strong>
                      </td>
                      <td className="p-1">{selectedItem?.mobile_no}</td>
                    </tr>
                    <tr>
                      <td className="p-1">
                        <strong>জন্ম তারিখঃ</strong>
                      </td>
                      <td className="p-1">{"১২/১০/১৯৭৭"}</td>
                    </tr>
                    <tr>
                      <td className="p-1">
                        <strong>লিঙ্গঃ</strong>
                      </td>
                      <td className="p-1">{"মহিলা"}</td>
                    </tr>
                    <tr>
                      <td className="p-1">
                        <strong>জাতীয়তাঃ</strong>
                      </td>
                      <td className="p-1">{"বাংলাদেশী"}</td>
                    </tr>
                    <tr>
                      <td className="p-1">
                        <strong>ধর্মঃ</strong>
                      </td>
                      <td className="p-1">{"ইসলাম"}</td>
                    </tr>
                    <tr>
                      <td className="p-1">
                        <strong>বৈবাহিক অবস্থাঃ</strong>
                      </td>
                      <td className="p-1">{"বিবাহিতা"}</td>
                    </tr>
                    <tr>
                      <td className="p-1">
                        <strong>এনআইডি নম্বরঃ</strong>
                      </td>
                      <td className="p-1">{"xxx-xxxxxxxxx"}</td>
                    </tr>
                  </tbody>
                </table>
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
