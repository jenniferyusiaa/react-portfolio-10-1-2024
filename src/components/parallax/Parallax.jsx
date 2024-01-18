import { useScroll, useTransform, motion } from "framer-motion";
import "./parallax.scss";
import PropTypes from "prop-types";
import { useRef } from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["-50%", "500%"]);
  const xyBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={ref}
      className="parallax"
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <Player
        className="astronaut"
        autoplay
        loop
        src="https://lottie.host/390501ee-b127-4f6d-afb3-cd75047afcbf/peVZqiWhhj.json"
        style={{ height: "300px", width: "300px" }}
      ></Player>
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? "What we do?" : "What we did?"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: xyBg,
          backgroundImage: `url(${
            type === "services" ? "./planets.png" : "./sun.png"
          })`,
        }}
      ></motion.div>
      <motion.div className="stars" style={{ x: xyBg }}></motion.div>
    </div>
  );
};

Parallax.propTypes = {
  type: PropTypes.func.isRequired,
};

export default Parallax;
