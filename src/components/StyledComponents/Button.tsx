import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  button?: "save" | "cancel";
}

const Button: React.FC<Button> = ({ children, button, ...props }) => {
  return (
    <>
      {!button ? (
        <button
          {...props}
          className="text-stone-400 hover:text-stone-300 bg-stone-800 hover:bg-stone-700 rounded-md text-xl px-5 py-2.5"
        >
          {children}
        </button>
      ) : (
        <button
          {...props}
          className={`text-xl px-5 py-2.5 ${
            button === "save"
              ? "bg-stone-900 hover:bg-stone-800 text-stone-100 hover:text-stone-300 rounded-lg"
              : "text-stone-500 hover:text-stone-700 font-semibold"
          }`}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
