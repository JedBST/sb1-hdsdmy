import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="privacy" className="bg-[#2D2D2D] py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">EVE</h3>
            <p>Empowering insurance advisers with AI-powered tools and insights.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Privacy Policy</h3>
            <p>EVE is designed with strict privacy considerations. We do not store or retain any input queries or output responses. Each interaction is processed in isolation, ensuring client confidentiality and privacy.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p>developed by Blue Skies Tech</p>
            <p>Email: support@blue-skies-tech.com</p>
            <p>Last updated: 2 October 2024</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Blue Skies Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;