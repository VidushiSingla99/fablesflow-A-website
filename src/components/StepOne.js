import React, { useState } from "react";
import {Link} from "react-router-dom";


  //creating error state for validation

const StepOne = ({ nextStep, handleFormData, values, darkMode}) => {

  const [error, setError] = useState(false);
  // after form submit validating the form data using validator
  const submitFormData = (e) => {

    e.preventDefault();
    // checking if value of first name and last name is empty show error else take to step 2
    if (
      values.email!=="" &&
      values.password!=="" &&
      values.city!==""&&
      values.passion!==""&&
      values.experience!==""
    ) {

      nextStep();

    } else {
      setError(true);
    }
  };
  return (
    <div className= {darkMode ? 'entry-form-dark col-8 offset-lg-1 mt-5' : "entry-form col-8 offset-lg-1 mt-5"}>
      <div className="form-header py-3">We want to know you better</div>
      <form onSubmit={submitFormData}>
        <div className="form-group">
          <label htmlFor="email_id">Email address</label>
          <input
            type="email"
            className="form-control"
            defaultValue={values.email}
            id="email_id"
            onChange={handleFormData("email")}
            name="email"
            placeholder="Enter email"
          />
          {error ? (
                <div style={{ color: "red" }}>
                  This is a required field
                </div>
              ) : (
                ""
              )}
        </div>
        <div className="form-group">
          <label htmlFor="password_id">Password</label>
          <input
            type="password"
            className="form-control"
            id="password_id"
            defaultValue={values.password}
            onChange={handleFormData("password")}
            name="password"
            placeholder="Password"
          />
          {error ? (
                <div style={{ color: "red" }}>
                  This is a required field
                </div>
              ) : (
                ""
              )}
        </div>
        <div className="form-group">
          <label htmlFor="city_id">City</label>
          <input
            type="text"
            className="form-control"
            id="city_id"
            defaultValue={values.city}
            onChange={handleFormData("city")}
            name="city"
            placeholder="City"
          />
          {error ? (
                <div style={{ color: "red" }}>
                  This is a required field
                </div>
              ) : (
                ""
              )}
        </div>
        <div className="form-group">
          <label htmlFor="passion_id">
            What would you like to do?
          </label>
          <input
            type="text"
            className="form-control"
            id="passion_id"
            defaultValue={values.passion}
            onChange={handleFormData("passion")}
            name="passion"
            placeholder="passion"
          />
          {error ? (
                <div style={{ color: "red" }}>
                  This is a required field
                </div>
              ) : (
                ""
              )}
        </div>
        <div className="form-group">
          <label htmlFor="experience_id">
            What is your previous experience?
          </label>
          <input
            type="text"
            className="form-control"
            id="experience_id"
            defaultValue={values.experience}
            onChange={handleFormData("experience")}
            name="experience"
            placeholder="experience"
          />
          {error ? (
                <div style={{ color: "red" }}>
                  This is a required field
                </div>
              ) : (
                ""
              )}
        </div>
        <div className="d-flex justify-content-end">
          <button className="form-button mb-3 px-4 mt-4">
          <Link to="/StepTwo">NEXT</Link>

          </button>
        </div>
      </form>
    </div>
  );
}
export default StepOne;

// Form.propTypes = {
//   title: PropTypes.string.isRequired,
// };
