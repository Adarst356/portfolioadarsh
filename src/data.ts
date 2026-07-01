import { Project, Experience, SkillGroup } from './types';

export const personalInfo = {
  name: "Adarsh Tiwari",
  title: "Flutter & Android Developer",
  subTitle: "Crafting High-Performance Mobile Applications",
  experienceYears: "1.5+",
  email: "adarsht356@gmail.com",
  phone: "+91 81750 44032",
  linkedin: "https://linkedin.com/in/adarsh-tiwari-tr",
  github: "https://github.com/Adarst356",
  resumeUrl: "https://drive.google.com/file/d/1lKHKOKD1kRdAtCmWFIaVD-FyRWweh4Ut/view?usp=sharing",
  location: "Lucknow, India",
  summary: "Passionate and detail-oriented Flutter Developer currently working at Tech FusionCode Technologies Pvt. Ltd. Skilled in designing, developing, and maintaining high-performance cross-platform mobile applications. Experienced in Flutter, Dart, Firebase, REST API integration, and native Android development. Successfully resolved 100+ development tickets, contributing to improved stability and user experience. Strong in UI/UX implementation, performance optimization, and collaborative development."
};

export const skillsData: SkillGroup[] = [
  {
    category: "Programming Languages",
    skills: ["Dart", "Java", "Kotlin", "JavaScript", "SQL"]
  },
  {
    category: "Mobile Frameworks",
    skills: ["Flutter", "Android SDK", "Android Native", "Compose (Learning)"]
  },
  {
    category: "State Management",
    skills: ["GetX"]
  },
  {
    category: "Backend & APIs",
    skills: ["REST API", "Retrofit", "Firebase Auth", "Cloud Functions"]
  },
  {
    category: "Databases & Storage",
    skills: ["Firebase Firestore", "Realtime Database", "Hive", "GetStorage", "SQLite"]
  },
  {
    category: "UI/UX & Tools",
    skills: ["Material Design", "Custom UI Paint", "Motion & Animations", "Responsive Design", "Git & GitHub", "Android Studio", "VS Code"]
  },
  {
    category: "Architecture",
    skills: ["MVVM", "MVC", "Clean Architecture", "Design Patterns"]
  }
];

