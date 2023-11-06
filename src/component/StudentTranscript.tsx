import React from 'react'
import { PiBookOpenTextBold } from "react-icons/pi";
import { BsFillFileEarmarkArrowDownFill } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import styles from "./Home.style.module.css";
import { IoIosArrowUp } from "react-icons/io";
import { SlBookOpen } from "react-icons/sl";

import Breadcumb from "../layout/Breadcumb"

export default function StudentTranscript() {

  
  return (
    <div className=''>
                   {/* report end */}
            {/* expertness assessment start */}
           
        
          <div className="container">
            <div className="row">
              
             <Breadcumb  title={"মূল্যায়ন প্রতিবেদন"} />
              <div className="d-flex align-items-center">
                <div className="card shadow-lg border-0 w-100 rounded">
                  {/* <ul className="nav d-flex mt-2 justify-content-around py-1">
                    <li className={`nav-item`}>
                      <a
                        className={`nav-link link-secondary ${styles.nav_tab_bottom_border} active`}
                        id="expertness-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#expertness"
                        href="#"
                      >
                        <SlBookOpen className="me-1" /> পারদর্শিতার মূল্যায়ন
                        প্রতিবেদন(PI)
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={`nav-link link-secondary ${styles.nav_tab_bottom_border}`}
                        id="behaviour-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#behaviour"
                        href="#"
                      >
                        <SlBookOpen className="me-1" /> আচরণগত মূল্যায়ন
                        প্রতিবেদন(BI)
                      </a>
                    </li>
                  </ul> */}
                  {/* <div
                    className="tab-content"
                    id="tabContent"
                    style={{ backgroundColor: "#E4FEFF" }}
                  >
                    <div
                      className="tab-pane fade show active"
                      id="expertness"
                      role="tabpanel"
                      aria-labelledby="expertness-tab"
                    >
                      <div className="row p-5">
                        <div className="col-6 col-sm-4 col-md-3">
                          <div className="mb-3" style={{ fontSize: "12px" }}>
                            <label className="form-label">
                              শ্রেণী নির্বাচন করুন
                            </label>
                            <select
                              className="form-select p-2"
                              aria-label="Default select example"
                              style={{ fontSize: "12px" }}
                            >
                              <option selected>শ্রেণী নির্বাচন করুন</option>
                              <option value="1">ষষ্ঠ শ্রেণী</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3">
                          <div className="mb-3" style={{ fontSize: "12px" }}>
                            <label className="form-label">
                              সেশন নির্বাচন করুন
                            </label>
                            <select
                              className="form-select p-2"
                              aria-label="Default select example"
                              style={{ fontSize: "12px" }}
                            >
                              <option selected> সেশন নির্বাচন করুন</option>
                              <option value="1">প্রভাতি সেশন</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3">
                          <div className="mb-3" style={{ fontSize: "12px" }}>
                            <label className="form-label">
                              শাখা নির্বাচন করুন
                            </label>
                            <select
                              className="form-select p-2"
                              aria-label="Default select example"
                              style={{ fontSize: "12px" }}
                            >
                              <option selected> শাখা নির্বাচন করুন</option>
                              <option value="1">পদ্মা শাখা</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3">
                          <div className="mb-3" style={{ fontSize: "12px" }}>
                            <label className="form-label">
                              বিষয় নির্বাচন করুন
                            </label>
                            <select
                              className="form-select p-2"
                              aria-label="Default select example"
                              style={{ fontSize: "12px" }}
                            >
                              <option selected>বিষয় নির্বাচন করুন</option>
                              <option value="1">সবগুলি</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3">
                          <div className="mb-3" style={{ fontSize: "12px" }}>
                            <label className="form-label">
                              মূল্যায়ন শিরোনাম নির্বাচন করুন
                            </label>
                            <select
                              className="form-select p-2"
                              aria-label="Default select example"
                              style={{ fontSize: "12px" }}
                            >
                              <option selected>
                                {" "}
                                মূল্যায়ন শিরোনাম নির্বাচন করুন
                              </option>
                              <option value="1">শিখন কালীন মূল্যায়ন</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3">
                          <div className="mb-3" style={{ fontSize: "12px" }}>
                            <label className="form-label">
                              যোগ্যতা নির্বাচন করুন
                            </label>
                            <select
                              className="form-select p-2"
                              aria-label="Default select example"
                              style={{ fontSize: "12px" }}
                            >
                              <option selected>যোগ্যতা নির্বাচন করুন</option>
                              <option value="1">সকল যোগ্যতা</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3">
                          <div className="mb-3" style={{ fontSize: "12px" }}>
                            <label className="form-label">
                              পারদর্শিকতার সূচক নির্বাচন করুন
                            </label>
                            <select
                              className="form-select p-2"
                              aria-label="Default select example"
                              style={{ fontSize: "12px" }}
                            >
                              <option selected>
                                পারদর্শিকতার সূচক নির্বাচন করুন
                              </option>
                              <option value="1">সকল সূচক</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3">
                          <div className="mb-3">
                            <label className="form-label mt-3"></label>
                            <div className="input-group">
                              <input
                                className="form-control py-1 border-right-0 border-0"
                                type="search"
                                defaultValue="নিম্নে মূল্যায়ন প্রতিবেদন দেখুন"
                                id="example-search-input"
                                style={{
                                  fontSize: "12px",
                                  backgroundColor: "#428F92",
                                }}
                              />
                              <span
                                className="input-group-append rounded-end"
                                style={{
                                  fontSize: "12px",
                                  backgroundColor: "#428F92",
                                }}
                              >
                                <button
                                  className="btn btn-outline-secondary py-1 border-0"
                                  type="button"
                                  style={{
                                    backgroundColor: "#428F92",
                                  }}
                                >
                                  <i className="fa fa-search" />
                                </button>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="behaviour"
                      role="tabpanel"
                      aria-labelledby="behaviour-tab"
                    >
                      <div className="row p-5">
                        <div className="col-6 col-sm-4 col-md-3">
                          <div className="mb-3" style={{ fontSize: "12px" }}>
                            <label className="form-label">
                              শ্রেণী নির্বাচন করুন
                            </label>
                            <select
                              className="form-select p-2"
                              aria-label="Default select example"
                              style={{ fontSize: "12px" }}
                            >
                              <option selected>শ্রেণী নির্বাচন করুন</option>
                              <option value="1">ষষ্ঠ শ্রেণী</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3">
                          <div className="mb-3" style={{ fontSize: "12px" }}>
                            <label className="form-label">
                              সেশন নির্বাচন করুন
                            </label>
                            <select
                              className="form-select p-2"
                              aria-label="Default select example"
                              style={{ fontSize: "12px" }}
                            >
                              <option selected> সেশন নির্বাচন করুন</option>
                              <option value="1">প্রভাতি সেশন</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3">
                          <div className="mb-3" style={{ fontSize: "12px" }}>
                            <label className="form-label">
                              শাখা নির্বাচন করুন
                            </label>
                            <select
                              className="form-select p-2"
                              aria-label="Default select example"
                              style={{ fontSize: "12px" }}
                            >
                              <option selected> শাখা নির্বাচন করুন</option>
                              <option value="1">পদ্মা শাখা</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3">
                          <div className="mb-3" style={{ fontSize: "12px" }}>
                            <label className="form-label">
                              বিষয় নির্বাচন করুন
                            </label>
                            <select
                              className="form-select p-2"
                              aria-label="Default select example"
                              style={{ fontSize: "12px" }}
                            >
                              <option selected>বিষয় নির্বাচন করুন</option>
                              <option value="1">সবগুলি</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3">
                          <div className="mb-3" style={{ fontSize: "12px" }}>
                            <label className="form-label">
                              মূল্যায়ন শিরোনাম নির্বাচন করুন
                            </label>
                            <select
                              className="form-select p-2"
                              aria-label="Default select example"
                              style={{ fontSize: "12px" }}
                            >
                              <option selected>
                                {" "}
                                মূল্যায়ন শিরোনাম নির্বাচন করুন
                              </option>
                              <option value="1">শিখন কালীন মূল্যায়ন</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3">
                          <div className="mb-3" style={{ fontSize: "12px" }}>
                            <label className="form-label">
                              যোগ্যতা নির্বাচন করুন
                            </label>
                            <select
                              className="form-select p-2"
                              aria-label="Default select example"
                              style={{ fontSize: "12px" }}
                            >
                              <option selected>যোগ্যতা নির্বাচন করুন</option>
                              <option value="1">সকল যোগ্যতা</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3">
                          <div className="mb-3" style={{ fontSize: "12px" }}>
                            <label className="form-label">
                              পারদর্শিকতার সূচক নির্বাচন করুন
                            </label>
                            <select
                              className="form-select p-2"
                              aria-label="Default select example"
                              style={{ fontSize: "12px" }}
                            >
                              <option selected>
                                পারদর্শিকতার সূচক নির্বাচন করুন
                              </option>
                              <option value="1">সকল সূচক</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3">
                          <div className="mb-3">
                            <label className="form-label mt-3"></label>
                            <div className="input-group">
                              <input
                                className="form-control py-1 border-right-0 border-0"
                                type="search"
                                defaultValue="নিম্নে মূল্যায়ন প্রতিবেদন দেখুন"
                                id="example-search-input"
                                style={{
                                  fontSize: "12px",
                                  backgroundColor: "#428F92",
                                }}
                              />
                              <span
                                className="input-group-append rounded-end"
                                style={{
                                  fontSize: "12px",
                                  backgroundColor: "#428F92",
                                }}
                              >
                                <button
                                  className="btn btn-outline-secondary py-1 border-0"
                                  type="button"
                                  style={{
                                    backgroundColor: "#428F92",
                                  }}
                                >
                                  <i className="fa fa-search" />
                                </button>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <h6 className='m-2'>শিখনকালীন মূল্যায়ন প্রতিবেদন (PI)</h6>
              <div className="card shadow-lg border-0">
                <div className="d-flex justify-content-between flex-md-row flex-column align-items-center p-3 border-bottom">
                  <div className="">
                    <h5>শিক্ষার্থীর নাম: ইনতিশার পারভেজ </h5>
                    <p>রোল নম্বর #৩২১০০</p>
                  </div>
                  <div className="d-flex gap-2">
                    <div className={`${styles.download_btn}`}>
                      <BsFillFileEarmarkArrowDownFill className="fs-4 me-2" />
                      ডাউনলোড করুন
                    </div>
                    <div className={`${styles.download_icon}`}>
                      <IoIosArrowUp className="fs-2" />
                    </div>
                  </div>
                </div>
                {/* subjects list start */}
                <div className="d-flex py-2 flex-lg-row flex-column">
                  <div className="d-flex py-1">
                    <div className="d-flex px-1" style={{ fontSize: "14px" }}>
                      <PiBookOpenTextBold className="fs-5 mx-1" />
                      বাংলা
                    </div>
                    <div className="d-flex px-1" style={{ fontSize: "14px" }}>
                      <PiBookOpenTextBold className="fs-5 mx-1" />
                      গনিত
                    </div>
                    <div className="d-flex px-1" style={{ fontSize: "14px" }}>
                      <PiBookOpenTextBold className="fs-5 mx-1" />
                      ইংরেজি
                    </div>
                  </div>
                  <div className="d-flex py-1">
                    <div className="d-flex px-1" style={{ fontSize: "14px" }}>
                      <PiBookOpenTextBold className="fs-5 mx-1" />
                      জীবন ও জীবিকা
                    </div>
                    <div className="d-flex px-1" style={{ fontSize: "14px" }}>
                      <PiBookOpenTextBold className="fs-5 mx-1" />
                      স্বাস্থ্য সুরক্ষা
                    </div>
                  </div>
                  <div className="d-flex py-1">
                    <div className="d-flex px-1" style={{ fontSize: "14px" }}>
                      <PiBookOpenTextBold className="fs-5 mx-1" />
                      ডিজিটাল প্রযুক্তি
                    </div>
                    <div className="d-flex px-1" style={{ fontSize: "14px" }}>
                      <PiBookOpenTextBold className="fs-5 mx-1" />
                      ইসলাম শিক্ষা
                    </div>
                    <div className="d-flex px-1" style={{ fontSize: "14px" }}>
                      <PiBookOpenTextBold className="fs-5 mx-1" />
                      বিজ্ঞান
                    </div>
                  </div>
                  <div className="d-flex py-1">
                    <div className="d-flex px-1" style={{ fontSize: "14px" }}>
                      <PiBookOpenTextBold className="fs-5 mx-1" />
                      জীবন ও জীবিকা
                    </div>
                    <div className="d-flex px-1" style={{ fontSize: "14px" }}>
                      <PiBookOpenTextBold className="fs-5 mx-1" />
                      জীবন ও জীবিকা
                    </div>
                  </div>
                </div>
                {/* subjects list end */}
                <div className="row pb-5 pt-2">
                  <div className="col-sm-6 col-md-3 py-2">
                    <div className="border-0 p-2 h-100">
                      <div className="d-flex">
                        <div>
                          <h6>পারদর্শিতা সূচক ৬.১.১ </h6>
                          <h6 style={{ fontSize: "14px" }}>
                            নিজের এবং অন্যের প্রয়োজন ও আবেগ বিবেচনায় নিয়ে
                            যোগাযোগ করতে পারছে।
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3 py-2">
                    <div
                      className="card h-100 shadow-lg border-0 p-2"
                      style={{ backgroundColor: "#F0FAE9" }}
                    >
                      <div className="d-flex">
                        <div>
                          <TiTick className={`${styles.tick_mark}`} />
                        </div>
                        <div>
                          <h6 style={{ fontSize: "14px" }}>
                            নিজের এবং অন্যের প্রয়োজন ও আবেগ বিবেচনায় নিয়ে
                            যোগাযোগ করতে পারছে।
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3 py-2">
                    <div className="card shadow-lg border-0 p-2 h-100">
                      <div className="d-flex ">
                        <div>
                          <TiTick className={`${styles.tick_mark}`} />
                        </div>
                        <div>
                          <h6 style={{ fontSize: "14px" }}>
                            দলের কর্মপরিকল্পনায় বা সিদ্ধান্তগ্রহণে যথাযথভাবে
                            অংশগ্রহণ না করলেও দলীয় নির্দেশনা অনুযায়ী নিজের
                            দায়িত্বটুকু যথাযথভাবে পালন করছে
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3 py-2">
                    <div
                      className="card shadow-lg border-0 p-2 h-100"
                      style={{ backgroundColor: "#F0FAE9" }}
                    >
                      <div className="d-flex">
                        <div>
                          <TiTick className={`${styles.tick_mark}`} />
                        </div>
                        <div>
                          <h6 style={{ fontSize: "14px" }}>
                            দলের সিদ্ধান্ত ও কর্মপরিকল্পনায় সক্রিয় অংশগ্রহণ
                            করছে, সেই অনুযায়ী নিজের ভূমিকা যথাযথভাবে পালন করছে
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3 py-2">
                    <div className="border-0 p-2 h-100">
                      <div className="d-flex">
                        <div>
                          <h6>পারদর্শিতা সূচক ৬.১.১ </h6>
                          <h6 style={{ fontSize: "14px" }}>
                            নিজের এবং অন্যের প্রয়োজন ও আবেগ বিবেচনায় নিয়ে
                            যোগাযোগ করতে পারছে।
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3 py-2">
                    <div
                      className="card h-100 shadow-lg border-0 p-2"
                      style={{ backgroundColor: "#F0FAE9" }}
                    >
                      <div className="d-flex">
                        <div>
                          <TiTick className={`${styles.tick_mark}`} />
                        </div>
                        <div>
                          <h6 style={{ fontSize: "14px" }}>
                            নিজের এবং অন্যের প্রয়োজন ও আবেগ বিবেচনায় নিয়ে
                            যোগাযোগ করতে পারছে।
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3 py-2">
                    <div className="card shadow-lg border-0 p-2 h-100">
                      <div className="d-flex ">
                        <div>
                          <TiTick className={`${styles.tick_mark}`} />
                        </div>
                        <div>
                          <h6 style={{ fontSize: "14px" }}>
                            দলের কর্মপরিকল্পনায় বা সিদ্ধান্তগ্রহণে যথাযথভাবে
                            অংশগ্রহণ না করলেও দলীয় নির্দেশনা অনুযায়ী নিজের
                            দায়িত্বটুকু যথাযথভাবে পালন করছে
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3 py-2">
                    <div
                      className="card shadow-lg border-0 p-2 h-100"
                      style={{ backgroundColor: "#F0FAE9" }}
                    >
                      <div className="d-flex">
                        <div>
                          <TiTick className={`${styles.tick_mark}`} />
                        </div>
                        <div>
                          <h6 style={{ fontSize: "14px" }}>
                            দলের সিদ্ধান্ত ও কর্মপরিকল্পনায় সক্রিয় অংশগ্রহণ
                            করছে, সেই অনুযায়ী নিজের ভূমিকা যথাযথভাবে পালন করছে
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3 py-2">
                    <div className="border-0 p-2 h-100">
                      <div className="d-flex">
                        <div>
                          <h6>পারদর্শিতা সূচক ৬.১.১ </h6>
                          <h6 style={{ fontSize: "14px" }}>
                            নিজের এবং অন্যের প্রয়োজন ও আবেগ বিবেচনায় নিয়ে
                            যোগাযোগ করতে পারছে।
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3 py-2">
                    <div
                      className="card h-100 shadow-lg border-0 p-2"
                      style={{ backgroundColor: "#F0FAE9" }}
                    >
                      <div className="d-flex">
                        <div>
                          <TiTick className={`${styles.tick_mark}`} />
                        </div>
                        <div>
                          <h6 style={{ fontSize: "14px" }}>
                            নিজের এবং অন্যের প্রয়োজন ও আবেগ বিবেচনায় নিয়ে
                            যোগাযোগ করতে পারছে।
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3 py-2">
                    <div className="card shadow-lg border-0 p-2 h-100">
                      <div className="d-flex ">
                        <div>
                          <TiTick className={`${styles.tick_mark}`} />
                        </div>
                        <div>
                          <h6 style={{ fontSize: "14px" }}>
                            দলের কর্মপরিকল্পনায় বা সিদ্ধান্তগ্রহণে যথাযথভাবে
                            অংশগ্রহণ না করলেও দলীয় নির্দেশনা অনুযায়ী নিজের
                            দায়িত্বটুকু যথাযথভাবে পালন করছে
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3 py-2">
                    <div
                      className="card shadow-lg border-0 p-2 h-100"
                      style={{ backgroundColor: "#F0FAE9" }}
                    >
                      <div className="d-flex">
                        <div>
                          <TiTick className={`${styles.tick_mark}`} />
                        </div>
                        <div>
                          <h6 style={{ fontSize: "14px" }}>
                            দলের সিদ্ধান্ত ও কর্মপরিকল্পনায় সক্রিয় অংশগ্রহণ
                            করছে, সেই অনুযায়ী নিজের ভূমিকা যথাযথভাবে পালন করছে
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                </div>
                
              </div>
              {/* <div className="d-flex align-items-center py-2 gap-2">
                <div className="card shadow-lg border-0 p-2">
                  <MdArrowBackIosNew className="fs-1" />
                </div>
                <div className="card shadow-lg border-0 p-1 w-100">
                  <div className="d-flex justify-content-between">
                    <div>
                      <div style={{ fontSize: "14px" }}>
                        <BiSidebar
                          className={`fs-3 ${styles.teacher_info_list}`}
                        />{" "}
                        পারদর্শিতার মূল্যায়ন
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
                    <div className="d-flex gap-2 align-items-center fs-4">
                      <FiStar /> <HiOutlineDotsVertical />
                    </div>
                  </div>
                </div>
              </div> */}
        
              </div>
            </div>      
    
    </div>
  )
}


