// Netlify Serverless Function: /api/chat
// Grounded portfolio chatbot endpoint for Kotagiri Sathvik

interface ChatRequest {
  message: string;
}

interface ChatResponse {
  response: string;
  suggestions?: string[];
  grounded: boolean;
  status: string;
}

const KNOWLEDGE_RESPONSES: Array<{
  triggers: string[];
  response: string;
  suggestions: string[];
}> = [
  {
    triggers: [
      'who is',
      'about sathvik',
      'background',
      'education',
      'mlrit',
      'hyderabad',
      'tell me about you',
      'tell me about him',
      'who are you',
      'bio',
    ],
    response:
      'Kotagiri Sathvik is a Computer Science student and Backend & AI Systems Engineer based in Hyderabad, India. He specializes in financial reconciliation pipelines, grounded document intelligence with code-level refusal gates, and secure multi-tenant backend APIs. He designs software where high-stakes operations never rely on unverified LLM output.',
    suggestions: ['What is LedgerLens?', 'What is his tech stack?', 'How can I contact him?'],
  },
  {
    triggers: ['ledgerlens', 'reconciliation', 'reconcile', 'floating point', 'decimal', 'razorpay'],
    response:
      'LedgerLens is a 7-stage deterministic financial reconciliation control room built for the Razorpay AI Buildathon. Key engineering highlights:\n• Python Decimal("0.01") integer minor-unit math eliminates IEEE-754 floating-point drift.\n• Deterministic 7-stage rule matcher isolates matches automatically.\n• Discrepancies are routed to an exception queue prioritized by Amount-at-Risk.\n• Advisory RAG copilot assists human reviewers with SOP evidence without money-moving authorization.\nStatus: LOCAL DEMO (calculations verified; PostgreSQL persistence and live web queue unverified).',
    suggestions: ['How does VERITAS work?', 'What is FinSight?', 'What are the 4 principles?'],
  },
  {
    triggers: ['veritas', 'pdf', 'rag', 'refusal', 'cosine', 'hallucination', 'citation', 'threshold'],
    response:
      'VERITAS (pdf-rag-chat) is a grounded PDF question-answering pipeline built to eliminate AI hallucinations:\n• Ingests and chunks PDFs using PyMuPDF and FAISS vector indexing.\n• A code-level cosine similarity refusal gate halts out-of-domain queries when similarity < 0.45.\n• 0 LLM calls are made on refused queries, guaranteeing zero hallucinated answers or fake citations.\n• Every answer is backed by verified page-level source citations.\nStatus: VERIFIED (16/16 pipeline tests passing).',
    suggestions: ['What is LedgerLens?', 'What does FinSight do?', 'What tech stack do you use?'],
  },
  {
    triggers: ['finsight', 'receipt', 'ocr', 'gst', 'itc', 'tax', '17(5)', 'groq'],
    response:
      'FinSight is an invoice extraction and tax compliance system:\n• Extracts invoice data via Groq Vision OCR with strict Pydantic schema validation.\n• Incorporates a deterministic statutory CGST Section 17(5) rules engine that blocks non-deductible items (motor vehicles, personal goods, food & beverages) in code.\n• Strict multi-tenant user_id query filtering prevents cross-account data leakage.\nStatus: LOCAL DEMO (rules verified; frontend browser login and live multi-tenant DB unverified).',
    suggestions: ['What is LedgerSense?', 'What is LedgerLens?', 'Tech stack & skills'],
  },
  {
    triggers: ['ledgersense', 'hackathon', 'finathon', 'pern', '4-way'],
    response:
      'LedgerSense is a 4-way transaction settlement reconciliation prototype built for the Finathon hackathon using the PERN stack (PostgreSQL, Express, React, Node). It ingests gateway, bank, and internal merchant transaction batches to identify settlement lags and fee variances.\nStatus: SYNTHETIC BENCHMARK (evaluated against synthetic payment fixtures; live external bank/gateway connections unverified).',
    suggestions: ['What is LedgerLens?', 'What are the 4 principles?', 'How to contact Sathvik'],
  },
  {
    triggers: [
      'tech stack',
      'skills',
      'technologies',
      'languages',
      'frameworks',
      'tools',
      'python',
      'fastapi',
      'react',
    ],
    response:
      'Sathvik’s core technical stack:\n• Languages: Python 3.11, TypeScript, SQL, JavaScript\n• Backend: FastAPI, Node.js, Express, Pydantic, SQLAlchemy\n• Data & AI: PostgreSQL, Supabase, FAISS vector indexing, PyMuPDF, Groq Vision OCR, LangChain\n• Testing & DevOps: Docker, Bun Test, Pytest, Git, Vite, Vercel, Netlify',
    suggestions: ['Tell me about LedgerLens', 'How does VERITAS work?', 'How to contact Sathvik'],
  },
  {
    triggers: [
      'contact',
      'hire',
      'email',
      'resume',
      'linkedin',
      'github',
      'job',
      'available',
      'role',
      'reach out',
    ],
    response:
      'Sathvik is actively interviewing for full-time Backend and AI Systems Engineering roles!\n• Email: k.sathvik1533@gmail.com\n• GitHub: https://github.com/Sathvik1533\n• LinkedIn: https://linkedin.com/in/kotagirisathvik\n• Location: Hyderabad, India\nFeel free to reach out directly via email or LinkedIn!',
    suggestions: ['What are his core projects?', 'What is his engineering philosophy?'],
  },
  {
    triggers: ['principle', 'how you work', 'philosophy', 'approach', 'rules', 'deterministic'],
    response:
      'Sathvik’s four engineering principles:\n1. Deterministic Code Holds the Keys: Models advise; pure functions authorize state changes.\n2. Zero Ungrounded Assertions: Claims are backed by reproducible tests or explicitly labeled unverified.\n3. Explicit Failure Boundaries: Fail early with clear refusals rather than silent fallbacks.\n4. Truthful Status Disclosures: Only real, verified code is claimed as production-grade.',
    suggestions: ['How does VERITAS refuse bad queries?', 'What is LedgerLens?', 'Contact Sathvik'],
  },
];

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Content-Type': 'application/json',
};

