export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  hoverImage: string;
  material: string;
  diamondType?: string;
  carat?: string;
  isNew?: boolean;
};

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "rng-001",
    name: "Classic Solitaire Engagement Ring",
    category: "rings",
    price: 1250,
    image: "/images/RR-039-01White-_view5.webp",
    hoverImage: "/images/Gem 01_White_Metal 02_0_1_1_1.webp",
    material: "18K White Gold",
    diamondType: "Lab-Grown Diamond",
    carat: "1.5ct",
    isNew: true
  },
  {
    id: "rng-002",
    name: "Vintage Halo Diamond Ring",
    category: "rings",
    price: 1850,
    image: "/images/RR-039-01Yellow-_view2.webp",
    hoverImage: "/images/Gem 01_Yellow_Metal 02_0_1_1_1.webp",
    material: "18K Yellow Gold",
    diamondType: "Natural Diamond",
    carat: "1.0ct"
  },
  {
    id: "ear-001",
    name: "Diamond Stud Earrings",
    category: "earrings",
    price: 850,
    image: "/images/L2-27_10011LBWhite-_view3.webp",
    hoverImage: "/images/L2-27_10011LBWhite-_view5.webp",
    material: "14K White Gold",
    diamondType: "Lab-Grown Diamond",
    carat: "0.5ct",
  },
  {
    id: "nck-001",
    name: "Pear Cut Diamond Pendant",
    category: "necklaces",
    price: 1450,
    image: "/images/GJSPD-197-01Yellow-_view5(1).webp",
    hoverImage: "/images/GJSPD-197-01White-_view3.webp",
    material: "18K Yellow Gold",
    diamondType: "Natural Diamond",
    carat: "0.75ct"
  },
  {
    id: "rng-003",
    name: "Rose Gold Promise Ring",
    category: "rings",
    price: 1100,
    image: "/images/RR-039-01Rose-_view3.webp",
    hoverImage: "/images/RR-039-01Rose-_view5.webp",
    material: "18K Rose Gold",
    diamondType: "Lab-Grown Diamond",
    carat: "1.2ct",
    isNew: true
  }
];

export function getProductsByCategory(slug: string) {
  if (slug === "jewellery") return MOCK_PRODUCTS;
  if (slug === "new-in") return MOCK_PRODUCTS.filter(p => p.isNew);
  return MOCK_PRODUCTS.filter((p) => p.category === slug);
}

export function getProductById(id: string) {
  return MOCK_PRODUCTS.find(p => p.id === id);
}
