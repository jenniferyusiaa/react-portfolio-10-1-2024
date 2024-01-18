import "./services.scss";
import { motion } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
  },

  animate: {
    x: 0,
    y: 0,

    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const Services = () => {
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate='animate'
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and more forward.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <motion.div className="title">
          <img src="./people.webp" alt="peopleimg" />
          <motion.h1>
            <motion.b whileHover={{ color: "orange", scale: 2 }}>
              Unique
            </motion.b>{" "}
            Ideas
          </motion.h1>
        </motion.div>
        <motion.div className="title">
          <motion.h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </motion.h1>
          <button>WHAT WE DO?</button>
        </motion.div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
            optio vel perspiciatis ab assumenda consequatur consectetur, quis
            nulla dolorum numquam voluptates earum, mollitia tempore recusandae
            ipsum eos repellat? Sapiente, eius?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
            optio vel perspiciatis ab assumenda consequatur consectetur, quis
            nulla dolorum numquam voluptates earum, mollitia tempore recusandae
            ipsum eos repellat? Sapiente, eius?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
            optio vel perspiciatis ab assumenda consequatur consectetur, quis
            nulla dolorum numquam voluptates earum, mollitia tempore recusandae
            ipsum eos repellat? Sapiente, eius?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
            optio vel perspiciatis ab assumenda consequatur consectetur, quis
            nulla dolorum numquam voluptates earum, mollitia tempore recusandae
            ipsum eos repellat? Sapiente, eius?
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
