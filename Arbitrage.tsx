import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, TrendingUp, AlertTriangle, Truck, ExternalLink, Calculator, Settings2, RefreshCcw } from "lucide-react";
import carBmw from "@/assets/images/car-bmw.png";
import carVw from "@/assets/images/car-vw.png";
import { motion, AnimatePresence } from "framer-motion";

// Define the type so we can update state easily
type ArbitrageOpportunity = {
  id: string;
  car: string;
  image: string;
  buyCountry: string;
  buyLocation: string;
  sellCountry: string;
  sellLocation: string;
  buyPrice: number;
  marketPriceDe: number;
  transportCost: number;
  regCost: number;
  daysToSell: number;
  riskLevel: 'Low' | 'Moderate' | 'High';
};

const INITIAL_OPPORTUNITIES: ArbitrageOpportunity[] = [
  {
    id: "arb-1",
    car: "BMW 320d M Sport 2021",
    image: carBmw,
    buyCountry: "IT",
    buyLocation: "Milan",
    sellCountry: "DE",
    sellLocation: "Munich",
    buyPrice: 28500,
    marketPriceDe: 34500,
    transportCost: 800,
    regCost: 350,
    daysToSell: 14,
    riskLevel: 'Moderate'
  },
  {
    id: "arb-2",
    car: "VW Golf VIII 1.5 eTSI 2022",
    image: carVw,
    buyCountry: "PL",
    buyLocation: "Warsaw",
    sellCountry: "FR",
    sellLocation: "Paris",
    buyPrice: 21000,
    marketPriceDe: 25500,
    transportCost: 650,
    regCost: 400,
    daysToSell: 21,
    riskLevel: 'Low'
  }
];

const COUNTRY_FLAGS: Record<string, string> = {
  'DE': '🇩🇪',
  'NL': '🇳🇱',
  'PL': '🇵🇱',
  'FR': '🇫🇷',
  'IT': '🇮🇹',
  'ES': '🇪🇸'
};

