import Link from 'next/link';
import { ArrowIcon } from '@/components/icons';

// Replaces the legacy "Live Help / Text Now" widget with a single clear CTA.
export default function FloatingQuote() {
  return (
    <Link href="/contact" className="float-quote" aria-label="Get a quote">
      Get a Quote
      <ArrowIcon />
    </Link>
  );
}
