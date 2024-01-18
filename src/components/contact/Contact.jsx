import "./contact.scss";
import { motion, useInView } from "framer-motion";
import SVGComponent from "./phoneImage.jsx";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },

  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 4,
      staggerChildren: 0.2,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();

  const [isNotError, setIsNotError] = useState(true);

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7z4kf4f",
        "template_uobur47",
        formRef.current,
        "XYkZXob61yGDgSv7H"
      )
      .then(
        () => {
          setIsNotError(false);
          return <h1>Task failed, Try again later.</h1>;
        },
        () => {
          setIsNotError(true);
          return <h1>You did it!</h1>;
        }
      );
  };

  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <h1>{`Let's work together`}</h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>examplenumb2@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Adress</h2>
          <span>Jakarta, Indonesia</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>+62 858 1181 9602</span>
        </motion.div>
      </motion.div>

      <motion.div className="formContainer" variants={variants}>
        <motion.div
          className="phoneSvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 4 }}
        >
          <SVGComponent isInViewing={isInView} />
        </motion.div>
        {isNotError ? (
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 1 }}
          >
            <input type="text" required placeholder="Name" name="name" />
            <input type="email" required placeholder="Email" name="email" />
            <textarea rows={8} placeholder="Message" name="message" />
            <input className="buttonSubmit" type="submit" value="Submit" />
          </motion.form>
        ) : (
          <h1>You did it!</h1>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Contact;
