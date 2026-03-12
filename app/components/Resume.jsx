'use client';
import { motion } from 'framer-motion';
import { IconDownload } from '../lib/icons';

export default function Resume() {
  return (
    <section id="resume" className="section resume-section">
      <div className="container">
        <div className="resume-header-row">
          <div className="resume-header-left">
            <span className="section-num">07 — RESUME</span>
            <h2 className="resume-big-title">
              Professional<br />Resume
            </h2>
          </div>
          <div className="resume-header-right">
            <p className="resume-desc">
              View a high-level snapshot of my experience, education, and technical skills,
              or download the full PDF resume for detailed review.
            </p>
            <div className="resume-btns">
              <a
                href="/resume/Resume.pdf"
                download="Deepanshu_Singla_Resume.pdf"
                className="btn-download-resume"
              >
                <IconDownload size={16} />
                DOWNLOAD
              </a>
              <a
                href="/resume/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-view-resume"
              >
                ↗ OPEN IN BROWSER
              </a>
            </div>
          </div>
        </div>

        <motion.div
          className="resume-preview-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <object
            data="/resume/Resume.pdf"
            type="application/pdf"
            className="resume-iframe"
          >
            <div className="resume-fallback-ui">
              <div className="resume-fallback-icon">📄</div>
              <p className="resume-fallback-text">
                Your browser doesn&apos;t support inline PDF preview.
              </p>
              <div className="resume-fallback-btns">
                <a
                  href="/resume/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-download-resume"
                >
                  Open PDF in New Tab
                </a>
                <a
                  href="/resume/Resume.pdf"
                  download="Deepanshu_Singla_Resume.pdf"
                  className="btn-view-resume"
                >
                  <IconDownload size={14} /> Download
                </a>
              </div>
            </div>
          </object>
        </motion.div>
      </div>
    </section>
  );
}
