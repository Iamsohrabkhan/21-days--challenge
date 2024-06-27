/* eslint-disable react/prop-types */

import { twMerge } from "tailwind-merge";

/* eslint-disable no-unused-vars */
const Work = () => {
  return (
    <section className="container  px-6 mt-6 relative">
      <Header />
      <div className="mt-12 grid grid-cols-2 gap-24 odd:-translate-y-1/4">
        <Card
          className="-translate-y-1/4"
          img="https://made-byshape.transforms.svdcdn.com/production/uploads/images/sketch-website.jpg?w=1200&h=900&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1707141871&s=438e1e3662fb9fbb53df517ff93b4a4a"
          studio="Sketch Studios"
          year="2024"
          title="A workplace consultancy creating inspiring environments"
        />
        <Card
          img="https://made-byshape.transforms.svdcdn.com/production/uploads/images/workImages/Enabl/Flyer.jpg?w=1200&h=900&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1707131053&s=13b24aed79a6a5b9c7f9724fba347b23"
          studio="Sketch Studios"
          year="2024"
          title="A workplace consultancy creating inspiring environments"
        />
        <Card
          className="-translate-y-1/4"
          img="https://made-byshape.transforms.svdcdn.com/production/uploads/images/workImages/Enabl/Flyer.jpg?w=1200&h=900&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1707131053&s=13b24aed79a6a5b9c7f9724fba347b23"
          studio="Sketch Studios"
          year="2024"
          title="A workplace consultancy creating inspiring environments"
        />
        <Card
          img="https://made-byshape.transforms.svdcdn.com/production/uploads/images/workImages/Forma/Bag.jpg?w=1200&h=900&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1706695530&s=169cd4456d479b92089d645d3263aeb4"
          studio="Sketch Studios"
          year="2024"
          title="A workplace consultancy creating inspiring environments"
        />
      </div>
    </section>
  );
};

const Header = () => (
  <div className="flex">
    <div className="basis-1/2 hidden lg:block" />
    <div className="basis-1/2 px-24">
      <p className="">
        <span className="size-1.5 inline-block rounded-full bg-black" />{" "}
        <span> Our Work</span>
      </p>
      <h2 className="text-4xl lg:text-5xl font-medium w-[11ch] mt-3 lg:mt-6">
        Take a look at our projects
      </h2>
    </div>
  </div>
);

const Card = ({ year, studio, title, img, className }) => (
  <div
    className={twMerge(
      "card cursor-view cursor-none group relative overflow-clip",
      className
    )}
  >
    <ul className="absolute top-0 z-10 right-0 bg-white flex justify-center items-center gap-3 py-3 px-2 rounded-es-3xl text-sm -translate-y-full duration-700 group-hover:translate-y-0">
      <li className="bg-slate-100 rounded-3xl px-3 py-1">Branding</li>
      <li className="bg-slate-100 rounded-3xl px-3 py-1">Website</li>
      <li className="bg-slate-100 rounded-3xl px-3 py-1">Seo</li>
    </ul>
    <div className="img overflow-clip rounded-3xl">
      <img
        src={img}
        className="object-cover rounded-3xl group-hover:-translate-y-1.5 duration-300 transition-transform"
        alt=""
      />
    </div>
    <div className="p-3">
      <ul className="flex items-center gap-2 mt-3">
        <li>{year}</li>
        <span className="size-1.5 block rounded-full bg-black" />
        <li> {studio}</li>
      </ul>
      <h3 className="text-4xl font-normal leading-none w-[24ch] mt-3">
        {title}
      </h3>
    </div>
  </div>
);

export default Work;
