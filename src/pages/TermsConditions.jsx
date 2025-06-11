import React from 'react';
import  Layout  from '../components/Layout';

const TermsAndConditions = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <header className="bg-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Please read these Terms and Conditions carefully before using our website or services.
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-5xl mx-auto">
            <div className="mb-12">
              <p className="text-gray-700 mb-6">
                Welcome to Saroj International University (SIU). By accessing or using our website, services, or facilities, you agree to be bound by these Terms and Conditions.
              </p>
              <p className="text-gray-700">
                These Terms apply to all visitors, students, faculty, and anyone else who accesses or uses our services.
              </p>
            </div>

            {/* Terms Sections */}
            <div className="space-y-12">
              <section className="border-b border-gray-200 pb-8">
                <h2 className="text-2xl font-semibold text-indigo-800 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700">
                  By accessing or using any part of our website or services, you agree to be bound by these Terms. If you do not agree to all the terms and conditions, then you may not access the website or use any services.
                </p>
              </section>

              <section className="border-b border-gray-200 pb-8">
                <h2 className="text-2xl font-semibold text-indigo-800 mb-4">2. Changes to Terms</h2>
                <p className="text-gray-700">
                  We reserve the right to modify these Terms at any time. We will provide notice of any changes by posting the updated Terms on our website with a new effective date. Your continued use of our services after such changes constitutes your acceptance of the new Terms.
                </p>
              </section>

              <section className="border-b border-gray-200 pb-8">
                <h2 className="text-2xl font-semibold text-indigo-800 mb-4">3. Use of Website</h2>
                <p className="text-gray-700 mb-4">You agree to use our website and services only for lawful purposes and in accordance with these Terms. Specifically, you agree not to:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Use the website in any way that violates any applicable law or regulation</li>
                  <li>Engage in any conduct that restricts or inhibits anyone's use of the website</li>
                  <li>Attempt to gain unauthorized access to any portion of the website</li>
                  <li>Introduce any viruses or other harmful material</li>
                  <li>Use the website to send unsolicited communications</li>
                </ul>
              </section>

              <section className="border-b border-gray-200 pb-8">
                <h2 className="text-2xl font-semibold text-indigo-800 mb-4">4. Intellectual Property</h2>
                <p className="text-gray-700 mb-4">
                  All content on this website, including text, graphics, logos, images, and software, is the property of Saroj International University (SIU) or its content suppliers and is protected by copyright and other intellectual property laws.
                </p>
                <p className="text-gray-700">
                  You may not reproduce, distribute, modify, create derivative works of, publicly display, or otherwise exploit any content without our express written permission.
                </p>
              </section>

              <section className="border-b border-gray-200 pb-8">
                <h2 className="text-2xl font-semibold text-indigo-800 mb-4">5. Student Conduct</h2>
                <p className="text-gray-700 mb-4">
                  Students enrolled at Saroj International University (SIU) must adhere to additional policies outlined in the Student Handbook, including:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Academic integrity policies</li>
                  <li>Code of conduct</li>
                  <li>Attendance requirements</li>
                  <li>Examination rules</li>
                  <li>Campus safety regulations</li>
                </ul>
              </section>

              <section className="border-b border-gray-200 pb-8">
                <h2 className="text-2xl font-semibold text-indigo-800 mb-4">6. Fees and Payments</h2>
                <p className="text-gray-700 mb-4">
                  All fees for courses and services are due as specified in the admission offer or invoice. Late payments may result in additional charges or suspension of services.
                </p>
                <p className="text-gray-700">
                  Refund policies are outlined in our Fee Policy document and vary by program. Please refer to your specific program documentation for details.
                </p>
              </section>

              <section className="border-b border-gray-200 pb-8">
                <h2 className="text-2xl font-semibold text-indigo-800 mb-4">7. Disclaimer of Warranties</h2>
                <p className="text-gray-700 mb-4">
                  The website and services are provided "as is" without warranty of any kind. We do not guarantee that:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>The website will be available at all times</li>
                  <li>The website will be error-free or secure</li>
                  <li>The results obtained from using the website will be accurate or reliable</li>
                </ul>
              </section>

              <section className="border-b border-gray-200 pb-8">
                <h2 className="text-2xl font-semibold text-indigo-800 mb-4">8. Limitation of Liability</h2>
                <p className="text-gray-700">
                  To the maximum extent permitted by law, Saroj International University (SIU) shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of the website or services.
                </p>
              </section>

              <section className="border-b border-gray-200 pb-8">
                <h2 className="text-2xl font-semibold text-indigo-800 mb-4">9. Governing Law</h2>
                <p className="text-gray-700">
                  These Terms shall be governed by and construed in accordance with the laws of India. Any disputes relating to these Terms will be subject to the exclusive jurisdiction of the courts of Uttar Pradesh.
                </p>
              </section>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default TermsAndConditions;
