import React from 'react'
import styles from './hero.module.scss'
import LinkedinIcon from '@/icons/LinkedinIcon'
import XIcon from '@/icons/XIcon'
import GithubIcon from '@/icons/GithubIcon'
import Link from 'next/link'
import { motion } from 'framer-motion';
const Hero = () => {
  const titleVariants = {
    hidden: { clipPath: 'inset(100% 0 0 0)' },
    visible: {
      clipPath: 'inset(0 0 0 0)', 
      transition: {
        duration: 1.5,
        ease: [0.25, 0.46, 0.45, 0.94], 
        delay: 0.2 
      }
    }
  }

  const paragraphVariants = {
    hidden: { clipPath: 'inset(100% 0 0 0)' }, 
    visible: {
      clipPath: 'inset(0 0 0 0)',
      transition: {
        duration: 1.5,
        ease: [0.25, 0.46, 0.45, 0.94], 
        delay: 0.8 
      }
    }
  }

  const imgVariants = {
    hidden: { clipPath: 'inset(0 0 100% 0)' }, 
    visible: {
      clipPath: 'inset(0 0 0 0)',
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94], 
        delay: 0.5 
      }
    }
  }
  return (
    <section className={styles.container}>
      <motion.div
        className={styles.titleContainer}
        initial="hidden"
        animate="visible"
        variants={titleVariants}
      >
        <h1 className={styles.title}>looking for a creative developer?
          <span>hi, nice to meet you!</span>
        </h1>
      </motion.div>
      <motion.img 
      initial="hidden"
        animate="visible"
        variants={imgVariants}
        src="/images/herp.webp" alt="fotografia de setup" />
      <motion.article
        className={styles.footer}
        initial="hidden"
        animate="visible"
        variants={paragraphVariants}
      >
        <motion.p>
          let&apos;s make this crazy idea come true, together working as a team, are you ready for this trip?
        </motion.p>
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
      </motion.article>
    </section>
  )
}

export default Hero