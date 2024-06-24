import { motion } from "framer-motion";
import { Button } from "../../component/button";
import OutlineButton from "../../component/outlinebutton";
import { useState } from "react";

const Banner = () => {
  const [hover, setHover] = useState(false);

  return (
    <section className="h-svh w-full relative mt-48 container font-oldschoolGrotesk">
      <div className="absolute size-48 bg-white z-10  rounded-ee-3xl"></div>
      <div className="absolute top-0 left-[10%] z-20 -translate-y-12 rounded-ee-3xl">
        <p className="bg-white px-6 py-2 list-disc">
          {" "}
          <span className="size-1.5 bg-black rounded-full inline-flex justify-center items-center gap-3 space-x-4" />{" "}
          <span className="inline-block">Hiya, we’re Shape</span> {"  "}{" "}
          <span className="animate-wave inline-block"> 👋</span>
        </p>
        <h1 className="text-6xl font-normal">
          <span className="bg-white block py-2 px-6"> A web design and</span>
          <span className="bg-white block py-2 px-6"> branding agency</span>
          <span className="bg-white block py-2 px-6 rounded-ee-3xl">
            in Manchester{" "}
          </span>
        </h1>
        <div className="px-6 py-3 rounded-ee-2xl bg-white w-3/4 flex gap-3 items-center">
          <Button variant="dark">View Our Work</Button>
          <OutlineButton>Meet the team</OutlineButton>
        </div>
      </div>
      <div className="video w-full h-full absolute inset-0 mask mt-24">
        <video
          autoPlay
          muted
          loop
          className="object-cover h-full w-full rounded-3xl"
        >
          <source src="/showreel-land.mp4" />
        </video>
      </div>
      <div className="absolute w-full h-full   inset-0  flex items-end justify-end">
        <motion.div
          className={`sticky bottom-6 right-12 bg-white flex justify-center items-center gap-2 px-5 py-1 rounded-full cursor-pointer ${
            hover ? "flex-row-reverse" : "flex-row"
          }`}
          layout
          onHoverStart={() => {
            setHover(true);
          }}
          onHoverEnd={() => {
            setHover(false);
          }}
        >
          <motion.div className="img" layout>
            <img
              className="size-14 rounded-full"
              src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/India-2022/Individuals-Black-Wall/Shape-April-2022-HR-186.jpg?w=200&h=200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1651143173&s=be043bcd94bb13283574b35d1df6ee93"
              alt=""
            />
          </motion.div>
          <motion.div className="" layout>
            <h3 className="font-semibold">Hear from Andy</h3>
            <p>Co-Founder of Shape</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
