import "./App.css";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
import Link from "react-scroll/modules/components/Link";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { About } from "./About";
import { Homepage } from "./Homepage";

import { Projects } from "./Projects";
import { useOnScreen } from "./useOnScreen";
import { Contact, Footer } from "./Contact";

const LazyShow = ({ children }) => {
  const controls = useAnimation();
  const rootRef = useRef();
  const onScreen = useOnScreen(rootRef);
  useEffect(() => {
    if (onScreen) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 3,
          ease: "easeOut",
        },
      });
    }
  }, [onScreen, controls]);
  return (
    <motion.div
      className="lazy-div"
      ref={rootRef}
      initial={{ opacity: 0, x: -10 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  return (
    <div className="App">
      <div className="appbar">
        <div>
          <h1>Scketch</h1>
           <p>ALTUMIND <sub>Company</sub> </p>
        </div>

        <div className="appbar-contents">
          <Link to="home" smooth={true}>
            Home
          </Link>
          <Link to="aboutMe" smooth={true}>
            About Me
          </Link>
          <Link to="projects" smooth={true}>
            Projects
          </Link>
          <Link to="contactMe" smooth={true}>
            Contact Me
          </Link>
        </div>
      </div>

      <div className="home-container">
        <section id="home" className="app-section">
          <div className="homePage">
            <LazyShow>
              <Homepage />
            </LazyShow>
          </div>
        </section>
        <section id="aboutMe" className="app-section">
          <LazyShow>
            <About />
          </LazyShow>
        </section>
        <section id="projects" className="app-section">
          <LazyShow>
            <Projects />
          </LazyShow>
        </section>
        <section id="contactMe" className="app-section">
          <LazyShow>
            <Contact />
            <Footer />
          </LazyShow>
        </section>
      </div>
    </div>
  );
}
