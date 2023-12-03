import React from "react";
import html2pdf from "html2pdf.js";
import { BsCheckCircle, BsFillFileEarmarkArrowDownFill } from "react-icons/bs";
import styles from "./Home.style.module.css";
import { TiTick } from "react-icons/ti";
import {
    section_name,
    shift_name,
    teacher_name,
    branch_name,
  } from "../utils/Utils";

function Pdf({data, selectedSunject, allFelter}:any) {
  const handleConvertToPdf = () => {
    const element = document.getElementById("contentToConvert");

    const options = {
      margin: 10,
      filename: "Student-Transcript-document.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    const pdf = html2pdf().from(element).set(options).outputPdf();
    pdf.save();
  };
  console.log("data",data,selectedSunject,allFelter);
  
  return (
    <div>
      <div>



      {/* <div className="container border">
            <div className="row pb-5 pt-2">
              <div className="col-sm-6 col-md-3 py-2">
                <div className="border-0 p-2 h-100">
                  <div className="d-flex">
                    <div>
                      <h6>পারদর্শিতা সূচক ৬.১.১ </h6>
                      <h6 style={{ fontSize: "14px" }}>
                        নিজের এবং অন্যের প্রয়োজন ও আবেগ বিবেচনায় নিয়ে যোগাযোগ
                        করতে পারছে।
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
                        নিজের এবং অন্যের প্রয়োজন ও আবেগ বিবেচনায় নিয়ে যোগাযোগ
                        করতে পারছে।
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
                        দলের সিদ্ধান্ত ও কর্মপরিকল্পনায় সক্রিয় অংশগ্রহণ করছে,
                        সেই অনুযায়ী নিজের ভূমিকা যথাযথভাবে পালন করছে
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
                        নিজের এবং অন্যের প্রয়োজন ও আবেগ বিবেচনায় নিয়ে যোগাযোগ
                        করতে পারছে।
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
                        নিজের এবং অন্যের প্রয়োজন ও আবেগ বিবেচনায় নিয়ে যোগাযোগ
                        করতে পারছে।
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
                        দলের সিদ্ধান্ত ও কর্মপরিকল্পনায় সক্রিয় অংশগ্রহণ করছে,
                        সেই অনুযায়ী নিজের ভূমিকা যথাযথভাবে পালন করছে
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
                        নিজের এবং অন্যের প্রয়োজন ও আবেগ বিবেচনায় নিয়ে যোগাযোগ
                        করতে পারছে।
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
                        নিজের এবং অন্যের প্রয়োজন ও আবেগ বিবেচনায় নিয়ে যোগাযোগ
                        করতে পারছে।
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
                        দলের সিদ্ধান্ত ও কর্মপরিকল্পনায় সক্রিয় অংশগ্রহণ করছে,
                        সেই অনুযায়ী নিজের ভূমিকা যথাযথভাবে পালন করছে
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        <div id="contentToConvert" className="container border">
          <div className="row p-2">
            <div className="text-center py-3">
              <h6 style={{ fontSize: "14px" }}>মডেল একাডেমি</h6>
              <h6 style={{ fontSize: "14px" }}>[একটি আদর্শ উচ্চ বিদ্যালয়]</h6>
              <h6 style={{ fontSize: "14px" }}>
                প্রিন্সিপাল আব্দুল কাশেম সড়ক, সরকারি ডি-টাইপ কলোনী, মিরপুর-১,
                ঢাকা-১২১৬
              </h6>
              
              <h6 style={{ fontSize: "14px", fontWeight: "bold" }}>
                
              {allFelter?.mullayon == 1234567890 && "শিখনকালীন মূল্যায়ন"  }
              {allFelter?.mullayon == 1234567891 && "ষাষ্মাসিক সামষ্টিক মূল্যায়ন"  }
              {allFelter?.mullayon == 1234567892 && "বার্ষিক সামষ্টিক মূল্যায়ন"  }
              {allFelter?.mullayon == 1234567893 && "ষান্মাসিক আচরণিক মূল্যায়ন"  }
              {allFelter?.mullayon == 1234567894 && "বার্ষিক আচরণিক মূল্যায়ন"  }
                
                এর বিষয়ভিত্তিক
                ট্রান্সক্রিপ্ট-২০২৩
              </h6>
            </div>
            <div className="">
              <table className="table table-bordered table-sm table-responsive">
                <thead>
                  <tr>
                    <th
                      colSpan={3}
                      style={{
                        fontSize: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      শিক্ষার্থীর নাম: {data.student_name_bn}
                    </th>
                    <th
                      style={{
                        fontSize: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      শিক্ষার্থীর আইডি: {data.roll}
                    </th>
                  </tr>
                  <tr>
                    <th
                      style={{
                        fontSize: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      শ্রেণী: {data.class}
                    </th>
                    <th
                      style={{
                        fontSize: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      শাখা: {section_name(data.section)}
                    </th>
                    <th
                      style={{
                        fontSize: "10px",
                        fontWeight: "bold",
                      }}
                    >
                        
                      বিষয়: 
                      {
                            selectedSunject ? <>{selectedSunject}</> : ""
                        }
                    </th>
                    <th
                      style={{
                        fontSize: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      বিষয় শিক্ষকের নাম:
                    </th>
                  </tr>
                  <tr>
                    <th
                      className="text-center"
                      colSpan={4}
                      style={{
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    >
                      পারদর্শিতার সূচকের মাত্রা
                    </th>
                  </tr>
                  <tr>
                    <th
                      colSpan={2}
                      style={{
                        fontSize: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      পারদর্শিতা সূচক (PI)
                    </th>
                    <th
                      colSpan={2}
                      style={{
                        fontSize: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      শিক্ষার্থীর পারদর্শিতা মাত্রা
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="w-25">
                      ৬.১.১ <br />
                      নিজের এবং অন্যের প্রয়োজন ও আবেগ বিবেচনায় নিয়ে যোগাযোগ করতে
                      পারছে।
                    </td>
                    <td className="w-25">
                      <BsCheckCircle className="fs-5 pe-1" />
                      অন্যের সাথে যোগাযোগের সময়ে নিজের চাহিদা প্রকাশ করতে পারছে।
                    </td>
                    <td className="w-25">
                      অন্যের কাছে নিজের চাহিদা প্রকাশ করার সময় ঐ ব্যক্তির আগ্রহ,
                      চাহিদা ও আবেগ বিবেচনায় নিতে পারছে।
                    </td>
                    <td className="w-25">
                      মর্যাদাপূর্ণ শারীরিক ভাষা প্রয়োগের পাশাপাশি ব্যাক্তির সাথে
                      সম্পর্কের ধরন অনুযায়ী যথাযথভাবে সম্বোধন করতে পারছে
                    </td>
                  </tr>
                  <tr>
                    <td className="w-25">
                      ৬.১.১ <br />
                      নিজের এবং অন্যের প্রয়োজন ও আবেগ বিবেচনায় নিয়ে যোগাযোগ করতে
                      পারছে।
                    </td>
                    <td className="w-25">
                      <BsCheckCircle className="fs-5 pe-1" />
                      অন্যের সাথে যোগাযোগের সময়ে নিজের চাহিদা প্রকাশ করতে পারছে।
                    </td>
                    <td className="w-25">
                      অন্যের কাছে নিজের চাহিদা প্রকাশ করার সময় ঐ ব্যক্তির আগ্রহ,
                      চাহিদা ও আবেগ বিবেচনায় নিতে পারছে।
                    </td>
                    <td className="w-25">
                      মর্যাদাপূর্ণ শারীরিক ভাষা প্রয়োগের পাশাপাশি ব্যাক্তির সাথে
                      সম্পর্কের ধরন অনুযায়ী যথাযথভাবে সম্বোধন করতে পারছে
                    </td>
                  </tr>
                  <tr>
                    <td className="w-25">
                      ৬.১.১ <br />
                      নিজের এবং অন্যের প্রয়োজন ও আবেগ বিবেচনায় নিয়ে যোগাযোগ করতে
                      পারছে।
                    </td>
                    <td className="w-25">
                      <BsCheckCircle className="fs-5 pe-1" />
                      অন্যের সাথে যোগাযোগের সময়ে নিজের চাহিদা প্রকাশ করতে পারছে।
                    </td>
                    <td className="w-25">
                      অন্যের কাছে নিজের চাহিদা প্রকাশ করার সময় ঐ ব্যক্তির আগ্রহ,
                      চাহিদা ও আবেগ বিবেচনায় নিতে পারছে।
                    </td>
                    <td className="w-25">
                      মর্যাদাপূর্ণ শারীরিক ভাষা প্রয়োগের পাশাপাশি ব্যাক্তির সাথে
                      সম্পর্কের ধরন অনুযায়ী যথাযথভাবে সম্বোধন করতে পারছে
                    </td>
                  </tr>
                  <tr>
                    <td className="w-25">
                      ৬.১.১ <br />
                      নিজের এবং অন্যের প্রয়োজন ও আবেগ বিবেচনায় নিয়ে যোগাযোগ করতে
                      পারছে।
                    </td>
                    <td className="w-25">
                      <BsCheckCircle className="fs-5 pe-1" />
                      অন্যের সাথে যোগাযোগের সময়ে নিজের চাহিদা প্রকাশ করতে পারছে।
                    </td>
                    <td className="w-25">
                      অন্যের কাছে নিজের চাহিদা প্রকাশ করার সময় ঐ ব্যক্তির আগ্রহ,
                      চাহিদা ও আবেগ বিবেচনায় নিতে পারছে।
                    </td>
                    <td className="w-25">
                      মর্যাদাপূর্ণ শারীরিক ভাষা প্রয়োগের পাশাপাশি ব্যাক্তির সাথে
                      সম্পর্কের ধরন অনুযায়ী যথাযথভাবে সম্বোধন করতে পারছে
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="d-flex pt-5 pb-1">
                <div
                  className="w-50"
                  style={{ fontSize: "14px", fontWeight: "bold" }}
                >
                  বিষয় শিক্ষকের স্বাক্ষরঃ
                </div>
                <div
                  className="w-50"
                  style={{ fontSize: "14px", fontWeight: "bold" }}
                >
                  প্রধান শিক্ষকের স্বাক্ষরঃ
                </div>
              </div>
            </div>
          </div>

          
        </div>

        <div
          className="d-flex gap-2 pointer"
          onClick={(e) => handleConvertToPdf()}
        >
          <div className={`${styles.download_btn}`}>
            <BsFillFileEarmarkArrowDownFill className="fs-4 me-2" />
            ডাউনলোড করুন
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pdf;
