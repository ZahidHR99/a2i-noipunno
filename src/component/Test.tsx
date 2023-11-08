import Breadcumbtitle from "../layout/Breadcumb";


const Test = () => {
  const arrayOfObjects = [
    {
      name: "John Doe",
      roll: 123,
      id: "A456789",
      phone: "555-555-5555",
      section: "A",
      profilephoto: "john.jpg"
    },
    {
      name: "Jane Smith",
      roll: 456,
      id: "B789012",
      phone: "555-555-5556",
      section: "B",
      profilephoto: "jane.jpg"
    },
    // Add more objects as needed
  ];

  console.log(arrayOfObjects);
  return (
    <>
      <Breadcumbtitle title={"টেস্ট"} />



    </>
  );
};

export default Test;