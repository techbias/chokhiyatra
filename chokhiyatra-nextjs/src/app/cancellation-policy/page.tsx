import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';
import PageLayout from '@/components/PageLayout';
import Footer from '@/components/Footer';

export const metadata: Metadata = createMetadata({
  title: 'Cancellation Policy - ChokhiYatra',
  description: 'Read ChokhiYatra\'s Cancellation Policy to understand the terms and conditions for cancelling your tour bookings and travel services.',
  keywords: ['cancellation policy', 'booking cancellation', 'cancel tour', 'travel cancellation', 'ChokhiYatra cancellation'],
  url: '/cancellation-policy',
});

export default function CancellationPolicy() {
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
                  <h1 className="fw-bold text-main-600 display-4 mb-2">Cancellation Policy</h1>
                  <p className="text-neutral-600 fs-6 mb-0">Last Updated: January 2025</p>
                </div>

                {/* Introduction */}
                <div className="mb-5">
                  <p className="fs-5 fw-normal">
                    We understand that travel plans can change unexpectedly. This Cancellation Policy outlines the terms and conditions for cancelling bookings made through ChokhiYatra Private Limited. Please read this policy carefully before making a booking.
                  </p>
                </div>

                {/* General Policy */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">General Cancellation Policy</h2>
                  <p className="mb-3">
                    All cancellation requests must be submitted in writing via email to <a href="mailto:info@chokhiyatra.com" className="text-main-600 fw-semibold">info@chokhiyatra.com</a> or by calling our customer support at <a href="tel:+919413131000" className="text-main-600 fw-semibold">+91-94131-31000</a>. Verbal cancellations are not accepted.
                  </p>
                  <p className="mb-3">
                    The cancellation will be effective from the date we receive your written cancellation request. Cancellation charges will be calculated based on the date we receive your request, not the date you decide to cancel.
                  </p>
                  <p className="mb-3">
                    Please ensure you receive a cancellation confirmation from us via email. Without this confirmation, the cancellation is not considered complete.
                  </p>
                </div>

                {/* Tour Package Cancellation */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">Tour Package Cancellation</h2>

                  <h3 className="fw-semibold mb-3 fs-4">Standard Cancellation Charges</h3>
                  <div className="table-responsive mb-4">
                    <table className="table table-bordered">
                      <thead className="bg-light">
                        <tr>
                          <th className="fw-bold">Time of Cancellation</th>
                          <th className="fw-bold">Cancellation Charges</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>30+ days before departure</td>
                          <td>10% of total booking amount or ₹2,000 (whichever is higher)</td>
                        </tr>
                        <tr>
                          <td>15-29 days before departure</td>
                          <td>50% of total booking amount</td>
                        </tr>
                        <tr>
                          <td>7-14 days before departure</td>
                          <td>75% of total booking amount</td>
                        </tr>
                        <tr>
                          <td>Less than 7 days before departure</td>
                          <td>100% of total booking amount (No refund)</td>
                        </tr>
                        <tr>
                          <td>No-show or departure day cancellation</td>
                          <td>100% of total booking amount (No refund)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="mb-3">
                    These are standard cancellation charges for tour packages. However, specific packages may have different cancellation terms based on the service providers involved. Always refer to your booking confirmation for exact cancellation terms applicable to your booking.
                  </p>
                </div>

                {/* Flight Cancellation */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">Flight Booking Cancellation</h2>
                  <p className="mb-3">
                    Flight cancellations are subject to the individual airline&apos;s cancellation policy. Each airline has its own rules regarding cancellation fees and timelines.
                  </p>

                  <h3 className="fw-semibold mb-3 fs-4">Domestic Flights</h3>
                  <ul className="mb-4">
                    <li className="mb-2"><strong>Refundable Tickets:</strong> Cancellation charges as per airline policy plus our service fee</li>
                    <li className="mb-2"><strong>Non-Refundable Tickets:</strong> No refund, but date change may be possible (subject to airline policy and charges)</li>
                    <li className="mb-2"><strong>Cancellation by Airline:</strong> Full refund or rebooking as per airline policy</li>
                  </ul>

                  <h3 className="fw-semibold mb-3 fs-4">International Flights</h3>
                  <ul className="mb-4">
                    <li className="mb-2">Cancellation policies vary significantly by airline and ticket class</li>
                    <li className="mb-2">Economy tickets may be non-refundable or have high cancellation fees</li>
                    <li className="mb-2">Business and First-class tickets typically have more flexible cancellation terms</li>
                    <li className="mb-2">Special promotional fares are usually non-refundable</li>
                  </ul>

                  <p className="mb-3">
                    ChokhiYatra will charge a service fee of ₹500-₹1,500 per passenger for processing flight cancellations, in addition to the airline&apos;s cancellation charges.
                  </p>
                </div>

                {/* Hotel Cancellation */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">Hotel Booking Cancellation</h2>
                  <p className="mb-3">
                    Hotel cancellation policies vary by property and booking type. Free cancellation deadlines typically range from 24 hours to 7 days before check-in, depending on the hotel and room rate booked.
                  </p>

                  <h3 className="fw-semibold mb-3 fs-4">Common Hotel Cancellation Scenarios</h3>
                  <ul className="mb-4">
                    <li className="mb-2"><strong>Free Cancellation:</strong> Some hotels offer free cancellation up to a specified date (usually 24-72 hours before check-in)</li>
                    <li className="mb-2"><strong>Partial Penalty:</strong> Cancellations after the free cancellation period may incur a penalty of one night&apos;s stay</li>
                    <li className="mb-2"><strong>Non-Refundable Rates:</strong> Special rates or promotional offers may be non-refundable</li>
                    <li className="mb-2"><strong>Peak Season:</strong> Hotels may have stricter cancellation policies during peak travel seasons</li>
                  </ul>

                  <p className="mb-3">
                    Always check your hotel booking confirmation for the specific cancellation policy. ChokhiYatra charges a service fee of ₹300-₹1,000 per room for processing hotel cancellations.
                  </p>
                </div>

                {/* Group Bookings */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">Group Bookings</h2>
                  <p className="mb-3">
                    Group bookings (10+ passengers) have special cancellation terms:
                  </p>
                  <ul className="mb-4">
                    <li className="mb-2">Group bookings typically require higher advance deposits</li>
                    <li className="mb-2">Cancellation charges may be higher than individual bookings</li>
                    <li className="mb-2">Partial cancellations (reducing group size) may also incur charges</li>
                    <li className="mb-2">Minimum group size requirements may apply; falling below this may result in rate adjustments or cancellation</li>
                  </ul>
                  <p className="mb-3">
                    Group booking cancellation terms will be clearly specified in your group booking agreement.
                  </p>
                </div>

                {/* Special Circumstances */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">Special Circumstances</h2>

                  <h3 className="fw-semibold mb-3 fs-4">Medical Emergencies</h3>
                  <p className="mb-3">
                    In case of genuine medical emergencies preventing travel, we may consider special cancellation terms on a case-by-case basis. Valid medical documentation from a registered medical practitioner will be required.
                  </p>

                  <h3 className="fw-semibold mb-3 fs-4">Force Majeure</h3>
                  <p className="mb-3">
                    In case of events beyond our control (natural disasters, political unrest, pandemics, government travel restrictions, etc.), ChokhiYatra will work with you to reschedule your trip or process refunds as per service provider policies.
                  </p>

                  <h3 className="fw-semibold mb-3 fs-4">Death in Family</h3>
                  <p className="mb-3">
                    In the unfortunate event of death in the immediate family, we may offer flexible cancellation terms. Valid documentation such as a death certificate will be required.
                  </p>

                  <p className="mb-3">
                    Please note that even in special circumstances, we are bound by the cancellation policies of our service providers (airlines, hotels, etc.), and full refunds may not always be possible.
                  </p>
                </div>

                {/* Travel Insurance */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">Travel Insurance</h2>
                  <p className="mb-3">
                    We strongly recommend purchasing comprehensive travel insurance that covers trip cancellations, medical emergencies, and other unforeseen circumstances. Travel insurance can protect you from significant financial loss if you need to cancel your trip for covered reasons.
                  </p>
                  <p className="mb-3">
                    ChokhiYatra can assist you in obtaining suitable travel insurance coverage. Please inquire about insurance options when making your booking.
                  </p>
                </div>

                {/* Partial Cancellation */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">Partial Cancellation</h2>
                  <p className="mb-3">
                    If you wish to cancel only a portion of your booking (for example, one passenger from a multi-passenger booking or certain services from a package), cancellation charges will apply to the cancelled portion as per the applicable policy.
                  </p>
                  <p className="mb-3">
                    Partial cancellations may also result in price adjustments to the remaining booking, as group rates or package discounts may no longer apply.
                  </p>
                </div>

                {/* Cancellation Process */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">How to Cancel Your Booking</h2>
                  <ol className="mb-4">
                    <li className="mb-2">Contact us via email at <a href="mailto:info@chokhiyatra.com" className="text-main-600 fw-semibold">info@chokhiyatra.com</a> or call <a href="tel:+919413131000" className="text-main-600 fw-semibold">+91-94131-31000</a></li>
                    <li className="mb-2">Provide your booking reference number and passenger details</li>
                    <li className="mb-2">Submit a written cancellation request with your reason for cancellation</li>
                    <li className="mb-2">We will review your request and inform you of applicable cancellation charges</li>
                    <li className="mb-2">Once you confirm the cancellation, we will process it and send you a cancellation confirmation</li>
                    <li className="mb-2">Refunds, if applicable, will be processed as per our Refund Policy</li>
                  </ol>
                </div>

                {/* No-Show Policy */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">No-Show Policy</h2>
                  <p className="mb-3">
                    If you fail to show up for your booked services without prior cancellation, it will be treated as a no-show. In case of a no-show:
                  </p>
                  <ul className="mb-4">
                    <li className="mb-2">100% of the booking amount will be forfeited</li>
                    <li className="mb-2">No refund will be provided</li>
                    <li className="mb-2">Remaining services may be cancelled by service providers</li>
                  </ul>
                  <p className="mb-3">
                    Always inform us as soon as possible if you cannot make your booking, even if it&apos;s past the cancellation deadline. We may be able to assist with rebooking or other alternatives.
                  </p>
                </div>

                {/* Changes to Policy */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">Changes to This Policy</h2>
                  <p className="mb-3">
                    ChokhiYatra reserves the right to modify this Cancellation Policy at any time. Changes will be posted on this page and take effect immediately. However, bookings made before policy changes will be governed by the policy in effect at the time of booking.
                  </p>
                </div>

                {/* Contact Information */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">Contact Us</h2>
                  <p className="mb-3">
                    For cancellation requests or questions about this policy, please contact us:
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

      <Footer />
    </PageLayout>
  );
}
