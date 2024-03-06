import React from "react";
import { Project } from "src/App";

interface Props {
  project: Project;
  deleteProjectHandler: (projectId: string) => void;
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
};

const ProjectInfo: React.FC<Props> = ({ project, deleteProjectHandler }) => {
  return (
    <div className="flex flex-col gap-4 mb-2">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-projectTitle font-bold text-4xl">
          {project.title}
        </h1>
        <button
          className="text-projectDelete font-semibold text-xl mt-2.5 hover:text-projectItemDeleteHover"
          onClick={() => deleteProjectHandler(project.id)}
        >
          Delete
        </button>
      </div>
      <time
        dateTime={project.date}
        className="text-projectDate font-medium text-xl"
      >
        {formatDate(project.date ?? "")}
      </time>
      <p className="text-projectDescription border-b-2 border-projectDescriptionBorderBottom pb-5 text-lg font-medium whitespace-pre-line">
        {project.description}
      </p>
    </div>
  );
};

export default ProjectInfo;
