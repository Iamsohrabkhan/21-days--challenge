
import { twMerge } from "tailwind-merge";

const Arrow = ({className}) => {
  return (
    <svg
      className={twMerge("w-3 h-3 fill-current",className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
    >
      <path d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z"></path>
    </svg>
  );
};

export default Arrow;
