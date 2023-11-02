import React from 'react'

import { AiOutlineHome } from "react-icons/ai";
import { BiSidebar } from "react-icons/bi";
import { MdArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import styles from "../component/Home.style.module.css";
import { useNavigate } from 'react-router-dom';



export default function Breadcumbtitle({ title }: any) {

  const navigate = useNavigate()
  return (
    <section className="container">
      <div className="d-flex align-items-center my-4 gap-2">
        <div className="card" style={{ backgroundColor: "white" }}>
          <button
            className='border-0  rounded shadow-sm bg-white' onClick={() => { navigate(-1) }} style={{ padding: "1.2rem" }}>
            <MdArrowBackIosNew className="fs-3 text-secondary" />
          </button>
        </div>

        <div className="card shadow-sm p-2 w-100">
          <div className="d-flex justify-content-between">
            <div>
              <div style={{ fontSize: "14px" }}>
                <BiSidebar
                  className={`fs-3 ${styles.teacher_info_list}`}
                />{" "}
                {title}
              </div>
              <div style={{ marginLeft: "2rem" }}>
                <h6 style={{ color: "#C8DFDF", fontSize: "10px" }}>
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
      </div>





    </section>
  )
}