import CheckoutForm from "@/components/checkout/CheckoutForm";
import { DiamondWatermark } from "@/components/ui/DiamondWatermark";

export default function CheckoutPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <DiamondWatermark opacity={0.05} className="inset-0" />
      
      <div className="container relative z-10 mx-auto px-6 pt-32 pb-24 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl text-[#171716] mb-4">Checkout</h1>
          <p className="font-sans text-gray-500 text-sm">Please enter your details to complete your order.</p>
        </div>

        <CheckoutForm />
      </div>
    </div>
  );
}
