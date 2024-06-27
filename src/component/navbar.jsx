/* eslint-disable react/prop-types */
import Logo from "../assets/icons/logo";
import Moon from "../assets/icons/moon";
import { useState, useEffect } from "react";
import {
  motion,
  MotionConfig,
  useAnimate,
  stagger,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Button } from "./button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [scope, animate] = useAnimate();

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 500 && !(scrollY.getPrevious() > latest)) {
      animate(scope.current, { y: "-120%" }, { duration: 0.4 });
    } else {
      animate(scope.current, { y: "0%" }, { duration: 0.4 });
    }
    if (latest > 99) {
      animate(scope.current, { maxWidth: "80%" });
      scope.current.classList.add(
        "backdrop-blur-3xl",
        "rounded-3xl",
        "bg-white/90"
      );
    } else {
      animate(scope.current, { maxWidth: "100%" });
    }
  });
  useEffect(() => {
    const openSequance = [
      [
        scope.current,
        {
          height: "27rem",
          maxWidth: "100%",
        },
        {
          duration: 0.3,
        },
      ],
      [
        "li",
        {
          opacity: [0, 1],
        },
        {
          delay: stagger(0.02),
          at: "-0.2",
        },
      ],
    ];
    const closeSequance = [
      [
        ".mob-nav",
        {
          opacity: [1, 0],
        },
        {
          delay: stagger(0.02),
        },
      ],
      [
        scope.current,
        {
          height: "auto",
          maxWidth: "95%",
        },
        {
          duration: 0.4,
        },
      ],
    ];
    if (active) {
      document.body.classList.add(
        "overflow-hidden",
        "bg-white/90",
        "backdrop-blur-3xl",
        "rounded-3xl",
        "shadow-sm"
      );
      document.body.classList.remove("overflow-auto");

      animate(openSequance);
    } else {
      document.body.classList.add("overflow-auto");
      document.body.classList.remove(
        "overflow-hidden",
        "bg-white/90",
        "backdrop-blur-3xl",
        "rounded-3xl",
        "shadow-sm"
      );

      animate(closeSequance);
    }
    return () => {
      document.body.classList.add(
        "overflow-hidden",
        "bg-white/90",
        "backdrop-blur-3xl",
        "rounded-3xl",
        "shadow-sm"
      );
      document.body.classList.remove("overflow-auto");
      document.body.classList.add("overflow-auto");
      document.body.classList.remove(
        "overflow-hidden",
        "bg-white/90",
        "backdrop-blur-3xl",
        "rounded-3xl",
        "shadow-sm"
      );
    };
  }, [active]);

  return (
    <header
      className="container mx-auto px-6 py-4 mt-2  fixed top-0 left-0 right-0 bg-white z-[999]"
      ref={scope}
    >
      <nav className="flex mx-auto max-w-full items-center justify-between">
        <div className="logo">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div>
          <ul className="hidden md:flex gap-6 [&>li]:cursor-pointer">
            <Li>Services</Li>
            <Li>Work</Li>
            <Li>
              <Link to={"about"}>About</Link>
            </Li>
            <Li>Blog</Li>
            <Li>Contact</Li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <Moon />
          <MenuIcons active={active} setActive={setActive} />
          <Button className="hidden md:flex">Start a project</Button>
        </div>
      </nav>
      <div>
        {active && (
          <ul className="mt-12 md:hidden">
            <li className="list-disc "> Have a look around...</li>
            <li className="mob-nav text-5xl">Services</li>
            <li className="mob-nav text-5xl">Work</li>
            <li className="mob-nav text-5xl">
              <Link to={"about"}>About</Link>
            </li>
            <li className="mob-nav text-5xl">Blog</li>
            <li className="mob-nav text-5xl">Contact</li>
            <Button className="mt-2" variant="primary">
              Start a project
            </Button>
          </ul>
        )}
      </div>
    </header>
  );
};

const MenuIcons = ({ active, setActive }) => (
  <MotionConfig transition={{ duration: 0.6, type: "spring" }}>
    <div
      className="ham cursor-pointer relative size-6 md:hidden"
      onClick={() => {
        setActive(!active);
      }}
    >
      <motion.div
        className="w-5 h-0.5 bg-black absolute top-1/2 left-1/2"
        animate={{
          rotate: active ? 45 : 0,
          y: active ? "-50%" : "calc(-50% - 6px)",
        }}
        style={{ x: "-50%", y: "calc(-50% - 6px)" }}
      />
      <motion.div
        className="w-5 h-0.5 bg-black absolute top-1/2 left-1/2 "
        style={{
          x: "-50%",
          y: "calc(-50% + 0px)",
          display: active && "none",
        }}
      />
      <motion.div
        className="w-5 h-0.5 bg-black absolute top-1/2 left-1/2"
        animate={{
          rotate: active ? -45 : 0,
          y: active ? "-50%" : "calc(-50% + 6px)",
        }}
        style={{ x: "-50%", y: "calc(-50% + 6px)" }}
      />
    </div>
  </MotionConfig>
);

const Li = ({ children }) => (
  <li className="relative group">
    <span>{children}</span>
    <span className="group-hover:w-full w-0 transition-[width] duration-700  bottom-0 absolute left-0 right-0 bg-black h-[1px]" />
  </li>
);
export default Navbar;
