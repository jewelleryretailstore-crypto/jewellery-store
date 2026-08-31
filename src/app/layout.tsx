import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { DiamondCursor } from "@/components/ui/DiamondCursor";
import { WishlistProvider } from "@/context/WishlistContext";
import { CompareProvider } from "@/context/CompareContext";
import { CompareDrawer } from "@/components/ui/CompareDrawer";
import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";
import { CartDrawer } from "@/components/ui/CartDrawer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lumière & Co. | Premium Jewellery",
  description: "Timeless gold, refined silver and lab-grown diamonds, crafted for life's most meaningful moments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased flex flex-col min-h-screen`}>
        <AuthProvider>
          <CartProvider>
            <WishlistProvider>
              <CompareProvider>
                <DiamondCursor />
                <Header />
                <main className="flex-grow">{children}</main>
                <Footer />
                <CompareDrawer />
                <CartDrawer />
              </CompareProvider>
            </WishlistProvider>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
