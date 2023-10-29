import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { clssWiseData } from "../Request";

const ClassWiseSubject = () => {
 const { id } = useParams();
 const [subjects, setSubjects] = useState([])

 const getClassData = async () => {
  const { data }: any = await clssWiseData(id);
  setSubjects(data.data)
 }

 console.log("Class wise Subjects are", subjects);

 useEffect(() => {
  getClassData()
 }, [id]);


 return (
  <div>
   <p>Thsi is Class wise Subject Page--- Clss-" {id || "no class"}</p>
  </div>
 );
};

export default ClassWiseSubject;