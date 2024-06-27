import { useAnimate, motion } from "framer-motion";
import { Button } from "../../component/button";

import { useEffect } from "react";
const Hero = () => {
    const [scope, animate] = useAnimate();

  useEffect(() => {
    const handleMouseMove=(event)=>{
        
        const rect = scope.current.getBoundingClientRect();
        const mouseX = event.clientX - rect.left; // Mouse position relative to the scope
        // console.log("🚀 ~ scope.addEventListener ~ mouseX:", mouseX);
        const mouseY = event.clientY - rect.top;
    
        const moveX = (mouseX / rect.width - 0.5) * 20; // Calculate the offset
        const moveY = (mouseY / rect.height - 0.5) * 20;
        animate(
          ".img",
          {
            y: moveY,
            x: moveX,
          },
          {
            duration: 0,
          }
        );
    }

    scope.current.addEventListener("mousemove", handleMouseMove);
    return () => {
        scope.current.removeEventListener("mousemove", handleMouseMove);
      };
    
  }, []);

  return (
    <div className="h-svh w-full relative" ref={scope}>
      <div className="absolute z-10 inset-0 w-full h-full flex justify-center items-center flex-col">
        <div className="  flex flex-col gap-4 justify-center items-center">
          <p className="text-center">
            <span className="inline-block bg-black size-1.5 rounded-full" />{" "}
            Culture
          </p>
          <h2 className="text-6xl font-medium text-balance text-center max-w-[20ch]">
            A talented bunch of <br /> humans that love what we do
          </h2>
          <Button>I&apos;m Intergruid</Button>
        </div>
      </div>
      <div className="absolute inset-0 w-full h-full">
        <motion.img
          className="img absolute w-48 -left-10 object-cover object-center rounded-xl top-3/4"
          src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/blog/5B115743-76B6-46F4-BE99-420D8B01DE77.jpg?w=800&h=450&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1706613261&s=eacc0db878972e110c5eba2f3f54e0df"
          alt=""
          style={{ y: "-50%" }}
        />
        <motion.img
          className="img absolute w-36 right-20 object-cover object-center rounded-xl top-3/4"
          src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/Workation-Whalley/4O2A8515.jpg?w=800&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1706190465&s=e51e4aa3e8d2896de38ad8576d4a6d99"
          alt=""
          style={{ y: "-50%" }}
        />
        <motion.img
          className="img absolute w-52 left-32 object-cover object-center rounded-xl top-1/4"
          src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/Workation-Whalley/4O2A7948.jpg?w=800&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1706190431&s=18d72478fdbba941453933fa36fab17e"
          alt=""
          style={{ y: "-50%" }}
        />
        <motion.img
          className="img absolute w-32 right-32 object-cover object-center rounded-xl top-1/4"
          src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/India-2022/Chillout-Area/Shape-April-2022-HR-175.jpg?w=800&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1706011832&s=c0fec9bc5a5e264c6519151656ff5db3"
          alt=""
          style={{ y: "-50%" }}
        />
        <motion.img
          className="img absolute w-40 left-2/3 z-[50000] object-cover object-center rounded-xl top-0"
          src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/Workation-Whalley/4O2A8450.jpg?w=800&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1706190443&s=4bd277d65a96a7203ec82ec6d7e6780b"
          alt=""
          style={{ y: "-50%" }}
        />
        <motion.img
          className="img absolute w-32 left-1/4 object-cover object-center rounded-xl top-3/4"
          src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/4O2A8466.jpg?w=800&h=450&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1683018512&s=7c5082a4258c86a5b06d2e46bd739387"
          alt=""
          style={{ y: "-100%" }}
        />
        <motion.img
          className="img absolute w-48 left-[60%] object-cover object-center rounded-xl bottom-0"
          src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/Workation-Whalley/4O2A8652.jpg?w=800&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1706190497&s=9c4d1ab9050f693da5228b4c4d26f801"
          alt=""
          style={{ y: "50%" }}
        />
      </div>
    </div>
  );
};

export default Hero;
