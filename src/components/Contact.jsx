import React from 'react';

const Contact = () => {
    return (
        <div className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
                <p className="text-gray-400 mb-6">Have questions or feedback? Reach out to us!</p>

                <div className="flex flex-col md:flex-row justify-center gap-6">
                    {/* Email */}
                    <div className="flex items-center gap-3">
                        <span className="text-orange-400 text-xl">📧</span>
                        <p className="text-gray-300">contact@example.com</p>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-3">
                        <span className="text-orange-400 text-xl">📞</span>
                        <p className="text-gray-300">+123 456 7890</p>
                    </div>
                </div>

                {/* Optional: Contact Form */}
                <div className="mt-8 max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold text-center mb-4">Send Us a Message</h3>

                    <form className="space-y-4">
                        {/* Name Field */}
                        <div>
                            <input type="text" placeholder="Enter your name"
                                className="w-full p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-orange-500 outline-none" />
                        </div>

                        {/* Email Field */}
                        <div>
                            <input type="email" placeholder="Enter your email"
                                className="w-full p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-orange-500 outline-none" />
                        </div>

                        {/* Message Field */}
                        <div>
                            <textarea placeholder="Write your message..." rows="4"
                                className="w-full p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-orange-500 outline-none"></textarea>
                        </div>

                        {/* Submit Button */}
                        <button type="submit"
                            className="w-full bg-red-600 hover:bg-orange-600 transition-all duration-300 text-white font-semibold py-3 rounded-lg shadow-md">
                            Send Message
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contact;