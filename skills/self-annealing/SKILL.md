---
name: self-annealing
description: Use when a script, process, or directive fails — fix the problem, test the fix, then update the directive so the system gets stronger
---

# Self-Annealing

## Overview

Errors are learning opportunities. When something breaks, don't just fix it — make the system stronger by updating the knowledge base. Every failure should make a future failure impossible.

**Core principle:** Fix → Test → Update Directive → System is now stronger.

## The Iron Law

```
NO ERROR RESOLUTION WITHOUT UPDATING THE DIRECTIVE
```

If you fixed a bug but didn't update the relevant directive, you haven't finished.

## When to Use

- A script in `execution/` fails or produces incorrect output
- An API call returns an unexpected error
- A process described in `directives/` has a gap or wrong assumption
- You discover a rate limit, timeout, or edge case not documented
- A workaround is needed that future runs should know about

## The Process

### Step 1: Fix the Problem

- Use **systematic-debugging** skill if needed
- Identify root cause, not just symptom
- Make the smallest fix that resolves the issue

### Step 2: Test the Fix

- Use **verification-before-completion** skill
- Run the fixed script/process with the original inputs
- Confirm it now produces correct output
- Confirm no other tests/processes broke

### Step 3: Update the Directive

Find the relevant directive in `directives/` and update its **Edge Cases & Learnings** section:

```markdown
## Edge Cases & Learnings

- **[Date] Issue:** [What happened] → **Fix:** [What was changed]
```

If no directive exists for this workflow, consider creating one using `directives/_template.md`.

### Step 4: Update the Script (if applicable)

If the execution script itself was the problem:

- Add a code comment explaining the fix
- Add defensive checks to prevent recurrence
- Update the script's docstring if the usage pattern changed

## Examples

**API Rate Limit:**

```markdown
- **2026-02-17 Rate Limit:** API returns 429 after 10 req/s → Added 0.5s delay between requests in execution/scraper.py
```

**Missing Error Handling:**

```markdown
- **2026-02-17 Empty Response:** API occasionally returns empty JSON → Added null check in execution/analyzer.py, skip and log warning
```

**Wrong Assumption:**

```markdown
- **2026-02-17 Auth Flow:** Assumed OAuth token lasts 1 hour, actually 15 minutes → Added token refresh before each batch
```

## Red Flags

**Never:**

- Fix a bug without updating the directive
- Assume "it won't happen again"
- Update only the script without documenting why
- Forget to test after fixing

**Always:**

- Document the date, the issue, and the fix
- Be specific (not "fixed the bug" but "added null check for empty API response")
- Test with the original failing inputs

## The Bottom Line

Every error makes the system smarter. Fix → Test → Document → Stronger. This is how the 3-layer architecture improves itself over time.
