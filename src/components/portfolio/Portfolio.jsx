import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { PropTypes } from "prop-types";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://i.pinimg.com/564x/ca/cb/a8/cacba84c9a426d1ae7a2e7a818599ed3.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non praesentium ratione eos officiis deleniti, veritatis quaerat, similique temporibus facilis in nobis magnam, a repellendus eligendi ex minima quos velit quidem.",
  },
  {
    id: 2,
    title: "Next.js Blog",
    img: "https://i.pinimg.com/564x/1d/22/28/1d2228bbfc98c16f42e861696e17c6f2.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non praesentium ratione eos officiis deleniti, veritatis quaerat, similique temporibus facilis in nobis magnam, a repellendus eligendi ex minima quos velit quidem.",
  },
  {
    id: 3,
    title: "Vanilla.js App",
    img: "https://i.pinimg.com/564x/f2/fa/c6/f2fac678cf232988779d8aabbd3860c5.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non praesentium ratione eos officiis deleniti, veritatis quaerat, similique temporibus facilis in nobis magnam, a repellendus eligendi ex minima quos velit quidem.",
  },
  {
    id: 4,
    title: "Music App",
    img: "https://i.pinimg.com/564x/09/74/0d/09740d38724233eed65c26df4e26155c.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non praesentium ratione eos officiis deleniti, veritatis quaerat, similique temporibus facilis in nobis magnam, a repellendus eligendi ex minima quos velit quidem.",
  },
];

const Single = ({ prevItem }) => {
  const singleRef = useRef();

  const { scrollYProgress } = useScroll({
    target: singleRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 500]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={singleRef}>
            <img src={prevItem.img} alt={prevItem.title} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{prevItem.title}</h2>
            <p>{prevItem.desc}</p>
            <button>See demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((prevItem) => (
        <Single prevItem={prevItem} key={prevItem.id} />
      ))}
    </div>
  );
};

export default Portfolio;

Single.propTypes = {
  prevItem: PropTypes.func.isRequired,
};
