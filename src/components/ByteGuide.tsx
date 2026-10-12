import React, { useState, useEffect, useRef } from 'react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
  suggestions?: string[];
}

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

const INITIAL_SUGGESTIONS = [
  'What is LedgerLens?',
  'How does VERITAS refuse bad queries?',
  'What does FinSight do?',
  'What is Sathvik’s tech stack?',
  'How can I contact Sathvik?',
];

function answerQuery(query: string): { response: string; suggestions?: string[] } {
  const q = query.toLowerCase().trim();

  // 1. Who is Sathvik / About / Background
  if (
    q.includes('who is') ||
    q.includes('about sathvik') ||
    q.includes('background') ||
    q.includes('education') ||
    q.includes('mlrit') ||
    q.includes('hyderabad') ||
    q.includes('tell me about you') ||
    q.includes('tell me about him') ||
    q.includes('who are you')
  ) {
    return {
      response:
        'Kotagiri Sathvik is a Computer Science student and Backend & AI Systems Engineer based in Hyderabad, India. He specializes in financial reconciliation pipelines, grounded document intelligence with code-level refusal gates, and secure multi-tenant backend APIs. He designs software where high-stakes operations never rely on unverified LLM output.',
      suggestions: ['What is LedgerLens?', 'What is his tech stack?', 'How can I contact him?'],
    };
  }

  // 2. LedgerLens
  if (
    q.includes('ledgerlens') ||
    q.includes('reconciliation') ||
    q.includes('reconcile') ||
    q.includes('floating point') ||
    q.includes('decimal') ||
    q.includes('razorpay')
  ) {
    return {
      response:
        'LedgerLens is a 7-stage deterministic financial reconciliation control room built for the Razorpay AI Buildathon. Key engineering highlights:\n• Python Decimal("0.01") integer minor-unit math eliminates IEEE-754 floating-point drift.\n• Deterministic 7-stage rule matcher isolates matches automatically.\n• Discrepancies are routed to an exception queue prioritized by Amount-at-Risk.\n• Advisory RAG copilot assists human reviewers with SOP evidence without money-moving authorization.\nStatus: LOCAL DEMO (calculations verified; PostgreSQL persistence and live web queue unverified).',
      suggestions: ['How does VERITAS work?', 'What is FinSight?', 'View repository link'],
    };
  }

  // 3. VERITAS
  if (
    q.includes('veritas') ||
    q.includes('pdf') ||
    q.includes('rag') ||
    q.includes('refusal') ||
    q.includes('cosine') ||
    q.includes('hallucination') ||
    q.includes('citation') ||
    q.includes('threshold')
  ) {
    return {
      response:
        'VERITAS (pdf-rag-chat) is a grounded PDF question-answering pipeline built to eliminate AI hallucinations:\n• Ingests and chunks PDFs using PyMuPDF and FAISS vector indexing.\n• A code-level cosine similarity refusal gate halts out-of-domain queries when similarity < 0.45.\n• 0 LLM calls are made on refused queries, guaranteeing zero hallucinated answers or fake citations.\n• Every answer is backed by verified page-level source citations.\nStatus: VERIFIED (16/16 pipeline tests passing).',
      suggestions: ['What is LedgerLens?', 'What does FinSight do?', 'What tech stack do you use?'],
    };
  }

  // 4. FinSight
  if (
    q.includes('finsight') ||
    q.includes('receipt') ||
    q.includes('ocr') ||
    q.includes('gst') ||
    q.includes('itc') ||
    q.includes('tax') ||
    q.includes('17(5)') ||
    q.includes('groq')
  ) {
    return {
      response:
        'FinSight is an invoice extraction and tax compliance system:\n• Extracts invoice data via Groq Vision OCR with strict Pydantic schema validation.\n• Incorporates a deterministic statutory CGST Section 17(5) rules engine that blocks non-deductible items (motor vehicles, personal goods, food & beverages) in code.\n• Strict multi-tenant user_id query filtering prevents cross-account data leakage.\nStatus: LOCAL DEMO (rules verified; frontend browser login and live multi-tenant DB unverified).',
      suggestions: ['What is LedgerSense?', 'What is LedgerLens?', 'Tech stack & skills'],
    };
  }

  // 5. LedgerSense
  if (
    q.includes('ledgersense') ||
    q.includes('hackathon') ||
    q.includes('finathon') ||
    q.includes('pern') ||
    q.includes('4-way')
  ) {
    return {
      response:
        'LedgerSense is a 4-way transaction settlement reconciliation prototype built for the Finathon hackathon using the PERN stack (PostgreSQL, Express, React, Node). It ingests gateway, bank, and internal merchant transaction batches to identify settlement lags and fee variances.\nStatus: SYNTHETIC BENCHMARK (evaluated against synthetic payment fixtures; live external bank/gateway connections unverified).',
      suggestions: ['What is LedgerLens?', 'What are the 4 principles?', 'How to contact Sathvik'],
    };
  }

  // 6. Tech stack / Skills
  if (
    q.includes('tech stack') ||
    q.includes('skills') ||
    q.includes('technologies') ||
    q.includes('languages') ||
    q.includes('frameworks') ||
    q.includes('tools') ||
    q.includes('python') ||
    q.includes('fastapi') ||
    q.includes('react')
  ) {
    return {
      response:
        'Sathvik’s core technical stack:\n• Languages: Python 3.11, TypeScript, SQL, JavaScript\n• Backend: FastAPI, Node.js, Express, Pydantic, SQLAlchemy\n• Data & AI: PostgreSQL, Supabase, FAISS vector indexing, PyMuPDF, Groq Vision OCR, LangChain\n• Testing & DevOps: Docker, Bun Test, Pytest, Git, Vite, Vercel, Netlify',
      suggestions: ['Tell me about LedgerLens', 'How does VERITAS work?', 'How to contact Sathvik'],
    };
  }

  // 7. Contact / Hire / Resume
  if (
    q.includes('contact') ||
    q.includes('hire') ||
    q.includes('email') ||
    q.includes('resume') ||
    q.includes('linkedin') ||
    q.includes('github') ||
    q.includes('job') ||
    q.includes('available') ||
    q.includes('role')
  ) {
    return {
      response:
        'Sathvik is actively interviewing for full-time Backend and AI Systems Engineering roles!\n• Email: k.sathvik1533@gmail.com\n• GitHub: https://github.com/Sathvik1533\n• LinkedIn: https://linkedin.com/in/kotagirisathvik\n• Location: Hyderabad, India\nFeel free to reach out directly!',
      suggestions: ['What are his core projects?', 'What is his engineering philosophy?'],
    };
  }

  // 8. Philosophy / How I work
  if (
    q.includes('philosophy') ||
    q.includes('how i work') ||
    q.includes('principles') ||
    q.includes('approach') ||
    q.includes('messy information')
  ) {
    return {
      response:
        'Sathvik’s engineering philosophy: "Models interpret; code authorizes."\n1. Deterministic Code Holds the Keys: LLMs summarize and extract patterns, but code verifies arithmetic, tax laws, and database state.\n2. Zero Ungrounded Assertions: Unsupported queries trigger hard code-level refusal gates.\n3. Explicit Failure Boundaries: Every async path handles loading, empty, validation errors, and timeouts.\n4. Verifiable Claims: All metrics are backed by reproducible test suites.',
      suggestions: ['What is LedgerLens?', 'What is VERITAS?', 'How can I contact him?'],
    };
  }

  // 9. Status & Verification
  if (
    q.includes('status') ||
    q.includes('verified') ||
    q.includes('unverified') ||
    q.includes('claims') ||
    q.includes('evidence')
  ) {
    return {
      response:
        'The portfolio enforces strict claim integrity:\n• VERIFIED: Supported by reproducible test suites (e.g. VERITAS 16/16 pipeline tests).\n• LOCAL DEMO: Core algorithms verified locally with fixtures (e.g. LedgerLens Decimal matching, FinSight Section 17(5) tax rules).\n• SYNTHETIC BENCHMARK: Tested against controlled synthetic payment datasets.\n• UNVERIFIED: Features not yet tested end-to-end in production are openly disclosed.',
      suggestions: ['Tell me about VERITAS', 'Tell me about LedgerLens'],
    };
  }

  // 10. Default / Refusal Fallback
  return {
    response:
      'I am Byte, Sathvik’s portfolio assistant. I can answer questions about Sathvik’s background, projects (LedgerLens, VERITAS, FinSight, LedgerSense), technical architecture, verified test results, and contact details. What would you like to know?',
    suggestions: INITIAL_SUGGESTIONS,
  };
}

