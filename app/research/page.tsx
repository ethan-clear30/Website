import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import CollabBoxes from './CollabBoxes';
import './page.css';

export const metadata = {
  title: 'Research',
  description:
    'Explore the science behind Clear30 - peer-reviewed research, clinical advisors, and evidence-based approaches to cannabis wellness.',
  alternates: { canonical: 'https://clear30.org/research' },
  openGraph: {
    title: 'Clear30 - Research',
    description:
      'Explore the science behind Clear30 - peer-reviewed research, clinical advisors, and evidence-based approaches to cannabis wellness.',
    url: 'https://clear30.org/research',
    images: [{ url: '/images/og-image.png' }],
  },
  twitter: {
    card: 'summary_large_image' as const,
    title: 'Clear30 - Research',
    description:
      'Explore the science behind Clear30 - peer-reviewed research, clinical advisors, and evidence-based approaches to cannabis wellness.',
    images: ['/images/og-image.png'],
  },
};

export default function ResearchPage() {
  return (
    <>
      <div className="research-wrapper">
        <div className="top-gradient-overlay" aria-hidden="true"></div>
        <div className="bottom-gradient-overlay" aria-hidden="true"></div>

        <div className="research-content">
          <Header />

          {/* Hero */}
          <section className="research-hero">
            <div className="research-hero-content">
              <div className="research-hero-text research-hero-left">
                <h1 className="research-hero-headline">
                  <span className="research-hero-line1">The Most Research-</span>
                  <span className="research-hero-line2">Backed Cannabis</span>
                  <span className="research-hero-line3">Intervention Available</span>
                </h1>
                <p className="research-hero-body">
                  Built by a team that has published <strong>hundreds</strong> of peer-reviewed studies with tens of <strong>thousands</strong> of citations across addiction science, digital intervention, and cannabis research, and funded by the <strong>National Institutes of Health</strong>.
                </p>
              </div>
              <div className="research-hero-collage">
                <div className="research-hero-collage-item research-hero-collage-item-1">
                  <img src="/images/research_statistics1.png" alt="Reasons for Taking a Break" />
                </div>
                <div className="research-hero-collage-item research-hero-collage-item-2">
                  <img src="/images/research_statistics2.png" alt="Days Using Before Break" />
                </div>
                <div className="research-hero-collage-item research-hero-collage-item-3">
                  <img src="/images/research_statistics3.png" alt="Clear30 Research Statistics" />
                </div>
              </div>
            </div>
          </section>

          {/* Research backed by universities */}
          <section className="research-section" data-scroll-reveal>
            <div className="research-box-header">
              <p className="research-box-label">Research backed by universities</p>
              <p className="research-box-statement">
                We evaluate <strong>engagement</strong>, <strong>outcomes</strong>, and <strong>real-world use</strong> of digital cannabis support tools.
              </p>
            </div>
            <div className="research-columns">
              <div className="research-column">
                <div className="research-column-icon research-column-icon--engagement">&#127919;</div>
                <h3 className="research-column-title">Engagement</h3>
                <p className="research-column-desc">how often users show up and stick with it</p>
              </div>
              <div className="research-column">
                <div className="research-column-icon research-column-icon--outcomes">&#127942;</div>
                <h3 className="research-column-title">Outcomes</h3>
                <p className="research-column-desc">Changes in behavior or wellbeing</p>
              </div>
              <div className="research-column">
                <div className="research-column-icon research-column-icon--realworld">&#127760;</div>
                <h3 className="research-column-title">Real-world use</h3>
                <p className="research-column-desc">How people apply it outside the app</p>
              </div>
            </div>
          </section>

          {/* Research partners + Collaboration boxes */}
          <section className="research-quote-section" data-scroll-reveal>
            <div className="research-logos-wrap">
              <p className="research-logos-label">Research partners</p>
              <div className="research-logos">
                <div className="research-logo-item">
                  <img src="/images/Harvard_university_logo.png" alt="Harvard University" />
                </div>
                <div className="research-logo-item">
                  <img src="/images/Main_NIH_logo.png" alt="National Institutes of Health" />
                </div>
                <div className="research-logo-item">
                  <img src="/images/University-of-Michigan-Logo.png" alt="University of Michigan" />
                </div>
              </div>
            </div>
            <CollabBoxes />
          </section>

          {/* NIH Funded Section */}
          <section className="research-nih-section" data-scroll-reveal>
            <div className="research-nih-logo">
              <img src="/images/Research_NIH_Logo.png" alt="National Institutes of Health" />
            </div>
            <div className="research-nih-inner">
              <div className="research-nih-header">
                <h2 className="research-nih-heading">Funded by the National<br />Institutes of Health</h2>
              </div>
              <p className="research-nih-body">
                Clear30 was built with a competitive NIH/NIDA SBIR grant. We&apos;ve completed Phase 1, which included building the core app and developing an adolescent version. The same research team continues to guide the product today.
              </p>
            </div>
          </section>

          {/* Scientific and Clinical Advisors */}
          <section className="research-advisors-section" data-scroll-reveal>
            <div className="research-advisors-inner">
              <div className="research-advisors-grid">
                <div>
                  <h2 className="research-advisors-header">Scientific and Clinical Advisors</h2>
                  <ul className="research-advisors-list">
                    <li>Clear30&apos;s advisory leadership provides expert guidance across addiction science, clinical care, public health policy, and behavior change.</li>
                    <li>These advisors help ensure Clear30 is developed and evaluated in ways that align with established research, real-world clinical practice, and the needs of institutions supporting student and young adult well-being.</li>
                    <li>Their involvement strengthens Clear30 as a responsible, evidence-informed partner for universities and health organizations.</li>
                  </ul>
                  <a href="/book-demo" className="research-advisors-cta">Contact our team</a>
                </div>
                <div className="research-advisors-image">
                  <img src="/images/Research_Fred_Header_Image.png" alt="Dr. Fred Muench - Clear30 Scientific and Clinical Advisors" />
                </div>
              </div>
            </div>
          </section>

          {/* Advisory Leadership */}
          <section className="research-leadership-section" data-scroll-reveal>
            <div className="research-leadership-inner">
              <div className="research-leadership-header-wrap">
                <h2 className="research-leadership-header">Advisory Leadership</h2>
              </div>
              <div className="research-leadership-body">
                <div className="research-leadership-l-graphic" aria-hidden="true"></div>
                <ul className="research-leadership-list">
                  <li className="research-leadership-item">
                    <div className="research-leadership-photo">
                      <img src="/images/Research_Alan_Budney.png" alt="Alan Budney" />
                    </div>
                    <div className="research-leadership-info">
                      <h3>Alan Budney, PhD</h3>
                      <p>Professor at Dartmouth College and one of the world&apos;s leading researchers in cannabis use disorder treatment, behavioral therapies, and treatment outcomes.</p>
                    </div>
                  </li>
                  <li className="research-leadership-item">
                    <div className="research-leadership-photo">
                      <img src="/images/Research_Thomas_McLellan.png" alt="A. Thomas McLellan" />
                    </div>
                    <div className="research-leadership-info">
                      <h3>A. Thomas McLellan, PhD</h3>
                      <p>Creator of the Addiction Severity Index and former U.S. Deputy Director of National Drug Control Policy, with decades of experience shaping addiction treatment standards and national policy.</p>
                    </div>
                  </li>
                  <li className="research-leadership-item">
                    <div className="research-leadership-photo">
                      <img src="/images/Research_Stephen_DAntonio.png" alt="Stephen D'Antonio" />
                    </div>
                    <div className="research-leadership-info">
                      <h3>Stephen D&apos;Antonio</h3>
                      <p>Former Executive Vice President at Shatterproof, trained in evidence-based family treatment approaches and large-scale behavioral health program implementation.</p>
                    </div>
                  </li>
                  <li className="research-leadership-item">
                    <div className="research-leadership-photo">
                      <img src="/images/Research_Kamala_Génecé.png" alt="Kamala Génecé" />
                    </div>
                    <div className="research-leadership-info">
                      <h3>Kamala Génecé</h3>
                      <p>Chief Clinical Officer at Behavioral Health Group, focused on clinical implementation of evidence-based behavioral health supports across care settings.</p>
                    </div>
                  </li>
                  <li className="research-leadership-item">
                    <div className="research-leadership-photo">
                      <img src="/images/Research_Lauren_Johnson.png" alt="Lauren Johnson" />
                    </div>
                    <div className="research-leadership-info">
                      <h3>Lauren Johnson</h3>
                      <p>Marketing Director at Fors Marsh, specializing in public health communications, behavior change messaging, and large-scale health campaigns.</p>
                    </div>
                  </li>
                  <li className="research-leadership-item">
                    <div className="research-leadership-photo">
                      <img src="/images/Research_Marcia_Lee_Taylor.png" alt="Marcia Lee Taylor" />
                    </div>
                    <div className="research-leadership-info">
                      <h3>Marcia Lee Taylor</h3>
                      <p>Founder of MLT Strategies to reduce opioid overdoses, former EVP Head of Policy at Partnership to End Addiction.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Peer-reviewed Research and Publications */}
          <section className="research-publications-section" data-scroll-reveal>
            <div className="research-publications-inner">
              <div>
                <h2 className="research-publications-header">Peer-reviewed research and publications</h2>
                <div className="research-publications-body">
                  <p>Clear30&apos;s design and approach are informed by a broad body of peer-reviewed <strong>research</strong> contributed by its leadership and advisors.</p>
                  <p>These publications span <strong>digital mental health</strong>, <strong>addiction treatment</strong>, <strong>behavior change</strong>, and <strong>cannabis use</strong>, and reflect decades of academic and clinical work that shape how Clear30 is built and evaluated.</p>
                </div>
              </div>
              <div className="research-publications-book">
                <img src="/images/Research_Peer_review.png" alt="Peer Review: A Critical Inquiry by David Shatz" />
              </div>
            </div>
          </section>

          {/* Hundreds of Publications */}
          <section className="research-citations-section" data-scroll-reveal>
            <div className="research-citations-inner">
              <h2 className="research-citations-header">Hundreds of Publications. Tens of Thousands of Citations.</h2>

              {/* Fred Muench */}
              <div className="research-citations-author">
                <div className="research-citations-author-header">
                  <div className="research-citations-author-photo">
                    <img src="/images/Research_Fred.png" alt="Fred Muench" />
                  </div>
                  <h3 className="research-citations-author-name">Fred Muench, PhD</h3>
                </div>
                <ul className="research-citations-list">
                  <li className="research-citations-item">
                    <p className="research-citations-item-title">Objective User Engagement With Mental Health Apps: Systematic Search and Panel-Based Usage Analysis</p>
                    <p className="research-citations-item-link">
                      <span className="research-citations-item-link-label">Link:</span>{' '}
                      <a href="https://www.jmir.org/2019/9/e14567/" target="_blank" rel="noopener noreferrer">https://www.jmir.org/2019/9/e14567/</a>
                    </p>
                  </li>
                  <li className="research-citations-item">
                    <p className="research-citations-item-title">More Than a Text Message: Dismantling Digital Triggers to Curate Behavior Change in Patient-Centered Health Interventions</p>
                    <p className="research-citations-item-link">
                      <span className="research-citations-item-link-label">Link:</span>{' '}
                      <a href="https://www.jmir.org/2017/5/e147/" target="_blank" rel="noopener noreferrer">https://www.jmir.org/2017/5/e147/</a>
                    </p>
                  </li>
                  <li className="research-citations-item">
                    <p className="research-citations-item-title">There&apos;s an App for That: Information Technology Applications for Cognitive Behavioral Practitioners</p>
                    <p className="research-citations-item-link">
                      <span className="research-citations-item-link-label">Link:</span>{' '}
                      <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4270287/" target="_blank" rel="noopener noreferrer">https://pmc.ncbi.nlm.nih.gov/articles/PMC4270287/</a>
                    </p>
                  </li>
                  <li className="research-citations-item">
                    <p className="research-citations-item-title">Developing a Theory-Driven Text Messaging Intervention for Addiction Care With User-Driven Content</p>
                    <p className="research-citations-item-link">
                      <span className="research-citations-item-link-label">Link:</span>{' '}
                      <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3531566/" target="_blank" rel="noopener noreferrer">https://pmc.ncbi.nlm.nih.gov/articles/PMC3531566/</a>
                    </p>
                  </li>
                  <li className="research-citations-item">
                    <p className="research-citations-item-title">Understanding Messaging Preferences to Inform Development of Mobile Goal-Directed Behavioral Interventions</p>
                    <p className="research-citations-item-link">
                      <span className="research-citations-item-link-label">Link:</span>{' '}
                      <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3936297/" target="_blank" rel="noopener noreferrer">https://pmc.ncbi.nlm.nih.gov/articles/PMC3936297/</a>
                    </p>
                  </li>
                </ul>
              </div>

              {/* Alan Budney */}
              <div className="research-citations-author">
                <div className="research-citations-author-header">
                  <div className="research-citations-author-photo">
                    <img src="/images/Research_Alan_Budney.png" alt="Alan Budney" />
                  </div>
                  <h3 className="research-citations-author-name">Alan Budney, PhD</h3>
                </div>
                <ul className="research-citations-list">
                  <li className="research-citations-item">
                    <p className="research-citations-item-title">Marijuana Dependence and Its Treatment</p>
                    <p className="research-citations-item-link">
                      <span className="research-citations-item-link-label">Link:</span>{' '}
                      <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2797098/" target="_blank" rel="noopener noreferrer">https://pmc.ncbi.nlm.nih.gov/articles/PMC2797098/</a>
                    </p>
                  </li>
                  <li className="research-citations-item">
                    <p className="research-citations-item-title">Cannabis Use and Cannabis Use Disorder</p>
                    <p className="research-citations-item-link">
                      <span className="research-citations-item-link-label">Link:</span>{' '}
                      <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8655458/" target="_blank" rel="noopener noreferrer">https://pmc.ncbi.nlm.nih.gov/articles/PMC8655458/</a>
                    </p>
                  </li>
                  <li className="research-citations-item">
                    <p className="research-citations-item-title">Characterizing Cannabis Use Reduction and Change in Functioning During Treatment</p>
                    <p className="research-citations-item-link">
                      <span className="research-citations-item-link-label">Link:</span>{' '}
                      <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9325921/" target="_blank" rel="noopener noreferrer">https://pmc.ncbi.nlm.nih.gov/articles/PMC9325921/</a>
                    </p>
                  </li>
                  <li className="research-citations-item">
                    <p className="research-citations-item-title">Initial Evaluation of Domain-Specific Episodic Future Thinking on Delay Discounting and Cannabis Use</p>
                    <p className="research-citations-item-link">
                      <span className="research-citations-item-link-label">Link:</span>{' '}
                      <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9214768/" target="_blank" rel="noopener noreferrer">https://pmc.ncbi.nlm.nih.gov/articles/PMC9214768/</a>
                    </p>
                  </li>
                  <li className="research-citations-item">
                    <p className="research-citations-item-title">Feasibility and Utility of a Structured Guide for Cannabis Tolerance Breaks in Young Adults</p>
                    <p className="research-citations-item-link">
                      <span className="research-citations-item-link-label">Link:</span>{' '}
                      <a href="https://www.tandfonline.com/doi/10.1080/07448481.2022.2155061" target="_blank" rel="noopener noreferrer">https://www.tandfonline.com/doi/10.1080/07448481.2022.2155061</a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
      <ScrollReveal />
    </>
  );
}
