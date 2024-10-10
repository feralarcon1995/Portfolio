import React from 'react';
import styles from './style.module.scss';
import { height, background, mountAnim } from '../anim';
import { motion } from 'framer-motion';

export default function Index() {
  return (
    <div className={styles.stairs}>
      {[...Array(8)].map((_, index) => (
        <Stair key={index} index={index} />
      ))}
      <Background />
    </div>
  );
}

interface StairProps {
  index: number;
}

const Stair: React.FC<StairProps> = ({ index }) => {
  return (
    <motion.div
      variants={height}
      {...mountAnim}
      custom={4 - index}
      className={styles.stair}
    />
  );
};

const Background: React.FC = () => {
  return (
    <motion.div
      variants={background}
      {...mountAnim}
      className={styles.background}
    />
  );
};
