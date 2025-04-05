# CHARA WARDROBES and PERFUMES

A static e-commerce website to showcase clothing and perfume products.

## How to Add Prices to Products

To add prices to your products, follow these steps:

1. Open the file `client/src/lib/products.ts`
2. Find the product(s) you want to price in the `products` array
3. Add the `price` property to the product object like this:

```javascript
{ 
  id: 1, 
  name: "Mara", 
  description: "Elegant red dress with floral patterns", 
  type: "clothing", 
  category: "dress", 
  color: "red", 
  price: "3,500"  // Add the price here (as a string)
}
```

4. Save the file and the prices will appear on your product cards

## How Images Work

Images for products will automatically appear when you upload an image file with the same name as the product. For example:

- For a product named "Mara", upload an image named `Mara.jpg`
- For a product named "Kenya", upload an image named `Kenya.jpg`

The system will check for various image extensions: jpg, jpeg, png, webp, and gif.

## WhatsApp Order Button

Each product card has an "Order Now" button that directs customers to WhatsApp with a pre-written message containing the product name. The WhatsApp number is set to 0702533122.

## Search Functionality

The search function allows users to filter products by:
- Name
- Color
- Category
- Type (clothing or perfume)

## Adding New Products

To add a new product:
1. Open `client/src/lib/products.ts`
2. Add a new object to the `products` array with the following properties:
   - id (unique number)
   - name (string)
   - description (string)
   - type (either 'clothing' or 'perfume')
   - category (string)
   - color (string)
   - price (optional string)
