'use client';
import { motion } from 'framer-motion';
import { SKILLS } from '../lib/data';
import { stagger, fadeUp } from '../lib/animations';

export default function TechStack() {
  return (
    <section id="tech" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-num">05</span>
          <h2 className="section-title">Tech Stack</h2>
          <div className="section-line" />
        </div>

        <motion.div
          className="skills-grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {Object.entries(SKILLS).map(([cat, items]) => (
            <motion.div key={cat} className="skill-cat" variants={fadeUp}>
              <div className="skill-cat-title">{cat}</div>
              <div className="skill-tags">
                {items.map((item) => (
                  <span key={item} className="skill-tag">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
