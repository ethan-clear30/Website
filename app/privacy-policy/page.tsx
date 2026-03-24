import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './page.css';

export const metadata = {
  title: 'Privacy Policy',
  description:
    'Learn how Clear30 collects, uses, shares, and protects your information when you use the Clear30 app and services.',
  alternates: { canonical: 'https://clear30.org/privacy-policy' },
  openGraph: {
    title: 'Clear30 - Privacy Policy',
    description:
      'Learn how Clear30 collects, uses, shares, and protects your information when you use the Clear30 app and services.',
    url: 'https://clear30.org/privacy-policy',
    images: [{ url: '/images/og-image.webp' }],
  },
  twitter: {
    card: 'summary_large_image' as const,
    title: 'Clear30 - Privacy Policy',
    description:
      'Learn how Clear30 collects, uses, shares, and protects your information when you use the Clear30 app and services.',
    images: ['/images/og-image.webp'],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="legal-page">
      <Header />

      <section className="legal-hero">
        <div className="legal-hero-content">
          <h1>Privacy Policy</h1>
        </div>
      </section>

      <div className="legal-content">
        <div className="rich-text">
          <p>CLEAR30 PRIVACY POLICY</p>
          <p>Effective Date: November 2025</p>

          <p>
            This Privacy Policy (&ldquo;Privacy Policy&rdquo;) explains how Clear30 LLC, part of
            Mobile Health Interventions (&ldquo;Clear30,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo;
            or &ldquo;our&rdquo;), collects, uses, shares, and protects information when you use the
            Clear30 mobile application, related websites, and text messaging programs (the
            &ldquo;Clear30 App&rdquo; or the &ldquo;Services&rdquo;).
          </p>

          <p>
            Clear30 is a digital self-help program for people who want to pause, reduce, or stop
            cannabis use. We are not a medical provider and do not offer medical advice or treatment.
            Clear30 is not a HIPAA-covered entity, but we still treat your
            information&mdash;especially anything related to cannabis use or mental
            health&mdash;with care and discretion.
          </p>

          <p>
            By tapping &ldquo;I Agree&rdquo; during onboarding, you confirm your age and accept this
            Privacy Policy and the Terms of Service. If you do not agree, you will not enter the App
            and no data will be collected or transmitted.
          </p>

          <p>1. Who Can Use Clear30</p>

          <p>Clear30 is designed for people 16 years and older in the United States.</p>

          <ul>
            <li>
              Users age 16&ndash;17
              <ul>
                <li>May use the App</li>
                <li>No identifiable or pseudonymized information is shared externally</li>
                <li>
                  Only fully anonymized and aggregated data may be used externally (e.g., for
                  research or program improvement)
                </li>
                <li>No sensitive content is ever shared externally in any form</li>
              </ul>
            </li>
            <li>
              Users age 18+
              <ul>
                <li>Must accept this Privacy Policy and Terms before entering</li>
                <li>
                  May have minimal, pseudonymized technical data shared externally for
                  analytics/marketing purposes
                </li>
              </ul>
            </li>
          </ul>

          <p>
            Users under 16 cannot use Clear30. Any data discovered from under-16 users will be
            deleted.
          </p>

          <p>2. Information We Collect</p>

          <p>
            We collect information only after you confirm your age and agree to this Privacy Policy.
          </p>

          <p>We collect three categories of information:</p>

          <ol>
            <li>Information you provide directly</li>
            <li>Information collected automatically (after agreement)</li>
            <li>Information collected through optional SMS programs</li>
          </ol>

          <p>We treat cannabis-related information as sensitive.</p>

          <p>2.1 Information You Provide to Us</p>

          <p>You may provide:</p>

          <ul>
            <li>Phone, Email or nickname</li>
            <li>Profile details</li>
            <li>Assessments about cannabis use, cravings, goals, and mood (Sensitive)</li>
            <li>Check-ins and reflections (Sensitive)</li>
            <li>Journal or Claire entries (Sensitive)</li>
            <li>Customer support interactions</li>
            <li>Community posts (if the feature is enabled)</li>
          </ul>

          <p>Sensitive Data Handling</p>

          <p>
            We treat assessments, cravings, cannabis-use patterns, journals, and similar content as
            sensitive.
          </p>

          <ul>
            <li>
              We do not share identifiable or pseudonymized sensitive information externally.
            </li>
            <li>Sensitive data stays inside Clear30 for service delivery only.</li>
            <li>
              If this information is used externally (e.g., by research partners), it is fully
              anonymized and aggregated, so it cannot identify you.
            </li>
            <li>
              This anonymous, aggregated data sharing applies to all users age 16 and older,
              including 16&ndash;17-year-olds.
            </li>
          </ul>

          <p>Payments</p>

          <p>
            If you purchase access, payment information is handled by Apple, Google, or Stripe.
            Clear30 does not store card details.
          </p>

          <p>2.2 Information Collected Automatically</p>

          <p>After you accept this Privacy Policy, we may collect:</p>

          <ul>
            <li>Device type</li>
            <li>IP address</li>
            <li>App version</li>
            <li>Basic usage logs</li>
            <li>First session information</li>
            <li>Error logs for troubleshooting</li>
          </ul>

          <p>
            For users age 16&ndash;17, this information stays internal. Only anonymous, aggregated
            versions may be included in external research or metrics.
          </p>

          <p>2.3 Information From Other Sources</p>

          <p>
            We may receive limited technical or demographic information from app stores or service
            providers.
          </p>

          <p>3. How We Use Your Information</p>

          <p>
            We use information only for purposes that support your use of the App, including:
          </p>

          <ul>
            <li>Operating and improving Clear30</li>
            <li>Improving Engagement and Outcomes</li>
            <li>Delivering program content</li>
            <li>Supporting reminders and nudges</li>
            <li>Understanding general usage patterns</li>
            <li>Maintaining security</li>
            <li>Responding to user requests</li>
            <li>Complying with law</li>
          </ul>

          <p>
            Identifiable or pseudoanonymized sensitive content from your assessments is never used
            for advertising or external analytics.
          </p>

          <p>4. Analytics, Marketing, and External Sharing</p>

          <p>
            We work with analytics and marketing partners to help us understand App performance and
            user acquisition. These partners receive only minimal, pseudonymized technical data, and
            only from adults (18+) who have agreed to this Privacy Policy. We share this information
            solely to operate the service and improve App engagement. Although we provide only the
            minimum necessary information without your name or identifying details, once
            pseudonymized data is transmitted to these partners, Clear30 does not control their
            internal systems.
          </p>

          <p>5. Research Partners (Anonymous &amp; Aggregated Only)</p>

          <p>
            We may share anonymous, aggregated data with approved research or evaluation partners to
            help measure program effectiveness and improve outcomes.
          </p>

          <ul>
            <li>This data cannot identify you</li>
            <li>
              It contains no sensitive content, no identifiers, and no device-level data
            </li>
            <li>This applies to all users age 16 and older</li>
          </ul>

          <p>
            This is common for digital behavior health programs and helps demonstrate Clear30&apos;s
            impact.
          </p>

          <p>6. Acquisition or Strategic Partnership</p>

          <p>
            If Clear30 enters a merger, acquisition, or strategic partnership, certain data may be
            shared to support service continuity or improvement.
          </p>

          <p>However:</p>

          <ul>
            <li>
              Sensitive content (journals, assessments, cravings, cannabis-use details) is never
              shared
            </li>
            <li>
              Any identifiable personal information would be shared only with your permission
            </li>
            <li>Anonymous and aggregated data may be shared</li>
            <li>Data is never used for unrelated commercial purposes</li>
          </ul>

          <p>7. Service Providers</p>

          <p>
            We share the minimum necessary information with trusted service providers who help with:
          </p>

          <ul>
            <li>Hosting</li>
            <li>Data security</li>
            <li>SMS delivery</li>
            <li>Customer support</li>
            <li>Payment processing</li>
          </ul>

          <p>These providers must keep your information confidential.</p>

          <p>8. Legal and Safety Disclosures</p>

          <p>We may disclose information if needed to:</p>

          <ul>
            <li>Comply with law</li>
            <li>Protect rights, safety, or property</li>
            <li>Prevent fraud</li>
            <li>Address security concerns</li>
            <li>If you are a perceived threat to yourself or others</li>
          </ul>

          <p>Only what is necessary will be disclosed.</p>

          <p>9. Website Cookies and Similar Technologies</p>

          <p>
            Our websites use limited cookies to operate reliably and measure basic activity.
          </p>

          <p>10. Your Choices</p>

          <ul>
            <li>
              Delete your account: From within the App or by emailing support@clear30.org
            </li>
            <li>Update your information: In the App</li>
            <li>Opt out of SMS: Reply &ldquo;STOP&rdquo;</li>
            <li>Decline the Privacy Policy: If you do not accept, no data is collected</li>
          </ul>

          <p>11. Data Security</p>

          <p>
            We use reasonable administrative, technical, and physical safeguards to protect your
            information. No system is perfectly secure, but we work hard to maintain the safety of
            your data.
          </p>

          <p>12. Data Retention</p>

          <p>
            We retain information only as long as necessary to operate the App or meet legal
            requirements. Deleted accounts are removed from active systems and then scheduled for
            removal from backups.
          </p>

          <p>13. Children&apos;s Privacy</p>

          <p>
            Clear30 is not for users under 16. Any such data will be deleted promptly if identified.
          </p>

          <p>Users age 16&ndash;17 are fully protected:</p>

          <ul>
            <li>No identifiable or pseudonymized data is shared externally</li>
            <li>Only anonymous, aggregated research metrics may be used</li>
          </ul>

          <p>14. Third-Party Links</p>

          <p>
            The App may link to outside websites or services. We do not control their privacy
            practices.
          </p>

          <p>15. International Users</p>

          <p>
            Clear30 is based in the United States. If you use the App from outside the U.S., your
            information may be processed here.
          </p>

          <p>16. Changes to This Privacy Policy</p>

          <p>
            If we update this Privacy Policy, we will post the new version here and update the
            effective date. Your continued use means you accept the updated policy.
          </p>

          <p>17. Contact Us</p>

          <p>For questions or requests, contact: support@clear30.org</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
