"use client";
import { motion } from "framer-motion";

export default function Education() {
  const courses = [
    "Data Structures & Algorithms",
    "Operating Systems",
    "Database Management",
    "Computer Networks",
    "Object-Oriented Programming",
    "System Design",
  ];

  return (
    <section id="education" className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="section-header">
          <span className="section-num">02</span>
          <h2 className="section-title">Education</h2>
          <div className="section-line" />
        </div>

        <motion.div
          className="edu-card edu-card-enhanced"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="edu-top-accent" />
          <div className="edu-body">
            <div className="edu-main">
              <div className="edu-header-row">
                <div className="edu-icon-wrap">
                  <img src="/assets/images/chitkara-logo.png" alt="Chitkara University Logo" style={{ width: 36, height: 36, borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.12)' }} />
                </div>
                <div>
                  <span className="edu-type-badge">B.E. · Undergraduate · 2023 – 2027</span>
                  <h3 className="edu-degree">Computer Science &amp; Engineering</h3>
                  <p className="edu-uni">Chitkara University, Punjab</p>
                </div>
              </div>

              <div className="edu-highlights">
                <div className="edu-highlight-item edu-cgpa-highlight">
                  <span className="edu-hi-label">CGPA</span>
                  <span className="edu-hi-value">9.06 <span className="edu-hi-sub">/ 10</span></span>
                </div>
                <div className="edu-highlight-item">
                  <span className="edu-hi-label">Semester</span>
                  <span className="edu-hi-value">5th <span className="edu-hi-sub">current</span></span>
                </div>
                <div className="edu-highlight-item">
                  <span className="edu-hi-label">Status</span>
                  <span className="edu-hi-value edu-status-active">Active</span>
                </div>
              </div>
            </div>

            <div className="edu-courses">
              <p className="edu-courses-label">Key Coursework</p>
              <div className="edu-courses-grid">
                {courses.map((c) => (
                  <span key={c} className="edu-course-tag">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
