import '../../../assets/dashboard_materials/css/dashboard.css';
import BannerSection from '../BannerSection';
import ClassRoutine from '../ClassRoutine';
import ParodorshitarSuchokBishoyokTottho from '../ParodorshitarSuchokBishoyokTottho';
import PopUpCard from '../PopUpCard';
import ReportForHeadTeacherDashboard from '../ReportForHeadTeacherDashboard';

import ShikkokerTalika from '../ShikkokerTalika';
import SryniBishoyokTottho from '../SryniBishoyokTottho';

const HeadTeacherDashboard = () => {
  return (
    <div>
      <BannerSection />
      <ReportForHeadTeacherDashboard />
      <SryniBishoyokTottho />
      <ParodorshitarSuchokBishoyokTottho />
      <ShikkokerTalika />
      <ClassRoutine />
      <PopUpCard />
    </div>
  );
};

export default HeadTeacherDashboard;