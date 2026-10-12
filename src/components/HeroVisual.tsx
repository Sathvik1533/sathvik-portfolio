import React, { useState } from 'react';

interface Stage {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  examples: string;
  codeRule: string;
  guarantee: string;
}

const STAGES: Stage[] = [
  {
    id: 'input',
    num: '01',
    title: 'Messy Incoming Information',
    subtitle: 'Unstructured & Multi-Source',
    examples: 'Multi-party bank CSVs, scanned receipts, unstructured regulatory PDFs',
    codeRule: 'Pydantic strict typing & schema normalization',
    guarantee: 'Rejects malformed formats and payload corruption at the perimeter.',
  },
  {
    id: 'gate',
    num: '02',
    title: 'Deterministic Code Gates',
    subtitle: 'Authoritative Business Logic',
    examples: 'Python Decimal minor units, vector cosine refusal gates, statutory tax rules',
    codeRule: 'abs(internal - external) <= fee_cents AND similarity >= 0.45',
    guarantee: 'Zero floating-point drift. Refuses ungrounded queries before LLM invocation.',
  },
  {
    id: 'output',
    num: '03',
    title: 'Verifiable Actionable Output',
    subtitle: 'Evidence & Human Review',
    examples: 'Append-only audit histories, page-level citations, amount-at-risk queues',
    codeRule: 'Immutable event log: (case_id, user_id, action, timestamp)',
    guarantee: 'Transparent decision trail. Models advise; code authorizes outcomes.',
  },
];

export const HeroVisual: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<string>('gate');

  const activeStage = STAGES.find((s) => s.id === activeStageId) || STAGES[1];

  return (
    <section style={{ paddingTop: '1rem', paddingBottom: '3.5rem' }} aria-label="System Workflow Overview">
      <div className="portfolio-container">
        <div
          style={{
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-subtle)',
            padding: '1.75rem',
          }}
        >
          {/* Header */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              marginBottom: '1.5rem',
              paddingBottom: '1rem',
              borderBottom: '1px solid var(--border-subtle)',
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--accent-primary)',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  marginBottom: '0.2rem',
                }}
              >
                CORE ARCHITECTURAL PIPELINE
              </div>
              <h2
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                }}
              >
                How messy information becomes verifiable software
              </h2>
            </div>

            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                color: 'var(--text-muted)',
                backgroundColor: 'var(--bg-canvas)',
                padding: '4px 10px',
                borderRadius: 'var(--radius-xs)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              Select any stage to inspect logic
            </div>
          </div>

          {/* 3 Pipeline Stages */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}
          >
            {STAGES.map((stage) => {
              const isActive = stage.id === activeStageId;
              const isCenter = stage.id === 'gate';

              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => setActiveStageId(stage.id)}
                  aria-pressed={isActive}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'left',
                    padding: '1.25rem',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: isActive ? 'var(--accent-subtle)' : 'var(--bg-canvas)',
                    border: `1px solid ${
                      isActive
                        ? 'var(--accent-primary)'
                        : isCenter
                        ? 'var(--border-medium)'
                        : 'var(--border-subtle)'
                    }`,
                    transition: 'all var(--transition-fast)',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.borderColor = 'var(--border-strong)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = isCenter
                        ? 'var(--border-medium)'
                        : 'var(--border-subtle)';
                    }
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: isActive ? 'var(--accent-primary)' : 'var(--text-muted)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    STAGE {stage.num}
                  </div>

                  <h3
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {stage.title}
                  </h3>

                  <div
                    style={{
                      fontSize: '0.82rem',
                      color: 'var(--text-secondary)',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {stage.subtitle}
                  </div>

                  <p
                    style={{
                      fontSize: '0.86rem',
                      lineHeight: 1.5,
                      color: 'var(--text-secondary)',
                      marginTop: 'auto',
                    }}
                  >
                    {stage.examples}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Detail Inspector */}
          <div
            style={{
              backgroundColor: 'var(--bg-canvas)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-sm)',
              padding: '1.25rem 1.5rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.25rem',
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
                CODE CONTRACT / FORMULA
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.84rem',
                  color: 'var(--text-primary)',
                  backgroundColor: 'var(--bg-surface)',
                  padding: '8px 12px',
                  borderRadius: 'var(--radius-xs)',
                  border: '1px solid var(--border-subtle)',
                  wordBreak: 'break-all',
                }}
              >
                <code>{activeStage.codeRule}</code>
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
                ENGINEERING GUARANTEE
              </div>
              <div
                style={{
                  fontSize: '0.88rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.5,
                  padding: '6px 0',
                }}
              >
                {activeStage.guarantee}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
