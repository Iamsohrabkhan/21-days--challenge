import { useState, useEffect, useRef } from "react";
import { motion, useAnimate } from "framer-motion";
import Circle from "../../assets/icons/circle";
import { Quatation } from "../../assets/icons/quotation";
import { useAnimationControls } from "framer-motion";

const Testimonial = () => {
  const control = useRef();
  const [active, setActive] = useState(0);
  const [scope, animate] = useAnimate();
  const controls = useAnimationControls();
  const imgControl = useAnimationControls();

  const handleNext = (idx) => {
    setActive(idx);
  };

  useEffect(() => {
    const anim = animate(
      [
        [
          ".path-0",
          { pathLength: [0, 1] },
          { duration: 5, onStart: () => console.log("started 0") },
        ],
        [".path-0", { pathLength: [1, 0] }, { duration: 0.0000001 }],
        [".path-1", { pathLength: [0, 1] }, { duration: 5 }],
        [".path-1", { pathLength: [1, 0] }, { duration: 0.0000001 }],
        [".path-2", { pathLength: [0, 1] }, { duration: 5 }],
        [".path-2", { pathLength: [1, 0] }, { duration: 0.0000001 }],
      ],
      {
        repeat: Infinity,
        repeatType: "loop",
        // repeatDelay: 1,
      }
    );

    control.current = anim;
  }, []);

  useEffect(() => {
    controls.start({
      y: [20, 0],
      opacity: [0, 1],
      transition: { duration: 0.4 },
    });
    imgControl.start({
      opacity: [0, 1],
      transition: { duration: 0.1 },
    });

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % data.length);
    }, 15000.0000003 / 3);

    return () => clearInterval(interval);
  }, [controls, active, imgControl]);

  return (
    <div className="py-24 container space-y-12">
      <div className="space-y-6">
        <p className="text-center">
          <span className="inline-block bg-black size-1.5 rounded-full" /> Our
          Team
        </p>
        <h2 className="text-center text-6xl font-medium">
          Don’t take our word <br /> for it, hear it from them
        </h2>
      </div>

      <div
       
        className="bg-leave p-12 rounded-xl"
        ref={scope}
      >
        <div className="flex">
          <div className="basis-7/12 space-y-12 flex flex-col justify-between">
            <ul className="flex gap-2">
              {data.map(({ avatar, id }, idx) => (
                <li
                  key={id}
                  className="relative size-14 cursor-pointer"
                  // onClick={() => handleNext(idx)}
                >
                  <Circle />
                  <svg
                    className="w-full h-full absolute top-0 left-0 z-20 text-black stroke-current"
                    viewBox="0 0 152 152"
                    fill="none"
                  >
                    <rect
                      className={`path-${idx}`}
                      x="0.5"
                      y="0.5"
                      width={151}
                      height={151}
                      rx="29.5"
                      data-index={0}
                      strokeWidth={5}
                    />
                  </svg>
                  <img
                    className="object-center object-cover w-full h-full p-1 rounded-xl"
                    src={avatar}
                    alt=""
                  />
                </li>
              ))}
            </ul>
            <div className="">
              <motion.h2
                className="fadeIn text-4xl font-normal mb-4 relative"
                animate={controls}
              >
                <span className="absolute top-0 left-0">
                  <Quatation />
                </span>
                <span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {data[active].quote}
                </span>
              </motion.h2>

              <motion.h3
                className="fadeIn text-lg font-semibold"
                animate={controls}
              >
                {data[active].name}
              </motion.h3>
              <motion.h4
                className="fadeIn text-gray-700 text-base"
                animate={controls}
              >
                {data[active].position}
              </motion.h4>
            </div>
          </div>
          <div className="basis-[42.66%]">
            <motion.img
              className="fadeInImg object-cover object-center w-52 rounded-3xl aspect-[9/16] ml-auto"
              animate={imgControl}
              src={data[active].thumbnail}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
const data = [
  {
    id: 0,
    name: "Ella Dowson",
    position: "Designer",
    avatar:
      "https://made-byshape.transforms.svdcdn.com/production/uploads/images/Nick-MadeByShape.jpg?w=200&h=200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1704886432&s=65a176aa518f10c278c6207644828b18",
    thumbnail:
      "https://made-byshape.transforms.svdcdn.com/production/uploads/images/tom-thumbnail.jpg?w=800&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1709131547&s=fcf6fd160a23b1812be92c6c7983b686",

    quote:
      "Everyone at Shape works hard and produce excellent work and are super friendly and make you feel really welcome and valued.",
  },
  {
    id: 1,
    name: "Tom Plicker",
    position: "Developer",
    avatar:
      "https://made-byshape.transforms.svdcdn.com/production/uploads/images/Jo-MadeByShape.jpg?w=200&h=200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1704886359&s=3b2e4bc3e3313afd5562bfc3debab34e",
    thumbnail:
      "https://made-byshape.transforms.svdcdn.com/production/uploads/images/Kerry-hero-header.jpg?w=600&h=1067&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1706171631&s=c9d8a03e2616930d153c2dc74eadd776",
    quote: "Working here means being part of a culture that values creativity.",
  },
  {
    id: 2,
    name: "Jo Edwar",
    position: "Content Writer",
    avatar:
      "https://made-byshape.transforms.svdcdn.com/production/uploads/images/India-2022/Chillout-Area/Shape-April-2022-HR-165.jpg?w=600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1651142281&s=73d24c4eb0c18018bea0492216483357",
    thumbnail:
      "https://made-byshape.transforms.svdcdn.com/production/uploads/images/Alexandra/Nick-Kingan/4O2A8960.jpg?w=600&h=1067&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1687411654&s=5cad5093ab737b657015b2a038cdedab",
    quote:
      "Shape is like a home away from home, a relaxed approach to work but we get sh*t done and make stuff look sexy.",
  },
];
