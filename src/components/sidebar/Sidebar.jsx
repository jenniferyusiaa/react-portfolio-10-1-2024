import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleButton";
import "./sidebar.scss";
import { useState } from "react";
import { motion } from "framer-motion";

const variant = {
  open: {
    opacity: 1,
    clipPath: "circle(100vh at 5rem 5rem)",
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 50,
    },
  },
  close: {
    opacity: 0,
    clipPath: "circle(1rem at 2.5rem 2rem)",
    transition: {
      type: "spring",
      stiffness: 125,
      damping: 50,
    },
  },
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="sidebar" animate={open ? "open" : "close"}>
      <motion.div className="bg" variants={variant}>
        <Links />
      </motion.div>
      <ToggleButton setsOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
