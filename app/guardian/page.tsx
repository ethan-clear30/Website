'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import './page.css';

function GuardianContent() {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  const handleActivate = (e: React.MouseEvent) => {
    e.preventDefault();
    if (code) {
      window.location.href = `clear30://guardian?code=${code}`;
    }
  };

  if (!code) {
    return (
      <div className="guardian-page">
        <div className="guardian-logo">
          <img
            src="https://cdn.prod.website-files.com/66ad08d3b8c70b65f11316e6/66ad1005d280661c80cab546_1024.png"
            alt="Clear30 logo"
          />
          <span>Clear30</span>
        </div>
        <div className="guardian-card inactive-card">
          <h2>Page inactive</h2>
          <p>This page is no longer active.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="guardian-page">
      <div className="guardian-logo">
        <img
          src="https://cdn.prod.website-files.com/66ad08d3b8c70b65f11316e6/66ad1005d280661c80cab546_1024.png"
          alt="Clear30 logo"
        />
        <span>Clear30</span>
      </div>
      <div className="guardian-card">
        <h2>Clear30 Beta Program for Ages 16-17</h2>

        <p>
          We are currently testing a <strong>beta version of Clear30</strong>, a cannabis break and
          abstinence program designed specifically for <strong>16-17 year olds</strong>.
        </p>
        <p>
          This beta version is <strong>not publicly available in the App Store</strong>. We are
          sharing private access with parents so they can decide whether to offer the program to
          their child. All features may not be active.
        </p>

        <p>
          <strong>How to Activate Clear30 16-17</strong>
        </p>

        <h3>Step 1: Download the App</h3>
        <p>
          Download the <strong>Clear30 iOS app</strong> using the link below.
        </p>
        <p>
          <strong>Do not open the app after it is installed. See Step 2.</strong>
        </p>
        <a
          href="https://apps.apple.com/us/app/clear30/id6476418203"
          target="_blank"
          rel="noopener noreferrer"
          className="guardian-btn"
        >
          Download
        </a>

        <h3>Step 2: Activate Adolescent Mode</h3>
        <p>
          After the app is downloaded, return to this page and click <strong>Activate</strong> below.
        </p>
        <p>This step:</p>
        <ul>
          <li>Makes the program free</li>
          <li>Activates the 16-17 year old (adolescent) version of Clear30</li>
        </ul>
        <button className="guardian-btn" onClick={handleActivate}>
          Activate
        </button>

        <p>After activation, your child can open the app and begin the program.</p>

        <h1>Note to Parents (Please Read Carefully)</h1>
        <ul>
          <li>
            This is a <strong>beta test</strong>, not a public release. All features may not be
            active.
          </li>
          <li>
            Clear30 is designed to help teens take a{' '}
            <strong>structured break from cannabis</strong>, build awareness, and develop healthier
            habits.
          </li>
          <li>
            The app <strong>must be activated in the correct order</strong> for it to work properly.
          </li>
          <li>
            If the app is opened <strong>before clicking Activate</strong>, it will:
            <ul>
              <li>Not be free</li>
              <li>Not enter adolescent mode</li>
            </ul>
          </li>
          <li>
            If this happens, please{' '}
            <strong>delete the app and repeat the steps from the beginning</strong>.
          </li>
          <li>
            Parents control access to this beta program and can support their child&#39;s
            participation at their own discretion.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default function GuardianPage() {
  return (
    <Suspense
      fallback={
        <div className="guardian-page">
          <div className="guardian-logo">
            <img
              src="https://cdn.prod.website-files.com/66ad08d3b8c70b65f11316e6/66ad1005d280661c80cab546_1024.png"
              alt="Clear30 logo"
            />
            <span>Clear30</span>
          </div>
        </div>
      }
    >
      <GuardianContent />
    </Suspense>
  );
}
