"use client";
import React, { useRef } from "react";
import { projectsData } from "@/lib/constant";
import { useScroll, useTransform, motion } from "framer-motion";

type ProjectProp = (typeof projectsData)[number];

const Project = ({ title, description, tags }: ProjectProp) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="flex flex-col gap-4 h-full bg-white border border-gray-200 rounded-2xl p-7"
    >
      <h3 className="text-xl font-bold text-gray-900 leading-snug">{title}</h3>

      <p className="text-sm text-gray-500 leading-relaxed flex-1">{description}</p>

      <ul className="flex flex-wrap gap-2 pt-3 border-t border-gray-100">
        {tags.map((tag, index) => (
          <li
            key={index}
            className="bg-gray-900 text-white text-[0.62rem] uppercase tracking-widest px-3 py-1 rounded-full font-medium"
          >
            {tag}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Project;
