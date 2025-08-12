import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

import akayCity from "@/assets/akay_city.png";
import bosch from "@/assets/bosch.png";
import cocaCola from "@/assets/coca_cola.png";
import sariq from "@/assets/sariq.png";
import iftah from "@/assets/iftah.png";
import piona from "@/assets/piona.png";
import sports from "@/assets/sports.png";
import correctDoors from "@/assets/correct_doors.png";
import abi from "@/assets/abi.png";

interface SponsorProps {
  logo: string;
  name: string;
}

const sponsors: SponsorProps[] = [
  { logo: akayCity, name: "Akay City" },
  { logo: bosch, name: "Bosch" },
  { logo: cocaCola, name: "Coca Cola" },
  { logo: sariq, name: "Sariq" },
  { logo: iftah, name: "Iftah" },
  { logo: piona, name: "Piona" },
  { logo: sports, name: "Sports" },
  { logo: correctDoors, name: "Correct Doors" },
  { logo: abi, name: "ABI" },
];

export const Sponsors = () => {
  const controls = useAnimation();
  const [isMobile, setIsMobile] = useState(false);

  // Ekran o'lchamini aniqlash
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Pulsatsiya effekti
  useEffect(() => {
    controls.start({
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "mirror",
      },
    });
  }, [controls]);

  return (
    <section
      id="brands"
      className="w-full overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-white to-white dark:from-[#0b0a09] dark:to-[#0b0a09]"
    >
      <div className="text-center mb-12">
        <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#981a41] via-[#b2355f] to-[#d84a7e] bg-clip-text text-transparent">
          Bizning mijozlarimiz
        </span>
        <p className="text-muted-foreground mt-6 text-xl ">
          Ishonchli brendlar bizga ishonishadi. Siz ham o'z biznesingizni bizga ishoning !
        </p>
      </div>

      {/* Carousel */}
      <motion.div
        className="flex gap-24"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          duration: isMobile ? 4 : 20, 
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...sponsors, ...sponsors].map(({ logo, name }, i) => (
          <motion.div
            key={i}
            animate={controls}
            whileHover={{
              scale: 1.3,
              filter: "grayscale(0%)",
              boxShadow: "0px 20px 40px rgba(128, 0, 128, 0.6)",
              zIndex: 10,
            }}
            className="flex-shrink-0 flex items-center justify-center cursor-pointer rounded-2xl"
          >
            <motion.img
              src={logo}
              alt={name}
              loading="lazy"
              className={`object-contain filter grayscale hover:grayscale-0 transition-all duration-500 ${
                isMobile ? "h-28 w-auto" : "h-40 w-auto"
              }`}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
