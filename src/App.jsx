// App.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaExternalLinkAlt,
  FaShoppingCart,
  FaPlane,
  FaBrain,
  FaRobot,
  FaHome,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaDatabase,
} from "react-icons/fa";
// Skills
const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-3xl mb-2" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-3xl mb-2" /> },
  {
    name: "JavaScript",
    icon: <FaJs className="text-yellow-400 text-3xl mb-2" />,
  },
  { name: "React", icon: <FaReact className="text-cyan-400 text-4xl mb-2" /> },
  {
    name: "Python",
    icon: <FaPython className="text-green-400 text-4xl mb-2" />,
  },
  {
    name: "DBMS",
    icon: <FaDatabase className="text-purple-400 text-4xl mb-2" />,
  },
  {
    name: "Data Structures",
    icon: <FaDatabase className="text-pink-400 text-4xl mb-2" />,
  },
];

// Projects
const projects = [
  {
    id: "rax-shop",
    icon: <FaShoppingCart />,
    title: "Rax-Shop",
    desc: "Full-stack e-commerce app with authentication and cart system.",
    image: "/rax-shop.png",
    liveLink: "#",
    codeLink: "https://github.com/Raxit1/rax-shop",
  },
  {
    id: "airline-booking",
    icon: <FaPlane />,
    title: "Airline Booking",
    desc: "Flight reservation system with booking management.",
    image: "/flight.jpeg",

    liveLink: "#",
    codeLink: "https://github.com/Raxit1/airline-booking",
  },
  {
    id: "student-prediction-ai",
    icon: <FaBrain />,
    title: "Student Prediction AI",
    desc: "Machine learning model predicting academic performance.",
    image: "/student.png",
    liveLink: "#",
    codeLink: "https://github.com/Raxit1/student-prediction-ai",
  },
  {
    id: "salary-prediction",
    icon: <FaRobot />,
    title: "Salary Prediction",
    desc: "Regression ML model to estimate salary.",
    image: "/student.png",
    liveLink: "#",
    codeLink: "https://github.com/Raxit1/salary-prediction",
  },
  {
    id: "home-automation",
    icon: <FaHome />,
    title: "Home Automation",
    desc: "IoT smart system using ESP8266.",
    image: "/home-automation.png",
    liveLink: "#",
    codeLink: "https://github.com/Raxit1/home-automation",
  },
];

