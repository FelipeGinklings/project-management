import React from "react";
import logo from "../assets/no-projects.png";

type Props = {
  newProjectHandler: () => void;
};

const NoProjects: React.FC<Props> = ({ newProjectHandler }) => {
  return (
    <section className="flex flex-col mt-20 justify-start mx-auto items-center pt-32">
      <img src={logo} alt="logo" className="w-20 h-20" />
      <h1 className="text-noProjectTitle font-bold text-2xl my-4">
        No Project Selected
      </h1>
      <p className="text-noProjectParagraph text-xl mb-8">
        Select a project or get started with a new one
      </p>
      <button
        onClick={newProjectHandler}
        className="text-noProjectParagraph hover:text-noProjectButtonTextHover bg-noProjectButton hover:bg-noProjectButtonHover rounded-md text-xl mb-10 px-5 py-2.5"
      >
        Create new project
      </button>
    </section>
  );
};

export default NoProjects;
