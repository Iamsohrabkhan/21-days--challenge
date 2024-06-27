const logos = [
  {
    name: "Vercel",
    url: "/marque icon/download (1).svg",
  },

  {
    name: "Vercel",
    url: "/marque icon/download (3).svg",
  },
  {
    name: "Vercel",
    url: "/marque icon/download (4).svg",
  },
  {
    name: "Vercel",
    url: "/marque icon/download (5).svg",
  },
  {
    name: "Vercel",
    url: "/marque icon/download (6).svg",
  },
  {
    name: "Vercel",
    url: "/marque icon/download (7).svg",
  },
  {
    name: "Vercel",
    url: "/marque icon/download (8).svg",
  },
  {
    name: "Vercel",
    url: "/marque icon/download (9).svg",
  },
  {
    name: "Vercel",
    url: "/marque icon/download (10).svg",
  },
  {
    name: "Vercel",
    url: "/marque icon/download (6).svg",
  },
  {
    name: "Vercel",
    url: "/marque icon/download (11).svg",
  },
  {
    name: "Vercel",
    url: "/marque icon/download (12).svg",
  },
 
];

const AnimatedLogoCloud = () => {
  return (
    <div className="w-full py-12 ">
      <div className="mx-auto w-full px-4 md:px-8">
        <div
          className="group relative mt-6 flex gap-6 overflow-hidden p-2"
          style={{
            maskImage:
              "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)",
          }}
        >
          {Array(5)
            .fill(null)
            .map((_,index) => (
              <div
                key={index}
                className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-24"
              >
                {logos.map((logo, key) => (
                  <img
                    key={key}
                    src={logo.url}
                    className="h-16 w-36 px-2 "
                    alt={`${logo.name}`}
                  />
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedLogoCloud;
