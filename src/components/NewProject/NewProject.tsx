import { RefObject, forwardRef } from "react";
import Input from "./Input";
import { InputsRef } from "src/App";
import Button from "../StyledComponents/Button";

type Props = {
  cancelProjectHandler: () => void;
  saveProjectHandler: () => void;
};

const NewProject = forwardRef(
  ({ cancelProjectHandler, saveProjectHandler }: Props, ref) => {
    return (
      <section className="w-[46rem] mt-16 justify-start items-start">
        {/* Buttons */}
        <div className="flex flex-row mb-2.5 justify-end items-center">
          <Button button="cancel" onClick={cancelProjectHandler}>
            Cancel
          </Button>
          <Button button="save" onClick={saveProjectHandler}>
            Save
          </Button>
        </div>
        {/* Inputs */}
        <div className="flex flex-col gap-4">
          <Input
            label="Title"
            type="text"
            ref={(el: HTMLInputElement) => {
              (ref as RefObject<InputsRef>).current!.title = el;
            }}
          />
          <Input
            label="Description"
            type="textarea"
            ref={(el: HTMLTextAreaElement) => {
              (ref as RefObject<InputsRef>).current!.description = el;
            }}
          />
          <Input
            label="Due Date"
            type="date"
            ref={(el: HTMLInputElement) => {
              (ref as RefObject<InputsRef>).current!.dueDate = el;
            }}
          />
        </div>
      </section>
    );
  }
);

export default NewProject;
