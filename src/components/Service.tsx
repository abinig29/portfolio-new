"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { IconBoxAlignRightFilled } from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { cn } from "@/utils/cn";
import { Webhook } from 'lucide-react';
import { service } from "@/lib/constant";
import useActive from "@/hook/use-active";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.1 * index,
        },
    }),
};
type ServiceProp = (typeof service)[number];
export default function () {
    return (
        <div>
            <h3 className="text-3xl font-medium capitalize mb-8 text-center">
                Services
            </h3>
            <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] mb-20">
                {
                    service?.map((a: ServiceProp, index: number) => {
                        return <motion.div
                            key={index}
                            initial="initial"
                            whileInView="animate"
                            className="h-full"
                            variants={fadeInAnimationVariants}
                            custom={index}
                            viewport={{
                                once: true,
                            }}>

                            <BentoGridItem

                                title={a?.title}
                                description={a?.description}
                                header={<ServiceItem tag={a?.tag} headerText={a?.headerText} />}
                                className={cn("[&>p:text-lg]", 'h-full')}
                            />
                        </motion.div>
                    })
                }



            </BentoGrid>
        </div>
    );
}



const ServiceItem = ({ tag, headerText }: { tag: string, headerText: string }) => {
    const variants = {
        initial: {
            x: 0,
        },
        animate: {
            x: 10,
            rotate: 5,
            transition: {
                duration: 0.2,
            },
        },
    };
    const variantsSecond = {
        initial: {
            x: 0,
        },
        animate: {
            x: -10,
            rotate: -5,
            transition: {
                duration: 0.2,
            },
        },
    };
    const { ref } = useActive("Services");
    return (
        <motion.div
            ref={ref}
            id="services"
            initial="initial"
            whileHover="animate"
            className="flex flex-1 scroll-mt-28 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
        >
            {/* <motion.div
                variants={variants}
                className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white "
            >

                <p className="text-xs text-neutral-500">
                    {headerText}
                </p>
            </motion.div> */}
            <motion.div
                variants={variantsSecond}
                className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white "
            >
                <p className="text-xs text-neutral-500 capitalize">{tag}</p>
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-red-500/30 to-white flex-shrink-0" />
            </motion.div>
        </motion.div>
    );
};

