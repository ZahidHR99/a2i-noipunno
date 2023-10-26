import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./component/PrivateRoute";
import Login from "./component/Login";
import Topbar from "./layout/Topbar";
import Footer from "./layout/Footer";
import Home from "./component/Home";
import { Helmet } from 'react-helmet';

function App() {
  return (

    <>
    
<Topbar />
    <Router>
      <Routes>
        <Route exact path="/" element={<PrivateRoute />}>
          <Route path="/" element={ <Home /> } />
        </Route>
        <Route path="/login" element={ <Login /> } />
      </Routes>
    </Router>

    <Footer />
    </>
  );
}

export default App;
