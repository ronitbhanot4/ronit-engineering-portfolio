// Public portfolio content exposed through the MCP server.
// Mirrors the published site — nothing private lives here.

export const profile = {
  name: "Ronit Bhanot",
  headline: "Engineering Student | Python Developer | CAD Designer | Future Innovator",
  school: "McMaster University",
  program: "Engineering (first year)",
  expectedGraduation: 2029,
  availability: "Available for internships",
  summary:
    "First-year Engineering student at McMaster University with hands-on skills in Python, HTML, CSS, Java, AutoCAD, and engineering design. Passionate about coding, design, and engineering applications that blend creativity and technical excellence.",
  background:
    "Before university, led the Physics Club at Garth Webb Secondary School, running experiments, tutoring peers, and organizing engineering activities. Competed in DECA, advancing to the Provincial Championships. Now a member of ACE at McMaster, a club focused on hands-on engineering projects, creative problem solving, and collaboration.",
  goals:
    "Long-term goal is to merge software and design by exploring engineering applications of AI, developing innovative solutions, and gaining experience through internships, research, and personal projects.",
  website: "https://ronits-portfolio.lovable.app",
  resumeUrl: "https://ronits-portfolio.lovable.app/Ronit_Bhanot_Resume.pdf",
};

export const contact = {
  email: "ronit.bhanot@gmail.com",
  phone: "437-430-1757",
  linkedin: "https://linkedin.com/in/ronit-bhanot-48940632a",
  github: "https://github.com/ronitbhanot4",
};

export const technicalSkills = [
  "Python",
  "Java",
  "HTML",
  "CSS",
  "JavaScript",
  "AutoCAD",
  "Excel",
  "CAD Modeling",
  "Engineering Design",
];

export const softSkills = [
  "Problem Solving",
  "Team Collaboration",
  "Leadership",
  "Technical Communication",
  "Research Mindset",
  "Time Management",
  "Adaptability",
  "Public Speaking",
];

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    title: "Q-Arm Warehouse Project",
    description:
      "A fully functional robotic arm system combining custom hardware design and Python software to accurately pick up and relocate objects in an automated warehouse simulation. Demonstrated seamless integration of mechanical engineering and programming.",
    technologies: ["Python", "Robotics", "Hardware Integration", "Engineering Design"],
    link: "https://www.notion.so/Q-Arm-Robotic-Manipulator-Project-2dd3fc50fbaf80a0af59cba8c88862db",
  },
  {
    title: "GradeGenius",
    description:
      "A web-based GPA calculator built using HTML, CSS, and JavaScript, featuring dynamic course inputs, weighted grade calculations, and a clean interactive interface.",
    technologies: ["HTML", "CSS", "JavaScript", "Web Development"],
    link: "https://ronits-portfolio.lovable.app/gradegenius-demo.mov",
  },
];

export type ExperienceEntry = {
  role: string;
  organization: string;
  highlight?: string;
  description: string;
};

export const experience: ExperienceEntry[] = [
  {
    role: "Peer Tutor",
    organization: "Garth Webb Secondary School",
    description:
      "Tutored students in physics and mathematics. Provided homework support, test preparation, and concept reinforcement, improving student understanding and academic performance.",
  },
  {
    role: "Physics Club Leader",
    organization: "Garth Webb Secondary School",
    description:
      "Organized experiments, ran group meetings, and taught physics concepts in an engaging way. Developed leadership and teaching skills while fostering a passion for science and engineering.",
  },
  {
    role: "DECA Provincial Competitor",
    organization: "Garth Webb Secondary School",
    highlight: "Provincial Level",
    description:
      "Advanced to the Provincial Championships in DECA, demonstrating skills in business strategy, case analysis, and professional presentations to industry judges.",
  },
  {
    role: "ACE Canada Delegate",
    organization: "McMaster University",
    description:
      "Represented the school's ACE chapter, supporting student-led engineering and professional development initiatives through meetings, planning, and collaboration with peers.",
  },
];
