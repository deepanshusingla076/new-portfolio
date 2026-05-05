'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function ScrollReveal({ children }) {
  const ref = useRef(null);
  // once: true means it won't fade out when scrolling back up
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 30,
      }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}