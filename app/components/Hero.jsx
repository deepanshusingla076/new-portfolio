'use client';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { IconPin, IconDownload } from '../lib/icons';

const ROLES = [
  'Full-Stack Developer',
  'Backend Developer',
  'Open Source Contributor',
  'System Design Enthusiast',
  'Problem Solver',
];

const STATS = [
  { num: '9.06', label: 'CGPA' },
  { num: '5+', label: 'Projects' },
  { num: '2', label: 'Internships' },
  { num: '5+', label: 'Hackathons' },
];

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

export default function Hero() {
  const [displayName, setDisplayName] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [roleText, setRoleText] = useState(ROLES[0]);
  const fullName = 'DEEPANSHU SINGLA';

  // Name scramble on mount
  useEffect(() => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let i = 0;
    const interval = setInterval(() => {
      setDisplayName(
        fullName.split('').map((c, idx) => {
          if (c === ' ') return ' ';
          if (idx < i) return fullName[idx];
          return chars[Math.floor(Math.random() * chars.length)];
        }).join('')
      );
      if (i >= fullName.length) clearInterval(interval);
      i += 1 / 3;
    }, 28);
    return () => clearInterval(interval);
  }, []);

  // Premium role animation: cycle roles every 3.2s with smooth transitions
  useEffect(() => {
    setRoleText(ROLES[roleIdx]);
    const timer = setTimeout(() => {
      setRoleIdx((prev) => (prev + 1) % ROLES.length);
    }, 3200);
    return () => clearTimeout(timer);
  }, [roleIdx]);

  const nameLine1 = (displayName || fullName).split(' ')[0];
  const nameLine2 = (displayName || fullName).split(' ').slice(1).join(' ');

  return (
    <section id="home" className="hero">
      <div className="hero-inner">

        {/* ── Left: Content ── */}
        <motion.div
          className="hero-body"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Meta: status + location */}
          <motion.div className="hero-meta" variants={item}>
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Available for work
            </div>
            <div className="hero-location">
              <IconPin size={11} />
              Panchkula, India
            </div>
          </motion.div>

          {/* Name — stacked, massive */}
          <motion.div className="hero-name-wrap" variants={item}>
            <h1 className="hero-name">
              <span className="hero-name-line1">{nameLine1}</span>
              <span className="hero-name-line2">
                {nameLine2}<span className="hero-name-period">.</span>
              </span>
            </h1>
          </motion.div>

          {/* Premium role animation with per-word float-in */}
          <motion.div className="hero-role-row" variants={item}>
            <span className="hero-role-line" />
            <p className="hero-role">
              <motion.span
                key={roleIdx}
                className="hero-role-words"
                initial="hidden"
                animate="show"
                variants={{
                  hidden: { opacity: 0, y: 10, filter: 'blur(3px)' },
                  show: {
                    opacity: 1,
                    y: 0,
                    filter: 'blur(0px)',
                    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                {roleText}
              </motion.span>
              <span className="hero-role-cursor" />
            </p>
            <span className="hero-role-line" />
          </motion.div>

          {/* Beautiful quote */}
          <motion.div className="hero-quote" variants={item}>
            <span className="hero-quote-mark">&ldquo;</span>
            Focused on clean architecture and building real-world systems
            <span className="hero-quote-mark">&rdquo;</span>
          </motion.div>

          {/* Description */}
          <motion.p className="hero-desc" variants={item}>
           I enjoy building modern web applications, real-time platforms, scalable backends, and production-ready APIs. I am a 3rd year B.E. CSE student at Chitkara University focused on clean architecture and practical system design.
          </motion.p>

          {/* CTAs */}
          <motion.div className="hero-actions" variants={item}>
            <a href="#projects" className="btn-primary">
              View Projects
              <span className="btn-arrow">↗</span>
            </a>
            <a href="#contact" className="btn-secondary">Get In Touch</a>
            <a href="/resume/Deepanshu_Singla_Resume.pdf" download className="btn-icon-only" title="Download Resume">
              <IconDownload size={14} />
            </a>
          </motion.div>
        </motion.div>

        {/* ── Right: Photo ── */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="profile-wrap">

            {/* Floating code badge */}
            <motion.div
              className="hero-code-badge"
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.85 }}
            >
              <span className="hcb-line">
                <span className="hcb-k">const</span>{' '}
                <span className="hcb-v">status</span>{' = '}
                <span className="hcb-s">&ldquo;open&rdquo;</span>;
              </span>
              <span className="hcb-line">
                <span className="hcb-k">const</span>{' '}
                <span className="hcb-v">cgpa</span>{' = '}
                <span className="hcb-n">9.06</span>;
              </span>
            </motion.div>

            <div className="profile-frame">
              <Image
                src="/assets/images/deepanshu.jpg"
                alt="Deepanshu Singla"
                fill
                sizes="(max-width: 768px) 180px, 290px"
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                priority
                unoptimized
              />
            </div>
          </div>
        </motion.div>

      </div>

      {/* Scroll hint */}
      <div className="hero-scroll-hint">
        <span className="hero-scroll-line" />
        <span className="hero-scroll-text">scroll</span>
      </div>
    </section>
  );
}
