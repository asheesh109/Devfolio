export const METADATA = {
  author: "Ashish Parab",
  title: "Portfolio | Ashish Parab",
  description:
    "Ashish Parab is a passionate Backend Engineer, dedicated to building scalable, reliable, and cloud native systems that power real world applications.",
  siteUrl: "https://portfolio-ashish03.web.app/",
  twitterHandle: "@ParabAshis49319",
  keywords: [
   "Ashish Parab",
"Backend & Cloud Engineer",
"Microservices Architect",
"Scalable Systems Builder",
"Tech Explorer",
"Portfolio",
"Devfolio",
"Folio",

  ].join(", "),
  
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "A passionate Backend Engineer",

"I build systems that scale",

"I craft modern and reliable apps",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: ashishparab03@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/ashishparab03/",
  },
  {
    name: "github",
    url: "https://github.com/asheesh109",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/aasheeshhh_/",
  },
  {
    name: "twitter",
    url: "https://x.com/ParabAshis49319",
  },
  {
    name: "leetcode",
    url: "https://leetcode.com/u/ashsheesh03/", 
  }
];

export const SKILLS = {
  languagesAndTools: [
    
    "java",
    "python",
    "javascript",
    "typescript",
    "cprograming",
    "shell",
    "sql",
    
  ],
  librariesAndFrameworks: [
    "html",
    "css",
    "vite",
    "hibernet",
    "nodejs",
    "express",
    "react",
    "redux",
    "nextjs",
    "tailwindcss",
    "springboot",
  ],
  databases: [
    "mysql",
    "mongodb",
    "postgresql"
   ],
  other: [
    "git",
    "aws",
    "docker",
    "kubernetes",
    "linux",
    "vscode",
    "postman" ,
    "firebase"
  ],
};

export const PROJECTS = [
  // ---------- Your Projects Start Here ----------
  {
    name: "KisanAI",
    imageKey: "nextboss",
    description:
      "AI-powered farmer assistant with multilingual support, voice interaction, plant disease detection, weather forecasting, live market data & govt scheme assistance.",
    gradient: ["#4CAF50", "#8BC34A"],
    url: "https://kisan-ai-m12i.vercel.app/",
    tech: ["react", "nextjs", "nodejs",],
  },
  {
    name: "YoChat",
    imageKey: "ready-ai",
    description:
      "Real-time full stack group chat application where users can create rooms and chat instantly using WebSockets.",
    gradient: ["#1E88E5", "#42A5F5"],
    url: "https://yoo-chats.web.app/register",
    tech: ["react", "nodejs", "mongodb", "socketio"],
  },
  {
    name: "Plant-o-Pedia",
    imageKey: "round1",
    description:
      "Interactive plant learning app with 3D medical plant models, plant identification tools, virtual garden & plant quiz experience.",
    gradient: ["#2E7D32", "#66BB6A"],
    url: null,
    tech: ["javascript", "html", "tailwindcss"],
  },
  {
    name: "Digital Katta",
    imageKey: "react-native-directory",
    description:
      "A complete portfolio website for Digital Katta — a digital branding & marketing agency.",
    
    gradient: ["#7E57C2", "#B39DDB"],
    url: "https://digitalkatta-sp.web.app/",
    tech: ["react", "firebase", "mongodb"],
  },
  {
    name: "Bon Apetite",
    imageKey: "buywow",
    description:
      "Explore Indian food culture & discover recipes from different states through a clean and interactive interface.",
    gradient: ["#FF7043", "#FFAB91"],
    url: "https://asheesh109.github.io/Bon_Apetite/",
    tech: ["html", "css", "javascript"],
  },
  {
    name: "QA Bot",
    imageKey: "bot9",
    description:
      "Real-time sentiment analysis toolkit for customer support conversations using NLP, improving agent performance.",
    gradient: ["#D81B60", "#F06292"],
    url: "https://github.com/asheesh109/QA-BOT",
    tech: ["python", "flask", "gemini",],
  },
  {
    name: "Smart Hospital",
    imageKey: "dukaan",
    description:
      "Complete hospital management desktop software with AI assistance, appointment booking & doctor chat.",
    gradient: ["#2E7D32", "#66BB6A"],
    url: "https://github.com/asheesh109/Smart-Hospital",
    tech: ["java", "mysql", "gemini"],
  },
  {
    name: "Restaurant POS System",
    imageKey: "tesla",
    description:
      "Comprehensive restaurant management desktop software with full POS workflow & clean UI.",
   
    gradient: ["#0097A7", "#26C6DA"],
    url: "https://github.com/asheesh109/Restaurant-Management-System",
    tech: ["java", "mysql"],
  },
  {
    name: "Virtual Bank System",
    imageKey: "airbnb",
    description:
      "End-to-end banking management desktop software offering all essential modern banking features.",
    gradient: ["#1565C0", "#42A5F5"],
    url: "https://github.com/asheesh109/Virtual-Bank-System",
    tech: ["java","mysql"],
  },
  {
    name: "Speed-O-Type",
    imageKey: "medium",
    description:
      "Typing speed test platform to measure speed, accuracy & typing consistency.",
     gradient: ["#D84315", "#FF7043"],
    url: "https://speed-o-type.web.app/",
    tech: ["react"],
  },


];



