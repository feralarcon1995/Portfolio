import React from 'react'
import styles from './button.module.scss'
import { motion } from 'framer-motion';

interface ButtonProps {
  text: string;
  color?: string;
  color_text?: string;
  hover_color?:string;
  font_size?: string;
}

export const RButton: React.FC<ButtonProps> = ({ text, color, color_text, font_size,hover_color }) => {
  return (
    <motion.button
      className={`${styles.btn} ${styles.btn_cta}`}
      initial={{ scale: 1 }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.5, ease: [0.4, 0, 0, 1] }
      }}
      style={{ '--btn-color': color, '--text-color': color_text, '--font-size': font_size,'--hover-color':hover_color } as React.CSSProperties}
    >
      <motion.span
        className={styles.btn_cta_border}
        initial={{ scaleX: 1 }}
        whileHover={{ scaleX: 1.2, transition: { duration: 0.5 } }}
      />
      <motion.span
        className={styles.btn_cta_ripple}
        whileHover={{ transform: 'translateY(0)', transition: { duration: 0.5, ease: [0.4, 0, 0, 1] } }}
      >
        <motion.span />
      </motion.span>
      <motion.span
        className={styles.btn_cta_title}
        whileHover={{ y: "-110%", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
      >
        <span data-text={text}>
          {text}
        </span>
      </motion.span>
    </motion.button>
  )
}
