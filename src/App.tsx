import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Zap, Shield, BarChart3, Users, Globe, Star, ArrowRight, 
  Play, ChevronDown, Menu, X 
} from 'lucide-react';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI-Powered Insights",
      desc: "Real-time analytics and predictive modeling powered by advanced AI algorithms.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      desc: "Bank-level encryption and compliance with SOC2, GDPR, and ISO standards.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Interactive Dashboards",
      desc: "Customizable, beautiful dashboards that update in real-time.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Collaboration",
      desc: "Seamless workflows with role-based access and live editing.",
      color: "from-rose-500 to-orange-500"
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO at Vertex Labs",
      content: "Nexus has transformed how our team makes data-driven decisions. The AI insights are game-changing.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "CEO at Aurora Dynamics",
      content: "The most intuitive dashboard I've ever used. Our productivity increased by 340% in the first month.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5
    },
    {
      name: "Priya Patel",
      role: "Head of Ops at QuantumForge",
      content: "Integrations were seamless. The support team is phenomenal.",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5
    },
  ];

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      price: 29,
      period: '/mo',
      description: 'Perfect for small teams getting started',
      features: ['Up to 5 team members', 'Basic AI insights', '10 dashboards', 'Email support'],
      popular: false
    },
    {
      id: 'pro',
      name: 'Pro',
      price: 79,
      period: '/mo',
      description: 'For growing businesses',
      features: ['Unlimited team members', 'Advanced AI', 'Unlimited dashboards', 'Priority support', 'Custom integrations'],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 199,
      period: '/mo',
      description: 'For large organizations',
      features: ['Everything in Pro', 'Dedicated manager', 'SSO & Advanced security', 'Custom AI training', '24/7 phone support'],
      popular: false
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-hidden">
      {/* Navbar */}
      <motion.nav 
        style={{ opacity: headerOpacity }}
        className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
              <span className="font-bold text-xl tracking-tighter">N</span>
            </div>
            <span className="text-2xl font-semibold tracking-tighter">NEXUS</span>
          </div>

          <div className="hidden md:flex items-center gap-10 text-sm font-medium">
            <a href="#features" className="hover:text-purple-400 transition-colors">Features</a>
            <a href="#dashboard" className="hover:text-purple-400 transition-colors">Demo</a>
            <a href="#pricing" className="hover:text-purple-400 transition-colors">Pricing</a>
            <a href="#testimonials" className="hover:text-purple-400 transition-colors">Testimonials</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden md:block px-6 py-2.5 text-sm font-medium rounded-full border border-white/20 hover:bg-white/5 transition-all">
              Log in
            </button>
            <button className="px-6 py-2.5 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-all flex items-center gap-2">
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden border-t border-white/10 bg-[#0a0a0f]"
          >
            <div className="px-6 py-8 flex flex-col gap-6 text-lg">
              <a href="#features" className="hover:text-purple-400">Features</a>
              <a href="#dashboard" className="hover:text-purple-400">Demo</a>
              <a href="#pricing" className="hover:text-purple-400">Pricing</a>
              <a href="#testimonials" className="hover:text-purple-400">Testimonials</a>
              <div className="pt-4 border-t border-white/10 flex flex-col gap-4">
                <button className="py-3 text-left">Log in</button>
                <button className="py-3 bg-white text-black rounded-full font-semibold">Get Started</button>
              </div>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(at_50%_30%,rgba(99,102,241,0.15),transparent_70%)]"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
            >
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-xs uppercase tracking-[2px] font-mono">Now in Public Beta</span>
            </motion.div>

            <h1 className="text-7xl md:text-8xl font-bold tracking-tighter leading-none mb-8">
              The Future of<br />
              <span className="gradient-text">Business Intelligence</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12">
              AI-native platform for modern teams. Turn data into decisions with breathtaking dashboards and intelligent automation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group px-10 py-5 bg-white text-black font-semibold rounded-2xl flex items-center justify-center gap-3 text-lg hover:shadow-2xl hover:shadow-purple-500/30 transition-all"
              >
                Start Free Trial
                <ArrowRight className="group-hover:translate-x-1 transition" />
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-5 border border-white/30 hover:bg-white/5 rounded-2xl flex items-center justify-center gap-3 text-lg transition-all"
              >
                <Play className="w-5 h-5" /> Watch 2:14 Demo
              </motion.button>
            </div>

            <div className="mt-16 text-xs text-gray-500 flex justify-center items-center gap-8">
              <div>Trusted by teams at</div>
              <div className="flex gap-8 opacity-70">
                <div>STRIPE</div>
                <div>OPENAI</div>
                <div>NOTION</div>
                <div>VERCEL</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Prompt */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-xs tracking-widest mb-2">SCROLL TO EXPLORE</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline px-4 py-1 bg-white/5 rounded-full text-sm tracking-widest mb-4">POWERFUL FEATURES</div>
            <h2 className="text-5xl font-bold tracking-tighter mt-4">Built for the ambitious</h2>
            <p className="text-xl text-gray-400 mt-4 max-w-md mx-auto">Everything you need to run a world-class operation.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="futuristic-card glass p-8 rounded-3xl group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-8 text-white`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                
                <div className="h-px bg-white/10 my-8" />
                
                <div className="text-purple-400 text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Dashboard Preview */}
      <section id="dashboard" className="py-24 bg-black/40 border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-5/12">
              <div className="sticky top-24">
                <div className="uppercase tracking-[3px] text-xs text-purple-400 mb-3">LIVE PREVIEW</div>
                <h2 className="text-6xl font-bold tracking-tighter leading-none mb-6">See it in action</h2>
                <p className="text-xl text-gray-400">Hover and interact with our beautifully crafted dashboard. Built with performance in mind.</p>
                
                <div className="mt-12 flex flex-wrap gap-3">
                  {['Revenue', 'Users', 'Conversion', 'Pipeline'].map((tag, i) => (
                    <div key={i} className="px-5 py-2 bg-white/5 text-xs rounded-full border border-white/10">{tag}</div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:w-7/12 relative">
              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="glass rounded-3xl p-3 shadow-2xl border border-white/10 overflow-hidden relative"
              >
                {/* Mock Dashboard */}
                <div className="bg-[#111113] rounded-2xl h-[580px] relative overflow-hidden">
                  {/* Top Bar */}
                  <div className="h-14 border-b border-white/10 flex items-center px-6 justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-lg" />
                      <div>
                        <div className="text-sm font-medium">Q3 Performance</div>
                        <div className="text-[10px] text-emerald-400">+24% from last quarter</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className="w-7 h-7 rounded-full bg-white/10" />
                      ))}
                    </div>
                  </div>

                  {/* Charts Area */}
                  <div className="p-8 grid grid-cols-1 lg:grid-cols-7 gap-6 h-[calc(100%-56px)]">
                    {/* Main Chart */}
                    <div className="lg:col-span-4 bg-[#1a1a1f] rounded-2xl p-6 relative overflow-hidden">
                      <div className="flex justify-between mb-8">
                        <div>
                          <div className="text-sm text-gray-400">REVENUE TREND</div>
                          <div className="text-4xl font-semibold mt-1">$2.84m</div>
                        </div>
                        <div className="text-emerald-400 text-sm flex items-center">↑ 18.4%</div>
                      </div>
                      {/* Fake SVG Chart */}
                      <svg viewBox="0 0 400 180" className="w-full h-44" fill="none">
                        <defs>
                          <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.6"/>
                            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.05"/>
                          </linearGradient>
                        </defs>
                        <path d="M0 140 Q80 110 160 125 Q240 70 320 95 Q400 40 400 140 L400 180 L0 180 Z" fill="url(#grad)" />
                        <polyline points="20,130 90,105 170,125 250,65 330,90 390,35" stroke="#a855f7" strokeWidth="3" strokeLinecap="round" fill="none"/>
                        <circle cx="390" cy="35" r="6" fill="#a855f7"/>
                      </svg>
                    </div>

                    {/* Sidebar Stats */}
                    <div className="lg:col-span-3 flex flex-col gap-6">
                      <div className="bg-[#1a1a1f] rounded-2xl p-6 flex-1">
                        <div className="text-xs text-gray-400 mb-4">ACTIVE USERS</div>
                        <div className="text-6xl font-semibold tabular-nums">12,459</div>
                        <div className="mt-6 h-2 bg-white/10 rounded">
                          <div className="h-2 w-[83%] bg-gradient-to-r from-purple-400 to-pink-400 rounded"></div>
                        </div>
                      </div>
                      <div className="bg-[#1a1a1f] rounded-2xl p-6 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between text-sm mb-4">
                            <span className="text-gray-400">TOP PERFORMING</span>
                            <span className="text-emerald-400">Campaign A</span>
                          </div>
                        </div>
                        <div className="text-5xl font-semibold">94.2%</div>
                        <div className="text-xs text-gray-400">CONVERSION RATE</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Showcase */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-8">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="md:col-span-5 glass p-12 rounded-3xl"
            >
              <div className="text-purple-400 text-sm font-mono mb-3">INTELLIGENCE LAYER</div>
              <h3 className="text-5xl font-bold tracking-tighter leading-none">Your AI Co-Pilot</h3>
              <p className="mt-8 text-lg text-gray-400 leading-relaxed">
                Get instant answers. Ask "What's our churn rate by segment?" and get beautiful visualizations and recommended actions.
              </p>
              <div className="mt-12 pt-12 border-t border-white/10 text-sm opacity-70">POWERED BY GPT-4O + PROPRIETARY MODELS</div>
            </motion.div>
            
            <div className="md:col-span-7 space-y-8">
              {[1,2,3].map((i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 10 }}
                  className="glass p-8 rounded-3xl flex items-start gap-8"
                >
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-2xl">✦</div>
                  <div>
                    <div className="font-semibold text-xl">Automated Insights</div>
                    <div className="text-gray-400 mt-2">Weekly executive briefings delivered to your inbox. 87% of our customers report making faster decisions.</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 border-t border-white/10 bg-black/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-purple-400 text-sm tracking-widest">PRICING</div>
            <h2 className="text-6xl font-bold tracking-tighter mt-3">Simple, transparent pricing</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div 
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedPlan(plan.id)}
                className={`futuristic-card rounded-3xl p-8 relative ${plan.popular ? 'border-2 border-purple-500 scale-[1.03] shadow-xl shadow-purple-500/20' : 'glass border border-white/10'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-xs font-semibold tracking-widest px-8 py-1 rounded-full">MOST POPULAR</div>
                )}
                
                <div className="mb-8">
                  <div className="font-semibold text-lg">{plan.name}</div>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-6xl font-semibold tracking-tighter">${plan.price}</span>
                    <span className="text-xl text-gray-400 ml-2">{plan.period}</span>
                  </div>
                  <p className="mt-3 text-gray-400 text-sm">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-12">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>

                <button 
                  className={`w-full py-4 rounded-2xl text-sm font-semibold tracking-wider transition-all ${plan.popular ? 'bg-white text-black hover:bg-gray-100' : 'bg-white/10 hover:bg-white/20 border border-white/20'}`}
                >
                  {plan.popular ? 'START 14-DAY TRIAL' : 'GET STARTED'}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold tracking-tight">Loved by the best teams</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass p-10 rounded-3xl"
              >
                <div className="flex gap-1 mb-8">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-lg leading-relaxed mb-10">"{testimonial.content}"</p>
                
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-white/20"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-t border-white/10 bg-black/40">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold tracking-tighter">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4">
            {[
              ["Is there a free plan?", "Yes. All new accounts start with a 14-day full-featured trial. No credit card required."],
              ["Can I connect my existing tools?", "Absolutely. We have native integrations with Slack, Hubspot, Salesforce, Stripe, and 40+ more."],
              ["How secure is my data?", "We take security extremely seriously. Your data is encrypted at rest and in transit. We are SOC 2 Type II certified."],
              ["Do you offer custom solutions?", "Yes. Our enterprise tier includes dedicated onboarding, custom model fine-tuning, and private deployments."],
            ].map(([q, a], i) => (
              <details key={i} className="glass rounded-2xl px-8 py-6 group">
                <summary className="flex justify-between items-center cursor-pointer list-none text-lg font-medium">
                  {q}
                  <div className="text-2xl group-open:rotate-45 transition-transform">+</div>
                </summary>
                <p className="mt-6 text-gray-400 text-[15px] leading-relaxed pr-8">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-y-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-xl font-bold">N</div>
              <span className="text-3xl font-semibold tracking-tighter">NEXUS</span>
            </div>
            <p className="text-gray-400 max-w-sm">AI that doesn't just analyze your data — it understands your business.</p>
            
            <div className="flex gap-6 mt-12 text-2xl">
              <a href="#" className="hover:text-purple-400 transition">𝕏</a>
              <a href="#" className="hover:text-purple-400 transition">LinkedIn</a>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <div className="uppercase text-xs tracking-widest text-gray-500 mb-6">Product</div>
            <div className="space-y-4 text-sm">
              <a href="#" className="block hover:text-white transition">Features</a>
              <a href="#" className="block hover:text-white transition">Solutions</a>
              <a href="#" className="block hover:text-white transition">Pricing</a>
              <a href="#" className="block hover:text-white transition">Changelog</a>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <div className="uppercase text-xs tracking-widest text-gray-500 mb-6">Company</div>
            <div className="space-y-4 text-sm">
              <a href="#" className="block hover:text-white transition">About</a>
              <a href="#" className="block hover:text-white transition">Blog</a>
              <a href="#" className="block hover:text-white transition">Careers</a>
              <a href="#" className="block hover:text-white transition">Contact</a>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <div className="uppercase text-xs tracking-widest text-gray-500 mb-6">Newsletter</div>
            <p className="text-sm text-gray-400 mb-6">Stay updated with the latest AI advancements and product releases.</p>
            
            <div className="flex">
              <input 
                type="email" 
                placeholder="you@company.com" 
                className="bg-white/5 border border-white/20 rounded-l-2xl px-5 py-4 text-sm flex-1 focus:outline-none focus:border-purple-500"
              />
              <button className="bg-white text-black px-8 rounded-r-2xl font-medium">→</button>
            </div>
          </div>
        </div>
        
        <div className="mt-24 text-center text-xs text-gray-500 border-t border-white/10 pt-8">
          © 2026 NEXUS TECHNOLOGIES. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </div>
  );
};

export default App;
