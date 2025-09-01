"use client";

import { motion,useReducedMotion } from "framer-motion";


import Img1 from "@/assets/Icons/Shape.png";
import Img2 from "@/assets/Icons/Shape1.png";
import Img3 from "@/assets/Icons/Logomark.png";
import Img4 from "@/assets/Icons/Logomark3.png";
import Img5 from "@/assets/Icons/Shape2.png";
import Img6 from "@/assets/Icons/Logomark2.png";

const Promotions = () => {
  const logos = [
    { icon: Img1, title: "Boltshift" },
    { icon: Img2, title: "Lightbox" },
    { icon: Img3, title: "FeatherDev" },
    { icon: Img4, title: "Spherule" },
    { icon: Img5, title: "GlobalBank" },
    { icon: Img6, title: "Nietzsche" },
  ];

  const prefersReduced = useReducedMotion();

  return (
    <section className="py-10 md:pt-15 md:pb-10 px-6 text-center w-full max-w-[1440px] mx-auto">
      <p className="text-[12px] md:text-[16px] text-gray-600">
        Join 4,000+ companies already growing
      </p>
      <div className="block relative mt-5 md:mt-8 overflow-hidden w-full mx-auto"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0, black 6%, black 94%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0, black 6%, black 94%, transparent 100%)",
        }}
      >
        <motion.div
          className="flex items-center w-max gap-8"
          style={{ willChange: "transform" }}
          animate={prefersReduced ? {} : { x: ["-50%", "0%"] }}             // move half the doubled track
          transition={{ duration: 15, ease: "linear", repeat: Infinity }}
        >
          {[...logos, ...logos, ...logos.slice(2) ].map((logo, i) => (
            <div
              key={`${logo.title}-${i}`}
              className="font-semibold text-gray-900 text-md flex items-center gap-x-3 flex-none"
            >
              <img className="size-9" src={logo.icon} alt={logo.title} />
              <h4>{logo.title}</h4>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Optional: static grid on very small screens */}
      {/* <div className="mt-6 grid grid-cols-2 gap-4 md:hidden">
        {logos.map((logo, i) => (
          <div key={i} className="flex items-center gap-x-3 justify-center">
            <img className="size-9" src={logo.icon} alt={logo.title} />
            <h4 className="font-semibold text-gray-900 text-md">{logo.title}</h4>
          </div>
        ))}
      </div> */}
    </section>
  );
};

export default Promotions;
