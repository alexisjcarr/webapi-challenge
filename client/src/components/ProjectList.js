import React from "react";

import Project from "./Project";

const ProjectList = props => {
  const { projects } = props;
  return (
    <>
      {projects.map(project => (
        <Project key={project.id} project={project} />
      ))}
    </>
  );
};

export default ProjectList;
