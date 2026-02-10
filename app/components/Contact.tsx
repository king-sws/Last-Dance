'use client';

import { HiPaperAirplane, HiPhone, HiMail, HiLocationMarker, HiX } from "react-icons/hi";
import { FiGithub, FiLinkedin, FiArrowRight } from "react-icons/fi";
import { FlipWords } from "./ui/flip-words";
import { motion, AnimatePresence } from "framer-motion";
import { ReactElement, useState } from "react";
import { Building2, Terminal } from "lucide-react";

// Updated Social Links to match our architectural theme
const Contact = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const socialLinks = [
    { href: 'https://www.github.com/king-sws', icon: <FiGithub />, label: 'Source_Control' },
    { href: 'https://www.linkedin.com/in/oussama-boufi', icon: <FiLinkedin />, label: 'Professional_Link' },
  ];

  return (
    <section id="contact" className="relative py-26 px-6 sm:px-10 bg-zinc-950 overflow-hidden">
      {/* Background Element: Technical Grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Column 1: The Branding/Info */}
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffe1c1]/5 border border-[#ffe1c1]/10 text-[#ffe1c1] text-[10px] font-mono tracking-[0.3em] uppercase mb-8">
                <Terminal className="w-3 h-3" />
                Connection_Gateway
              </div>

              <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8 leading-none">
                Let's Build <br />
                <span className="italic font-serif font-light text-[#ffe1c1]">Something.</span>
              </h2>

              <div className="text-zinc-500 text-lg font-light max-w-md mb-12 space-y-4">
                <p>Available for <span className="text-zinc-200">Technical Architecture</span> and <span className="text-zinc-200">Full-Stack Development</span>.</p>
                <div className="h-px w-12 bg-zinc-800" />
                <p className="text-sm">Response latency: &lt; 24h</p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 items-center">
                <button
                  onClick={() => setIsDialogOpen(true)}
                  className="px-6 py-3 bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-full hover:border-[#ffe1c1]/50 hover:text-white transition-all text-xs font-mono uppercase tracking-widest flex items-center gap-3 group"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ffe1c1] group-hover:animate-pulse" />
                  Access_Direct_Lines
                </button>

                <div className="flex gap-2">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      className="w-11 h-11 grid place-items-center bg-zinc-900/50 border border-zinc-800 rounded-full text-zinc-500 hover:text-[#ffe1c1] hover:border-[#ffe1c1]/30 transition-all"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: The Form (The "Technical Specification" Form) */}
          <div className="lg:col-span-7">
            <form
              action="https://getform.io/f/azylmkjb"
              method="POST"
              className="p-8 md:p-12 bg-zinc-900/30 border border-zinc-900 rounded-[2rem] backdrop-blur-sm"
            >
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600 ml-1">Requester_Name</label>
                  <input
                    name="name"
                    required
                    placeholder="Enter full name"
                    className="w-full bg-transparent border-b border-zinc-800 py-3 text-white focus:border-[#ffe1c1] outline-none transition-colors placeholder:text-zinc-800"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600 ml-1">Return_Address</label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="email@example.com"
                    className="w-full bg-transparent border-b border-zinc-800 py-3 text-white focus:border-[#ffe1c1] outline-none transition-colors placeholder:text-zinc-800"
                  />
                </div>
              </div>

              <div className="space-y-2 mb-12">
                <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600 ml-1">Project_Brief</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Describe the scope of work or technical requirements..."
                  className="w-full bg-transparent border border-zinc-800 p-4 rounded-xl text-white focus:border-[#ffe1c1] outline-none transition-colors placeholder:text-zinc-800 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full group relative overflow-hidden bg-white text-black font-bold py-5 rounded-xl uppercase text-[11px] tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-[#ffe1c1] transition-colors"
              >
                Execute_Send
                <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Re-styled Dialog (Minimalist) */}
      <AnimatePresence>
        {isDialogOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-zinc-950/90 backdrop-blur-md" 
              onClick={() => setIsDialogOpen(false)} 
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
              className="relative w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-3xl p-10 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 font-mono text-[60px] text-white/[0.02] pointer-events-none">CONTACT</div>
              
              <button onClick={() => setIsDialogOpen(false)} className="absolute top-6 right-6 text-zinc-500 hover:text-white"><HiX size={24}/></button>
              
              <h3 className="text-white font-bold text-xl mb-10 tracking-tight flex items-center gap-3">
                <div className="w-2 h-2 bg-[#ffe1c1]" /> Communication_Lines
              </h3>

              <div className="space-y-8">
                {[
                  { icon: <HiMail />, label: "Email_Secure", value: "oboufi88@gmail.com", href: "mailto:oboufi88@gmail.com" },
                  { icon: <HiPhone />, label: "Voice_Line", value: "+212 611 852 414", href: "tel:+212611852414" },
                  { icon: <HiLocationMarker />, label: "Physical_Node", value: "Safi, Morocco", href: "#" }
                ].map((item, i) => (
                  <div key={i} className="group">
                    <p className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest mb-2">{item.label}</p>
                    <a href={item.href} className="text-zinc-200 text-lg hover:text-[#ffe1c1] transition-colors flex items-center gap-3">
                      {item.value} <FiArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
