import React, { useState } from 'react';
import { X } from 'lucide-react';
import emailjs from 'emailjs-com';

// A simple Modal component
const Modal: React.FC<{ onClose: () => void; message: string }> = ({
  onClose,
  message,
}) => {
  return (
    <div className="fixed inset-0 bg-[var(--primary-color)] bg-opacity-70 flex items-center justify-center">
      <div className="bg-[var(--background-color)] p-8 rounded-lg shadow-lg text-center">
        <h2
          className="text-xl font-bold mb-4"
          style={{ color: 'var(--text-color)' }}
        >
          Thank You!
        </h2>
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
    address: '',
    phoneNumber: '',
    companyName: '',
    isNZAdvisor: false,
    demoDate: '',
    demoTime: '',
    isTeamBooking: 'individual',
  });

  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      address: formData.address,
      companyName: formData.companyName,
      isNZAdvisor: formData.isNZAdvisor ? 'Yes' : 'No',
      demoDate: formData.demoDate,
      demoTime: formData.demoTime,
      isTeamBooking: formData.isTeamBooking === 'team' ? 'Team' : 'Individual',
    };

    emailjs
      .send(
        'service_y0a35qu',
        'template_8aclctq',
        templateParams,
        'XoCoS9RmJK-GaKGhq'
      )
      .then((result) => {
        console.log('Email successfully sent!', result);
        setLoading(false);
        setIsSubmitted(true);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setLoading(false);
        setErrorMessage(
          'There was an error processing your request. Please try again.'
        );
      });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-[#2D2D2D] rounded-lg shadow-xl max-w-md w-full relative flex flex-col max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white z-10"
        >
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-4 p-6 text-center">Book a Demo</h2>
        <form onSubmit={handleSubmit} className="flex flex-col flex-grow overflow-hidden">
          <div className="overflow-y-auto flex-grow px-6 pb-6">
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">
                Name
              </label>
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
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
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
              <label htmlFor="phoneNumber" className="block mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="w-full p-2 bg-[#1E1E1E] border border-[#444444] rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block mb-2">
                Address/City
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-2 bg-[#1E1E1E] border border-[#444444] rounded"
                placeholder="You can just enter city if preferred"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="companyName" className="block mb-2">
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
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
              <label htmlFor="demoDate" className="block mb-2">
                Preferred Date
              </label>
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
            <div className="mb-4">
              <label htmlFor="demoTime" className="block mb-2">
                Preferred Time
              </label>
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
            <div className="mb-4">
              <label className="block mb-2">Are you booking as:</label>
              <select
                name="isTeamBooking"
                value={formData.isTeamBooking}
                onChange={handleChange}
                className="w-full p-2 bg-[#1E1E1E] border border-[#444444] rounded"
              >
                <option value="individual">Individual</option>
                <option value="team">Team</option>
              </select>
            </div>
          </div>
          <div className="p-6 bg-[#2D2D2D] border-t border-[#444444] rounded-b-lg">
            <button
              type="submit"
              className={`w-full bg-[#007B7F] hover:bg-[#005B63] text-white font-bold py-2 px-4 rounded transition-colors duration-300 ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Book Demo'}
            </button>
            {errorMessage && (
              <p className="text-red-500 text-center mt-4">{errorMessage}</p>
            )}
          </div>
        </form>
      </div>

      {isSubmitted && (
        <Modal
          onClose={onClose}
          message="Your request has been submitted successfully. We are excited to connect with you and will reach out shortly to finalise the details."
        />
      )}
    </div>
  );
};

export default DemoForm;
