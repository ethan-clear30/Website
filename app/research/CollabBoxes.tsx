'use client';

export default function CollabBoxes() {
  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    const box = e.currentTarget;
    box.classList.toggle('is-open');
  }

  return (
    <div className="research-collab-section">
      <div className="research-collab-box" onClick={handleClick}>
        <div className="research-collab-header">
          <span className="research-collab-title">University of Michigan DC3 collaboration</span>
          <span className="research-collab-arrow"></span>
        </div>
        <div className="research-collab-content">
          <p className="research-collab-body">Clear30 collaborates with the University of Michigan&apos;s Digital Cannabis Clinical Care (DC3) initiative to evaluate and scale evidence-based cannabis support for students and young adults.</p>
        </div>
      </div>
      <div className="research-collab-box" onClick={handleClick}>
        <div className="research-collab-header">
          <span className="research-collab-title">Harvard-affiliated research</span>
          <span className="research-collab-arrow"></span>
        </div>
        <div className="research-collab-content">
          <p className="research-collab-body">Our research partnerships with Harvard-affiliated teams help assess Clear30&apos;s effectiveness as a scalable intervention for cannabis use among college students and young adults.</p>
        </div>
      </div>
    </div>
  );
}
