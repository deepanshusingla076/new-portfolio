'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { IconPin, IconDownload } from '../lib/icons';

export default function Hero() {
  const [displayName, setDisplayName] = useState('');
  const fullName = 'DEEPANSHU SINGLA';

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
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <div className="hero-body">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Available for opportunities
            </div>

            <h1 className="hero-name">{displayName}</h1>

            <p className="hero-role">
              <strong>Full Stack Developer</strong> &amp; AI Enthusiast
            </p>

            <div className="hero-location">
              <IconPin />
              Panchkula, India
            </div>

            <p className="hero-desc">
              Computer Science Engineering student at Chitkara University (2023&ndash;2027,
              CGPA&nbsp;9.06/10). I build real-time platforms, ML-powered analytics tools, and
              production-ready web applications &mdash; reliable, secure, and user-centric.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn-primary">View Projects</a>
              <a href="#contact" className="btn-secondary">Contact Me</a>
              <a href="/resume/resume.pdf" download className="btn-secondary" style={{ gap: 7 }}>
                <IconDownload />
                Resume
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="profile-wrap">
            <div className="profile-frame">
              <Image
                src="/assets/images/deepanshu.jpg"
                alt="Deepanshu Singla"
                fill
                sizes="(max-width: 768px) 220px, 280px"
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
