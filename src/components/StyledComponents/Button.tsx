import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  button?: "save" | "cancel";
}

const Button: React.FC<Button> = ({ children, button, ...props }) => {
  return (
    <>
      {!button ? (
        // Default button
        <button
          {...props}
          className="text-stone-400 hover:text-stone-100 bg-stone-700 hover:bg-stone-600 rounded-md text-xl md:text-2xl px-6 py-2.5"
        >
          {children}
        </button>
      ) : (
        // Save or Cancel button
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
