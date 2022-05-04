
import { useState } from "react";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import Final from './components/Final';

function Form(){
    const [step, setstep] = useState(1);
    const [formData , setFormData] = useState({
      email: '',
      password: '',
      city: '',
      passion:'',
      experience:'',
      director:'',
      actor:'',
      cinematographer:'',
      film:'',
      miscellaneous:''
      })

  // function for going to next step by increasing step state by 1
  const nextStep = () => {
    setstep(step + 1);
  };

  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    setstep(step - 1);
  };

  const handleInputData = input => e => {
    // input value from the form
    const {value } = e.target;

    //updating for data state taking previous state and then adding new value to create new object
    setFormData(prevState => ({
      ...prevState,
      [input]: value
  }));
  }
  console.log("Form step 1 entered")
  switch (step) {
    case 1:
      console.log("Form step 1 entered")
      return (
      <StepOne nextStep={nextStep} handleFormData={handleInputData} values={formData} />
      );
    case 2:
      return (

      <StepTwo nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
      );
    case 3:
      return (
      <Final values={formData}  />
      );
    default:
      return (
        <div></div>
      );
      }}

export default Form;