export default function Arbitrage() {
  const [opportunities, setOpportunities] = useState(INITIAL_OPPORTUNITIES);
  const [activeCalculator, setActiveCalculator] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);

  // Handle updating custom costs
  const handleCostUpdate = (id: string, field: 'transportCost' | 'regCost', value: string) => {
    const numValue = parseInt(value) || 0;
    setOpportunities(prev => prev.map(opp => 
      opp.id === id ? { ...opp, [field]: numValue } : opp
    ));
  };

  const handleScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      // In a real app, this would fetch new data
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-orange-200 selection:text-orange-900 pb-20 md:pb-0">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-28 pb-20 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 border-none text-[10px] uppercase tracking-wider font-bold mb-1 px-2.5 py-0.5">Pro Feature</Badge>
            </div>
            <h1 className="text-4xl font-display font-black text-slate-900 mb-2 tracking-tight">
              Arbitrage Profit Calculator
            </h1>
            <p className="text-slate-500 font-medium text-lg max-w-2xl">
              Calculate true cross-border net profit by adjusting real-time transport, import taxes, and registration fees.
            </p>
          </div>
          <Button 
            onClick={handleScan}
            disabled={isScanning}
            className="font-bold rounded-xl h-11 bg-slate-900 hover:bg-slate-800 text-white shadow-md transition-all w-full md:w-auto px-6"
          >
            {isScanning ? (
              <><RefreshCcw className="w-4 h-4 mr-2 animate-spin" /> Scanning Markets...</>
            ) : (
              <><RefreshCcw className="w-4 h-4 mr-2" /> Refresh Live Data</>
            )}
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {opportunities.map((opp, index) => {
            const totalCost = opp.buyPrice + opp.transportCost + opp.regCost;
            const netProfit = opp.marketPriceDe - totalCost;
            const roi = ((netProfit / totalCost) * 100).toFixed(1);
            const isCalcOpen = activeCalculator === opp.id;

            return (
              <motion.div
                key={opp.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden rounded-[24px] border-slate-200 shadow-sm hover:shadow-lg hover:border-orange-200 bg-white transition-all duration-300">
                  <div className="flex flex-col lg:flex-row h-full">
                    
                    {/* Image Section */}
                    <div className="w-full lg:w-[35%] h-64 lg:h-auto bg-slate-100 relative shrink-0 overflow-hidden group">
                      <img src={opp.image} alt={opp.car} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <Badge className="absolute top-4 left-4 bg-white/95 text-slate-900 border-slate-200 font-bold shadow-sm backdrop-blur-md px-3 py-1">
                        Est. turnover: {opp.daysToSell} days
                      </Badge>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="font-display font-black text-2xl leading-tight drop-shadow-md">{opp.car}</h3>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-6 md:p-8 flex-1 flex flex-col justify-between bg-white relative">
                      
                      {/* Interactive Calculator Toggle */}
                      <button 
                        onClick={() => setActiveCalculator(isCalcOpen ? null : opp.id)}
                        className={`absolute top-6 right-6 p-2.5 rounded-xl transition-colors border ${isCalcOpen ? 'bg-orange-100 text-orange-600 border-orange-200' : 'bg-slate-50 text-slate-400 border-slate-200 hover:bg-slate-100 hover:text-slate-600'}`}
                      >
                        <Settings2 className="w-5 h-5" />
                      </button>

                      <div className="mb-6 pr-12">
                        <div className="flex items-center gap-3 mb-6">
                           <div className="bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-2">
                             <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider mb-0.5">Calculated Net Profit</div>
                             <div className="text-2xl font-black text-emerald-700 tracking-tight">
                               +€{netProfit.toLocaleString()}
                             </div>
                           </div>
                           <div className="bg-slate-50 border border-slate-100 rounded-xl px-4 py-2">
                             <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">Est. ROI</div>
                             <div className="text-2xl font-black text-slate-700 tracking-tight">
                               {roi}%
                             </div>
                           </div>
                        </div>

                        {/* Trade Route Visualization */}
                        <div className="flex items-center justify-between bg-slate-50 border border-slate-100 rounded-2xl p-5 mb-2 relative overflow-hidden">
                          <div className="flex flex-col items-center relative z-10">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Buy (Source)</span>
                            <div className="flex items-center gap-2 text-xl font-black text-slate-900">
                              <span className="text-2xl drop-shadow-sm">{COUNTRY_FLAGS[opp.buyCountry]}</span>
                              <span>€{opp.buyPrice.toLocaleString()}</span>
                            </div>
                            <span className="text-sm font-medium text-slate-500 flex items-center gap-1 mt-1.5"><MapPin className="w-3.5 h-3.5"/> {opp.buyLocation}</span>
                          </div>
                          
                          <div className="flex flex-col items-center px-4 relative z-10 w-1/3">
                            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -z-10 rounded-full"></div>
                            <motion.div 
                              animate={{ x: [0, 10, 0] }}
                              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                              className="bg-white p-2.5 rounded-full border border-slate-200 shadow-sm text-orange-500"
                            >
                              <Truck className="w-5 h-5" />
                            </motion.div>
                            <div className="text-[11px] font-bold text-slate-500 mt-3 text-center leading-relaxed bg-slate-50 px-2">
                              +€{opp.transportCost + opp.regCost} Fees
                            </div>
                          </div>

                          <div className="flex flex-col items-center relative z-10">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Sell (Target)</span>
                            <div className="flex items-center gap-2 text-xl font-black text-orange-600">
                              <span className="text-2xl drop-shadow-sm">{COUNTRY_FLAGS[opp.sellCountry]}</span>
                              <span>€{opp.marketPriceDe.toLocaleString()}</span>
                            </div>
                            <span className="text-sm font-medium text-slate-500 flex items-center gap-1 mt-1.5"><MapPin className="w-3.5 h-3.5"/> {opp.sellLocation}</span>
                          </div>
                        </div>
                      </div>

                      {/* Expandable Cost Adjuster */}
                      <AnimatePresence>
                        {isCalcOpen && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden mb-6"
                          >
                            <div className="p-5 bg-orange-50/50 border border-orange-100 rounded-2xl space-y-4">
                              <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                                <Calculator className="w-4 h-4 text-orange-500" />
                                Custom Cost Adjustments
                              </h4>
                              <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <Label className="text-xs font-bold text-slate-600">Logistics / Transport (€)</Label>
                                  <Input 
                                    type="number" 
                                    value={opp.transportCost}
                                    onChange={(e) => handleCostUpdate(opp.id, 'transportCost', e.target.value)}
                                    className="bg-white border-slate-200 rounded-xl h-10 font-bold text-slate-900 focus-visible:ring-orange-500"
                                  />
                                </div>
                                <div className="space-y-2">
                                  <Label className="text-xs font-bold text-slate-600">Import & Reg. Fees (€)</Label>
                                  <Input 
                                    type="number" 
                                    value={opp.regCost}
                                    onChange={(e) => handleCostUpdate(opp.id, 'regCost', e.target.value)}
                                    className="bg-white border-slate-200 rounded-xl h-10 font-bold text-slate-900 focus-visible:ring-orange-500"
                                  />
                                </div>
                              </div>
                              <p className="text-[11px] text-slate-500 font-medium">
                                Adjusting these values will instantly recalculate the net profit and ROI metrics above.
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      
                      {/* Action Bar */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-auto pt-6 border-t border-slate-100 gap-4">
                        <div className="flex gap-3 w-full sm:w-auto">
                          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm font-bold ${
                            opp.riskLevel === 'Low' ? 'text-emerald-700 bg-emerald-50 border-emerald-100' : 
                            'text-amber-700 bg-amber-50 border-amber-100'
                          }`}>
                            <AlertTriangle className="w-4 h-4" />
                            {opp.riskLevel} Risk
                          </div>
                        </div>
                        
                        <div className="flex gap-3 w-full sm:w-auto">
                          <Button variant="outline" className="font-bold border-slate-200 text-slate-600 hover:bg-slate-50 flex-1 sm:flex-none h-11 rounded-xl">Save Setup</Button>
                          <Button className="font-bold bg-orange-500 text-white hover:bg-orange-600 flex-1 sm:flex-none h-11 shadow-sm shadow-orange-500/20 rounded-xl">
                            View Original Deal <ExternalLink className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </div>

                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </main>
    </div>
  );
}