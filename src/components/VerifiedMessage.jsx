import React from "react";
import Button from "./Button";

function VerifiedMessage({ nextStep }) {
  return (
    <div className="flex justify-center flex-col gap-y-6">
      <div className="mx-auto flex justify-center items-center p-3 border-[#ECFDF3] border-[10px] bg-[#D1FADF] rounded-full  w-20 h-20">
        <img
          src="/icons/check-circle.svg"
          alt="icon email"
          className=" w-12 h-12"
        />
      </div>
      <div className="flex justify-center flex-col text-center  gap-y-4">
        <h1 className="text-3xl leading-[1.2] text-[#101828]">
          Email verified
        </h1>
        <p className="leading-[1.5] text-[#475467]">
          Your account has been verified successfully. Click below to setup your
          store.
        </p>
      </div>
      <Button
        title="Continue"
        type={"button"}
        handleSubmit={nextStep}
        className="my-4"
      />
    </div>
  );
}

export default VerifiedMessage;
