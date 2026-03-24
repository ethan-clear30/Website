'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

export default function RedirPage() {
  return (
    <Suspense fallback={<RedirLoading />}>
      <RedirClient />
    </Suspense>
  );
}

function RedirLoading() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#000' }}>
      <img
        src="https://cdn.prod.website-files.com/66ad08d3b8c70b65f11316e6/66ad1005d280661c80cab546_1024.png"
        alt="Clear30 logo"
        style={{ width: 80, height: 80, borderRadius: 16 }}
      />
    </div>
  );
}

function RedirClient() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const destination = searchParams.get('des');
    const user_id = searchParams.get('user_id') || '';
    const type = searchParams.get('type') || '';

    async function logPageVisit(page: string) {
      try {
        await fetch('https://quluipmdicjsolnsopkg.supabase.co/functions/v1/website_log_visit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ page }),
        });
      } catch (error) {
        console.error('Error logging page visit:', error);
      }
    }

    async function logAndRedirect(page: string, url: string) {
      await logPageVisit(page);
      // Small delay to ensure the request is sent
      await new Promise((resolve) => setTimeout(resolve, 100));
      window.location.href = url;
    }

    switch (destination) {
      case 'survey': {
        // Free sub survey through Shopify
        const url =
          'https://shop.clear30.org/products/clear30-free-subscription?usp=pp_url&entry.761519720=' +
          user_id +
          '&entry.124457396=' +
          type;
        window.location.href = url;
        break;
      }

      case 'therapy':
        logAndRedirect(
          '/redirect/therapy',
          'https://hasofferstracking.betterhelp.com/aff_c?offer_id=40&aff_id=4539&aff_sub=redir'
        );
        break;

      case 'therapy_noti':
        logAndRedirect(
          '/redirect/therapy_noti',
          'https://hasofferstracking.betterhelp.com/aff_c?offer_id=40&aff_id=4539&aff_sub=redir_noti'
        );
        break;

      case 'therapy_quiz':
        logAndRedirect(
          '/redirect/therapy_quiz',
          'https://hasofferstracking.betterhelp.com/aff_c?offer_id=40&aff_id=4539&aff_sub=redir_therapy_quiz'
        );
        break;

      case 'journal':
        logAndRedirect(
          '/redirect/journal',
          'https://docs.google.com/document/d/1-5tYWEOhuSGxEQS3Pnqo0nSnoxTSuEWbcmhOoi5OMLU/edit?usp=sharing'
        );
        break;

      case 'craving':
        logAndRedirect(
          '/redirect/craving',
          'https://drive.google.com/drive/folders/1Eq4KOcEWRukFcRsPMrl-DN8duBxCRFYJ?usp=sharing'
        );
        break;

      case 'suppkt':
        logAndRedirect('/redirect/kit', 'https://clear30.org/kit');
        break;

      default:
        console.log('Unknown destination:', destination);
        break;
    }
  }, [searchParams]);

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#000' }}>
      <img
        src="https://cdn.prod.website-files.com/66ad08d3b8c70b65f11316e6/66ad1005d280661c80cab546_1024.png"
        alt="Clear30 logo"
        style={{ width: 80, height: 80, borderRadius: 16 }}
      />
    </div>
  );
}
