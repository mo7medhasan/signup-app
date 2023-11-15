import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
function InputPhone({
  title,
  pattern,
  placeholder,
  name,
  setValue,
  value,
  type,
  required,
  message,
  ...props
}) {
  return (
    <div className="">
      <label
        htmlFor={name}
        className="capitalize font-medium text-sm  text-black"
      >
        {title}
        {required && "*"}
      </label>
      <PhoneInput
        country={"eg"}
        name={name}
        id={name}
        inputProps={{
    name: name,
    required: true,
    autoFocus: true
  }}
        required={required}
        value={value}
        onChange={(event) => setValue((prev) => ({ ...prev, [name]: event }))}
        classNames={{ containerClass: "!w-full flex-1" }}
        placeholder="171 220 148 39"
        className="  mt-2 rounded-lg  w-full"
      />
         {message&&( <p className="mt-2 text-sm text-red-600" >
      {message}
      </p>)}
    </div>
  );
}

export default InputPhone;
