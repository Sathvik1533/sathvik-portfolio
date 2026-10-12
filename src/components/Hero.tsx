import React from 'react';

export const Hero: React.FC = () => {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="top"
      style={{
        paddingTop: '4.5rem',
        paddingBottom: '3rem',
      }}
    >
      <div className="portfolio-container">
        <div style={{ maxWidth: '820px' }}>
          {/* Eyebrow */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              color: 'var(--accent-primary)',
              backgroundColor: 'var(--accent-subtle)',
              border: '1px solid var(--accent-border)',
              padding: '4px 10px',
              borderRadius: 'var(--radius-xs)',
              marginBottom: '1.5rem',
              letterSpacing: '0.03em',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-primary)',
              }}
            />
            KOTAGIRI SATHVIK • BACKEND & AI SYSTEMS
          </div>

          {/* Simple approved headline with zero-clipping typography */}
          <h1
            style={{
              fontSize: 'clamp(2.1rem, 5.2vw, 4rem)',
              lineHeight: 1.14,
              letterSpacing: '-0.025em',
              fontWeight: 600,
              color: 'var(--text-primary)',
              marginBottom: '1.5rem',
              wordBreak: 'break-word',
              overflowWrap: 'break-word',
            }}
          >
            I build reliable software for messy information.
          </h1>

          {/* Simple approved supporting idea */}
          <p
            style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
              lineHeight: 1.6,
              color: 'var(--text-secondary)',
              maxWidth: '720px',
              marginBottom: '2.25rem',
            }}
          >
            I design and build systems that make financial workflows, documents, and complex data easier to verify, understand, and act on.
          </p>

          {/* Clean CTA row */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '2rem',
            }}
          >
            <a
              href="#work"
              onClick={(e) => scrollTo(e, 'work')}
              className="btn-primary"
              style={{
                padding: '0.85rem 1.6rem',
                fontSize: '0.95rem',
              }}
            >
              Explore Selected Work ↓
            </a>

            <a
              href="#contact"
              onClick={(e) => scrollTo(e, 'contact')}
              className="btn-secondary"
              style={{
                padding: '0.85rem 1.6rem',
                fontSize: '0.95rem',
              }}
            >
              View Resume & Contact →
            </a>
          </div>

          {/* Quiet Subtitle Detail */}
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              color: 'var(--text-muted)',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.25rem',
              paddingTop: '1rem',
              borderTop: '1px solid var(--border-subtle)',
            }}
          >
            <span>● Financial Reconciliation</span>
            <span>● Grounded Document Intelligence</span>
            <span>● PostgreSQL & FastAPI</span>
            <span>● Verifiable Boundaries</span>
          </div>
        </div>
      </div>
    </section>
  );
};
