import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { mountAnim, rotateX } from '../anim';
import { useRef } from 'react';
import Link from 'next/link';
import { RButton } from '@/components/Button/RButton';

interface LinkProps {
  data: {
    title: string;
    description: string;
    path_url: string;
  };
  index: number;
  onClick: () => void;
}

const CustomLink: React.FC<LinkProps> = ({ data, index, onClick }) => {
  const { title, description, path_url } = data;
  const outer = useRef<HTMLDivElement | null>(null);
  const inner = useRef<HTMLDivElement | null>(null);

  const manageMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const direction = e.clientY < bounds.top + bounds.height / 2 ? -1 : 1;

    if (outer.current && inner.current) {
      outer.current.style.top = `${direction * 100}%`;
      inner.current.style.top = `${-direction * 100}%`;

      outer.current.getAnimations().forEach(anim => anim.cancel());
      inner.current.getAnimations().forEach(anim => anim.cancel());

      outer.current.animate([{ top: '0%' }], { duration: 300, fill: 'forwards' });
      inner.current.animate([{ top: '0%' }], { duration: 300, fill: 'forwards' });
    }
  };

  const manageMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const direction = e.clientY < bounds.top + bounds.height / 2 ? -1 : 1;

    if (outer.current && inner.current) {
      outer.current.getAnimations().forEach(anim => anim.cancel());
      inner.current.getAnimations().forEach(anim => anim.cancel());

      outer.current.animate([{ top: `${direction * 100}%` }], { duration: 300, fill: 'forwards' });
      inner.current.animate([{ top: `${-direction * 100}%` }], { duration: 300, fill: 'forwards' });
    }
  };


  return (
    <Link href={path_url} onClick={onClick}>
      <motion.div
        onMouseEnter={manageMouseEnter}
        onMouseLeave={manageMouseLeave}
        variants={rotateX}
        {...mountAnim}
        custom={index}
        className={styles.el}

      >
        <a className={styles.title_link}>{title}</a>
        <div ref={outer} className={styles.outer}>
          <div ref={inner} className={styles.inner}>
            {Array.from({ length: 2 }).map((_, idx) => (
              <div key={idx} className={styles.container}>
                <RButton text={title} color="var(--black)" color_text='var(--black)' />
                <p>{description}</p>
                <RButton text={title} color="var(--black)" color_text='var(--black)' />
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default CustomLink;
