---
name: subagent-driven-development
description: Use when executing implementation plans with independent tasks in the current session
---

# Subagent-Driven Development

Execute plan by dispatching fresh subagent per task, with two-stage review after each: spec compliance review first, then code quality review.

**Core principle:** Fresh subagent per task + two-stage review (spec then quality) = high quality, fast iteration

## When to Use

- Have an implementation plan (from `docs/plans/`)
- Tasks are mostly independent
- Want to stay in this session (vs. parallel session with executing-plans)

## The Process

1. **Read plan** — extract all tasks with full text, note context
2. **Check 3-layer resources** — review related `directives/` and `execution/` scripts
3. **Per task:**
   - Dispatch implementer subagent with full task text + context
   - If subagent asks questions → answer, provide context
   - Subagent implements, tests, commits, self-reviews
   - Dispatch spec reviewer → confirms code matches spec
   - If spec issues → implementer fixes → re-review
   - Dispatch code quality reviewer → confirms quality
   - If quality issues → implementer fixes → re-review
   - Mark task complete
4. **After all tasks** — dispatch final code reviewer for entire implementation
5. **Self-anneal** — update relevant directives with learnings

## Two-Stage Review Order

```
Spec Compliance FIRST → Code Quality SECOND
(Never start quality review before spec is ✅)
```

## Red Flags

**Never:**

- Skip reviews (spec compliance OR code quality)
- Proceed with unfixed issues
- Dispatch multiple implementers in parallel (conflicts)
- Start code quality review before spec compliance is ✅
- Accept "close enough" on spec compliance

**If subagent asks questions:** Answer clearly. Don't rush.

**If reviewer finds issues:** Implementer fixes → reviewer reviews again → repeat until approved.

**If subagent fails task:** Dispatch fix subagent. Don't fix manually (context pollution).

## Integration

- **writing-plans** — Creates the plan this skill executes
- **requesting-code-review** — Review template for reviewer subagents
- **test-driven-development** — Subagents follow TDD for each task
