import "./hero.scss";
import { motion } from "framer-motion";

const textVariant = {
  initial: {
    x: -150,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 2,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const slidingTextVariant = {
  initial: {
    x: "100%",
  },
  animate: {
    x: "-320%",
    transition: {
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
      repeatDelay: 0,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariant}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariant}>KEYSHAARD DEV</motion.h2>
          <motion.h1 variants={textVariant}>Front-end developer </motion.h1>
          <motion.div className="buttons">
            <motion.button variants={textVariant}>
              See the latest works
            </motion.button>
            <motion.button variants={textVariant}>Contact me</motion.button>
          </motion.div>
          <motion.img
            variants={textVariant}
            animate="scrollButton"
            src="./scroll.png"
            alt="scrollimg"
            width={50}
          />
        </motion.div>
        <motion.div
          className="slidingTextContainer"
          variants={slidingTextVariant}
          initial="initial"
          animate="animate"
        >
          An unextraordinary passionate person
        </motion.div>
        <div className="imgContainer">
          {/* <img src="./hero.png" alt="heroimg" /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
