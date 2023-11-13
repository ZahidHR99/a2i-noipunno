
import studentImage from "../../public/assets/noipunno/images/avatar/Layer_1.png";
import styles from "./Home.style.module.css";
import { BiRadioCircle } from "react-icons/bi";
import { useState, useEffect } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Breadcumb from "../layout/Breadcumb";
import { Button, Modal, Spinner } from 'react-bootstrap';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const StudentList = () => {

  const [student, setStudent] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

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


  const handleShowModal = (item: any) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // console.log("selectedItem", selectedItem);


  return (
    <>
      <Breadcumb title={"শিক্ষার্থীর তালিকা"} />
      {(student?.length == 0) ? <div className={styles.loading_container}><Spinner animation="border" /> </div> : <div className="container" my-5>
        <section>
          <div className={`${styles.grid_view} p-0 m-0`}>
            {student?.map((student, index) => (
              <div key={index} id={styles.student_card} className="p-2 g-2  border">
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

            <Modal className="" show={showModal} onHide={handleCloseModal} size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered>

              <Modal.Header>
                <Modal.Title className="container">
                  শিক্ষার্থীর নামঃ {selectedItem?.student_name_bn || "no-entry"}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="container">
                  <div className="text-end w-75 mx-auto">
                    <img src={studentImage} width="50rem" className="img-fluid border border-info p-1" />
                  </div>

                  <table className="table w-75 text-sm mx-auto">
                    <tbody>
                      <tr>
                        <td className="p-1">
                          <strong> শ্রেণীঃ </strong>
                        </td>
                        <td className="p-1">{selectedItem?.class || "no-entry"}</td>
                      </tr>
                      <tr>
                        <td className="p-1">
                          <strong>রোলঃ </strong>
                        </td>
                        <td className="p-1">{selectedItem?.roll || "no-entry"}</td>
                      </tr>
                      <tr>
                        <td className="p-1">
                          <strong>মোবাইলঃ</strong>
                        </td>
                        <td className="p-1">{selectedItem?.student_mobile_no || "no-entry"}</td>
                      </tr>
                      <tr>
                        <td className="p-1">
                          <strong>ইমেইলঃ</strong>
                        </td>
                        <td className="p-1">{selectedItem?.email || "no-entry"}</td>
                      </tr>
                      <tr>
                        <td className="p-1">
                          <strong>জন্ম তারিখঃ</strong>
                        </td>
                        <td className="p-1">{"১২/১০/১৯৭৭"}</td>
                      </tr>
                      <tr>
                        <td className="p-1">
                          <strong>পিতার নামঃ</strong>
                        </td>
                        <td className="p-1">{selectedItem?.father_name_bn || "no-entry"}</td>
                      </tr>
                      <tr>
                        <td className="p-1">
                          <strong>মাতার নামঃ</strong>
                        </td>
                        <td className="p-1">{selectedItem?.mother_name_bn || "no-entry"}</td>
                      </tr>
                      <tr>
                        <td className="p-1">
                          <strong>লিঙ্গঃ</strong>
                        </td>
                        <td className="p-1">{"মহিলা"}</td>
                      </tr>
                      <tr>
                        <td className="p-1">
                          <strong> রেজিস্টেশন তারিখঃ</strong>
                        </td>
                        <td className="p-1">{selectedItem?.registration_year || "no-entry"}</td>
                      </tr>
                      <tr>
                        <td className="p-1">
                          <strong>ধর্মঃ</strong>
                        </td>
                        <td className="p-1">{selectedItem?.religion || "no-entry"}</td>
                      </tr>
                      <tr>
                        <td className="p-1">
                          <strong>জন্মস্থানঃ</strong>
                        </td>
                        <td className="p-1">{"বিবাহিতা"}</td>
                      </tr>
                      <tr>
                        <td className="p-1">
                          <strong>বর্তমান ঠিকানাঃ</strong>
                        </td>
                        <td className="p-1">{selectedItem?.present_address || "no-entry"}</td>
                      </tr>
                      <tr>
                        <td className="p-1">
                          <strong>স্থায়ী ঠিকানাঃ</strong>
                        </td>
                        <td className="p-1">{selectedItem?.present_address || "no-entry"}</td>
                      </tr>
                      <tr>
                        <td className="p-1">
                          <strong>অভিবাবকের-ফোনঃ</strong>
                        </td>
                        <td className="p-1">{selectedItem?.guardian_mobile_no || "no-entry"}</td>
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
          </div>
        </section>
      </div>
      }

    </>
  );
};

export default StudentList;