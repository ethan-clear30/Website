import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './page.css';

export const metadata = {
  title: 'Terms and Conditions',
  description:
    'Read the Clear30 Terms of Use governing your use of the Clear30 mobile application, AI tools, website features, and SMS messaging.',
  alternates: { canonical: 'https://clear30.org/terms-and-conditions' },
  openGraph: {
    title: 'Clear30 - Terms and Conditions',
    description:
      'Read the Clear30 Terms of Use governing your use of the Clear30 mobile application, AI tools, website features, and SMS messaging.',
    url: 'https://clear30.org/terms-and-conditions',
    images: [{ url: '/images/og-image.png' }],
  },
  twitter: {
    card: 'summary_large_image' as const,
    title: 'Clear30 - Terms and Conditions',
    description:
      'Read the Clear30 Terms of Use governing your use of the Clear30 mobile application, AI tools, website features, and SMS messaging.',
    images: ['/images/og-image.png'],
  },
};

export default function TermsAndConditionsPage() {
  return (
    <div className="legal-page">
      <Header />

      <section className="legal-hero">
        <div className="legal-hero-content">
          <h1>Terms of Use</h1>
        </div>
      </section>

      <div className="legal-content">
        <div className="rich-text">
          <p>Clear30 Terms of Use</p>
          <p>Effective Date: November 2025</p>

          <p>
            Welcome to Clear30. These Terms of Use (&ldquo;Terms&rdquo;) are a binding agreement
            between you and Clear30 LLC / Mobile Health Interventions (&ldquo;Clear30,&rdquo;
            &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). These Terms apply to your
            use of the Clear30 mobile application, AI tools, website features, and optional SMS
            messaging (collectively, the &ldquo;Services&rdquo;).
          </p>

          <p>
            By installing, accessing, or using the Services, you acknowledge that you have read and
            agree to these Terms. If you do not agree, you may not use the Services.
          </p>

          <p>1. What Clear30 Is (and Is Not)</p>

          <p>1.1 What We Provide</p>

          <p>
            Clear30 is a digital self-guided program intended for people who want to pause, reduce,
            or stop cannabis use. The Services may include:
          </p>

          <ul>
            <li>A mobile application (iOS/Android)</li>
            <li>AI-driven tools (e.g., &ldquo;Clairebot&rdquo;)</li>
            <li>Daily guidance, reflections, and behavioral prompts</li>
            <li>Optional SMS reminders</li>
          </ul>

          <p>
            Clear30 is intended to support wellness, habit change, and personal insight.
          </p>

          <p>1.2 What We Do Not Provide &mdash; Medical Disclaimer</p>

          <p>Clear30 is not:</p>

          <ul>
            <li>a healthcare provider</li>
            <li>a clinic</li>
            <li>therapy</li>
            <li>medical advice</li>
            <li>a substitute for professional care</li>
          </ul>

          <p>All content&mdash;including AI output&mdash;is informational only.</p>

          <p>
            Always consult a licensed professional for medical, psychological, or substance-related
            concerns.
            <br />
            Clear30 is not responsible for decisions you make based on information from the Services.
          </p>

          <p>2. Eligibility and Your Responsibilities</p>

          <p>2.1 Age Requirements</p>

          <p>You must be 16 or older to use Clear30.</p>

          <ul>
            <li>
              Ages 16&ndash;17:
              <br />
              You may use Clear30, but external sharing of your information is limited to anonymous,
              aggregated research data.
            </li>
            <li>
              Ages 18+:
              <br />
              You must accept these Terms and our Privacy Policy to use the Services.
            </li>
          </ul>

          <p>
            If we learn that someone under 16 is using Clear30, we will delete the account and
            associated data.
          </p>

          <p>2.2 Compliance</p>

          <p>
            You must use the Services only in ways that comply with local, state, and federal laws,
            including laws related to cannabis.
          </p>

          <p>2.3 Account Security</p>

          <p>You are responsible for:</p>

          <ul>
            <li>maintaining the confidentiality of your login credentials</li>
            <li>restricting access to your device</li>
            <li>all activity that occurs under your account</li>
          </ul>

          <p>Notify us immediately if you suspect unauthorized access.</p>

          <p>3. Privacy and Data Handling</p>

          <p>3.1 Incorporation of Privacy Policy</p>

          <p>
            Our Privacy Policy explains how we collect, use, and share data. It is part of these
            Terms.
          </p>

          <p>3.2 Core Safeguards</p>

          <p>We treat substance-use&ndash;related information as sensitive.</p>

          <p>
            Clear30 never shares identifiable or pseudonymized sensitive information externally,
            including:
          </p>

          <ul>
            <li>cannabis-use assessments</li>
            <li>cravings</li>
            <li>journal entries</li>
            <li>mental-health reflections</li>
            <li>check-ins or internal insights</li>
          </ul>

          <p>
            For 16&ndash;17-year-olds, no external sharing of personal data occurs beyond strictly
            anonymous, aggregated findings used for legitimate research or program evaluation.
          </p>

          <p>3.3 Analytics and Marketing</p>

          <p>
            For consenting adults (18+), we share minimal, pseudonymized technical data&mdash;not
            sensitive information&mdash;with trusted analytics and marketing partners. These partners
            use the data to help us measure performance and improve engagement.
          </p>

          <p>
            Partners maintain their own internal systems. Once minimal technical data is transmitted,
            Clear30 does not control those systems.
          </p>

          <p>3.4 SMS Data</p>

          <p>
            If you enroll in optional SMS programs, you consent to receive messages. These may
            reference cannabis or behavior-change topics.
            <br />
            Data collected via SMS is treated using the same standards outlined in our Privacy
            Policy.
          </p>

          <p>3.5 Mandatory Reporting</p>

          <p>
            If required by law (e.g., imminent risk of harm, suspected abuse of a minor), we may
            disclose information to appropriate authorities.
          </p>

          <p>4. Prohibited Conduct and Account Termination</p>

          <p>4.1 Prohibited Uses</p>

          <p>You agree not to:</p>

          <ul>
            <li>use the Services for unlawful purposes</li>
            <li>
              attempt to disrupt, test, or reverse-engineer the platform or AI systems
            </li>
            <li>misuse the Services to harass or harm others</li>
            <li>violate intellectual property or privacy rights</li>
            <li>submit false information or impersonate others</li>
            <li>access the Services in unauthorized ways</li>
          </ul>

          <p>4.2 Suspension or Termination</p>

          <p>We may suspend or terminate your access if:</p>

          <ul>
            <li>you violate these Terms,</li>
            <li>misuse the Services, or</li>
            <li>your use poses a risk to yourself, others, or platform integrity.</li>
          </ul>

          <p>
            We may also remove content or take any action needed to maintain a safe and reliable
            environment.
          </p>

          <p>5. Intellectual Property</p>

          <p>
            All content&mdash;including text, graphics, features, software, AI models, logos, and
            design&mdash;belongs to Clear30 LLC / Mobile Health Interventions and is protected by
            intellectual property laws.
          </p>

          <p>
            You receive a limited, personal, revocable, non-exclusive, non-transferable license to
            use the Services as intended.
          </p>

          <p>You may not:</p>

          <ul>
            <li>copy</li>
            <li>modify</li>
            <li>create derivative works</li>
            <li>distribute</li>
            <li>sell</li>
            <li>reverse engineer</li>
          </ul>

          <p>any part of the Services without our explicit written permission.</p>

          <p>6. Disclaimers and Limitation of Liability</p>

          <p>6.1 Services Provided &ldquo;As Is&rdquo;</p>

          <p>
            The Services are offered as is and as available without warranties of any kind.
            <br />
            We do not guarantee accuracy, availability, results, or uninterrupted service.
          </p>

          <p>6.2 Limitation of Liability</p>

          <p>
            To the fullest extent allowed by law, Clear30 and its affiliates, officers, employees,
            and agents are not liable for:
          </p>

          <ul>
            <li>indirect, incidental, consequential, or special damages</li>
            <li>emotional or psychological distress</li>
            <li>loss of data, profits, revenue, or goodwill</li>
            <li>unauthorized access to your data</li>
            <li>
              decisions or actions you take based on information from the Services
            </li>
          </ul>

          <p>
            Some regions restrict limitations, so parts of this may not apply to you.
          </p>

          <p>6.3 Third-Party Platforms</p>

          <p>Apple, Google, and mobile carriers:</p>

          <ul>
            <li>are not parties to these Terms</li>
            <li>are not responsible for the Services</li>
            <li>are not liable for message delays or failures</li>
          </ul>

          <p>Your use of their platforms is subject to their respective terms.</p>

          <p>7. Business Transfers, Mergers &amp; Strategic Partnerships</p>

          <p>
            If Clear30 is involved in an acquisition, merger, investment, reorganization, or
            strategic partnership, we may share user information&mdash;including identifiable
            information&mdash;with the acquiring or partner organization, but only when reasonably
            necessary for:
          </p>

          <ul>
            <li>evaluating a potential transaction (due diligence), or</li>
            <li>
              operating or integrating the combined services after the transaction closes.
            </li>
          </ul>

          <p>
            The receiving organization must follow strict confidentiality and data-protection
            obligations.
          </p>

          <p>
            Sensitive program information (assessments, cravings, cannabis-use details, journal
            entries, mental-health reflections) will be:
          </p>

          <ul>
            <li>shared only in anonymized and aggregated form, and</li>
            <li>
              used solely for operational, research, or product-improvement purposes&mdash;not for
              advertising or unrelated activities.
            </li>
          </ul>

          <p>
            If we have your information at the time of an acquisition or partnership, Clear30 will
            notify you and provide legally required rights, choices, or instructions.
          </p>

          <p>8. Changes to These Terms</p>

          <p>
            We may update these Terms from time to time.
            <br />
            Material changes will be communicated via the App or other reasonable methods.
          </p>

          <p>
            Continued use of the Services after changes become effective constitutes acceptance.
          </p>

          <p>9. SMS Messaging</p>

          <p>9.1 Consent</p>

          <p>
            By opting in to SMS messages, you agree to receive automated and manual texts.
          </p>

          <p>9.2 Content</p>

          <p>
            Messages may include tips, reminders, or references to substance-use support.
          </p>

          <p>9.3 Opt-Out</p>

          <p>Reply STOP to end SMS messages. Reply HELP for assistance.</p>

          <p>9.4 Rates and Liability</p>

          <p>
            Message and data rates may apply. Carriers, Apple, and Google are not responsible for
            delayed or undelivered messages.
          </p>

          <p>10. Governing Law and Venue</p>

          <p>
            These Terms are governed by the laws of the State of New York, without regard to
            conflicts of law.
            <br />
            Any dispute must be brought exclusively in state or federal courts located in New York,
            New York.
          </p>

          <p>11. Contact Us</p>

          <p>For questions about these Terms: support@clear30.org</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
