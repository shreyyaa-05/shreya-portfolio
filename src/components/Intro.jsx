import { motion } from "framer-motion";
import "../styles/intro.css";

function Intro() {
  return (
    <motion.section
      className="intro"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        I’m a college student exploring DSA, web development, and design.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        I like building things thoughtfully and understanding how systems work end to end.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        IIIT Allahabad · Information Technology · 2024–2028
      </motion.p>
    </motion.section>
  );
}

export default Intro;
