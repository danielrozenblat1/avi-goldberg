import React from 'react';
import styles from './Social.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faGithub, faLinkedin, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';

const SocialIcons = () => {

  const whatsappMessageLink = "https://wa.me/972523506518?text=היי%20אבי,%20אשמח%20לשמוע%20עוד%20על...";
  return (
    <ul className={styles.iconList}>
      <li className={styles.iconContent}>
        <a
          data-social="facebook"
          aria-label="facebook"
          href="https://www.facebook.com/AVI.G0LDBERG"
          className={styles.iconLink}
          target="_blank" rel="noopener noreferrer"
        >
          <div className={styles.filled}></div>
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <div className={styles.tooltip}>Facebook</div>
      </li>
      <li className={styles.iconContent}>
        <a
          data-social="LinkedIn"
          aria-label="LinkedIn"
          href="https://www.linkedin.com/in/avi-goldberg-b99395?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          className={styles.iconLink}
          target="_blank" rel="noopener noreferrer"
        >
          <div className={styles.filled}></div>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <div className={styles.tooltip}>LinkedIn</div>
      </li>
      <li className={styles.iconContent}>
        <a
          data-social="github"
          aria-label="github"
          href=""
          className={styles.iconLink}
          target="_blank" rel="noopener noreferrer"
        >
          <div className={styles.filled}></div>
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <div className={styles.tooltip}>Github</div>
      </li>
      <li className={styles.iconContent}>
        <a
          data-social="whatsApp"
          aria-label="whatsApp"
          href={whatsappMessageLink}
          className={styles.iconLink}
          target="_blank" rel="noopener noreferrer"
        >
          <div className={styles.filled}></div>
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <div className={styles.tooltip}>WhatsApp</div>
      </li>
    </ul>
  );
};

export default SocialIcons;
