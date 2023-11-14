import React from "react";

function Layout({ step, children }) {
  return (
    <div className=" relative w-full grid md:grid-cols-2">
      <div className="relative p-6 px-[5%] grid content-between">
        <div className="  header steps space-y-8">
          <img src="/assets/logo.png" alt="logo" className="w-24" />
        </div>
        <div className="w-full max-w-md">{children}</div>
        <div className="footer flex justify-between items-center">
          <span> © Markatty|Mo7med {new Date().getFullYear()}</span>
          <a
            href={"mailto:support@markatty.com"}
            className="flex items-center gap-4"
          >
            <img src="/icons/mail-01.svg" alt="mail" />
            support@markatty.com
          </a>
        </div>
      </div>
      <div className="relative min-h-screen bg-primary  overflow-hidden">
        <img
          src="/assets/background.png"
          alt="Background"
          className=" bg-center bg-no-repeat w-auto min-h-screen "
        />
        <div className=" absolute  inset-0 bg-gradient-to-tr from-black/70   to-white/5  flex items-center justify-center ">
          <div className="w-[80%] max-w-xl text-white font-medium gap-8">
            <img
              src={
                step === 1
                  ? "/assets/Stars.svg"
                  : step === 2
                  ? "/assets/Frame.svg"
                  : step === 3 && "/assets/Frame2.svg"
              }
              alt="Stars"
              className="mb-2"
            />
            <h1 className=" text-6xl leading-[1.2] ">
              {step === 1
                ? "Start turning your ideas into reality."
                : step === 2
                ? "Verify your account now"
                : step === 3 && "Setup your store the way you like"}
            </h1>
            <p className="text-lg leading-[1.5]">
              Create a free account and get full access to all features for
              30-days. No credit card needed. Get started in 2 minutes.
            </p>
          </div>
        </div>
      </div>
      <img src="/assets/Vector.svg" alt="step arrow icon " 
      className="absolute left-[50%] translate-x-[-50%] bottom-[7%]" />
    </div>
  );
}

export default Layout;
