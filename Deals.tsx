import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { ListingCard, type Listing } from "@/components/ListingCard";
import carBmw from "@/assets/images/car-bmw.png";
import carVw from "@/assets/images/car-vw.png";
import carAudi from "@/assets/images/car-audi.png";
import { Flame, Info, Filter, TrendingUp, ArrowUpRight, ArrowDownRight, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// Expanded deals for the mockup
const DEAL_LISTINGS: Listing[] = [
  {
    id: "1",
    title: "Peugeot 3008 1.2 PureTech Allure",
    price: 18500,
    marketValue: 22000,
    currency: "EUR",
    image: carVw, 
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
    marketValue: 38000,
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
    price: 11900,
    marketValue: 14500,
    currency: "EUR",
    image: carAudi, 
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
    price: 24900,
    marketValue: 28000,
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
    dealer: true,
    featured: true
  },
  {
    id: "5",
    title: "Audi A4 Avant 40 TFSI",
    price: 36500,
    marketValue: 41000,
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
    price: 34000,
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
    dealer: false
  }
];

export default function Deals() {
  return (
    <div className="min-h-screen bg-slate-50 pb-20 md:pb-0">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-28 pb-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 bg-orange-100 border border-orange-200 rounded-2xl shadow-sm">
                <Flame className="w-8 h-8 text-orange-600 fill-orange-500" />
              </div>
              <h1 className="text-4xl font-display font-black text-slate-900">Top Deals & Trends</h1>
            </div>
            <p className="text-lg text-slate-500 font-medium flex items-center gap-2">
              Cars priced significantly below market value and latest European trends.
              <Info className="w-4 h-4 text-slate-400" />
            </p>
          </div>
          <Button variant="outline" className="font-bold rounded-xl gap-2 h-11 border-slate-200 text-slate-600 bg-white shadow-sm hover:bg-slate-50">
            <Filter className="w-4 h-4" /> Filter Deals
          </Button>
        </div>

        {/* Market Trends Dashboard */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Activity className="w-5 h-5 text-blue-500" />
            <h2 className="text-xl font-bold text-slate-900">Live Market Trends</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Trend Card 1 */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
              <div className="text-sm font-semibold text-slate-500 mb-1">Most Searched Model</div>
              <div className="text-lg font-bold text-slate-900 mb-3">VW Golf VIII</div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">Last 24h</span>
                <span className="flex items-center gap-1 text-sm font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                  <ArrowUpRight className="w-3.5 h-3.5" /> +12%
                </span>
              </div>
            </div>
            
            {/* Trend Card 2 */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
              <div className="text-sm font-semibold text-slate-500 mb-1">Fastest Selling</div>
              <div className="text-lg font-bold text-slate-900 mb-3">PHEV SUVs</div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">Avg. 3.2 days</span>
                <span className="flex items-center gap-1 text-sm font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                  <ArrowUpRight className="w-3.5 h-3.5" /> +8%
                </span>
              </div>
            </div>

            {/* Trend Card 3 */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
              <div className="text-sm font-semibold text-slate-500 mb-1">Price Drop Alert</div>
              <div className="text-lg font-bold text-slate-900 mb-3">EVs (Used)</div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">Market Avg</span>
                <span className="flex items-center gap-1 text-sm font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded-full">
                  <ArrowDownRight className="w-3.5 h-3.5" /> -4.5%
                </span>
              </div>
            </div>

            {/* Trend Card 4 */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
              <div className="text-sm font-semibold text-slate-500 mb-1">Highest Margins</div>
              <div className="text-lg font-bold text-slate-900 mb-3">Germany ➔ France</div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">Arbitrage Route</span>
                <span className="flex items-center gap-1 text-sm font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full">
                  <TrendingUp className="w-3.5 h-3.5" /> HOT
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Hot Deals Grid */}
        <div className="flex items-center gap-2 mb-6">
          <Flame className="w-5 h-5 text-orange-500" />
          <h2 className="text-xl font-bold text-slate-900">Highest Margin Deals</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEAL_LISTINGS.map((listing, i) => (
            <motion.div
              key={listing.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <ListingCard listing={listing} />
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}