"use client";

import useActive from "@/hook/use-active";
import { motion } from "framer-motion";


const About = () => {
  const { ref } = useActive("About")
  return (
    <div className="relative">
      <div className="absolute hidden bg-grid-white/[0.2]  sm:block bottom-6 right-12 rounded-full w-[100px] h-[100px] bg-black  z-[-100]" />
      <div className="absolute hidden sm:block bottom-6 bg-grid-white/[0.2] right-12 blur-xl  rounded-full w-[70px] h-[70px] bg-gray-400  z-[-100]" />

      <motion.section
        ref={ref}
        className="mb-20 max-w-[500px] relative mx-auto text-center leading-8 scroll-mt-28 sm:mt-16 px-4 sm:px-0"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{
          once: true,
        }}
        id="about"
      >

        <h3 className="text-3xl font-medium capitalize mb-8 text-center">
          About me
        </h3>
        <p className="mb-3">


          I am a passionate <span className="font-medium"> software engineer</span> with a love for problem-solving.
          <span className="italic"> The thrill of discovering a solution to a</span> complex problem  is what drives me in programming.
          My core stack
          is{" "}
          <span className="font-medium">
            React,  Next.js, Node.js, Nestjs, Django
          </span>
          . I am always looking to
          learn new technologies.
        </p>
        <p>
          <span className="italic">When I am not coding</span>, I enjoy watching
          movies, and reading books. I also enjoy{" "}
          <span className="font-medium">learning new things</span>
        </p>
      </motion.section>
    </div>
  );
};

export default About;


