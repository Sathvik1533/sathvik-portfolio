import React from 'react';

interface StripItem {
  number: string;
  label: string;
  detail: string;
}

const STRIP_ITEMS: StripItem[] = [
  {
    number: '01',
    label: 'Financial Workflows',
    detail: 'Multi-party reconciliation, exact decimal calculations, and human review queues.',
  },
  {
    number: '02',
    label: 'Document Intelligence',
    detail: 'Grounded PDF question-answering with verifiable citations and refusal gates.',
  },
  {
    number: '03',
    label: 'Backend & APIs',
    detail: 'FastAPI and Node services, schema validation, and multi-tenant PostgreSQL data models.',
  },
  {
    number: '04',
    label: 'Testing & Security',
    detail: 'Pipeline-level test assertions, session boundaries, and transparent status disclosure.',
  },
];

export const ProofStrip: React.FC = () => {
  return (
    <section
      style={{
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
        backgroundColor: 'var(--bg-surface)',
        paddingTop: '2.5rem',
        paddingBottom: '2.5rem',
      }}
      aria-label="Engineering Focus Areas"
    >
      <div className="portfolio-container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {STRIP_ITEMS.map((item) => (
            <div key={item.number} style={{ paddingRight: '0.5rem' }}>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: 'var(--accent-primary)',
                  marginBottom: '0.5rem',
                }}
              >
                {item.number}
              </div>
              <h3
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '0.4rem',
                }}
              >
                {item.label}
              </h3>
              <p
                style={{
                  fontSize: '0.88rem',
                  lineHeight: 1.55,
                  color: 'var(--text-secondary)',
                }}
              >
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
