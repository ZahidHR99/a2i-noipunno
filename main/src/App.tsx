import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./component/PrivateRoute";
import Login from "./component/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<PrivateRoute />}>
          <Route path="/" element={"ffffff"} />
        </Route>
        <Route path="/login" element={ <Login /> } />
      </Routes>
    </Router>
  );
}

export default App;
