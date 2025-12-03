import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "utils/cn";

const Tab = ({ index, tab, activeTab, handleOnClick, setIsHovering }) => {
  return (
    <button
      onMouseDown={() => handleOnClick(index)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative px-3 py-1 rounded-full cursor-none whitespace-nowrap"
      style={{ transformStyle: "preserve-3d" }}
    >
      {activeTab.value === tab.value && (
        <motion.div
          layoutId="clickedbutton"
          transition={{ type: "spring", bounce: 0.3, duration: 0.7 }}
          className="absolute inset-0 bg-gray-dark-2 rounded-full"
        />
      )}

      <span
        className={cn(
          "relative text-white top-[3px] flex items-center gap-2 link",
          tab.value !== activeTab.value && "hover:text-gray-light-3"
        )}
      >
        {tab.title}
      </span>
    </button>
  );
};

const TabsContent = ({ tabs }) => {
  return (
    <div className="relative w-full h-full">
      {tabs.map((tab, index) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          className="w-full h-full absolute top-0 left-0 mt-16 sm:mt-20"
          style={{
            opacity: index === 0 ? 1 : 0,
            zIndex: -index,
          }}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
};

const mouseClickSound = new Howl({
  src: ["/sounds/mouse-click.mp3"],
});

const Tabs = ({ tabItems }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [tabs, setTabs] = useState(tabItems);
  const [activeTab, setActiveTab] = useState(tabItems[0]);

  const handleOnClick = (index) => {
    const updatedTabs = [...tabItems];
    const selected = updatedTabs.splice(index, 1);
    updatedTabs.unshift(selected[0]);

    setTabs(updatedTabs);
    setActiveTab(updatedTabs[0]);

    mouseClickSound.play();
  };

  return (
    <div className="staggered-reveal">
      <div className="
        pt-10 flex flex-row justify-start items-center gap-4 
        overflow-x-auto sm:overflow-visible no-visible-scrollbar 
        w-full whitespace-nowrap
      ">
        {tabItems.map((tab, index) => (
          <Tab
            key={index}
            index={index}
            tab={tab}
            activeTab={activeTab}
            handleOnClick={handleOnClick}
            setIsHovering={setIsHovering}
          />
        ))}
      </div>

      <TabsContent tabs={tabs} isHovering={isHovering} />
    </div>
  );
};

export default Tabs;
