"use client";
import {  useActiveSection } from "@/context/activeSection";
import { links } from "@/lib/constant";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
const Header = () => {
  const { active, setActive,setTimeOfLastClick } = useActiveSection();
  
  return (
    <div className="fixed inset-x-0 top-0 h-20 pt-6  z-[10000000]">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className=" px-4 py-2 w-full sm:max-w-[500px] mx-auto bg-gray-100 h-[50px] shadow-lg rounded-full flex justify-between items-center  z-[999]"
      >
        {links.map((value,index) => (
          <div
          key={index}
            className={clsx("px-3 py-1 relative rounded-full transition duration-800", {
              "bg-gray-400/20": active === value.name,
            })}
          >
            <Link
              href={value.href}
              onClick={()=>{
                setActive(value.name)
                setTimeOfLastClick(Date.now())
              }}
              className={clsx("hover:text-gray-500 transition text-black", {
                "text-gray-500 ": active === value.name,
              })}
            >
              {value.name}
            </Link>
            {/* {
            activeSection=== value.name&&<div className="absolute inset-0 bg-red-700 "/>
           }  */}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
export default Header;
