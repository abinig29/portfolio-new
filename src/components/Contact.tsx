"use client";
import { BsSend } from "react-icons/bs";
import { motion } from "framer-motion";
import useActive from "@/hook/use-active";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EmailValidator, EmailRequestType } from "@/lib/validators/emailValidator";
import { useState } from "react";
import axios from 'axios'
import toast from "react-hot-toast";

const Contact = () => {
  const { ref } = useActive("Contact");
  const [isLoading, setIsloading] = useState(false)

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<EmailRequestType>({
    resolver: zodResolver(EmailValidator),
    defaultValues: {
      text: "", email: ""
    },
  });
  async function onSubmit(data: EmailRequestType) {

    const payload: EmailRequestType = {
      text: data.text,
      email: data.email,
    }
    setIsloading(true)
    axios.post('/api/sendEmail', payload).
      then(res => toast.success('email send successfully')).
      catch((error) => toast.error('something went wrong'))
      .finally(() => {
        setIsloading(false)
        reset()
      })
  }
  return (
    <motion.section
      ref={ref}
      id={"contact"}
      initial={{
        opacity: 0,
        x: -100,
      }}
      whileInView={{
        opacity: 1,
        x: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      viewport={{
        once: true,
        amount: 0.6,
      }}
      className="max-w-[500px]  mb-16 mx-auto px-4 sm:px-0"
    >
      <h3 className="text-3xl font-medium capitalize mb-8 text-center">
        Contact me
      </h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full flex flex-col gap-2">
          <input
            className="w-full outline-none border focus:ring-1 focus:ring-black rounded-lg py-2 px-4"

            {...register('email')}
            type="email"

            placeholder="Your email"
          />
          {errors?.email && (
            <p className='px-1 text-xs text-red-600'>{errors.email.message}</p>
          )}
          <textarea
            {...register('text')}
            placeholder="Your message"

            cols={30}
            className="w-full border h-52 px-4 py-2  rounded-lg"
          ></textarea>
          {errors?.text && (
            <p className='px-1 text-xs text-red-600'>{errors.text.message}</p>
          )}
          <div className="w-full flex justify-end">
            <button
              type="submit"
              disabled={isLoading}
              className=" flex items-center disabled:cursor-not-allowed disabled:bg-gray-400 disabled:hover:scale-100 disabled:active:scale-100 cursor-pointer gap-2 px-4 py-1 text-[16px] bg-black border border-gray-300 rounded-full text-white font-Poppins hover:scale-110 active:scale-105"
            >
              Send
              <BsSend className="text-[14px]" />
            </button>
          </div>
        </div>
      </form>
    </motion.section>
  );
};

export default Contact;
