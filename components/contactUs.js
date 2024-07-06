import React, { useState } from 'react';
import ButtonPrimary from './misc/ButtonPrimary';
import axios from 'axios';

const ContactUsDialog = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.mobileNumber) errors.mobileNumber = 'Mobile Number is required';
    if (!formData.message) errors.message = 'Message is required';
    return errors;
  };
  const resetForm = () => {
    setIsSubmitted(false)
    setSubmissionMessage('');
    setErrors({});
    setFormData({ mobileNumber: '', name: '', message: '' })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
   
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      try {
        setIsLoading(true)
        const response = await axios.post('/api/send-email', formData);
        if (response.data.success) {
          setIsSubmitted(true);
          setSubmissionMessage('Thank you for your message!');
        } else {
          setSubmissionMessage('Failed to send your message. Please try again.');
        }
      } catch (error) {
        setSubmissionMessage('Failed to send your message. Please try again.');
      } finally {
        setIsLoading(false)
      }
    }
  };

  return (
    open && (
      <div className="fixed inset-1 flex items-center justify-center ">
        <div className="p-8 rounded shadow-md w-full max-w-md bg-gray-500">
          <h2 className="text-2xl mb-4">Contact Us</h2>
          {isSubmitted ? (
            <>  <div>{submissionMessage}</div>
                <button
                  type="button"
                  onClick={() => { 
                    resetForm()
                    handleClose()
                  }}
                  className="mt-4 mr-4 px-4 py-2 bg-black-500 text-white-500 rounded"
                >
                  Close
                </button>
                </>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                {errors.name && <span className="text-orange-500">{errors.name}</span>}
              </div>
              <div className="mb-4">
                <label htmlFor="mobileNumber" className="block mb-2">
                  Mobile Number:
                </label>
                <input
                  type="text"
                  id="mobileNumber"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                {errors.mobileNumber && <span className="text-orange-500">{errors.mobileNumber}</span>}
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2">
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  rows="4"
                />
                {errors.message && <span className="text-orange-500">{errors.message}</span>}
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleClose}
                  className="mr-4 px-4 py-2 bg-gray-500 text-white rounded"
                >
                  Cancel
                </button>
                <ButtonPrimary type={'submit'} isLoading={isLoading} addClass="py-2 px-8">Contact US</ButtonPrimary>
               
              </div>
            </form>
          )}
        </div>
      </div>
    )
  );
};

export default ContactUsDialog;
