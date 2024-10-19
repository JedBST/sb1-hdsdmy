// Footer.tsx
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

// Footer Component
const Footer: React.FC = () => {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // Optional: For handling form submissions if needed

  // Function to toggle the Privacy Policy modal
  const togglePrivacyModal = () => {
    setIsPrivacyModalOpen(!isPrivacyModalOpen);
  };

  // Function to handle closing the modal when clicking outside the modal content
  const handleBackdropClick = () => {
    togglePrivacyModal();
  };

  // Function to prevent modal from closing when clicking inside the modal content
  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isPrivacyModalOpen) {
        togglePrivacyModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPrivacyModalOpen]);

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isPrivacyModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isPrivacyModalOpen]);

  return (
    <footer id="privacy" className="bg-primary-color py-10" style={{ fontFamily: 'var(--font-family-body)' }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* EVE Section */}
          <div>
            <h3
              className="text-xl font-bold mb-4 text-secondary-color"
              style={{ fontFamily: 'var(--font-family-heading)' }}
            >
              EVE
            </h3>
            <p className="text-text-color">
              Empowering insurance advisers with AI-powered tools and insights.
            </p>
          </div>

          {/* Privacy Policy Section */}
          <div>
            <h3
              className="text-xl font-bold mb-4 text-secondary-color"
              style={{ fontFamily: 'var(--font-family-heading)' }}
            >
              Privacy Policy
            </h3>
            <p className="text-text-color">
              EVE is designed with strict privacy considerations. We do not store or retain any input queries or output responses. Each interaction is processed in isolation, ensuring client confidentiality and privacy.
            </p>
            <button
              onClick={togglePrivacyModal}
              className="text-accent-color underline hover:text-button-hover-color transition duration-300"
              style={{ fontFamily: 'var(--font-family-body)' }}
            >
              Read Privacy Policy
            </button>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3
              className="text-xl font-bold mb-4 text-secondary-color"
              style={{ fontFamily: 'var(--font-family-heading)' }}
            >
              Contact Us
            </h3>
            <p className="text-text-color">
              Developed by Blue Skies Tech
            </p>
            <p className="text-text-color">
              Email: support@blue-skies-tech.com
            </p>
            <p className="text-text-color">
              Last updated: 2 October 2024
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center">
          <p className="text-text-color">&copy; 2024 Blue Skies Tech. All rights reserved.</p>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {isPrivacyModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300"
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="privacy-policy-title"
        >
          <div
            className="relative p-8 rounded-lg max-w-3xl w-full max-h-[80vh] overflow-y-auto shadow-lg"
            style={{
              backgroundColor: 'var(--background-color)', // Ensures opaque background
              color: 'var(--text-color)',
              fontFamily: 'var(--font-family-body)',
              border: '1px solid var(--border-color)',
              transition: 'var(--transition-speed)',
            }}
            onClick={handleModalClick}
          >
            {/* Close Button */}
            <button
              onClick={togglePrivacyModal}
              className="absolute top-4 right-4 text-text-color hover:text-secondary-color focus:outline-none"
              style={{ fontSize: '1.5rem', transition: 'var(--transition-speed)' }}
              aria-label="Close Privacy Policy"
            >
              <X size={24} />
            </button>

            {/* Modal Content */}
            <h2
              id="privacy-policy-title"
              className="text-2xl font-bold mb-4 text-secondary-color"
              style={{
                fontFamily: 'var(--font-family-heading)',
              }}
            >
              Privacy Policy for Eve AI
            </h2>
            <p>Last updated: 2 October 2024</p>

            {/* Privacy Policy Sections */}
            <h3 className="font-bold mt-4">1. Introduction</h3>
            <p>
              Blue Skies Tech ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our Eve AI Chrome Extension ("the Extension").
            </p>

            <h3 className="font-bold mt-4">2. Information We Collect</h3>
            <p><strong>2.1 User-Provided Information</strong></p>
            <ul className="list-disc ml-6">
              <li>Email address (for account creation and authentication)</li>
              <li>Password (stored in a securely hashed format)</li>
            </ul>

            <p><strong>2.2 Automatically Collected Information</strong></p>
            <ul className="list-disc ml-6">
              <li>Token usage statistics</li>
              <li>Subscription status</li>
            </ul>

            <p><strong>2.3 Conversation Data</strong></p>
            <p>
              User inputs and AI outputs are processed in real-time but are not stored on our servers. Conversation history is maintained locally in your browser and is not transmitted to or stored on our servers.
            </p>

            <h3 className="font-bold mt-4">3. How We Use Your Information</h3>
            <p>We use the collected information for the following purposes:</p>
            <ul className="list-disc ml-6">
              <li>To provide and maintain the Extension</li>
              <li>To manage user accounts and authenticate API requests</li>
              <li>To track token usage for billing purposes</li>
              <li>To manage subscription status</li>
            </ul>

            <h3 className="font-bold mt-4">4. Data Storage and Security</h3>
            <p>
              User account information and usage statistics are stored in a secure MongoDB database. Passwords are hashed before storage. We do not store or log user conversations or AI interactions on our servers.
            </p>

            <h3 className="font-bold mt-4">5. Third-Party Services</h3>
            <p><strong>5.1 Stripe</strong></p>
            <p>
              We use Stripe for payment processing. When you subscribe to a paid plan, your payment information is handled directly by Stripe. Please refer to Stripe's privacy policy for more information on how they handle your data.
            </p>
            <p><strong>5.2 OpenAI, Google, and Anthropic</strong></p>
            <p>
              We use OpenAI, Google, and Anthropic to process AI interactions. While we do not store these interactions, they are transmitted to the AI service for processing. Please refer to OpenAI, Google, and Anthropic privacy policies for information on how they handle data.
            </p>

            <h3 className="font-bold mt-4">6. Data Retention</h3>
            <p>
              We retain user account information and usage statistics for as long as the account is active. You may request deletion of your account at any time.
            </p>

            <h3 className="font-bold mt-4">7. Your Rights</h3>
            <p>You have the right to:</p>
            <ul className="list-disc ml-6">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of your personal information</li>
              <li>Request deletion of your account and associated data</li>
              <li>Object to processing of your personal information</li>
            </ul>

            <h3 className="font-bold mt-4">8. Children's Privacy</h3>
            <p>
              The Extension is not intended for use by children under the age of 18. We do not knowingly collect personal information from children under 18.
            </p>

            <h3 className="font-bold mt-4">9. Changes to This Privacy Policy</h3>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>

            <h3 className="font-bold mt-4">10. Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy, please contact us at support@blue-skies-tech.com.
            </p>

            {/* Close Button at Bottom */}
            <button
              onClick={togglePrivacyModal}
              className="mt-6 bg-button-color text-secondary-color px-4 py-2 rounded hover:bg-button-hover-color transition duration-300"
              style={{ transition: 'var(--transition-speed)' }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
