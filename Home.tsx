import { useState, useMemo } from "react";
import { Navbar } from "@/components/Navbar";
import { SearchForm } from "@/components/SearchForm";
import { ListingCard, type Listing } from "@/components/ListingCard";
import { ListingModal } from "@/components/ListingModal";
import heroBg from "@/assets/images/hero-hamster.png";
import carBmw from "@/assets/images/car-bmw.png";
import carVw from "@/assets/images/car-vw.png";
import carAudi from "@/assets/images/car-audi.png";
import { Button } from "@/components/ui/button";
import { Trophy, Zap, Map, ShieldCheck, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Expanded Mock Data for filtering demonstration
const MOCK_LISTINGS: Listing[] = [
  {
    id: "1",
    title: "Peugeot 3008 1.2 PureTech Allure",
    price: 18500,
    marketValue: 21000,
    currency: "EUR",
    image: carVw, // using existing car image as placeholder
    year: 2020,
    mileage: 55000,
    fuel: "Petrol",
    power: 130,
    transmission: "Manual",
    location: "Lyon",
    countryCode: "FR",
    platform: "Leboncoin",
    dealer: false,
    featured: true
  },
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
    id: "3",
    title: "Fiat 500 Hybrid Lounge",
    price: 12900,
    marketValue: 14500,
    currency: "EUR",
    image: carAudi, // placeholder
    year: 2022,
    mileage: 22000,
    fuel: "Hybrid",
    power: 70,
    transmission: "Manual",
    location: "Milan",
    countryCode: "IT",
    platform: "Subito",
    dealer: true
  },
  {
    id: "4",
    title: "Volkswagen Golf VIII 1.5 eTSI",
    price: 26900,
    marketValue: 26000,
    currency: "EUR",
    image: carVw,
    year: 2022,
    mileage: 18500,
    fuel: "Hybrid",
    power: 150,
    transmission: "Automatic",
    location: "Amsterdam",
    countryCode: "NL",
    platform: "AutoScout24",
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
  },
  {
    id: "6",
    title: "BMW 330e Sedan PHEV",
    price: 36000,
    marketValue: 39500,
    currency: "EUR",
    image: carBmw,
    year: 2021,
    mileage: 52000,
    fuel: "Hybrid",
    power: 292,
    transmission: "Automatic",
    location: "Berlin",
    countryCode: "DE",
    platform: "Kleinanzeigen",
    dealer: false,
    featured: true
  },
  {
    id: "7",
    title: "BMW X5 xDrive45e",
    price: 52000,
    marketValue: 55000,
    currency: "EUR",
    image: carBmw,
    year: 2020,
    mileage: 68000,
    fuel: "Hybrid",
    power: 394,
    transmission: "Automatic",
    location: "Hamburg",
    countryCode: "DE",
    platform: "mobile.de",
    dealer: true
  },
  {
    id: "8",
    title: "Volkswagen Tiguan 2.0 TDI",
    price: 28500,
    marketValue: 27500,
    currency: "EUR",
    image: carVw,
    year: 2019,
    mileage: 85000,
    fuel: "Diesel",
    power: 150,
    transmission: "Automatic",
    location: "Utrecht",
    countryCode: "NL",
    platform: "AutoScout24",
    dealer: true
  }
];

