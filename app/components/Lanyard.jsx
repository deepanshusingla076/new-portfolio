'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

function accentFromName(name = '') {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) | 0;
  const hue = ((Math.abs(h) % 80) * 4 + 190) % 360;
  return `hsl(${hue}, 60%, 62%)`;
}

export default function Lanyard({ project }) {
  const [imgError, setImgError] = useState(false);

  if (!project) return null;

  const accent = accentFromName(project.name);
  const initials = project.name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="lanyard-root">
      {/* Ceiling clip */}
      <div className="lanyard-clip" style={{ borderColor: 'var(--border-h)' }} />

      {/* Swing animation — always plays on mount (component is remounted each project change) */}
      <motion.div
        initial={{ rotate: -18, opacity: 0.75, y: -8 }}
        animate={{ rotate: 0, opacity: 1, y: 0 }}
        transition={{
          rotate: {
            type: 'spring',
            stiffness: 60,
            damping: 10,
            mass: 1.2,
          },
          opacity: { duration: 0.25 },
          y: { duration: 0.35, ease: 'easeOut' },
        }}
        className="lanyard-swing"
      >
        {/* Strap */}
        <div
          className="lanyard-strap"
          style={{
            background: `linear-gradient(180deg, var(--border-h) 0%, ${accent} 50%, var(--border-h) 100%)`,
          }}
        />

        {/* Badge card */}
        <motion.div
          whileHover={{ scale: 1.02, y: -4 }}
          transition={{ type: 'spring', stiffness: 320, damping: 22 }}
          className="lanyard-card"
          style={{ boxShadow: `0 20px 60px rgba(0,0,0,0.55), 0 0 0 1px var(--border), 0 0 40px ${accent}18` }}
        >
          {/* Top accent bar */}
          <div className="lanyard-card-bar" style={{ background: accent }} />

          {/* Screenshot area */}
          <div className="lanyard-img-area">
            {!imgError && project.image ? (
              <img
                src={project.image}
                alt={project.name}
                className="lanyard-img"
                onError={() => setImgError(true)}
                loading="eager"
              />
            ) : (
              <div
                className="lanyard-img-placeholder"
                style={{ background: `linear-gradient(135deg, ${accent}30 0%, ${accent}08 100%)` }}
              >
                <span className="lanyard-placeholder-text" style={{ color: accent }}>
                  {initials}
                </span>
                <span className="lanyard-placeholder-sub">No Preview</span>
              </div>
            )}
            <div className="lanyard-img-overlay" />
          </div>

          {/* Footer */}
          <div className="lanyard-card-footer">
            <div className="lanyard-card-name">{project.name}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
              <span className="lanyard-card-year" style={{ color: accent }}>{project.year}</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
