/* eslint-disable react/prop-types */
import Arrow from "../assets/icons/arrow";
import { cva } from "class-variance-authority";
import { cn } from "./lib/cn";

const buttonVariants = cva("inline-flex justify-center items-center group [&>span]:bg-leave", {
  variants: {
    variant: {
      default: "[&>span]:bg-leave",
      dark: "[&>span]:bg-black [&>span]:text-white",
    },
    defaultVariants: {
      variant: "default",
    },
  },
});
export const Button = ({ children, className, variant, ...rest }) => {
  return (
    <>
      <button className={cn(buttonVariants({ variant, className }))} {...rest}>
        <span className=" px-5 py-2 rounded-full text-nowrap text-base font-semibold">
          {children}
        </span>
        <span className="flex justify-center items-center size-10   rounded-full -translate-x-1/4 transition-transform duration-300 ease-in-out group-hover:translate-x-[10%] group-hover:rotate-45">
          <Arrow />
        </span>
      </button>
    </>
  );
};
