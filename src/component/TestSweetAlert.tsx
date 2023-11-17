import Swal from 'sweetalert2';

const TestSweetAlert = () => {
  const handleAlert = () => {
    console.log("hellow");

    Swal.fire({
      title: "আপনি কি সংরক্ষণ করতে চান?",
      // text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "হ্যা"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "সংরক্ষন করা হয়েছে!",
          // text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });



  }


  const handleAlert2 = () => {
    console.log("hellow");
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500
    })
  }
  return (
    <div className='text-center'>
      <h2>Test</h2>
      <button onClick={handleAlert} type="button" className="btn btn-primary">Teast Swwet ALERT1</button>
      <button onClick={handleAlert2} type="button" className="btn btn-primary">Teast Swwet ALERT-2</button>

    </div>
  );
};

export default TestSweetAlert;