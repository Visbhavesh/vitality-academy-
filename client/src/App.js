import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { NavbarSimple } from "./Components/Navbar";
import { CarouselTransition } from "./Components/Crousel";
import { FooterWithSocialLinks } from "./Components/Footer";
import { DefaultGallery } from "./Components/Gallery";
import { ProfileCard } from "./Components/Result";
import Header from "./Components/Header";
import Header_second from "./Components/Header_second";
import Header_third from "./Components/Header_third";
import Header_forth from "./Components/Header_forth";
import { Admin } from "./Login/Admin";
import { SignUp } from "./Login/Signup";
import { Login } from "./Login/Login";
import { FogetPassword } from "./Login/FogetPassword";
import Section from "./Pages/About";
import Academics from "./Pages/Academics";
import Admissionsection from "./Pages/Admission";
import Facultysection from "./Pages/Faculty";
import Carrerssection from "./Pages/Courses";
import { LecturesSection } from "./Pages/Lecture";
import Notessection from "./Pages/Notes";
import Stafflogin from "./Login/Staff";
import Messagesection from "./Components/Our_Message";
import Videosection from "./Components/Video";
import SimpleCard from "./Components/Notice";
import { Navigate } from "react-router-dom";
import { ResultCard } from "./Pages/Result";
import ContactPage from "./Pages/ContactPage";
// import { MegaMenuDefault } from "./Components/BeforeNav";
// import { SimpleRegistrationForm } from "./Login/Student";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("accessToken");

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
const ProtectedRouteforAdmin = ({ children }) => {
  const isAuthenticated = localStorage.getItem("accessToken");
  const isAdmin =
    localStorage.getItem("username") === "yug" ||
    "bhavesh" ||
    "aditya" ||
    "samual" ||
    "adminone" ||
    "ram123";
  if (!isAuthenticated || !isAdmin) {
    return <Navigate to="/" replace />;
  }
  return children;
};
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studentLogin" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adminLogin" element={<Admin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/staffLogin" element={<Stafflogin />} />
        <Route path="/forgetPassword" element={<FogetPassword />} />
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <NavbarSimple className="mt-2" />
              <Section />
              <FooterWithSocialLinks />
            </ProtectedRoute>
          }
        />{" "}
        <Route
          path="/result"
          element={
            <ProtectedRoute>
              <NavbarSimple className="mt-2" />
              <ResultCard />
              <FooterWithSocialLinks />
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/academics"
          element={
            <ProtectedRoute>
              <NavbarSimple className="mt-2" />
              <Academics />
              <FooterWithSocialLinks />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admission"
          element={
            <ProtectedRoute>
              <NavbarSimple className="mt-2" />
              <Admissionsection />
              <FooterWithSocialLinks />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <ProtectedRoute>
              <NavbarSimple className="mt-2" />
              <ContactPage/>
              <FooterWithSocialLinks />
            </ProtectedRoute>
          }
        />
        <Route
          path="/faculty"
          element={
            <ProtectedRoute>
              <NavbarSimple className="mt-2" />
              <Facultysection />
              <FooterWithSocialLinks />
            </ProtectedRoute>
          }
        />
        <Route
          path="/courses"
          element={
            <ProtectedRoute>
              <NavbarSimple className="mt-2" />
              <Carrerssection />
              <FooterWithSocialLinks />
            </ProtectedRoute>
          }
        />
        <Route
          path="/notes"
          element={
            <ProtectedRouteforAdmin>
              <NavbarSimple className="mt-2" />
              <Notessection />
              <FooterWithSocialLinks />
            </ProtectedRouteforAdmin>
          }
        />
        <Route
          path="/lectures"
          element={
            <ProtectedRoute>
              <NavbarSimple className="mt-2" />
              <LecturesSection />
              <FooterWithSocialLinks />
            </ProtectedRoute>
          }
        />
        </Routes>
      
      
    </BrowserRouter>
  );
}

const Home = () => (
  <div className="bg-blue-200 ">
    <NavbarSimple className="mt-2 bg-blue-200 " />
    <CarouselTransition className="mt-2" />
    <Messagesection className="mt-2" />
    <SimpleCard className="mt-2" />
    <Header className="mt-2" />
    <Header_second className="mt-1" />
    <Header_third className="mt-2" />
    <Header_forth className="mt-2" />
    <ProfileCard className="mt-2" />
    <DefaultGallery className="mt-2" />
    <Videosection />
    <FooterWithSocialLinks className="mt-2" />
    {/* <MegaMenuDefault/> 
    <SimpleRegistrationForm/> */}
  </div>
);
export default App;
