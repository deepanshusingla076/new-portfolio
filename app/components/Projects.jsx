'use client';
import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lanyard from './Lanyard';
import { PROJECTS } from '../lib/data';
import { IconGlobe, IconGitHub } from '../lib/icons';

// Both columns share these variants — slide as a unit
const colVariants = {
  enter: (dir) => ({
    x: dir > 0 ? 260 : -260,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.42, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: (dir) => ({
    x: dir > 0 ? -160 : 160,
    opacity: 0,
    transition: { duration: 0.26, ease: [0.55, 0, 1, 0.45] },
  }),
};

export default function Projects() {
  const [idx, setIdx] = useState(0);
  const [direction, setDirection] = useState(1);
  const project = PROJECTS[idx];

  const go = useCallback((dir) => {
    setDirection(dir);
    setIdx((prev) => {
      const next = prev + dir;
      if (next < 0) return PROJECTS.length - 1;
      if (next >= PROJECTS.length) return 0;
      return next;
    });
  }, []);

  const goTo = useCallback(
    (i) => {
      setDirection(i > idx ? 1 : -1);
      setIdx(i);
    },
    [idx]
  );

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Header */}
        <div className="projects-carousel-header">
          <div className="section-header" style={{ marginBottom: 0, flex: 1 }}>
            <span className="section-num">04</span>
            <h2 className="section-title">Projects</h2>
            <div className="section-line" />
          </div>
          <div className="projects-nav-controls">
            <button className="proj-nav-btn" onClick={() => go(-1)} aria-label="Previous project">
              ← Prev
            </button>
            <span className="proj-counter">
              {String(idx + 1).padStart(2, '0')}&thinsp;/&thinsp;{String(PROJECTS.length).padStart(2, '0')}
            </span>
            <button className="proj-nav-btn" onClick={() => go(1)} aria-label="Next project">
              Next →
            </button>
          </div>
        </div>

        {/* Carousel — both columns share the same AnimatePresence key so they slide together */}
        <div className="projects-carousel-body">
          {/* LEFT: Lanyard card */}
          <div className="projects-lanyard-col">
            <AnimatePresence custom={direction} mode="popLayout" initial={false}>
              <motion.div
                key={`lan-${project.id}`}
                custom={direction}
                variants={colVariants}
                initial="enter"
                animate="center"
                exit="exit"
                style={{ width: '100%' }}
              >
                <Lanyard project={project} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT: Info card */}
          <div className="projects-info-col">
            <AnimatePresence custom={direction} mode="popLayout" initial={false}>
              <motion.div
                key={`info-${project.id}`}
                custom={direction}
                variants={colVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="project-info-card"
              >
                <div className="pic-meta-row">
                  <span className="pic-num-tag">
                    PROJECT&nbsp;{String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="project-year">{project.year}</span>
                </div>

                <h3 className="pic-title">{project.name}</h3>
                <p className="pic-subtitle">{project.subtitle}</p>

                <div className="pic-divider" />

                <p className="pic-desc">{project.desc}</p>

                <div className="project-tags" style={{ marginTop: '14px' }}>
                  {project.tech.map((t) => (
                    <span key={t} className="project-tag">{t}</span>
                  ))}
                </div>

                <div className="project-actions" style={{ marginTop: '18px' }}>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="pbtn prim">
                      <IconGlobe /> Website
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="pbtn">
                      <IconGitHub /> Source
                    </a>
                  )}
                </div>

                <div className="proj-dots">
                  {PROJECTS.map((_, i) => (
                    <button
                      key={i}
                      className={`proj-dot${i === idx ? ' active' : ''}`}
                      onClick={() => goTo(i)}
                      aria-label={`Go to project ${i + 1}`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="view-more-wrap">
          <a
            href="https://github.com/deepanshusingla076?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gh-more"
          >
            <IconGitHub />
            More Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
