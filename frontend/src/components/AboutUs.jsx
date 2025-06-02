import React from "react";
import Header from "./header";
import Footer from "./footer";

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
        <h1 className="text-3xl md:text-4xl font-semibold mb-6 text-center">
          About Us
        </h1>
        <div className="space-y-6 text-base leading-relaxed">
          <p>
            Welcome to <strong>A-Y-A Corporation</strong> — where knowledge becomes your superpower. 
            We are on a mission to make quality education accessible, practical, and empowering for everyone.
          </p>

          <p>
            <strong>Abdul-Muqaddam</strong>, the Founder and CEO of A-Y-A Corporation, created this platform to help learners 
            from all walks of life gain practical skills that lead to real-world opportunities. Whether you are 
            a student, professional, or lifelong learner, our courses are designed to uplift your potential.
          </p>

          <p>
            Our aim is to provide you with affordable and high-quality digital courses across multiple fields,
            focusing on practical knowledge, hands-on experience, and mentorship.
          </p>

          <p>
            At A-Y-A Corporation, we believe that learning should be:
            <ul className="list-disc list-inside mt-2">
              <li><strong>Accessible</strong>: No matter your background or age, education is your right.</li>
              <li><strong>Flexible</strong>: Learn at your own pace, on your own schedule.</li>
              <li><strong>Impactful</strong>: Gain real-world skills that actually matter.</li>
            </ul>
          </p>

          <p>
            Thank you for being a part of our journey. We're excited to help you grow and achieve your goals!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
