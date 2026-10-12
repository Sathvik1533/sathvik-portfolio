import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { HeroVisual } from './components/HeroVisual';
import { ProofStrip } from './components/ProofStrip';
import { SelectedWork } from './components/SelectedWork';
import { HowIWork } from './components/HowIWork';
import { FeaturedArchitecture } from './components/FeaturedArchitecture';
import { ContactCTA } from './components/ContactCTA';
import { ByteGuide } from './components/ByteGuide';

export const App: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        style={{
          position: 'absolute',
          top: '-40px',
          left: '16px',
          backgroundColor: 'var(--accent-primary)',
          color: '#FFFFFF',
          padding: '8px 16px',
          zIndex: 9999,
          borderRadius: '4px',
          fontSize: '0.85rem',
          transition: 'top var(--transition-fast)',
        }}
        onFocus={(e) => { e.currentTarget.style.top = '12px'; }}
        onBlur={(e) => { e.currentTarget.style.top = '-40px'; }}
      >
        Skip to main content
      </a>

      {/* 1. Premium Navigation */}
      <Navigation />

      <main id="main-content" role="main" style={{ flex: 1 }}>
        {/* 2. Personal Hero */}
        <Hero />

        {/* 3. Hero Visual (Personal Engineering Canvas) */}
        <HeroVisual />

        {/* 4. Compact Proof / Category Strip */}
        <ProofStrip />

        {/* 5. Four Selected-Project Previews */}
        <SelectedWork />

        {/* 6. Short "How I Work" Section */}
        <HowIWork />

        {/* 7. One Featured LedgerLens Architecture Preview */}
        <FeaturedArchitecture />
      </main>

      {/* 8. Resume / Contact CTA */}
      <ContactCTA />

      {/* 9. Small Byte Guide Trigger */}
      <ByteGuide />
    </div>
  );
};

export default App;
