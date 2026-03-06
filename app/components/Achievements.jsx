'use client';
import { motion } from 'framer-motion';
import { CERTS, HACKATHONS } from '../lib/data';
import { stagger, fadeUp } from '../lib/animations';

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-num">06</span>
          <h2 className="section-title">Achievements &amp; Certificates</h2>
          <div className="section-line" />
        </div>

        <div className="ach-layout">
          {/* Left: Hackathons */}
          <div className="ach-col">
            <div className="ach-col-label">
              <span>🏆</span> Hackathons &amp; Competitions
            </div>
            <motion.div
              className="hack-list"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
            >
              {HACKATHONS.map((h, i) => (
                <motion.div key={h.name} className="hack-row" variants={fadeUp}>
                  <span className="hack-row-num">0{i + 1}</span>
                  <span className="hack-row-icon">{h.icon}</span>
                  <div className="hack-row-info">
                    <div className="hack-row-name">{h.name}</div>
                    <div className="hack-row-type">{h.type}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Certifications */}
          <div className="ach-col">
            <div className="ach-col-label">
              <span>📜</span> Certifications
            </div>
            <motion.div
              className="cert-list"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
            >
              {CERTS.map((cert) => (
                <motion.div key={cert.name} className="cert-row" variants={fadeUp}>
                  <div className="cert-row-icon">{cert.icon}</div>
                  <div className="cert-row-info">
                    <div className="cert-row-name">{cert.name}</div>
                    <div className="cert-row-issuer">{cert.issuer}</div>
                  </div>
                  <div className="cert-row-badge">✓</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
