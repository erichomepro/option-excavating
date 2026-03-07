---
name: writing-skills
description: Use when creating new skills, editing existing skills, or verifying skills work before deployment
---

# Writing Skills

## Overview

**Writing skills IS Test-Driven Development applied to process documentation.**

Skills live in `skills/[skill-name]/SKILL.md`.

**Core principle:** If you didn't watch an agent fail without the skill, you don't know if the skill teaches the right thing.

## What is a Skill?

A **skill** is a reference guide for proven techniques, patterns, or tools. Skills help future agent instances find and apply effective approaches.

**Skills are:** Reusable techniques, patterns, tools, reference guides
**Skills are NOT:** Narratives about how you solved a problem once

## SKILL.md Structure

```markdown
---
name: skill-name-with-hyphens
description: Use when [specific triggering conditions]
---

# Skill Name

## Overview
What is this? Core principle in 1-2 sentences.

## When to Use
Bullet list with symptoms and use cases.

## The Process / Core Pattern
Steps, code examples, before/after comparisons.

## Red Flags
What goes wrong + when to stop.

## Common Rationalizations
| Excuse | Reality | table.
```

## Key Rules

- **Frontmatter:** Only `name` and `description` fields. Max 1024 chars total.
- **Description:** Start with "Use when..." — triggering conditions only, NOT workflow summary
- **Naming:** Use hyphens, verb-first, active voice (`writing-skills` not `skill-writing`)
- **Keep concise:** <500 words for most skills
- **One excellent example** beats many mediocre ones
- **Cross-reference** other skills by name: `Use systematic-debugging skill`

## 3-Layer Integration

When creating skills for this template, always consider:

- Does this skill reference `directives/`? Should it?
- Does this skill produce/consume `execution/` scripts?
- Should this skill include a self-annealing step?

## Deployment Checklist

- [ ] Name uses only letters, numbers, hyphens
- [ ] YAML frontmatter with name and description
- [ ] Description starts with "Use when..."
- [ ] Clear overview with core principle
- [ ] Concise process documentation
- [ ] Red flags / rationalization table
- [ ] Tested with real scenario
