import { Route, Routes  } from "react-router-dom";
import PrivateRoute from "./component/PrivateRoute";
import Login from "./component/Login";
import Topbar from "./layout/Topbar";
import Footer from "./layout/Footer";
import Home from "./component/Home";
import { useEffect, useState } from "react";
import StudentMullayon from "./component/StudentMullayon";
import Teacher from "./component/Teacher";
import ClassWiseSubject from "./component/ClassWiseSubject";
import StudentList from "./component/StudentList";
import EditTeacherProfile from "./component/EditTeacherProfile";
import StudentTranscript from "./component/StudentTranscript";
import TeachersList from "./component/TeachersList";
import StudentMullayonBehave from "./component/StudentMullayonBehave";
import StudentMullayonBehaveSubmit from "./component/StudentMullayonBehaveSubmit";
import { teacher_dashboard, teacher_own_subject } from "./Request";

function App() {
  const [topbar, settopbar] = useState(false);
  const fetchData = async () => {
    console.log(`refresh.....`);
    if (window.location.pathname !== "/login") {
      settopbar(true);
    }

    const own_subjet = await teacher_own_subject();
    localStorage.setItem("own_subjet", JSON.stringify(own_subjet));

    const data_dash: any = await teacher_dashboard();
    localStorage.setItem("teacher_dashboard", JSON.stringify(data_dash.data));
  };

  useEffect(() => {
    fetchData();
  }, [window.location.pathname]);

  return (
    <>
      {topbar && <Topbar />}

      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/student-mullayon/:assessment_uid/:competence_uid"
            element={<StudentMullayon />}
          />
          <Route
            path="/student-mullayon-behave/:assessment_uid"
            element={<StudentMullayonBehave />}
          />
          <Route
            path="/student-mullayon-behave-submit/:assessment_uid/:competence_uid"
            element={<StudentMullayonBehaveSubmit />}
          />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/class/:id" element={<ClassWiseSubject />} />
          <Route path="/student-list" element={<StudentList />} />
          <Route path="/student-transcript" element={<StudentTranscript />} />
          <Route
            path="/edit-teacher-profile"
            element={<EditTeacherProfile />}
          />
          <Route path="/teachers-list" element={<TeachersList />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>

      {topbar && <Footer />}
    </>
  );
}

export default App;
