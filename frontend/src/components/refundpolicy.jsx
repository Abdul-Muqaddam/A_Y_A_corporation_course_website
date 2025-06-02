import React from "react";
import Header from "./header";
import Footer from "./footer";
import { Link } from "react-router-dom";

const RefundPolicy = () => {
  return (
    <>
      <Header />
      <div className="max-w-3xl mx-auto my-10 bg-[#fefaf5] p-8 rounded-lg shadow-md text-[#333] font-sans">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#5c3b1e] mb-2">
          Refund Policy – Aya Corporation
        </h2>
        <p className="mb-4">
          <strong>Effective Date:</strong> May 30, 2025
        </p>

        <p className="mb-4">
          This Refund Policy applies to all purchases made through the official website of Aya Corporation. By purchasing our courses or digital products, you agree to the terms outlined below.
        </p>

        <h3 className="text-xl font-semibold text-[#5c3b1e] mt-6 mb-2">
          Eligibility for Refund
        </h3>
        <ul className="list-disc list-inside space-y-1">
          <li>The refund request must be made within <strong>7 days</strong> of the original purchase.</li>
          <li>The product or service has not been used excessively, abused, or accessed beyond acceptable limits.</li>
          <li>In the case of digital products or courses, less than <strong>30% of the content</strong> must have been accessed or completed.</li>
        </ul>

        <h3 className="text-xl font-semibold text-[#5c3b1e] mt-6 mb-2">
          How to Request a Refund
        </h3>
        <p>
          To initiate a refund, please contact our support team via email at{" "}
          <a href="mailto:abdul.muqaddam.se@gmail.com" className="text-blue-600 underline">
            abdul.muqaddam.se@gmail.com
          </a>{" "} with the following information:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Your full name</li>
          <li>Order number or payment confirmation</li>
          <li>A brief explanation of the reason for the refund</li>
        </ul>

        <h3 className="text-xl font-semibold text-[#5c3b1e] mt-6 mb-2">
          Non-Refundable Circumstances
        </h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Requests made after <strong>7 days</strong> from purchase</li>
          <li>If more than 30% of a digital course has been completed</li>
          <li>Violation of our <Link to="/TermsAndCondition" className="text-blue-600 underline">Terms of Service</Link></li>
          <li>Misuse or abuse of the product or service</li>
        </ul>

        <h3 className="text-xl font-semibold text-[#5c3b1e] mt-6 mb-2">
          Subscription Refunds
        </h3>
        <p>
          If you are subscribed to a recurring plan, you may cancel at any time. Refunds for subscriptions are only granted if the request is made within 7 days of the initial charge and if minimal usage has occurred.
        </p>

        <h3 className="text-xl font-semibold text-[#5c3b1e] mt-6 mb-2">
          Refund Processing
        </h3>
        <p>
          If approved, refunds will be processed to the original method of payment within <strong>5–10 business days</strong>. Processing time may vary depending on your financial institution.
        </p>

        <p className="mt-6 text-sm text-gray-600">
          Aya Corporation reserves the right to deny any refund request that does not meet the above criteria or appears to be fraudulent or abusive. By completing a purchase on our platform, you acknowledge and accept the terms of this refund policy.
        </p>

        {/* Optional Business Address */}
        <p className="mt-4 text-sm text-gray-500">
          Registered Business Address: (Include your address here or mention "Available upon request")
        </p>
      </div>
      <Footer />
    </>
  );
};

export default RefundPolicy;
