import React from "react";
import Header from "./header";
import Footer from "./footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-center">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 text-center mb-8">
          Last updated: 30/5/2025
        </p>
        <div className="space-y-6 text-gray-700 text-base leading-relaxed">
          <p>
            This Privacy Policy explains how <strong>Aya Corporation</strong> ("we", "our", or "us") collects, uses, discloses, and safeguards your information when you visit our website and use our services.
          </p>

          <div>
            <h2 className="text-lg font-semibold mb-1">1. Information We Collect</h2>
            <p>We may collect the following types of personal information:</p>
            <ul className="list-disc list-inside mt-2">
              <li>Name and email address (when creating an account)</li>
              <li>Payment information (via secure third-party payment gateways)</li>
              <li>Course progress and learning activity</li>
              <li>Device/browser info (collected through cookies and analytics)</li>
            </ul>
            <p className="mt-2">
              All payment transactions are securely processed through our third-party partner, Paddle.com. We do not directly store your credit/debit card information.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-1">2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc list-inside mt-2">
              <li>Provide access to your purchased courses</li>
              <li>Improve the website and course content</li>
              <li>Communicate updates, support, or promotional offers</li>
              <li>Prevent fraudulent activity or abuse</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-1">3. Data Sharing and Disclosure</h2>
            <p>
              We do not sell your personal data. We only share data with third-party services (e.g., payment processors or analytics tools) when required to provide functionality and support to you.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-1">4. Cookies and Tracking</h2>
            <p>
              We use cookies to enhance user experience and analyze traffic. You may disable cookies through your browser settings, but some parts of the site may not function properly.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-1">5. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your personal data. However, no online platform is completely secure, and we cannot guarantee absolute protection.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-1">6. Your Rights</h2>
            <p>
              You may request access to or deletion of your personal information at any time. Contact us at:{" "}
              <a href="mailto:abdul.muqaddam.se@gmail.com" className="text-blue-600 underline">
                abdul.muqaddam.se@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-1">7. Children's Privacy</h2>
            <p>
              We do not knowingly collect data from children under 13. If we learn that a child has provided personal data without parental consent, we will delete it immediately.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-1">8. Changes to This Policy</h2>
            <p>
              We may update this policy from time to time. You are encouraged to review this page periodically to stay informed about how we protect your information.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-1">9. Contact</h2>
            <p>
              For questions, concerns, or data requests, please contact us at: <br />
              <a href="mailto:abdul.muqaddam.se@gmail.com" className="text-blue-600 underline">
                abdul.muqaddam.se@gmail.com
              </a><br />
              Aya Corporation, [Inside Bohar Gate, Multan, Pakistan]
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
