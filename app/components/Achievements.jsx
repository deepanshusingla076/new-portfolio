'use client';
import { motion } from 'framer-motion';
import { CERTS, HACKATHONS } from '../lib/data';
import { stagger, fadeUp, slideLeft, slideRight } from '../lib/animations';

const colFadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const labelReveal = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const rowItem = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

const rowStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <motion.div
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          <span className="section-num">06</span>
          <h2 className="section-title">Achievements &amp; Certificates</h2>
          <div className="section-line" />
        </motion.div>

        <div className="ach-layout">
          {/* Left: Hackathons */}
          <motion.div
            className="ach-col"
            variants={colFadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            <motion.div className="ach-col-label" variants={labelReveal}>
              <span>🏆</span> Hackathons &amp; Competitions
            </motion.div>
                <motion.div
                  className="hack-list"
                  variants={rowStagger}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-40px' }}
                >
                  {HACKATHONS.map((h) => (
                    <motion.div
                      className="hack-row"
                      variants={rowItem}
                      whileHover={{ x: 6, scale: 1.04, boxShadow: '0 6px 24px rgba(34,197,94,0.18)' }}
                      transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                      key={h.name}
                    >
                      <span className="hack-name">{h.name}</span>
                      <span className="hack-year">{h.year}</span>
                    </motion.div>
                  ))}
                </motion.div>
          </motion.div>

          {/* Right: Certifications */}
          <motion.div
            className="ach-col"
            variants={colFadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            <motion.div className="ach-col-label" variants={labelReveal}>
              <span>📜</span> Certifications
            </motion.div>
                <motion.div
                  className="cert-list"
                  variants={rowStagger}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-40px' }}
                >
                  {CERTS.map((c) => (
                    <motion.div
                      className="cert-row"
                      variants={rowItem}
                      whileHover={{ x: 6, scale: 1.04, boxShadow: '0 6px 24px rgba(59,130,246,0.18)' }}
                      transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                      key={c.name}
                    >
                      <span className="cert-name">{c.name}</span>
                      <span className="cert-year">{c.year}</span>
                    </motion.div>
                  ))}
                </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
