import React from "react";
import {Link} from "react-router-dom";

const Final = ({ prevStep, values, darkMode }) => {
    //destructuring the object from values
  const { email, city, passion, experience, director, actor, cinematographer, film, miscellaneous } = values;
  return (
    <>
    <div className= {darkMode ? 'entry-form-dark col-8 offset-lg-3 mt-5' : "entry-form col-8 offset-lg-3 mt-5"}>
          <p>
            <strong>Email :</strong> {email}{" "}
          </p>
          <p>
            <strong>City :</strong> {city}{" "}
          </p>
          <p>
            <strong>Passion :</strong> {passion}{" "}
          </p>
          <p>
            <strong>Experience :</strong> {experience}{" "}
          </p>
          <p>
            <strong>Director :</strong> {director}{" "}
          </p>
          <p>
            <strong>Actor :</strong> {actor}{" "}
          </p>
          <p>
            <strong>Film :</strong> {film}{" "}
          </p>
          <p>
            <strong>Cinematographer :</strong> {cinematographer}{" "}
          </p>
          <p>
            <strong>Miscellaneous Information :</strong> {miscellaneous}{" "}
          </p>
          <div className="pt-4 d-flex justify-content-between">
          <button className="form-button mb-3 px-4" type="submit" onClick={prevStep}>
          <Link to="/StepTwo">PREV</Link>
          </button>
          <button className="form-button mb-3 px-4" type="submit">
            SUBMIT
          </button>
        </div>
          </div>
    </>
  );
};

export default Final;