import { useEffect, useState } from "react";
import { all_student } from "../Request";

const StudentList = () => {
 const [students, setStudents] = useState([])

 useEffect(() => {
  all_student()
   .then((res) => {
    setStudents(res.data.data)
    console.log(res.data.data);

   })

 }, [])


 return (
  <div>
   <div className="text-center">
    <h1>Student List</h1>
    <h2>Total Student: {students.length || "00"}</h2>
   </div>
  </div>
 );
};

export default StudentList;