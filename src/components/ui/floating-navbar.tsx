"use client";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { PropsWithChildren, useEffect, useState } from "react";

export const FloatingNav = (
  props: PropsWithChildren<{ className?: string; id?: string }>
) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Vérifie la valeur initiale du scroll au chargement
    if (scrollYProgress.get() < 0.01) {
      setVisible(true);
    }
  }, [scrollYProgress]);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.01) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.001,
        }}
        className={cn(
          "flex  fixed top-0 inset-x-0 border border-transparent rounded-full bg-background/90 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000]  items-center justify-between",
          props.className
        )}
      >
        {props.children}
      </motion.div>
    </AnimatePresence>
  );
};
