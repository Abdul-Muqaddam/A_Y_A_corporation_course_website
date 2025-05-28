import React from "react";
import Header from "./header";
import Footer from "./footer";

const TermsAndCondition = () => {
  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-center">
          Terms and Conditions
        </h1>
        <p className="text-sm text-gray-500 text-center mb-8">
          Last updated: 30/5/2025
        </p>
        <div className="space-y-6 text-gray-700 text-base leading-relaxed">
          <p>
            Welcome to Aya Corporation Course Website. By accessing or using our website and services, you agree to be bound by the following terms and conditions. Please read them carefully.
          </p>

          <div>
            <h2 className="text-lg font-semibold mb-1">1. Account Creation</h2>
            <p>
              To access and purchase courses on our website, you must create an account by providing accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-1">2. Course Purchases and Access</h2>
            <p>
              All courses offered on this website are created and owned solely by Aya Corporation. Upon purchase, you will gain personal, non-transferable access to the course content for your own learning and use.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-1">3. Refund Policy</h2>
            <p>
              We offer a refund on courses only if the request is made within <strong>7 days</strong> from the date of purchase. To request a refund, please contact us with your purchase details. Refunds after 7 days will not be accepted.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-1">4. Use Restrictions</h2>
            <p>
              Users are strictly prohibited from reselling, redistributing, or sharing course content with others. All course materials are for personal use only.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-1">5. Intellectual Property</h2>
            <p>
              All course content, including videos, text, images, and materials, are the intellectual property of Aya Corporation and are protected by copyright laws. Unauthorized use is prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-1">6. Privacy</h2>
            <p>
              We respect your privacy and handle your personal information according to our Privacy Policy. By using the website, you consent to the collection and use of your data as described.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-1">7. Limitation of Liability</h2>
            <p>
              Aya Corporation is not responsible for any indirect, incidental, or consequential damages arising from the use of our website or courses. We do not guarantee specific results from using our courses.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-1">8. Governing Law</h2>
            <p>
              These terms are governed by the laws of Pakistan. Any disputes arising will be subject to the jurisdiction of courts in Pakistan.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-1">9. Changes to Terms</h2>
            <p>
              We may update these terms occasionally. Continued use of the website after changes implies acceptance of the new terms.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndCondition;
