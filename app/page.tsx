import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import { FaqSection, VideoThumbnail } from './HomeClient';
import './page.css';

export const metadata = {
  title: 'Clear30 - The Weed Break App',
  description:
    'Improve your relationship with cannabis. Take a 30-day break to reset and get clarity on your use.',
  alternates: { canonical: 'https://clear30.org' },
  openGraph: {
    title: 'Clear30 - The Weed Break App',
    description:
      'Improve your relationship with cannabis. Take a 30-day break to reset and get clarity on your use.',
    url: 'https://clear30.org',
    images: [{ url: '/images/og-image.webp' }],
  },
  twitter: {
    card: 'summary_large_image' as const,
    title: 'Clear30 - The Weed Break App',
    description:
      'Improve your relationship with cannabis. Take a 30-day break to reset and get clarity on your use.',
    images: ['/images/og-image.webp'],
  },
};

const references = `Aletraris, L., Groves, B. D., &amp; Ndungu, Z. J. (2020). Assessing the impact of recreational cannabis legalization on cannabis use disorder and admissions to treatment in the United States. Current Addiction Reports, 10(2), 198-209.<br>
Arria, A. M., Caldeiro, K. M., Bugbee, B. A., Vincent, K. B., &amp; O&rsquo;Grady, K. E. (2015). The academic consequences of marijuana use during college. Psychology of Addictive Behaviors, 29(3), 564-575.<br>
Di Forti, M., Quattrone, D., Freeman, T. P., et al. (2019). The contribution of cannabis use to variation in the incidence of psychotic disorder across Europe (EU-GEI): A multicentre case-control study. Lancet Psychiatry, 6(5), 427-436.<br>
Fern&aacute;ndez-Artamendi, S., Fern&aacute;ndez-Hermida, J. R., Garc&iacute;a-Fern&aacute;ndez, G., Secades-Villa, R., &amp; Garc&iacute;a-Rodr&iacute;guez, D. (2015). Motivation for change and barriers to treatment among young cannabis users. European Addiction Research, 19(1), 29-41.<br>
Gobbi, G., Arkin, T., Zytynski, T., et al. (2019). Association of cannabis use in adolescence and risk of depression, anxiety, and suicidality in young adulthood: A systematic review and meta-analysis. JAMA Psychiatry, 76(4), 426-434.<br>
Keung, M. Y., Leach, E., Kreuser, K., et al. (2020). Cannabis-induced anxiety disorder in the emergency department. Cureus, 12(4).<br>
Lowe, D. J. L., Sadek, J. D., Coles, A. S., &amp; George, T. P. (2019). Cannabis and mental illness: A review. European Archives of Psychiatry and Clinical Neuroscience, 269(1), 107-120.<br>
Mennis, J., McKeon, T. P., &amp; Shafer, G. J. (2023). Recreational cannabis legalization and cannabis use disorder treatment for adolescents and young adults. Addictive Behaviors, 138, 107592.<br>
Morissette, S. B., Blessing, A., Russel, P., &amp; Hole, W. (2023). Cannabis use disorder uniquely predicts educational impairment in college students over and above other mental health disorders. Journal of American College Health, 1-8.<br>
Pacheco Col&oacute;n, L., Ramirez, A. R., &amp; Gonzalez, R. (2019). Effects of adolescent cannabis use on motivation and depression: A systematic review. Current Addiction Reports, 6(4), 532-546.<br>
Perrilli, K., Ofori, S., Hines, L., Taylor, G., Adams, S., &amp; Freeman, T. P. (2022). Association of cannabis potency with mental ill health and addiction: A systematic review. Lancet Psychiatry, 9(9), 736-750.<br>
Robinson, T., Ali, M. U., Easterbrook, B., et al. (2022). Identifying risk thresholds for the association between frequency of cannabis use and development of cannabis use disorder: A systematic review and meta-analysis. Drug and Alcohol Dependence, 238, 109582.<br>
Rognli, E. B., Heiberg, J. H., Jacobsen, B. K., Heye, A., &amp; Br&aring;mness, J. G. (2023). Transition from substance-induced psychosis to schizophrenia spectrum disorder or bipolar disorder. American Journal of Psychiatry, 180(6), 437-444.<br>
Shamsabadi, A., Ahmadzade, A., Pirahjeh, K., Hasanzadeh, A., &amp; Asadigardemani, H. (2023). Suicidality risk after using cannabis and cannabinoids: An umbrella review. Dialogues in Clinical Neuroscience, 25(1), 50-63.<br>
Sultan, R. S., Zhong, A. W., Olfson, M., Kwizera, M., &amp; Levin, F. R. (2023). Nondisordered cannabis use among U.S. adolescents. JAMA Network Open, 6(3), e2311294.<br>
Volkow, N. D., Baler, R. D., Compton, W. M., &amp; Weiss, S. R. (2014). Adverse health effects of marijuana use. New England Journal of Medicine, 370(23), 2219-2227.<br>
Wilson, J., Freeman, T. P., &amp; Muckle, C. J. (2019). Effects of increasing cannabis potency on adolescent health. Lancet Child and Adolescent Health, 3(2), 121-128.<br>
Statista (2024). Percentage of U.S. college students who used marijuana in the past 30 days from 2000 to 2022. Statista. https://www.statista.com/statistics/825443/marijuana-use-among-college-students-us/`;

