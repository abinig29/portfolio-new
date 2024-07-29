"use client";
import React, { useRef } from "react";
import { projectsData } from "@/lib/constant";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import Link from "next/link";

type ProjectProp = (typeof projectsData)[number];
const Project = ({ title, description, tags, imageUrl, href }: ProjectProp) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      className="group my-8 bg-gray-600/20 border h-[300px] rounded-lg opacity-100 relative overflow-hidden text-[15px]"
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
    >
      <a href={href} target="_black" className="">
        <div className="w-full  sm:w-[50%] p-6 flex flex-row sm:flex-col h-full  sm:group-even:ml-[14rem]">
          <div>
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-1 leading-relaxed font-Poppins text-black text-sm">
              {description}
            </p>
          </div>

          <ul className="flex flex-wrap mt-auto gap-2 ">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="project photo"
          className=" 
            transition 
            group-hover:scale-[1.04]
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2

            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2

            group-even:-left-48
            absolute hidden sm:block top-8 -right-48 w-[25.25rem] rounded-t-lg shadow-2xl"
        />
      </a>
    </motion.div>
  );
};
export default Project;
