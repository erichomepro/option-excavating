import Link from 'next/link';
import { ArrowIcon } from '@/components/icons';

export const metadata = { title: 'Page Not Found' };

export default function NotFound() {
  return (
    <section className="section" style={{ paddingTop: 'calc(var(--nav-h) + 80px)', textAlign: 'center', minHeight: '60vh' }}>
      <div className="container">
        <span className="eyebrow center-block">404</span>
        <h1 className="heading">Page Not <span className="accent">Found</span></h1>
        <p className="lede center-block" style={{ marginTop: 16 }}>
          The page you are looking for has moved or no longer exists.
        </p>
        <Link href="/" className="btn btn-dark" style={{ marginTop: 28 }}>
          Back to Home <ArrowIcon />
        </Link>
      </div>
    </section>
  );
}
