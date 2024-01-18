import PropTypes from "prop-types";
import { motion } from "framer-motion";

const ToggleButton = ({ setsOpen }) => {
  return (
    <button onClick={() => setsOpen((prevBoolean) => !prevBoolean)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
      >
        <motion.path
          stroke="#0C0310"
          strokeLinecap="round"
          strokeWidth="2"
          variants={{
            open: { d: "M6 17L18 7" },
            close: { d: "M4 7L20 7" },
          }}
        ></motion.path>
        <motion.path
          stroke="#0C0310"
          strokeLinecap="round"
          strokeWidth="2"
          d="M8 12L19 12"
          variants={{
            open: { opacity: 0 },
            close: { opacity: 1 },
          }}
        ></motion.path>
        <motion.path
          stroke="#0C0310"
          strokeLinecap="round"
          strokeWidth="2"
          variants={{
            open: { d: "M6 7L18 17" },
            close: { d: "M6 17L20 17" },
          }}
        ></motion.path>
      </svg>
    </button>
  );
};

ToggleButton.propTypes = {
  setsOpen: PropTypes.func.isRequired,
};

export default ToggleButton;
