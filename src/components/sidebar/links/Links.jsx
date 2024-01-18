import { motion } from "framer-motion";

const variant = {
  open: {
    transition: {
      staggerChildren: 0.3,
    },
  },
  close: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const linkVariant = {
  open: {
    opacity: 1,
  },
  close: {
    y: 100,
    opacity: 0,
  },
};

const Links = () => {
  const linkItems = ["Homepage", "Services", "Portfolio", "Contact", "About"];

  return (
    <motion.div className="links" variants={variant}>
      {linkItems.map((prevItems) => (
        <motion.a
          key={prevItems}
          href={`#${prevItems}`}
          variants={linkVariant}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1 }}
        >
          {prevItems}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