export const WORK_CONTENTS = {
  INFOSYS: [
    {
      title: "Infosys Springboard",
      description:
        "Infosys Springboard is a global learning and development platform enabling students and developers to master software engineering, cloud, and enterprise technologies through hands on modules.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Full Stack Developer Intern
        </div>
      ),
    },
    {
      title: "Engineering",
      description:
        "Built full stack features using React.js and Spring Boot REST APIs. Improved backend logic, optimized SQL queries, and ensured delivery of stable, high performance modules.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          React × Spring Boot Integrations
        </div>
      ),
    },
    {
      title: "Impact",
      description:
        "Enhanced backend response times, fixed UI inconsistencies, collaborated in Agile teams, and contributed to enterprise level development workflows and best practices.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Enterprise Development Experience
        </div>
      ),
    },
  ],

  VOIS: [
    {
      title: "VOIS (Vodafone Intelligent Solutions)",
      description:
        "VOIS is Vodafone’s global innovation hub powering automation, data intelligence, and digital solutions across the enterprise.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Data Analytics Intern
        </div>
      ),
    },
    {
      title: "Analytics",
      description:
        "Developed Python and SQL driven data analysis workflows. Built lightweight ETL pipelines, automated validation checks, and enhanced data quality for business insights.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Python & SQL Pipelines
        </div>
      ),
    },
  ],

  GDSC: [
    {
      title: "Google Developer Student Club",
      description:
        "GDSC is a global developer community supported by Google, enabling students to learn new technologies through real world projects and workshops.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Core Tech Member
        </div>
      ),
    },
    {
      title: "Leadership",
      description:
        "Conducted Web Development and AI workshops for 200+ students, mentored juniors, and contributed to the technical backbone of multiple GDSC projects.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Web & AI Workshops
        </div>
      ),
    },
  ],

  SAPPHIRE: [
    {
      title: "Sapphire Infocam Pvt. Ltd.",
      description:
        "Sapphire Infocam builds enterprise software and digital solutions for businesses across multiple domains using modern engineering stacks.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Full Stack Developer Intern
        </div>
      ),
    },
    {
      title: "Development",
      description:
        "Developed full stack modules using the MERN stack. Built reusable React components, integrated APIs, fixed bugs, and improved UI responsiveness across the platform.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          MERN Stack Development
        </div>
      ),
    },
    {
      title: "Impact",
      description:
        "Delivered pixel perfect UI in collaboration with designers, optimized frontend performance, and built stable backend services directly improving product quality and user experience.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Production Ready Engineering
        </div>
      ),
    },
  ],

  AVALON: [
    {
      title: "Avalon",
      description:
        "Worked as a contributor for Avalon's official website, improving UI, fixing bugs, and enhancing user experience for over 1000+ students who registered for various tech events.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          React × Framer Motion Development
        </div>
      ),
    },
    {
      title: "Frontend Engineering",
      description:
        "Developed animations, transitions, and interactive UI components using React.js and Framer Motion, ensuring a high-quality modern web experience.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          UI/UX + Motion Engineering
        </div>
      ),
    },
  ],

  ECELL: [
    {
      title: "ECell",
      description:
        "Served as a Webmaster in the E-Cell of TEC, maintaining and updating the official website and ensuring seamless event visibility and registrations.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Webmaster - React Developer
        </div>
      ),
    },
    {
      title: "Development",
      description:
        "Worked on several UI upgrades, added new event pages, improved website performance, and implemented interactive components using React.js & JavaScript.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          React × JavaScript Engineering
        </div>
      ),
    },
  ],
};




export const GTAG = "G-5HCTL2TJ5W";
