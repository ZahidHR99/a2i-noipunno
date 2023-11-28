import '../../assets/dashboard_materials/css/dashboard.css';
import BannerSection from "./BannerSection";
import BishoybittikThottoOMullayon from "./BishoybittikThottoOMullayon";
import ClassRoutine from "./ClassRoutine";
import ReportForTeacherDashboard from "./ReportForTeacherDashboard";
import PopUpCard from "./PopUpCard";

const TeacherDashboardNew = () => {
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

export default TeacherDashboardNew;