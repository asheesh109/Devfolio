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
    name: "Coding Profiles",
    ref: "coding",
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
        "Infosys Springboard is a global learning and development platform designed to train students and professionals in software engineering, cloud computing, and enterprise technologies through industry-aligned programs.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Full Stack Developer Intern
        </div>
      ),
    },
    {
      title: "Engineering Work",
      description:
        "Developed full stack features using React.js and Spring Boot REST APIs. Enhanced backend business logic, optimized SQL queries, and ensured reliable integration between frontend and backend systems.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          React × Spring Boot Development
        </div>
      ),
    },
    {
      title: "Impact",
      description:
        "Improved application performance, resolved UI inconsistencies, collaborated in Agile teams, and followed enterprise-grade development workflows, code reviews, and best practices.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Enterprise Software Experience
        </div>
      ),
    },
  ],

  VOIS: [
    {
      title: "VOIS (Vodafone Intelligent Solutions)",
      description:
        "VOIS is Vodafone’s global capability center driving data analytics, automation, and digital transformation initiatives across international markets.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Data Analytics Intern
        </div>
      ),
    },
    {
      title: "Data Engineering",
      description:
        "Built Python and SQL-based data analysis workflows, developed lightweight ETL pipelines, and automated data validation processes to support analytics and reporting systems.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Python & SQL Pipelines
        </div>
      ),
    },
    {
      title: "Impact",
      description:
        "Enhanced data accuracy and consistency, reduced manual validation efforts, and collaborated with cross-functional teams to improve the reliability of business insights.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Data Quality & Reliability
        </div>
      ),
    },
  ],

  GDSC: [
    {
      title: "Google Developer Student Club",
      description:
        "Google Developer Student Clubs (GDSC) are Google-backed communities that help students gain practical experience through hands-on projects, workshops, and peer learning.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Core Technical Member
        </div>
      ),
    },
    {
      title: "Technical Leadership",
      description:
        "Organized and conducted Web Development and AI workshops for 200+ students, mentored juniors, and actively contributed to multiple technical initiatives and projects.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Web & AI Workshops
        </div>
      ),
    },
    {
      title: "Impact",
      description:
        "Strengthened the club’s technical ecosystem, improved student engagement, and helped build a collaborative learning culture focused on real-world engineering skills.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Community & Skill Building
        </div>
      ),
    },
  ],

  SAPPHIRE: [
    {
      title: "Sapphire Infocam Pvt. Ltd.",
      description:
        "Sapphire Infocam develops enterprise-grade software solutions and digital platforms for businesses using modern full stack technologies.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Full Stack Developer Intern
        </div>
      ),
    },
    {
      title: "Full Stack Development",
      description:
        "Developed full stack modules using the MERN stack, built reusable React components, integrated REST APIs, fixed bugs, and improved overall UI responsiveness.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          MERN Stack Engineering
        </div>
      ),
    },
    {
      title: "Impact",
      description:
        "Delivered pixel-perfect UI in collaboration with designers, optimized frontend performance, and built stable backend services that directly improved product quality and user experience.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Production-Ready Systems
        </div>
      ),
    },
  ],

  AVALON: [
    {
      title: "Avalon TechFest",
      description:
        "Contributed to the official website of Avalon TechFest, supporting registrations and event information for 1000+ students across multiple technical events.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Developer
        </div>
      ),
    },
    {
      title: "Frontend Engineering",
      description:
        "Developed interactive UI components, animations, and transitions using React.js and Framer Motion to deliver a modern and engaging user experience.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          React × Framer Motion
        </div>
      ),
    },
    {
      title: "Impact",
      description:
        "Improved website usability, reduced UI bugs, and enhanced overall user engagement during high-traffic event registration periods.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          High-Traffic UI Optimization
        </div>
      ),
    },
  ],

  ECELL: [
    {
      title: "E-Cell (Entrepreneurship Cell)",
      description:
        "Served as Webmaster for the Entrepreneurship Cell, managing and maintaining the official website to support events, initiatives, and registrations.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Webmaster & React Developer
        </div>
      ),
    },
    {
      title: "Web Development",
      description:
        "Implemented UI upgrades, developed new event pages, improved website performance, and built interactive components using React.js and JavaScript.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          React × JavaScript Development
        </div>
      ),
    },
    {
      title: "Impact",
      description:
        "Enhanced website stability and performance, ensured smooth event visibility, and supported seamless registrations for multiple college-wide initiatives.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Scalable Event Platform
        </div>
      ),
    },
  ],
};




export const GTAG = "G-5HCTL2TJ5W";
