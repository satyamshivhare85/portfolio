// export const PROJECTS = [
//   {
//     title: "VoteMitra",

//     tagline: "AI-Powered Secure Voting Infrastructure",

//     description:
//       "Designed and developed a production-oriented voting platform leveraging facial recognition, duplicate-vote prevention, and real-time identity verification. Engineered for high security, low latency, and scalable citizen authentication.",

//     metrics: [
//       ">90% Face Recognition Accuracy",
//       "-35% Inference Latency",
//       "O(1) Identity Lookup",
//     ],

//     tech: [
//       "Python",
//       "OpenCV",
//       "KNN",
//       "TensorFlow.js",
//       "Node.js",
//       "Express.js",
//       "MongoDB",
//     ],

//     award: "Hackathon Winner",

//     type: "AI & Security",

//     github: "#",

//     live: "#",

//     status: "Government Tech",
//   },

//   {
//     title: "SecureAuthX",

//     tagline: "Enterprise Authentication & Authorization System",

//     description:
//       "Built a scalable backend authentication architecture implementing JWT authentication, RBAC authorization, Redis caching, CSRF protection, and secure session handling optimized for production-grade applications.",

//     metrics: [
//       "40% Faster Read Operations",
//       "RBAC Authorization",
//       "Redis Session Optimization",
//     ],

//     tech: [
//       "Node.js",
//       "Express.js",
//       "JWT",
//       "Redis",
//       "PostgreSQL",
//       "Prisma",
//     ],

//     award: "Freelance Project",

//     type: "Backend Security",

//     github: "#",

//     live: "#",

//     status: "Production Ready",
//   },

//   {
//     title: "VibeCode",

//     tagline: "AI-Powered Cloud Development Environment",

//     description:
//       "Developed a browser-based cloud IDE with isolated Docker execution environments, Monaco Editor integration, and secure containerized runtime execution supporting scalable remote code execution.",

//     metrics: [
//       "Secure Docker Isolation",
//       "Reduced Container Startup",
//       "Cloud Execution Runtime",
//     ],

//     tech: [
//       "Next.js",
//       "Docker",
//       "Monaco Editor",
//       "WebContainers",
//       "Node.js",
//     ],

//     award: "Top Innovation",

//     type: "Full Stack",

//     github: "#",

//     live: "#",

//     status: "Cloud Native",
//   },

//   {
//     title: "EchoSphere",

//     tagline: "Real-Time AI Communication Platform",

//     description:
//       "Engineered an event-driven communication platform supporting ultra-low latency messaging and scalable real-time synchronization using WebSockets and distributed backend systems.",

//     metrics: [
//       "Real-time Event Sync",
//       "Low Latency Messaging",
//       "Distributed Event Handling",
//     ],

//     tech: [
//       "Socket.io",
//       "WebSockets",
//       "Redis",
//       "Node.js",
//       "MongoDB",
//     ],

//     type: "Networking",

//     github: "#",

//     live: "#",

//     status: "Scalable Architecture",
//   },

//   {
//     title: "High-Performance Java Server",

//     tagline: "Custom TCP-Based Web Server",

//     description:
//       "Implemented a low-level multithreaded web server from scratch using Java sockets and ExecutorService thread pools. Optimized concurrency handling and custom HTTP request parsing for performance-focused backend systems.",

//     metrics: [
//       "Thread Pool Optimization",
//       "Reduced Context Switching",
//       "Custom Request Parsing",
//     ],

//     tech: [
//       "Java",
//       "Sockets",
//       "ExecutorService",
//       "TCP/IP",
//       "Multithreading",
//     ],

//     type: "Systems Engineering",

//     github: "#",

//     live: "#",

//     status: "Performance Engineered",
//   },

//   {
//     title: "InventoryAI",

//     tagline: "Real-Time Intelligent Inventory Platform",

//     description:
//       "Building an AI-enhanced inventory tracking ecosystem featuring predictive stock analytics, role-based dashboards, live synchronization, and scalable backend infrastructure for enterprise inventory management.",

//     metrics: [
//       "Real-time Inventory Tracking",
//       "AI Stock Prediction",
//       "RBAC Dashboard System",
//     ],

//     tech: [
//       "React",
//       "Node.js",
//       "MongoDB",
//       "Socket.io",
//       "Redis",
//       "Express.js",
//     ],

//     type: "Enterprise Platform",

//     github: "#",

//     live: "#",

//     status: "Enterprise Grade",
//   },

//   {
//     title: "DSA Analytics Tracker",

//     tagline: "Competitive Programming Performance Dashboard",

//     description:
//       "Created a developer analytics dashboard tracking coding performance, problem-solving consistency, and algorithmic progress across platforms like LeetCode and GeeksforGeeks.",

//     metrics: [
//       "600+ Problems Solved",
//       "Performance Insights",
//       "Progress Visualization",
//     ],

//     tech: [
//       "React",
//       "Chart.js",
//       "Node.js",
//       "REST APIs",
//     ],

//     type: "Developer Tooling",

//     github: "#",

//     live: "#",

//     status: "Analytics Platform",
//   },

//   {
//     title: "AI Resume Intelligence",

//     tagline: "ATS Optimization & Resume Analysis Platform",

