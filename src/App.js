import React, { useState } from "react";
import "./index.css";
import Layout from "./components/Layout";

const App = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const previousStep = () => {
    setStep(step - 1);
  };

  return (
    <Layout
      className=" min-h-screen !text-black"
      step={step}
      nextStep={nextStep}
      previousStep={previousStep}
      
    >
       <div className="w-full max-w-md ">
    {step === 1 && (
      <div>
        <h1 className="text-3xl font-bold mb-5">Basic Information</h1>
        {/* Input fields for name, email, phone number, and password */}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={nextStep}>
          Next
        </button>
      </div>
    )}
    {step === 2 && (
      <div>
        <h1 className="text-3xl font-bold mb-5">Confirm Email</h1>
        {/* Input fields for email verification code */}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={nextStep}>
          Verify
        </button>
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={previousStep}>
          Back
        </button>
      </div>
    )}
    {step === 3 && (
      <div>
        <h1 className="text-3xl font-bold mb-5">Set Store Main Info</h1>
        {/* Input fields for store name, store URL, store language, and store industry */}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Complete
        </button>
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={previousStep}>
          Back
        </button>
      </div>
    )}
  </div>
    </Layout>
  );
};

export default App;
