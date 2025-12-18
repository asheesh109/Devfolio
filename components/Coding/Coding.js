import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import GitHubStats from "./GithubStats/GitHubStats";
import GitHubCalendar from "./GithubCalendar/GitHubCalendar";
import LeetCodeStats from "./LeetCodeStats/LeetCodeStats";
import PlatformCard from "./PlatformCrad/PlatformCard";
import { MENULINKS } from "../../constants";
import Image from "next/image";

const Coding = ({ isDesktop }) => {
  const sectionRef = useRef(null);
  
  // Replace with your actual usernames
  const githubUsername = "asheesh109";
  const leetcodeUsername = "ashsheesh03";

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "none" } }).from(
        sectionRef.current.querySelectorAll(".staggered-reveal"),
        { opacity: 0, duration: 0.5, stagger: 0.5 }
      );

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top bottom",
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
      id={MENULINKS[4]?.ref || "coding"}
      className="w-full relative select-none xs:mt-40 sm:mt-72 mb-20"
    >
      <img
        src="/right-pattern.svg"
        className="absolute hidden right-0 -top-1/4 w-1/12 max-w-xs md:block"
        loading="lazy"
        alt="right pattern"
      />
      
      <div className="section-container py-16 flex flex-col justify-center">
        <div className="flex flex-col">
          <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal">
            CODING PROFILES
          </p>
          <h1 className="text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
            My Stats
          </h1>
          <h2 className="text-[1.65rem] font-medium md:max-w-lg w-full mt-2 staggered-reveal">
            A snapshot of my coding journey and key achievements.
          </h2>

          {/* GitHub Section */}
          <div className="mt-16 staggered-reveal">
            <div className="flex items-center gap-3 mb-5">
              <Image 
                src="/github.png" 
                width={40} 
                height={40} 
                alt="GitHub"
                className="w-12 h-12"
              />
              <h3 className="text-3xl font-semibold text-white">GitHub</h3>
            </div>
            
            <div className="space-y-8">
              <GitHubStats username={githubUsername} />
              
             <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 max-w-4xl">
  <h4 className="text-xl font-medium mb-4 text-gray-300">Contribution Activity</h4>
  <GitHubCalendar username={githubUsername} />
</div>
            </div>
          </div>

          {/* LeetCode Section */}
          <div className="mt-16 staggered-reveal">
            <div className="flex items-center gap-3 mb-6">
              <Image 
                src="/leetcode.png" 
                width={32} 
                height={32} 
                alt="LeetCode"
                className="w-10 h-10"
              />
              <h3 className="text-3xl font-semibold text-white">LeetCode</h3>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
              <LeetCodeStats username={leetcodeUsername} />
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Coding;