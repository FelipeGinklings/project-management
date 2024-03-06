import { forwardRef } from "react";

type Props = {
  label: string;
  type: "text" | "date" | "textarea";
};

const Input = forwardRef(({ label, type }: Props, ref) => {
  const inputStyle =
    "bg-formInput border-b-2 border-formInputBottomBorder outline-none focus:border-formInputBottomBorderFocus py-1.5 rounded-sm text-formInputText font-medium text-xl px-2.5";
  return (
    <p className="flex flex-col gap-1">
      <label className="text-formLabel uppercase font-bold">{label}</label>
      {type === "textarea" ? (
        <textarea
          ref={ref as React.RefObject<HTMLTextAreaElement>}
          className={inputStyle}
        ></textarea>
      ) : (
        <input
          ref={ref as React.RefObject<HTMLInputElement>}
          type={type}
          className={inputStyle}
        />
      )}
    </p>
  );
});

export default Input;
