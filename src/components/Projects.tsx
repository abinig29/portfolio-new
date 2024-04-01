"use client";
import { projectsData } from "@/lib/constant";
import Project from "./Project";
import React, { useEffect } from "react";
import useActive from "@/hook/use-active";
import { useInView } from "react-intersection-observer";
type ProjectProp = (typeof projectsData)[number];
const Projects = () => {
  const { ref } = useActive("Projects", 0.4);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28">
      <h3 className="text-3xl font-medium capitalize mb-8 text-center">
        My projects
      </h3>
      <div className="px-4 max-w-[1200px] grid sm:grid-cols-2 grid-cols-1 mx-auto sm:gap-8">
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
