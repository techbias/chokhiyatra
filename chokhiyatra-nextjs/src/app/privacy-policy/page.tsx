import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';
import PageLayout from '@/components/PageLayout';
import Footer from '@/components/Footer';

export const metadata: Metadata = createMetadata({
  title: 'Privacy Policy - ChokhiYatra',
  description: 'Read ChokhiYatra\'s Privacy Policy to understand how we collect, use, and protect your personal information when you use our travel services.',
  keywords: ['privacy policy', 'data protection', 'personal information', 'ChokhiYatra privacy', 'travel data security'],
  url: '/privacy-policy',
});

export default function PrivacyPolicy() {
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
                  <h1 className="fw-bold text-main-600 display-4 mb-2">Privacy Policy</h1>
                  <p className="text-neutral-600 fs-6 mb-0">Last Updated: January 2025</p>
                </div>

                {/* Introduction */}
                <div className="mb-5">
                  <p className="fs-5 fw-normal">
                    Your privacy is important to us. It is CHOKHIYATRA PRIVATE LIMITED&apos;s policy to respect your privacy regarding any information we may collect from you across our website, www.chokhiyatra.com, and other sites we own and operate.
                  </p>
                  <p className="fs-5 fw-normal mt-3">
                    We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we&apos;re collecting it and how it will be used.
                  </p>
                  <p className="fs-5 fw-normal mt-3">
                    We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we&apos;ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure, copying, use or modification.
                  </p>
                  <p className="fs-5 fw-normal mt-3">
                    We don&apos;t share any personally identifying information publicly or with third-parties, except when required to by law.
                  </p>
                  <p className="fs-5 fw-normal mt-3">
                    Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.
                  </p>
                  <p className="fs-5 fw-normal mt-3">
                    You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.
                  </p>
                  <p className="fs-5 fw-normal mt-3">
                    Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.
                  </p>
                </div>

                {/* Contact Information */}
                <div className="mb-5">
                  <h2 className="fw-bold mb-4 text-main-600">Contact Us</h2>
                  <p className="mb-3">
                    If you have any questions or concerns about this Privacy Policy, please contact us:
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
