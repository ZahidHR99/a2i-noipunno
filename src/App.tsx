import { Route, Routes } from 'react-router-dom';
import PrivateRoute from "./component/PrivateRoute";
import Login from "./component/Login";
import Topbar from "./layout/Topbar";
import Footer from "./layout/Footer";
import Home from "./component/Home";
import { useEffect, useState } from "react";

function App() {
  const [topbar, settopbar] = useState(false)
  console.log(`window.location.pathname`, window.location.pathname);


  const fetchData = async () => {
    if (window.location.pathname !== "/login") {
      settopbar(true)
    }
  }

  useEffect(() => {
    fetchData()
  }, [window.location.pathname]);

  return (

    <>

    {
      topbar && <Topbar />
    }
    
      <Routes>
        <Route  path="/" element={<PrivateRoute />}>
          <Route path="/" element={ <Home /> } />
        </Route>
        <Route path="/login" element={ <Login /> } />
      </Routes>

    {
      topbar && <Footer />
    }

    </>
  );
}

export default App;
