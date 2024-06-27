import { useSpring } from "framer-motion";
import { motion, useMotionValue, useAnimationControls } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";
import Arrow from "../assets/icons/arrow";

export const Cursor = () => {
  const top = useMotionValue(0);
  const left = useMotionValue(0);

  const cursorControls = useAnimationControls();

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      top.set(clientY);
      left.set(clientX);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [left, top]);
  useEffect(() => {
    const cursorView = document.getElementsByClassName("cursor-view");
    const cursorChat = document.getElementsByClassName("cursor-hello");
    const cursorViewArr = [...cursorView];
    const cursorChatArr = [...cursorChat];

    const handleCursorViewMouseEnter = () => {
      cursorControls.start("view");
    };
    const handleCursorViewMouseLeave = () => {
      cursorControls.start("initial");
    };
    cursorViewArr.forEach((element) => {
      element.addEventListener("mouseenter", handleCursorViewMouseEnter);
      element.addEventListener("mouseleave", handleCursorViewMouseLeave);
    });
    const handleCursorChatMouseEnter = () => {
      cursorControls.start("chat");
    };
    const handleCursorChatMouseLeave = () => {
      cursorControls.start("initial");
    };
    cursorChatArr.forEach((element) => {
      element.addEventListener("mouseenter", handleCursorChatMouseEnter);
      element.addEventListener("mouseleave", handleCursorChatMouseLeave);
    });

    return () => {
      cursorViewArr.forEach((element) => {
        element.removeEventListener("mouseenter", handleCursorViewMouseEnter);
        element.removeEventListener("mouseleave", handleCursorViewMouseLeave);
      });
      cursorChatArr.forEach((element) => {
        element.removeEventListener("mouseenter", handleCursorChatMouseEnter);
        element.removeEventListener("mouseleave", handleCursorChatMouseLeave);
      });
    };
  }, []);
  return (
    <>
      <motion.div
        id="cursor"
        className="fixed rounded-full pointer-events-none z-[99]"
        style={{
          top,
          left,
          x: "-50%",
          y: "-50%",
        }}
        animate={cursorControls}
        initial="initial"
        variants={{
          initial: {
            width: 0,
            height: 0,
            backgroundColor: "var(--leave)",
            scale: 0,
            transition: {
              type: "spring",
              mass: 0.6,
            },
          },
          view: {
            width: 100,
            height: 100,
            scale: 1,
            transition: { type: "tween", ease: "backOut", duration: 0.6 },
          },
        }}
      >
        <Arrow className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8" />
      </motion.div>
    </>
  );
};
