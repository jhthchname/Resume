"use client";

import { AnimatePresence, motion } from "framer-motion";

const Transition = ({ children }) => {
  return (
    <AnimatePresence mode="wait">
      <div className="h-[calc(100vh-6rem)]">{children}</div>
    </AnimatePresence>
  );
};

export default Transition;
