import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Tabs from "./Tabs/Tabs";
import StickyScroll from "./StickyScroll/StickyScroll";
import { MENULINKS, WORK_CONTENTS } from "../../constants";

const Work = ({ isDesktop }) => {
  const sectionRef = useRef(null);

 const tabItems = useMemo(
  () => [
    {
      title: (
        <div className="flex items-center gap-2">
          <img src="/infosys.svg" className="w-8 h-8" alt="Infosys" />
          <span>Infosys</span>
        </div>
      ),
      value: "infosys",
      content: <StickyScroll contentItems={WORK_CONTENTS.INFOSYS} />,
    },

    {
      title: (
        <div className="flex items-center gap-2">
          <img src="/vi.svg" className="w-8 h-8" alt="VOIS" />
          <span>VOIS</span>
        </div>
      ),
      value: "vois",
      content: <StickyScroll contentItems={WORK_CONTENTS.VOIS} />,
    },

    {
      title: (
        <div className="flex items-center gap-2">
          <img src="/gdsc.svg" className="w-8 h-8" alt="GDSC" />
          <span>GDSC</span>
        </div>
      ),
      value: "gdsc",
      content: <StickyScroll contentItems={WORK_CONTENTS.GDSC} />,
    },

    {
      title: (
        <div className="flex items-center gap-2">
          <img src="/sapphire.svg" className="w-8 h-8" alt="Sapphire" />
          <span>Sapphire</span>
        </div>
      ),
      value: "sapphire",
      content: <StickyScroll contentItems={WORK_CONTENTS.SAPPHIRE} />,
    },

    {
      title: (
        <div className="flex items-center gap-2">
          <img src="/avalon.png" className="w-8 h-8" alt="Avalon" />
          <span>Avalon</span>
        </div>
      ),
      value: "avalon",
      content: <StickyScroll contentItems={WORK_CONTENTS.AVALON} />,
    },

    {
      title: (
        <div className="flex items-center gap-2">
          <img src="/ecell.png" className="w-8 h-8" alt="E-Cell" />
          <span>E-Cell TEC</span>
        </div>
      ),
      value: "ecell",
      content: <StickyScroll contentItems={WORK_CONTENTS.ECELL} />,
    },
  ],
  []
);


  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "none" } }).from(
        sectionRef.current.querySelectorAll(".staggered-reveal"),
        { opacity: 0, duration: 0.5, stagger: 0.5 },
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
      className="w-full relative select-none xs:mt-40 sm:mt-72 mb-96"
    >
      <img
        src="/left-pattern.svg"
        className="absolute hidden left-0 -top-1/4 w-1/12 max-w-xs md:block"
        loading="lazy"
        alt="left pattern"
      />
      <div className="section-container py-16 flex flex-col justify-center">
        <div className="flex flex-col work-wrapper">
          <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal">
            WORK
          </p>
          <h1 className="text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
            Experience
          </h1>
          <h2 className="text-[1.65rem] font-medium md:max-w-lg w-full mt-2 staggered-reveal">
            A quick recap of where I&apos;ve worked.
          </h2>

          <Tabs tabItems={tabItems} />
        </div>
      </div>
    </section>
  );
};

export default Work;
