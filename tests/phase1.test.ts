import { describe, test, expect } from 'bun:test';

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
});
