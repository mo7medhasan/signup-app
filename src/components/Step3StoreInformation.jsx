import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";
import Select from "./Select";
import SelectCustom from "./SelectCustom";
import InputCustom from "./InputCustom";
const options = [
  { value: "English", label: "English", image: "/assets/Usa.jpg" },
  { value: "Arabic", label: "Arabic", image: "/assets/Egypt.jpg" },
];
const options2 = [
  { value: "Baby' fashion", label: "Baby' fashion" },
  { value: "Boys' fashion", label: "Boys' fashion" },
  { value: "Girls' fashion,", label: "Girls' fashion," },
  { value: "Men's fashion", label: "Men's fashion" },
];
function Step3StoreInformation({ dataForm, setDataForm, previousStep }) {
  const [selected, setSelected] = useState(options[0]);
  const [selectedOption, setSelectedOption] = useState(options2[0]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
   
    setDataForm((prev) => ({
      ...prev,
      step2: {
        ...data,
        language: selected.value,
        industry: selectedOption.value,
      },
    }));

    console.log(dataForm);
  };

  return (
    <div>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <InputCustom
          name={"StoreName"}
          placeholder={"Type your store name"}
          title={"Store name"}
          register={register}
          type={"text"}
          message={
            errors.StoreName && (
              <span className="text-red-500">{errors.StoreName?.message}</span>
            )
          }
        />
        <div>
          <label
            htmlFor="StoreURL"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Store URL
          </label>
          <div className="mt-2 flex rounded-md shadow-sm">
            <input
              type="text"
              {...register("StoreURL")}
              name="StoreURL"
              id="StoreURL"
              className="block w-full bg-[#F9FAFB] min-w-0 flex-1 outline-none rounded-none rounded-l-md border-0 px-3 py-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              placeholder="mystore"
            />{" "}
            <span className="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-3 text-gray-500 sm:text-sm">
              .markatty.com
            </span>
          </div>
        </div>
        <Select data={options} selected={selected} setSelected={setSelected} />
        <SelectCustom
          data={options2}
          selected={selectedOption}
          setSelected={setSelectedOption}
        />
        <Button title="Save" className="mb-4" />
      </form>{" "}
      <button
        onClick={previousStep}
        className="mt-8 mx-auto flex justify-center font-semibold items-center  text-[#475467]"
      >
        <img src="/icons/arrow-left.svg" alt="icon arrow" /> Back to log in
      </button>
    </div>
  );
}

export default Step3StoreInformation;
