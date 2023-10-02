import { projectsData } from "@/lib/constant";
import Project from "./Project";
import React from "react";
type ProjectProp = (typeof projectsData)[number];
const Projects = () => {
  return (
    <section className="scroll-mt-28">
      <h3 className="text-3xl font-medium capitalize mb-8 text-center">
        My project
      </h3>
      <div>
        {projectsData.map((project: ProjectProp, index: number) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
