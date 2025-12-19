import { useState, useRef } from "react";
import audio from "../../../public/sounds/song.mp3";

const SoundBar = () => {
  const soundBarEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying((prev) => {
      if (!prev) soundBarEl.current.play();
      else soundBarEl.current.pause();
      return !prev;
    });
  };

  return (
    <div
      onClick={togglePlayPause}
      aria-label="music"
      className={`
        soundBars link flex items-end justify-center gap-[3px] cursor-pointer
        transition-all duration-300
        ${isPlaying ? "scale-105 drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]" : "opacity-80"}
      `}
    >
      {/* Bar 1 */}
      <span
        className={`
          w-[3px] rounded bg-white transition-all duration-300
          ${isPlaying ? "h-5 animate-pulse" : "h-2"}
        `}
      />
      {/* Bar 2 */}
      <span
        className={`
          w-[3px] rounded bg-white transition-all duration-300
          ${isPlaying ? "h-4 animate-[pulse_0.8s_ease-in-out_infinite]" : "h-3"}
        `}
      />
      {/* Bar 3 */}
      <span
        className={`
          w-[3px] rounded bg-white transition-all duration-300
          ${isPlaying ? "h-6 animate-[pulse_1s_ease-in-out_infinite]" : "h-4"}
        `}
      />
      {/* Bar 4 */}
      <span
        className={`
          w-[3px] rounded bg-white transition-all duration-300
          ${isPlaying ? "h-3 animate-[pulse_0.7s_ease-in-out_infinite]" : "h-2"}
        `}
      />

      <audio ref={soundBarEl} src={audio} loop preload="auto" />
    </div>
  );
};

export default SoundBar;
