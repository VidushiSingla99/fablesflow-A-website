import React, { useState } from "react";
import {createBrowserHistory} from 'history';
import {Link} from "react-router-dom";

const StepTwo = ({ nextStep, handleFormData, prevStep, values, darkMode, showAlert }) => {
  const browserHistory = createBrowserHistory();
  console.log("f");
  const [error, setError] = useState(false);
  const submitFormData = (e) => {
    e.preventDefault();
    if (
        values.director!=="" &&
        values.actor!=="" &&
        values.cinematographer!=="" &&
        values.film!=="" &&
        values.miscellaneous!==""
    ) {
      showAlert("Lets display all your entries","success");
      browserHistory.push('/Final');

    } else {
      setError(true);
    }
  };
  return (
    <div className= {darkMode ? 'entry-form-dark col-8 offset-lg-1 mt-5' : "entry-form col-8 offset-lg-1 mt-5"}>
      <div className="form-header py-3">We want to know you better</div>
      <form onSubmit={submitFormData}>
        <div className="pb-3 mb-2">
          <label htmlFor="director">Who is your favourite Director</label>
          <input
            type="text"
            className="form-control"
            defaultValue={values.director}
            id="director"
            onChange={handleFormData("director")}
            name="director"
            placeholder="Enter director"
          />
          {error ? (
                <div style={{ color: "red" }}>
                  This is a required field
                </div>
              ) : (
                ""
              )}
        </div>
        <div className="mb-4">
          <label htmlFor="actor">Who is your favourite Actor</label>
          <input
            type="text"
            className="form-control"
            id="actor"
            defaultValue={values.actor}
            onChange={handleFormData("actor")}
            name="actor"
            placeholder="Actor"
          />
          {error ? (
                <div style={{ color: "red" }}>
                  This is a required field
                </div>
              ) : (
                ""
              )}
        </div>
        <div className="mb-4">
          <label htmlFor="cinematographer">Who is your favourite Cinematographer</label>
          <input
            type="text"
            className="form-control"
            id="cinematographer"
            defaultValue={values.cinematographer}
            onChange={handleFormData("cinematographer")}
            name="cinematographer"
            placeholder="Cinematographer"
          />
          {error ? (
                <div style={{ color: "red" }}>
                  This is a required field
                </div>
              ) : (
                ""
              )}
        </div>
        <div className="mb-4">
          <label htmlFor="film">
            Which is your favourite film?
          </label>
          <input
            type="text"
            className="form-control"
            id="film"
            defaultValue={values.film}
            onChange={handleFormData("film")}
            name="film"
            placeholder="film"
          />
          {error ? (
                <div style={{ color: "red" }}>
                  This is a required field
                </div>
              ) : (
                ""
              )}
        </div>
        <div className="mb-4">
          <label htmlFor="miscellaneous">
          Any two cents?
          </label>
          <input
            type="text"
            className="form-control"
            id="miscellaneous"
            defaultValue={values.miscellaneous}
            onChange={handleFormData("miscellaneous")}
            name="miscellaneous"
            placeholder="miscellaneous"
          />
          {error ? (
                <div style={{ color: "red" }}>
                  This is a required field
                </div>
              ) : (
                ""
              )}
        </div>
        <div className="pt-4 d-flex justify-content-between">
          <button className="form-button mb-3 px-4" type="submit" onClick={prevStep}>
          <Link to="/StepOne">PREV</Link>
          </button>
          <button className="form-button mb-3 px-4" type="submit">
          <Link to="/Final">DISPLAY ENTRIES</Link>

          </button>
        </div>
      </form>
    </div>
  );
};
export default StepTwo;

// Form.propTypes = {
//   title: PropTypes.string.isRequired,
// };
