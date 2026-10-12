import React from 'react';

type AllowedStatus = 'VERIFIED' | 'LOCAL DEMO' | 'SYNTHETIC BENCHMARK' | 'DEPLOYMENT BLOCKED' | 'NOT YET VERIFIED';

interface ProjectItem {
  id: string;
  name: string;
  subtitle: string;
  problem: string;
  whatIBuilt: string;
  myRole: string;
  status: AllowedStatus;
  statusNote: string;
  repoUrl: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: 'ledgerlens',
    name: 'LedgerLens',
    subtitle: 'Financial reconciliation and evidence review',
    problem:
      'Payment gateways, bank credits, refunds, and internal merchant orders never match out of the box due to fees, settlement timing lags, and batch grouping.',
    whatIBuilt:
      'A deterministic matching engine using integer minor-unit math (Decimal) to eliminate floating-point drift. Automatically isolates matches, routes discrepancies to an exceptions queue prioritized by Amount-at-Risk, and provides an advisory RAG copilot grounded in SOPs.',
    myRole:
      'Backend & AI Systems Engineer (System architecture, deterministic matching engine, and FastAPI services)',
    status: 'LOCAL DEMO',
    statusNote:
      'Deterministic calculations verified; PostgreSQL persistence and live web queue unverified until end-to-end execution.',
    repoUrl: 'https://github.com/Sathvik1533/LedgerLens',
  },
  {
    id: 'veritas',
    name: 'VERITAS (pdf-rag-chat)',
    subtitle: 'Grounded document answers with citations',
    problem:
      'Generic document search and LLMs frequently hallucinate page citations or guess answers when documents do not contain sufficient evidence.',
    whatIBuilt:
      'A grounded PDF question-answering pipeline featuring PyMuPDF extraction, FAISS vector indexing, and a code-level cosine similarity threshold gate (< 0.45). Unsupported out-of-domain questions are deterministically refused with 0 LLM calls.',
    myRole:
      'AI & Backend Engineer (RAG pipeline, vector refusal gate, and citation extraction)',
    status: 'VERIFIED',
    statusNote:
      '16/16 pipeline tests verified; full HTTP route middleware and browser session deletion unverified until explicitly tested.',
    repoUrl: 'https://github.com/Sathvik1533/pdf-rag-chat',
  },
  {
    id: 'finsight',
    name: 'FinSight',
    subtitle: 'Receipt and GST/ITC classification workflow',
    problem:
      'Businesses struggle to manually verify whether purchases qualify for Input Tax Credit (ITC) under statutory tax rules, risking financial penalties.',
    whatIBuilt:
      'An invoice extraction and validation pipeline using Groq Vision OCR combined with a deterministic CGST Section 17(5) statutory rules engine that blocks non-deductible items (motor vehicles, food, personal goods) in code, with tenant-scoped data queries.',
    myRole:
      'Backend Engineer (OCR extraction pipeline, statutory rules engine, and API design)',
    status: 'LOCAL DEMO',
    statusNote:
      'Backend rules verified; frontend browser login and live multi-tenant database persistence unverified.',
    repoUrl: 'https://github.com/Sathvik1533/FinSight-Backend',
  },
  {
    id: 'ledgersense',
    name: 'LedgerSense',
    subtitle: 'Payment and settlement operations prototype',
    problem:
      'Fintech platforms need multi-way reconciliation across gateway, bank, and internal merchant ledgers to identify delayed settlement and fee variances.',
    whatIBuilt:
      'A hackathon prototype demonstrating 4-way transaction settlement reconciliation built on the PERN stack (PostgreSQL, Express, React, Node) and evaluated against synthetic transaction batches.',
    myRole:
      'Full-Stack Developer (Hackathon prototype, ingestion logic, and review interface)',
    status: 'SYNTHETIC BENCHMARK',
    statusNote:
      'Tested with synthetic payment fixtures; live external bank and gateway provider integrations are unverified.',
    repoUrl: 'https://github.com/Sathvik1533/Finathon-hackathon',
  },
];

export const SelectedWork: React.FC = () => {
  const getStatusClass = (status: AllowedStatus) => {
    switch (status) {
      case 'VERIFIED':
        return 'status-pill verified';
      case 'LOCAL DEMO':
        return 'status-pill local-demo';
      case 'SYNTHETIC BENCHMARK':
        return 'status-pill synthetic-benchmark';
      case 'DEPLOYMENT BLOCKED':
        return 'status-pill deployment-blocked';
      default:
        return 'status-pill unverified';
    }
  };

  return (
    <section id="work" style={{ paddingTop: '5rem', paddingBottom: '5rem' }} aria-label="Selected Work">
      <div className="portfolio-container">
        {/* Header */}
        <div style={{ maxWidth: '720px', marginBottom: '3rem' }}>
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
            SELECTED WORK
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
            Systems Engineered for High-Stakes Data
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.65,
            }}
          >
            Real projects with plain-language problem statements, architectural details, and honest disclosures of verified versus unverified capabilities.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
            gap: '2rem',
          }}
          className="projects-grid"
        >
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-subtle)',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'border-color var(--transition-fast)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--border-medium)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-subtle)')}
            >
              <div>
                {/* Header status row */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.5rem',
                    marginBottom: '1rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)',
                    }}
                  >
                    PROJECT / 0{PROJECTS.indexOf(project) + 1}
                  </span>

                  <span className={getStatusClass(project.status)}>
                    {project.status}
                  </span>
                </div>

                {/* Name & Subtitle */}
                <h3
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '0.25rem',
                    letterSpacing: '-0.015em',
                  }}
                >
                  {project.name}
                </h3>

                <div
                  style={{
                    fontSize: '0.92rem',
                    color: 'var(--text-secondary)',
                    fontWeight: 500,
                    marginBottom: '1.25rem',
                  }}
                >
                  {project.subtitle}
                </div>

                {/* Problem Statement */}
                <div style={{ marginBottom: '1rem' }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      marginBottom: '0.25rem',
                    }}
                  >
                    THE PROBLEM
                  </div>
                  <p
                    style={{
                      fontSize: '0.92rem',
                      lineHeight: 1.55,
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {project.problem}
                  </p>
                </div>

                {/* What I Built */}
                <div style={{ marginBottom: '1rem' }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      marginBottom: '0.25rem',
                    }}
                  >
                    WHAT I BUILT
                  </div>
                  <p
                    style={{
                      fontSize: '0.92rem',
                      lineHeight: 1.55,
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {project.whatIBuilt}
                  </p>
                </div>

                {/* My Role */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      marginBottom: '0.25rem',
                    }}
                  >
                    MY ROLE
                  </div>
                  <div
                    style={{
                      fontSize: '0.88rem',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {project.myRole}
                  </div>
                </div>

                {/* Honest Status Disclosure */}
                <div
                  style={{
                    backgroundColor: 'var(--bg-canvas)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-xs)',
                    padding: '0.75rem 1rem',
                    marginBottom: '1.5rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--text-secondary)',
                  }}
                >
                  <strong style={{ color: 'var(--text-primary)' }}>Status note:</strong>{' '}
                  {project.statusNote}
                </div>
              </div>

              {/* Action Links */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.75rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border-subtle)',
                }}
              >
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn-secondary"
                  style={{
                    fontSize: '0.84rem',
                    padding: '6px 14px',
                  }}
                >
                  View Repository →
                </a>

                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                  }}
                >
                  [Case study in Phase 2]
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
