import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Bell, Plus, Settings2, Trash2, CheckCircle2, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

export default function Alerts() {
  const [isNewAlertOpen, setIsNewAlertOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-orange-200 selection:text-orange-900 pb-20 md:pb-0">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-28 pb-20 max-w-4xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 bg-orange-50 border border-orange-100 rounded-2xl">
                <Bell className="w-8 h-8 text-orange-500 fill-orange-500" />
              </div>
              <h1 className="text-4xl font-display font-black text-slate-900">
                Active Alerts
              </h1>
            </div>
            <p className="text-lg text-slate-500 font-medium">
              We monitor 8.4M+ listings 24/7 and notify you instantly.
            </p>
          </div>
          <Button 
            onClick={() => setIsNewAlertOpen(true)}
            className="font-bold rounded-xl gap-2 h-11 bg-orange-500 hover:bg-orange-600 text-white shadow-md shadow-orange-500/20"
          >
            <Plus className="w-5 h-5" /> New Alert
          </Button>
        </div>

        <div className="space-y-4">
          {/* Alert Item 1 */}
          <Card className="rounded-[20px] border-slate-200 shadow-sm bg-white hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <h3 className="font-display font-bold text-xl text-slate-900">BMW 3 Series (G20)</h3>
                  <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold rounded-lg flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Active
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-600">
                  <span className="bg-slate-100 px-2 py-1 rounded-md border border-slate-200">Any Country</span>
                  <span className="bg-slate-100 px-2 py-1 rounded-md border border-slate-200">2019+</span>
                  <span className="bg-slate-100 px-2 py-1 rounded-md border border-slate-200">Max 80k km</span>
                  <span className="bg-orange-50 px-2 py-1 rounded-md text-orange-700 border border-orange-200 font-bold">Max €35k</span>
                </div>
                <div className="text-sm font-bold text-orange-600 flex items-center gap-1.5 pt-1">
                  <CheckCircle2 className="w-4 h-4" /> 12 new matches today
                </div>
              </div>
              
              <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end pt-4 md:pt-0 border-t md:border-0 border-slate-100">
                <div className="flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
                  <span className="text-sm font-bold text-slate-700">Email Alerts</span>
                  <Switch defaultChecked className="data-[state=checked]:bg-orange-500" />
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="rounded-xl border-slate-200 text-slate-500 hover:text-slate-900">
                    <Settings2 className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-xl border-slate-200 text-slate-500 hover:text-rose-600 hover:border-rose-200 hover:bg-rose-50">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Alert Item 2 */}
          <Card className="rounded-[20px] border-slate-200 shadow-sm bg-white/60 hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 opacity-80">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <h3 className="font-display font-bold text-xl text-slate-900">Volkswagen Golf Hybrid</h3>
                  <span className="px-2.5 py-1 bg-slate-100 text-slate-600 border border-slate-200 text-xs font-bold rounded-lg flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span> Paused
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-600">
                  <span className="bg-slate-100 px-2 py-1 rounded-md border border-slate-200">DE, NL, FR</span>
                  <span className="bg-slate-100 px-2 py-1 rounded-md border border-slate-200">2020+</span>
                  <span className="bg-slate-100 px-2 py-1 rounded-md border border-slate-200">Hybrid</span>
                  <span className="bg-slate-100 px-2 py-1 rounded-md text-slate-700 border border-slate-200 font-bold">Max €25k</span>
                </div>
              </div>
              
              <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end pt-4 md:pt-0 border-t md:border-0 border-slate-100">
                <div className="flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
                  <span className="text-sm font-bold text-slate-500">Email Alerts</span>
                  <Switch className="data-[state=checked]:bg-orange-500" />
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="rounded-xl border-slate-200 text-slate-500 hover:text-slate-900">
                    <Settings2 className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-xl border-slate-200 text-slate-500 hover:text-rose-600 hover:border-rose-200 hover:bg-rose-50">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* New Alert Modal */}
      <Dialog open={isNewAlertOpen} onOpenChange={setIsNewAlertOpen}>
        <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden rounded-[24px]">
          <div className="p-6 bg-slate-50 border-b border-slate-100">
            <DialogHeader>
              <DialogTitle className="font-display font-black text-2xl text-slate-900">Create New Alert</DialogTitle>
              <DialogDescription className="font-medium text-slate-500">
                Get notified the second a deal matching your criteria hits the market.
              </DialogDescription>
            </DialogHeader>
          </div>
          
          <div className="p-6 space-y-6">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="font-bold text-slate-700">Make</Label>
                  <Input placeholder="e.g. BMW" className="rounded-xl h-11 bg-slate-50 border-slate-200" />
                </div>
                <div className="space-y-2">
                  <Label className="font-bold text-slate-700">Model</Label>
                  <Input placeholder="e.g. 3 Series" className="rounded-xl h-11 bg-slate-50 border-slate-200" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="font-bold text-slate-700">Max Price (€)</Label>
                  <Input type="number" placeholder="35000" className="rounded-xl h-11 bg-slate-50 border-slate-200 font-bold" />
                </div>
                <div className="space-y-2">
                  <Label className="font-bold text-slate-700">Min Deal Score</Label>
                  <select className="flex h-11 w-full items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold outline-none focus:ring-2 focus:ring-orange-500">
                    <option>Any Score</option>
                    <option>Good Deal (+5%)</option>
                    <option>Great Deal (+10%)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <Label className="font-bold text-slate-700 mb-2 block">Source Markets</Label>
                <div className="flex flex-wrap gap-2">
                  {['DE', 'IT', 'FR', 'PL', 'NL', 'ES'].map(country => (
                    <Badge key={country} variant="outline" className={`px-3 py-1.5 cursor-pointer text-sm font-bold border-slate-200 hover:border-orange-500 hover:text-orange-600 transition-colors`}>
                      {country}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Switch defaultChecked className="data-[state=checked]:bg-orange-500" />
                <span className="text-sm font-bold text-slate-700">Email instantly</span>
              </div>
              <Button onClick={() => setIsNewAlertOpen(false)} className="bg-slate-900 text-white hover:bg-slate-800 font-bold rounded-xl h-11 px-8">
                Save Alert
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}