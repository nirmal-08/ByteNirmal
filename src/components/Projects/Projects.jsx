// components/Projects/Projects.jsx
import styles from './Projects.module.css';

const projects = [
    {
        title: 'E-commerce App',
        description: 'Full-stack e-commerce platform with React & Node.js',
        tags: ['React', 'Node', 'MongoDB'],
        link: '#',
        github: '#'
    },
    {
        title: 'AI Dashboard',
        description: 'Machine learning visualization dashboard with real-time analytics',
        tags: ['Python', 'TensorFlow', 'D3.js'],
        link: '#',
        github: '#'
    },
    {
        title: 'Mobile Fitness App',
        description: 'Cross-platform fitness tracking application with social features',
        tags: ['React Native', 'Firebase', 'Redux'],
        link: '#',
        github: '#'
    },
    {
        title: 'Blockchain Explorer',
        description: 'Cryptocurrency transaction explorer with custom APIs',
        tags: ['Solidity', 'Web3.js', 'Ethereum'],
        link: '#',
        github: '#'
    }
];

export default function Projects() {
    return (
        <section id="projects" className={styles.projects}>
            <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Featured Projects</h2>
                <div className={styles.underline}></div>
                <p className={styles.sectionSubtitle}>A selection of my recent work</p>
            </div>

            <div className={styles.projectsGrid}>
                {projects.map((project, index) => (
                    <div key={index} className={styles.projectCard}>
                        <div className={styles.cardHeader}>
                            <h3>{project.title}</h3>
                            <div className={styles.links}>
                                <a href={project.link} className={styles.demoLink} aria-label="Live Demo">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15 3 21 3 21 9"></polyline>
                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
                                </a>
                                <a href={project.github} className={styles.githubLink} aria-label="GitHub Repository">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <p className={styles.description}>{project.description}</p>
                        <div className={styles.tags}>
                            {project.tags.map((tag, i) => (
                                <span key={i}>{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.ctaContainer}>
                <a href="#" className={styles.ctaButton}>
                    View All Projects
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h13M12 5l7 7-7 7"/>
                    </svg>
                </a>
            </div>
        </section>
    );
}