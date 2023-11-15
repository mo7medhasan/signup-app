import React, { useState } from "react";
import Verification from "./Verification";
import VerifiedMessage from "./VerifiedMessage";
function Step2Confirmation({ dataForm, nextStep, previousStep }) {


  const [confirmation, setConfirmation] = useState(false);


  return (
    <div>
      <div className="space-y-6  ">
        {confirmation ? (
          <VerifiedMessage nextStep={nextStep} />
        ) : (
          <Verification dataForm={dataForm} setConfirmation={setConfirmation} />
        )}
        <button
          onClick={previousStep}
          className=" mx-auto flex justify-center font-semibold items-center  text-[#475467]"
        >
          <img src="/icons/arrow-left.svg" alt="icon arrow" /> Back to log in
        </button>
      </div>
    </div>
  );
}

export default Step2Confirmation;
