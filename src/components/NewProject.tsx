import React, { forwardRef } from "react";
import Input from "./NewProject/Input";
import { InputsRef } from "src/App";
import Button from "./StyledComponents/Button";

type Props = {
  cancelProjectHandler: (event: React.FormEvent) => void;
  saveProjectHandler: (event: React.FormEvent) => void;
};

const NewProject = forwardRef(
  ({ cancelProjectHandler, saveProjectHandler }: Props, ref) => {
    const inputRef = ref as React.RefObject<InputsRef>;
    return (
      <form
        className="flex-1 flex-col mt-10 pt-24 pl-10 pr-36 mr-6 justify-start items-start"
        onSubmit={saveProjectHandler}
      >
        {/* Buttons */}
        <div className="flex flex-row mb-2.5 justify-end items-center">
          <Button button="cancel" onClick={cancelProjectHandler}>
            Cancel
          </Button>
          <Button button="save">Save</Button>
        </div>
        {/* Inputs */}
        <div className="flex flex-col gap-4">
          <Input
            label="Title"
            type="text"
            ref={(el: HTMLInputElement) => {
              inputRef.current!.title = el;
            }}
          />
          <Input
            label="Description"
            type="textarea"
            ref={(el: HTMLTextAreaElement) => {
              inputRef.current!.description = el;
            }}
          />
          <Input
            label="Date"
            type="date"
            ref={(el: HTMLInputElement) => {
              inputRef.current!.date = el;
            }}
          />
        </div>
      </form>
    );
  }
);

export default NewProject;