export default function Home() {
  const [filters, setFilters] = useState({
    brand: "any",
    maxPrice: "any",
    minYear: "any",
    maxMileage: 300000,
    countries: ["DE", "FR", "IT", "PL", "NL"]
  });

  const [isScanning, setIsScanning] = useState(false);
  const [selectedListing, setSelectedListing] = useState<Listing | null>(null);

  const filteredListings = useMemo(() => {
    return MOCK_LISTINGS.filter(car => {
      // Brand filter
      if (filters.brand !== "any" && !car.title.toLowerCase().includes(filters.brand.toLowerCase())) {
        return false;
      }
      
      // Price filter
      if (filters.maxPrice !== "any" && car.price > parseInt(filters.maxPrice)) {
        return false;
      }
      
      // Year filter
      if (filters.minYear !== "any" && car.year < parseInt(filters.minYear)) {
        return false;
      }

      // Mileage Filter
      if (car.mileage > filters.maxMileage) {
        return false;
      }

      // Country Filter
      if (!filters.countries.includes(car.countryCode)) {
        return false;
      }

      return true;
    });
  }, [filters]);

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-orange-200 selection:text-orange-900 pb-20 md:pb-0">
      <Navbar />

      {/* Hero Section - Clean Startup Approach */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-white border-b border-slate-200">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 px-4 py-1.5 rounded-full mb-8 shadow-sm"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
            </span>
            <span className="text-xs font-bold text-orange-700 tracking-wide uppercase">Searching 8.4M+ cars across Europe</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-black tracking-tight text-slate-900 mb-6 leading-[1.1]"
          >
            Find profitable car deals <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">across all borders.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            The professional aggregator for car traders. We analyze listings from mobile.de, AutoScout24, and local marketplaces to find underpriced vehicles instantly.
          </motion.p>
        </div>

        {/* Search Form component floats over the border */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, type: "spring", bounce: 0.4 }}
          className="container mx-auto px-4 relative z-20 translate-y-12"
        >
          <SearchForm 
            filters={filters} 
            onFilterChange={(newFilters) => {
              setIsScanning(true);
              setFilters({...filters, ...newFilters});
              setTimeout(() => setIsScanning(false), 1200); // Fake scan delay for skeleton loader
            }} 
          />
        </motion.div>
      </section>

      <div className="h-12 bg-slate-50"></div> {/* Spacing adjustment for floated search */}

      {/* Trust Metrics - Clean modern grid */}
      <section className="container mx-auto px-4 py-16 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-700 mb-5 border border-slate-100">
              <Map className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-xl text-slate-900 mb-2">European Coverage</h3>
            <p className="text-slate-500 font-medium text-sm leading-relaxed">Search simultaneously across Germany, France, Italy, Poland, and the Netherlands in one interface.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500 mb-5 border border-orange-100">
              <Trophy className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-xl text-slate-900 mb-2">Deal Scoring Engine</h3>
            <p className="text-slate-500 font-medium text-sm leading-relaxed">Our algorithm compares asking prices against real-time market averages to instantly highlight profitable margins.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500 mb-5 border border-blue-100">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-xl text-slate-900 mb-2">Unified Formatting</h3>
            <p className="text-slate-500 font-medium text-sm leading-relaxed">Every listing is normalized into a clean, standardized format regardless of which marketplace it came from.</p>
          </div>
        </div>
      </section>

      {/* Data Results Section */}
      <section className="container mx-auto px-4 py-12 mb-24" id="results">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-display font-black text-slate-900 mb-2">Live Market Opportunities</h2>
            <p className="text-slate-500 font-medium">Found {filteredListings.length} matching deals across Europe.</p>
          </div>
          <div className="flex gap-3">
             <Button variant="outline" className="bg-white border-slate-200 text-slate-600 font-semibold shadow-sm rounded-xl h-11">
               <Filter className="w-4 h-4 mr-2" /> Sort By: Highest Margin
             </Button>
          </div>
        </div>

        <AnimatePresence mode="popLayout">
          {isScanning ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={`skeleton-${i}`} className="bg-white rounded-[20px] overflow-hidden border border-slate-200 h-[420px] flex flex-col shadow-sm">
                  <div className="h-48 bg-slate-100 animate-pulse" />
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="h-6 bg-slate-100 rounded-md w-3/4 mb-4 animate-pulse" />
                    <div className="h-8 bg-slate-100 rounded-md w-1/3 mb-6 animate-pulse" />
                    <div className="mt-auto grid grid-cols-2 gap-3 mb-6">
                      <div className="h-8 bg-slate-100 rounded-lg animate-pulse" />
                      <div className="h-8 bg-slate-100 rounded-lg animate-pulse" />
                      <div className="h-8 bg-slate-100 rounded-lg animate-pulse" />
                      <div className="h-8 bg-slate-100 rounded-lg animate-pulse" />
                    </div>
                    <div className="h-11 bg-slate-100 rounded-xl animate-pulse" />
                  </div>
                </div>
              ))}
            </motion.div>
          ) : filteredListings.length > 0 ? (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredListings.map((listing, index) => (
                <motion.div
                  key={listing.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <ListingCard listing={listing} onClick={(l) => setSelectedListing(l)} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center py-20 bg-white rounded-3xl border border-slate-200"
            >
              <motion.div 
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <Filter className="w-8 h-8 text-slate-400" />
              </motion.div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">No cars found</h3>
              <p className="text-slate-500 max-w-md mx-auto">We couldn't find any sniffs matching your exact criteria. Try broadening your search.</p>
              <Button 
                variant="outline" 
                className="mt-6 font-bold"
                onClick={() => setFilters({ brand: "any", maxPrice: "any", minYear: "any", maxMileage: 300000, countries: ["DE", "FR", "IT", "PL", "NL"] })}
              >
                Reset Filters
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Footer */}
      <footer className="bg-white py-16 border-t border-slate-200">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 font-display font-black text-2xl mb-6 text-slate-900">
            <span>Car<span className="text-orange-500">hamster</span></span>
          </div>
          <p className="text-slate-500 font-medium text-sm max-w-md mx-auto mb-8">
            The professional aggregator platform for European car traders.
          </p>
          <div className="flex justify-center gap-8 font-semibold text-slate-600 text-sm">
            <a href="#" className="hover:text-orange-500 transition-colors">Platform Features</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Pricing</a>
            <a href="#" className="hover:text-orange-500 transition-colors">API Access</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Terms</a>
          </div>
          <div className="mt-12 text-xs font-medium text-slate-400">
            © 2026 Carhamster MVP. A demonstration platform.
          </div>
        </div>
      </footer>

      {/* Detail Modal */}
      <ListingModal 
        listing={selectedListing} 
        isOpen={!!selectedListing} 
        onClose={() => setSelectedListing(null)} 
      />
    </div>
  );
}