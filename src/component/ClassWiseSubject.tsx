import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import styles from "./Home.style.module.css";
import { SlBookOpen } from "react-icons/sl";
import { clssWiseSubject } from "../Request";
import Breadcumbtitle from "../layout/Breadcumb";
import { Spinner } from "react-bootstrap";


const ClassWiseSubject = () => {
  const { id } = useParams();
  const [subjects, setSubjects] = useState<any>([])

  const getClassData = async () => {
    const { data }: any = await clssWiseSubject(id);
    setSubjects(data.data)
    // console.log("Api data", data);

  }

  // console.log("Class wise Subjects are", subjects);

  useEffect(() => {
    window.scrollTo(0, 0)
    getClassData()
  }, [id]);


  return (
    <div className="container row mx-auto">
      <Breadcumbtitle title={(id == "6") && "ষষ্ঠ শ্রেণির বিষয় " || (id == "7") && "সপ্তম শ্রেণির বিষয় "} />

      <div className="my-4">
        <h4> {(id == "6") && "ষষ্ঠ" || (id == "7") && "সপ্তম"} শ্রেণির বিষয় সমুহ </h4>
      </div>
      {(subjects?.length == 0) ? <div className={styles.loading_container}><Spinner animation="border" /> </div> : <>
        {subjects?.map((subject, index) => (
          <div key={index} className="col-6 col-sm-4 col-md-3 mx-auto" >
            <div className="card shadow-lg border-0 p-1 p-lg-3 my-3 teacher-list-card">
              <div className="gap-1 gap-lg-3 justify-content-center">
                <div className="d-flex justify-content-center py-2 pb-4">
                  <div
                    className={`p-3 border border-1 border-light rounded-circle ${styles.icon_bg_color}`}
                  >
                    <div className={styles.icons}>
                      <SlBookOpen className="fs-3" />
                    </div>
                  </div>
                </div>
                <h5 className={styles.subject}>{subject?.name}</h5>
                <h5 className={styles.std_class}>{(subject?.class_uid === "6") && "ষষ্ঠ শ্রেণি" || (subject?.class_uid === "7") && "সপ্তম শ্রেণি"}</h5>

                {/* <h5 className={styles.class_teacher}>
        শ্রেণি শিক্ষক : <span> শওকত আলী</span>
       </h5> */}
              </div>
              {/* <div className="flex-md-column flex-lg-row d-flex  justify-content-center gap-2">
       <h6 className={styles.session}>প্রভাতি সেশন</h6>
       <h6 className={styles.horizontal_bar}>। </h6>
       <h6 className={styles.branch}>পদ্মা শাথা</h6>
      </div> */}
            </div>
          </div>))}

      </>}




    </div>
  );
};

export default ClassWiseSubject;