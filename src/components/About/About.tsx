import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import { motion, useAnimation } from 'framer-motion';
import styles from './about.module.scss';

const About = () => {
  const titleControls = useAnimation();
  const subTitleControls = useAnimation();
  const imgControls = useAnimation();
  const aboutControls = useAnimation();
  const paragraphControls = useAnimation();

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const lenis = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    lenis.current = lenisInstance;

    const animate = (time: number) => {
      lenisInstance.raf(time);
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        titleControls.start({
          y: sectionTop * -0.2,
          opacity: window.scrollY > sectionTop - windowHeight ? 1 : 0,
        });
        subTitleControls.start({
          x: sectionTop * -0.3,
          opacity: window.scrollY > sectionTop - windowHeight ? 1 : 0,
        });

        imgControls.start({
          y: sectionTop * -0.8,
          clipPath: window.scrollY > sectionTop - windowHeight ? 'inset(0% 0% 0% 0%)' : 'inset(100% 0% 0% 0%)',
        });

        aboutControls.start({
          y: sectionTop * 1,
          opacity: window.scrollY > sectionTop - windowHeight ? 1 : 0,
        });

        paragraphControls.start({
          y: sectionTop * -1,
          opacity: window.scrollY > sectionTop - windowHeight ? 1 : 0,
        });
      }

      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);

    return () => {
      lenisInstance.destroy();
    };
  }, [titleControls, subTitleControls, imgControls, aboutControls, paragraphControls]);

  return (
    <section ref={sectionRef} className={styles.container} id="about">
      <motion.article className={styles.title} initial={{ y: 70, opacity: 0 }} animate={titleControls}>
        <motion.h2 animate={titleControls}>a little bit of me</motion.h2>
        <motion.h3 animate={subTitleControls}>a little bit of me</motion.h3>
      </motion.article>

      <motion.article className={styles.about_info} initial={{ y: 100, opacity: 0 }} animate={aboutControls}>
        <motion.img
          src="/images/me.jpg"
          alt="foto mia cruzado de brazos, con una remera negra, sonriendo."
          initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
          animate={imgControls}
        />
        <motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={paragraphControls}
          >
            Let me tell you a bit about myself so you can get to know me better. I was born in Buenos Aires, Argentina, where I still live today, back in 1995.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={paragraphControls}
          >
            My name&apos;s Fernando Alarcón, and I&apos;m all about giving my best in everything I do. I believe that in today&apos;s digital world, there&apos;s always a need for more solutions to make the customer experience even better.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={paragraphControls}
          >
            That&apos;s where I come in. I&apos;m passionate about contributing everything I know in my field to meet those demands and help push things forward.
          </motion.p>
        </motion.div>
      </motion.article>
    </section>
  );
};

export default About;
