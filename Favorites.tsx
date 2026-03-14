import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { ListingCard, type Listing } from "@/components/ListingCard";
import { ListingModal } from "@/components/ListingModal";
import carBmw from "@/assets/images/car-bmw.png";
import carAudi from "@/assets/images/car-audi.png";
import { Heart, Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock Data for favorites
const FAVORITE_LISTINGS: Listing[] = [
  {
    id: "2",
    title: "BMW 320d Touring M Sport",
    price: 34500,
    marketValue: 35000,
    currency: "EUR",
    image: carBmw,
    year: 2021,
    mileage: 45000,
    fuel: "Diesel",
    power: 190,
    transmission: "Automatic",
    location: "Munich",
    countryCode: "DE",
    platform: "mobile.de",
    dealer: true
  },
  {
    id: "5",
    title: "Audi A4 Avant 40 TFSI",
    price: 39500,
    marketValue: 43000,
    currency: "EUR",
    image: carAudi,
    year: 2023,
    mileage: 15000,
    fuel: "Petrol",
    power: 204,
    transmission: "Automatic",
    location: "Warsaw",
    countryCode: "PL",
    platform: "Otomoto",
    dealer: true
  }
];

export default function Favorites() {
  const [selectedListing, setSelectedListing] = useState<Listing | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 pb-20 md:pb-0">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-28 pb-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 bg-red-50 border border-red-100 rounded-2xl">
                <Heart className="w-8 h-8 text-rose-500 fill-rose-500" />
              </div>
              <h1 className="text-4xl font-display font-black text-slate-900">Saved Sniffs</h1>
            </div>
            <p className="text-lg text-slate-500 font-medium">
              Cars you've saved for later. Keep an eye on price changes here.
            </p>
          </div>
          <div className="flex gap-3">
             <Button variant="outline" className="font-bold rounded-xl gap-2 h-11 border-slate-200 text-slate-600 bg-white">
               <SlidersHorizontal className="w-4 h-4" /> Filter
             </Button>
             <Button className="font-bold rounded-xl gap-2 h-11 bg-slate-900 text-white hover:bg-slate-800">
               <Search className="w-4 h-4" /> Discover More
             </Button>
          </div>
        </div>

        {FAVORITE_LISTINGS.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FAVORITE_LISTINGS.map((listing, idx) => (
              <ListingCard key={listing.id} listing={listing} index={idx} onClick={(l) => setSelectedListing(l)} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-3xl border border-slate-200 shadow-sm max-w-2xl mx-auto">
            <Heart className="w-16 h-16 text-slate-300 mx-auto mb-6" />
            <h2 className="text-2xl font-display font-black mb-3 text-slate-900">Your garage is empty</h2>
            <p className="text-slate-500 font-medium mb-8 max-w-sm mx-auto">Start sniffing around the market and hit the heart icon to save cars you want to track.</p>
            <Button className="font-bold rounded-xl h-12 px-8 bg-orange-500 hover:bg-orange-600 text-white">Find some deals</Button>
          </div>
        )}
      </main>

      <ListingModal 
        listing={selectedListing} 
        isOpen={!!selectedListing} 
        onClose={() => setSelectedListing(null)} 
      />
    </div>
  );
}