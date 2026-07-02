import { MANAGEMENT } from '@/data/team';
import Reveal from '@/components/Reveal';

// Management cards. No real headshots exist yet, so cards render as a clean
// name + title list (no placeholder avatar imagery).
export default function TeamGrid({ members = MANAGEMENT }) {
  return (
    <div className="team-grid team-grid--no-avatar">
      {members.map((m, i) => (
        <Reveal as="article" className="team-card team-card--text" key={m.name} delay={(i % 4) * 60}>
          <div className="team-card-body">
            <h3>{m.name}</h3>
            <p>{m.title}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
