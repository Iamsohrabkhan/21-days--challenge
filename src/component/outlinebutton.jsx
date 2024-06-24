import React from 'react'
import Arrow from '../assets/icons/arrow'

const OutlineButton = ({children}) => {
  return (
    <button className="font-medium group flex justify-center items-center gap-2">
            <span className="block relative ">
              <span className="">{children}</span>
              <span className="absolute top-1/2 -translate-y-1/2 translate-x-2/3 group-hover:opacity-0 opacity-100 group-hover:-translate-y-full group-hover:translate-x-full transition-[transform,opacity] duration-500">
                <Arrow />
              </span>
              <span className="absolute top-1/2 translate-y-1/2  -translate-x-2/3 group-hover:-translate-y-1/2 group-hover:translate-x-2/3 transition-[transform,opacity] duration-500 group-hover:opacity-100 opacity-0">
                <Arrow />
              </span>
              <span className="group-hover:w-full w-0 transition-[width] duration-700  bottom-0 absolute left-0 right-0 bg-black h-[1px]" />
            </span>
          </button>
  )
}

export default OutlineButton