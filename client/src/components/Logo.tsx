import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <svg 
        width="36" 
        height="36" 
        viewBox="0 0 36 36" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2"
      >
        <path d="M28.5 6H7.5L3 14.25V30H33V14.25L28.5 6Z" fill="#8B5A2B" />
        <path d="M13.5 6V3.75C13.5 3.15 14.1 2.25 15 2.25H21C21.9 2.25 22.5 3.15 22.5 3.75V6" stroke="#006400" strokeWidth="2" />
        <path d="M16.5 12.75H19.5V18.75H16.5V12.75Z" fill="#D4AF37" />
        <path d="M9 22.5C10.2 22.5 11.25 23.55 11.25 24.75V30H6.75V24.75C6.75 23.55 7.8 22.5 9 22.5Z" fill="#D4AF37" />
        <path d="M27 22.5C28.2 22.5 29.25 23.55 29.25 24.75V30H24.75V24.75C24.75 23.55 25.8 22.5 27 22.5Z" fill="#D4AF37" />
        <path d="M18 22.5C19.2 22.5 20.25 23.55 20.25 24.75V30H15.75V24.75C15.75 23.55 16.8 22.5 18 22.5Z" fill="#D4AF37" />
      </svg>
      <div>
        <h1 className="text-xl md:text-2xl font-bold font-heading">
          <span className="text-primary">CHARA</span> 
          <span className="text-accent">WARDROBES</span>
          <span className="text-xs md:text-sm font-body font-light block md:inline md:ml-1">& PERFUMES</span>
        </h1>
      </div>
    </div>
  );
};

export default Logo;
