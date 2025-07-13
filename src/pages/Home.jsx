// src/pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import BlobsBackground from "../components/BlobsBackground";
import manishaImg from "../assets/manisha.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-wrapper">
      <BlobsBackground />

      <motion.div
        className="intro-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src={manishaImg}
          alt="Manisha M"
          className="profile-pic"
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: "spring", stiffness: 100 }}
        />
        <h1 className="name">Manisha M</h1>
        <h2 className="role">
          Web Developer / MERN Stack Developer | React • Node.js • MongoDB • AI
        </h2>
        <p className="description">
          I'm a passionate developer experienced in full-stack development, AI
          integration, and mobile-first design.
        </p>

        <a
          href="/MANISHA_RESUME.pdf"
          download="Manisha_M_Resume.pdf"
          className="resume-btn"
        >
          Download Resume
        </a>
      </motion.div>
    </div>
  );
};

export default Home;
