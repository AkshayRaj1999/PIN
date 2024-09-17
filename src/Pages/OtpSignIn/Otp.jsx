import React, { useState } from "react";
import OtpInput from "react-otp-input";
import "./Otp.scss";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Button from "../../components/button/Button";
import Slider from "../../components/slider/Slider";

function Otp() {
  const navigate = useNavigate();
  const handleVerify = () => {
    console.log("Entered OTP:", otp);
    navigate("/ThankYou");
  };
  const [otp, setOtp] = useState("");
  return (
    <>
      <section className="Otp__section">
        <div className="container">
          <div className="row">
            <div className="col col-lg-6 col-md-12 col-sm-12">
              <Slider />
            </div>
            <div className="col col-lg-6 col-md-12 col-sm-12">
              <div className="otp__verification__container">
                <h3>Verify it’s You!</h3>
                <p>Please enter the 4 digit OTP we have sent to your number</p>
                <div className="otp__input__verification__container">
                  <OtpInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={4}
                    separator={<span>&nbsp;</span>}
                    inputType="tel"
                    containerStyle={{ display: "unset" }}
                    inputStyle={{
                      width: "71px",
                      height: "66px",
                      border: "1px solid #000000",
                      borderRadius: "20px",
                    }}
                    renderInput={(props) => (
                      <input {...props} className="otp-input" />
                    )}
                  />
                </div>
                <div className="otp__verification__button__container">
                  <Button
                    text="Verify"
                    className="verify__button"
                    onClick={handleVerify}
                  />
                  <h6>
                    Haven’t received the code?{" "}
                    <span>
                      <a href="/" target="_blank" rel="noopener noreferrer">
                        Resend
                      </a>
                    </span>
                  </h6>
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

export default Otp;
