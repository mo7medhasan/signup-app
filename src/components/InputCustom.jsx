import React from "react";

function InputCustom(
  { title, pattern,register, placeholder, name, setValue,value, type, required,message,...props },
  
) {
  return (
    <div >
      <label htmlFor={name} className="capitalize font-medium text-sm  text-black">
        {title}
        {required && "*"}
      </label>
      <input
      {...props}
        type={type}
        name={name}
        id={name}
        {...register(name)}
        required={required}
        placeholder={placeholder}
        pattern={pattern}
     
        className="w-full mt-2 px-3 py-2.5 bg-[#F9FAFB] focus-visible:outline-none focus-visible:ring-inset focus-visible:ring-primary focus-visible:border-0  rounded-lg   block border-0 focus:border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
      />
      {message&&( <p className="mt-2 text-sm text-gray-500" >
      {message}
      </p>)}
    </div>
  );
}

export default InputCustom;
