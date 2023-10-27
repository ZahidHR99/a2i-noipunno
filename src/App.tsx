import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./component/PrivateRoute";
import Login from "./component/Login";
import Topbar from "./layout/Topbar";
import Footer from "./layout/Footer";
import Home from "./component/Home";

function App() {

  return (

    <>

    {
      window.location.pathname !== "/login" && <Topbar />
    }
    


    <Router>
      <Routes>
        <Route  path="/" element={<PrivateRoute />}>
          <Route path="/" element={ <Home /> } />
        </Route>
        <Route path="/login" element={ <Login /> } />
      </Routes>
    </Router>

    {
      window.location.pathname != "/login" && <Footer />
    }

    
    </>
  );
}

export default App;
