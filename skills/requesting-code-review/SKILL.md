---
name: requesting-code-review
description: Use when completing tasks, implementing major features, or before merging to verify work meets requirements
---

# Requesting Code Review

Dispatch a code reviewer to catch issues before they cascade.

**Core principle:** Review early, review often.

## When to Request Review

**Mandatory:**

- After each task in subagent-driven development
- After completing a major feature
- Before merge to main

**Optional but valuable:**

- When stuck (fresh perspective)
- Before refactoring (baseline check)
- After fixing complex bug

## How to Request

1. **Prepare context:**
   - What was implemented
   - What it should do (reference plan in `docs/plans/` or directive in `directives/`)
   - What changed (git diff / file list)

2. **Dispatch code-reviewer agent** (see `agents/code-reviewer.md`)

3. **Act on feedback:**
   - Fix Critical issues immediately
   - Fix Important issues before proceeding
   - Note Minor issues for later
   - Push back if reviewer is wrong (with reasoning)

## Integration with Workflows

**Subagent-Driven Development:**

- Two-stage review after EACH task (spec compliance then code quality)

**Executing Plans:**

- Review after each batch (3 tasks)

**Ad-Hoc Development:**

- Review before merge

## Red Flags

**Never:**

- Skip review because "it's simple"
- Ignore Critical issues
- Proceed with unfixed Important issues
