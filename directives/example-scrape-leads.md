# Directive: Scrape Leads from Website

> **Status:** Active
> **Last Updated:** 2026-02-17
> **Owner:** Agent

## Goal

Scrape contact information (name, email, phone) from a target business directory website and output a clean CSV.

## Inputs

- Target URL provided by user
- Number of pages to scrape (default: 5)
- Output filename (default: `.tmp/leads.csv`)

## Tools / Scripts

| Script | Purpose |
|--------|---------|
| `execution/example_scraper.py` | Scrapes the target URL and extracts lead data |

## Process

1. User provides target URL and optional page count
2. Validate the URL is accessible (HEAD request)
3. Run `execution/example_scraper.py --url <URL> --pages <N>`
4. Script outputs raw data to `.tmp/leads_raw.json`
5. Script cleans and deduplicates → `.tmp/leads.csv`
6. Report results to user: count of leads, any errors encountered

## Outputs

- `.tmp/leads.csv` — Clean CSV with columns: name, email, phone, company, source_url
- `.tmp/leads_raw.json` — Raw scraped data (for debugging)

## Edge Cases & Learnings

- **2026-02-17 Rate Limiting:** Some directories throttle after 10 req/s → added 0.5s delay between requests
- **2026-02-17 Anti-bot:** If 403 errors occur, switch to stealth headers (User-Agent rotation)
- **Empty results:** If a page returns 0 leads, log warning but continue to next page