// Home Component
function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gradient-to-br from-[#0F172A] via-[#1E3A8A] to-[#1E40AF] text-gray-200 font-sans scroll-smooth">
      {/* NAVBAR */}
      <nav className="fixed w-full backdrop-blur-md bg-[#0F172A]/80 shadow-sm z-50 border-b border-[#1E293B]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-wide">
            <span className="text-[#3B82F6]">Raxit</span> Chandegra
          </h1>
          <div className="hidden md:flex items-center space-x-8 font-medium">
            <a href="#about" className="hover:text-[#60A5FA] transition">
              About
            </a>
            <a href="#skills" className="hover:text-[#60A5FA] transition">
              Skills
            </a>
            <a href="#projects" className="hover:text-[#60A5FA] transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-[#60A5FA] transition">
              Contact
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-4 py-2 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] text-white rounded-full text-sm hover:scale-105 transition"
            >
              Resume
            </a>
          </div>
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-10 right-10 w-80 h-80 bg-[#3B82F6] rounded-full blur-3xl opacity-20"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [0, -10, 10, 0] }}
          transition={{ duration: 14, repeat: Infinity }}
          className="absolute bottom-20 left-10 w-80 h-80 bg-[#60A5FA] rounded-full blur-3xl opacity-20"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
          transition={{ duration: 16, repeat: Infinity }}
          className="absolute top-1/2 left-1/3 w-60 h-60 bg-[#2563EB] rounded-full blur-3xl opacity-15"
        />

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#93C5FD] bg-clip-text text-transparent">
                Raxit Chandegra
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-[#60A5FA] mb-4">
              Frontend Developer • React • Python • AI
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              👋 I build interactive & intelligent web apps. 🚀 Passionate about
              AI, Full-stack & Automation.
            </p>
            <div className="flex gap-4 mb-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] text-white rounded-full shadow-lg hover:scale-105 transition"
              >
                Contact Me
              </a>
              <a
                href="/resume.pdf"
                download
                className="px-6 py-3 border border-[#3B82F6] text-[#3B82F6] rounded-full hover:bg-[#3B82F6] hover:text-black transition"
              >
                Download Resume
              </a>
            </div>
            <div className="flex gap-4 mt-2 text-2xl">
              <a
                href="https://github.com/Raxit1"
                target="_blank"
                className="text-[#3B82F6] hover:scale-110 transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                className="text-[#3B82F6] hover:scale-110 transition"
              >
                <FaLinkedin />
              </a>
            </div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-[#60A5FA] text-2xl mt-6"
            >
              ↓ Scroll Down
            </motion.div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="flex justify-center"
          >
            <motion.img
              src="/profile.jpeg"
              alt="Raxit"
              className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-2xl shadow-2xl border border-[#3B82F6]/40"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 text-center bg-[#1E3A8A]">
        <h3 className="text-3xl font-bold mb-6 text-[#60A5FA]">About Me</h3>
        <p className="max-w-3xl mx-auto text-gray-200">
          Diploma ICT student from Government Polytechnic Rajkot (7.7 SPI).
          Skilled in HTML, CSS, JavaScript, React, and Python. Passionate about
          AI, automation & full-stack development.
        </p>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="py-10 px-6 text-center bg-[#122552] overflow-hidden"
      >
        <h3 className="text-3xl font-bold mb-10 text-[#1E3A8A]">
          Technical Skills
        </h3>

        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-10 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center px-8 py-5 bg-[#1E3A8A] rounded-xl min-w-[150px] hover:shadow-[0_0_0px] transition"
              >
                {skill.icon}
                <span className="mt-2">{skill.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 px-6 text-center bg-[#1E3A8A]">
        <h3 className="text-3xl font-bold mb-10 text-[#60A5FA]">
          Featured Projects
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="p-6 bg-[#0F172A] rounded-xl hover:shadow-[0_0_25px_#3B82F6] transition flex flex-col items-center"
            >
              <div className="text-3xl text-[#3B82F6] mb-3">{project.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
              <p className="text-gray-200 text-sm mb-4">{project.desc}</p>
              <div className="flex gap-2 mt-auto">
                <FaExternalLinkAlt className="text-[#3B82F6]" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-24 px-6 bg-gradient-to-br from-[#0F172A] via-[#1E3A8A] to-[#1E40AF] text-white"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-4 text-[#60A5FA]">
            Let's Work Together 🚀
          </h3>
          <p className="text-gray-300 mb-12">
            Have a project idea or want to collaborate? Feel free to reach out.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Info Card */}
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20 text-left space-y-6 hover:scale-105 transition duration-300">
              <div className="flex items-center gap-4">
                <div className="bg-[#3B82F6] p-3 rounded-full">📍</div>
                <div>
                  <p className="text-sm text-gray-300">Location</p>
                  <p className="font-semibold">Rajkot, Gujarat</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#3B82F6] p-3 rounded-full">📧</div>
                <div>
                  <p className="text-sm text-gray-300">Email</p>
                  <p className="font-semibold">raxitchandegra58@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#3B82F6] p-3 rounded-full">📞</div>
                <div>
                  <p className="text-sm text-gray-300">Phone</p>
                  <p className="font-semibold">+91 8849619329</p>
                </div>
              </div>

              <div className="flex gap-6 pt-4 text-2xl">
                <a
                  href="https://github.com/Raxit1"
                  target="_blank"
                  className="hover:text-[#60A5FA] transition"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  className="hover:text-[#60A5FA] transition"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>

            {/* Contact Action Card */}
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20 flex flex-col justify-center items-center text-center hover:scale-105 transition duration-300">
              <h4 className="text-2xl font-semibold mb-4">
                Ready to Start a Project?
              </h4>

              <p className="text-gray-300 mb-6">
                I'm open to internships, freelance, and collaboration
                opportunities.
              </p>

              <a
                href="mailto:raxitchandegra58@gmail.com"
                className="px-8 py-3 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] text-white rounded-full shadow-lg hover:scale-110 transition duration-300"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-6 text-center bg-[#1E3A8A] text-gray-400 text-sm">
        © 2026 Raxit Chandegra. All Rights Reserved.
      </footer>
    </div>
  );
}

// PROJECT DETAIL PAGE
function ProjectDetail({ projects }) {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project)
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Project not found
      </div>
    );

  return (
    <div className="min-h-screen bg-[#0F172A] text-white p-10">
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
      <img
        src={project.image}
        alt={project.title}
        className="w-full max-w-3xl mx-auto mb-6 rounded-lg shadow-lg"
      />
      <p className="mb-6 text-gray-300">{project.desc}</p>

      <div className="flex gap-4 mb-6">
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            className="px-4 py-2 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] rounded-md hover:scale-105 transition"
          >
            Live Project
          </a>
        )}
        {project.codeLink && (
          <a
            href={project.codeLink}
            target="_blank"
            className="px-4 py-2 border border-[#3B82F6] rounded-md hover:bg-[#3B82F6] hover:text-black transition"
          >
            View Code
          </a>
        )}
      </div>

      <Link to="/" className="text-[#3B82F6] hover:underline">
        ← Back to Portfolio
      </Link>
    </div>
  );
}

// MAIN APP
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/projects/:id"
          element={<ProjectDetail projects={projects} />}
        />
      </Routes>
    </Router>
  );
}
