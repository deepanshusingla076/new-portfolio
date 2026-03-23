'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CERTS, HACKATHONS } from '../lib/data';
import { fadeUp } from '../lib/animations';
import BorderGlow from './BorderGlow';
import { useTheme } from '../context/ThemeContext';

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

function CredentialCard({ item, kind, theme }) {
  const isLight = theme === 'light';

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
        glowColor={isLight ? '215 58 45' : '198 70 78'}
        backgroundColor="var(--bg-1)"
        borderRadius={16}
        glowRadius={26}
        glowIntensity={isLight ? 0.38 : 0.62}
        coneSpread={25}
        animated={false}
        colors={
          isLight
            ? ['rgba(44, 108, 172, 0.50)', 'rgba(12, 157, 122, 0.42)', 'rgba(235, 127, 39, 0.35)']
            : ['rgba(56, 189, 248, 0.52)', 'rgba(45, 212, 191, 0.40)', 'rgba(251, 146, 60, 0.32)']
        }
        fillOpacity={isLight ? 0.2 : 0.3}
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
  const { theme } = useTheme();

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
              <CredentialCard key={h.name} item={h} kind="hackathon certificate" theme={theme} />
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
              <CredentialCard key={c.name} item={c} kind="certificate" theme={theme} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
