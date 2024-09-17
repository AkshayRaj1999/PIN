import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./App.scss";
import Employer from "./Pages/employer/Employer";
import Signing from "./Pages/signin/Signing";
import Otp from "./Pages/OtpSignIn/Otp";
import Thankyou from "./Pages/thankyou/Thankyou";
import Candidate from "./Pages/candidate/CandidateSignin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Employer />} />
        <Route path="/Signing" element={<Signing />} />
        <Route path="/CandidateSignin" element={<Candidate />} />
        <Route path="/OtpSignIn" element={<Otp />} />
        <Route path="/ThankYou" element={<Thankyou />} />
      </Routes>
    </Router>
  );
}

export default App;
