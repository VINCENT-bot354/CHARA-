import React, { useState } from 'react';
import { useLocation } from 'wouter';
import { useGlobalSearch } from '../hooks/useSearch';

const Search: React.FC = () => {
  const { searchTerm: globalSearchTerm, setGlobalSearchTerm } = useGlobalSearch();
  const [localSearchTerm, setLocalSearchTerm] = useState(globalSearchTerm);
  const [location] = useLocation();

  // Navigate to products page when searching
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setGlobalSearchTerm(localSearchTerm);
    
    if (location !== '/products') {
      window.location.href = '/products';
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative">
      <input 
        type="text" 
        value={localSearchTerm}
        onChange={(e) => setLocalSearchTerm(e.target.value)}
        placeholder="Search by name, color, or type..." 
        className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label="Search products"
      />
      <button 
        type="submit"
        className="absolute right-3 top-2 text-primary" 
        aria-label="Submit search"
      >
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
};

export default Search;
