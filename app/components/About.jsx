'use client';
import { motion } from 'framer-motion';
import { IconLinkedIn, IconGitHub, IconFileText } from '../lib/icons';
import { stagger, fadeUp } from '../lib/animations';

const connects = [
  { icon: <IconLinkedIn />, name: 'LinkedIn', handle: 'deepanshu-singla-519057335', href: 'https://www.linkedin.com/in/deepanshu-singla-519057335/' },
  { icon: <IconGitHub />, name: 'GitHub', handle: 'deepanshusingla076', href: 'https://github.com/deepanshusingla076' },
  { icon: <IconFileText />, name: 'Resume', handle: 'deepanshu_singla_resume', href: '/resume_deepanshu_singla.pdf' },
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
              I&#39;m <strong>Deepanshu Singla</strong> — a Full Stack Developer from Panchkula, India
              and a CSE undergrad at Chitkara University (2023–2027, CGPA 9.06/10).
            </motion.p>
            <motion.p variants={fadeUp}>
              I work across the full stack to engineer real-time platforms, ML-powered analytics
              tools, and production-ready web applications with clean architecture, secure APIs, and
              solid DevOps practices.
            </motion.p>
            <motion.p variants={fadeUp}>
              I actively contribute to open source (GSSoC), participate in hackathons, and solve
              problems on GeeksforGeeks to stay sharp. I love turning complex problems into simple,
              elegant solutions.
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
