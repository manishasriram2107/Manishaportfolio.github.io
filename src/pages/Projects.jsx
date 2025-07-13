import React, { useState } from "react";
import { motion } from "framer-motion";
import BlobsBackground from "../components/BlobsBackground";
import "./Projects.css";

// import all images as before...
// Quiz App Images
import quiz1 from "../assets/quiz-1.jpg";
import quiz2 from "../assets/quiz-2.jpg";
import quiz3 from "../assets/quiz-3.jpg";
import quiz4 from "../assets/quiz-4.jpg";

// GenZ Dictionary Images
import genz1 from "../assets/genz-1.jpg";
import genz2 from "../assets/genz-2.jpg";
import genz3 from "../assets/genz-3.jpg";
import genz4 from "../assets/genz-4.jpg";


const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
  {
    title: "Quiz App – AI-Powered Assessment Platform",
    tech: "React.js, Node.js, MongoDB, AI",
    description: "Smart quiz platform with AI-based question generation and certificate rewards.",
    images: [quiz1, quiz2, quiz3, quiz4],
    github: "https://github.com/manishasriram2107/quiz-app",
    demo: "https://quiz-app-demo.vercel.app"
  },
  {
    title: "GenZ Dictionary – Android App",
    tech: "Java, Android Studio, XML",
    description: "Offline slang dictionary with dark mode and advanced search.",
    images: [genz1, genz2, genz3, genz4],
    github: "https://github.com/manishasriram2107/genz-dictionary",
    demo: null
  }
];


  return (
    <section className="projects-section">
      <div className="blobs-wrapper">
        <BlobsBackground />
      </div>

      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <motion.div
            className={`project-card ${index % 2 !== 0 ? "reverse" : ""}`}
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="project-gallery">
              {project.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  className="project-img"
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
            <div className="project-details">
              <h3>{project.title}</h3>
              <p className="tech">{project.tech}</p>
              <p>{project.description}</p>
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Overlay */}
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-image-wrapper" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Zoomed Project" className="modal-image" />
            <button className="modal-close" onClick={() => setSelectedImage(null)}>✖</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
