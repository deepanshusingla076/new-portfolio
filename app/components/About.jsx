'use client';
import { motion } from 'framer-motion';
import { IconLinkedIn, IconGitHub, IconFileText, IconLeetCode } from '../lib/icons';
import { stagger, fadeUp } from '../lib/animations';

const connects = [
  { icon: <IconLinkedIn />, name: 'LinkedIn', handle: 'deepanshu-singla', href: 'https://www.linkedin.com/in/deepanshu-singla-519057335/' },
  { icon: <IconGitHub />, name: 'GitHub', handle: 'deepanshusingla076', href: 'https://github.com/deepanshusingla076' },
  { icon: <IconLeetCode />, name: 'LeetCode', handle: 'd_singla', href: 'https://leetcode.com/u/d_singla/' },
  { icon: <IconFileText />, name: 'Resume', handle: 'View / Download', href: '/resume/Resume.pdf' },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-num">01</span>
          <h2 className="section-title">About</h2>
          <div className="section-line" />
        </div>

        <div className="about-grid">
          <motion.div
            className="about-bio"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.p variants={fadeUp}>
              I&apos;m <strong>Deepanshu Singla</strong>, a Computer Science student at Chitkara University (3rd year, CGPA 9.06/10) based in Panchkula, India. I focus on building scalable full-stack applications and backend systems designed for real-world usage — prioritizing correctness, performance, and maintainability.
            </motion.p>
            <motion.p variants={fadeUp}>
              My experience spans backend development, real-time systems, and data-driven applications. I work with technologies such as Node.js, Spring Boot, FastAPI, Redis, and Socket.io to build reliable APIs and real-time architectures. I also explore machine learning integration and data pipelines to add intelligent capabilities to applications.
            </motion.p>
            <motion.p variants={fadeUp}>
              I enjoy thinking deeply about system design, distributed systems, and clean software architecture. My goal is to write code that is robust, maintainable, and production-ready, not just prototypes or demos.
            </motion.p>
            <motion.p variants={fadeUp}>
              Beyond academics, I actively contribute to open-source programs like GSSoC, participate in hackathons, and consistently improve my problem-solving skills through GeeksforGeeks and LeetCode. I believe in understanding how systems work under the hood, rather than simply using tools at a surface level.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="connect-label">Connect</div>
            <div className="connect-grid">
              {connects.map((c) => (
                <a
                  key={c.name}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="connect-card"
                >
                  <div className="connect-icon-box">{c.icon}</div>
                  <div className="connect-info">
                    <div className="connect-name">{c.name}</div>
                    <div className="connect-handle">{c.handle}</div>
                  </div>
                  <span className="connect-arrow">↗</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
