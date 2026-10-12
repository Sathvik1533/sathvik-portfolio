import React, { useState, useEffect } from 'react';

const TOUR_STEPS = [
  {
    step: '1/3',
    title: 'Core Philosophy',
    body: 'Notice how every system here pairs machine intelligence with strict code gates. Models advise and extract; deterministic code authorizes state changes and arithmetic.',
  },
  {
    step: '2/3',
    title: 'Selected Work',
    body: 'Four projects are showcased with clear problem statements and honest status disclosures (Verified, Local Demo, Synthetic Benchmark). Click any project to inspect what was built.',
  },
  {
    step: '3/3',
    title: 'Verification Boundaries',
    body: 'Every claim is grounded in reproducible tests or marked unverified. Explore the LedgerLens architecture flow to see how decimal arithmetic eliminates floating-point drift.',
  },
];

export const ByteGuide: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  // Keyboard accessibility: 'm' to toggle, 'Escape' to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }
      if (e.key === 'm' || e.key === 'M') {
        setIsOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const currentStep = TOUR_STEPS[currentStepIndex];

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 100,
      }}
      aria-live="polite"
    >
      {/* Expanded Tour Card */}
      {isOpen ? (
        <div
          style={{
            width: '320px',
            maxWidth: 'calc(100vw - 32px)',
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-float)',
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem',
          }}
          role="dialog"
          aria-label="Byte Guide Tour"
        >
          {/* Card Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid var(--border-subtle)',
              paddingBottom: '0.6rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {/* Geometric Byte icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="4" stroke="#1D4ED8" strokeWidth="2" fill="#EFF6FF" />
                <circle cx="9" cy="12" r="2" fill="#1D4ED8" />
                <circle cx="15" cy="12" r="2" fill="#1D4ED8" />
                <line x1="8" y1="2" x2="8" y2="4" stroke="#1D4ED8" strokeWidth="2" strokeLinecap="round" />
                <line x1="16" y1="2" x2="16" y2="4" stroke="#1D4ED8" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                }}
              >
                Byte • Guide
              </span>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close guide"
              style={{
                color: 'var(--text-muted)',
                fontSize: '0.8rem',
                fontFamily: 'var(--font-mono)',
                padding: '2px 6px',
                borderRadius: 'var(--radius-xs)',
              }}
            >
              [Esc] ✕
            </button>
          </div>

          {/* Card Body */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--accent-primary)',
                fontWeight: 600,
                marginBottom: '0.2rem',
              }}
            >
              STEP {currentStep.step} — {currentStep.title}
            </div>
            <p
              style={{
                fontSize: '0.86rem',
                lineHeight: 1.5,
                color: 'var(--text-secondary)',
              }}
            >
              {currentStep.body}
            </p>
          </div>

          {/* Card Footer Controls */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderTop: '1px solid var(--border-subtle)',
              paddingTop: '0.6rem',
            }}
          >
            <button
              type="button"
              disabled={currentStepIndex === 0}
              onClick={() => setCurrentStepIndex((prev) => Math.max(0, prev - 1))}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.76rem',
                color: currentStepIndex === 0 ? 'var(--border-medium)' : 'var(--text-secondary)',
                cursor: currentStepIndex === 0 ? 'not-allowed' : 'pointer',
              }}
            >
              ← Prev
            </button>

            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--text-muted)',
              }}
            >
              Press M to toggle
            </span>

            {currentStepIndex < TOUR_STEPS.length - 1 ? (
              <button
                type="button"
                onClick={() => setCurrentStepIndex((prev) => prev + 1)}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.76rem',
                  fontWeight: 600,
                  color: 'var(--accent-primary)',
                  cursor: 'pointer',
                }}
              >
                Next →
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.76rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  cursor: 'pointer',
                }}
              >
                Done ✓
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Floating Trigger Pill */
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open portfolio guide tour (press M)"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '8px 14px',
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '9999px',
            boxShadow: 'var(--shadow-subtle)',
            cursor: 'pointer',
            transition: 'all var(--transition-fast)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--accent-primary)';
            e.currentTarget.style.boxShadow = 'var(--shadow-float)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--border-subtle)';
            e.currentTarget.style.boxShadow = 'var(--shadow-subtle)';
          }}
        >
          {/* Geometric mark */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="2" y="4" width="20" height="16" rx="4" stroke="#1D4ED8" strokeWidth="2" fill="#EFF6FF" />
            <circle cx="9" cy="12" r="2" fill="#1D4ED8" />
            <circle cx="15" cy="12" r="2" fill="#1D4ED8" />
          </svg>

          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.82rem',
              fontWeight: 500,
              color: 'var(--text-primary)',
            }}
          >
            Byte Guide
          </span>

          <kbd
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              color: 'var(--text-muted)',
              backgroundColor: 'var(--bg-canvas)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '3px',
              padding: '1px 4px',
            }}
          >
            M
          </kbd>
        </button>
      )}
    </div>
  );
};
