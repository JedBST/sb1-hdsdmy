import React, { useState } from 'react';
import { X } from 'lucide-react';
import emailjs from 'emailjs-com';  // Import EmailJS

// A simple Modal component
const Modal: React.FC<{ onClose: () => void, message: string }> = ({ onClose, message }) => {
  return (
    <div className="fixed inset-0 bg-[var(--primary-color)] bg-opacity-70 flex items-center justify-center">
      <div className="bg-[var(--background-color)] p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--text-color)' }}>Thank You!</h2>
        <p style={{ color: 'var(--text-color)' }}>{message}</p>
        <button
          onClick={onClose}
          className="mt-4 bg-[var(--button-color)] hover:bg-[var(--button-hover-color)] text-white font-bold py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};


interface DemoFormProps {
  onClose: () => void;
}

const DemoForm: React.FC<DemoFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    isNZAdvisor: false,
    demoDate: '',
    demoTime: '',
  });

  const [loading, setLoading] = useState(false);  // Loading state for email submission
  const [isSubmitted, setIsSubmitted] = useState(false);  // Control modal visibility
  const [errorMessage, setErrorMessage] = useState(''); // Error message if any

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);  // Show loading

    // Prepare data to send via EmailJS
    const templateParams = {
      name: formData.name,
      email: formData.email,
      city: formData.city,
      isNZAdvisor: formData.isNZAdvisor ? "Yes" : "No",
      demoDate: formData.demoDate,
      demoTime: formData.demoTime,
    };

    // Use your EmailJS service and template IDs
    emailjs.send('service_y0a35qu', 'template_8aclctq', templateParams, 'XoCoS9RmJK-GaKGhq')
      .then((result) => {
        console.log('Email successfully sent!', result);
        setLoading(false);  // Stop loading
        setIsSubmitted(true);  // Show thank you modal
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setLoading(false);  // Stop loading
        setErrorMessage('There was an error processing your request. Please try again.');
      });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-[#2D2D2D] p-8 rounded-lg shadow-xl max-w-md w-full relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-6 text-center">Book a Demo</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 bg-[#1E1E1E] border border-[#444444] rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 bg-[#1E1E1E] border border-[#444444] rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="city" className="block mb-2">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full p-2 bg-[#1E1E1E] border border-[#444444] rounded"
            />
          </div>
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="isNZAdvisor"
                checked={formData.isNZAdvisor}
                onChange={handleChange}
                className="mr-2"
              />
              I am an NZ-based insurance adviser
            </label>
          </div>
          <div className="mb-4">
            <label htmlFor="demoDate" className="block mb-2">Preferred Date</label>
            <input
              type="date"
              id="demoDate"
              name="demoDate"
              value={formData.demoDate}
              onChange={handleChange}
              required
              className="w-full p-2 bg-[#1E1E1E] border border-[#444444] rounded"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="demoTime" className="block mb-2">Preferred Time</label>
            <input
              type="time"
              id="demoTime"
              name="demoTime"
              value={formData.demoTime}
              onChange={handleChange}
              required
              className="w-full p-2 bg-[#1E1E1E] border border-[#444444] rounded"
            />
          </div>
          <button
            type="submit"
            className={`w-full bg-[#007B7F] hover:bg-[#005B63] text-white font-bold py-2 px-4 rounded transition-colors duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Book Demo'}
          </button>
        </form>

        {/* Display error message if any */}
        {errorMessage && (
          <p className="text-red-500 text-center mt-4">{errorMessage}</p>
        )}
      </div>

      {/* Show Thank You Modal */}
      {isSubmitted && (
        <Modal
          onClose={onClose}
          message="Your request has been submitted successfully. We will contact you as soon as possible."
        />
      )}
    </div>
  );
};

export default DemoForm;
