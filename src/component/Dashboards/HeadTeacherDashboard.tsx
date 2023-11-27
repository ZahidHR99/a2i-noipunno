import '../../../public/dashboardAssets/css/dashboard.css';
import BannerSection from './BannerSection';
import ClassRoutine from './ClassRoutine';
import ParodorshitarSuchokBishoyokTottho from './ParodorshitarSuchokBishoyokTottho';
import PopUpCard from './PopUpCard';
import Report from './Report';
import ShikkokerTalika from './ShikkokerTalika';
import SryniBishoyokTottho from './SryniBishoyokTottho';

const HeadTeacherDashboard = () => {
  return (
    <div>
      <BannerSection />
      <Report />
      <SryniBishoyokTottho />
      <ParodorshitarSuchokBishoyokTottho />
      <ShikkokerTalika />
      <ClassRoutine />
      <PopUpCard />
    </div>
  );
};

export default HeadTeacherDashboard;