import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-2xl overflow-hidden max-w-5xl w-full grid grid-cols-1 md:grid-cols-2">
        {/* Left Side: Contact Info & Image */}
        <div className="bg-gray-900 p-10 text-white flex flex-col justify-between relative">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-300 mb-8">
              Have a question or just want to say hi? We'd love to hear from
              you. Fill out the form and we'll get back to you within 24 hours.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span>📍</span>
                <span>123 Innovation Dr, Tech City, NY</span>
              </div>
              <div className="flex items-center space-x-3">
                <span>✉️</span>
                <span>contact@example.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <span>📞</span>
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Decorative Circle or Image Overlay */}
          <div className="absolute bottom-0 right-0 opacity-20">
            <img
              src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
              className="w-64 h-64 object-cover rounded-tl-full"
              alt="decoration"
            />
          </div>
        </div>

        {/* Right Side: The Form */}
        <div className="p-10 bg-white">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows="4"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 transition duration-300 shadow-lg transform hover:-translate-y-1"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
