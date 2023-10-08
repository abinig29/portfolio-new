"use client";
import React, { createContext, useContext, useState } from "react";
export type actveSectionType = {
  active: string;
  setActive: (active: string) => void;
  timeOfLastClick: number;
  setTimeOfLastClick: (active: number) => void;
};

const activeSectionContext = createContext<actveSectionType | null>(null);

const ActiveSection = ({ children }: { children: React.ReactNode }) => {
  const [active, setActive] = useState<string>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);
  return (
    <activeSectionContext.Provider
      value={{ active, setActive, timeOfLastClick, setTimeOfLastClick }}
    >
      {children}
    </activeSectionContext.Provider>
  );
};

export const useActiveSection = () => {
  const context = useContext(activeSectionContext);
  if (context === null) throw new Error("cant acces value outside its domain");
  return context;
};
export default ActiveSection;