export const ByteGuide: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'chat' | 'tour'>('chat');
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: 'Hi! I’m Byte, Sathvik’s portfolio assistant. Ask me anything about Sathvik’s projects, backend architecture, verified code gates, or how to contact him.',
      timestamp: 'Just now',
      suggestions: INITIAL_SUGGESTIONS,
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll chat
  useEffect(() => {
    if (activeTab === 'chat' && isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, activeTab, isOpen]);

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

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: 'Just now',
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');

    // Check serverless backend (/api/chat), with immediate fallback to local grounded knowledge engine
    const resolveAnswer = async () => {
      try {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), 2000);
        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: text }),
          signal: controller.signal,
        });
        clearTimeout(timer);
        if (res.ok) {
          const data = await res.json();
          if (data && data.response) {
            return { response: data.response, suggestions: data.suggestions };
          }
        }
      } catch {
        // Ignore and fallback to client-side engine
      }
      return answerQuery(text);
    };

    resolveAnswer().then(({ response, suggestions }) => {
      const botMsg: ChatMessage = {
        id: `bot-${Date.now() + 1}`,
        sender: 'bot',
        text: response,
        timestamp: 'Just now',
        suggestions,
      };
      setMessages((prev) => [...prev, botMsg]);
    });
  };

  const handleKeyDownInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

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
      {/* Expanded Dialog */}
      {isOpen ? (
        <div
          style={{
            width: '380px',
            maxWidth: 'calc(100vw - 32px)',
            height: '520px',
            maxHeight: 'calc(100vh - 100px)',
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-float)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
          role="dialog"
          aria-label="Byte Portfolio Assistant"
        >
          {/* Header */}
          <div
            style={{
              padding: '0.75rem 1rem',
              borderBottom: '1px solid var(--border-subtle)',
              backgroundColor: 'var(--bg-surface-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="4" stroke="#1D4ED8" strokeWidth="2" fill="#EFF6FF" />
                <circle cx="9" cy="12" r="2" fill="#1D4ED8" />
                <circle cx="15" cy="12" r="2" fill="#1D4ED8" />
                <line x1="8" y1="2" x2="8" y2="4" stroke="#1D4ED8" strokeWidth="2" strokeLinecap="round" />
                <line x1="16" y1="2" x2="16" y2="4" stroke="#1D4ED8" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                  }}
                >
                  Byte • Portfolio AI Assistant
                </span>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  Grounded in Sathvik’s code & repos
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close assistant"
              style={{
                color: 'var(--text-muted)',
                fontSize: '0.8rem',
                fontFamily: 'var(--font-mono)',
                padding: '4px 8px',
                borderRadius: 'var(--radius-xs)',
                cursor: 'pointer',
              }}
            >
              [Esc] ✕
            </button>
          </div>

          {/* Tab Switcher */}
          <div
            style={{
              display: 'flex',
              borderBottom: '1px solid var(--border-subtle)',
              backgroundColor: 'var(--bg-surface)',
            }}
          >
            <button
              type="button"
              onClick={() => setActiveTab('chat')}
              style={{
                flex: 1,
                padding: '8px 12px',
                fontSize: '0.82rem',
                fontFamily: 'var(--font-body)',
                fontWeight: activeTab === 'chat' ? 600 : 500,
                color: activeTab === 'chat' ? 'var(--accent-primary)' : 'var(--text-secondary)',
                borderBottom: `2px solid ${activeTab === 'chat' ? 'var(--accent-primary)' : 'transparent'}`,
                backgroundColor: 'transparent',
                cursor: 'pointer',
              }}
            >
              💬 Ask About Sathvik
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('tour')}
              style={{
                flex: 1,
                padding: '8px 12px',
                fontSize: '0.82rem',
                fontFamily: 'var(--font-body)',
                fontWeight: activeTab === 'tour' ? 600 : 500,
                color: activeTab === 'tour' ? 'var(--accent-primary)' : 'var(--text-secondary)',
                borderBottom: `2px solid ${activeTab === 'tour' ? 'var(--accent-primary)' : 'transparent'}`,
                backgroundColor: 'transparent',
                cursor: 'pointer',
              }}
            >
              🧭 3-Step Tour
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'chat' ? (
            /* Interactive Chat View */
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
              {/* Message History */}
              <div
                style={{
                  flex: 1,
                  overflowY: 'auto',
                  padding: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.85rem',
                  backgroundColor: 'var(--bg-canvas)',
                }}
              >
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                    }}
                  >
                    <div
                      style={{
                        maxWidth: '88%',
                        padding: '0.65rem 0.85rem',
                        borderRadius:
                          msg.sender === 'user'
                            ? '10px 10px 2px 10px'
                            : '10px 10px 10px 2px',
                        backgroundColor:
                          msg.sender === 'user' ? 'var(--accent-primary)' : 'var(--bg-surface)',
                        color: msg.sender === 'user' ? '#FFFFFF' : 'var(--text-primary)',
                        border:
                          msg.sender === 'user' ? 'none' : '1px solid var(--border-subtle)',
                        fontSize: '0.84rem',
                        lineHeight: 1.5,
                        whiteSpace: 'pre-line',
                        boxShadow: 'var(--shadow-subtle)',
                      }}
                    >
                      {msg.text}
                    </div>

                    {/* Suggestions Chips underneath bot message */}
                    {msg.sender === 'bot' && msg.suggestions && (
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '0.35rem',
                          marginTop: '0.5rem',
                          maxWidth: '92%',
                        }}
                      >
                        {msg.suggestions.map((suggestion, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => handleSendMessage(suggestion)}
                            style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.72rem',
                              color: 'var(--accent-primary)',
                              backgroundColor: 'var(--bg-surface)',
                              border: '1px solid var(--border-subtle)',
                              padding: '3px 8px',
                              borderRadius: '9999px',
                              cursor: 'pointer',
                              textAlign: 'left',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.borderColor = 'var(--accent-primary)';
                              e.currentTarget.style.backgroundColor = 'var(--accent-subtle)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.borderColor = 'var(--border-subtle)';
                              e.currentTarget.style.backgroundColor = 'var(--bg-surface)';
                            }}
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Chat Input */}
              <div
                style={{
                  padding: '0.65rem 0.85rem',
                  borderTop: '1px solid var(--border-subtle)',
                  backgroundColor: 'var(--bg-surface)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDownInput}
                  placeholder="Ask about projects, skills, or contact..."
                  aria-label="Ask about Sathvik"
                  style={{
                    flex: 1,
                    padding: '8px 12px',
                    fontSize: '0.84rem',
                    fontFamily: 'var(--font-body)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--bg-canvas)',
                    color: 'var(--text-primary)',
                    outline: 'none',
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent-primary)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border-subtle)')}
                />
                <button
                  type="button"
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim()}
                  style={{
                    padding: '8px 14px',
                    fontSize: '0.82rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 600,
                    backgroundColor: inputValue.trim() ? 'var(--accent-primary)' : 'var(--bg-surface-subtle)',
                    color: inputValue.trim() ? '#FFFFFF' : 'var(--text-muted)',
                    borderRadius: 'var(--radius-sm)',
                    cursor: inputValue.trim() ? 'pointer' : 'not-allowed',
                    border: 'none',
                  }}
                >
                  Send
                </button>
              </div>
            </div>
          ) : (
            /* 3-Step Guided Tour View */
            <div
              style={{
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flex: 1,
                backgroundColor: 'var(--bg-canvas)',
              }}
            >
              <div
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '1.25rem',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.74rem',
                    color: 'var(--accent-primary)',
                    fontWeight: 600,
                    marginBottom: '0.35rem',
                  }}
                >
                  TOUR STEP {currentStep.step} — {currentStep.title}
                </div>
                <h4
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '0.5rem',
                  }}
                >
                  {currentStep.title}
                </h4>
                <p
                  style={{
                    fontSize: '0.88rem',
                    lineHeight: 1.55,
                    color: 'var(--text-secondary)',
                  }}
                >
                  {currentStep.body}
                </p>
              </div>

              {/* Tour Controls */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border-subtle)',
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
                    onClick={() => setActiveTab('chat')}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.76rem',
                      fontWeight: 600,
                      color: 'var(--accent-primary)',
                      cursor: 'pointer',
                    }}
                  >
                    Start Chatting →
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Floating Trigger Pill */
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open portfolio chatbot assistant (press M)"
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
            Ask Byte AI
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
