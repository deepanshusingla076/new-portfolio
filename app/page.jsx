'use client';

import SplashCursor from './components/SplashCursor';
import Navigation from './components/Navigation';
import GalaxyBackground from './components/GalaxyBackground';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Achievements from './components/Achievements';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Page() {
  return (
    <>
      <GalaxyBackground />
      <SplashCursor
        SIM_RESOLUTION={32}
        DYE_RESOLUTION={128}
        CAPTURE_RESOLUTION={64}
        DENSITY_DISSIPATION={8}
        VELOCITY_DISSIPATION={4}
        PRESSURE_ITERATIONS={4}
        SPLAT_RADIUS={0.12}
        SPLAT_FORCE={3000}
      />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <TechStack />
        <Achievements />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
