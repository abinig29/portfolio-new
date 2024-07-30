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
import { cn } from "@/utils/cn";


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
        className="min-h-[calc(100vh-80px)] pt-20 relative bg-grid-slate-300/40 ">
        <MemoizedStars />
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-gray-50 [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
        {/* <motion.h1
            className="mb-10 mt-8 px-4 z-[2000] text-2xl font-medium !leading-[1.5] sm:text-3xl "
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="font-bold">Hello, I am Abel.</span>
            I am a{" "}
            <span className="font-bold">Full stack developer.</span> I enjoy building{" "}
            <span className="italic underline">sites & apps</span> that are not only functional but also visually appealing and user-friendly.
          </motion.h1> */}



        <motion.div
          className={cn("relative  lg:h-[40rem] h-[80vh] flex flex-col justify-center   max-w-[1500px]  mx-auto  text-gray-700")}
        >
          <motion.div
            className="w-[70%] hidden lg:flex left-1/2 px-52 -translate-x-1/2 absolute h-full  items-center justify-center   bg-black bg-grid-white/[0.2] text-white [mask-image:url(/mask.svg)] [mask-size:40px] [mask-repeat:no-repeat]"
            animate={{
              WebkitMaskPosition: `0px 30px`,
              WebkitMaskSize: `${350}px`,
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center text-white text-2xl sm:text-3xl relative z-20"
            >
              <span className="font-bold">Hello, I am Abel.</span>
              I am a{" "}
              <span className="font-bold">Full stack developer.</span> I enjoy building{" "}
              <span className="italic underline">sites & apps</span> that are not only functional but also visually appealing and user-friendly.
            </motion.div>
          </motion.div>

          <motion.div className="sm:w-[70%] mx-auto lg:px-52 lg:h-full flex items-center justify-center  text-white"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="max-w-4xl mx-auto text-slate-800 text-center   text-2xl  sm:text-3xl ">
              <span className="font-bold">Hello, I am Abel.</span>
              I am a{" "}
              <span className="font-bold">Full stack developer.</span> I enjoy building{" "}
              <span className="italic underline">sites & apps</span> that are not only functional but also visually appealing and user-friendly.
            </p>

          </motion.div>
          <div className="a lg:absolute lg:bottom-36 lg:left-1/2 lg:-translate-x-1/2 mt-8 lg:mt-0">
            <Button />
          </div>

        </motion.div>

        <SectionDivider delay={0.125} />
      </div>
    </section >
  );
};

export default Home;



const Button = () => {
  return (
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
        href="/Abel Nigus.pdf"
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
  )
}

