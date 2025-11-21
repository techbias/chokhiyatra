import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';
import PageLayout from '@/components/PageLayout';
import Footer from '@/components/Footer';

export const metadata: Metadata = createMetadata({
  title: 'Refund Policy - ChokhiYatra',
  description: 'Read ChokhiYatra\'s Refund Policy to understand our refund process and timelines for tour bookings and travel services.',
  keywords: ['refund policy', 'refund process', 'booking refund', 'travel refund', 'ChokhiYatra refund'],
  url: '/refund-policy',
});

export default function RefundPolicy() {
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
                  <h1 className="fw-bold text-main-600 display-4 mb-2">Refund Policy</h1>
                  <p className="text-neutral-600 fs-6 mb-0">Last Updated: January 2025</p>
                </div>

                {/* Introduction */}
                <div className="mb-5">
                  <p className="fs-5 fw-normal">
                    At ChokhiYatra Private Limited, we strive to provide exceptional travel experiences. However, we understand that plans can change. This Refund Policy outlines the terms and conditions for refunds on bookings made through our website or services.
                  </p>
                </div>

                {/* General Refund Policy */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">General Refund Policy</h2>
                  <p className="mb-3">
                    Refunds are subject to the cancellation policy and the terms of the specific service providers (hotels, airlines, tour operators, etc.). The refund amount will depend on when the cancellation is made and the cancellation policy of the service providers involved.
                  </p>
                  <p className="mb-3">
                    All refund requests must be made in writing via email to <a href="mailto:info@chokhiyatra.com" className="text-main-600 fw-semibold">info@chokhiyatra.com</a> or by calling <a href="tel:+919413131000" className="text-main-600 fw-semibold">+91-94131-31000</a>.
                  </p>
                </div>

                {/* Tour Package Refunds */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">Tour Package Refunds</h2>

                  <h3 className="fw-semibold mb-3 fs-4">Cancellation Timeline</h3>
                  <ul className="mb-4">
                    <li className="mb-2"><strong>30+ days before departure:</strong> Full refund minus 10% administrative fee</li>
                    <li className="mb-2"><strong>15-29 days before departure:</strong> 50% of the total booking amount will be refunded</li>
                    <li className="mb-2"><strong>7-14 days before departure:</strong> 25% of the total booking amount will be refunded</li>
                    <li className="mb-2"><strong>Less than 7 days before departure:</strong> No refund will be provided</li>
                  </ul>

                  <p className="mb-3">
                    Please note that these timelines are general guidelines. Specific tour packages may have different cancellation terms based on the service providers involved. Always refer to your booking confirmation for exact cancellation terms.
                  </p>
                </div>

                {/* Flight Bookings */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">Flight Bookings</h2>
                  <p className="mb-3">
                    Flight cancellations and refunds are subject to the airline&apos;s cancellation policy. Each airline has different rules regarding refundable and non-refundable tickets.
                  </p>
                  <p className="mb-3">
                    For refundable tickets, the refund amount will be processed as per the airline&apos;s terms minus our service charges. For non-refundable tickets, no refund will be provided, though you may be eligible to reschedule based on airline policies.
                  </p>
                  <p className="mb-3">
                    In case of flight cancellations by the airline, we will assist you in processing refunds or rebooking as per the airline&apos;s policy.
                  </p>
                </div>

                {/* Hotel Bookings */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">Hotel Bookings</h2>
                  <p className="mb-3">
                    Hotel cancellations are subject to the individual hotel&apos;s cancellation policy. Some hotels offer free cancellation up to a certain date, while others may have strict no-cancellation policies.
                  </p>
                  <p className="mb-3">
                    Cancellation deadlines vary by property and booking dates. Please check your booking confirmation for the specific hotel&apos;s cancellation policy. If a refund is applicable, it will be processed minus our service charges.
                  </p>
                </div>

                {/* Service Charges */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">Service Charges</h2>
                  <p className="mb-3">
                    ChokhiYatra charges a non-refundable service fee for all bookings. This fee covers administrative costs, payment processing, and customer support. The service charge typically ranges from 5% to 10% of the booking amount and will be clearly mentioned in your booking confirmation.
                  </p>
                  <p className="mb-3">
                    Even if other portions of your booking are refundable, the service charge is non-refundable under all circumstances.
                  </p>
                </div>

                {/* Refund Processing Time */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">Refund Processing Time</h2>
                  <p className="mb-3">
                    Once we receive your cancellation request and it is approved, refunds will be processed within 15-30 business days. The actual time for the refund to reflect in your account may vary depending on your bank or payment provider.
                  </p>
                  <p className="mb-3">
                    Refunds will be processed to the original payment method used for the booking. In some cases where the original payment method is not available, we may issue a refund via bank transfer.
                  </p>
                  <p className="mb-3">
                    You will receive a confirmation email once the refund has been initiated from our end. Please contact your bank if you do not see the refund in your account within the expected timeframe.
                  </p>
                </div>

                {/* Non-Refundable Bookings */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">Non-Refundable Bookings</h2>
                  <p className="mb-3">
                    Certain promotional offers, special deals, and last-minute bookings may be marked as non-refundable. These bookings cannot be cancelled or refunded under any circumstances.
                  </p>
                  <p className="mb-3">
                    Non-refundable bookings will be clearly marked as such at the time of booking. Please read all terms carefully before confirming such bookings.
                  </p>
                </div>

                {/* Force Majeure */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">Force Majeure</h2>
                  <p className="mb-3">
                    In case of unforeseen circumstances such as natural disasters, political unrest, pandemics, or other force majeure events that prevent travel, ChokhiYatra will make reasonable efforts to provide alternative arrangements or refunds.
                  </p>
                  <p className="mb-3">
                    However, refunds in such cases are subject to the policies of the service providers (airlines, hotels, etc.) and may be limited. We strongly recommend purchasing comprehensive travel insurance to protect against such eventualities.
                  </p>
                </div>

                {/* Modifications */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">Booking Modifications</h2>
                  <p className="mb-3">
                    If you wish to modify your booking instead of cancelling it, please contact us as soon as possible. Modifications are subject to availability and may incur additional charges based on the new booking details and the policies of service providers.
                  </p>
                  <p className="mb-3">
                    Modification requests should be made at least 15 days before departure. Last-minute modification requests may not be accommodated or may incur significant charges.
                  </p>
                </div>

                {/* Disputes */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">Disputes and Complaints</h2>
                  <p className="mb-3">
                    If you have any concerns about your refund or believe there has been an error in processing, please contact our customer support team immediately. We will investigate and respond to your complaint within 7 business days.
                  </p>
                  <p className="mb-3">
                    All disputes must be raised within 30 days of the cancellation date. Disputes raised after this period may not be entertained.
                  </p>
                </div>

                {/* Changes to Policy */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">Changes to This Refund Policy</h2>
                  <p className="mb-3">
                    ChokhiYatra reserves the right to modify this Refund Policy at any time. Any changes will be posted on this page and will take effect immediately upon posting. Your continued use of our services after any changes indicates your acceptance of the modified policy.
                  </p>
                </div>

                {/* Contact Information */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">Contact Us</h2>
                  <p className="mb-3">
                    For any questions or to initiate a refund request, please contact us:
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
