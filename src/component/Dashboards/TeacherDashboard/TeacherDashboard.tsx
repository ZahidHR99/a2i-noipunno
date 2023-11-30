import '../../../assets/dashboard_materials/css/dashboard.css';
import '../../../../src/styles/noipunno_custom_styles.css';

import BannerSection from "../BannerSection";
import BishoybittikThottoOMullayon from "../BishoybittikThottoOMullayon";
import ClassRoutine from "../ClassRoutine";
import ReportForTeacherDashboard from "../ReportForTeacherDashboard";
import PopUpCard from "../PopUpCard";


const TeacherDashboard = () => {
  return (
    <div className="dashboard_page">
      <BannerSection />
      <ReportForTeacherDashboard />
      <BishoybittikThottoOMullayon />
      {/* <ClassRoutine /> */}
      <PopUpCard />
    </div>
  );
};

export default TeacherDashboard;