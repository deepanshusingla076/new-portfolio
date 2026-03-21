'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CERTS, HACKATHONS } from '../lib/data';
import { fadeUp } from '../lib/animations';
import BorderGlow from './BorderGlow';

const cardStagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

function CredentialCard({ item, kind }) {
  return (
    <motion.article
      className="cred-card-shell"
      variants={cardVariant}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 280, damping: 20 }}
    >
      <BorderGlow
        className="cred-glow"
        edgeSensitivity={30}
        glowColor="40 80 80"
        backgroundColor="#060010"
        borderRadius={16}
        glowRadius={26}
        glowIntensity={0.75}
        coneSpread={25}
        animated={false}
        colors={['#c084fc', '#f472b6', '#38bdf8']}
        fillOpacity={0.35}
      >
        <div className="cred-card">
          <div className="cred-card-title-wrap">
            <h4 className="cred-card-title">{item.name}</h4>
          </div>

          {item.image ? (
            <div className="cred-thumb-wrap">
              <Image
                src={item.image}
                alt={`${item.name} ${kind}`}
                className="cred-thumb"
                width={900}
                height={600}
                loading="lazy"
              />
            </div>
          ) : (
            <div className="cred-thumb-wrap cred-thumb-placeholder-wrap">
              <div className="cred-thumb-placeholder">No Preview</div>
            </div>
          )}

          <div className="cred-card-meta">
            <span className="cred-org">{item.issuer || item.type}</span>
            <span className="cred-year">{item.year}</span>
          </div>
          {item.note && <p className="cred-note">{item.note}</p>}
        </div>
      </BorderGlow>
    </motion.article>
  );
}

const columnVariant = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
          <h2 className="section-title">Hackathons</h2>
          <div className="section-line" />
        </motion.div>

        <motion.div
          className="ach-section-block"
          variants={columnVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          <div className="ach-col-label">
            <span>🏆</span> Hackathons &amp; Competitions
          </div>
          <motion.div
            className="cred-grid"
            variants={cardStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
          >
            {HACKATHONS.map((h) => (
              <CredentialCard key={h.name} item={h} kind="hackathon certificate" />
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="section-header ach-sub-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          <span className="section-num">07</span>
          <h2 className="section-title">Certifications</h2>
          <div className="section-line" />
        </motion.div>

        <motion.div
          id="certifications"
          className="ach-section-block"
          variants={columnVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          <div className="ach-col-label">
            <span>📜</span> Professional &amp; Technical Certificates
          </div>
          <motion.div
            className="cred-grid"
            variants={cardStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
          >
            {CERTS.map((c) => (
              <CredentialCard key={c.name} item={c} kind="certificate" />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
