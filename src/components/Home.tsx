"use client";
import Image from "next/image";
import me from "../../public/me.jpg";
import { motion } from "framer-motion";
import useHover from "@/hook/use-hover";
import { useRef } from "react";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import SectionDivider from "./SectionDivider";
import useActive from "@/hook/use-active";
const Home = () => {
  const { ref } = useActive("Home");
  const photo = useRef<HTMLDivElement>(null);
  const hero = useHover(photo, {
    x: -60,
    y: -45,
    z: 30,
  });
  return (
    <section ref={ref} id="home" className="scroll-m-[100rem]">
      <div ref={photo} className="min-h-screen w-[100w] pt-32">
        <div className=" max-w-[600px] mx-auto z-0 text-center  flex flex-col items-center ">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
              delay: 0.1,
            }}
          >
            <Image
              src={me}
              alt={"my photo"}
              style={{
                transform: hero.transform,
              }}
              className="w-[150px] h-[150px] object-contain rounded-full border-2 border-gray-400/50  "
            />
          </motion.div>
          <motion.h1
            className="mb-10 mt-8 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="font-bold">Hello, I am Abel.</span> I am a{" "}
            <span className="font-bold">web developer.</span> I enjoy building{" "}
            <span className="italic">sites & apps</span>. My focus is{" "}
            <span className="underline">React (Next.js)</span>.
          </motion.h1>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
            }}
          >
            <a
              className=" bg-white px-4 py-2 shadow-lg  flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border"
              href="/CV.pdf"
              download
            >
              Download CV <HiDownload className="opacity-60 " />
            </a>
            <Link
              className="px-4 py-2 border bg-black text-white  font-Poppins shadow-md rounded-full flex gap-2 items-center hover:scale-110 active:scale-105 transition cursor-pointer"
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
          </motion.div>
          <SectionDivider delay={0.125} />
        </div>
      </div>
    </section>
  );
};

export default Home;
