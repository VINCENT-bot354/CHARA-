import React from 'react';
import { Link } from 'wouter';
import ProductCard from '../components/ProductCard';
import { products } from '../lib/products';

const Home: React.FC = () => {
  // Get 8 trending products (mix of clothing and perfumes)
  const trendingProducts = products.slice(0, 8);
  
  return (
    <div>
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-primary/90 to-accent/90 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-2xl">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Elegance in Every Stitch. Luxury in Every Scent.</h1>
            <p className="text-lg mb-8">Discover our exquisite collection of garments and fragrances crafted to elevate your everyday experience.</p>
            <Link href="/products">
              <div className="inline-block bg-secondary text-dark px-6 py-3 rounded-full font-semibold hover:bg-secondary/80 transition duration-300 cursor-pointer">
                Shop Now
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="font-heading text-3xl font-bold mb-8 text-center">Featured Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Category 1 */}
          <div className="group relative bg-gray-100 rounded-lg overflow-hidden h-60 shadow-md transition duration-300 hover:shadow-xl cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center bg-primary/20">
              <div className="text-center p-4">
                <h3 className="font-heading text-2xl font-bold text-dark">Luxury Clothing</h3>
                <p className="text-dark/80 mt-2">Discover timeless elegance</p>
              </div>
            </div>
            <div className="absolute bottom-4 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition duration-300">
              <Link href="/products">
                <div className="inline-block bg-secondary text-dark px-4 py-2 rounded-full font-semibold cursor-pointer">
                  Explore Collection
                </div>
              </Link>
            </div>
          </div>
          
          {/* Category 2 */}
          <div className="group relative bg-gray-100 rounded-lg overflow-hidden h-60 shadow-md transition duration-300 hover:shadow-xl cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center bg-primary/20">
              <div className="text-center p-4">
                <h3 className="font-heading text-2xl font-bold text-dark">Signature Fragrances</h3>
                <p className="text-dark/80 mt-2">Captivate with our scents</p>
              </div>
            </div>
            <div className="absolute bottom-4 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition duration-300">
              <Link href="/products">
                <div className="inline-block bg-secondary text-dark px-4 py-2 rounded-full font-semibold cursor-pointer">
                  Explore Collection
                </div>
              </Link>
            </div>
          </div>
          
          {/* Category 3 */}
          <div className="group relative bg-gray-100 rounded-lg overflow-hidden h-60 shadow-md transition duration-300 hover:shadow-xl cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center bg-primary/20">
              <div className="text-center p-4">
                <h3 className="font-heading text-2xl font-bold text-dark">Seasonal Essentials</h3>
                <p className="text-dark/80 mt-2">Stay on trend year-round</p>
              </div>
            </div>
            <div className="absolute bottom-4 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition duration-300">
              <Link href="/products">
                <div className="inline-block bg-secondary text-dark px-4 py-2 rounded-full font-semibold cursor-pointer">
                  Explore Collection
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Products */}
      <div className="bg-light py-12">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold mb-8 text-center">Trending Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {trendingProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
