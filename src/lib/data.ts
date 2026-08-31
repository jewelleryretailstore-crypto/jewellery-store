import { fetchGraphQL } from './wordpress';

export type Product = {
  id: string;
  databaseId?: number;
  name: string;
  category: string;
  categories?: string[];
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

// Helper function to parse WooCommerce price strings (e.g. "₹38,000.00" -> 38000)
function parseWooPrice(priceString: string): number {
  if (!priceString) return 0;
  // If it's a range (e.g., "₹11,868.00 - ₹19,000.00"), take the first price
  const firstPriceStr = priceString.split('-')[0];
  return Number(firstPriceStr.replace(/[^\d.-]/g, ''));
}

export async function getAllProducts(): Promise<Product[]> {
  let wpProducts: Product[] = [];
  
  try {
    const query = `
      query GetProducts {
        products(first: 50) {
          nodes {
            id
            databaseId
            name
            slug
            productCategories {
              nodes {
                slug
              }
            }
            image {
              sourceUrl
            }
            galleryImages {
              nodes {
                sourceUrl
              }
            }
            ... on SimpleProduct {
              price
            }
            ... on VariableProduct {
              price
            }
          }
        }
      }
    `;
    
    const { data } = await fetchGraphQL(query);
    
    if (data?.products?.nodes) {
      wpProducts = data.products.nodes.map((node: any): Product => {
        const categorySlugs = node.productCategories?.nodes?.map((cat: any) => cat.slug) || ['uncategorized'];
        const primaryCategory = categorySlugs[0];
        
        return {
          id: node.slug, // Use slug as ID for clean URLs
          databaseId: node.databaseId,
          name: node.name,
          category: primaryCategory,
          categories: categorySlugs,
          price: parseWooPrice(node.price),
          image: node.image?.sourceUrl || '/images/diamond.webp',
          hoverImage: node.galleryImages?.nodes?.[1]?.sourceUrl || node.galleryImages?.nodes?.[0]?.sourceUrl || node.image?.sourceUrl || '/images/diamond.webp',
          material: '18K Gold', // Default placeholder
          isNew: true
        };
      });
    }
  } catch (error) {
    console.error("Failed to fetch WooCommerce products:", error);
  }

  // Merge mock products and WordPress products
  return [...wpProducts, ...MOCK_PRODUCTS];
}

export async function getProductById(id: string): Promise<Product | undefined> {
  const allProducts = await getAllProducts();
  return allProducts.find((p) => p.id === id);
}

export async function getProductsByCategory(categorySlug: string): Promise<Product[]> {
  const allProducts = await getAllProducts();
  if (categorySlug === "jewellery" || categorySlug === "all-jewelry") return allProducts;
  if (categorySlug === "new-in") return allProducts.filter(p => p.isNew);
  return allProducts.filter((p) => p.categories?.includes(categorySlug) || p.category === categorySlug);
}

export async function getProducts(): Promise<Product[]> {
  return await getAllProducts();
}
