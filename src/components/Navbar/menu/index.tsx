import { motion } from 'framer-motion';
import { opacity, slideLeft, mountAnim } from '../anim';
import styles from './style.module.scss';
import CustomLink from './Link';
import LinkedinIcon from '@/icons/LinkedinIcon';
import Link from 'next/link';
import GithubIcon from '@/icons/GithubIcon';
import XIcon from '@/icons/XIcon';

interface MenuItem {
  title: string;
  description: string;
  path_url: string;
}

const menu: MenuItem[] = [
  {
    title: "Home",
    description: "let's Make This Crazy Idea Come True",
    path_url: '/'
  },
  {
    title: "About me",
    description: "A Little Bit Of Me",
    path_url: '#about'
  },
  {
    title: "My Journal",
    description: "What I've Leanerd Along the Way",
    path_url: '#experiencie'
  },
  {
    title: "Projects",
    description: "To See Everything",
    path_url: '#projects'
  },
  {
    title: "Contact",
    description: "Let's Get In Touch",
    path_url: '#contact'
  }
];

interface MenuProps {
  closeMenu: () => void;
}

const Menu: React.FC<MenuProps> = ({ closeMenu }) => {
  return (
    <div className={styles.menu}>
      <div className={styles.header}>
        <motion.svg
          variants={slideLeft}
          {...mountAnim}
          onClick={closeMenu}
          width="50"
          height="50"
          viewBox="0 0 68 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M1.5 1.5L67 67" stroke="white" strokeWidth="3" />
          <path d="M66.5 1L0.999997 66.5" stroke="white" strokeWidth="3" />
        </motion.svg>
      </div>

      <div className={styles.body}>
        {
          menu.map((el, index) => (
            <CustomLink data={el} index={index} key={index} onClick={closeMenu} />
          ))
        }
      </div>

      <motion.div
        variants={opacity}
        {...mountAnim}
        custom={0.5}
        className={styles.footer}>
        <div className={styles.footer_social}>
          <h3>How to reach me</h3>
          <div>
            <Link href="https://www.linkedin.com/in/feralarcon1995/" target="_blank">
              <LinkedinIcon />
            </Link>
            <Link href="https://github.com/feralarcon1995" target="_blank">
              <GithubIcon />
            </Link>
            <Link href="https://x.com/medicenferpy" target="_blank">
              <XIcon />
            </Link>
          </div>
        </div>

        <div className={styles.footer_text}>
          <p>Based in Buenos Aires. Argentina.</p>
          <p>feralarcon1995@gmail.com</p>
        </div>
      </motion.div>
    </div >
  );
};

export default Menu;
