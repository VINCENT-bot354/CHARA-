export interface Product {
  id: number;
  name: string;
  description: string;
  type: 'clothing' | 'perfume';
  category: string;
  color: string;
  price?: string; // Optional price field that can be added to each product
}

export const products: Product[] = [
  { id: 1, name: "Mara", description: "Elegant red dress with floral patterns", type: "clothing", category: "dress", color: "red", price: "3,500" },
  { id: 2, name: "Pluto", description: "Deep blue perfume with musky undertones", type: "perfume", category: "fragrance", color: "blue", price: "2,800" },
  { id: 3, name: "Kenya", description: "Vibrant green safari jacket", type: "clothing", category: "jacket", color: "green", price: "4,200" },
  { id: 4, name: "Serengeti", description: "Warm amber perfume with exotic notes", type: "perfume", category: "fragrance", color: "amber", price: "3,200" },
  { id: 5, name: "Amazon", description: "Tropical print casual wear shirt", type: "clothing", category: "shirt", color: "multicolor", price: "1,800" },
  { id: 6, name: "Nile", description: "Fresh aquatic blue perfume", type: "perfume", category: "fragrance", color: "blue", price: "2,500" },
  { id: 7, name: "Everest", description: "White snow jacket for extreme cold", type: "clothing", category: "jacket", color: "white" },
  { id: 8, name: "Venus", description: "Romantic pink floral perfume", type: "perfume", category: "fragrance", color: "pink" },
  { id: 9, name: "Mars", description: "Bold red casual t-shirt", type: "clothing", category: "shirt", color: "red" },
  { id: 10, name: "Saturn", description: "Mysterious dark amber cologne", type: "perfume", category: "fragrance", color: "amber" },
  { id: 11, name: "Kilimanjaro", description: "Sturdy hiking pants, earth tone", type: "clothing", category: "pants", color: "brown" },
  { id: 12, name: "Andes", description: "Mountain fresh cologne for men", type: "perfume", category: "fragrance", color: "blue" },
  { id: 13, name: "Alps", description: "Winter white sweater with snowflake pattern", type: "clothing", category: "sweater", color: "white" },
  { id: 14, name: "Danube", description: "River blue evening gown", type: "clothing", category: "dress", color: "blue" },
  { id: 15, name: "Yangtze", description: "Floral oriental perfume", type: "perfume", category: "fragrance", color: "yellow" },
  { id: 16, name: "Mississippi", description: "Classic denim blue jeans", type: "clothing", category: "pants", color: "blue" },
  { id: 17, name: "Volga", description: "Deep forest green perfume", type: "perfume", category: "fragrance", color: "green" },
  { id: 18, name: "Zambezi", description: "Safari style khaki shorts", type: "clothing", category: "shorts", color: "khaki" },
  { id: 19, name: "Ganges", description: "Spiritual white linen shirt", type: "clothing", category: "shirt", color: "white" },
  { id: 20, name: "Rhine", description: "Crisp white wine inspired perfume", type: "perfume", category: "fragrance", color: "clear" },
  { id: 21, name: "Tigris", description: "Golden evening gown with embroidery", type: "clothing", category: "dress", color: "gold" },
  { id: 22, name: "Euphrates", description: "Ancient spice inspired cologne", type: "perfume", category: "fragrance", color: "amber" },
  { id: 23, name: "Thames", description: "London fog gray trench coat", type: "clothing", category: "coat", color: "gray" },
  { id: 24, name: "Congo", description: "Rich dark wood scented perfume", type: "perfume", category: "fragrance", color: "brown" },
  { id: 25, name: "Sahara", description: "Desert sand colored loose pants", type: "clothing", category: "pants", color: "beige" },
  { id: 26, name: "Victoria", description: "Royal purple evening dress", type: "clothing", category: "dress", color: "purple" },
  { id: 27, name: "Tahoe", description: "Fresh mountain air cologne", type: "perfume", category: "fragrance", color: "blue" },
  { id: 28, name: "Atacama", description: "Lightweight desert hiking shirt", type: "clothing", category: "shirt", color: "tan" },
  { id: 29, name: "Namib", description: "Sunset orange casual dress", type: "clothing", category: "dress", color: "orange" },
  { id: 30, name: "Patagonia", description: "Adventure ready outdoor jacket", type: "clothing", category: "jacket", color: "green" },
  { id: 31, name: "Galapagos", description: "Exotic floral perfume", type: "perfume", category: "fragrance", color: "multicolor" },
  { id: 32, name: "BoraBora", description: "Tropical vacation wear set", type: "clothing", category: "set", color: "blue" },
  { id: 33, name: "Bali", description: "Exotic spice perfume with floral notes", type: "perfume", category: "fragrance", color: "orange" },
  { id: 34, name: "Ibiza", description: "Party ready sequin top", type: "clothing", category: "top", color: "silver" },
  { id: 35, name: "Santorini", description: "Mediterranean blue and white summer dress", type: "clothing", category: "dress", color: "blue" },
  { id: 36, name: "Tuscany", description: "Warm amber perfume with vineyard notes", type: "perfume", category: "fragrance", color: "amber" },
  { id: 37, name: "Maldives", description: "Turquoise beach wear", type: "clothing", category: "swimwear", color: "turquoise" },
  { id: 38, name: "Fiji", description: "Tropical fruit inspired perfume", type: "perfume", category: "fragrance", color: "yellow" },
  { id: 39, name: "Himalaya", description: "Expedition grade mountain jacket", type: "clothing", category: "jacket", color: "red" },
  { id: 40, name: "Rockies", description: "Pine and cedar cologne", type: "perfume", category: "fragrance", color: "green" },
  { id: 41, name: "Seychelles", description: "Beach paradise inspired sundress", type: "clothing", category: "dress", color: "teal" },
  { id: 42, name: "Madeira", description: "Wine inspired rich perfume", type: "perfume", category: "fragrance", color: "burgundy" },
  { id: 43, name: "Corsica", description: "Mediterranean style linen shirt", type: "clothing", category: "shirt", color: "blue" },
  { id: 44, name: "Arctic", description: "Icy cool mint cologne", type: "perfume", category: "fragrance", color: "white" },
  { id: 45, name: "Antarctica", description: "Extreme cold weather gear", type: "clothing", category: "outerwear", color: "blue" },
  { id: 46, name: "Nova", description: "Sparkling evening gown", type: "clothing", category: "dress", color: "silver" },
  { id: 47, name: "Samos", description: "Greek island inspired white top", type: "clothing", category: "top", color: "white" },
  { id: 48, name: "Orion", description: "Stellar night sky inspired cologne", type: "perfume", category: "fragrance", color: "blue" },
  { id: 49, name: "Titan", description: "Heavy duty work pants", type: "clothing", category: "pants", color: "brown" },
  { id: 50, name: "Phobos", description: "Bold dark leather jacket", type: "clothing", category: "jacket", color: "black" },
  { id: 51, name: "Deimos", description: "Space inspired unisex perfume", type: "perfume", category: "fragrance", color: "silver" },
  { id: 52, name: "Io", description: "Volcanic red evening dress", type: "clothing", category: "dress", color: "red" },
  { id: 53, name: "Europa", description: "Icy blue perfume with crisp notes", type: "perfume", category: "fragrance", color: "blue" },
  { id: 54, name: "Ganymede", description: "Earthy toned casual wear", type: "clothing", category: "casual", color: "brown" },
  { id: 55, name: "Callisto", description: "Celestial inspired night perfume", type: "perfume", category: "fragrance", color: "purple" },
  { id: 56, name: "Luna", description: "Moonlight silver evening gown", type: "clothing", category: "dress", color: "silver" },
  { id: 57, name: "Neptune", description: "Deep ocean blue cologne", type: "perfume", category: "fragrance", color: "blue" },
  { id: 58, name: "Uranus", description: "Sky blue casual shirt", type: "clothing", category: "shirt", color: "blue" },
  { id: 59, name: "Mercury", description: "Metallic silver workout wear", type: "clothing", category: "activewear", color: "silver" },
  { id: 60, name: "Jupiter", description: "Bold and powerful cologne", type: "perfume", category: "fragrance", color: "amber" },
  { id: 61, name: "Olympus", description: "Godly white formal wear", type: "clothing", category: "formal", color: "white" },
  { id: 62, name: "Helios", description: "Sun inspired warm perfume", type: "perfume", category: "fragrance", color: "gold" },
  { id: 63, name: "Gaia", description: "Earth toned organic cotton dress", type: "clothing", category: "dress", color: "green" },
  { id: 64, name: "Rhea", description: "Mother earth inspired perfume", type: "perfume", category: "fragrance", color: "brown" },
  { id: 65, name: "Zeus", description: "Powerful dark suit", type: "clothing", category: "formal", color: "black" },
  { id: 66, name: "Athena", description: "Wise and elegant evening gown", type: "clothing", category: "dress", color: "gray" },
  { id: 67, name: "Poseidon", description: "Ocean blue cologne with salt notes", type: "perfume", category: "fragrance", color: "blue" },
  { id: 68, name: "Hera", description: "Regal purple formal dress", type: "clothing", category: "dress", color: "purple" },
  { id: 69, name: "Ares", description: "Bold red leather jacket", type: "clothing", category: "jacket", color: "red" },
  { id: 70, name: "Apollo", description: "Bright citrus cologne", type: "perfume", category: "fragrance", color: "yellow" },
  { id: 71, name: "Aurora", description: "Dawn inspired pink dress", type: "clothing", category: "dress", color: "pink" },
  { id: 72, name: "Borealis", description: "Northern lights inspired evening wear", type: "clothing", category: "dress", color: "green" },
  { id: 73, name: "Zion", description: "Earthy hiking gear", type: "clothing", category: "outdoor", color: "brown" },
  { id: 74, name: "Yosemite", description: "Nature inspired green cologne", type: "perfume", category: "fragrance", color: "green" },
  { id: 75, name: "Yellowstone", description: "Outdoor adventure jacket", type: "clothing", category: "jacket", color: "yellow" },
  { id: 76, name: "Acadia", description: "Forest green casual wear", type: "clothing", category: "casual", color: "green" },
  { id: 77, name: "Denali", description: "Mountain peak white winter coat", type: "clothing", category: "coat", color: "white" },
  { id: 78, name: "Glacier", description: "Icy cool blue perfume", type: "perfume", category: "fragrance", color: "blue" },
  { id: 79, name: "Banff", description: "Canadian wilderness inspired outdoor wear", type: "clothing", category: "outdoor", color: "green" },
  { id: 80, name: "Jasper", description: "Gemstone inspired jewelry collection", type: "clothing", category: "accessories", color: "multicolor" },
  { id: 81, name: "Matterhorn", description: "Alpine mountain inspired cologne", type: "perfume", category: "fragrance", color: "white" },
  { id: 82, name: "Fuji", description: "Japanese inspired minimalist dress", type: "clothing", category: "dress", color: "white" },
  { id: 83, name: "Sinai", description: "Desert journey inspired perfume", type: "perfume", category: "fragrance", color: "gold" },
  { id: 84, name: "Elbrus", description: "Mountain climber jacket", type: "clothing", category: "jacket", color: "gray" },
  { id: 85, name: "Drakensberg", description: "Adventure ready hiking pants", type: "clothing", category: "pants", color: "khaki" },
  { id: 86, name: "Etna", description: "Volcanic inspired spicy perfume", type: "perfume", category: "fragrance", color: "red" },
  { id: 87, name: "MaunaKea", description: "Hawaiian inspired casual wear", type: "clothing", category: "casual", color: "blue" },
  { id: 88, name: "Haleakala", description: "Sunrise inspired perfume", type: "perfume", category: "fragrance", color: "orange" },
  { id: 89, name: "Vesuvius", description: "Bold red evening wear", type: "clothing", category: "dress", color: "red" },
  { id: 90, name: "Ararat", description: "Ancient wood inspired cologne", type: "perfume", category: "fragrance", color: "brown" },
  { id: 91, name: "Sundarbans", description: "Tropical forest green dress", type: "clothing", category: "dress", color: "green" },
  { id: 92, name: "Okavango", description: "Safari inspired casual wear", type: "clothing", category: "casual", color: "khaki" },
  { id: 93, name: "Pantanal", description: "Wetland inspired fresh perfume", type: "perfume", category: "fragrance", color: "green" },
  { id: 94, name: "Carpathians", description: "Mountain range inspired rugged jacket", type: "clothing", category: "jacket", color: "brown" },
  { id: 95, name: "Appalachians", description: "Trail ready hiking boots", type: "clothing", category: "footwear", color: "brown" },
  { id: 96, name: "Caucasus", description: "Mountain air inspired cologne", type: "perfume", category: "fragrance", color: "blue" },
  { id: 97, name: "Tatra", description: "Winter mountain inspired sweater", type: "clothing", category: "sweater", color: "white" },
  { id: 98, name: "Pyrenees", description: "Border crossing adventure wear", type: "clothing", category: "outdoor", color: "gray" },
  { id: 99, name: "Altai", description: "Siberian inspired winter coat", type: "clothing", category: "coat", color: "blue" },
  { id: 100, name: "Ural", description: "Mountain divide inspired two-tone perfume", type: "perfume", category: "fragrance", color: "dual" }
];