export const experienceData: Experience[] = [
  {
    id: "exp-1",
    role: "Flutter & Android Developer",
    company: "Tech FusionCode Technologies Pvt. Ltd.",
    period: "April 2025 – Present",
    bullets: [
      "Designed, developed, and maintained production-ready mobile applications using Flutter and native Android.",
      "Implemented complex REST APIs, optimized app rendering and launch times, and delivered smooth, responsive UI/UX designs.",
      "Integrated secure Firebase services including phone/email authentication, Realtime Database synchronization, and Firebase Cloud Messaging.",
      "Successfully resolved 100+ development tickets related to memory leaks, crashes, and performance bottlenecks across various modules."
    ]
  },
  {
    id: "exp-2",
    role: "Java Intern",
    company: "Analyze Infotech Pvt. Ltd.",
    period: "Aug 2024 – Dec 2024",
    bullets: [
      "Completed intensive Java training through hands-on project and desktop application development.",
      "Learned core Java concepts, object-oriented programming (OOP) principles, multi-threading, and database connection configurations.",
      "Built mock application modules to practice standard software development lifecycle stages."
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "proj-fieldforce",
    title: "Dubai Field Force Attendance App",
    subtitle: "Enterprise Attendance & Real-Time GPS Tracking Portal",
    description: "A specialized high-utility tracking and workforce management solution developed for enterprises in Dubai. Allows construction and labor forces to perform remote punch-ins and punch-outs with geo-fencing, capturing precise live locations, and generating structured attendance reports for managers.",
    bullets: [
      "Implemented a bulletproof Labor Punch-In / Punch-Out attendance workflow with local caching for offline safety.",
      "Integrated real-time location fetching and geo-fencing capabilities to prevent fraudulent or off-site attendance punches.",
      "Designed a highly optimized attendance log and visual history dashboard featuring monthly statistics, status checks, and punch details.",
      "Engineered responsive UI controls using GetX state management to deliver instant, fluid state updates for fields workers under extreme environmental conditions."
    ],
    tech: ["Flutter", "GetX", "Geolocator API", "Google Maps SDK", "REST APIs", "Hive Cache"],
    category: "work"
  },
  {
    id: "proj-lapubook",
    title: "LapuBook",
    subtitle: "Multi-Role Distributor & Retailer Management System",
    description: "A highly scalable mobile app supporting Retailer, Distributor, and FOS (Field Officer) logins with dynamic role-based access controls and customized administrative dashboard configurations.",
    bullets: [
      "Implemented secure session handling and role-based multi-user login routing for three distinct business tiers.",
      "Integrated an end-to-end UPI-based payment gateway enabling fluid ledger balancing and fund collection records.",
      "Built a robust FOS (Field Officer) module to oversee retailer outstanding payments, ledger actions, and live field activity.",
      "Created sleek, custom Bottom Sheets for rapid transaction filters and advanced table queries with server-side pagination."
    ],
    tech: ["Flutter", "GetX", "UPI Gateway", "REST APIs", "Clean Architecture"],
    category: "crm"
  },
  {
    id: "proj-dukaanmitra",
    title: "Dukaan Mitra",
    subtitle: "All-in-One Business & Multi-Role Commerce Management App",
    description: "A comprehensive business-facing platform supporting Admin, Sales, Customer Care, Field Inspectors, Delivery Boys, and Customers with tailored dashboards.",
    bullets: [
      "Built custom multi-role dashboard widgets with secure, stateful session routing.",
      "Designed a smart loan-based purchase module complete with approval workflow matrices and item tracking.",
      "Integrated a field inspection module allowing inspectors to submit photo proof and custom remarks directly from site visits.",
      "Developed a real-time order delivery tracker for delivery partners to manage dispatch dispatches and update drop-off statuses."
    ],
    tech: ["Flutter", "GetX", "Clean Architecture", "REST API", "Image Upload"],
    category: "crm"
  },
  {
    id: "proj-billkart",
    title: "BillKart",
    subtitle: "Fintech Recharge & Payment Application",
    description: "A secure, production-grade utility bill payment and wallet manager featuring dynamic payment workflows and clean architectural patterns.",
    bullets: [
      "Designed dynamic API clients using GetConnect supporting prepaid/DTH recharge and instant transaction responses.",
      "Integrated Razorpay & UPI APIs for swift wallet top-ups paired with secure, server-side transaction validations.",
      "Created highly interactive engagement rewards such as an in-app Spin Wheel and dynamic scratch coupon engines.",
      "Structured code using a clean, maintainable MVVM architecture with lightweight local caching using GetStorage."
    ],
    tech: ["Flutter", "GetX", "GetStorage", "Razorpay", "MVVM"],
    category: "fintech"
  },
  {
    id: "proj-crm",
    title: "CRM Lead Management App",
    subtitle: "Enterprise Lead Tracking & Sales Funnel Solution",
    description: "A responsive, client-facing CRM designed to log, manage, and nurture sales leads with customized timelines and action tracking.",
    bullets: [
      "Created interactive Lead Listing and Detail panels with visual status cards and quick navigation tabs.",
      "Developed a custom timeline visualization displaying sequential lead actions in structured 4-hour scheduled slots.",
      "Designed bottom sheets to allow sales reps to log quick follow-up notes, next call times, and change lead warmth states instantly."
    ],
    tech: ["Flutter", "GetX", "REST API", "Material Design Timeline"],
    category: "crm"
  },
  {
    id: "proj-wesavemore",
    title: "We Save More",
    subtitle: "Live Play Store Utility Recharge Application",
    description: "A live consumer application released on the Google Play Store to streamline mobile recharge, wallet tracking, and payment processes.",
    bullets: [
      "Engineered prepaid/postpaid, DTH recharge, and transaction history modules.",
      "Managed the full release pipeline, optimizing build bundle size and establishing App Store optimization assets.",
      "Integrated secure payment workflows with automated retry logics for unstable network conditions."
    ],
    tech: ["Flutter", "GetX", "Play Store Deployment", "REST API"],
    category: "fintech"
  }
];

export const educationData = {
  degree: "B.Tech (Computer Science Engineering)",
  period: "Jul 2021 – May 2025",
  institution: "BN College of Engineering and Technology, Lucknow",
  gpa: "CGPA: 7.5/10",
  details: "Specialized in software engineering principles, algorithms, data structures, and database management systems. Participated actively in mobile app development hackathons."
};
