'use client';
import { motion } from 'framer-motion';
import { IconDownload } from '../lib/icons';

export default function Resume() {
  return (
    <section id="resume" className="section resume-section">
      <div className="container">
        <div className="resume-header-row">
          <div className="resume-header-left">
            <span className="section-num">07 â€” RESUME</span>
            <h2 className="resume-big-title">
              Professional<br />Resume
            </h2>
          </div>
          <div className="resume-header-right">
            <p className="resume-desc">
              View a high-level snapshot of my experience, education, and technical skills,
              or download the full PDF resume for detailed review.
            </p>
            <a
              href="/resume/Resume.pdf"
              download="Deepanshu_Singla_Resume.pdf"
              className="btn-download-resume"
            >
              <IconDownload size={16} />
              DOWNLOAD RESUME
            </a>
          </div>
        </div>

        <motion.div
          className="resume-preview-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <iframe
            src="/resume/Resume.pdf"
            className="resume-iframe"
            title="Resume Preview"
          />
          {typeof window !== 'undefined' && !window.navigator?.pdfViewerEnabled && (
            <p className="resume-fallback">
              PDF preview is not available in this browser. Please use the download button above to view the resume.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
