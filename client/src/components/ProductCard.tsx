import React, { useState, useEffect } from 'react';
import { Product } from '../lib/products';
import { checkImageExists } from '../lib/imageExists';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [imageExists, setImageExists] = useState(false);
  const { id, name, description, type, category, color, price } = product;
  
  // Check if the image exists
  useEffect(() => {
    const checkImage = async () => {
      try {
        // Check for various image extensions
        const extensions = ['jpg', 'jpeg', 'png', 'webp', 'gif'];
        
        for (const ext of extensions) {
          const exists = await checkImageExists(`${name}.${ext}`);
          if (exists) {
            setImageExists(true);
            break;
          }
        }
      } catch (error) {
        console.error("Error checking image:", error);
      }
    };
    
    checkImage();
  }, [name]);

  // Generate badge based on product type
  const badgeColor = type === 'clothing' ? 'bg-primary' : 'bg-accent';
  const badgeText = type === 'clothing' ? 'Clothing' : 'Perfume';

  // Function to create WhatsApp order link
  const createWhatsAppLink = () => {
    const phoneNumber = '254702533122'; // Kenya number format
    const message = `I would like to order ${name}`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative">
        <div className="aspect-w-3 aspect-h-4 bg-gray-100 flex items-center justify-center h-64">
          {imageExists ? (
            <img 
              src={`/${name}.jpg`} 
              alt={name} 
              className="object-cover w-full h-full"
              onError={() => setImageExists(false)}
            />
          ) : (
            <div className="flex flex-col items-center justify-center p-4">
              <i className={`fas ${type === 'clothing' ? 'fa-tshirt' : 'fa-spray-can'} text-4xl text-gray-300`}></i>
              <p className="text-gray-400 mt-2 text-sm text-center">Image will appear when "{name}.jpg" is uploaded</p>
            </div>
          )}
        </div>
        <span className={`absolute top-2 right-2 ${badgeColor} text-white text-xs px-2 py-1 rounded`}>
          {badgeText}
        </span>
        {price && (
          <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
            KSh {price}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-heading font-semibold text-lg text-black">{name}</h3>
        <p className="text-black text-sm mt-1">{description}</p>
        <div className="mt-3 flex items-center">
          <span className="text-xs bg-gray-100 text-black px-2 py-1 rounded mr-2">{category}</span>
          <span className="text-xs bg-gray-100 text-black px-2 py-1 rounded">{color}</span>
        </div>
        
        <div className="mt-4">
          <a 
            href={createWhatsAppLink()} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block w-full text-center bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded transition duration-300"
          >
            <i className="fab fa-whatsapp mr-2"></i> Order Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
