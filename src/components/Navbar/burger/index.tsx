import Link from 'next/link';
import styles from './style.module.scss';

interface BurgerProps {
  openMenu: () => void;
}

export default function Burger({ openMenu }: BurgerProps) {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>medicenferpy</Link>
      <div onClick={openMenu} className={styles.button}>
        <p>Menu</p>
        <div className={styles.background}></div>
        <svg width="56" height="10" viewBox="0 0 56 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="56" y1="0.5" x2="0" y2="0.5" stroke="black" strokeWidth="3" />
          <line x1="56" y1="6.5" x2="28" y2="6.5" stroke="black" strokeWidth="3" />
        </svg>
      </div>
    </nav>

  );
}
