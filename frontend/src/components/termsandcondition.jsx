import React from "react";
import Header from "./header";
import Footer from "./footer";
import { Link } from "react-router-dom";


const TermsAndConditions = () => {
  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800 font-sans">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-center">
          Terms and Conditions
        </h1>
        <p className="text-sm text-gray-500 text-center mb-8">
          Last updated: May 30, 2025
        </p>

        <div className="space-y-6 text-base leading-relaxed">
          <p>
            These Terms and Conditions ("Terms") govern your use of the Aya Corporation website and services. By accessing or using our website, purchasing courses, or using our services, you agree to be legally bound by these Terms. If you do not agree, please do not use our services.
          </p>

          <div>
            <h2 className="text-lg font-semibold mb-1">1. Company Details</h2>
            <p>
              Aya Corporation is a Pakistan-based business offering digital educational products. Our support team can be contacted via email at:{" "}
              <a href="mailto:abdul.muqaddam.se@gmail.com" className="text-blue-600 underline">
                abdul.muqaddam.se@gmail.com
              </a>. Our registered business address is available upon request.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-1">2. Use of Service</h2>
            <p>
              Our courses are open to all users. Anyone interested in learning, regardless of age, may access or purchase our content, provided that a parent or guardian supervises purchases made by minors where necessary.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-1">3. Account Registration</h2>
            <p>
              To purchase courses, you must create an account with accurate information. You are responsible for safeguarding your account login details.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-1">4. Payments</h2>
            <p>
              All payments are processed securely via our third-party payment provider, Paddle.com. You agree to abide by Paddle's Terms of Sale and understand that you are purchasing a digital product from a merchant of record (Paddle).
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-1">5. Course Access & Licensing</h2>
            <p>
              Upon purchase, you receive a limited, non-transferable, non-commercial license to access the course content for personal use only. Sharing or reselling content is strictly prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-1">6. Refund Policy</h2>
            <p>
              Refunds are only available within <strong>7 days</strong> of purchase, subject to our{" "}
              <Link to="/RefundPolicy" className="text-blue-600 underline">
                Refund Policy
              </Link>. Refunds will not be granted beyond this period or if the course is used extensively.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-1">7. Subscriptions (If Applicable)</h2>
            <p>
              If you subscribe to a recurring product, you may cancel anytime. Subscription terms and cancellation details will be specified at the time of purchase.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-1">8. Intellectual Property</h2>
            <p>
              All content, videos, graphics, and material are the exclusive property of Aya Corporation and protected by copyright law. No content may be copied, distributed, or modified without written permission.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-1">9. Privacy</h2>
            <p>
              Please review our{" "}
              <Link to="/PrivacyPolicy" className="text-blue-600 underline">
                Privacy Policy
              </Link> to understand how we collect, use, and protect your personal data.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-1">10. Limitation of Liability</h2>
            <p>
              Aya Corporation is not liable for any indirect, incidental, or consequential damages arising from your use of our website or services. We do not guarantee specific learning outcomes.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-1">11. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your account if you violate these Terms or misuse our services.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-1">12. Governing Law</h2>
            <p>
              These Terms are governed by and interpreted in accordance with the laws of Pakistan. Any disputes shall be resolved in the courts of Pakistan.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-1">13. Changes to Terms</h2>
            <p>
              We may modify these Terms at any time. Changes will be effective immediately upon posting. Continued use of the site indicates your acceptance of the updated Terms.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
