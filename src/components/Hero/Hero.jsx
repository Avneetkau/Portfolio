import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container} id="hero">
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Avneet.</h1>
        <p className={styles.description}>
        Experienced Front End Developer with a passion for creating responsive,
         user-friendly interfaces using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:avneetbagga06@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/myPic.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
