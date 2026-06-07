"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare, FaLinkedinIn } from "react-icons/fa";
import SectionDivider from "./SectionDivider";
import useActive from "@/hook/use-active";

const stack = ["Next.js", "PostgreSQL", "Redis", "Docker", "TypeScript", "Python", "Bash"];

const Home = () => {
  const { ref } = useActive("Home");

  return (
    <section ref={ref} id="home" className="scroll-m-[100rem]">
      <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-6 relative overflow-hidden">
        {/* Subtle dot grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:28px_28px] opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-transparent to-gray-50 pointer-events-none" />

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <motion.p
            className="text-xs uppercase tracking-[0.35em] text-gray-400 mb-5 font-semibold"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Full Stack Engineer
          </motion.p>

          <motion.h1
            className="text-6xl sm:text-8xl font-bold text-gray-900 mb-7 leading-[1.05] tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I&apos;m<br />Biruk.
          </motion.h1>

          <motion.p
            className="text-base sm:text-xl text-gray-600 mb-4 max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            I build complete, production-quality web applications from scratch.
            Dashboards, data platforms, workflow tools, containerized systems.
          </motion.p>



          {/* Stack pills */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {stack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-medium border border-gray-200 text-gray-600 px-3 py-1 rounded-full bg-white"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a
              className="bg-gray-900 text-white text-sm px-5 py-2.5 rounded-full flex items-center gap-2 hover:bg-gray-700 active:scale-95 transition"
              href="/Biruk_Addis.pdf"
              download
            >
              Download CV <HiDownload />
            </a>
            <Link
              className="text-sm border border-gray-300 px-5 py-2.5 rounded-full flex items-center gap-2 text-gray-800 hover:border-gray-900 hover:bg-gray-100 active:scale-95 transition"
              href="#contact"
            >
              Contact me <AiOutlineArrowRight />
            </Link>
            <a
              className="p-2.5 border border-gray-200 text-gray-500 text-xl rounded-full hover:border-gray-900 hover:text-gray-900 active:scale-95 transition"
              href="https://github.com/abinig29"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare />
            </a>
            <a
              className="p-2.5 border border-gray-200 text-gray-500 text-xl rounded-full hover:border-gray-900 hover:text-gray-900 active:scale-95 transition"
              href="https://www.linkedin.com/in/biruk-addis-284bb6317/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </motion.div>
        </div>

        <SectionDivider delay={0.6} />
      </div>
    </section>
  );
};

export default Home;
