"""
Script: example_scraper.py
Directive: directives/example-scrape-leads.md
Purpose: Scrape lead data from a target URL and output a clean CSV.

Usage:
    python execution/example_scraper.py --url https://example.com/directory --pages 5
"""

import os
import sys
import csv
import json
import time
import logging
import argparse
from pathlib import Path
from urllib.parse import urljoin

# Optional: uncomment if you install these
# import requests
# from bs4 import BeautifulSoup
from dotenv import load_dotenv

# ─── Setup ──────────────────────────────────────────────
load_dotenv()
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s"
)
log = logging.getLogger(__name__)

TMP_DIR = Path(".tmp")
TMP_DIR.mkdir(exist_ok=True)

# ─── Config ─────────────────────────────────────────────
REQUEST_DELAY = 0.5  # seconds between requests (rate limit protection)
USER_AGENTS = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
]


# ─── Core Logic ─────────────────────────────────────────
def scrape_page(url: str, page_num: int) -> list[dict]:
    """
    Scrape a single page and return a list of lead dicts.
    Each lead has: name, email, phone, company, source_url
    """
    log.info(f"Scraping page {page_num}: {url}")

    # TODO: Replace with actual scraping logic
    # Example using requests + BeautifulSoup:
    #
    # import requests
    # from bs4 import BeautifulSoup
    #
    # headers = {"User-Agent": random.choice(USER_AGENTS)}
    # resp = requests.get(url, headers=headers, timeout=10)
    # resp.raise_for_status()
    # soup = BeautifulSoup(resp.text, "html.parser")
    #
    # leads = []
    # for card in soup.select(".listing-card"):
    #     leads.append({
    #         "name": card.select_one(".name").text.strip(),
    #         "email": card.select_one(".email").text.strip(),
    #         "phone": card.select_one(".phone").text.strip(),
    #         "company": card.select_one(".company").text.strip(),
    #         "source_url": url,
    #     })
    # return leads

    # Placeholder: return demo data
    return [
        {
            "name": f"Demo Lead {page_num}",
            "email": f"lead{page_num}@example.com",
            "phone": "555-0100",
            "company": "Example Corp",
            "source_url": url,
        }
    ]


def deduplicate(leads: list[dict]) -> list[dict]:
    """Remove duplicate leads by email."""
    seen = set()
    unique = []
    for lead in leads:
        if lead["email"] not in seen:
            seen.add(lead["email"])
            unique.append(lead)
    return unique


def main():
    parser = argparse.ArgumentParser(description="Scrape leads from a website")
    parser.add_argument("--url", required=True, help="Target URL")
    parser.add_argument("--pages", type=int, default=5, help="Number of pages")
    parser.add_argument("--output", default=".tmp/leads.csv", help="Output CSV path")
    args = parser.parse_args()

    all_leads = []

    for page in range(1, args.pages + 1):
        page_url = f"{args.url}?page={page}"
        try:
            leads = scrape_page(page_url, page)
            if not leads:
                log.warning(f"Page {page} returned 0 leads — continuing")
            all_leads.extend(leads)
        except Exception as e:
            log.error(f"Failed on page {page}: {e}")
            continue

        time.sleep(REQUEST_DELAY)

    # Save raw data
    raw_path = TMP_DIR / "leads_raw.json"
    with open(raw_path, "w") as f:
        json.dump(all_leads, f, indent=2)
    log.info(f"Raw data saved: {raw_path} ({len(all_leads)} leads)")

    # Deduplicate and save CSV
    unique_leads = deduplicate(all_leads)
    output_path = Path(args.output)
    output_path.parent.mkdir(parents=True, exist_ok=True)

    with open(output_path, "w", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=["name", "email", "phone", "company", "source_url"])
        writer.writeheader()
        writer.writerows(unique_leads)

    log.info(f"Clean CSV saved: {output_path} ({len(unique_leads)} unique leads)")
    log.info("Done.")


# ─── Entry Point ────────────────────────────────────────
if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        log.info("Interrupted by user.")
    except Exception as e:
        log.error(f"Fatal error: {e}", exc_info=True)
        sys.exit(1)
