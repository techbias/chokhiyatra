import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy - ChokhiYatra',
  description: 'Privacy Policy for ChokhiYatra - Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="py-140 position-relative z-1" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10 col-md-12">
              <div className="text-center px-3 px-md-0">
                <h1 className="fw-bold text-white mb-4" style={{ fontSize: '3rem' }}>Privacy Policy</h1>
                <p className="text-white fs-5">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-140">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-11 col-md-12">
              <div className="px-3 px-md-0">

                {/* Introduction */}
                <div className="mb-5">
                  <p className="fs-5 fw-normal">
                    At ChokhiYatra, we are committed to protecting your privacy and ensuring the security of your personal information.
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website
                    or use our services.
                  </p>
                </div>

                {/* Information We Collect */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">1. Information We Collect</h2>

                  <h3 className="fw-semibold mb-3 fs-4">1.1 Personal Information</h3>
                  <p className="mb-3">We may collect personal information that you voluntarily provide to us when you:</p>
                  <ul className="mb-4">
                    <li className="mb-2">Register for an account</li>
                    <li className="mb-2">Book a tour or service</li>
                    <li className="mb-2">Subscribe to our newsletter</li>
                    <li className="mb-2">Contact us through our website</li>
                    <li className="mb-2">Participate in surveys or promotions</li>
                  </ul>
                  <p className="mb-3">This information may include:</p>
                  <ul className="mb-4">
                    <li className="mb-2">Name and contact information (email address, phone number, mailing address)</li>
                    <li className="mb-2">Payment information (credit card details, billing address)</li>
                    <li className="mb-2">Travel preferences and requirements</li>
                    <li className="mb-2">Passport and identification details (when required for bookings)</li>
                  </ul>

                  <h3 className="fw-semibold mb-3 fs-4">1.2 Automatically Collected Information</h3>
                  <p className="mb-3">When you visit our website, we automatically collect certain information, including:</p>
                  <ul className="mb-4">
                    <li className="mb-2">IP address and device information</li>
                    <li className="mb-2">Browser type and version</li>
                    <li className="mb-2">Pages visited and time spent on pages</li>
                    <li className="mb-2">Referring website addresses</li>
                    <li className="mb-2">Cookies and similar tracking technologies</li>
                  </ul>
                </div>

                {/* How We Use Your Information */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">2. How We Use Your Information</h2>
                  <p className="mb-3">We use the information we collect for the following purposes:</p>
                  <ul className="mb-4">
                    <li className="mb-2"><strong>Service Delivery:</strong> To process bookings, manage reservations, and provide travel services</li>
                    <li className="mb-2"><strong>Communication:</strong> To send booking confirmations, updates, and respond to inquiries</li>
                    <li className="mb-2"><strong>Personalization:</strong> To customize your experience and recommend relevant travel packages</li>
                    <li className="mb-2"><strong>Marketing:</strong> To send promotional materials and newsletters (with your consent)</li>
                    <li className="mb-2"><strong>Improvement:</strong> To analyze website usage and improve our services</li>
                    <li className="mb-2"><strong>Legal Compliance:</strong> To comply with legal obligations and enforce our terms</li>
                  </ul>
                </div>

                {/* Information Sharing */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">3. Information Sharing and Disclosure</h2>
                  <p className="mb-3">We may share your information with:</p>
                  <ul className="mb-4">
                    <li className="mb-2"><strong>Service Providers:</strong> Hotels, airlines, tour operators, and other travel partners necessary to fulfill your bookings</li>
                    <li className="mb-2"><strong>Payment Processors:</strong> Secure third-party payment gateways to process transactions</li>
                    <li className="mb-2"><strong>Business Partners:</strong> Trusted partners who assist in operating our website and conducting our business</li>
                    <li className="mb-2"><strong>Legal Authorities:</strong> When required by law or to protect our rights and safety</li>
                  </ul>
                  <p className="mb-3">We do not sell, trade, or rent your personal information to third parties for marketing purposes.</p>
                </div>

                {/* Data Security */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">4. Data Security</h2>
                  <p className="mb-3">
                    We implement appropriate technical and organizational measures to protect your personal information against
                    unauthorized access, alteration, disclosure, or destruction. These measures include:
                  </p>
                  <ul className="mb-4">
                    <li className="mb-2">SSL encryption for data transmission</li>
                    <li className="mb-2">Secure servers and databases</li>
                    <li className="mb-2">Regular security audits and updates</li>
                    <li className="mb-2">Limited access to personal information by authorized personnel only</li>
                  </ul>
                  <p className="mb-3">
                    However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </div>

                {/* Cookies */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">5. Cookies and Tracking Technologies</h2>
                  <p className="mb-3">
                    We use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small files
                    stored on your device that help us:
                  </p>
                  <ul className="mb-4">
                    <li className="mb-2">Remember your preferences and settings</li>
                    <li className="mb-2">Understand how you use our website</li>
                    <li className="mb-2">Provide personalized content and recommendations</li>
                    <li className="mb-2">Analyze website traffic and performance</li>
                  </ul>
                  <p className="mb-3">
                    You can control cookie preferences through your browser settings. However, disabling cookies may affect
                    website functionality.
                  </p>
                </div>

                {/* Your Rights */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">6. Your Rights and Choices</h2>
                  <p className="mb-3">You have the right to:</p>
                  <ul className="mb-4">
                    <li className="mb-2"><strong>Access:</strong> Request access to your personal information</li>
                    <li className="mb-2"><strong>Correction:</strong> Update or correct inaccurate information</li>
                    <li className="mb-2"><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                    <li className="mb-2"><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
                    <li className="mb-2"><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
                  </ul>
                  <p className="mb-3">
                    To exercise these rights, please contact us at privacy@chokhiyatra.com.
                  </p>
                </div>

                {/* Children's Privacy */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">7. Children's Privacy</h2>
                  <p className="mb-3">
                    Our services are not intended for children under 13 years of age. We do not knowingly collect personal
                    information from children under 13. If you believe we have collected information from a child under 13,
                    please contact us immediately.
                  </p>
                </div>

                {/* Third-Party Links */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">8. Third-Party Links</h2>
                  <p className="mb-3">
                    Our website may contain links to third-party websites. We are not responsible for the privacy practices
                    of these external sites. We encourage you to review their privacy policies before providing any personal information.
                  </p>
                </div>

                {/* International Transfers */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">9. International Data Transfers</h2>
                  <p className="mb-3">
                    Your information may be transferred to and processed in countries other than your country of residence.
                    We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
                  </p>
                </div>

                {/* Changes to Policy */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">10. Changes to This Privacy Policy</h2>
                  <p className="mb-3">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                    new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this
                    Privacy Policy periodically.
                  </p>
                </div>

                {/* Contact Information */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">11. Contact Us</h2>
                  <p className="mb-3">
                    If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="bg-light p-4 rounded">
                    <p className="mb-2"><strong>ChokhiYatra</strong></p>
                    <p className="mb-2">Email: privacy@chokhiyatra.com</p>
                    <p className="mb-2">Phone: [Your Phone Number]</p>
                    <p className="mb-0">Address: [Your Business Address]</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
