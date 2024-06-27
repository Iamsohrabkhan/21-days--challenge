import { motion } from "framer-motion";
import { Button } from "../../component/button";
import { useState } from "react";

const Services = () => {
  const [hover, setHover] = useState(false);
  return (
    <section className="bg-black min-h-screen rounded-3xl text-white py-24 relative px-6">
      <div className="container flex-col md:flex-row flex justify-between gap-3 md:gap-6">
        <span className="inline-flex items-center gap-3 basis-1/3 ">
          <span className="bg-white inline-block size-1.5 rounded-full  " />
          <span>Our Expertise</span>
        </span>
        <h2 className="basis-1/3 text-4xl md:text-5xl text-balance first-line:text-end">
          How we take your business to the next level
        </h2>
        <div className="basis-1/3 ">
          <div className="w-3/4 ">
            <p>
              We are a digital marketing agency with expertise, and we’re on a
              mission to help you take the next step in your business.
            </p>
            <Button className="text-black mt-3">See all Services</Button>
          </div>
        </div>
      </div>

      <div className="w-full flex mt-12 ">
        <div className="basis-1/4 hidden md:block" />
        <div className="basis-full md:basis-3/4 relative z-10">
          <ul className=" divide-y-[1px] divide-slate-500 flex justify-center items-center flex-col">
            <Li
              title="Brand Identity"
              img="https://made-byshape.transforms.svdcdn.com/production/uploads/images/workImages/Forma/Bag.jpg?w=1200&h=900&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1706695530&s=169cd4456d479b92089d645d3263aeb4"
            />
            <Li
              title="Websites"
              img="https://made-byshape.transforms.svdcdn.com/production/uploads/images/1.jpg?w=400&h=300&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1706197600&s=a1108c799903ae1359717458b8161120"
            />
            <Li
              title="SEO"
              img="https://made-byshape.transforms.svdcdn.com/production/uploads/images/5.jpg?w=400&h=300&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1706198020&s=28b8a15d782916de99050f012da25cb0"
            />
            <Li
              title="Craft CMS"
              img="https://made-byshape.transforms.svdcdn.com/production/uploads/images/Phone-copy.jpg?w=400&h=300&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1706197678&s=654ae790d2f74cac844446332a73aea7"
            />
            <Li
              title="Shopify"
              img="https://made-byshape.transforms.svdcdn.com/production/uploads/images/workImages/Artboard-1-copy-11-2@2x.jpg?w=400&h=300&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1706198262&s=62857864cb56d06fe177397a4f1c74ca"
            />
          </ul>
        </div>
      </div>
      <div className="absolute w-full h-full   inset-0  flex items-end justify-start">
        <motion.div
          className={`absolute md:sticky bottom-0 left-6 md:bottom-6 md:left-12 bg-white text-black mb-12 md:mt-64 flex justify-center items-center gap-2 px-5 py-1 rounded-full cursor-pointer ${
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
              className="size-14 rounded-full "
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

const Li = ({ title, img }) => {
  return (
    <motion.li className="flex items-center gap-3 py-6 cursor-view md:cursor-none w-full group ">
      <img
        src={img}
        className="h-24 md:h-28 rounded-3xl object-cover w-28 md:group-hover:w-36 md:w-0 md:duration-500 md:transition-[width]"
        alt=""
      />
      <span className="text-4xl md:text-7xl lg:text-8xl text-nowrap font-normal">
        {title}
      </span>
    </motion.li>
  );
};

export default Services;
