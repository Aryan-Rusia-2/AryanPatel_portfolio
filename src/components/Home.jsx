import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsChevronDown } from "react-icons/bs";
import me from "../assets/logo.png";

const Home = () => {

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Aryan Patel
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Developer", "A Designer", "A Creator"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <a className="btn" href="/Resume.pdf" download={true} >
            Download Resume
          </a>
        </div>
      </section>
      <section>
        <img src={me} alt="Aryan" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;