import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import styles from './style.module.scss';
import { RButton } from '../Button/RButton';
import { ArrowUp } from '@/icons/ArrowUp';
export default function Experiencie() {
  const experiences = [
    {
      title: "Fullstack Developer",
      company: "Banco Comafi",
      link_company: 'https://www.comafi.com.ar/',
      date: "June 2024 - Currently",
      description: "In my role on the team, I contribute to the creation of frontend components with Next.js and TypeScript, as well as backend development using AWS Serverless. My work includes designing and implementing user interfaces and managing cloud services to ensure seamless platform functionality.",
      thumbnail: '/images/company_logo/comafi.png',
      stack: [
        { id: 'nextjs', name: 'NEXTJS' },
        { id: 'typescript', name: 'TYPESCRIPT' },
        { id: 'aws', name: 'AWS' },
        { id: 'nodejs', name: 'NODEJS' },
        { id: 'materialui', name: 'MATERIAL UI' }
      ]
    },
    {
      title: "Web Development Teacher",
      company: "Coderhouse",
      link_company: 'https://www.coderhouse.com/',
      date: "October 2022 - Currently",
      description: "As a professor, I design lesson plans and guide both students and the tutoring team. I teach core web development technologies such as HTML, CSS, SASS, Bootstrap, JavaScript, and Git.",
      thumbnail: '/images/company_logo/coder.jpg',
      stack: [
        { id: 'html', name: 'HTML' },
        { id: 'css', name: 'CSS' },
        { id: 'javascript', name: 'JAVASCRIPT' },
        { id: 'bootstrap', name: 'BOOTSTRAP' },
        { id: 'git', name: 'GIT' },
        { id: 'scss', name: 'SCSS' },
        { id: 'python', name: 'PYTHON' },
        { id: 'django', name: 'DJANGO' }
      ]
    },
    {
      title: "Frontend Developer",
      company: "Proactive Talent Hub",
      date: "May 2023 - March 2024",
      link_company: 'https://www.linkedin.com/company/proactivetalenthub',
      description: "In my role as a frontend developer, I create and implement web platforms using ReactJS, focusing on delivering seamless layouts and user experiences.",
      thumbnail: '/images/company_logo/path.jpg',
      stack: [
        { id: 'reactjs', name: 'REACTJS' },
        { id: 'javascript', name: 'JAVASCRIPT' },
        { id: 'bootstrap', name: 'BOOTSTRAP' },
        { id: 'css', name: 'CSS' }
      ]
    }
  ];

  const stackColors: Record<string, { bgColor: string; textColor: string, hoverColor: string }> = {
    nextjs: { bgColor: 'var(--light)', textColor: 'var(--light)', hoverColor: 'var(--black)' },
    typescript: { bgColor: '#009cff', textColor: '#009cff', hoverColor: '#000' },
    aws: { bgColor: '#ff6a00', textColor: '#ff6a00', hoverColor: '#000' },
    nodejs: { bgColor: '#167614', textColor: '#167614', hoverColor: 'var(--light)' },
    materialui: { bgColor: '#0070f3', textColor: '#0070f3', hoverColor: '#000' },
    html: { bgColor: '#e34c26', textColor: '#e34c26', hoverColor: '#000' },
    css: { bgColor: '#264de4', textColor: '#264de4', hoverColor: '#000' },
    javascript: { bgColor: '#f7df1e', textColor: '#f7df1e', hoverColor: '#000' },
    bootstrap: { bgColor: '#B175FF', textColor: '#B175FF', hoverColor: 'var(--black)' },
    git: { bgColor: '#f05032', textColor: '#f05032', hoverColor: '#000' },
    scss: { bgColor: '#c6538c', textColor: '#c6538c', hoverColor: '#000' },
    python: { bgColor: '#306998', textColor: '#306998', hoverColor: '#000' },
    django: { bgColor: '#88CA5E', textColor: '#88CA5E', hoverColor: '#000' },
    reactjs: { bgColor: '#61dafb', textColor: '#61dafb', hoverColor: '#000' },
    default: { bgColor: '#ccc', textColor: '#000', hoverColor: '#000' },
  };


  const titleControls = useAnimation();
  const subTitleControls = useAnimation();
  const imgControls = useAnimation();

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const lenis = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    lenis.current = lenisInstance;

    const animate = (time: number) => {
      lenisInstance.raf(time);

      if (sectionRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;
        const scrollX = window.scrollX;
        const scaleValue = Math.min(1.5, Math.max(1, 1 + sectionTop / windowHeight));
        const imageFadeOutPoint = sectionTop + windowHeight * 0.4;
        const opacityValue = scrollY > imageFadeOutPoint ? 0 : 1;

        imgControls.start({
          scale: scaleValue,
          opacity: opacityValue,
        });

        titleControls.start({
          y: sectionTop * 0.1,
          opacity: scrollY > sectionTop - windowHeight ? 1 : 0,
        });
        subTitleControls.start({
          x: sectionTop * 0.1,
          opacity: scrollX > sectionTop - windowHeight ? 1 : 0,
        });
      }

      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);

    return () => {
      lenisInstance.destroy();
    };
  }, [titleControls, subTitleControls, imgControls]);


  return (
    <section ref={sectionRef} className={styles.experience_container} id="experiencie">
      <motion.div initial={{ scale: 0.5 }} animate={imgControls} className={styles.image_container}>
        <img src="/images/exp.png" alt="experience" />3
      </motion.div>
      <article className={styles.article}>
        <motion.article className={styles.title} initial={{ y: -100, opacity: 0 }} animate={titleControls}>
          <motion.h2 animate={titleControls}>My Journey: What I&apos;ve Learned in the Way</motion.h2>
          <motion.h3 animate={subTitleControls}>My Journey: What I&apos;ve Learned in the Way</motion.h3>
        </motion.article>

        {experiences.map((exp, index) => (
          <article className={styles.experience_details} key={index}>
            <div className={styles.experience_header}>
              <p className={styles.experience_date}>{exp.date}</p>
              <h3>{exp.title}</h3>
              <a href={exp.link_company} target="_blank" rel="noopener noreferrer">
                <Image
                  src={exp.thumbnail}
                  alt={`${exp.company} logo`}
                  width={40}
                  height={40}
                  className={styles.experience_thumbnail}
                />   {exp.company} <ArrowUp />
              </a>
            </div>
            <p className={styles.experience_description}>{exp.description}</p>
            <div className={styles.experience_stack_container}>
              <h4>stack in which I work</h4>
              <div>
                {exp.stack.map((item) => {
                  const { bgColor, textColor, hoverColor } = stackColors[item.id] || stackColors.default;
                  return (
                    <RButton
                      key={item.id}
                      text={item.name}
                      color={bgColor}
                      color_text={textColor}
                      hover_color={hoverColor}
                      font_size='1.2rem'
                    />
                  );
                })}
              </div>
            </div>
          </article>
        ))}
      </article>
    </section>
  );
}
