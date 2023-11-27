import BannerSection from "./BannerSection";
import BishoybittikThottoOMullayon from "./BishoybittikThottoOMullayon";
import ClassRoutine from "./ClassRoutine";
import ReportForTeacherDashboard from "./ReportForTeacherDashboard";
import '../../../public/dashboardAssets/css/globalSyles.css'
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