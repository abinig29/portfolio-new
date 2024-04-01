"use client";
import Image from "next/image";
import me from "../../public/me.jpg";
import { motion } from "framer-motion";
import useHover from "@/hook/use-hover";
import { useRef } from "react";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare, FaLinkedinIn } from "react-icons/fa";
import SectionDivider from "./SectionDivider";
import useActive from "@/hook/use-active";
import { MemoizedStars } from "./ui/star";


const Home = () => {
  const { ref } = useActive("Home");
  const photo = useRef<HTMLDivElement>(null);
  const hero = useHover(photo, {
    x: -60,
    y: -45,
    z: 30,
  });
  return (
    <section
      ref={ref}
      id="home"
      className="scroll-m-[100rem]">
      <div
        ref={photo}
        className="min-h-screen pt-20 relative bg-grid-slate-300/40 ">
        <MemoizedStars />
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-gray-50 [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
        <div className=" max-w-[600px] mx-auto z-0 text-center h-screen  flex flex-col items-center justify-center  ">
          <motion.h1
            className="mb-10 mt-8 px-4 z-[2000] text-2xl font-medium !leading-[1.5] sm:text-3xl "
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="font-bold">Hello, I am Abel.</span>


            I am a{" "}
            <span className="font-bold">Full stack developer.</span> I enjoy building{" "}
            <span className="italic underline">sites & apps</span> that are not only functional but also visually appealing and user-friendly.
            {/* My focus is{" "}
            <span className="underline">React (Next.js)</span>. */}
          </motion.h1>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 z-[1000] px-4 text-lg font-medium"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
            }}
          >
            <a
              className=" bg-white z-[1000]  px-4 py-2 shadow-lg  flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border"
              href="/CV.pdf"
              download
            >
              Download CV <HiDownload className="opacity-60 " />
            </a>
            <Link
              className="px-4 py-2 border z-[1000]  bg-black text-white  font-Poppins shadow-md rounded-full flex gap-2 items-center hover:scale-110 active:scale-105 transition cursor-pointer"
              href={"#contact"}
            >
              Contact me
              <AiOutlineArrowRight />
            </Link>
            <a
              className="bg-white p-3 text-gray-700 flex  shadow-lg  items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border"
              href="https://github.com/abinig29"
              target="_blank"
            >
              <FaGithubSquare />
            </a>
            <a
              className="bg-white p-3 text-gray-700 flex  shadow-lg  items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border"
              href="https://www.linkedin.com/in/abel-nigus-a486b1294/"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
          </motion.div>
          <SectionDivider delay={0.125} />
        </div>
      </div>
    </section>
  );
};

export default Home;
