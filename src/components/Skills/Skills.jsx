import { motion } from 'framer-motion';
import styles from './Skills.module.css';

const skills = [
    { name: 'React', level: 80 },
    { name: 'Node.js', level: 65},
    { name: 'CSS/Sass', level: 75},
    { name: 'Java', level: 80 },
    { name: 'MongoDB', level: 65},
    { name: 'Sql', level: 70}
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5 }
    }
};

export default function Skills() {
    return (
        <section id="skills" className={styles.skills}>
            <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>My Expertise</h2>
                <p className={styles.sectionSubtitle}>Technologies I work with daily</p>
            </div>

            <motion.div
                className={styles.skillsContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        className={styles.skillItem}
                        variants={itemVariants}
                    >
                        <div className={styles.skillHeader}>
                            <span className={styles.skillIcon}>{skill.icon}</span>
                            <span className={styles.skillName}>{skill.name}</span>
                            <span className={styles.skillLevel}>{skill.level}%</span>
                        </div>

                        <div className={styles.skillBar}>
                            <motion.div
                                className={styles.skillProgress}
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                            />
                            <div className={styles.skillPercentage} style={{ left: `${skill.level}%` }}>
                                {skill.level}%
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <div className={styles.techCloud}>
                <span>JavaScript</span>
                <span>ES6+</span>
                <span>Next.js</span>
                <span>Redux</span>
                <span>Jest</span>
                <span>Webpack</span>
                <span>Docker</span>
                <span>Git</span>
            </div>
        </section>
    );
}