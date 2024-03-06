import React, { useRef } from "react";
import Input from "./Input";
import { Project } from "src/App";

export type NewProject = {
  title: HTMLInputElement | null;
  description: HTMLInputElement | null;
  date: HTMLInputElement | null;
};

type Props = {
  cancelProjectHandler: (event: React.FormEvent) => void;
  saveProject: (project: Project) => void;
};

const NewProject: React.FC<Props> = ({ cancelProjectHandler, saveProject }) => {
  const inputRef = useRef<NewProject>({
    title: null,
    description: null,
    date: null,
  });

  const handleSaveProject = (event: React.FormEvent) => {
    event.preventDefault();
    event.cancelable = true;
    const project: Project = {
      id:
        Math.random().toString() +
        inputRef.current.title?.value +
        Date.now().toString(),
      title: inputRef.current.title?.value,
      description: inputRef.current.description?.value,
      date: inputRef.current.date?.value,
      tasks: [],
    };
    saveProject(project);
  };

  return (
    <form
      className="flex-1 flex-col mt-10 pt-24 pl-10 pr-36 mr-6 justify-start items-start"
      onSubmit={handleSaveProject}
    >
      {/* Buttons */}
      <div className="flex flex-row justify-end items-center">
        <button
          className="text-formCancel hover:text-formCancelHover font-semibold text-xl mb-5 px-6 py-2.5"
          onClick={cancelProjectHandler}
        >
          Cancel
        </button>
        <button className="text-menuHoverTextItem bg-formSave hover:bg-formSaveHover rounded-lg text-xl mb-5 px-6 py-2.5">
          Save
        </button>
      </div>
      {/* Inputs */}
      <div className="flex flex-col gap-4">
        <Input
          label="Title"
          type="text"
          ref={(el: HTMLInputElement | null) => (inputRef.current.title = el)}
        />
        <Input
          label="Description"
          type="textarea"
          ref={(el: HTMLInputElement | null) =>
            (inputRef.current.description = el)
          }
        />
        <Input
          label="Date"
          type="date"
          ref={(el: HTMLInputElement | null) => (inputRef.current.date = el)}
        />
      </div>
    </form>
  );
};

export default NewProject;
