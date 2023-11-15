import React from "react";

function Button({ handleSubmit, title, type }) {
  return (
    <div>
  
      {type&&handleSubmit ? (
        <button
          type={type}
          onClick={handleSubmit}
          className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          {title}
        </button>
      ) : (
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          {title}
        </button>
      )}
    </div>
  );
}

export default Button;
