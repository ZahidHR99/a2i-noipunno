
import { AiOutlineHome } from "react-icons/ai";
import { BiSidebar } from "react-icons/bi";
import { MdArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import styles from "../component/Home.style.module.css";
import { useNavigate } from 'react-router-dom';



export default function BreadcumbHome({ seshowSubject, setShowProfile, title }: any) {

  const navigate = useNavigate()
  return (
    <section className="container">
      <div className="d-flex align-items-center gap-2">
        <div className="card" style={{ backgroundColor: "white" }}>
          <button
            className='border-0  rounded shadow-sm bg-white' onClick={() => { 
              seshowSubject(true);
              setShowProfile(true)


             }} style={{ padding: "1.2rem" }}>
            <MdArrowBackIosNew className="fs-3 text-secondary" />
          </button>
        </div>

        <div className="card shadow-sm p-2 w-100">

          <div className="d-flex align-items-center gap-2">
            <BiSidebar className={`fs-3 ${styles.teacher_info_list}`} />{" "}


            <div className="d-flex flex-column gap-2">
              <div style={{ fontSize: "14px" }}>
                {title}
              </div>
              <h6 className="d-flex justify-content-lg-center align-items-center gap-1" style={{ color: "#428F92", fontSize: "12px" }}>
                {" "}
                <AiOutlineHome />
                Dashboard{" "}
                <span style={{ color: "#000" }}>
                  {" "}
                  <MdOutlineArrowForwardIos />
                  {title}
                </span>
              </h6>
            </div>
          </div>
          {/* <div className="d-flex gap-2 align-items-center fs-4">
                          <FiStar /> <HiOutlineDotsVertical />
                        </div> */}

        </div>
      </div>





    </section>
  )
}