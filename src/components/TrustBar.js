export default function TrustBar() {
  const items = [
    { icon: <svg viewBox="0 0 24 24"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>, text: 'Municipal Contracts' },
    { icon: <svg viewBox="0 0 24 24"><path d="M7 11v6a1 1 0 001 1h1a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h1a1 1 0 001-1v-6" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M2 12l5.1-4.5a2 2 0 012.6 0L12 9.5l2.3-2a2 2 0 012.6 0L22 12" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>, text: 'First Nations Partner' },
    { icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>, text: 'Oil & Gas Certified' },
    { icon: <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>, text: 'COR Safety Certified' },
    { icon: <svg viewBox="0 0 24 24"><path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 008 20c4 0 5-2 5-2s1 2 5 2a4.49 4.49 0 001.29-.34L20.18 22l1.89-.66C20.1 16.17 17.9 10 9 8" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M12 2v6" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>, text: 'Alberta Environment Compliant' },
    { icon: <svg viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M16 8h4l3 3v5h-2M1 16h1M6 19.5a2.5 2.5 0 005 0M15 19.5a2.5 2.5 0 005 0" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>, text: 'Full Fleet & Equipment' },
    { icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>, text: 'HDPE & PVC Pipe Fusion' },
  ];

  const doubled = [...items, ...items];

  return (
    <div className="trust-bar">
      <div className="trust-track" style={{ fontFamily: 'var(--font-ui)' }}>
        {doubled.map((item, i) => (
          <div key={i} className="trust-item">
            <span className="trust-icon">{item.icon}</span>
            <span className="trust-text">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
