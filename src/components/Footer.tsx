import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="max-w-6xl mx-auto px-4">
        <div className="footer py-12">
          <div>
            <span className="footer-title">Legal</span>
            <Link href="/privacy" className="link link-hover">
              Privacy Policy
            </Link>
            <Link href="/terms" className="link link-hover">
              Terms of Service
            </Link>
            <Link href="/whistleblower-rights" className="link link-hover">
              Whistleblower Rights
            </Link>
          </div>

          <div>
            <span className="footer-title">Resources</span>
            <Link href="/guide" className="link link-hover">
              Reporting Guide
            </Link>
            <Link href="/faq" className="link link-hover">
              FAQ
            </Link>
            <Link href="/support" className="link link-hover">
              Support
            </Link>
          </div>

          <div>
            <span className="footer-title">About</span>
            <Link href="/mission" className="link link-hover">
              Our Mission
            </Link>
            <Link href="/team" className="link link-hover">
              Our Team
            </Link>
            <Link href="/contact" className="link link-hover">
              Contact
            </Link>
          </div>

          <div>
            <span className="footer-title">Connect</span>
            <p className="text-sm opacity-75">
              For secure communication only:
              <br />
              contact@[domain].org
            </p>
            <p className="text-sm opacity-75">
              For emergencies:
              <br />
              +44 XXX XXX XXXX
            </p>
          </div>
        </div>

        <div className="footer footer-center p-4 border-t border-neutral-focus text-sm opacity-75">
          <p>
            &copy; {new Date().getFullYear()} Public Service Whistleblowers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
