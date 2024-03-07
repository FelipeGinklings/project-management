import React, { useRef, useState } from "react";
import Menu from "./components/Menu";
import NoProjects from "./components/NoProjects";
import Project from "./components/Project";
import NewProject from "./components/NewProject";

export interface Project {
  id: string;
  title: string | undefined;
  date: string | undefined;
  description: string | undefined;
  tasks: string[];
}

export type InputsRef = {
  title: HTMLInputElement | null;
  description: HTMLTextAreaElement | null;
  date: HTMLInputElement | null;
};

const App: React.FC = () => {
  const [projects, setProjects] = useState([] as Project[]);
  const [selectedProject, setSelectedProject] = useState<
    Project | "newProject" | undefined
  >();
  const inputRef = useRef<InputsRef>({
    title: null,
    description: null,
    date: null,
  });

  const handleNewProject = () => {
    setSelectedProject("newProject");
  };

  const handleCancelNewProject = (event: React.FormEvent) => {
    event.preventDefault();
    setSelectedProject(undefined);
  };

  const handleSaveProject = (event: React.FormEvent) => {
    event.preventDefault();
    if (
      !inputRef.current?.title?.value ||
      !inputRef.current?.description?.value ||
      !inputRef.current?.date?.value
    ) {
      return alert("Please fill all the fields");
    } else {
      const project: Project = {
        id:
          Math.random().toString() +
          inputRef.current?.title?.value +
          Date.now().toString(),
        title: inputRef.current?.title?.value,
        description: inputRef.current.description?.value,
        date: inputRef.current.date?.value,
        tasks: [],
      };
      setProjects((prevProjects) => [...prevProjects, project]);
      setSelectedProject(project);
    }
  };

  const handleProjectSelected = (projectId: string) => {
    const project = projects.find((project) => project.id === projectId);
    setSelectedProject(project);
  };

  const handleDeleteProject = (projectId: string) => {
    setProjects((prevProjects) =>
      prevProjects.filter((project) => project.id !== projectId)
    );
    setSelectedProject(undefined);
  };

  const handleAddTask = (projectId: string, task: string) => {
    const project = projects.find((project) => project.id === projectId);
    if (project) {
      project.tasks.push(task);
      setProjects((prevProjects) => [
        ...prevProjects.filter((project) => project.id !== projectId),
        project,
      ]);
    }
  };
  const handleClearTask = (projectId: string, index: number) => {
    const project = projects.find((project) => project.id === projectId);
    if (project) {
      project.tasks.splice(index, 1);
      setProjects((prevProjects) => [
        ...prevProjects.filter((project) => project.id !== projectId),
        project,
      ]);
    }
  };

  return (
    <main className="flex flex-row pt-10">
      <Menu
        projects={projects}
        newProjectHandler={handleNewProject}
        projectSelectionHandler={handleProjectSelected}
      />
      {/* No Project Selected */}
      {selectedProject === undefined && (
        <NoProjects newProjectHandler={handleNewProject} />
      )}
      {/* Create New Project */}
      {selectedProject === "newProject" && (
        <NewProject
          saveProjectHandler={handleSaveProject}
          cancelProjectHandler={handleCancelNewProject}
          ref={inputRef}
        />
      )}
      {/* Project Current Opened */}
      {selectedProject !== "newProject" && selectedProject && (
        <Project
          project={selectedProject}
          deleteProjectHandler={handleDeleteProject}
          addTaskHandler={handleAddTask}
          clearTaskHandler={handleClearTask}
        />
      )}
    </main>
  );
};

export default App;
