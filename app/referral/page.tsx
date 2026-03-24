'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import './page.css';

function ReferralContent() {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  const getIntroText = () => {
    if (!code) return '';
    if (code.includes('mlb')) {
      return 'Thank you for your work to help athletes be their best!\nTo try Clear30 for yourself or for a player (iOS only right now):';
    }
    if (code.includes('det')) {
      return 'Hey Detroiters!\nThe Department of Cannabis Affairs pulled through with a free subscription to Clear30 Plus!';
    }
    if (code.includes('mich')) {
      return 'Hey Wolverines,\n here is a free subscription to Clear30 plus!';
    }
    if (code.includes('wade')) {
      return "You've received Clear30 for free through the office of Dr. Patricia Wade.";
    }
    return 'Try out Clear30 for free!';
  };

  const showShareButton = code?.includes('det') ?? false;

  const handleActivate = (e: React.MouseEvent) => {
    e.preventDefault();
    if (code) {
      window.location.href = `clear30://?code=${code}`;
    }
  };

  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault();
    const shareData = {
      title: 'Clear30 Plus Subscription',
      text: 'Get your free Clear30 Plus subscription!',
      url: window.location.href,
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      }
    } catch (err) {
      console.log('Error sharing:', err);
    }
  };

  if (!code) {
    return (
      <div className="referral-page">
        <div className="referral-logo">
          <img
            src="https://cdn.prod.website-files.com/66ad08d3b8c70b65f11316e6/66ad1005d280661c80cab546_1024.png"
            alt="Clear30 logo"
          />
          <span>Clear30</span>
        </div>
        <div className="referral-card inactive-card">
          <h2>Page inactive</h2>
          <p>This page is no longer active.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="referral-page">
      <div className="referral-logo">
        <img
          src="https://cdn.prod.website-files.com/66ad08d3b8c70b65f11316e6/66ad1005d280661c80cab546_1024.png"
          alt="Clear30 logo"
        />
        <span>Clear30</span>
      </div>
      <div className="referral-card">
        <div className="referral-header">
          <h2>Clear30 referral</h2>
          {showShareButton && (
            <button className="share-button" onClick={handleShare}>
              <svg viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.5 6.25C12.9142 6.25 13.25 5.91421 13.25 5.5C13.25 5.08579 12.9142 4.75 12.5 4.75V6.25ZM20.25 12.5C20.25 12.0858 19.9142 11.75 19.5 11.75C19.0858 11.75 18.75 12.0858 18.75 12.5H20.25ZM19.5 6.25C19.9142 6.25 20.25 5.91421 20.25 5.5C20.25 5.08579 19.9142 4.75 19.5 4.75V6.25ZM15.412 4.75C14.9978 4.75 14.662 5.08579 14.662 5.5C14.662 5.91421 14.9978 6.25 15.412 6.25V4.75ZM20.25 5.5C20.25 5.08579 19.9142 4.75 19.5 4.75C19.0858 4.75 18.75 5.08579 18.75 5.5H20.25ZM18.75 9.641C18.75 10.0552 19.0858 10.391 19.5 10.391C19.9142 10.391 20.25 10.0552 20.25 9.641H18.75ZM20.0303 6.03033C20.3232 5.73744 20.3232 5.26256 20.0303 4.96967C19.7374 4.67678 19.2626 4.67678 18.9697 4.96967L20.0303 6.03033ZM11.9697 11.9697C11.6768 12.2626 11.6768 12.7374 11.9697 13.0303C12.2626 13.3232 12.7374 13.3232 13.0303 13.0303L11.9697 11.9697ZM12.5 4.75H9.5V6.25H12.5V4.75ZM9.5 4.75C6.87665 4.75 4.75 6.87665 4.75 9.5H6.25C6.25 7.70507 7.70507 6.25 9.5 6.25V4.75ZM4.75 9.5V15.5H6.25V9.5H4.75ZM4.75 15.5C4.75 18.1234 6.87665 20.25 9.5 20.25V18.75C7.70507 18.75 6.25 17.2949 6.25 15.5H4.75ZM9.5 20.25H15.5V18.75H9.5V20.25ZM15.5 20.25C18.1234 20.25 20.25 18.1234 20.25 15.5H18.75C18.75 17.2949 17.2949 18.75 15.5 18.75V20.25ZM20.25 15.5V12.5H18.75V15.5H20.25ZM19.5 4.75H15.412V6.25H19.5V4.75ZM18.75 5.5V9.641H20.25V5.5H18.75ZM18.9697 4.96967L11.9697 11.9697L13.0303 13.0303L20.0303 6.03033L18.9697 4.96967Z"
                  fill="currentColor"
                />
              </svg>
              Share
            </button>
          )}
        </div>
        <p>{getIntroText()}</p>
        <p>
          <span className="step-label">First</span>, download the Clear30 iOS app.
        </p>
        <a
          href="https://apps.apple.com/us/app/clear30/id6476418203"
          target="_blank"
          rel="noopener noreferrer"
          className="referral-btn"
        >
          Download
        </a>
        <p>
          <span className="step-label">Second</span>, once the app is downloaded, click the
          &quot;Activate&quot; button below.
        </p>
        <button className="referral-btn" onClick={handleActivate}>
          Activate
        </button>
      </div>
    </div>
  );
}

export default function ReferralPage() {
  return (
    <Suspense
      fallback={
        <div className="referral-page">
          <div className="referral-logo">
            <img
              src="https://cdn.prod.website-files.com/66ad08d3b8c70b65f11316e6/66ad1005d280661c80cab546_1024.png"
              alt="Clear30 logo"
            />
            <span>Clear30</span>
          </div>
        </div>
      }
    >
      <ReferralContent />
    </Suspense>
  );
}
