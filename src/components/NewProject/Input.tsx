import { forwardRef } from "react";

type Props = {
  label: string;
  type: "text" | "date" | "textarea";
};

const Input = forwardRef(({ label, type }: Props, ref) => {
  return (
    <p className="flex flex-col gap-1">
      <label className="text-stone-600 uppercase font-bold">{label}</label>
      {type === "textarea" ? (
        <textarea
          ref={ref as React.RefObject<HTMLTextAreaElement>}
          className={
            "bg-stone-200 border-b-2 border-stone-400 outline-none focus:border-stone-800 py-1.5 rounded-sm text-stone-600 font-medium text-xl px-2.5"
          }
        ></textarea>
      ) : (
        <input
          ref={ref as React.RefObject<HTMLInputElement>}
          type={type}
          className={
            "bg-stone-200 border-b-2 border-stone-400 outline-none focus:border-stone-800 py-1.5 rounded-sm text-stone-600 font-medium text-xl px-2.5"
          }
        />
      )}
    </p>
  );
});

export default Input;
