"use client";
import { projectsData } from "@/lib/constant";
import Project from "./Project";
import React from "react";
import useActive from "@/hook/use-active";

type ProjectProp = (typeof projectsData)[number];

const Projects = () => {
  const { ref } = useActive("Projects", 0.4);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 px-4 mb-24">
      <h3 className="text-3xl font-medium capitalize mb-10 text-center">
        My projects
      </h3>
      <div className="max-w-[960px] mx-auto grid sm:grid-cols-2 grid-cols-1 gap-5">
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
