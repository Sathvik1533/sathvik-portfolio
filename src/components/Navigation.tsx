import React, { useState } from 'react';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'var(--bg-overlay)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      <div
        className="portfolio-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '64px',
        }}
      >
        {/* Brand */}
        <a
          href="#top"
          onClick={(e) => scrollTo(e, 'top')}
          style={{
            display: 'flex',
            flexDirection: 'column',
            textDecoration: 'none',
          }}
          aria-label="Kotagiri Sathvik — Homepage"
        >
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.05rem',
              fontWeight: 600,
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
            }}
          >
            Kotagiri Sathvik
          </span>
          <span
            style={{
              fontSize: '0.78rem',
              color: 'var(--text-secondary)',
              marginTop: '-2px',
            }}
          >
            Backend & AI Systems Engineer
          </span>
        </a>

        {/* Desktop Links */}
        <nav
          className="desktop-links"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.75rem',
          }}
          aria-label="Main navigation"
        >
          <a
            href="#work"
            onClick={(e) => scrollTo(e, 'work')}
            style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', fontWeight: 500 }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >
            Selected Work
          </a>
          <a
            href="#approach"
            onClick={(e) => scrollTo(e, 'approach')}
            style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', fontWeight: 500 }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >
            How I Work
          </a>
          <a
            href="#architecture"
            onClick={(e) => scrollTo(e, 'architecture')}
            style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', fontWeight: 500 }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >
            Architecture
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, 'contact')}
            style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', fontWeight: 500 }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >
            Contact
          </a>
        </nav>

        {/* Desktop Actions */}
        <div
          className="desktop-actions"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
          }}
        >
          <a
            href="https://github.com/Sathvik1533"
            target="_blank"
            rel="noreferrer noopener"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              fontSize: '0.82rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--text-secondary)',
              padding: '6px 10px',
              borderRadius: 'var(--radius-xs)',
              border: '1px solid var(--border-subtle)',
              backgroundColor: 'var(--bg-surface)',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            GitHub
          </a>

          <a
            href="#work"
            onClick={(e) => scrollTo(e, 'work')}
            className="btn-primary"
            style={{
              padding: '6px 14px',
              fontSize: '0.84rem',
            }}
          >
            Explore Work ↓
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          style={{
            borderTop: '1px solid var(--border-subtle)',
            backgroundColor: 'var(--bg-surface)',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <a
            href="#work"
            onClick={(e) => scrollTo(e, 'work')}
            style={{ fontSize: '1rem', color: 'var(--text-primary)', fontWeight: 500 }}
          >
            Selected Work
          </a>
          <a
            href="#approach"
            onClick={(e) => scrollTo(e, 'approach')}
            style={{ fontSize: '1rem', color: 'var(--text-primary)', fontWeight: 500 }}
          >
            How I Work
          </a>
          <a
            href="#architecture"
            onClick={(e) => scrollTo(e, 'architecture')}
            style={{ fontSize: '1rem', color: 'var(--text-primary)', fontWeight: 500 }}
          >
            Architecture
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, 'contact')}
            style={{ fontSize: '1rem', color: 'var(--text-primary)', fontWeight: 500 }}
          >
            Contact
          </a>
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
            <a
              href="https://github.com/Sathvik1533"
              target="_blank"
              rel="noreferrer noopener"
              className="btn-secondary"
              style={{ flex: 1, padding: '10px' }}
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/kotagirisathvik"
              target="_blank"
              rel="noreferrer noopener"
              className="btn-secondary"
              style={{ flex: 1, padding: '10px' }}
            >
              LinkedIn
            </a>
          </div>
        </div>
      )}

      <style>{`
        .mobile-toggle {
          display: none;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: var(--radius-xs);
          border: 1px solid var(--border-subtle);
          background-color: var(--bg-surface);
          color: var(--text-primary);
        }
        @media (max-width: 768px) {
          .desktop-links { display: none !important; }
          .desktop-actions { display: none !important; }
          .mobile-toggle { display: inline-flex !important; }
        }
      `}</style>
    </header>
  );
};
