import { FaDatabase } from "react-icons/fa";
export const portfolioData = {
  // Personal Information
  name: "Justine",
  title: "Full-Stack Web Developer (React.Js & .NET)",
  bio: "I build fast, modern websites and web applications that help businesses grow and scale online.",
  email: "justine.paul.adan.06@gmail.com",
  github: "https://github.com/justine-paul-adan",
  linkedin: "https://www.linkedin.com/in/justine-paul-adan-2242603b5/",

  // Skills
  skills: [
    { name: "React JS", icon: "SiReact" },
    { name: "TypeScript", icon: "SiTypescript" },
    { name: "JavaScript", icon: "SiJavascript" },
    { name: "HTML", icon: "SiHtml5" },
    { name: "CSS", icon: "SiCss3" },
    { name: ".Net Core", icon: "SiDotnet" },
    { name: ".Net MVC", icon: "SiDotnet" },
    { name: ".Net API", icon: "SiDotnet" },
    { name: "Postman", icon: "SiPostman" },
    { name: "SQL", icon: <FaDatabase  color="#667eea"/> },
    { name: "PostgreSQL", icon: "SiPostgresql" },
    { name: "Playwright", icon: "SiPlaywright" },
  ],

  // Projects
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern e-commerce website with product catalog, shopping cart, and payment integration.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
      image: "🛒",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A clean and professional portfolio website to showcase projects and skills.",
      tags: ["React", "CSS", "Responsive Design"],
      link: "#",
      image: "💼",
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A productivity tool for managing tasks with real-time collaboration features.",
      tags: ["React", "Firebase", "Material UI"],
      link: "#",
      image: "✓",
    },
    {
      id: 4,
      title: "Weather App",
      description: "A weather application that displays current weather and forecasts using a public API.",
      tags: ["React", "API", "Chart.js"],
      link: "#",
      image: "🌤️",
    },
  ],

  // Testimonials
  testimonials: [
    {
      id: 1,
      name: "Client One",
      company: "Tech Startup",
      message: "Great work! The developer delivered excellent results on time and was very responsive to feedback.",
      rating: 5,
    },
    {
      id: 2,
      name: "Client Two",
      company: "Digital Agency",
      message: "Highly professional and skilled. The website exceeded our expectations in both design and functionality.",
      rating: 5,
    },
    {
      id: 3,
      name: "Client Three",
      company: "E-Commerce Business",
      message: "Very communicative and attentive to detail. Would definitely work together again!",
      rating: 5,
    },
  ],

  // Education
  education: [
    {
      degree: "Bachelor's in Information Technology",
      school: "Batangas State University",
      year: "2022",
      details: "Focused on software development and web technologies",
    },
    {
      degree: "Associate Software Engineer Bootcamp",
      school: "Accenture Bootcamp",
      year: "2023",
      details: "Intensive training in modern web development practices and tools",
    },
  ],
};
