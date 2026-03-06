'use client';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-copy">
          © {new Date().getFullYear()} Deepanshu Singla — Built with Next.js
        </div>
        <div className="footer-links">
          <a href="https://github.com/deepanshusingla076" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
          <a href="https://www.linkedin.com/in/deepanshu-singla-519057335/" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
          <a href="/resume_deepanshu_singla.pdf" download className="footer-link">Resume</a>
        </div>
      </div>
    </footer>
  );
}
