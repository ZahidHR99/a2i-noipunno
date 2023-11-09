
import studentImage from "../../public/assets/noipunno/images/avatar/Layer_1.png";
import styles from "./Home.style.module.css";
import { BiRadioCircle } from "react-icons/bi";
import { useState, useEffect } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Breadcumb from "../layout/Breadcumb";
import { Button, Modal, Spinner } from 'react-bootstrap';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const StudentList = () => {


  const [student, setStudent] = useState([])

  const fetchData = async () => {
    window.scroll(0, 0)

    const student: any = [];
    const studentsData = JSON.parse(localStorage.getItem('own_subjet'));
    studentsData.data.data.subjects.map((std_data: any) => {
      return std_data.class_room.students.map((stu_data: any) => {
        stu_data.competence = std_data.competence;
        student.push(stu_data);
      });
    });

    const uniqueObjectsArray = student.filter(
      (obj: any, index: any, self: any) =>
        index === self.findIndex((o: any) => o.uid === obj.uid)
    );

    setStudent(uniqueObjectsArray);

  }
  useEffect(() => {
    fetchData()
  }, []);


  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);


  const handleShowModal = (item: any) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


  return (
    <>
      <Breadcumb title={"শিক্ষার্থীর তালিকা"} />
      {(student?.length == 0) ? <div className={styles.loading_container}><Spinner animation="border" /> </div> : <div className="container" my-5>
        <section>
          <div className={`${styles.grid_view} p-0 m-0`}>
            {student?.map((student, index) => (
              <div key={index} className="p-2 g-2  border">
                <div className="d-flex justify-content-start align-items-center gap-5 ">
                  <div>
                    <img src={studentImage} className="img-fluid" style={{ height: "50px" }} />
                  </div>
                  <div className="d-flex flex-column justify-content-center align-items-start">
                    <div>
                      <h5 className={styles.teacherName}>নামঃ {student?.student_name_bn || "no-entry"} </h5>
                      <h5 className={styles.teacherName}>রোলঃ {student?.roll || "no-entry"} </h5>
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
                <Modal.Title className="container">
                  শিক্ষার্থীর নামঃ {selectedItem?.student_name_bn || "no-entry"}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>

                <div className="container">
                  <ul className="list-group">
                    <li className="list-group-item">
                      <img src={studentImage} className="img-fluid my-1" />
                    </li>
                    <li className="list-group-item">
                      <strong>রোলঃ </strong> {selectedItem?.roll || "no-entry"}
                    </li>
                    <li className="list-group-item">
                      <strong>মোবাইলঃ </strong> {selectedItem?.student_mobile_no || "no-entry"}
                    </li>
                    <li className="list-group-item">
                      <strong>ইমেইল :</strong> {selectedItem?.email || "no-entry"}
                    </li>
                    <li className="list-group-item">
                      <strong>জন্ম তারিখ : </strong> {selectedItem?.date_of_birth || "no-entry"}
                    </li>
                    <li className="list-group-item">
                      <strong>লিঙ্গ : </strong> {selectedItem?.gender || "no-entry"}
                    </li>
                    <li className="list-group-item">
                      <strong> রেজিস্টেশন তারিখ : </strong> {selectedItem?.registration_year || "no-entry"}
                    </li>
                    <li className="list-group-item">
                      <strong>ধর্ম : </strong> {selectedItem?.religion || "no-entry"}
                    </li>
                    <li className="list-group-item">
                      <strong>জন্মস্থান  : </strong> {selectedItem?.birth_place || "no-entry"}
                    </li>
                    <li className="list-group-item">
                      <strong>বর্তমান ঠিকানা  :  </strong> {selectedItem?.present_address || "no-entry"}
                    </li>
                    <li className="list-group-item">
                      <strong>স্থায়ী ঠিকানা : </strong> {selectedItem?.present_address || "no-entry"}
                    </li>
                    <li className="list-group-item">
                      <strong>অভিবাবকের-ফোন : </strong> {selectedItem?.guardian_mobile_no || "no-entry"}
                    </li>
                  </ul>
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
      }

    </>
  );
};

export default StudentList;