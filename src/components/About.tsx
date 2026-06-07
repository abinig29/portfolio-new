"use client";

import useActive from "@/hook/use-active";
import { motion } from "framer-motion";


const About = () => {
  const { ref } = useActive("About")
  return (
    <div className="relative">
      <div className="absolute hidden bg-grid-white/[0.2]  sm:block bottom-6 right-12 rounded-full w-[100px] h-[100px] bg-black  z-[-100]" />
      <div className="absolute hidden sm:block bottom-6 bg-grid-white/[0.2] right-12 blur-xl  rounded-full w-[70px] h-[70px] bg-gray-400  z-[-100]" />

      <section
        ref={ref}
        id="about"
        className="mb-20 max-w-[500px] relative mx-auto text-center leading-8 scroll-mt-28 sm:mt-16 px-4 sm:px-0"
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-medium capitalize mb-8 text-center">
            About me
          </h3>
          <p className="mb-3">
            I am a passionate <span className="font-medium">software engineer</span> who specializes in building
            production-quality, full-stack applications from scratch.
            My core stack is{" "}
            <span className="font-medium">Next.js, Redis, PostgreSQL, Docker, Node.js, and Python</span>
            {" "}— I thrive on architecting systems that are performant, scalable, and reliable across diverse domains.
          </p>
          <p className="mb-3">
            I have hands-on experience building dashboards, data management platforms, and workflow tools, as well as
            <span className="italic"> containerized CLI environments</span> with Bash scripting and Docker.
            I enjoy tackling complex engineering problems and creating software that is both
            {" "}<span className="font-medium">functionally complete and technically rigorous</span>.
          </p>
          <p>
            <span className="italic">When I am not coding</span>, I enjoy reading
            books and{" "}
            <span className="font-medium">learning new things</span>.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
