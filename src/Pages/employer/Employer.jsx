import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Employer.scss";
import Footer from "../../components/footer/Footer";
import Slider from "../../components/slider/Slider";

function Employer() {
  const [selectedRole, setSelectedRole] = useState("");
  const navigate = useNavigate();
  const handleRadioChange = (event) => {
    setSelectedRole(event.target.value);
    console.log(event.target.value);
    if (event.target.value === "employer") {
      navigate("/Signing");
    }
    else{
      navigate("/CandidateSignin")
    }
  };

  return (
    <>
      <section className="employer__section">
        <div className="container">
          <div className="row">
            <div className="col col-lg-6 col-md-12 col-sm-12">
              <Slider />
            </div>
            <div className="col col-lg-6 col-md-12 col-sm-12">
              <div className="form__container">
                <h3>Let Us Know Who You Are!</h3>
                <p>Please select one of the options from below</p>
                <div className="radio__button__container">
                  <div
                    className={`employer__radio__button ${
                      selectedRole === "employer" ? "selected" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="role"
                      value="employer"
                      checked={selectedRole === "employer"}
                      onChange={handleRadioChange}
                    />
                    <label htmlFor="employer">Employer</label>
                  </div>
                  <div
                    className={`candidate__radio__button ${
                      selectedRole === "candidate" ? "selected" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="role"
                      value="candidate"
                      checked={selectedRole === "candidate"}
                      onChange={handleRadioChange}
                    />
                    <label htmlFor="candidate">Candidate</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Employer;
