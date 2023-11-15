import React from "react";

function Stepper({ step }) {
  return (
    <div className="relative">
      <div className="absolute sm:px-20 sm:pl-24 pl-9 px-12 justify-center flex  w-full gap-x-1 top-2.5 -z-10">
        <div
          className={`flex-1 h-1 rounded-xl ${
            step === 2 || step === 3 ? "bg-primary " : "bg-[#F2F4F7]"
          }`}
        />

        <div
          className={`flex-1 h-1 rounded-xl ${
            step === 3 ? "bg-primary " : "bg-[#F2F4F7]"
          }`}
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col justify-center items-center  text-center gap-2">
          <img
            src={
              step === 1
                ? "/icons/Content (1).svg"
                : "/icons/_Step icon base.svg"
            }
            alt="_Step icon base (1)"
          />

          <h3
            className={`mt-4 font-semibold text-sm  ${
              step === 1 ? "text-primary" : "text-perGreen"
            }`}
          >
            Your details
          </h3>
          <p className="text-xs hidden  sm:block">Provide your basic information</p>
        </div>
        <div className="flex flex-col justify-center items-center  text-center gap-2">
          <img
            src={
              step === 1
                ? "/icons/_Step icon base (1).svg"
                : step === 2
                ? "/icons/Content (1).svg"
                : step === 3 && "/icons/_Step icon base.svg"
            }
            alt="_Step icon base (2)"
          />
          <h3
            className={`mt-4 font-semibold text-sm  ${
              step === 1
                ? "text-black"
                : step === 2
                ? "text-primary"
                : step === 3 && "text-perGreen"
            }`}
          >
            Confirmation
          </h3>
          <p className="text-xs hidden  sm:block">Confirm your email</p>
        </div>
        <div className="flex flex-col justify-center items-center  text-center gap-2">
          <img
            src={
              step <= 2
                ? "/icons/_Step icon base (1).svg"
                : "/icons/Content (1).svg"
            }
            alt="_Step icon base (3)"
          />
          <h3
            className={`mt-4 font-semibold text-sm  ${
              step <= 2 ? "text-black" : "text-primary"
            }`}
          >
           Store information
          </h3>
          <p className="text-xs hidden  sm:block">Set your store main info</p>
        </div>
      </div>
    </div>
  );
}

export default Stepper;
