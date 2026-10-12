import React, { useState } from 'react';

interface ArchitectureNode {
  id: string;
  step: string;
  title: string;
  tech: string;
  status: 'VERIFIED' | 'LOCAL DEMO';
  formula: string;
  failureHandled: string;
}

const NODES: ArchitectureNode[] = [
  {
    id: 'ingestion',
    step: '01',
    title: 'Batch Ingestion',
    tech: 'FastAPI • Pydantic',
    status: 'LOCAL DEMO',
    formula: 'Strict schema validation and row idempotency checks',
    failureHandled: 'Rejects malformed CSV structures and duplicate settlement payloads.',
  },
  {
    id: 'decimal',
    step: '02',
    title: 'Decimal Normalization',
    tech: 'Python Decimal("0.01")',
    status: 'VERIFIED',
    formula: 'minor_units = int(round(Decimal(str(raw_amount)) * 100))',
    failureHandled: 'Eliminates IEEE-754 floating-point roundoff errors across multi-party fees.',
  },
  {
    id: 'matcher',
    step: '03',
    title: '7-Stage Matching Engine',
    tech: 'Deterministic Rules',
    status: 'VERIFIED',
    formula: 'abs(internal_cents - gateway_cents) <= fee_tolerance',
    failureHandled: 'Prevents false matches by enforcing strict UTR, settlement date, and fee checks.',
  },
  {
    id: 'exception',
    step: '04',
    title: 'Exception Queue & RAG',
    tech: 'Prioritization • Advisory RAG',
    status: 'LOCAL DEMO',
    formula: 'Prioritize by Amount-at-Risk; advisory SOP retrieval',
    failureHandled: 'RAG advises human reviewers with policy context without money-moving authorization.',
  },
  {
    id: 'audit',
    step: '05',
    title: 'Audit Trail Persistence',
    tech: 'PostgreSQL Event Log',
    status: 'LOCAL DEMO',
    formula: 'INSERT INTO audit_log (case_id, user_id, action, timestamp, diff)',
    failureHandled: 'Guarantees human override decisions and adjustments are permanently traceable.',
  },
];

export const FeaturedArchitecture: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState<string>('matcher');

  const activeNode = NODES.find((n) => n.id === activeNodeId) || NODES[2];

  return (
    <section
      id="architecture"
      style={{
        paddingTop: '5rem',
        paddingBottom: '5rem',
        backgroundColor: 'var(--bg-surface)',
        borderTop: '1px solid var(--border-subtle)',
      }}
      aria-label="Featured Architecture"
    >
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
            FEATURED ARCHITECTURE
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
            LedgerLens: Request Flow & Verification Boundaries
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.65,
            }}
          >
            An interactive breakdown of how multi-party transactions flow through 5 distinct pipeline stages—from unvalidated CSV batches to immutable human audit records.
          </p>
        </div>

        {/* Interactive Canvas Box */}
        <div
          style={{
            backgroundColor: 'var(--bg-canvas)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '1.75rem',
          }}
        >
          {/* Nodes Bar */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '0.85rem',
              marginBottom: '1.5rem',
            }}
          >
            {NODES.map((node) => {
              const isActive = node.id === activeNodeId;

              return (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => setActiveNodeId(node.id)}
                  aria-pressed={isActive}
                  style={{
                    backgroundColor: 'var(--bg-surface)',
                    border: `1px solid ${
                      isActive ? 'var(--accent-primary)' : 'var(--border-subtle)'
                    }`,
                    borderRadius: 'var(--radius-sm)',
                    padding: '1rem',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)',
                    boxShadow: isActive ? '0 2px 8px rgba(29, 78, 216, 0.1)' : 'none',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.borderColor = 'var(--border-medium)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '0.4rem',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        color: isActive ? 'var(--accent-primary)' : 'var(--text-muted)',
                      }}
                    >
                      {node.step}
                    </span>
                    <span
                      className={`status-pill ${
                        node.status === 'VERIFIED' ? 'verified' : 'local-demo'
                      }`}
                      style={{ fontSize: '0.65rem', padding: '1px 5px' }}
                    >
                      {node.status}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: '0.92rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      marginBottom: '0.2rem',
                    }}
                  >
                    {node.title}
                  </h3>

                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      color: 'var(--text-muted)',
                    }}
                  >
                    {node.tech}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Detail Inspector */}
          <div
            style={{
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-sm)',
              padding: '1.5rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  marginBottom: '0.35rem',
                }}
              >
                SELECTED STAGE CONTRACT
              </div>
              <h4
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '0.4rem',
                }}
              >
                {activeNode.step} — {activeNode.title}
              </h4>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.84rem',
                  color: 'var(--text-primary)',
                  backgroundColor: 'var(--bg-canvas)',
                  padding: '8px 12px',
                  borderRadius: 'var(--radius-xs)',
                  border: '1px solid var(--border-subtle)',
                  marginTop: '0.5rem',
                }}
              >
                <code>{activeNode.formula}</code>
              </div>
            </div>

            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  marginBottom: '0.35rem',
                }}
              >
                FAILURE MODE MITIGATION
              </div>
              <p
                style={{
                  fontSize: '0.9rem',
                  lineHeight: 1.55,
                  color: 'var(--text-secondary)',
                  marginTop: '0.2rem',
                }}
              >
                {activeNode.failureHandled}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
