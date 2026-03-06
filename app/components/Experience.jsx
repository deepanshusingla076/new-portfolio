'use client';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../lib/data';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-num">03</span>
          <h2 className="section-title">Experience</h2>
          <div className="section-line" />
        </div>

        <div className="exp-list">
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.role}
              className="exp-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="exp-dot" />
              <div className="exp-top">
                <div className="exp-role">{exp.role}</div>
                <div className="exp-period">{exp.period}</div>
              </div>
              <div className="exp-company">
                {exp.company}
                <span className="exp-badge">{exp.location}</span>
              </div>
              <ul className="exp-bullets">
                {exp.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
