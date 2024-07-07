import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
    <div className={styles.text}>
      <h2>Contact</h2>
      <p>Fell free to reach out!</p>
      </div>
        <ul className={styles.links}>
          <li className={styles.linkItem}>
          <img src={getImageUrl("contacts/emailIcon.png")} alt="email"/>
          <a href="avneetbagg06@gmail.com">avneetbagga06@gmail.com</a>
          </li>
          <li className={styles.linkItem}>
          <img src={getImageUrl("contacts/linkedinIcon.png")} alt="linkedln"/>
          <a href="https://www.linkedin.com/in/avneet-kaur-271953225/">Linkedln</a>
          </li>
          <li className={styles.linkItem}>
          <img src={getImageUrl("contacts/githubIcon.png")} alt="github"/>
          <a href="https://github.com/Avneetkau">Github</a>
          </li>
        </ul>
        
    </footer>
    
  );
}

export default Contact;
