import React from 'react';

export const ContactCTA: React.FC = () => {
  return (
    <footer
      id="contact"
      style={{
        paddingTop: '5rem',
        paddingBottom: '3.5rem',
        backgroundColor: 'var(--bg-canvas)',
        borderTop: '1px solid var(--border-subtle)',
      }}
      aria-label="Contact and Resume"
    >
      <div className="portfolio-container">
        <div
          style={{
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-subtle)',
            padding: '2.5rem',
            marginBottom: '3rem',
          }}
        >
          <div style={{ maxWidth: '680px' }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                fontWeight: 500,
                color: 'var(--accent-primary)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                marginBottom: '0.5rem',
              }}
            >
              GET IN TOUCH
            </div>

            <h2
              style={{
                fontSize: 'clamp(1.9rem, 3.5vw, 2.6rem)',
                letterSpacing: '-0.02em',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: '1rem',
              }}
            >
              Looking for an engineer who builds trustworthy systems?
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                marginBottom: '2rem',
              }}
            >
              I’m Kotagiri Sathvik. I focus on financial reconciliation pipelines, document intelligence, backend APIs, and verifiable code. Available for full-time backend and AI engineering roles.
            </p>

            {/* Action buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <a
                href="mailto:k.sathvik1533@gmail.com"
                className="btn-primary"
                style={{ fontSize: '0.92rem', padding: '0.8rem 1.5rem' }}
              >
                Email: k.sathvik1533@gmail.com
              </a>

              <a
                href="https://github.com/Sathvik1533"
                target="_blank"
                rel="noreferrer noopener"
                className="btn-secondary"
                style={{ fontSize: '0.92rem', padding: '0.8rem 1.5rem' }}
              >
                GitHub Profile →
              </a>

              <a
                href="https://linkedin.com/in/kotagirisathvik"
                target="_blank"
                rel="noreferrer noopener"
                className="btn-secondary"
                style={{ fontSize: '0.92rem', padding: '0.8rem 1.5rem' }}
              >
                LinkedIn Profile →
              </a>
            </div>
          </div>
        </div>

        {/* Quiet Bottom Strip */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid var(--border-subtle)',
            fontSize: '0.82rem',
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-mono)',
          }}
        >
          <div>© 2026 Kotagiri Sathvik • Hyderabad, India</div>
          <div>Space Grotesk • Inter • JetBrains Mono</div>
        </div>
      </div>
    </footer>
  );
};
