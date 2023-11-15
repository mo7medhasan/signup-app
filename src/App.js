import React, { useState } from "react";
import "./index.css";
import Layout from "./components/Layout";
import Step1Details from "./components/Step1Details";
import Step2Confirmation from "./components/Step2Confirmation";
import Step3StoreInformation from "./components/Step3StoreInformation";

const App = () => {
  const [step, setStep] = useState(1);
  const [dataForm, setDataForm] = useState({});
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
      setStep={setStep}
      nextStep={nextStep}
      previousStep={previousStep}
    >
      <div className="w-full max-w-sm mx-auto flex flex-col justify-center ">
        {step === 1 && (
          <div>
            <Step1Details
              dataForm={dataForm}
              setDataForm={setDataForm}
              nextStep={nextStep}
            />
          </div>
        )}
        {step === 2 && (
          <div>
            <Step2Confirmation
              dataForm={dataForm}
              nextStep={nextStep}
              previousStep={previousStep}
            />
          </div>
        )}
        {step === 3 && (
          <div>
            <Step3StoreInformation
              dataForm={dataForm}
              setDataForm={setDataForm}
              previousStep={previousStep}
            />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default App;
