import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Crown, CheckCircle2, XCircle, CreditCard, User, Bell, Shield } from "lucide-react";

export default function Settings() {
  const [isPro, setIsPro] = useState(true);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 pt-24 pb-20 max-w-5xl">
        <div className="mb-8">
          <h1 className="text-3xl font-display font-black text-slate-900 tracking-tight">Account Settings</h1>
          <p className="text-slate-500 font-medium mt-1">Manage your profile, preferences, and subscription tier.</p>
        </div>

        <Tabs defaultValue="subscription" className="w-full">
          <TabsList className="grid w-full md:w-auto grid-cols-2 md:grid-cols-4 bg-slate-200/50 p-1 rounded-xl mb-8">
            <TabsTrigger value="subscription" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm font-bold text-slate-600">Subscription</TabsTrigger>
            <TabsTrigger value="profile" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm font-bold text-slate-600">Profile</TabsTrigger>
            <TabsTrigger value="notifications" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm font-bold text-slate-600">Notifications</TabsTrigger>
            <TabsTrigger value="security" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm font-bold text-slate-600">Security</TabsTrigger>
          </TabsList>

          {/* Subscription Tab */}
          <TabsContent value="subscription" className="space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Current Plan Info */}
              <Card className="flex-1 rounded-[20px] border-slate-200 shadow-sm bg-white overflow-hidden relative">
                {isPro && <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-orange-400 to-amber-500"></div>}
                <CardHeader className="pb-4">
                  <CardTitle className="font-display font-bold text-xl flex items-center justify-between">
                    Current Plan
                    {isPro ? (
                      <span className="bg-orange-100 text-orange-700 text-xs px-2.5 py-1 rounded-md font-black flex items-center gap-1">
                        <Crown className="w-3.5 h-3.5" /> PRO TRADER
                      </span>
                    ) : (
                      <span className="bg-slate-100 text-slate-600 text-xs px-2.5 py-1 rounded-md font-black">
                        FREE TIER
                      </span>
                    )}
                  </CardTitle>
                  <CardDescription className="text-slate-500 font-medium">
                    {isPro ? "You have full access to all aggregator tools." : "You are using the limited free version."}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6 flex items-baseline gap-1">
                    <span className="text-4xl font-display font-black text-slate-900">{isPro ? '€49' : '€0'}</span>
                    <span className="text-slate-500 font-bold">/month</span>
                  </div>
                  
                  <div className="space-y-3">
                    <FeatureItem active={true} text="Search 8.4M+ European cars" />
                    <FeatureItem active={true} text="Basic Deal Score ratings" />
                    <FeatureItem active={isPro} text="Instant Alerts for new listings" />
                    <FeatureItem active={isPro} text="Arbitrage Finder & Profit Calculator" />
                    <FeatureItem active={isPro} text="Unlimited Saved Sniffs (Free: 5 max)" />
                    <FeatureItem active={isPro} text="Early access to underpriced deals (5m delay on free)" />
                  </div>
                </CardContent>
                <CardFooter className="pt-2 border-t border-slate-100 mt-6 bg-slate-50">
                  <div className="w-full flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-500">Toggle prototype state:</span>
                    <Switch 
                      checked={isPro} 
                      onCheckedChange={setIsPro} 
                      className="data-[state=checked]:bg-orange-500" 
                    />
                  </div>
                </CardFooter>
              </Card>

              {/* Billing Info */}
              <Card className="flex-1 rounded-[20px] border-slate-200 shadow-sm bg-white flex flex-col">
                <CardHeader>
                  <CardTitle className="font-display font-bold text-xl flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-slate-400" /> Billing Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-center">
                  {isPro ? (
                    <div className="space-y-6">
                      <div className="p-4 border border-slate-200 rounded-xl bg-slate-50 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-6 bg-slate-200 rounded flex items-center justify-center text-[10px] font-bold text-slate-500">VISA</div>
                          <div>
                            <div className="font-bold text-slate-900 text-sm">•••• •••• •••• 4242</div>
                            <div className="text-xs text-slate-500">Expires 12/28</div>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className="text-orange-600 font-bold hover:bg-orange-50">Edit</Button>
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900 mb-1">Next invoice</div>
                        <div className="text-slate-500 text-sm">€49.00 will be charged on August 15, 2026.</div>
                      </div>
                      <div className="flex gap-3 pt-4 mt-auto">
                        <Button variant="outline" className="w-full font-bold border-slate-200">View Invoices</Button>
                        <Button variant="outline" className="w-full font-bold border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700">Cancel Plan</Button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Crown className="w-8 h-8 text-orange-500" />
                      </div>
                      <h3 className="font-bold text-lg text-slate-900 mb-2">Ready to find better deals?</h3>
                      <p className="text-slate-500 text-sm mb-6 max-w-xs mx-auto">Upgrade to Pro Trader to unlock instant alerts and cross-border arbitrage opportunities.</p>
                      <Button className="font-bold bg-orange-500 hover:bg-orange-600 text-white rounded-xl shadow-md w-full" onClick={() => setIsPro(true)}>
                        Upgrade for €49/mo
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <Card className="rounded-[20px] border-slate-200 shadow-sm bg-white max-w-2xl">
              <CardHeader>
                <CardTitle className="font-display font-bold text-xl flex items-center gap-2">
                  <User className="w-5 h-5 text-slate-400" /> Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-6 mb-2">
                  <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center font-display font-black text-orange-600 text-3xl border-2 border-orange-200">
                    JD
                  </div>
                  <Button variant="outline" className="font-bold border-slate-200">Change Avatar</Button>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="font-bold text-slate-700">First Name</Label>
                    <Input defaultValue="John" className="bg-slate-50 border-slate-200 font-medium rounded-xl h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label className="font-bold text-slate-700">Last Name</Label>
                    <Input defaultValue="Doe" className="bg-slate-50 border-slate-200 font-medium rounded-xl h-11" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="font-bold text-slate-700">Email Address</Label>
                  <Input defaultValue="john.doe@trader.com" type="email" className="bg-slate-50 border-slate-200 font-medium rounded-xl h-11" />
                </div>
                
                <div className="space-y-2">
                  <Label className="font-bold text-slate-700">Company / Dealership Name (Optional)</Label>
                  <Input defaultValue="JD Auto Import" className="bg-slate-50 border-slate-200 font-medium rounded-xl h-11" />
                </div>
                
                <Button className="bg-slate-900 text-white hover:bg-slate-800 font-bold rounded-xl h-11 px-8">Save Changes</Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications">
            <Card className="rounded-[20px] border-slate-200 shadow-sm bg-white max-w-2xl">
              <CardHeader>
                <CardTitle className="font-display font-bold text-xl flex items-center gap-2">
                  <Bell className="w-5 h-5 text-slate-400" /> Notification Preferences
                </CardTitle>
                <CardDescription className="text-slate-500 font-medium">Manage how Carhamster contacts you about deals.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-100 rounded-xl">
                  <div>
                    <div className="font-bold text-slate-900">Instant Alert Emails</div>
                    <div className="text-sm text-slate-500">Receive emails as soon as a match is found.</div>
                  </div>
                  <Switch defaultChecked className="data-[state=checked]:bg-orange-500" />
                </div>
                
                <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-100 rounded-xl">
                  <div>
                    <div className="font-bold text-slate-900">Daily Digest</div>
                    <div className="text-sm text-slate-500">A daily summary of market trends and new sniffs.</div>
                  </div>
                  <Switch defaultChecked className="data-[state=checked]:bg-orange-500" />
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-100 rounded-xl">
                  <div>
                    <div className="font-bold text-slate-900">Marketing & Updates</div>
                    <div className="text-sm text-slate-500">News about new platform features.</div>
                  </div>
                  <Switch className="data-[state=checked]:bg-orange-500" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Security Tab */}
          <TabsContent value="security">
            <Card className="rounded-[20px] border-slate-200 shadow-sm bg-white max-w-2xl">
              <CardHeader>
                <CardTitle className="font-display font-bold text-xl flex items-center gap-2">
                  <Shield className="w-5 h-5 text-slate-400" /> Security Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label className="font-bold text-slate-700">Current Password</Label>
                  <Input type="password" placeholder="••••••••" className="bg-slate-50 border-slate-200 rounded-xl h-11" />
                </div>
                <div className="space-y-2">
                  <Label className="font-bold text-slate-700">New Password</Label>
                  <Input type="password" placeholder="••••••••" className="bg-slate-50 border-slate-200 rounded-xl h-11" />
                </div>
                <div className="space-y-2">
                  <Label className="font-bold text-slate-700">Confirm New Password</Label>
                  <Input type="password" placeholder="••••••••" className="bg-slate-50 border-slate-200 rounded-xl h-11" />
                </div>
                <Button className="bg-slate-900 text-white hover:bg-slate-800 font-bold rounded-xl h-11 px-8">Update Password</Button>
              </CardContent>
            </Card>
          </TabsContent>

        </Tabs>
      </main>
    </div>
  );
}

function FeatureItem({ active, text }: { active: boolean, text: string }) {
  return (
    <div className={`flex items-center gap-3 text-sm font-semibold ${active ? 'text-slate-700' : 'text-slate-400'}`}>
      {active ? (
        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
      ) : (
        <XCircle className="w-5 h-5 text-slate-300 shrink-0" />
      )}
      <span>{text}</span>
    </div>
  );
}