import React, { useRef, useState } from "react";
import Menu from "./components/Menu/Menu";
import NoProjects from "./components/NoProjects/NoProjects";
import Project from "./components/Project/Project";
import NewProject from "./components/NewProject/NewProject";
import Modal from "./components/StyledComponents/Modal";

export interface Project {
  id: string;
  title: string | undefined;
  dueDate: string | undefined;
  description: string | undefined;
  tasks: string[];
}

export type InputsRef = {
  title: HTMLInputElement | null;
  description: HTMLTextAreaElement | null;
  dueDate: HTMLInputElement | null;
};

type ModalRef = {
  open: () => void;
};

const App: React.FC = () => {
  // State for the projects
  const [projectState, setProjectState] = useState<{
    selectedProject: Project | "newProject" | undefined;
    projects: Project[];
  }>({
    selectedProject: undefined,
    projects: [],
  });
  // Ref object for the inputs
  const inputRef = useRef<InputsRef>({
    title: null,
    description: null,
    dueDate: null,
  });
  // Manage the modal
  const modalRef = useRef<ModalRef>(null);
  // Add a new project, set the selected project to "newProject". Is used in the Menu and the NoProjects
  const addProject = () => {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProject: "newProject",
    }));
  };
  // Select a project. Is used in the Menu
  const handleProjectSelected = (projectId: string) => {
    const project = projectState.projects.find(
      (project) => project.id === projectId
    );

    setProjectState((prevState) => ({
      ...prevState,
      selectedProject: project,
    }));
  };
  // Cancel the new project creation. Is used in the NewProject
  const handleCancelNewProject = () => {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProject: undefined,
    }));
  };
  // Save the new project and move to him. Is used in the NewProject
  const handleSaveNewProject = () => {
    if (
      !inputRef.current?.title?.value ||
      !inputRef.current?.description?.value ||
      !inputRef.current?.dueDate?.value
    ) {
      modalRef.current?.open();
      return;
    } else {
      const project: Project = {
        id:
          Math.random().toString() +
          inputRef.current?.title?.value +
          Date.now().toString(),
        title: inputRef.current?.title?.value,
        description: inputRef.current.description?.value,
        dueDate: inputRef.current.dueDate?.value,
        tasks: [],
      };
      setProjectState((prevState) => ({
        ...prevState,
        projects: [...prevState.projects, project],
        selectedProject: project,
      }));
    }
  };

  // Delete the project from the array. Is used in the Project
  const handleDeleteProject = (projectId: string) => {
    setProjectState((prevState) => ({
      ...prevState,
      projects: prevState.projects.filter(
        (project) => project.id !== projectId
      ),
      selectedProject: undefined,
    }));
  };
  // Add a new task to the project. Is used in the Tasks
  const handleAddTask = (projectId: string, task: string) => {
    const project = projectState.projects.find(
      (project) => project.id === projectId
    );
    if (project) {
      project.tasks.push(task);
      setProjectState((prevState) => ({
        ...prevState,
        projects: [
          ...prevState.projects.filter((project) => project.id !== projectId),
          project,
        ],
      }));
    }
  };
  // Clear a task from the project. Is used in the Tasks
  const handleClearTask = (projectId: string, index: number) => {
    const project = projectState.projects.find(
      (project) => project.id === projectId
    );
    if (project) {
      project.tasks.splice(index, 1);
      setProjectState((prevState) => ({
        ...prevState,
        projects: [
          ...prevState.projects.filter((project) => project.id !== projectId),
          project,
        ],
      }));
    }
  };

  return (
    <main className="flex min-h-screen pt-10 gap-12">
      {/* Menu in the left side */}
      <Menu
        projects={projectState.projects}
        newProjectHandler={addProject}
        projectSelectionHandler={handleProjectSelected}
        selectedProject={projectState.selectedProject}
      />
      {/* No Project Selected */}
      {projectState.selectedProject === undefined && (
        <NoProjects newProjectHandler={addProject} />
      )}
      {/* Create New Project */}
      {projectState.selectedProject === "newProject" && (
        <>
          <NewProject
            saveProjectHandler={handleSaveNewProject}
            cancelProjectHandler={handleCancelNewProject}
            ref={inputRef}
          />
          {/* Error handler modal */}
          <Modal ref={modalRef} buttonCaption="Okay">
            <h1 className="text-stone-500 font-bold text-3xl my-4">
              Invalid Input
            </h1>
            <p className="text-stone-600 text-2xl mb-5">
              Oops ... looks like you forgot to enter a value.
            </p>
            <p className="text-stone-600 text-2xl mb-5">
              Please make sure you provide a valid value for every input field.
            </p>
          </Modal>
        </>
      )}
      {/* Project Current Opened */}
      {projectState.selectedProject !== "newProject" &&
        projectState.selectedProject && (
          <Project
            project={projectState.selectedProject}
            deleteProjectHandler={handleDeleteProject}
            addTaskHandler={handleAddTask}
            clearTaskHandler={handleClearTask}
          />
        )}
    </main>
  );
};

export default App;
