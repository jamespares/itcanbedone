import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Common Sense UK',
  description: 'Privacy Policy and data protection information for the Blow the Whistle platform.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-base-100">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-base-content/80">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mt-8">
            <h2>1. Introduction</h2>
            <p>
              At Common Sense UK, we take your privacy seriously. This Privacy Policy explains how
              we collect, use, disclose, and safeguard your information when you use our Blow the
              Whistle platform (&ldquo;Platform&rdquo;). Please read this privacy policy carefully.
              If you do not agree with the terms of this privacy policy, please do not access the
              Platform.
            </p>
          </section>

          <section className="mt-8">
            <h2>2. Data Controller</h2>
            <p>
              Common Sense UK (referred to as &ldquo;we&rdquo;, &ldquo;us&rdquo;, or
              &ldquo;our&rdquo;) acts as the data controller for the personal information collected
              through our Platform. You can contact our Data Protection Officer at
              dpo@commonsense.org.uk.
            </p>
          </section>

          <section className="mt-8">
            <h2>3. Information We Collect</h2>
            <h3>3.1 Information You Provide</h3>
            <ul>
              <li>Report content and details</li>
              <li>Contact information (if provided voluntarily)</li>
              <li>Organization and department information</li>
              <li>Any additional evidence or documentation you submit</li>
            </ul>

            <h3>3.2 Automatically Collected Information</h3>
            <ul>
              <li>IP address (anonymized)</li>
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>Usage data and analytics</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2>4. Legal Basis for Processing (GDPR Art. 6)</h2>
            <p>We process your personal data under the following legal bases:</p>
            <ul>
              <li>Consent (Art. 6(1)(a)) - For optional contact information</li>
              <li>Legal obligation (Art. 6(1)(c)) - For whistleblowing reports</li>
              <li>Legitimate interests (Art. 6(1)(f)) - For Platform security and improvement</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2>5. Data Protection Measures</h2>
            <p>
              We implement appropriate technical and organizational measures to ensure a level of
              security appropriate to the risk, including:
            </p>
            <ul>
              <li>End-to-end encryption for report data</li>
              <li>Secure data storage with Supabase</li>
              <li>Regular security audits and assessments</li>
              <li>Access controls and authentication measures</li>
              <li>Staff training on data protection</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2>6. Your Rights Under GDPR</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal data (Art. 15)</li>
              <li>Rectify inaccurate personal data (Art. 16)</li>
              <li>Erase your personal data (Art. 17)</li>
              <li>Restrict processing (Art. 18)</li>
              <li>Data portability (Art. 20)</li>
              <li>Object to processing (Art. 21)</li>
              <li>Withdraw consent at any time (Art. 7)</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2>7. Data Retention</h2>
            <p>
              We retain personal data for as long as necessary to fulfill the purposes for which it
              was collected, including legal obligations, accounting requirements, and reporting
              purposes. Anonymous reports are retained for statistical purposes.
            </p>
          </section>

          <section className="mt-8">
            <h2>8. International Data Transfers</h2>
            <p>
              Your data is processed within the European Economic Area (EEA). If any data transfer
              outside the EEA occurs, we ensure appropriate safeguards are in place through Standard
              Contractual Clauses or adequacy decisions.
            </p>
          </section>

          <section className="mt-8">
            <h2>9. Cookies and Tracking</h2>
            <p>
              We use essential cookies necessary for the Platform's operation. You can control
              cookie preferences through your browser settings. We do not use tracking cookies or
              third-party analytics without explicit consent.
            </p>
          </section>

          <section className="mt-8">
            <h2>10. Changes to Privacy Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any changes
              by posting the new privacy policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="mt-8">
            <h2>11. Contact Information</h2>
            <p>
              For any questions or concerns about this Privacy Policy, please contact us at:
              <br />
              Data Protection Officer
              <br />
              Common Sense UK
              <br />
              Email: dpo@commonsense.org.uk
              <br />
              Address: [Common Sense UK Business Address]
              <br />
              You also have the right to lodge a complaint with your local data protection
              authority.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
