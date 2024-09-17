import React from "react";
import { useNavigate } from "react-router-dom";
import DynamicForm from "../../components/form/Form";
import Footer from "../../components/footer/Footer";
import Slider from "../../components/slider/Slider";


function Candidate() {
  const navigate = useNavigate();
  const formConfig2 = [
    {
      name: "firstName",
      label: "First Name",
      type: "text",
      validation: "required",
    },
    {
      name: "lastName",
      label: "Last Name",
      type: "text",
      validation: "required",
    },
    {
      name: "location",
      label: "Location",
      type: "text",
      validation: "required",
    },
    {
      name: "contactnumber",
      label: "Contact No",
      type: "tel",
      validation: "required",
    },
  ];

  const handleFormSubmit = (formData) => {
    console.log("Page 2 Form Submitted:", formData);
    navigate("/OtpSignIn");
  };
  return (
    <>
      <section className="section__singing">
        <div className="container">
          <div className="row">
            <div className="col col-lg-6 col-md-12 col-sm-12">
              <Slider />
            </div>
            <div className="col col-lg-6 col-md-12 col-sm-12">
              <div className="employer__form__container">
                <h3>Welcome to PIN, Employer!</h3>
                <p>Now we shall get to know further.</p>
                <DynamicForm
                  formConfig={formConfig2}
                  onSubmit={handleFormSubmit}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Candidate;
