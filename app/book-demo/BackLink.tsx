'use client';

export default function BackLink() {
  return (
    <a
      href="#"
      className="back-link"
      onClick={(e) => {
        e.preventDefault();
        window.history.back();
      }}
    >
      Back
    </a>
  );
}
