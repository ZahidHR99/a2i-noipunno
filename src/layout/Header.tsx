import { useEffect, useState } from 'react';
import '../../public/dashboardAssets/css/style.css';
import { all_class } from '../Request';


const Header = () => {

  const [classdata, setdata] = useState([]);
  const [userDetails, setuserDetails] = useState<any>({});

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("customer_login_auth"));
    if (items) {
      setuserDetails(items.user);
    }
  }, []);

  const handleLogout = (e: any) => {
    localStorage.clear();
    window.location.reload();
    // window.location = window.location.origin;
    // console.log("Logout successful", e);
  };

  const fetchData = async () => {
    const { data }: any = await all_class();
    if (data.status) {
      setdata(data.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <>

      {/* topnav */}
      <div className="topnav border-bottom">
        <div className="container">
          <div className="row">
            <div className="d-flex justify-content-between align-items-center py-2">
              <div>
                <img
                  src="dashboardAssets/images/noipunno-new-logo.svg"
                  className="img-fluid"
                  alt="main logo"
                />
              </div>
              <div className="d-flex justify-content-between align-items-center">
                {/* Search Icon and modal */}
                {/* <div
                  className="d-none d-lg-block"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <a href="#">
                    <img
                      src="dashboardAssets/icons/search-normal.svg"
                      className="img-fluid mx-2"
                      alt="search icon"
                    />
                  </a>
                  
                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-lg">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Modal title
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          />
                        </div>
                        <div className="modal-body">...</div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" className="btn btn-primary">
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                </div> */}

                {/* Star Icon */}
                {/* <div className="d-none d-lg-block">
                  {" "}
                  <a href="#">
                    <img
                      src="dashboardAssets/icons/star.svg"
                      className="img-fluid mx-2"
                      alt="=favourite logo"
                    />
                  </a>
                </div> */}

                {/* Half Moon Icon  */}
                {/* <div className="d-none d-lg-block" onclick="myFunction()">
                  <a href="#">
                    <img
                      src="dashboardAssets/icons/dark-light-mode.svg"
                      className="img-fluid mx-2 tick-icons"
                      alt="main logo"
                    />
                  </a>
                </div> */}

                {/* Notification icon */}
                {/* <div className=" position-relative">
                  <a href="#">
                    <img
                      src="dashboardAssets/icons/notification.svg"
                      className="img-fluid"
                      alt="main logo"
                    />
                    <span className="position-absolute top-0 start-50 translate-middle d-flex mt-1  mx-2 justify-content-center align-items-center badge notification-badge rounded-pill bg-danger">
                      4
                    </span>
                  </a>
                </div> */}

                <div className="btn-group position-relative">
                  <a
                    className="navbar-menu-item d-flex align-items-center ms-2"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {" "}
                    <img
                      src="dashboardAssets/icons/teacher.svg"
                      className="img-fluid topnav-profile-icon-style"
                      alt="moon icon"
                    />
                    {/* active icon */}
                    <img src="dashboardAssets/icons/Status.svg" class="img-fluid position-absolute bottom-0 end-0"
                      alt="Status icon" />
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <div className="border-bottom topnav-dropdown-style">
                        <div className="d-flex align-items-center gap-2">
                          <div>
                            <img
                              src="dashboardAssets/icons/teacher.svg"
                              className="img-fluid icon-right-space"
                              alt="profile icon"
                            />
                          </div>
                          <div>
                            <h6 className="profile-style">আতাউর রহমান</h6>
                            <h6 className="profile-style">Head শিক্ষক</h6>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a href="#">
                        <div className="topnav-dropdown-style dropdown-item profile-style">
                          <img
                            src="dashboardAssets/icons/profile-icon.svg"
                            className="img-fluid icon-right-space"
                            alt="profile icon"
                          />
                          আমার প্রোফাইল
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="topnav-dropdown-style dropdown-item profile-style">
                          <img
                            src="dashboardAssets/icons/setting-2.svg"
                            className="img-fluid icon-right-space"
                            alt="profile icon"
                          />
                          সেটিংস
                        </div>
                      </a>
                    </li>
                    <hr className="p-0 m-0" />
                    <li>
                      <a href="#">
                        <div className="topnav-dropdown-style dropdown-item profile-style">
                          <img
                            src="dashboardAssets/icons/help.svg"
                            className="img-fluid icon-right-space"
                            alt="profile icon"
                          />
                          সাহায্য
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="topnav-dropdown-style dropdown-item profile-style">
                          <img
                            src="dashboardAssets/icons/info-circle.svg"
                            className="img-fluid icon-right-space"
                            alt="profile icon"
                          />
                          সাধারণ প্রশ্ন উত্তর
                        </div>
                      </a>
                    </li>
                    <hr className="p-0 m-0" />
                    <li>
                      <a href="#" className="d-lg-none">
                        <div className="topnav-dropdown-style dropdown-item profile-style">
                          <img
                            src="dashboardAssets/icons/search-normal.svg"
                            className="img-fluid icon-right-space"
                            alt="profile icon"
                          />
                          অনুসন্ধান করুন
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-lg-none">
                        <div className="topnav-dropdown-style dropdown-item profile-style">
                          <img
                            src="dashboardAssets/icons/star.svg"
                            className="img-fluid icon-right-space"
                            alt="profile icon"
                          />
                          প্রিয় বিষয়
                        </div>
                      </a>
                    </li>
                    <hr className="p-0 m-0" />
                    <li>
                      <a href="#" className="d-lg-none">
                        <div
                          className="topnav-dropdown-style dropdown-item profile-style"
                          onclick="myFunction()"
                        >
                          <img
                            src="dashboardAssets/icons/dark-light-mode.svg"
                            className="img-fluid mx-2 tick-icons"
                            alt="main logo"
                          />
                          থিম নির্বাচন করুন
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="topnav-dropdown-style dropdown-item profile-style">
                          <img
                            src="dashboardAssets/icons/sign-out.svg"
                            className="img-fluid icon-right-space"
                            alt="profile icon"
                          />
                          সাইন আউট
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* navbar */}
      <div className="main-nav border-bottom">
        <div className="container">
          <div className="row">
            <div className="d-flex justify-content-between">
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <nav className="navbar navbar-expand-lg">
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span>
                        <img
                          src="dashboardAssets/icons/menu.png"
                          className="img-fluid d-flex align-items-center"
                          alt=""
                        />
                      </span>
                    </button>
                    <div
                      className="collapse navbar-collapse"
                      id="navbarSupportedContent"
                    >
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown nav-item-style">
                          <a
                            className="nav-link active navbar-menu-item d-flex align-items-center"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <img
                              src="dashboardAssets/icons/home.svg"
                              className="img-fluid icon-right-space"
                              alt="main logo"
                            />
                            প্রথম পাতা
                            <img
                              src="dashboardAssets/icons/tik-ico.svg"
                              className="img-fluid icon-left-space tick-icons"
                              alt="tik icon"
                            />
                          </a>
                          <ul className="dropdown-menu border-0 dropdown-menu-item-style">
                            <li>
                              <a className="dropdown-item" href="#">
                                <div className="dropdown-list-item-style d-flex align-items-center">
                                  <img
                                    src="dashboardAssets/icons/nav-icos.svg"
                                    className="img-fluid dropdown-list-item-icon"
                                    alt="icon"
                                  />
                                  <p className="dropdown-class-list">
                                    প্রধান শিক্ষক
                                  </p>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <div className="dropdown-list-item-style d-flex align-items-center">
                                  <img
                                    src="dashboardAssets/icons/nav-icos.svg"
                                    className="img-fluid dropdown-list-item-icon"
                                    alt="icon"
                                  />
                                  <p className="dropdown-class-list">
                                    বিষয়ভিত্তিক শিক্ষক
                                  </p>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item dropdown nav-item-style">
                          <a
                            className="nav-link navbar-menu-item d-flex align-items-center"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <img
                              src="dashboardAssets/icons/report.svg"
                              className="img-fluid icon-right-space"
                              alt="main logo"
                            />
                            রিপোর্ট
                            <img
                              src="dashboardAssets/icons/tik-ico.svg"
                              className="img-fluid icon-left-space"
                              alt="tik icon"
                            />
                          </a>
                          <ul className="dropdown-menu border-0 dropdown-menu-item-style">
                            <li>
                              <a className="dropdown-item" href="#">
                                <div className="dropdown-list-item-style d-flex align-items-center">
                                  <img
                                    src="dashboardAssets/icons/nav-icos.svg"
                                    className="img-fluid dropdown-list-item-icon"
                                    alt="icon"
                                  />
                                  <p className="dropdown-class-list">
                                    শিক্ষার্থীর ট্রান্সক্রিপ্ট
                                  </p>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <div className="dropdown-list-item-style d-flex align-items-center">
                                  <img
                                    src="dashboardAssets/icons/nav-icos.svg"
                                    className="img-fluid dropdown-list-item-icon"
                                    alt="icon"
                                  />
                                  <p className="dropdown-class-list">
                                    শিক্ষার্থীদের রিপোর্ট কার্ড
                                  </p>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <div className="dropdown-list-item-style d-flex align-items-center">
                                  <img
                                    src="dashboardAssets/icons/nav-icos.svg"
                                    className="img-fluid dropdown-list-item-icon"
                                    alt="icon"
                                  />
                                  <p className="dropdown-class-list">
                                    শ্রেণির প্রতিবেদন
                                  </p>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <div className="dropdown-list-item-style d-flex align-items-center">
                                  <img
                                    src="dashboardAssets/icons/nav-icos.svg"
                                    className="img-fluid dropdown-list-item-icon"
                                    alt="icon"
                                  />
                                  <p className="dropdown-class-list">
                                    শিক্ষার্থীর হাজিরা প্রতিবেদন
                                  </p>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item dropdown nav-item-style">
                          <a
                            className="nav-link navbar-menu-item d-flex align-items-center"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <img
                              src="dashboardAssets/icons/nav-teacher-icon.svg"
                              className="img-fluid icon-right-space"
                              alt="main logo"
                            />
                            শিক্ষক
                          </a>
                        </li>
                        <li className="nav-item dropdown nav-item-style">
                          <a
                            className="nav-link navbar-menu-item d-flex align-items-center"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <img
                              src="dashboardAssets/icons/student-icon.svg"
                              className="img-fluid icon-right-space"
                              alt="main logo"
                            />
                            শিক্ষার্থী{" "}
                            <img
                              src="dashboardAssets/icons/tik-ico.svg"
                              className="img-fluid icon-left-space"
                              alt="tik icon"
                            />
                          </a>
                          <ul className="dropdown-menu border-0 dropdown-menu-item-style">
                            <li>
                              <a className="dropdown-item" href="#">
                                <div className="dropdown-list-item-style d-flex align-items-center">
                                  <img
                                    src="dashboardAssets/icons/nav-icos.svg"
                                    className="img-fluid dropdown-list-item-icon"
                                    alt="icon"
                                  />
                                  <p className="dropdown-class-list">
                                    শিক্ষার্থীর তালিকা
                                  </p>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <div className="dropdown-list-item-style d-flex align-items-center">
                                  <img
                                    src="dashboardAssets/icons/nav-icos.svg"
                                    className="img-fluid dropdown-list-item-icon"
                                    alt="icon"
                                  />
                                  <p className="dropdown-class-list">
                                    শিক্ষার্থীর হাজিরা
                                  </p>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item dropdown nav-item-style">
                          <a
                            className="nav-link navbar-menu-item d-flex align-items-center"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <img
                              src="dashboardAssets/icons/class-icon.svg"
                              className="img-fluid icon-right-space"
                              alt="main logo"
                            />
                            শ্রেণী{" "}
                            <img
                              src="dashboardAssets/icons/tik-ico.svg"
                              className="img-fluid icon-left-space"
                              alt="tik icon"
                            />
                          </a>
                          <ul className="dropdown-menu border-0 dropdown-menu-item-style">
                            <li>
                              <a className="dropdown-item" href="#">
                                <div className="dropdown-list-item-style d-flex align-items-center">
                                  <img
                                    src="dashboardAssets/icons/nav-icos.svg"
                                    className="img-fluid dropdown-list-item-icon"
                                    alt="icon"
                                  />
                                  <p className="dropdown-class-list">ষষ্ঠ শ্রেণী</p>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <div className="dropdown-list-item-style d-flex align-items-center">
                                  <img
                                    src="dashboardAssets/icons/nav-icos.svg"
                                    className="img-fluid dropdown-list-item-icon"
                                    alt="icon"
                                  />
                                  <p className="dropdown-class-list">
                                    সপ্তম শ্রেণী
                                  </p>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item dropdown nav-item-style">
                          <a
                            className="nav-link navbar-menu-item d-flex align-items-center"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <img
                              src="dashboardAssets/icons/requests.svg"
                              className="img-fluid icon-right-space"
                              alt="main logo"
                            />
                            অনুরোধগুলি
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
              <div className="d-lg-flex d-block align-items-lg-center mt-2 mt-lg-0">
                <div className="btn-group position-relative">
                  <a
                    className="nav-link navbar-menu-item nav-right-dorpdown text-white d-flex align-items-center"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="dashboardAssets/icons/add.svg"
                      className="img-fluid icon-right-space"
                      alt="add icon"
                    />
                    ব্যবস্থাপনা
                    <img
                      src="dashboardAssets/icons/tik-ico-white.svg"
                      className="img-fluid icon-left-space"
                      alt="dropdown icon"
                    />
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <a href="#">
                        <div className="management-dropdown-style dropdown-item profile-style">
                          <img
                            src="dashboardAssets/icons/std-management.svg"
                            className="img-fluid icon-right-space"
                            alt="profile icon"
                          />
                          শিক্ষার্থী ব্যবস্থাপনা
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="management-dropdown-style dropdown-item profile-style">
                          <img
                            src="dashboardAssets/icons/teacher-management.svg"
                            className="img-fluid icon-right-space"
                            alt="profile icon"
                          />
                          শিক্ষক ব্যবস্থাপনা
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="management-dropdown-style dropdown-item profile-style">
                          <img
                            src="dashboardAssets/icons/branch-ico.svg"
                            className="img-fluid icon-right-space"
                            alt="profile icon"
                          />
                          ব্রাঞ্চ ব্যবস্থাপনা
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="management-dropdown-style dropdown-item profile-style">
                          <img
                            src="dashboardAssets/icons/branch-ico.svg"
                            className="img-fluid icon-right-space"
                            alt="profile icon"
                          />
                          শিফট ব্যবস্থাপনা
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="management-dropdown-style dropdown-item profile-style">
                          <img
                            src="dashboardAssets/icons/class-room-cion.svg"
                            className="img-fluid icon-right-space"
                            alt="profile icon"
                          />
                          শ্রেণীকক্ষ ব্যবস্থাপনা
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <div className="management-dropdown-style dropdown-item profile-style">
                          <img
                            src="dashboardAssets/icons/users.svg"
                            className="img-fluid icon-right-space"
                            alt="profile icon"
                          />
                          দায়িত্ব অর্পণ করুন
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default Header;