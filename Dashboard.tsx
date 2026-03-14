import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, Area, AreaChart } from "recharts";
import { Activity, Bell, Heart, Settings, LayoutDashboard, Crown, Search, TrendingUp, Filter, ListFilter, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Link, useLocation } from "wouter";

const data = [
  { month: 'Jan', avgProfit: 2400, marketTrend: 2200 },
  { month: 'Feb', avgProfit: 1398, marketTrend: 2100 },
  { month: 'Mar', avgProfit: 9800, marketTrend: 2600 },
  { month: 'Apr', avgProfit: 3908, marketTrend: 2900 },
  { month: 'May', avgProfit: 4800, marketTrend: 3100 },
  { month: 'Jun', avgProfit: 3800, marketTrend: 3400 },
  { month: 'Jul', avgProfit: 4300, marketTrend: 3600 },
];

export default function Dashboard() {
  const [location] = useLocation();

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col pb-20 md:pb-0">
      <Navbar />
      
      <div className="flex flex-1 pt-16 h-screen">
        {/* Sidebar - Modern Professional Layout */}
        <aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col fixed h-[calc(100vh-64px)] z-10">
          <div className="p-6 flex-1 flex flex-col">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4 p-3 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center font-display font-black text-orange-600 text-lg">
                  JD
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">John Doe</h3>
                  <div className="text-xs text-slate-500 font-medium">john.doe@trader.com</div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-[1px] rounded-xl">
                <div className="bg-white rounded-[11px] p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Crown className="w-4 h-4 text-orange-500" />
                    <span className="text-sm font-bold text-slate-700">Pro Plan</span>
                  </div>
                  <Badge variant="secondary" className="bg-orange-100 text-orange-700 hover:bg-orange-100 border-none text-[10px]">ACTIVE</Badge>
                </div>
              </div>
            </div>

            <nav className="space-y-1.5 flex-1">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-3">Main Menu</div>
              <SidebarItem icon={<LayoutDashboard size={18} />} label="Overview" href="/dashboard" active={location === '/dashboard'} />
              <SidebarItem icon={<Search size={18} />} label="Search Engine" href="/" active={location === '/'} />
              <SidebarItem icon={<Activity size={18} />} label="Arbitrage Finder" href="/arbitrage" active={location === '/arbitrage'} badge="New" />
              
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 mt-8 px-3">My Garage</div>
              <SidebarItem icon={<Heart size={18} />} label="Saved Sniffs" href="/favorites" active={location === '/favorites'} badge="12" />
              <SidebarItem icon={<Bell size={18} />} label="Active Alerts" href="/alerts" active={location === '/alerts'} badge="3" />
            </nav>

            <div className="mt-auto pt-6 border-t border-slate-100">
              <SidebarItem icon={<Settings size={18} />} label="Account Settings" href="/settings" active={location === '/settings'} />
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 md:ml-64 p-6 md:p-8 overflow-y-auto bg-slate-50/50">
          <div className="max-w-6xl mx-auto">
            <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h1 className="text-3xl font-display font-black text-slate-900 tracking-tight">Trader Dashboard</h1>
                <p className="text-slate-500 font-medium mt-1">Market overview and arbitrage opportunities for July 2026.</p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="bg-white border-slate-200 text-slate-600 font-semibold shadow-sm">
                  <ListFilter className="w-4 h-4 mr-2" /> Filter Report
                </Button>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold shadow-md shadow-orange-500/20">
                  Scan Market <ArrowUpRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </header>

            {/* Premium Metric Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="rounded-2xl border-slate-200 shadow-sm bg-white overflow-hidden relative group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Activity className="w-16 h-16 text-orange-500" />
                </div>
                <CardContent className="p-6 relative z-10">
                  <div className="text-slate-500 font-bold text-xs uppercase tracking-wider mb-2">Total Est. Profit</div>
                  <div className="text-4xl font-display font-black text-slate-900">€18,450</div>
                  <div className="flex items-center mt-3 text-sm">
                    <span className="flex items-center text-emerald-600 font-bold bg-emerald-50 px-2 py-1 rounded-md">
                      <TrendingUp className="w-3 h-3 mr-1" /> +12.5%
                    </span>
                    <span className="text-slate-400 font-medium ml-2">vs last month</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-slate-200 shadow-sm bg-white overflow-hidden relative group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <CheckCircle2 className="w-16 h-16 text-emerald-500" />
                </div>
                <CardContent className="p-6 relative z-10">
                  <div className="text-slate-500 font-bold text-xs uppercase tracking-wider mb-2">Active Arbitrage Deals</div>
                  <div className="text-4xl font-display font-black text-slate-900">24</div>
                  <div className="flex items-center mt-3 text-sm">
                    <span className="text-orange-600 font-bold bg-orange-50 px-2 py-1 rounded-md">
                      8 High Margin
                    </span>
                    <span className="text-slate-400 font-medium ml-2">deals found today</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-transparent shadow-md bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
                <CardContent className="p-6 relative z-10 h-full flex flex-col justify-between">
                  <div className="font-bold text-xs uppercase tracking-wider text-slate-400 flex justify-between items-center">
                    Market Intelligence
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                    </span>
                  </div>
                  <div>
                    <div className="text-lg font-bold mt-2 leading-snug">
                      German demand for <span className="text-orange-400">Hybrid SUVs</span> is up 14%. Sourcing from Italy yields highest margins.
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Charts Area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <Card className="rounded-2xl border-slate-200 shadow-sm bg-white lg:col-span-2">
                <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                  <div>
                    <h2 className="font-display font-bold text-lg text-slate-900">Profit Margin Trends</h2>
                    <p className="text-sm text-slate-500 font-medium">Your average profit vs overall market trend</p>
                  </div>
                  <SelectPeriod />
                </div>
                <CardContent className="p-6">
                  <div className="h-[280px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <defs>
                          <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#f97316" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                          </linearGradient>
                          <linearGradient id="colorMarket" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.2}/>
                            <stop offset="95%" stopColor="#94a3b8" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12, fontWeight: 500}} dy={10} />
                        <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12, fontWeight: 500}} tickFormatter={(val) => `€${val/1000}k`} />
                        <RechartsTooltip 
                          contentStyle={{borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontWeight: 'bold'}}
                        />
                        <Area type="monotone" dataKey="marketTrend" stroke="#cbd5e1" strokeWidth={2} fillOpacity={1} fill="url(#colorMarket)" />
                        <Area type="monotone" dataKey="avgProfit" stroke="#f97316" strokeWidth={3} fillOpacity={1} fill="url(#colorProfit)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Alerts Feed */}
              <Card className="rounded-2xl border-slate-200 shadow-sm bg-white flex flex-col">
                <div className="p-6 border-b border-slate-100">
                  <h2 className="font-display font-bold text-lg text-slate-900">Recent Alerts</h2>
                  <p className="text-sm text-slate-500 font-medium">Latest matches for your saved searches</p>
                </div>
                <CardContent className="p-0 flex-1 overflow-y-auto">
                  <div className="divide-y divide-slate-100">
                    {[
                      { name: "BMW 320d M-Sport", price: 34500, time: "2h ago", deal: "Great Deal", color: "emerald", bg: "emerald-50", text: "emerald-600", border: "emerald-200" },
                      { name: "Audi A4 Avant", price: 39500, time: "5h ago", deal: "Good Deal", color: "teal", bg: "teal-50", text: "teal-600", border: "teal-200" },
                      { name: "VW Golf 1.5 eTSI", price: 21000, time: "1d ago", deal: "Fair Price", color: "slate", bg: "slate-100", text: "slate-600", border: "slate-200" },
                    ].map((alert, i) => (
                      <div key={i} className="p-4 hover:bg-slate-50 transition-colors cursor-pointer group flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-slate-100 overflow-hidden shrink-0 border border-slate-200">
                          {/* Placeholder for car image */}
                          <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 group-hover:scale-110 transition-transform"></div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start mb-1">
                            <h4 className="font-bold text-slate-900 text-sm truncate group-hover:text-orange-500 transition-colors">{alert.name}</h4>
                            <span className="text-xs text-slate-400 font-medium shrink-0">{alert.time}</span>
                          </div>
                          <div className="text-sm font-black text-slate-900 mb-1">€{alert.price.toLocaleString()}</div>
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary" className={`bg-${alert.bg} text-${alert.text} border-${alert.border} text-[10px] px-1.5 py-0`}>{alert.deal}</Badge>
                            <span className="text-xs text-slate-500">🇩🇪 mobile.de</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <div className="p-4 border-t border-slate-100 text-center">
                  <Button variant="ghost" className="text-orange-500 hover:text-orange-600 hover:bg-orange-50 w-full font-bold text-sm">
                    View all alerts
                  </Button>
                </div>
              </Card>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}

function SidebarItem({ icon, label, href, active, badge }: { icon: React.ReactNode, label: string, href: string, active?: boolean, badge?: string }) {
  return (
    <Link href={href}>
      <a className={`flex items-center justify-between px-3 py-2.5 rounded-xl font-semibold transition-all duration-200 mx-3 ${
        active 
          ? 'bg-orange-50 text-orange-600 shadow-sm border border-orange-100/50' 
          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
      }`}>
        <div className="flex items-center gap-3">
          <span className={`${active ? 'text-orange-500' : 'text-slate-400'}`}>{icon}</span>
          {label}
        </div>
        {badge && (
          <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
            active ? 'bg-orange-200 text-orange-700' : 'bg-slate-200 text-slate-600'
          }`}>
            {badge}
          </span>
        )}
      </a>
    </Link>
  );
}

// Simple mock select for UI purposes
function SelectPeriod() {
  return (
    <div className="flex items-center gap-1 bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 cursor-pointer hover:bg-slate-100 transition-colors">
      <span className="text-sm font-semibold text-slate-600">Last 6 Months</span>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400"><path d="m6 9 6 6 6-6"/></svg>
    </div>
  )
}