// Custom spring-like ease for all animations
const spring = [0.22, 1, 0.36, 1];

export const floatIn = {
  hidden: { opacity: 0, transform: "translate3d(0, 18px, 0) scale(0.92)" },
  show: {
    opacity: 1,
    transform: "translate3d(0, 0, 0) scale(1)",
    transition: { duration: 0.65, ease: spring },
  },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: spring } },
};

export const fadeUpSlow = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: spring } },
};

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export const staggerFast = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.55, ease: "easeOut" } },
};

export const slideLeft = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.65, ease: spring } },
};

export const slideRight = {
  hidden: { opacity: 0, x: 24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.65, ease: spring } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: spring } },
};
