import React, { useState } from "react";
import AuthCode from "react-auth-code-input";
import Button from "./Button";
import toast, { Toaster } from "react-hot-toast";

function Verification({ dataForm, setConfirmation }) {
  const [result, setResult] = useState();
  const handleOnChange = (res) => {
    setResult(res);
  };
  const notify = () =>
    toast.error('this code is wrong  please  try code by "1234".');
  const notifyMessage = () =>
    toast.loading(
      'sorry  this feature is not complete   please  try code by "1234".'
    );

  const handleSubmit = (event) => {
    event.preventDefault();

    if (result === "1234") {
      setConfirmation(true);
    } else {
      notify();
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center flex-col gap-y-6"
    >
      <div className="mx-auto flex justify-center items-center p-3 border-[#F9F5FF] border-[10px] bg-[#F4EBFF] rounded-full  w-20 h-20">
        <img
          src="/icons/mail-01 (1).svg"
          alt="icon email"
          className=" w-12 h-12"
        />
      </div>
      <div className="flex justify-center flex-col text-center  gap-y-4">
        <h1 className="text-3xl leading-[1.2] text-[#101828]">
          Check your email
        </h1>
        <p className="leading-[1.5] text-[#475467]">
          We sent a verification code to{" "}
        </p>
        <p className="leading-[1.5] text-[#475467] mt-2">{dataForm?.['step1']['email']?dataForm['step1']['email']:"omarmouneer@gmail.com"} </p>
   
      </div>

      <AuthCode
        onChange={handleOnChange}
        allowedCharacters="numeric"
        length={4}
        containerClassName="flex w-full justify-center"
        inputClassName="w-16 h-16  active:border-primary  rounded-md mx-1 text-center border-[#D4D4D4] focus:border-primary focus-visible:outline-none focus:ring-primary focus:border-primary border-gray-300 border-2"
      />
      <Button title="Verify email" className="my-4" />
      <div className="flex   justify-center gap-x-2">
        Didn’t receive the email?
        <button
          type="button"
          onClick={notifyMessage}
          className="text-primary  font-medium"
         
        >
          Click to resend
        </button>
      </div>
      <Toaster position="top-center" />
    </form>
  );
}

export default Verification;
