"use client";
import {BsSend} from 'react-icons/bs'
import {motion} from 'framer-motion'
import useActive from '@/hook/use-active';

const Contact = () => {
  const { ref } = useActive("Contact");
  return (
    <motion.section
    ref={ref}
     id={"contact"}
     initial={{
        opacity: 0,
        x:-100
      }}
      whileInView={{
        opacity: 1,
        x:1
        
      }}
      transition={{
        duration: 0.5,
      }}
      viewport={{
        once: true,amount:0.6
      }} 
     className="max-w-[500px]  mb-16 mx-auto px-4 sm:px-0">
      <h3 className="text-3xl font-medium capitalize mb-8 text-center">
        Contact me
      </h3>

      <div className="w-full flex flex-col gap-2">
        <input
       
          className="w-full outline-none border focus:ring-1 focus:ring-black rounded-lg py-2 px-4"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
          cols={30}
          className="w-full border h-52 px-4 py-2  rounded-lg"
        ></textarea>
        <div className="w-full flex justify-end">
          <button className=" flex items-center gap-2 px-4 py-1 text-[16px] bg-black border border-gray-300 rounded-full text-white font-Poppins hover:scale-110 active:scale-105">
            Send
            <BsSend className='text-[14px]'/>
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
