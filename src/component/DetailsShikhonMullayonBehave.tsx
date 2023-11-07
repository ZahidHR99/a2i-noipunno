import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StudentMullayonBehaveSubmit from "./StudentMullayonBehaveSubmit";


const own_SUbjects__: any = localStorage.getItem("own_subjet") || "";
const own_SUbjects = own_SUbjects__ ? JSON.parse(own_SUbjects__) : {};

export default function DetailsShikhonMullayonBehave({
  showDetailsshikhonKalinMullayon,
  assessment_uid,
  teacher
}: any) {

  return (
    <div>
     
      <div className="row">

        <StudentMullayonBehaveSubmit assessment_uid={assessment_uid} al_pi_attr={showDetailsshikhonKalinMullayon?.weights} teacher={teacher} />

      </div>

      
    </div>
  );
}
