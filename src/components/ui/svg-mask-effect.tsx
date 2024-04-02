"use client";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";


export const MaskContainer = ({
    children,
    revealText,
    size = 200,
    revealSize = 600,
    className,
}: {
    children?: string | React.ReactNode;
    revealText?: string | React.ReactNode;
    size?: number;
    revealSize?: number;
    className?: string;
}) => {


    return (
        <motion.div
            className={cn("h-screen relative", className)}
        >
            <motion.div
                className="w-full absolute h-full flex items-center justify-center text-6xl  bg-black bg-grid-white/[0.2] text-white [mask-image:url(/mask.svg)] [mask-size:40px] [mask-repeat:no-repeat]"
                animate={{
                    WebkitMaskPosition: `400px 300px`,
                    WebkitMaskSize: `${200}px`,
                }}
            >
                <div

                    className="max-w-4xl mx-auto text-center text-white  text-4xl font-bold relative z-20"
                >
                    {children}
                </div>
            </motion.div>

            <div className="w-full h-full flex items-center justify-center  text-white">
                {revealText}
            </div>
        </motion.div>
    );
};
