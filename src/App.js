import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import React, { useState } from "react";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import Final from "./components/Final";
import Alert from "./components/Alert";
import About from "./components/About";
import Events from "./components/Events";
import Teams from "./components/Teams";


import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };
  const [step, setstep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    city: "",
    passion: "",
    experience: "",
    director: "",
    actor: "",
    cinematographer: "",
    film: "",
    miscellaneous: "",
  });

  // function for going to next step by increasing step state by 1
  const nextStep = () => {
    setstep(step + 1);
  };

  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    setstep(step - 1);
  };

  const handleInputData = (input) => (e) => {
    // input value from the form
    const { value } = e.target;
    //updating for data state taking previous state and then adding new value to create new object
    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  // switch (step) {
  //   case 1:
  return (
    <div className={darkMode ? "bg-color-dark font-white" : "bg-color "}>
      <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
      <Alert alert={alert} />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Sidebar darkMode={darkMode} />
        <Routes>
          <Route path="/" element={<Teams />} />
          <Route path="/About" element={<About />} />
          <Route
            path="/StepOne"
            element={
              <StepOne
                nextStep={nextStep}
                handleFormData={handleInputData}
                values={formData}
                darkMode={darkMode}
                showAlert={showAlert}
              />
            }
          />
          <Route
            path="/StepTwo"
            element={
              <StepTwo
                nextStep={nextStep}
                prevStep={prevStep}
                handleFormData={handleInputData}
                values={formData}
                darkMode={darkMode}
                showAlert={showAlert}
              />
            }
          />
          <Route
            path="/Final"
            element={
              <Final
                prevStep={prevStep}
                values={formData}
                darkMode={darkMode}
              />
            }
          />
          <Route path="/events" element={<Events />} />
          <Route path="/Teams" element={<Teams  darkMode={darkMode}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );

}


export default App;
