import {
  motion,
  useTime,
  useTransform,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Eyes } from "../assets/icons/eyes";
import { useState } from "react";

export const Scroll = () => {
  const [active, setActive] = useState(false);
  const time = useTime();
  const { scrollY } = useScroll();
  const rotateWithTime = useTransform(time, [0, 10000], [0, 360], {
    clamp: false,
  });
  const rotateWithScroll = useTransform(scrollY, [0, 3000], [0, 360], {
    clamp: false,
  });
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 500) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: active ? 1 : 0, transition: { duration: 0.4 } }}
      className="size-28 rounded-full bg-leave fixed bottom-12 right-12 p-3 text-4xl z-[99] cursor-pointer"
    >
      <motion.div
        className="w-full h-full"
        style={{ rotate: rotateWithScroll }}
      >
        <motion.div
          className="w-full h-full flex justify-center items-center "
          style={{ rotate: rotateWithTime }}
        >
          <Eyes className="size-full text-black" />
        </motion.div>
      </motion.div>
      <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        👀
      </div>
    </motion.div>
  );
};
