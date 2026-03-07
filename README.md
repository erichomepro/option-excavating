# Option Excavating

A disciplined AI agent project using the **3-Layer System** (Directives → Orchestration → Execution) with the **Superpowers Skills Framework** for reliable, self-improving operation.

## Quick Start

1. **Edit `.env`** with your API keys
2. **Read `AGENTS.md`** — the master instruction file
3. **Create a directive** in `directives/` using `_template.md`
4. **Create a script** in `execution/` using `_template.py`

## Architecture

```
┌─────────────────────────────────────────────┐
│  SKILLS (Process Layer)                     │
│  How to think, plan, debug, verify          │
│  brainstorming → writing-plans → TDD →      │
│  executing → reviewing → verifying          │
├─────────────────────────────────────────────┤
│  DIRECTIVES (Layer 1)     │ EXECUTION (L3)  │
│  What to do               │ Doing the work  │
│  SOPs in Markdown         │ Python scripts  │
│  directives/*.md          │ execution/*.py  │
├───────────────────────────┴─────────────────┤
│  ORCHESTRATION (Layer 2)                    │
│  The AI agent — intelligent routing         │
│  Reads directives, calls scripts,           │
│  handles errors, updates learnings          │
└─────────────────────────────────────────────┘
```

## Directory Structure

| Directory | Purpose |
|-----------|---------|
| `directives/` | SOPs — what to do, step by step |
| `execution/` | Python scripts — deterministic tools |
| `skills/` | Process skills — how to think and work |
| `agents/` | Agent role definitions (reviewer, implementer) |
| `docs/plans/` | Design docs and implementation plans |
| `.tmp/` | Temporary/intermediate files (gitignored) |
| `.agent/workflows/` | Slash-command workflows |

## Core Principles

1. **Check for tools first** — don't reinvent, reuse
2. **Self-anneal** — errors improve the system (fix → test → update directive)
3. **Evidence before claims** — run verification, then claim success
4. **Root cause before fixes** — investigate, don't guess
5. **Test first** — RED → GREEN → REFACTOR, always

## License

MIT
