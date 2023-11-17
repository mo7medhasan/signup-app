import React, { useEffect, useState } from "react";
import Input from "./Input";
import InputPhone from "./InputPhone";
import Button from "./Button";
function Step1Details({ dataForm, setDataForm, nextStep }) {
  const [data, setData] = useState({});
  const [messagePhone, setMessagePhone] = useState(false);

  useEffect(() => {
    dataForm["step1"]?.length> 0&& !data.length  && setData(dataForm["step1"]);
  }, [data.length, dataForm]);

  const handleSubmit = (event) => {

    event.preventDefault();
    setMessagePhone(false)

    if(data["PhoneNumber"]?.length>10){
    setDataForm((prev) => ({ ...prev, step1: data }));
    nextStep();
}else{
    setMessagePhone(true)
}
  };
  return (
    <div>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <Input
          name={"name"}
          placeholder={"Enter your name"}
          required={true}
          title={"Name"}
          value={data["name"]}
          setValue={setData}
          type={"text"}
        />
        <Input
          name={"email"}
          placeholder={"Enter your email"}
          required={true}
          title={"Email"}
          value={data["email"]}
          setValue={setData}
          type={"email"}
        />
        <InputPhone
          name={"PhoneNumber"}
          required={true}
          title={"Phone Number"}
          value={data["PhoneNumber"]}
          setValue={setData}
          message={messagePhone&&"please add your phone number"}
        />
        <Input
          name={"password"}
          placeholder={"Create a password"}
          required={true}
          title={"Password"}
          value={data["password"]}
          setValue={setData}
          type={"password"}
          message={"Must be at least 8 characters."}
        />
        <Button title="Get started" className="mb-4" />
        <div className="flex   justify-center space-x-1">
          Already have an account?
          <button className="text-primary  font-medium" >
            Log in
          </button>
        </div>
        <div className="flex justify-center space-x-3">
          عربى <img src="/icons/languageIcon.svg" alt="icon" />
        </div>
      </form>
    </div>
  );
}

export default Step1Details;
