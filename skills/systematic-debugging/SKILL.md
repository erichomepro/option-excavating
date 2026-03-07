---
name: systematic-debugging
description: Use when encountering any bug, test failure, or unexpected behavior, before proposing fixes
---

# Systematic Debugging

## Overview

Random fixes waste time and create new bugs. Quick patches mask underlying issues.

**Core principle:** ALWAYS find root cause before attempting fixes. Symptom fixes are failure.

**Violating the letter of this process is violating the spirit of debugging.**

## The Iron Law

```
NO FIXES WITHOUT ROOT CAUSE INVESTIGATION FIRST
```

If you haven't completed Phase 1, you cannot propose fixes.

## When to Use

Use for ANY technical issue: test failures, bugs, unexpected behavior, performance problems, build failures, integration issues, **script failures in `execution/`**.

## The Four Phases

### Phase 1: Root Cause Investigation

**BEFORE attempting ANY fix:**

1. **Read Error Messages Carefully** — Stack traces, line numbers, error codes
2. **Reproduce Consistently** — Can you trigger it reliably?
3. **Check Recent Changes** — git diff, recent commits, config changes
4. **Check Directives** — Has this issue been documented in `directives/` Edge Cases section?
5. **Gather Evidence in Multi-Component Systems** — Log at each component boundary
6. **Trace Data Flow** — Where does the bad value originate? Keep tracing up.

### Phase 2: Pattern Analysis

1. **Find Working Examples** — Similar working code in same codebase
2. **Compare Against References** — Read reference implementation COMPLETELY
3. **Identify Differences** — Every difference, however small
4. **Understand Dependencies** — Other components, settings, config, environment

### Phase 3: Hypothesis and Testing

1. **Form Single Hypothesis** — "I think X is the root cause because Y"
2. **Test Minimally** — SMALLEST possible change, one variable at a time
3. **Verify** — Did it work? Yes → Phase 4. No → NEW hypothesis. Don't stack fixes.

### Phase 4: Implementation

1. **Create Failing Test Case** — Simplest possible reproduction
2. **Implement Single Fix** — ONE change, root cause only, no "while I'm here"
3. **Verify Fix** — Test passes? No other tests broken?
4. **If Fix Doesn't Work** — Count attempts. If ≥ 3: STOP and question the architecture
5. **Self-Anneal** — Update the relevant directive in `directives/` with what you learned

## Red Flags — STOP and Follow Process

If you catch yourself thinking:

- "Quick fix for now, investigate later"
- "Just try changing X and see if it works"
- "I don't fully understand but this might work"
- "One more fix attempt" (when already tried 2+)

**ALL of these mean: STOP. Return to Phase 1.**

## Quick Reference

| Phase | Key Activities | Success Criteria |
|-------|---------------|------------------|
| **1. Root Cause** | Read errors, reproduce, check changes | Understand WHAT and WHY |
| **2. Pattern** | Find working examples, compare | Identify differences |
| **3. Hypothesis** | Form theory, test minimally | Confirmed or new hypothesis |
| **4. Implementation** | Create test, fix, verify, self-anneal | Bug resolved, directive updated |

## Common Rationalizations

| Excuse | Reality |
|--------|---------|
| "Issue is simple" | Simple issues have root causes too |
| "Emergency, no time" | Systematic is FASTER than thrashing |
| "Just try this first" | First fix sets the pattern. Do it right. |
| "One more fix attempt" (after 2+) | 3+ failures = architectural problem |
