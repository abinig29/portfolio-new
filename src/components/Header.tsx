"use client";
import { links } from "@/lib/constant";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
const Header = () => {
  const activeSection='Home'
  return (
    <div className="fixed inset-x-0 top-0 h-20 pt-6  z-[999]">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className=" px-4 py-2 max-w-[500px] mx-auto bg-white h-[50px] shadow-lg rounded-full flex justify-between items-center  z-[999]"
      >
        {links.map((value) => (
          <div className={clsx(
            "px-3 py-1 relative rounded-full",
            {
              "bg-gray-400/20":
                activeSection === value.name,
            }
          )}
          >
            <Link href={value.href}
             className={clsx(
              "hover:text-gray-500 transition text-black",
              {
                "text-gray-500 ":
                  activeSection === value.name,
              }
            )}
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
