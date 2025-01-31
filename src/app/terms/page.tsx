import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | It Can Be Done',
  description: 'Terms of Service and legal agreements for using the It Can Be Done platform.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-base-100">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-base-content/80">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mt-8">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the It Can Be Done platform ("Platform"), you agree to be bound
              by these Terms of Service and all applicable laws and regulations. If you do not agree
              with any of these terms, you are prohibited from using or accessing this Platform.
            </p>
          </section>

          <section className="mt-8">
            <h2>2. Reporting Service</h2>
            <p>
              Our Platform provides a secure channel for submitting reports about organizational
              misconduct. We are committed to protecting whistleblowers and maintaining the
              confidentiality of all reports submitted through our Platform.
            </p>
          </section>

          <section className="mt-8">
            <h2>3. User Obligations</h2>
            <p>You agree to:</p>
            <ul>
              <li>Provide accurate and truthful information in your reports</li>
              <li>Maintain the confidentiality of any access credentials</li>
              <li>Not use the Platform for any unlawful purpose</li>
              <li>Not submit false or malicious reports</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2>4. Privacy and Data Protection</h2>
            <p>
              We process personal data in accordance with our Privacy Policy and applicable data
              protection laws, including the General Data Protection Regulation (GDPR). For complete
              information about how we collect, use, and protect your data, please refer to our
              Privacy Policy.
            </p>
          </section>

          <section className="mt-8">
            <h2>5. Confidentiality</h2>
            <p>
              We implement robust security measures to protect the confidentiality of reports and
              reporter identities. However, we may be required to disclose information in response
              to valid legal requests or to protect our rights, privacy, safety, or property.
            </p>
          </section>

          <section className="mt-8">
            <h2>6. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, It Can Be Done shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages resulting from your
              use or inability to use the Platform.
            </p>
          </section>

          <section className="mt-8">
            <h2>7. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will notify users of any
              material changes via email or through the Platform. Continued use of the Platform
              after such modifications constitutes acceptance of the updated terms.
            </p>
          </section>

          <section className="mt-8">
            <h2>8. Contact Information</h2>
            <p>
              For questions about these Terms of Service, please contact us at:
              <br />
              Email: legal@[domain].org
              <br />
              Address: [Your Business Address]
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
