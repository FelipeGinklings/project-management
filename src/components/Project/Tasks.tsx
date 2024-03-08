import React, { forwardRef } from "react";
import { Project } from "src/App";

type Props = {
  project: Project;
  addTaskHandler: (projectId: string, task: string) => void;
  clearTaskHandler: (projectId: string, index: number) => void;
};

const Tasks: React.FC<Props> = forwardRef(
  ({ project, addTaskHandler, clearTaskHandler }) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const handleAddTask = () => {
      const task = inputRef.current?.value;
      if (task) {
        addTaskHandler(project.id, task);
        inputRef.current!.value = "";
      }
    };

    return (
      <>
        {/* Tasks */}
        <div className="flex flex-col gap-5">
          <h1 className="text-stone-700 font-bold text-4xl">Tasks</h1>
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
          {project.tasks.length > 0 && (
            <ul className="flex flex-col bg-stone-100 px-6 py-8 mt-4 rounded-lg max-h-screen">
              {project.tasks.map((task, index) => (
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
          )}
        </div>
      </>
    );
  }
);

export default Tasks;
