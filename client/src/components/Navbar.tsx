import React, { useState } from 'react';
import { Link } from 'wouter';
import Logo from './Logo';
import Search from './Search';

interface NavbarProps {
  currentPath: string;
}

const Navbar: React.FC<NavbarProps> = ({ currentPath }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center cursor-pointer">
              <Logo />
            </a>
          </Link>

          {/* Navigation for desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <button 
                className="flex items-center text-dark hover:text-primary transition duration-300"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onBlur={() => setTimeout(() => setIsDropdownOpen(false), 100)}
              >
                <span>Menu</span>
                <i className="fas fa-chevron-down ml-1 text-xs"></i>
              </button>
              <div className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md ${isDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} transition duration-300 z-50`}>
                <Link href="/">
                  <a className={`block px-4 py-2 text-sm hover:bg-light hover:text-primary rounded-t-md ${currentPath === '/' ? 'text-primary font-semibold' : 'text-dark'}`}>
                    Home
                  </a>
                </Link>
                <Link href="/products">
                  <a className={`block px-4 py-2 text-sm hover:bg-light hover:text-primary ${currentPath === '/products' ? 'text-primary font-semibold' : 'text-dark'}`}>
                    Products
                  </a>
                </Link>
                <Link href="/about">
                  <a className={`block px-4 py-2 text-sm hover:bg-light hover:text-primary ${currentPath === '/about' ? 'text-primary font-semibold' : 'text-dark'}`}>
                    About Us
                  </a>
                </Link>
                <Link href="/contact">
                  <a className={`block px-4 py-2 text-sm hover:bg-light hover:text-primary rounded-b-md ${currentPath === '/contact' ? 'text-primary font-semibold' : 'text-dark'}`}>
                    Contact
                  </a>
                </Link>
              </div>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-dark hover:text-primary"
              aria-label="Toggle mobile menu"
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>

          {/* Search Bar */}
          <div className="w-full md:w-1/3 mt-4 md:mt-0 order-3 md:order-none">
            <Search />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden mt-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <Link href="/">
            <a onClick={closeMobileMenu} className={`block py-2 hover:text-primary ${currentPath === '/' ? 'text-primary font-semibold' : 'text-dark'}`}>
              Home
            </a>
          </Link>
          <Link href="/products">
            <a onClick={closeMobileMenu} className={`block py-2 hover:text-primary ${currentPath === '/products' ? 'text-primary font-semibold' : 'text-dark'}`}>
              Products
            </a>
          </Link>
          <Link href="/about">
            <a onClick={closeMobileMenu} className={`block py-2 hover:text-primary ${currentPath === '/about' ? 'text-primary font-semibold' : 'text-dark'}`}>
              About Us
            </a>
          </Link>
          <Link href="/contact">
            <a onClick={closeMobileMenu} className={`block py-2 hover:text-primary ${currentPath === '/contact' ? 'text-primary font-semibold' : 'text-dark'}`}>
              Contact
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
