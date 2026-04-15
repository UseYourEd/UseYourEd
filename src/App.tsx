/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Briefcase, 
  Heart, 
  Users, 
  ArrowRight, 
  Linkedin, 
  Mail, 
  Phone,
  CheckCircle2,
  TrendingUp,
  Award
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-gold selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-brand-beige/80 backdrop-blur-md border-b border-brand-navy/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="UseYourEd Logo" className="h-10 w-auto" referrerPolicy="no-referrer" />
            <div className="text-2xl font-serif font-semibold tracking-tight">
              UseYourEd<span className="text-brand-gold">.</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
            <a href="#about" className="hover:text-brand-gold transition-colors">About</a>
            <a href="#services" className="hover:text-brand-gold transition-colors">Services</a>
            <a href="#contact" className="px-5 py-2 bg-brand-navy text-white rounded-full hover:bg-brand-gold transition-all">Get in Touch</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 text-brand-gold text-xs font-bold uppercase tracking-widest mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
                </span>
                Available for new projects
              </div>
              <h1 className="text-6xl md:text-8xl font-serif leading-[0.9] mb-8">
                A Helping <br />
                <span className="italic text-brand-gold">Hand</span> for Growth.
              </h1>
              <p className="text-xl text-brand-navy/70 max-w-lg mb-10 leading-relaxed">
                20+ years of experience helping local businesses, charities, and individuals build systems that achieve goals.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-brand-navy text-white rounded-full font-medium flex items-center gap-2 hover:bg-brand-gold transition-all group">
                  Start a Conversation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <a 
                  href="https://www.linkedin.com/in/eddiehamilton/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 border border-brand-navy/20 rounded-full font-medium flex items-center gap-2 hover:bg-brand-navy hover:text-white transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-brand-navy border border-white/10 relative z-10 shadow-2xl">
                <img 
                  src="/ed-headshot.png" 
                  alt="Ed - UseYourEd" 
                  className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                {/* Overlay to blend with site colors */}
                <div className="absolute inset-0 bg-brand-navy/5 mix-blend-multiply"></div>
              </div>
              {/* Floating Stat Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-brand-navy/5 z-20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-serif font-bold">£40M+</div>
                    <div className="text-xs text-brand-navy/50 uppercase tracking-widest font-bold">Revenue Managed</div>
                  </div>
                </div>
              </div>
              <div className="absolute top-12 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-brand-navy/5 z-20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-serif font-bold">250+</div>
                    <div className="text-xs text-brand-navy/50 uppercase tracking-widest font-bold">People Managed</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-brand-navy text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold mb-8">The Philosophy</p>
            <h2 className="text-3xl md:text-5xl font-serif italic max-w-4xl mx-auto leading-tight">
              "You do not rise to the level of your goals. You fall to the level of your systems."
            </h2>
            <p className="mt-8 text-white/50 font-medium">— James Clear, Atomic Habits</p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section id="about" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-5xl font-serif mb-8">From Market Stalls to <br /><span className="text-brand-gold italic">Multinational Boardrooms.</span></h2>
              <div className="space-y-6 text-brand-navy/70 leading-relaxed text-lg">
                <p>
                  My experience isn't just a list of titles; it's a journey through every level of business. I've worked on projects with CEOs of multinational companies and government bodies, but I've also worked on market stalls and even dressed as a mascot for event PR.
                </p>
                <p>
                  That "everything in-between" experience taught me one vital truth: <strong>Successful businesses share similar traits, and those traits can be replicated.</strong>
                </p>
                <p>
                  My proudest accomplishments aren't the big sales or project completions, but helping my clients, teams, and mentees achieve their goals. I've helped more than 20 people gain promotions and raised over £150,000 for charities.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="aspect-square rounded-2xl overflow-hidden border-8 border-brand-gold/10 shadow-2xl bg-white p-8 flex items-center justify-center">
                <img 
                  src="/logo.png" 
                  alt="UseYourEd Logo" 
                  className="max-w-full max-h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-brand-gold rounded-full flex items-center justify-center text-white text-center p-4 shadow-xl rotate-12">
                <span className="text-xs font-bold uppercase tracking-widest">20+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-5xl font-serif mb-6">How I can help you.</h2>
              <p className="text-lg text-brand-navy/60">
                Tailored support across three core pillars, leveraging two decades of high-level operational experience.
              </p>
            </div>
            <div className="text-right">
              <div className="text-brand-gold font-serif text-6xl opacity-20">01—03</div>
            </div>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {/* Business Support */}
            <motion.div variants={fadeIn} className="group p-10 rounded-[2rem] bg-white border border-brand-navy/5 hover:border-brand-gold/30 transition-all hover:shadow-2xl">
              <div className="w-14 h-14 rounded-2xl bg-brand-navy text-white flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Briefcase className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-serif mb-4">Local Business</h3>
              <ul className="space-y-4 mb-8">
                {[
                  "Organisation Optimisation",
                  "Standard Operating Procedures",
                  "Digital Transformation",
                  "Customer Journey Mapping",
                  "Staff Retention Strategies"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-brand-navy/70 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-xl border border-brand-navy/10 font-bold text-xs uppercase tracking-widest hover:bg-brand-navy hover:text-white transition-all">
                Learn More
              </button>
            </motion.div>

            {/* Charity Support */}
            <motion.div variants={fadeIn} className="group p-10 rounded-[2rem] bg-brand-navy text-white hover:shadow-2xl transition-all">
              <div className="w-14 h-14 rounded-2xl bg-brand-gold text-white flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Heart className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-serif mb-4">Charity Sector</h3>
              <ul className="space-y-4 mb-8">
                {[
                  "Sales Pitch Advice",
                  "Value Proposition Creation",
                  "Market & Competitor Research",
                  "Landing Page Creation",
                  "Funding Bid Submission"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-xl bg-white/10 font-bold text-xs uppercase tracking-widest hover:bg-brand-gold transition-all">
                Learn More
              </button>
            </motion.div>

            {/* People Support */}
            <motion.div variants={fadeIn} className="group p-10 rounded-[2rem] bg-white border border-brand-navy/5 hover:border-brand-gold/30 transition-all hover:shadow-2xl">
              <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 text-brand-gold flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-serif mb-4">Personal Mentoring</h3>
              <ul className="space-y-4 mb-8">
                {[
                  "Interview Preparation",
                  "Annual Appraisal Prep",
                  "Salary Negotiation",
                  "School Leaver Advice (Free)",
                  "Pensioner Quote Checking"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-brand-navy/70 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-xl border border-brand-navy/10 font-bold text-xs uppercase tracking-widest hover:bg-brand-navy hover:text-white transition-all">
                Learn More
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Free Offer Section */}
      <section className="py-20 px-6 bg-brand-gold/5">
        <div className="max-w-4xl mx-auto text-center">
          <Award className="w-12 h-12 text-brand-gold mx-auto mb-8" />
          <h2 className="text-4xl font-serif mb-6">Giving Back to the Next Generation.</h2>
          <p className="text-lg text-brand-navy/70 mb-10 leading-relaxed">
            School leaver, in Uni/College or a recent graduate? I offer <span className="text-brand-navy font-bold">3 hours of free 1-2-1 time</span>. 
            Life is getting tougher—don't be too proud to seek a wiser perspective.
          </p>
          <button className="px-10 py-5 bg-brand-gold text-white rounded-full font-bold uppercase tracking-widest hover:shadow-lg hover:-translate-y-1 transition-all">
            Claim Your Free Session
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-brand-navy rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
            <div className="relative z-10 grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-5xl font-serif mb-8">Let's have a chat.</h2>
                <p className="text-white/60 text-lg mb-12">
                  Have a work problem or project you can't make time for? 
                  I'll put together a proposal at no cost or obligation.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-brand-gold" />
                    </div>
                    <span className="text-lg">ed@useyoured.com</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-brand-gold" />
                    </div>
                    <div className="space-y-4">
                      <div className="flex flex-col">
                        <span className="text-sm text-white/40 uppercase tracking-widest font-bold">UK</span>
                        <span className="text-lg">+44 7732 093364</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm text-white/40 uppercase tracking-widest font-bold">Ireland</span>
                        <span className="text-lg">+353 873217367</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-white/50">Name</label>
                      <input type="text" className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-white/50">Email</label>
                      <input type="email" className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/50">How can I help?</label>
                    <select className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors appearance-none">
                      <option className="bg-brand-navy">Business Support</option>
                      <option className="bg-brand-navy">Charity Support</option>
                      <option className="bg-brand-navy">Personal Mentoring</option>
                      <option className="bg-brand-navy">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/50">Message</label>
                    <textarea rows={4} className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors resize-none"></textarea>
                  </div>
                  <button className="w-full py-5 bg-brand-gold text-white rounded-xl font-bold uppercase tracking-widest hover:bg-brand-gold/80 transition-all">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            {/* Decorative background element */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-gold/10 rounded-full blur-[100px]"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-brand-navy/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="UseYourEd Logo" className="h-8 w-auto opacity-50 grayscale hover:grayscale-0 transition-all" referrerPolicy="no-referrer" />
            <div className="text-xl font-serif font-semibold">UseYourEd.</div>
          </div>
          <div className="text-sm text-brand-navy/40">
            © {new Date().getFullYear()} UseYourEd. Company Number NI715775
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-brand-navy/40 hover:text-brand-gold transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="text-brand-navy/40 hover:text-brand-gold transition-colors"><Mail className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
