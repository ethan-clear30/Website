'use client';

import { useEffect } from 'react';
import './page.css';

const APP_STORE_URL = 'https://apps.apple.com/us/app/clear30-quit-smoking-weed/id6476418203';

const POSTERS = [
  {
    label: 'What to expect',
    src: 'https://cdn.prod.website-files.com/66ad08d4b8c70b65f1131740/66e7a02588c4c2fb1e5c1b46_2-%20What%20to%20expect.jpg',
    filename: 'What to expect',
  },
  {
    label: '30 day calendar',
    src: 'https://cdn.prod.website-files.com/66ad08d4b8c70b65f1131740/66e7a039d8f0ae7325bd4bcc_3%20-%20calendar.jpg',
    filename: '30 day calendar',
  },
  {
    label: 'Withdrawal',
    src: 'https://cdn.prod.website-files.com/66ad08d4b8c70b65f1131740/66e7a05aa55731ee751cf1b5_4%20-%20withdrawal.jpg',
    filename: 'Withdrawal',
  },
  {
    label: 'Use responsibly',
    src: 'https://cdn.prod.website-files.com/66ad08d4b8c70b65f1131740/66e7a07477d7d990d1e78ad2_5-%20use%20responsibly.png',
    filename: 'Use responsibly',
  },
  {
    label: 'Growing beyond weed',
    src: 'https://cdn.prod.website-files.com/66ad08d4b8c70b65f1131740/66e7a0864728c479671c147c_6%20-%20GBW.jpg',
    filename: 'Growing beyond weed',
  },
];

const DownloadIcon = () => (
  <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 16L12 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M9 13L11.913 15.913V15.913C11.961 15.961 12.039 15.961 12.087 15.913V15.913L15 13"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 15L3 16L3 19C3 20.1046 3.89543 21 5 21L19 21C20.1046 21 21 20.1046 21 19L21 16L21 15"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

async function downloadImage(imageSrc: string, nameOfDownload: string = 'my-image.jpeg') {
  console.log('downloading ' + imageSrc);
  const response = await fetch(imageSrc);
  const blobImage = await response.blob();
  const href = URL.createObjectURL(blobImage);
  const anchorElement = document.createElement('a');
  anchorElement.href = href;
  anchorElement.download = nameOfDownload;
  document.body.appendChild(anchorElement);
  anchorElement.click();
  document.body.removeChild(anchorElement);
  window.URL.revokeObjectURL(href);
}

export default function ExternalPage() {
  // Immediately redirect to App Store on mount
  useEffect(() => {
    window.location.replace(APP_STORE_URL);
  }, []);

  return (
    <div className="external-page">
      {/* noscript fallback for redirect */}
      <noscript>
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <meta httpEquiv="refresh" content={`0; url=${APP_STORE_URL}`} />
      </noscript>

      {/* Poster panel (always visible on this page) */}
      <div className="external-poster-panel">
        <div className="external-poster-grid">
          {POSTERS.map((poster) => (
            <div key={poster.label} className="external-poster-item">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={poster.src} alt={poster.label} loading="eager" />
              <p>{poster.label}</p>
              <button
                className="external-download-btn"
                onClick={() => downloadImage(poster.src, poster.filename)}
                aria-label={`Download ${poster.label}`}
              >
                <DownloadIcon />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Main content with screenshots and instructions */}
      <div className="external-main">
        <div className="external-screenshots">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://cdn.prod.website-files.com/66ad08d3b8c70b65f11316e6/673b8bc810144c12b84abd16_home%20tab.png"
            alt="Clear30 home tab"
            loading="lazy"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://cdn.prod.website-files.com/66ad08d3b8c70b65f11316e6/673b8bc878a6eb19a45a7ce0_profile%20tab.png"
            alt="Clear30 profile tab"
            className="smaller"
            loading="lazy"
          />
        </div>

        <div className="external-col">
          <span className="external-instruction-button">
            1) Click on the &quot;<strong>...</strong>&quot; in the top right corner
          </span>
          <span className="external-outline-button">
            2) Then <strong>Open In Browser</strong>
          </span>
        </div>
      </div>
    </div>
  );
}