//     description:
//       "Built an AI-driven resume analysis system capable of ATS scoring, keyword optimization, and role-based resume enhancement recommendations for internship and job applications.",

//     metrics: [
//       "ATS Optimization",
//       "AI Resume Analysis",
//       "Keyword Intelligence",
//     ],

//     tech: [
//       "OpenAI API",
//       "Next.js",
//       "Node.js",
//       "MongoDB",
//     ],

//     type: "AI SaaS",

//     github: "#",

//     live: "#",

//     status: "AI Powered",
//   },

//   {
//     title: "Murf AI Media Engine",

//     tagline: "Voice Generation & AI Media Pipeline",

//     description:
//       "Developed a multimedia AI workflow integrating voice synthesis APIs, automated content generation, and scalable media rendering pipelines for hackathon-grade rapid deployment.",

//     metrics: [
//       "AI Voice Synthesis",
//       "Automated Media Pipeline",
//       "Fast Rendering Workflow",
//     ],

//     tech: [
//       "Murf API",
//       "Node.js",
//       "FFmpeg",
//       "React",
//     ],

//     award: "Hackathon Submission",

//     type: "Generative AI",

//     github: "#",

//     live: "#",

//     status: "Experimental AI",
//   },
// ];

// src/data/projects.jsx

import React from "react";
import { 
  ShieldCheck, 
  Cpu, 
  Cloud, 
  Activity, 
  TerminalSquare 
} from "lucide-react";

export const TOP_PROJECTS = [
  {
    title: "VoteMitra",
    tagline: "AI-Powered Secure Voting Infrastructure",
    description: "Designed and developed a production-oriented voting platform leveraging facial recognition, duplicate-vote prevention, and real-time identity verification. Engineered for high security, low latency, and scalable citizen authentication.",
    metrics: [">90% Face Recognition Accuracy", "-35% Inference Latency", "O(1) Identity Lookup"],
    tech: ["Python", "OpenCV", "TensorFlow.js", "Node.js", "MongoDB"],
    award: "Hackathon Winner",
    type: "AI & Security",
    icon: <ShieldCheck className="w-5 h-5" />,
    color: "emerald",
    glow: "from-emerald-500/20",
    textHover: "group-hover:text-emerald-400",
    borderHover: "hover:border-emerald-500/50",
  },
  {
    title: "SecureAuthX",
    tagline: "Enterprise Authentication & Authorization System",
    description: "Built a scalable backend authentication architecture implementing JWT authentication, RBAC authorization, Redis caching, CSRF protection, and secure session handling optimized for production-grade applications.",
    metrics: ["40% Faster Read Operations", "RBAC Authorization", "Redis Session Optimization"],
    tech: ["Node.js", "Express.js", "JWT", "Redis", "PostgreSQL", "Prisma"],
    award: "Freelance Project",
    type: "Backend Security",
    icon: <Cpu className="w-5 h-5" />,
    color: "cyan",
    glow: "from-cyan-500/20",
    textHover: "group-hover:text-cyan-400",
    borderHover: "hover:border-cyan-500/50",
  },
  {
    title: "VibeCode",
    tagline: "AI-Powered Cloud Development Environment",
    description: "Developed a browser-based cloud IDE with isolated Docker execution environments, Monaco Editor integration, and secure containerized runtime execution supporting scalable remote code execution.",
    metrics: ["Secure Docker Isolation", "Reduced Container Startup", "Cloud Execution Runtime"],
    tech: ["Next.js", "Docker", "Monaco Editor", "WebContainers", "Node.js"],
    award: "Top Innovation",
    type: "Full Stack",
    icon: <Cloud className="w-5 h-5" />,
    color: "fuchsia",
    glow: "from-fuchsia-500/20",
    textHover: "group-hover:text-fuchsia-400",
    borderHover: "hover:border-fuchsia-500/50",
  },
  {
    title: "EchoSphere",
    tagline: "Real-Time AI Communication Platform",
    description: "Engineered an event-driven communication platform supporting ultra-low latency messaging and scalable real-time synchronization using WebSockets and distributed backend systems.",
    metrics: ["Real-time Event Sync", "Low Latency Messaging", "Distributed Event Handling"],
    tech: ["Socket.io", "WebSockets", "Redis", "Node.js", "MongoDB"],
    type: "Networking",
    icon: <Activity className="w-5 h-5" />,
    color: "violet",
    glow: "from-violet-500/20",
    textHover: "group-hover:text-violet-400",
    borderHover: "hover:border-violet-500/50",
  },
  {
    title: "High-Performance Java Server",
    tagline: "Custom TCP-Based Web Server",
    description: "Implemented a low-level multithreaded web server from scratch using Java sockets and ExecutorService thread pools. Optimized concurrency handling and custom HTTP request parsing for performance-focused backend systems.",
    metrics: ["Thread Pool Optimization", "Reduced Context Switching", "Custom Request Parsing"],
    tech: ["Java", "Sockets", "ExecutorService", "TCP/IP", "Multithreading"],
    type: "Systems Engineering",
    icon: <TerminalSquare className="w-5 h-5" />,
    color: "amber",
    glow: "from-amber-500/20",
    textHover: "group-hover:text-amber-400",
    borderHover: "hover:border-amber-500/50",
  },
];