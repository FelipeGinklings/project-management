import React from "react";
import logo from "../assets/no-projects.png";
import Button from "./StyledComponents/Button";

type Props = {
  newProjectHandler: () => void;
};

const NoProjects: React.FC<Props> = ({ newProjectHandler }) => {
  return (
    <section className="flex flex-col mt-10 justify-start mx-auto items-center pt-32">
      <img src={logo} alt="logo" className="w-20 h-20" />
      <h1 className="text-stone-600 font-bold text-2xl my-4">
        No Project Selected
      </h1>
      <p className="text-stone-500 text-xl mb-8">
        Select a project or get started with a new one
      </p>
      <Button onClick={newProjectHandler}>Create new project</Button>
    </section>
  );
};

export default NoProjects;
