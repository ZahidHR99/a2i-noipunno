import '../../assets/dashboard_materials/css/dashboard.css';
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