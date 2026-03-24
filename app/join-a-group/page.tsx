'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import './page.css';

function isInstagramInAppBrowser(): boolean {
  if (typeof navigator === 'undefined') return false;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ua = navigator.userAgent || (navigator as any).vendor || (window as any).opera;
  return ua.indexOf('Instagram') > -1;
}

function JoinGroupContent() {
  const searchParams = useSearchParams();
  const groupId = searchParams.get('group_id');
  const groupName = searchParams.get('name');

  const introText = groupName
    ? `${groupName} has invited you to join their Clear30 group!`
    : 'Someone has invited you to join their Clear30 group!';

  const handleJoin = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!groupId) return;
    if (isInstagramInAppBrowser()) {
      alert(
        'To open this link, tap the three dots (...) in the top right corner and select "Open in Browser" or "Open in Safari/Chrome"'
      );
      return;
    }
    window.location.href = `clear30://?group_id=${groupId}`;
  };

  if (!groupId) {
    return (
      <div className="join-group-page">
        <div className="join-group-logo">
          <img
            src="https://cdn.prod.website-files.com/66ad08d3b8c70b65f11316e6/66ad1005d280661c80cab546_1024.png"
            alt="Clear30 logo"
          />
          <span>Clear30</span>
        </div>
        <div className="join-group-card inactive-card">
          <h2>Page inactive</h2>
          <p>This page is no longer active.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="join-group-page">
      <div className="join-group-logo">
        <img
          src="https://cdn.prod.website-files.com/66ad08d3b8c70b65f11316e6/66ad1005d280661c80cab546_1024.png"
          alt="Clear30 logo"
        />
        <span>Clear30</span>
      </div>
      <div className="join-group-card">
        <h2>Join a Clear30 group</h2>
        <p>{introText}</p>
        <p>
          <span className="step-label">First</span>, download the Clear30 iOS app.
        </p>
        <a
          href="https://apps.apple.com/us/app/clear30/id6476418203"
          target="_blank"
          rel="noopener noreferrer"
          className="join-group-btn"
        >
          Download
        </a>
        <p>
          <span className="step-label">Second</span>, once you&apos;ve completed the onboarding,
          click the &quot;Join group&quot; button below.
        </p>
        <button className="join-group-btn" onClick={handleJoin}>
          Join group
        </button>
        <p className="group-code-text">Group code: {groupId}</p>
      </div>
    </div>
  );
}

export default function JoinGroupPage() {
  return (
    <Suspense
      fallback={
        <div className="join-group-page">
          <div className="join-group-logo">
            <img
              src="https://cdn.prod.website-files.com/66ad08d3b8c70b65f11316e6/66ad1005d280661c80cab546_1024.png"
              alt="Clear30 logo"
            />
            <span>Clear30</span>
          </div>
        </div>
      }
    >
      <JoinGroupContent />
    </Suspense>
  );
}
