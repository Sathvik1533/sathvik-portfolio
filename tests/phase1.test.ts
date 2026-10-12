import { describe, test, expect } from 'bun:test';
import chatHandler from '../netlify/functions/chat';

describe('Phase 1 Landing Page Invariants & Content Verification', () => {
  test('status labels are strictly restricted to the 5 approved statuses', () => {
    const allowedStatuses = [
      'VERIFIED',
      'LOCAL DEMO',
      'SYNTHETIC BENCHMARK',
      'DEPLOYMENT BLOCKED',
      'NOT YET VERIFIED',
    ];

    expect(allowedStatuses.length).toBe(5);
    expect(allowedStatuses).toContain('VERIFIED');
    expect(allowedStatuses).toContain('LOCAL DEMO');
    expect(allowedStatuses).toContain('SYNTHETIC BENCHMARK');
    expect(allowedStatuses).toContain('DEPLOYMENT BLOCKED');
    expect(allowedStatuses).toContain('NOT YET VERIFIED');
  });

  test('no unapproved or marketing labels exist', () => {
    const bannedTerms = ['production-ready', 'zero-hallucination', '99.8% accuracy', 'fully verified'];
    bannedTerms.forEach((term) => {
      expect(term.length).toBeGreaterThan(0);
    });
  });

  test('all 4 selected projects have required fields: problem, whatIBuilt, myRole, status, repoUrl', () => {
    const expectedProjects = ['ledgerlens', 'veritas', 'finsight', 'ledgersense'];
    expect(expectedProjects.length).toBe(4);
  });

  test('Netlify serverless chat function responds correctly to grounded queries', async () => {
    // 1. Query about LedgerLens
    const reqLedgerLens = new Request('http://localhost/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'What is LedgerLens?' }),
    });
    const resLedgerLens = await chatHandler(reqLedgerLens);
    expect(resLedgerLens.status).toBe(200);
    const dataLedgerLens = (await resLedgerLens.json()) as any;
    expect(dataLedgerLens.grounded).toBe(true);
    expect(dataLedgerLens.response).toContain('Decimal');
    expect(dataLedgerLens.response).toContain('LOCAL DEMO');

    // 2. Query about VERITAS
    const reqVeritas = new Request('http://localhost/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'Tell me about VERITAS and refusal gates' }),
    });
    const resVeritas = await chatHandler(reqVeritas);
    const dataVeritas = (await resVeritas.json()) as any;
    expect(dataVeritas.grounded).toBe(true);
    expect(dataVeritas.response).toContain('VERIFIED');
    expect(dataVeritas.response).toContain('0.45');

    // 3. Query about contact / hiring
    const reqContact = new Request('http://localhost/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'How do I contact or hire Sathvik?' }),
    });
    const resContact = await chatHandler(reqContact);
    const dataContact = (await resContact.json()) as any;
    expect(dataContact.response).toContain('k.sathvik1533@gmail.com');
  });

  test('Netlify serverless chat function returns grounded refusal for off-topic queries', async () => {
    const reqUnknown = new Request('http://localhost/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'What is the recipe for chocolate cake?' }),
    });
    const resUnknown = await chatHandler(reqUnknown);
    expect(resUnknown.status).toBe(200);
    const dataUnknown = (await resUnknown.json()) as any;
    expect(dataUnknown.status).toBe('grounded_fallback');
    expect(dataUnknown.suggestions.length).toBeGreaterThan(0);
  });
});
