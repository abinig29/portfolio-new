'use client'
import {motion} from 'framer-motion'
const SectionDivider = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.125 }}
     className="w-[2px] h-[100px] bg-gray-400 my-10  hidden sm:block"/>
  )
}

export default SectionDivider