import Banner from "./banner";
import About from "./about";
import AnimatedLogoCloud from "./AnimatedLogoCLould";
import Work from "./work";
import Services from "./services";
import Marque from "./marque";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <AnimatedLogoCloud />
      <Work />
      <Services />
      <Marque className="mt-24">Let&apos;s Work Together.</Marque>
      <Marque className="" direction="reverse">
        Let&apos;s Work Together.
      </Marque>
      


    </>
  );
};

export default Home;
