
"use client"
import {motion} from 'framer-motion'

const About = () => {
  return (
    <motion.section
    //   ref={ref}
      className="mb-20 max-w-[500px] mx-auto text-center leading-8 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration:0.5 , amount: 0.5 }}
      viewport={{
        once: true,
      }}
      id="about"
    >
      <h3 className='text-3xl font-medium capitalize mb-8 text-center'>About me</h3>
      <p className="mb-3">
         I am{" "}
        <span className="font-medium">Software enginnering</span>student in addis abab university.
        <span className="italic">{" "} My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy watching movies, and reading books. I also enjoy{" "}
        <span className="font-medium">learning new things</span>
      </p>
    </motion.section>
  )
}

export default About