import { forwardRef } from "react";

type Props = {
  label: string;
  type: "text" | "date" | "textarea";
};

const Input = forwardRef(({ label, type }: Props, ref) => {
  return (
    <p className="flex flex-col gap-1">
      <label className="text-lg text-stone-500 uppercase font-bold">
        {label}
      </label>
      {type === "textarea" ? (
        // Textarea input for description
        <textarea
          ref={ref as React.RefObject<HTMLTextAreaElement>}
          className={
            "w-full bg-stone-200 border-b-2 border-stone-300 outline-none focus:border-stone-800 p-1 rounded-sm text-stone-600 font-medium text-xl px-2.5"
          }
        ></textarea>
      ) : (
        // Text input for title and date
        <input
          ref={ref as React.RefObject<HTMLInputElement>}
          type={type}
          className={
            "bg-stone-200 border-b-2 border-stone-400 focus:outline-none focus:border-stone-800 py-1.5 rounded-sm text-stone-600 font-medium text-xl px-2.5"
          }
        />
      )}
    </p>
  );
});

export default Input;
