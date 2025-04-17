import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
    const heroRef = useRef(null);

    useEffect(() => {
        // Parallax effect on mouse move
        const handleMouseMove = (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            heroRef.current.style.setProperty('--mouse-x', x);
            heroRef.current.style.setProperty('--mouse-y', y);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section id="hero" className={styles.hero} ref={heroRef}>
            <div className={styles.glassCard}>
                <h1 data-aos="fade-down">
                    <span className={styles.gradientText}>Hello, I'm</span>
                    <span className={styles.nameHighlight}>Nirmal</span>
                </h1>
                <p className={styles.typingEffect}>Full Stack Developer | Problem Solver | UI/UX Enthusiast</p>

                <div className={styles.buttonGroup}>
                    <a href="#projects" className={`${styles.ctaButton} ${styles.primary}`}>
                        <span>View My Work</span>
                        <div className={styles.arrow}></div>
                    </a>
                    <a href="#contact" className={`${styles.ctaButton} ${styles.secondary}`}>
                        Contact Me
                    </a>
                </div>
            </div>

            <div className={styles.scrollIndicator}></div>
            <div className={styles.floatingShapes}></div>
        </section>
    );
}
