import React from "react";
import Layout from "../components/Layout";

const PrivacyPolicy = () => {
    return (
      <Layout>
        <div className="min-h-screen bg-gray-50">
          {/* Header Section */}
          <header className="bg-indigo-900 text-white py-20">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
              <p className="text-xl max-w-3xl mx-auto">
                Saroj International University (SIU) is committed to protecting your privacy and personal information.
              </p>
            </div>
          </header>
  
          {/* Main Content */}
          <main className="container mx-auto px-4 py-12">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-5xl mx-auto">
              <div className="mb-12">
                <p className="text-gray-700 mb-6">
                  At Saroj International University (SIU), we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </div>
  
              {/* Policy Sections */}
              <div className="space-y-12">
                <section className="border-b border-gray-200 pb-8">
                  <h2 className="text-2xl font-semibold text-indigo-800 mb-4">1. Information We Collect</h2>
                  <p className="text-gray-700 mb-4">
                    We may collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Register for courses or programs</li>
                    <li>Apply for admission</li>
                    <li>Contact us through forms or email</li>
                    <li>Participate in surveys or events</li>
                    <li>Subscribe to our newsletters</li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    This may include your name, email address, phone number, educational background, and other relevant details.
                  </p>
                </section>
  
                <section className="border-b border-gray-200 pb-8">
                  <h2 className="text-2xl font-semibold text-indigo-800 mb-4">2. How We Use Your Information</h2>
                  <p className="text-gray-700 mb-4">
                    We use the collected information to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Process admissions and registrations</li>
                    <li>Provide educational and support services</li>
                    <li>Communicate important university updates</li>
                    <li>Improve website functionality and user experience</li>
                    <li>Comply with regulatory or legal obligations</li>
                    <li>Conduct internal research and statistical analysis</li>
                  </ul>
                </section>
  
                <section className="border-b border-gray-200 pb-8">
                  <h2 className="text-2xl font-semibold text-indigo-800 mb-4">3. Information Sharing and Disclosure</h2>
                  <p className="text-gray-700 mb-4">
                    We do not sell or lease your personal data. We may share it with:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Affiliated institutions or academic partners</li>
                    <li>Authorized third-party service providers</li>
                    <li>Government agencies, if legally required</li>
                    <li>Accreditation and regulatory bodies</li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    All third parties are required to maintain the confidentiality and security of your data.
                  </p>
                </section>
  
                <section className="border-b border-gray-200 pb-8">
                  <h2 className="text-2xl font-semibold text-indigo-800 mb-4">4. Data Security</h2>
                  <p className="text-gray-700 mb-4">
                    SIU implements stringent security measures to protect your data from unauthorized access or misuse. These include:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Encryption and firewalls</li>
                    <li>Secure data storage</li>
                    <li>Role-based access controls</li>
                    <li>Regular audits and security assessments</li>
                  </ul>
                </section>
  
                <section className="border-b border-gray-200 pb-8">
                  <h2 className="text-2xl font-semibold text-indigo-800 mb-4">5. Your Rights</h2>
                  <p className="text-gray-700 mb-4">
                    Depending on the laws applicable in your jurisdiction, you may have the right to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Request access to your data</li>
                    <li>Correct inaccurate or incomplete data</li>
                    <li>Request deletion or removal of your data</li>
                    <li>Restrict or object to data processing</li>
                    <li>Request data portability</li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    To exercise these rights, contact our Data Protection Officer at <strong>privacy@siu.edu.in</strong>.
                  </p>
                </section>
  
                <section className="border-b border-gray-200 pb-8">
                  <h2 className="text-2xl font-semibold text-indigo-800 mb-4">6. Cookies and Tracking</h2>
                  <p className="text-gray-700 mb-4">
                    Our website uses cookies and similar technologies to enhance your experience and analyze traffic. You may disable cookies via your browser settings.
                  </p>
                </section>
  
                <section className="border-b border-gray-200 pb-8">
                  <h2 className="text-2xl font-semibold text-indigo-800 mb-4">7. Changes to This Policy</h2>
                  <p className="text-gray-700">
                    SIU may update this Privacy Policy from time to time. All changes will be posted on this page with the updated revision date. Continued use of our website signifies your acceptance of any updates.
                  </p>
                </section>
              </div>
            </div>
          </main>
        </div>
      </Layout>
    );
  };
  
  export default PrivacyPolicy;
