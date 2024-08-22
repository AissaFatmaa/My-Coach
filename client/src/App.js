import "./App.css";
import Navbarr from "./components/Navbarr";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import { Route, Routes } from "react-router-dom";
import Schedule from "./components/Schedule";
import Shop from "./components/Shop";
import Pannier from "./components/Pannier";

import { useEffect, useState } from "react";
import { userCurrent } from "./JS/userSlice/userSlice";
import { useDispatch } from "react-redux";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

import Register from "./components/Register";
import Login from "./components/Login";
import Dashbordd from "./components/Dashbordd";
import Profil from "./components/Profil";
import { getproduct } from "./JS/productSlice";
import Details from "./components/Details";
import { getcommande } from "./JS/commandeSlice";

function App() {
  const [ping, setping] = useState(false);
  const [notif, setnotif] = useState(0);
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userCurrent());
    dispatch(getproduct());
    dispatch(getcommande());
  }, [ping]);
  return (
    <div className="App">
      <Navbarr notif={notif} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/shop"
          element={
            <Shop
              ping={ping}
              setping={setping}
              notif={notif}
              setnotif={setnotif}
            />
          }
        />
        <Route path="/schedule" element={<Schedule />} />
        <Route
          path="/pannier"
          element={<Pannier ping={ping} setping={setping} />}
        />
        <Route path="/dashbord" element={<Dashbordd />} />
        <Route path="/details" element={<Details />} />
        <Route element={<PrivateRoute />}>
          <Route
            path="/profil"
            element={<Profil ping={ping} setping={setping} />}
          />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
