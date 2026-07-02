'use client';
import { useEffect, useRef, useState } from 'react';

// Lightweight scroll-reveal wrapper using IntersectionObserver.
// Avoids any motion dependency. All motion is GPU-friendly (transform/opacity)
// and disabled via CSS under prefers-reduced-motion: reduce.
//
// variant: 'up' (default) | 'left' | 'right' | 'fade'
//   - 'left'  enters from the left  (used by Services rows)
//   - 'right' enters from the right
export default function Reveal({
  children,
  as: Tag = 'div',
  className = '',
  delay = 0,
  variant = 'up',
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const variantClass = variant && variant !== 'up' ? `reveal-${variant}` : '';

  return (
    <Tag
      ref={ref}
      className={`reveal ${variantClass} ${visible ? 'visible' : ''} ${className}`.replace(/\s+/g, ' ').trim()}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
