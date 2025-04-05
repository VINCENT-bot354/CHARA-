import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { products, Product } from '../lib/products';
import { useGlobalSearch } from '../hooks/useSearch';

const Products: React.FC = () => {
  const { searchTerm } = useGlobalSearch();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [filterType, setFilterType] = useState<'all' | 'clothing' | 'perfume'>('all');
  const [noResults, setNoResults] = useState(false);
  
  // Filter products based on search term and type
  useEffect(() => {
    let result = products;
    
    // Filter by type if not "all"
    if (filterType !== 'all') {
      result = result.filter(product => product.type === filterType);
    }
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase().trim();
      result = result.filter(product => 
        product.name.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term) ||
        product.color.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term)
      );
    }
    
    setFilteredProducts(result);
    setNoResults(result.length === 0);
  }, [searchTerm, filterType]);
  
  // Handle filter change
  const handleFilterChange = (type: 'all' | 'clothing' | 'perfume') => {
    setFilterType(type);
  };
  
  // Clear search
  const clearSearch = () => {
    // Reset global search term
    globalThis.searchContext.setGlobalSearchTerm('');
  };
  
  return (
    <div className="bg-light py-8">
      <div className="container mx-auto px-4">
        <h1 className="font-heading text-3xl font-bold mb-8">Our Collection</h1>
        
        {/* Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4">
            <button 
              className={`filter-btn px-4 py-2 rounded-full ${filterType === 'all' ? 'bg-primary text-white' : 'bg-white border border-primary text-primary'}`}
              onClick={() => handleFilterChange('all')}
            >
              All
            </button>
            <button 
              className={`filter-btn px-4 py-2 rounded-full ${filterType === 'clothing' ? 'bg-primary text-white' : 'bg-white border border-primary text-primary'}`}
              onClick={() => handleFilterChange('clothing')}
            >
              Clothing
            </button>
            <button 
              className={`filter-btn px-4 py-2 rounded-full ${filterType === 'perfume' ? 'bg-primary text-white' : 'bg-white border border-primary text-primary'}`}
              onClick={() => handleFilterChange('perfume')}
            >
              Perfumes
            </button>
          </div>
        </div>
        
        {/* Products Grid */}
        {!noResults ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          /* No Results */
          <div className="text-center py-10">
            <i className="fas fa-search text-4xl text-gray-400 mb-3"></i>
            <p className="text-xl text-gray-600">No products found matching your search.</p>
            <button 
              onClick={clearSearch}
              className="mt-4 bg-primary text-white px-4 py-2 rounded-full"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
