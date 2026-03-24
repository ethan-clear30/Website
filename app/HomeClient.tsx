'use client';

import { useCallback, useState } from 'react';
import Link from 'next/link';

/* ── FAQ Accordion ── */

interface FaqItemProps {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

function FaqItem({ question, answer, isOpen, onToggle }: FaqItemProps) {
  return (
    <div className={`faq-item${isOpen ? ' is-open' : ''}`} onClick={onToggle}>
      <div className="faq-item-header">
        <span className="faq-item-icon"></span>
        <span className="faq-item-question">{question}</span>
      </div>
      <div className="faq-item-answer">
        <div className="faq-item-answer-inner">{answer}</div>
      </div>
    </div>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = useCallback((idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  }, []);

  const leftFaqs = [
    {
      question: 'What is Clear30?',
      answer:
        'Clear30 is a mobile app that helps people take a 30-day break from cannabis \u2014 and beyond. Whether you want to take a break, cut back, or quit for good, Clear30 provides a personalized, science-backed program with daily content, guided meditations, AI-powered support, community, and access to a real human peer support coach. Clear30 is the #1 cannabis support app worldwide with over 140,000 downloads and a 4.8-star rating.',
    },
    {
      question: 'Is Clear30 only for people who want to quit weed?',
      answer:
        "No. Clear30 is called Clear30 because the core program is a 30-day break from cannabis. But after your break, you can choose the path that\u2019s right for you \u2014 whether that\u2019s a moderation program, mindful use, or quitting for good. You can also simply track your use to stay intentional. Clear30 meets you where you are.",
    },
    {
      question: 'Is Clear30 available on Android?',
      answer: 'Yes. Clear30 is available on both iOS and Android.',
    },
    {
      question: 'What kind of support does Clear30 offer?',
      answer:
        "Clear30 offers multiple layers of support. There\u2019s an in-app AI that understands your personal journey and provides conversational guidance. There\u2019s also a real human peer support coach who is trained and will text with you directly. And there\u2019s a full in-app community where you can post, respond to others, and create or join groups for accountability.",
    },
    {
      question: 'Is Clear30 evidence-based?',
      answer:
        "Yes. Clear30\u2019s development is funded by the National Institutes of Health (NIH) and the National Institute on Drug Abuse (NIDA). The app was founded by Dr. Fred Muench, who led the world\u2019s largest mobile addiction study, and is advised by A. Thomas McLellan, PhD, former Deputy Director of National Drug Control Policy under President Obama. Clear30 has active research partnerships with Harvard University and the University of Michigan, and peer-reviewed research has been published in leading journals including Psychology of Addictive Behaviors.",
    },
    {
      question: 'Who is Clear30 designed for?',
      answer:
        'Clear30 is designed for everyone. Our users range from 18 years old to 88 years old. While the app is built to be engaging enough for younger users who are accustomed to modern, interactive apps, people of all ages benefit from the program.',
    },
    {
      question: 'Can universities or organizations partner with Clear30?',
      answer: (
        <>
          Yes. Universities and organizations can partner with Clear30 to make the app available to
          their students or members through our voucher program. We work with institutions including
          the University of Michigan, Dartmouth, Northwestern, and the City of Detroit. To learn more
          or book a demo,{' '}
          <Link href="/book-demo">book a demo here</Link>.
        </>
      ),
    },
    {
      question: 'Is user data private?',
      answer:
        'Yes. All user data is anonymized. Institutional partners do not see individual user information \u2014 they receive aggregate, anonymized reporting only.',
    },
  ];

  const rightFaqs = [
    {
      question: 'How does Clear30 work?',
      answer:
        "When you sign up, you\u2019ll go through a personalized onboarding that asks about your cannabis use, your goals, and your relationship with weed. Based on your answers, Clear30 builds a tailored experience \u2014 daily videos, meditations, journal prompts, and AI-driven conversations that adapt to you. You\u2019ll also receive dynamic text messages and notifications based on how you\u2019re progressing. It\u2019s not a one-size-fits-all program \u2014 everything is shaped by what you share during onboarding.",
    },
    {
      question: 'How much does Clear30 cost?',
      answer:
        'Clear30 is a subscription-based app. An annual subscription is $39.99/year, and lifetime access is available for $119.99.',
    },
    {
      question: 'How long is the Clear30 program?',
      answer:
        "The original Clear30 program is 30 days long, and you can repeat it as many times as you\u2019d like. After your initial break, longer-term programs \u2014 including mindful use, moderation, and long-term quitting pathways \u2014 can last up to a year, with new content continually being added.",
    },
    {
      question: 'What results do Clear30 users see?',
      answer:
        'Users who select that they\u2019re committed to taking a break see a 90% average decrease in cannabis use. Across all users and all goals \u2014 whether cutting back, moderating, or quitting \u2014 the average decrease in use is 71%. And 89% of users report improved mental health after their first 30 days.',
    },
    {
      question: 'Is Clear30 a medical or therapeutic service?',
      answer:
        'No. Clear30 is not a medical or therapeutic service. It is a digital wellness and behavior change program designed to support people in making intentional decisions about their cannabis use.',
    },
    {
      question: 'Can parents sign their kids up for Clear30?',
      answer: (
        <>
          Not yet, but we&apos;re working on it. If you&apos;re interested in signing up someone
          under 18, email{' '}
          <a href="mailto:support@clear30.org">support@clear30.org</a> to join our waitlist.
        </>
      ),
    },
    {
      question: 'Can Clear30 be customized for my institution?',
      answer:
        "Yes. Multiple partners already have customized versions of Clear30 that highlight their institution\u2019s specific support pathways and resources. Customizations can include integrating your campus or organizational wellness resources directly into the app experience.",
    },
  ];

  const totalLeft = leftFaqs.length;

  return (
    <section className="faq-section" data-scroll-reveal>
      <h2>Frequently Asked Questions</h2>
      <div className="faq-grid">
        <div className="faq-column">
          {leftFaqs.map((faq, i) => (
            <FaqItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
        <div className="faq-column">
          {rightFaqs.map((faq, i) => (
            <FaqItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === totalLeft + i}
              onToggle={() => toggle(totalLeft + i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Video Thumbnail with Play-to-Embed ── */

interface VideoThumbnailProps {
  videoId: string;
  alt: string;
}

export function VideoThumbnail({ videoId, alt }: VideoThumbnailProps) {
  const [playing, setPlaying] = useState(false);

  const handlePlay = useCallback(() => {
    setPlaying(true);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setPlaying(true);
      }
    },
    []
  );

  if (playing) {
    return (
      <div className="testimonial-video">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div
      className="testimonial-video testimonial-video-link"
      role="button"
      tabIndex={0}
      onClick={handlePlay}
      onKeyDown={handleKeyDown}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
        alt={alt}
      />
      <span className="testimonial-video-play">&#9654;</span>
    </div>
  );
}
