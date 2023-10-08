"use client";
import { skillsData } from "@/lib/constant";
import { motion } from "framer-motion";
import SectionDivider from "./SectionDivider";
import useActive from "@/hook/use-active";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};
const Skill = () => {
  const { ref } = useActive("Skills");
  return (
    <section
      ref={ref}
      id="skills"
      className="max-w-[700px] px-4 mx-auto mt-20 mb-16 sm:mb-0  scroll-mt-28 text-center flex flex-col items-center"
    >
      <h3 className="text-3xl font-medium capitalize mb-8 text-center">
        Skills
      </h3>

      <div className="flex gap-2 flex-wrap items-center justify-center">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            initial="initial"
            whileInView="animate"
            variants={fadeInAnimationVariants}
            custom={index}
            viewport={{
              once: true,
            }}
            className="border rounded-full bg-gray-100 px-4 py-2"
          >
            {skill}
          </motion.div>
        ))}
      </div>
      <SectionDivider delay={0.7} />
    </section>
  );
};

export default Skill;
