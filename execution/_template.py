"""
Script: [name]
Directive: directives/[related-directive].md
Purpose: [one sentence]

Usage:
    python execution/[name].py [args]
"""

import os
import sys
import logging
from pathlib import Path
from dotenv import load_dotenv

# ─── Setup ──────────────────────────────────────────────
load_dotenv()
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s"
)
log = logging.getLogger(__name__)

# ─── Config ─────────────────────────────────────────────
# API_KEY = os.getenv("API_KEY")
# if not API_KEY:
#     log.error("Missing API_KEY in .env")
#     sys.exit(1)

TMP_DIR = Path(".tmp")
TMP_DIR.mkdir(exist_ok=True)


# ─── Core Logic ─────────────────────────────────────────
def main():
    """Main entry point. Keep this function testable."""
    log.info("Starting...")

    # TODO: Implement core logic here
    # - Load inputs
    # - Process data
    # - Write outputs

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
