import React from 'react'


    import { AiOutlineHome } from "react-icons/ai";
    import { BiSidebar } from "react-icons/bi";
    import { MdArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
    import styles from "../component/Home.style.module.css";

import { useNavigate } from 'react-router-dom';



export default function Breadcumbtitle({title} :any) {
    
    const navigate = useNavigate()
  return (
    <div>
        
        <section className="np-breadcumb-section pt-3">
   
        <div className="d-flex align-items-center py-2 gap-2">
                <div >
                <button className="card shadow-lg border-0 p-2"
      onClick={() => {
        navigate(-1)
      }}
    >
      <MdArrowBackIosNew className="fs-1" />
    </button>
                </div>
                <div className="card shadow-lg border-0 p-1 w-100">
                  <div className="d-flex justify-content-between">
                    <div>
                      <div style={{ fontSize: "14px" }}>
                        <BiSidebar
                          className={`fs-3 ${styles.teacher_info_list}`}
                        />{" "}
                        মূল্যায়ন প্রতিবেদন
                      </div>
                      <div style={{ marginLeft: "2rem" }}>
                        <h6 style={{ color: "#C8DFDF", fontSize: "10px" }}>
                          {" "}
                          <AiOutlineHome />
                          Dashboard{" "}
                          <span style={{ color: "#000" }}>
                            {" "}
                            <MdOutlineArrowForwardIos />
                            Data
                          </span>
                        </h6>
                      </div>
                    </div>
                    {/* <div className="d-flex gap-2 align-items-center fs-4">
                      <FiStar /> <HiOutlineDotsVertical />
                    </div> */}
                  </div>
                </div>
              </div>
          
      
    
    
    
    
    </section>
    </div>
  )
}



