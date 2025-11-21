import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms of Service - ChokhiYatra',
  description: 'Terms of Service for ChokhiYatra - Read our terms and conditions for using our travel services.',
};

export default function TermsOfService() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="py-140 position-relative z-1" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10 col-md-12">
              <div className="text-center px-3 px-md-0">
                <h1 className="fw-bold text-white mb-4" style={{ fontSize: '3rem' }}>Terms of Service</h1>
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
                    Welcome to ChokhiYatra. These Terms of Service ("Terms") govern your use of our website and services.
                    By accessing or using our services, you agree to be bound by these Terms. Please read them carefully.
                  </p>
                </div>

                {/* Acceptance of Terms */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">1. Acceptance of Terms</h2>
                  <p className="mb-3">
                    By accessing and using ChokhiYatra's website and services, you accept and agree to be bound by these Terms
                    and our Privacy Policy. If you do not agree to these Terms, please do not use our services.
                  </p>
                  <p className="mb-3">
                    We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting
                    on our website. Your continued use of our services constitutes acceptance of the modified Terms.
                  </p>
                </div>

                {/* Services */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">2. Our Services</h2>
                  <p className="mb-3">ChokhiYatra provides travel-related services including:</p>
                  <ul className="mb-4">
                    <li className="mb-2">Tour package bookings</li>
                    <li className="mb-2">Hotel reservations</li>
                    <li className="mb-2">Flight bookings</li>
                    <li className="mb-2">Travel consultation and planning</li>
                    <li className="mb-2">Visa assistance</li>
                    <li className="mb-2">Travel insurance arrangements</li>
                  </ul>
                  <p className="mb-3">
                    We act as an intermediary between you and third-party service providers (hotels, airlines, tour operators).
                    We are not responsible for the quality, safety, or legality of services provided by third parties.
                  </p>
                </div>

                {/* Booking and Payment */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">3. Booking and Payment</h2>

                  <h3 className="fw-semibold mb-3 fs-4">3.1 Booking Process</h3>
                  <ul className="mb-4">
                    <li className="mb-2">All bookings are subject to availability and confirmation</li>
                    <li className="mb-2">You must provide accurate and complete information when making a booking</li>
                    <li className="mb-2">A booking is confirmed only when you receive a confirmation email from us</li>
                    <li className="mb-2">We reserve the right to refuse or cancel any booking at our discretion</li>
                  </ul>

                  <h3 className="fw-semibold mb-3 fs-4">3.2 Payment Terms</h3>
                  <ul className="mb-4">
                    <li className="mb-2">Payment must be made in full at the time of booking unless otherwise agreed</li>
                    <li className="mb-2">We accept major credit cards, debit cards, and bank transfers</li>
                    <li className="mb-2">All prices are quoted in [Currency] and include applicable taxes unless stated otherwise</li>
                    <li className="mb-2">Payment processing is handled through secure third-party payment gateways</li>
                    <li className="mb-2">Additional charges may apply for special requests or optional services</li>
                  </ul>

                  <h3 className="fw-semibold mb-3 fs-4">3.3 Pricing</h3>
                  <p className="mb-3">
                    Prices are subject to change without notice until booking is confirmed. We reserve the right to correct
                    pricing errors on our website or in bookings. In case of a significant price error, we will contact you
                    to confirm whether you wish to proceed with the booking at the correct price.
                  </p>
                </div>

                {/* Cancellation and Refunds */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">4. Cancellation and Refund Policy</h2>

                  <h3 className="fw-semibold mb-3 fs-4">4.1 Cancellation by Customer</h3>
                  <ul className="mb-4">
                    <li className="mb-2">Cancellations must be made in writing via email to bookings@chokhiyatra.com</li>
                    <li className="mb-2">Cancellation charges vary depending on the service provider and timing of cancellation</li>
                    <li className="mb-2">Standard cancellation charges:
                      <ul className="mt-2">
                        <li>More than 30 days before departure: 10% of total booking amount</li>
                        <li>15-30 days before departure: 25% of total booking amount</li>
                        <li>7-14 days before departure: 50% of total booking amount</li>
                        <li>Less than 7 days before departure: 100% of total booking amount (no refund)</li>
                      </ul>
                    </li>
                    <li className="mb-2">Peak season and special packages may have different cancellation terms</li>
                  </ul>

                  <h3 className="fw-semibold mb-3 fs-4">4.2 Cancellation by ChokhiYatra</h3>
                  <p className="mb-3">
                    We reserve the right to cancel bookings due to unforeseen circumstances, including but not limited to
                    natural disasters, political unrest, or insufficient bookings. In such cases, we will offer:
                  </p>
                  <ul className="mb-4">
                    <li className="mb-2">Full refund of amounts paid, or</li>
                    <li className="mb-2">Alternative travel arrangements of equal or greater value</li>
                  </ul>

                  <h3 className="fw-semibold mb-3 fs-4">4.3 Refund Processing</h3>
                  <p className="mb-3">
                    Approved refunds will be processed within 14-21 business days from the date of cancellation approval.
                    Refunds will be credited to the original payment method used for booking.
                  </p>
                </div>

                {/* Travel Documents */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">5. Travel Documents and Requirements</h2>
                  <ul className="mb-4">
                    <li className="mb-2">You are responsible for obtaining valid passports, visas, and other required travel documents</li>
                    <li className="mb-2">Ensure your passport is valid for at least 6 months beyond your travel dates</li>
                    <li className="mb-2">Check visa requirements for your destination countries</li>
                    <li className="mb-2">Obtain necessary vaccinations and health certificates</li>
                    <li className="mb-2">We provide visa assistance but do not guarantee visa approval</li>
                    <li className="mb-2">Cancellations due to visa rejection are subject to standard cancellation charges</li>
                  </ul>
                </div>

                {/* Travel Insurance */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">6. Travel Insurance</h2>
                  <p className="mb-3">
                    We strongly recommend purchasing comprehensive travel insurance covering:
                  </p>
                  <ul className="mb-4">
                    <li className="mb-2">Trip cancellation and interruption</li>
                    <li className="mb-2">Medical expenses and emergency evacuation</li>
                    <li className="mb-2">Lost or delayed baggage</li>
                    <li className="mb-2">Personal liability</li>
                  </ul>
                  <p className="mb-3">
                    We can assist in arranging travel insurance but are not responsible for any claims or coverage disputes.
                  </p>
                </div>

                {/* Customer Responsibilities */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">7. Customer Responsibilities</h2>
                  <p className="mb-3">As a customer, you agree to:</p>
                  <ul className="mb-4">
                    <li className="mb-2">Provide accurate and complete information</li>
                    <li className="mb-2">Arrive at designated meeting points on time</li>
                    <li className="mb-2">Comply with laws and regulations of destinations visited</li>
                    <li className="mb-2">Respect local customs and cultures</li>
                    <li className="mb-2">Follow instructions from tour guides and service providers</li>
                    <li className="mb-2">Behave responsibly and not endanger yourself or others</li>
                    <li className="mb-2">Cover costs for any damages you cause to property or services</li>
                  </ul>
                </div>

                {/* Liability and Disclaimer */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">8. Limitation of Liability</h2>
                  <p className="mb-3">
                    ChokhiYatra acts as an intermediary and is not liable for:
                  </p>
                  <ul className="mb-4">
                    <li className="mb-2">Acts or omissions of third-party service providers</li>
                    <li className="mb-2">Delays, cancellations, or changes to travel arrangements due to circumstances beyond our control</li>
                    <li className="mb-2">Loss, damage, or injury during travel</li>
                    <li className="mb-2">Force majeure events (natural disasters, strikes, wars, pandemics, etc.)</li>
                    <li className="mb-2">Personal illness or injury not caused by our negligence</li>
                  </ul>
                  <p className="mb-3">
                    Our total liability for any claims arising from our services shall not exceed the total amount paid
                    by you for the specific booking in question.
                  </p>
                </div>

                {/* Force Majeure */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">9. Force Majeure</h2>
                  <p className="mb-3">
                    We are not liable for failure to perform our obligations due to force majeure events including but not
                    limited to: natural disasters, war, terrorism, civil unrest, strikes, pandemics, government actions,
                    or any other event beyond our reasonable control.
                  </p>
                </div>

                {/* Intellectual Property */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">10. Intellectual Property</h2>
                  <p className="mb-3">
                    All content on our website, including text, graphics, logos, images, and software, is the property of
                    ChokhiYatra and protected by copyright and other intellectual property laws. You may not:
                  </p>
                  <ul className="mb-4">
                    <li className="mb-2">Copy, reproduce, or distribute our content without permission</li>
                    <li className="mb-2">Use our trademarks or branding without authorization</li>
                    <li className="mb-2">Modify or create derivative works from our content</li>
                  </ul>
                </div>

                {/* User Conduct */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">11. Prohibited Activities</h2>
                  <p className="mb-3">When using our services, you agree not to:</p>
                  <ul className="mb-4">
                    <li className="mb-2">Violate any applicable laws or regulations</li>
                    <li className="mb-2">Provide false or misleading information</li>
                    <li className="mb-2">Impersonate any person or entity</li>
                    <li className="mb-2">Interfere with or disrupt our website or services</li>
                    <li className="mb-2">Attempt to gain unauthorized access to our systems</li>
                    <li className="mb-2">Use our services for any illegal or fraudulent purpose</li>
                  </ul>
                </div>

                {/* Privacy */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">12. Privacy</h2>
                  <p className="mb-3">
                    Your use of our services is also governed by our Privacy Policy, which explains how we collect, use,
                    and protect your personal information. By using our services, you consent to our data practices as
                    described in the Privacy Policy.
                  </p>
                </div>

                {/* Dispute Resolution */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">13. Dispute Resolution</h2>
                  <p className="mb-3">
                    Any disputes arising from these Terms or our services shall be resolved through:
                  </p>
                  <ul className="mb-4">
                    <li className="mb-2">Good faith negotiations between the parties</li>
                    <li className="mb-2">Mediation, if negotiations fail</li>
                    <li className="mb-2">Binding arbitration in accordance with [Jurisdiction] law</li>
                  </ul>
                  <p className="mb-3">
                    These Terms shall be governed by the laws of [Your Jurisdiction], without regard to conflict of law principles.
                  </p>
                </div>

                {/* Severability */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">14. Severability</h2>
                  <p className="mb-3">
                    If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall
                    continue in full force and effect.
                  </p>
                </div>

                {/* Contact Information */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">15. Contact Us</h2>
                  <p className="mb-3">
                    If you have any questions or concerns about these Terms of Service, please contact us:
                  </p>
                  <div className="bg-light p-4 rounded">
                    <p className="mb-2"><strong>ChokhiYatra</strong></p>
                    <p className="mb-2">Email: support@chokhiyatra.com</p>
                    <p className="mb-2">Phone: [Your Phone Number]</p>
                    <p className="mb-0">Address: [Your Business Address]</p>
                  </div>
                </div>

                {/* Acknowledgment */}
                <div className="mb-5 bg-main-600 text-white p-4 rounded">
                  <p className="mb-0">
                    By using ChokhiYatra's services, you acknowledge that you have read, understood, and agree to be bound
                    by these Terms of Service.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
