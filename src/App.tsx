import React from "react";
import "./fonts/fonts.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/Banner/Banner";
import CustomNavbar from "./components/Nav/CustomNavbar";
import Footer from "./components/Footer/Footer";
import LoginFooter from "./components/LoginFooter/LoginFooter";
import Platform from "./pages/Platform/Platform";
import Navi from "./components/Navi/Navi";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import PasswordReset from "./pages/PasswordReset/PassworReset";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <CustomNavbar />
                <Footer />
              </>
            }
          />

          <Route
            path="/login"
            element={
              <>
                <Banner />
                <CustomNavbar />
                <Login/>
                <LoginFooter />
              </>
            }
          />

          <Route
            path="/register"
            element={
              <>
                <Banner />
                <CustomNavbar />
                <Register />
                <LoginFooter />
              </>
            }
          />

          <Route
            path="/platform"
            element={
              <>
                <Navi />
                <Platform />
                <Footer />
              </>
            }
          />
          <Route
            path="/passwordreset"
            element={
              <>
                <Navi />
                <PasswordReset />
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
