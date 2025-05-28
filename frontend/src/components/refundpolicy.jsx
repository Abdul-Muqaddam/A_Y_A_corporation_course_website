import React from "react";
import Header from "./header";
import Footer from "./footer";

const RefundPolicy = () => {
  return (
    <>
      <Header />
      <div className="max-w-3xl mx-auto my-10 bg-[#fefaf5] p-8 rounded-lg shadow-md text-[#333] font-sans">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#5c3b1e] mb-2">
          📄 7-Day Refund Policy
        </h2>
        <p className="mb-4">
          <strong>Effective Date:</strong> 30/5/2025
        </p>

        <h3 className="text-xl font-semibold text-[#5c3b1e] mt-6 mb-2">
          ✅ Eligibility for Refund
        </h3>
        <ul className="list-disc list-inside space-y-1">
          <li>The request is made within <strong>7 days</strong> of the original purchase.</li>
          <li>The product or service has not been <strong>used excessively, abused, or violated</strong>.</li>
          <li>If it’s a digital product or course, less than <strong>30% of the content</strong> has been accessed or completed.</li>
        </ul>

        <h3 className="text-xl font-semibold text-[#5c3b1e] mt-6 mb-2">
          📧 How to Request a Refund
        </h3>
        <p>
          To request a refund, please email us at{" "}
          <a href="mailto:abdul.muqaddam.se@gmail.com" className="text-blue-600 underline">
            abdul.muqaddam.se@gmail.com
          </a>{" "}
          with the following:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Your full name</li>
          <li>Order number or payment proof</li>
          <li>Reason for the refund request</li>
        </ul>

        <h3 className="text-xl font-semibold text-[#5c3b1e] mt-6 mb-2">
          🚫 Non-Refundable Situations
        </h3>
        <ul className="list-disc list-inside space-y-1">
          <li>The request is made <strong>after 7 days</strong>.</li>
          <li>The product/service has been <strong>fully used</strong>.</li>
          <li>There is a <strong>violation of our terms of service</strong> or misuse.</li>
        </ul>

        <h3 className="text-xl font-semibold text-[#5c3b1e] mt-6 mb-2">
          💸 Refund Process
        </h3>
        <p>
          Approved refunds will be issued to the <strong>original payment method</strong> within{" "}
          <strong>5–10 business days</strong>, depending on your bank or provider.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default RefundPolicy;
