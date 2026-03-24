'use client';

export default function ShareButton() {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          text: '',
          url: window.location.href,
        });
      } catch (error) {
        console.log('Sharing failed', error);
      }
    } else {
      alert("Sorry, your browser doesn't support sharing. You can copy the URL manually.");
    }
  };

  return (
    <button onClick={handleShare} className="share-button">
      Share this page
    </button>
  );
}
