import React, { useState } from "react";
import './Form.scss';
import Button from "../button/Button";

function DynamicForm({ formConfig, onSubmit }) {
  const [formData, setFormData] = useState(
    formConfig.reduce((acc, field) => {
      acc[field.name] = "";
      return acc;
    }, {})
  );

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const formErrors = {};

    formConfig.forEach((field) => {
      const value = formData[field.name];
      
      // Required field validation
      if (field.validation === "required" && !value) {
        formErrors[field.name] = `${field.label} is required`;
      }

      // Contact number validation
      if (field.name === "contactnumber" && value) {
        const phoneRegex = /^[0-9]{10}$/; // Example for 10-digit number
        if (!phoneRegex.test(value)) {
          formErrors[field.name] = `${field.label} must be a valid 10-digit number`;
        }
      }
    });
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      console.log("Form submitted successfully:", formData);
      setErrors({});
      onSubmit(formData);
    }
  };

  return (
    <div className="form__container">
      <form onSubmit={handleSubmit}>
        {formConfig.map((field) => (
          <div key={field.name} className="input__field__wrapper">
            <label>{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
            />
            {errors[field.name] && (
              <p style={{ color: "red" }}>{errors[field.name]}</p>
            )}
          </div>
        ))}
        <Button text="Proceed" showArrow={true} type="submit" />
      </form>
    </div>
  );
}

export default DynamicForm;
