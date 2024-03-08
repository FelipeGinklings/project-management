import React from "react";
import logo from "../../assets/no-projects.png";
import Button from "../StyledComponents/Button";

type Props = {
  newProjectHandler: () => void;
};

const NoProjects: React.FC<Props> = ({ newProjectHandler }) => {
  return (
    <section className="mt-24 text-center w-2/3">
      <img src={logo} alt="logo" className="w-20 h-20 object-contain mx-auto" />
      <h1 className="text-stone-500 font-bold text-3xl my-4">
        No Project Selected
      </h1>
      <p className="text-stone-400 text-2xl mb-4">
        Select a project or get started with a new one
      </p>
      <p className="mt-8">
        <Button onClick={newProjectHandler}>Create new project</Button>
      </p>
    </section>
  );
};

export default NoProjects;