export default async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: CORS_HEADERS, status: 204 });
  }

  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Method not allowed. Use POST.' }),
      { headers: CORS_HEADERS, status: 405 }
    );
  }

  try {
    const body = (await req.json()) as ChatRequest;
    const query = (body.message || '').toLowerCase().trim();

    if (!query) {
      return new Response(
        JSON.stringify({
          response: 'Please ask a question about Sathvik, his projects, tech stack, or engineering philosophy.',
          suggestions: ['What is LedgerLens?', 'How does VERITAS work?', 'What is Sathvik’s tech stack?'],
          grounded: true,
          status: 'ok',
        }),
        { headers: CORS_HEADERS, status: 200 }
      );
    }

    // Match against knowledge triggers
    for (const item of KNOWLEDGE_RESPONSES) {
      if (item.triggers.some((trigger) => query.includes(trigger))) {
        const payload: ChatResponse = {
          response: item.response,
          suggestions: item.suggestions,
          grounded: true,
          status: 'ok',
        };
        return new Response(JSON.stringify(payload), {
          headers: CORS_HEADERS,
          status: 200,
        });
      }
    }

    // Default grounded refusal/fallback
    const fallback: ChatResponse = {
      response:
        "I'm Sathvik's portfolio assistant. I only provide verified facts grounded in his projects (LedgerLens, VERITAS, FinSight, LedgerSense), technical architecture, and background. Could you clarify your question about his work or engineering approach?",
      suggestions: [
        'What is LedgerLens?',
        'How does VERITAS refuse bad queries?',
        'What is Sathvik’s tech stack?',
        'How can I contact Sathvik?',
      ],
      grounded: true,
      status: 'grounded_fallback',
    };

    return new Response(JSON.stringify(fallback), {
      headers: CORS_HEADERS,
      status: 200,
    });
  } catch {
    return new Response(
      JSON.stringify({ error: 'Invalid JSON payload' }),
      { headers: CORS_HEADERS, status: 400 }
    );
  }
};
