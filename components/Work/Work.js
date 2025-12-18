import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import DotPattern from "./DotPattern/DotPattern";
import { MENULINKS, WORK_CONTENTS } from "../../constants";
import { cn } from "utils/cn";

// WorkCard Component (inline)
const WorkCard = ({ work, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef(null);
  const { company, logo, role, content } = work;

  const gradients = [
    "from-purple-500/20 to-pink-500/20",
    "from-blue-500/20 to-cyan-500/20",
    "from-green-500/20 to-emerald-500/20",
    "from-orange-500/20 to-red-500/20",
    "from-indigo-500/20 to-purple-500/20",
    "from-yellow-500/20 to-orange-500/20",
  ];

  const borderGradients = [
    "from-purple-500 to-pink-500",
    "from-blue-500 to-cyan-500",
    "from-green-500 to-emerald-500",
    "from-orange-500 to-red-500",
    "from-indigo-500 to-purple-500",
    "from-yellow-500 to-orange-500",
  ];

  const accentColors = [
    "purple",
    "blue",
    "green",
    "orange",
    "indigo",
    "yellow",
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          end: "top 60%",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={cardRef} className="group relative">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradients[index % gradients.length]} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}
      />
      
      <div className="relative bg-gray-dark-2/50 backdrop-blur-sm rounded-2xl border border-gray-dark-1 overflow-hidden hover:border-gray-light-1/20 transition-all duration-300">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full p-5 sm:p-6 flex items-start justify-between group/button"
        >
          <div className="flex items-start gap-4 flex-1">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className={`relative p-2 rounded-xl bg-gradient-to-br ${borderGradients[index % borderGradients.length]} flex-shrink-0 shadow-lg`}
            >
              <img src={logo} className="w-10 h-10 sm:w-12 sm:h-12" alt={company} />
            </motion.div>
            
            <div className="text-left flex-1 min-w-0">
              <h3 className="text-xl sm:text-2xl font-semibold text-white group-hover/button:text-gray-light-3 transition-colors">
                {company}
              </h3>
              
              <div className="mt-2">
                <span className="text-sm sm:text-base text-gray-light-2 font-medium">
                  {role}
                </span>
              </div>
            </div>
          </div>
          
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
            className="text-gray-light-2 ml-2 flex-shrink-0"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </motion.div>
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden relative"
            >
              {/* Dot Pattern Background */}
              <DotPattern
                width={20}
                height={20}
                cx={1}
                cy={1}
                cr={1}
                className={cn(
                  "absolute inset-0 h-full w-full opacity-30",
                  "[mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]"
                )}
              />

              {/* Gradient overlays */}
              <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index % gradients.length]} opacity-50`} />
              <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent via-transparent to-black/20 z-10" />
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-transparent via-transparent to-black/20 z-10" />

              <div className="relative px-5 sm:px-6 pb-5 sm:pb-6 pt-4 space-y-5 sm:space-y-6">
                {content?.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: idx * 0.15,
                      duration: 0.5,
                      ease: "easeOut"
                    }}
                    className="relative group/item"
                  >
                    {/* Card container with glassmorphism */}
                    <div className="relative bg-black/40 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-black/20">
                      {/* Accent line */}
                      <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${borderGradients[index % borderGradients.length]} rounded-l-xl opacity-60 group-hover/item:opacity-100 transition-opacity`} />
                      
                      {/* Shine effect on hover */}
                      <motion.div
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                      />

                      <div className="relative z-10">
                        {/* Title with icon */}
                        <div className="flex items-start gap-3 mb-3">
                          <div className={`mt-1 p-1.5 rounded-lg bg-${accentColors[index % accentColors.length]}-500/20 flex-shrink-0`}>
                            <svg 
                              className={`w-4 h-4 text-${accentColors[index % accentColors.length]}-400`}
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <h4 className="text-base sm:text-lg font-semibold text-white group-hover/item:text-gray-light-3 transition-colors flex-1">
                            {item.title}
                          </h4>
                        </div>

                        {/* Description */}
                        <p className="text-sm sm:text-base text-gray-light-2 leading-relaxed pl-9">
                          {item.description}
                        </p>
                      </div>

                      {/* Corner accent */}
                      <div className={`absolute top-2 right-2 w-2 h-2 rounded-full bg-${accentColors[index % accentColors.length]}-400 opacity-0 group-hover/item:opacity-100 transition-opacity`}>
                        <span className={`absolute inset-0 rounded-full bg-${accentColors[index % accentColors.length]}-400 animate-ping opacity-75`} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

// Main Work Component
const Work = ({ isDesktop }) => {
  const sectionRef = useRef(null);

  const workExperiences = [
    {
      company: "Infosys",
      logo: "/infosys.svg",
      role: "Software Engineer Intern",
      value: "infosys",
      content: WORK_CONTENTS.INFOSYS,
    },
    {
      company: "VOIS",
      logo: "/vi.svg",
      role: "Data Engineering Intern",
      value: "vois",
      content: WORK_CONTENTS.VOIS,
    },
    {
      company: "GDSC",
      logo: "/gdsc.svg",
      role: "Technical Member",
      value: "gdsc",
      content: WORK_CONTENTS.GDSC,
    },
    {
      company: "Sapphire",
      logo: "/sapphire.svg",
      role: "Backend Developer Intern",
      value: "sapphire",
      content: WORK_CONTENTS.SAPPHIRE,
    },
    {
      company: "Avalon",
      logo: "/avalon.png",
      role: "Frontend Developer",
      value: "avalon",
      content: WORK_CONTENTS.AVALON,
    },
    {
      company: "E-Cell TEC",
      logo: "/ecell.png",
      role: "Webmaster",
      value: "ecell",
      content: WORK_CONTENTS.ECELL,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "none" } }).from(
        sectionRef.current.querySelectorAll(".staggered-reveal"),
        { opacity: 0, duration: 0.5, stagger: 0.3 },
        "<"
      );

      ScrollTrigger.create({
        trigger: sectionRef.current.querySelector(".work-wrapper"),
        start: "100px bottom",
        end: "center center",
        scrub: 0,
        animation: tl,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[3].ref}
      className="w-full relative select-none xs:mt-40 sm:mt-72 mb-20 sm:mb-40"
    >
      <img
        src="/left-pattern.svg"
        className="absolute hidden left-0 -top-1/4 w-1/12 max-w-xs md:block"
        loading="lazy"
        alt="left pattern"
      />
      <div className="section-container py-8 sm:py-16 flex flex-col justify-center">
        <div className="flex flex-col work-wrapper">
          <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal">
            WORK
          </p>
          <h1 className="text-4xl sm:text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
            Experience
          </h1>
          <h2 className="text-xl sm:text-[1.65rem] font-medium md:max-w-lg w-full mt-2 staggered-reveal">
            A quick recap of where I&apos;ve worked.
          </h2>

          <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {workExperiences.map((work, index) => (
              <WorkCard key={work.value} work={work} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;