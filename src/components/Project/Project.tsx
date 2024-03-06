import React from "react";
import Tasks from "./Tasks";
import ProjectInfo from "./ProjectInfo";
import { Project as SingleProject } from "src/App";

interface Props {
  project: SingleProject;
  deleteProjectHandler: (projectId: string) => void;
  addTaskHandler: (projectId: string, task: string) => void;
  clearTaskHandler: (projectId: string, index: number) => void;
}

const Project: React.FC<Props> = ({
  project,
  deleteProjectHandler,
  addTaskHandler,
  clearTaskHandler,
}) => {
  return (
    <section className="flex flex-1 flex-col gap-4 justify-start mt-10 mr-6 pt-20 pl-10 pr-36 ">
      <ProjectInfo
        project={project}
        deleteProjectHandler={() => deleteProjectHandler(project.id)}
      />
      <Tasks
        id={project.id}
        tasks={project.tasks}
        addTaskHandler={addTaskHandler}
        clearTaskHandler={clearTaskHandler}
      />
    </section>
  );
};

export default Project;
