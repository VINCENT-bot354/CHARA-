import React from 'react';
import { Link } from 'wouter';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-heading text-xl font-semibold mb-4">CHARA WARDROBES and PERFUMES</h3>
            <p className="text-gray-300">Elevating your style and scent experience with curated collections of premium clothing and fragrances.</p>
          </div>
          
          <div>
            <h3 className="font-heading text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <div className="text-gray-300 hover:text-white transition-colors cursor-pointer">Home</div>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <div className="text-gray-300 hover:text-white transition-colors cursor-pointer">Products</div>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <div className="text-gray-300 hover:text-white transition-colors cursor-pointer">About Us</div>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <div className="text-gray-300 hover:text-white transition-colors cursor-pointer">Contact</div>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <i className="fas fa-phone-alt w-5 text-gray-400"></i>
                <a href="tel:0702533122" className="text-gray-300 hover:text-white ml-2">0702533122</a>
              </li>
              <li className="flex items-center">
                <i className="fab fa-whatsapp w-5 text-gray-400"></i>
                <a href="https://wa.me/254702533122" className="text-gray-300 hover:text-white ml-2">WhatsApp</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} CHARA WARDROBES and PERFUMES. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
