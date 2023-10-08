"use client"
import { useActiveSection } from "@/context/activeSection";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const useActive = (section: string, threshold?: number) => {
  const { setActive,timeOfLastClick } = useActiveSection();
  const { ref, inView } = useInView({
    threshold: threshold ? threshold : 0.75,
  });
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) setActive(section);
  }, [inView, setActive]);

  return { ref };
};

export default useActive;
