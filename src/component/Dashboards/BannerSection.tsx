import '../../../public/dashboardAssets/css/dashboard.css';
import OnorudhShomohu from './OnorudhShomohu';
import ShikkathirHaziraChart from './ShikkathirHaziraChart';
import ShorbomotHishabforHeadTeaherDashboard from './ShorbomotHishabforHeadTeaherDashboard';

import TeacherProfileCard from './TeacherProfileCard';
import TotalNumberOfSudentTeacherClassRoom from './TotalNumberOfSudentTeacherClassRoom';

const BannerSection = () => {
  return (
    <section className="container my-3">
      <div className="card-container">
        <div className="row g-3 ">
          <TeacherProfileCard />
          {/* <ShikkathirHaziraChart /> */}
          <TotalNumberOfSudentTeacherClassRoom />
          {/* <OnorudhShomohu /> */}
        </div>
      </div>
    </section>
  );
};

export default BannerSection;