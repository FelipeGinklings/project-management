import React from "react";

type Props = {
  id: string;
  tasks: string[];
  addTaskHandler: (projectId: string, task: string) => void;
  clearTaskHandler: (projectId: string, index: number) => void;
};

const Tasks: React.FC<Props> = ({
  id,
  tasks,
  addTaskHandler,
  clearTaskHandler,
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleAddTask = () => {
    const task = inputRef.current?.value;
    if (task) {
      addTaskHandler(id, task);
      inputRef.current!.value = "";
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-projectTitle font-bold text-3xl">Tasks</h1>
      <p>
        <input
          ref={inputRef}
          type="text"
          className="bg-projectInput p-1.5 w-80 mr-4 font-medium text-lg rounded-sm"
        />
        <button
          className="text-projectAdd hover:text-projectAddHover font-medium text-xl"
          onClick={handleAddTask}
        >
          Add Task
        </button>
      </p>
      <ul className="flex flex-col bg-projectItems px-6 py-8 mt-4 rounded-lg max-h-screen">
        {tasks.length > 0 &&
          tasks.map((task, index) => (
            <li
              key={index}
              className="flex flex-row justify-between font-medium text-lg my-2"
            >
              {task}
              <button
                className="text-projectItemClear hover:text-projectItemClearHover"
                onClick={() => clearTaskHandler(id, index)}
              >
                Clear
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Tasks;
