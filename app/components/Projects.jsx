'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { PROJECTS } from '../lib/data';
import { IconGlobe, IconGitHub } from '../lib/icons';
import { stagger, fadeUp } from '../lib/animations';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-num">04</span>
          <h2 className="section-title">Projects</h2>
          <div className="section-line" />
        </div>

        <motion.div
          className="projects-grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {PROJECTS.map((p) => (
            <motion.div key={p.id} className="project-card" variants={fadeUp}>
              <div className="project-image">
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 520px"
                    style={{ objectFit: 'cover' }}
                  />
                ) : (
                  <div className="project-image-placeholder">
                    <span>{p.name.charAt(0)}</span>
                  </div>
                )}
              </div>
              <div className="project-body">
                <div className="project-top-row">
                  <div>
                    <div className="project-name">{p.name}</div>
                    <div className="project-subtitle">{p.subtitle}</div>
                  </div>
                  <div className="project-year">{p.year}</div>
                </div>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tags">
                  {p.tech.map((t) => (
                    <span key={t} className="project-tag">{t}</span>
                  ))}
                </div>
                <div className="project-actions">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="pbtn prim">
                      <IconGlobe /> Website
                    </a>
                  )}
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="pbtn">
                      <IconGitHub /> Source
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

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
