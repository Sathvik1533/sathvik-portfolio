import React from 'react';

interface Principle {
  number: string;
  title: string;
  summary: string;
  detail: string;
}

const PRINCIPLES: Principle[] = [
  {
    number: '01',
    title: 'Deterministic Code Holds the Keys',
    summary: 'AI interprets and proposes; deterministic code authorizes state changes.',
    detail:
      'Language and vision models are valuable for extracting unstructured patterns and summarizing evidence. But calculations, tax rules, and database mutations must remain deterministic. High-stakes financial outcomes should never depend on probabilistic model output.',
  },
  {
    number: '02',
    title: 'Zero Ungrounded Assertions',
    summary: 'If evidence is insufficient, refuse deterministically rather than guess.',
    detail:
      'In document intelligence and RAG pipelines, an unsupported question should trigger a verified refusal before calling the generation model. This prevents hallucinated citations and gives operators predictable boundaries.',
  },
  {
    number: '03',
    title: 'Explicit Failure Boundaries',
    summary: 'Every workflow defines loading, empty, error, and timeout states.',
    detail:
      'Software breaks when edge cases are invisible. I design interfaces and APIs to handle provider downtime, schema violations, empty batches, and invalid inputs gracefully with clear next actions.',
  },
  {
    number: '04',
    title: 'Verifiable Claims Over Slogans',
    summary: 'Code and tests over marketing claims.',
    detail:
      'I differentiate between synthetic benchmarks, local prototypes, and verified test suites. When a feature or environment is unverified, I state it openly. Honest engineering builds credibility.',
  },
];

export const HowIWork: React.FC = () => {
  return (
    <section
      id="approach"
      style={{
        paddingTop: '5rem',
        paddingBottom: '5rem',
        backgroundColor: 'var(--bg-canvas)',
        borderTop: '1px solid var(--border-subtle)',
      }}
      aria-label="How I Work"
    >
      <div className="portfolio-container">
        {/* Header */}
        <div style={{ maxWidth: '720px', marginBottom: '3.5rem' }}>
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
            ENGINEERING PRINCIPLES
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
            How I Approach Systems Architecture
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.65,
            }}
          >
            Four core principles I rely on when designing backend pipelines and AI-assisted products.
          </p>
        </div>

        {/* 2x2 Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {PRINCIPLES.map((principle) => (
            <div
              key={principle.number}
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--accent-primary)',
                    marginBottom: '0.75rem',
                  }}
                >
                  {principle.number}
                </div>

                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '0.5rem',
                    letterSpacing: '-0.015em',
                  }}
                >
                  {principle.title}
                </h3>

                <div
                  style={{
                    fontSize: '0.94rem',
                    color: 'var(--text-primary)',
                    fontWeight: 500,
                    marginBottom: '0.75rem',
                  }}
                >
                  {principle.summary}
                </div>

                <p
                  style={{
                    fontSize: '0.9rem',
                    lineHeight: 1.6,
                    color: 'var(--text-secondary)',
                  }}
                >
                  {principle.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
