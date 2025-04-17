// App.jsx
import styles from './App.module.css';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';

export default function App() {
    return (
        <div className={styles.container}>
            <Hero />
            <Skills />
            <Projects />
        </div>
    );
}