import React from "react";
import { Header, Footer } from "@/components/headerfooter"; 

export default function MinimalistPortfolio() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black antialiased flex flex-col">
      <div className="max-w-2xl w-full mx-auto px-6 py-16 md:py-24 flex flex-col flex-grow justify-between gap-12">
        <Header />
        
        <main className="flex-grow">
          
        </main>
        
        <Footer />
      </div>
    </div>
  );
}