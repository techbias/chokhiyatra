import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';
import PageLayout from '@/components/PageLayout';
import Footer from '@/components/Footer';

export const metadata: Metadata = createMetadata({
  title: 'Terms & Conditions - ChokhiYatra',
  description: 'Read the Terms and Conditions for using ChokhiYatra travel services. Understand your rights and responsibilities when booking with us.',
  keywords: ['terms and conditions', 'terms of service', 'booking terms', 'travel terms', 'ChokhiYatra terms'],
  url: '/terms-conditions',
});

export default function TermsConditions() {
  return (
    <PageLayout>
      {/* Content Section */}
      <section className="py-140">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-11 col-md-12">
              <div className="px-3 px-md-0">

                {/* Page Title */}
                <div className="text-center mb-5 pb-4 border-bottom">
                  <h1 className="fw-bold text-main-600 display-4 mb-2">Terms & Conditions</h1>
                  <p className="text-neutral-600 fs-6 mb-0">Last Updated: January 2025</p>
                </div>

                {/* Introduction */}
                <div className="mb-5">
                  <p className="fs-5 fw-normal">
                    This web site (the &quot;Site&quot;) is published and maintained by CHOKHIYATRA PRIVATE LIMITED, herein after referred to as &quot;the Company&quot;. By using this Site, you agree to follow and be bound by the following terms and conditions (&quot;Terms of Use&quot;) concerning your use of the Site. The Company may revise the Terms of Use at any time without notice to you. Areas of this Site may have different terms of use posted. If there is a conflict between the Terms of Use and terms of use posted for a specific area of the Site, the latter shall have precedence with respect to your use of that area of the Site. The Company may revise the policies and terms mentioned in this Site at any time by updating this page. You should visit this page periodically to review the terms and policies because they are binding on you.
                  </p>
                </div>

                {/* Use of Content */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">Use of the Site and the Content</h2>
                  <p className="mb-3">
                    The content on this website (including the text, graphics, logos, icons, images, audio, video, software, and other material) is the property of the Company and is protected by international copyright and other intellectual property laws.
                  </p>
                  <p className="mb-3">
                    You may not modify, publish, transmit, participate in the transfer or sale, create derivative works, or in any way exploit, any of the content, in whole or in part without the prior written consent of the Company. You may download copyrighted material for your personal use only. Except as otherwise expressly permitted under copyright law, no copying, redistribution, retransmission, publication or commercial exploitation of downloaded material will be permitted without the express permission of the Company and the copyright owner. In the event of any permitted copying, redistribution or publication of copyrighted material, no changes in or deletion of author attribution, trademark legend or copyright notice shall be made.
                  </p>
                  <p className="mb-3">
                    You acknowledge that you do not acquire any ownership rights by downloading copyrighted material.
                  </p>
                </div>

                {/* Bookings */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">Bookings and Payments</h2>
                  <p className="mb-3">
                    All bookings made through the Site are subject to availability and confirmation by the Company. We reserve the right to refuse or cancel any booking at our sole discretion. Payment terms will be provided during the booking process.
                  </p>
                  <p className="mb-3">
                    All prices listed on the Site are in Indian Rupees (INR) unless otherwise specified and are subject to change without prior notice. The Company reserves the right to correct any pricing errors on our Site or on pending reservations made under an incorrect price.
                  </p>
                  <p className="mb-3">
                    Full payment or deposit as specified is required to confirm your booking. The Company accepts various payment methods including bank transfers, credit/debit cards, and digital payment platforms. Payment processing is handled securely through authorized payment gateways.
                  </p>
                </div>

                {/* Travel Documents */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">Travel Documents and Requirements</h2>
                  <p className="mb-3">
                    It is your responsibility to ensure that you have valid passports, visas, vaccinations, and other documents required for your travel. The Company is not responsible for any issues arising from incomplete or incorrect documentation.
                  </p>
                  <p className="mb-3">
                    You must verify all travel requirements with the relevant embassies and authorities. The Company will provide general guidance but cannot be held liable for any immigration or customs issues.
                  </p>
                </div>

                {/* Health and Safety */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">Health and Safety</h2>
                  <p className="mb-3">
                    You are responsible for ensuring that you meet all health requirements for your trip and obtaining all recommended vaccinations. The Company strongly recommends that you consult with a healthcare professional before traveling.
                  </p>
                  <p className="mb-3">
                    While we take reasonable care in selecting service providers, the Company is not liable for any injuries, illnesses, or losses that may occur during your trip. We strongly recommend purchasing comprehensive travel insurance.
                  </p>
                </div>

                {/* Liability */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">Limitation of Liability</h2>
                  <p className="mb-3">
                    The Company acts as an agent for service providers such as hotels, airlines, tour operators, and transportation companies. We are not responsible for any acts, errors, omissions, representations, warranties, breaches, or negligence of any such suppliers or for any personal injuries, death, property damage, or other damages or expenses resulting therefrom.
                  </p>
                  <p className="mb-3">
                    The Company shall not be liable for any direct, indirect, consequential, incidental, special, or punitive damages arising out of your use of this Site or any services booked through the Site.
                  </p>
                  <p className="mb-3">
                    The Company is not responsible for delays, cancellations, overbooking, strikes, force majeure events, or other causes beyond our direct control. In such events, we will make reasonable efforts to provide alternative arrangements or refunds as per our cancellation policy.
                  </p>
                </div>

                {/* User Conduct */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">User Conduct</h2>
                  <p className="mb-3">You agree not to use the Site to:</p>
                  <ul className="mb-4">
                    <li className="mb-2">Violate any applicable laws or regulations</li>
                    <li className="mb-2">Infringe upon the rights of others</li>
                    <li className="mb-2">Transmit any harmful or malicious code</li>
                    <li className="mb-2">Attempt to gain unauthorized access to any portion of the Site</li>
                    <li className="mb-2">Interfere with or disrupt the Site or servers connected to the Site</li>
                    <li className="mb-2">Post or transmit any unlawful, threatening, abusive, defamatory, obscene, or otherwise objectionable content</li>
                  </ul>
                </div>

                {/* Privacy */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">Privacy</h2>
                  <p className="mb-3">
                    Your use of this Site is also governed by our Privacy Policy. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.
                  </p>
                </div>

                {/* Indemnification */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">Indemnification</h2>
                  <p className="mb-3">
                    You agree to indemnify, defend, and hold harmless the Company, its officers, directors, employees, agents, and suppliers from any claim, demand, loss, or damages, including reasonable attorneys&apos; fees, arising out of your use of the Site or your breach of these Terms of Use.
                  </p>
                </div>

                {/* Governing Law */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">Governing Law and Jurisdiction</h2>
                  <p className="mb-3">
                    These Terms of Use shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these Terms of Use shall be subject to the exclusive jurisdiction of the courts in Jaipur, Rajasthan, India.
                  </p>
                </div>

                {/* Modifications */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">Modifications to Service</h2>
                  <p className="mb-3">
                    The Company reserves the right to modify or discontinue, temporarily or permanently, the Site or any service offered on the Site with or without notice. The Company shall not be liable to you or any third party for any modification, suspension, or discontinuance of the Site or service.
                  </p>
                </div>

                {/* Severability */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">Severability</h2>
                  <p className="mb-3">
                    If any provision of these Terms of Use is found to be invalid or unenforceable, the remaining provisions shall continue to be valid and enforceable to the fullest extent permitted by law.
                  </p>
                </div>

                {/* Contact Information */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">Contact Information</h2>
                  <p className="mb-3">
                    If you have any questions about these Terms & Conditions, please contact us:
                  </p>
                  <div className="bg-light p-4 rounded">
                    <p className="mb-2"><strong>ChokhiYatra Private Limited</strong></p>
                    <p className="mb-2">Email: <a href="mailto:info@chokhiyatra.com" className="text-main-600 fw-semibold">info@chokhiyatra.com</a></p>
                    <p className="mb-0">Phone: <a href="tel:+919413131000" className="text-main-600 fw-semibold">+91-94131-31000</a></p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
