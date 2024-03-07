import React from "react";
import { Project as SingleProject } from "src/App";

interface Props {
  project: SingleProject;
  deleteProjectHandler: (projectId: string) => void;
  addTaskHandler: (projectId: string, task: string) => void;
  clearTaskHandler: (projectId: string, index: number) => void;
}
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
};

const Project: React.FC<Props> = ({
  project,
  deleteProjectHandler,
  addTaskHandler,
  clearTaskHandler,
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleAddTask = () => {
    const task = inputRef.current?.value;
    if (task) {
      addTaskHandler(project.id, task);
      inputRef.current!.value = "";
    }
  };

  return (
    <section className="flex flex-1 flex-col gap-4 justify-start mr-6 pt-20 pl-10 pr-36 ">
      {/* Project Info */}
      <div className="flex flex-col gap-4 mb-2">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-stone-700 font-bold text-3xl">{project.title}</h1>
          <button
            className="text-stone-700 hover:text-red-700 font-semibold text-xl mt-2.5"
            onClick={() => deleteProjectHandler(project.id)}
          >
            Delete
          </button>
        </div>
        <time
          dateTime={project.date}
          className="text-stone-400 font-medium text-xl"
        >
          {formatDate(project.date ?? "")}
        </time>
        <p className="text-stone-500 border-b-2 border-stone-300 pb-5 text-lg font-medium whitespace-pre-line">
          {project.description}
        </p>
      </div>

      {/* Tasks */}
      <div className="flex flex-col gap-5">
        <h1 className="text-stone-700 font-bold text-3xl">Tasks</h1>
        <p>
          <input
            ref={inputRef}
            type="text"
            className="bg-stone-200 p-1.5 w-80 mr-4 font-medium text-lg rounded-sm"
          />
          <button
            className="text-stone-600 hover:text-stone-950 font-medium text-xl"
            onClick={handleAddTask}
          >
            Add Task
          </button>
        </p>
        <ul className="flex flex-col bg-stone-100 px-6 py-8 mt-4 rounded-lg max-h-screen">
          {project.tasks.length > 0 &&
            project.tasks.map((task, index) => (
              <li
                key={index}
                className="flex flex-row justify-between font-medium text-lg my-2"
              >
                {task}
                <button
                  className="text-stone-500 hover:text-red-700"
                  onClick={() => clearTaskHandler(project.id, index)}
                >
                  Clear
                </button>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default Project;
