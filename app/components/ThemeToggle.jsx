'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { IconThemeDay, IconThemeNight } from '../lib/icons';

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.round(rect.left + rect.width / 2);
    const y = Math.round(rect.top + rect.height / 2);
    document.documentElement.style.setProperty('--vt-x', `${x}px`);
    document.documentElement.style.setProperty('--vt-y', `${y}px`);
    toggleTheme();
  };

  if (!mounted) {
    return <button className="theme-toggle" aria-label="Toggle theme" />;
  }

  return (
    <button
      className="theme-toggle"
      onClick={handleClick}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <span className="theme-toggle-glow" aria-hidden="true" />
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          className="theme-toggle-icon-wrap"
          initial={{ rotate: -24, opacity: 0, scale: 0.78, y: 2 }}
          animate={{ rotate: 0, opacity: 1, scale: 1, y: 0 }}
          exit={{ rotate: 24, opacity: 0, scale: 0.78, y: -2 }}
          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
        >
          {theme === 'dark' ? <IconThemeDay size={18} /> : <IconThemeNight size={18} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
