import styles from './Footer.module.css'
import instagram from '../Assets/IMAGEM/instagram.png';
import linkedin from '../Assets/IMAGEM/linkedin.png';
import youtube from '../Assets/IMAGEM/youtube.png';
import twitter from '../Assets/IMAGEM/twitter.png';
import facebook from '../Assets/IMAGEM/facebook.png';

import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav_footer}>
        <p>João Vitor de For dos Santos &copy; 2023</p>
        <ul className={styles.social}>
          <li><NavLink className={styles.social_link}><img src={instagram} alt="Instagram"/></NavLink></li>
          <li><NavLink className={styles.social_link}><img src={facebook} alt="Facebook"/></NavLink></li>
          <li><NavLink className={styles.social_link}><img src={linkedin} alt="LinkedIn"/></NavLink></li>
          <li><NavLink className={styles.social_link}><img src={twitter} alt="Twitter"/></NavLink></li>
          <li><NavLink className={styles.social_link}><img src={youtube} alt="YouTube"/></NavLink></li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer;
