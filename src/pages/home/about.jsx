import { Button } from "../../component/button";
import OutlineButton from "../../component/outlinebutton";

const About = () => {
  return (
    <section className="mt-36 container">
      <div className="flex justify-between items-start px-6">
        <h3 className="space-x-2 basis-2/5">
          <span className="inline-block size-1.5 bg-black rounded-full" />
          <span className="text-base inline-block">Who we are?</span>
        </h3>
        <div className="basis-3/5">
          <p className="text-4xl font-normal   text-balance">
            An independent web design and branding agency in Manchester set up
            in 2010 who care, build relationships, have industry experience, and
            win awards.
          </p>
          <div className="flex mt-4 gap-4">
            <Button>About Shape</Button>
            <OutlineButton>Meet with team</OutlineButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
