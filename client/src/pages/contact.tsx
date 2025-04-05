import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-3xl font-bold mb-8 text-center">Contact Us</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="font-heading text-2xl font-semibold mb-6">Get In Touch</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-primary mr-4 mt-1">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold">Call Us</h3>
                    <a href="tel:0702533122" className="text-primary hover:underline">0702533122</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary mr-4 mt-1">
                    <i className="fab fa-whatsapp"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold">WhatsApp</h3>
                    <a href="https://wa.me/254702533122" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Send a message</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary mr-4 mt-1">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold">Business Hours</h3>
                    <p>Monday - Friday: 9am - 6pm</p>
                    <p>Saturday: 10am - 4pm</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-semibold mb-3">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-primary hover:text-accent transition-colors">
                    <i className="fab fa-facebook-f text-xl"></i>
                  </a>
                  <a href="#" className="text-primary hover:text-accent transition-colors">
                    <i className="fab fa-instagram text-xl"></i>
                  </a>
                  <a href="#" className="text-primary hover:text-accent transition-colors">
                    <i className="fab fa-twitter text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Buttons */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-center">
              <h2 className="font-heading text-2xl font-semibold mb-6">Quick Contact</h2>
              
              <a href="tel:0702533122" className="bg-primary text-white py-3 px-4 rounded-lg mb-4 text-center flex items-center justify-center">
                <i className="fas fa-phone-alt mr-2"></i>
                Call Us Now
              </a>
              
              <a href="https://wa.me/254702533122" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white py-3 px-4 rounded-lg text-center flex items-center justify-center">
                <i className="fab fa-whatsapp mr-2"></i>
                Chat on WhatsApp
              </a>
              
              <div className="mt-8 p-4 bg-light rounded-lg">
                <p className="text-center text-sm">
                  We're always happy to hear from you! Reach out through any of our contact channels and we'll respond as soon as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