export default function Home() {
  return (
    <>
      <ScrollReveal />

      <div className="hero-gradient-wrapper">
        <Header />

        {/* ── Hero ── */}
        <section className="hero" id="hero-section">
          <div className="hero-content">
            <div className="hero-left">
              <div className="trusted-badge">Trusted by 150,000+ users</div>
              <h1 className="hero-headline">
                <span>Your Path to a</span>
                <span className="hero-headline-line">Clearer Relationship</span>
                <span>with Cannabis.</span>
              </h1>
              <p className="hero-body">
                The #1 app for cannabis users ready to quit, cut back, or take a break - backed by
                proven behavior change methods.
              </p>
              <div className="app-buttons">
                <a
                  href="https://apps.apple.com/us/app/clear30-quit-smoking-weed/id6476418203"
                  className="app-btn"
                  aria-label="Download on the App Store"
                  target="_blank"
                  rel="noopener"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt="Download on the App Store"
                    height={48}
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=org.clear30.Clear30v1&hl=en-US"
                  className="app-btn app-btn-google"
                  aria-label="Get it on Google Play"
                  target="_blank"
                  rel="noopener"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.webp"
                    alt="Get it on Google Play"
                    height={48}
                  />
                </a>
              </div>
            </div>
            <div className="hero-right">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/phone_mockup_2 final.webp"
                alt="Clear30 app on iPhone"
                className="hero-image"
              />
            </div>
          </div>
        </section>

        {/* ── Institutions ── */}
        <section className="institutions" data-scroll-reveal>
          <h2 className="institutions-title">Trusted by leading institutions</h2>
          <div className="institution-logos">
            {/* Row 1 */}
            <div className="institution-row">
              <div className="institution-logo um">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/University-of-Michigan-Logo.webp"
                  alt="University of Michigan"
                  className="institution-logo-img"
                />
              </div>
              <div className="institution-logo northwestern">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/Main_Amherst.webp"
                  alt="Amherst"
                  className="institution-logo-img"
                />
              </div>
              <div className="institution-logo more-wrap">
                <Link href="/universities">
                  <button className="more-btn">&amp; more</button>
                </Link>
              </div>
            </div>

            {/* Row 2 */}
            <div className="institution-row institution-row-2">
              <div className="institution-logo dartmouth">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/Dartmouth-Logo-before-2018.webp"
                  alt="Dartmouth"
                  className="institution-logo-img"
                />
              </div>
              <div className="institution-logo detroit">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/city-of-detroit-logo.webp"
                  alt="City of Detroit"
                  className="institution-logo-img"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* end hero-gradient-wrapper */}

      {/* ── Cannabis Facts ── */}
      <section className="cannabis-facts" data-scroll-reveal>
        <div className="cannabis-facts-container">
          <div className="cannabis-facts-header">
            <h2>Cannabis today is not what it used to be</h2>
          </div>
          <div className="cannabis-facts-content">
            <div className="potency-cards">
              <div className="potency-card">
                <span className="potency-badge mild">3% THC</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/Main_Leaf.webp"
                  alt="1970's Cannabis"
                  className="potency-icon"
                />
                <h3>Natural, mild potency</h3>
                <p className="potency-label">1970&apos;s Cannabis</p>
              </div>
              <div className="potency-card today">
                <span className="potency-badge high">30% THC</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/Main_No_Leaf.webp"
                  alt="Today's Cannabis"
                  className="potency-icon"
                />
                <h3>
                  <span className="underline">10x</span> more potent
                </h3>
                <p className="potency-label">Today&apos;s Cannabis</p>
              </div>
            </div>
            <div className="disorder-statement">
              <h3>19M+ Americans meet criteria for Cannabis Use Disorder</h3>
              <a
                href="https://ajph.aphapublications.org/doi/full/10.2105/AJPH.2024.307823"
                target="_blank"
                rel="noopener"
              >
                Source
              </a>
            </div>
            <div className="risk-cards">
              <div className="risk-card">
                <div className="risk-card-icon">&#9888;&#65039;</div>
                <h4>2-3x Higher Risk of Suicidal Thoughts</h4>
                <p>
                  Daily cannabis users face 2-3x greater risk of suicidal ideation - even without a
                  depression diagnosis.
                </p>
                <p className="citation">Volkow et al. (2021), JAMA Network Open</p>
              </div>
              <div className="risk-card">
                <div className="risk-card-icon">&#128532;</div>
                <h4>Increased Anxiety &amp; Depression</h4>
                <p>
                  Cannabis use in adolescence is linked to significantly higher rates of anxiety and
                  depression in young adulthood.
                </p>
                <p className="citation">Gobbi et al. (2019), JAMA Psychiatry</p>
              </div>
              <div className="risk-card">
                <div className="risk-card-icon">&#129504;</div>
                <h4>Impaired Attention, Memory &amp; Decision-Making</h4>
                <p>
                  Heavy use disrupts the cognitive functions people rely on every day &mdash; focus,
                  recall, and clear thinking.
                </p>
                <p className="citation">Solowij et al. (2002), Neuropsychopharmacology</p>
              </div>
              <div className="risk-card">
                <div className="risk-card-icon">&#128165;</div>
                <h4>Increased Risk of Psychosis</h4>
                <p>
                  Daily use of high-potency cannabis is significantly associated with first-episode
                  psychotic disorders.
                </p>
                <p className="citation">Di Forti et al. (2019), The Lancet Psychiatry</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Real Results ── */}
      <section className="results-section" data-scroll-reveal>
        <div className="results-banner">
          <h2>Real Results in Just 30 Days.</h2>
          <div className="results-stats">
            <div className="results-stat">
              <div className="results-stat-number">90%</div>
              <div className="results-stat-label">Average decrease in cannabis use</div>
              <div className="results-stat-context">
                Among users who select they&apos;re committed to taking a break
              </div>
            </div>
            <div className="results-stat">
              <div className="results-stat-number">89%</div>
              <div className="results-stat-label">Report improved mental health</div>
              <div className="results-stat-context">After their first 30 days</div>
            </div>
          </div>
        </div>
        <div className="how-clear30-section">
          <h3>How Clear30 resets your relationship with cannabis</h3>
          <div className="how-clear30-placeholder-wrap">
            <iframe
              className="how-clear30-video"
              src="https://www.youtube.com/embed/QhWLjyxJnig"
              title="How Clear30 resets your relationship with cannabis"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* ── Why Trust Clear30 ── */}
      <section className="trust-clear30" data-scroll-reveal>
        <div className="trust-clear30-container">
          <h2 className="trust-clear30-title">Why Users and Institutions Trust Clear30</h2>
          <div className="trust-clear30-cards">
            <div className="trust-clear30-card">
              <div className="trust-clear30-card-images">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/Main_Fred.webp"
                  alt="Dr. Fred Muench"
                  className="trust-clear30-img"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/Main_Thomas_McLellan.webp"
                  alt="A. Thomas McLellan, PhD"
                  className="trust-clear30-img"
                />
              </div>
              <div className="trust-clear30-card-content">
                <h4>Built by World-Leading Experts</h4>
                <p>
                  Founded by Dr. Fred Muench, who led the world&apos;s largest mobile addiction
                  study, and advised by A. Thomas McLellan, PhD, former Deputy Director of National
                  Drug Control Policy under President Obama.
                </p>
                <p>
                  Between the founding team and advisory board, hundreds of peer-reviewed
                  publications with tens of thousands of citations across addiction science, digital
                  behavior change, and cannabis research.
                </p>
              </div>
            </div>

            <div className="trust-clear30-card">
              <div className="trust-clear30-card-images">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/Main_Michigan.webp"
                  alt="University of Michigan"
                  className="trust-clear30-img rect"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/Main_Harvard_logo.webp"
                  alt="Harvard University"
                  className="trust-clear30-img"
                />
              </div>
              <div className="trust-clear30-card-content">
                <h4>Ongoing Research Collaborations</h4>
                <p>
                  Partnered with the University of Michigan&apos;s Dynamic Intervention Decision
                  Making Center on randomized controlled trials to build and refine Clear30&apos;s
                  intervention model.
                </p>
                <p>
                  Collaborating with The Recovery Research Institute at Harvard to study user
                  demographics and validate the program&apos;s efficacy.
                </p>
              </div>
            </div>

            <div className="trust-clear30-card">
              <div className="trust-clear30-card-images">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/Main_NIH_logo.webp"
                  alt="National Institutes of Health"
                  className="trust-clear30-img rect"
                />
              </div>
              <div className="trust-clear30-card-content">
                <h4>Research-Backed by the NIH</h4>
                <p>
                  Clear30&apos;s development is funded through the National Institutes of Health and
                  the National Institute on Drug Abuse - the gold standard in federal research
                  funding.
                </p>
              </div>
            </div>

            <div className="trust-clear30-card">
              <div className="trust-clear30-card-images">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/Main_Clear30_logo.webp"
                  alt="Clear30"
                  className="trust-clear30-img rect"
                />
              </div>
              <div className="trust-clear30-card-content">
                <h4>Proven at Scale</h4>
                <p>150,000+ downloads. 4.8 stars. The #1 cannabis support app worldwide.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <div className="testimonials-path-wrapper">
        <section className="testimonials-section" data-scroll-reveal>
          <div className="testimonials-header">
            <h2>What are our users saying?</h2>
            <div className="testimonials-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p className="testimonials-rating">4.8 stars * 2,400+ reviews</p>
          </div>
          <div className="testimonials-container">
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <h4>Great app if you want to stop smoking weed</h4>
                <div className="testimonial-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <p className="testimonial-body">
                  It helped me a lot. I hit 30 days after like 5 years of daily use - nonstop. Very
                  proud of myself &#127807;
                </p>
                <p className="testimonial-author">Dan5033</p>
              </div>
              <div className="testimonial-card">
                <h4>Finally something personal!</h4>
                <div className="testimonial-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <p className="testimonial-body">
                  I didn&apos;t want to fully quit - I just wanted to monitor my use and cut it
                  down. Nobody tried to force me, and peer support helped a lot when cravings hit.
                </p>
                <p className="testimonial-author">Lori S.</p>
              </div>
              <div className="testimonial-card">
                <h4>It really helps.</h4>
                <div className="testimonial-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <p className="testimonial-body">
                  I needed something like this to quit. I didn&apos;t have many people to hold me
                  accountable, but the community here helped a ton. Worth trying if youve been
                  struggling.
                </p>
                <p className="testimonial-author">Farf33</p>
              </div>
              <div className="testimonial-card">
                <h4>Incredible guided meditations!</h4>
                <div className="testimonial-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <p className="testimonial-body">
                  The meditations really get me through cravings, and the insight on getting your
                  power back (and how cravings work) is genuinely useful.
                </p>
                <p className="testimonial-author">Marissa U.</p>
              </div>
            </div>
          </div>
          <div className="testimonials-placeholders">
            <VideoThumbnail
              videoId="slFDvhHTbTc"
              alt="Clear30 testimonial - Finding Freedom From Weed"
            />
            <VideoThumbnail videoId="EGQRTbjIxd8" alt="Clear30 testimonial" />
            <VideoThumbnail videoId="lIZg7el9LsU" alt="Clear30 testimonial" />
            <VideoThumbnail videoId="M9Ka0y7UkFU" alt="Clear30 testimonial" />
            <VideoThumbnail videoId="RcnPbvz8MLA" alt="Clear30 testimonial" />
            <VideoThumbnail videoId="a6-Kngk2FSI" alt="Clear30 testimonial" />
          </div>
        </section>
      </div>

      {/* ── Choose Your Path ── */}
      <section className="path-section" data-scroll-reveal>
        <h2>Choose Your Own Path to Get Clear</h2>
        <div className="path-cards">
          <div className="path-card">
            <div className="path-card-icon">&#128202;</div>
            <h4>Track Use</h4>
            <p>Mental Clarity</p>
          </div>
          <div className="path-card">
            <div className="path-card-icon">&#9199;&#65039;</div>
            <h4>Take a Break</h4>
            <p>Reduce Dependency</p>
          </div>
          <div className="path-card">
            <div className="path-card-icon">&#9878;&#65039;</div>
            <h4>Moderate</h4>
            <p>Reduce Anxiety</p>
          </div>
          <div className="path-card">
            <div className="path-card-icon">&#127919;</div>
            <h4>Quit Forever</h4>
            <p>Increase Energy</p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FaqSection />

      {/* ── Footer ── */}
      <Footer references={references} />
    </>
  );
}
