import Breadcumbtitle from "../layout/Breadcumb";
import "./Home.style.module.css"
import teacherImg from "../../public/assets/noipunno/images/avatar/teacher.png";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { useEffect, useState } from "react";


const MyProfile = () => {
  const [userDetails, setuserDetails] = useState<any>({});


  useEffect(() => {
    const get_loacl_storage_data = JSON.parse(localStorage.getItem("customer_login_auth"));
    if (get_loacl_storage_data) {
      setuserDetails(get_loacl_storage_data.user);
    }
  }, []);

  // console.log("userDetails", userDetails);

  return (
    <>
      <Breadcumbtitle title={"আমার প্রোফাইল"} />

      <Container className="my-5">
        <Row className="g-2 w-75">
          <Col md={4}>
            <Image className="w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPiOzT5S40iGQK4a5dlk5GoDetf2vVByrepiK4LLt8HGp_Yp0TPZfSDcjnvsGTvsUkjWI&usqp=CAU" alt="" fluid />
          </Col>
          <Col md={8}>

            <Card.Body>
              <Card.Title> <strong>নামঃ </strong>{userDetails?.name}</Card.Title>
              <Card.Body>
                <strong>ইমেইলঃ </strong> {userDetails?.email}
                <br />
                <strong>পদবিঃ </strong> {userDetails?.user_type?.name}
                <br />
                <strong>আইডিঃ </strong> {userDetails?.id}
                <br />
                <strong>মোবাইলঃ </strong> {userDetails?.phone_no}
                <br />
                <strong>Phone:</strong> "teacher.phone"
              </Card.Body>

            </Card.Body>

          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MyProfile;