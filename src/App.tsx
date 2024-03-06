import React, { useState } from "react";
import Menu from "./components/Menu/Menu";
import NoProjects from "./components/NoProjects";
import Project from "./components/Project/Project";
import NewProject from "./components/NewProject/NewProject";

export interface Project {
  id: string;
  title: string | undefined;
  date: string | undefined;
  description: string | undefined;
  tasks: string[];
}

const App: React.FC = () => {
  const [projects, setProjects] = useState([] as Project[]);
  const [selectedProject, setSelectedProject] = useState<
    Project | "newProject" | undefined
  >();

  const handleNewProject = () => {
    setSelectedProject("newProject");
  };

  const handleCancelNewProject = (event: React.FormEvent) => {
    event.preventDefault();
    setSelectedProject(undefined);
  };

  const handleSaveProject = (project: Project) => {
    setProjects((prevProjects) => [...prevProjects, project]);
    setSelectedProject(project);
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
    <main className="flex flex-row">
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
          saveProject={handleSaveProject}
          cancelProjectHandler={handleCancelNewProject}
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
