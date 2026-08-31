'use client';

import { HiPaperAirplane, HiPhone, HiMail, HiLocationMarker, HiX } from "react-icons/hi";
import { FiGithub, FiLinkedin, FiArrowRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Terminal } from "lucide-react";

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const socialLinks = [
    { href: 'https://www.github.com/king-sws', icon: <FiGithub />, label: 'Source_Control' },
    { href: 'https://www.linkedin.com/in/oussama-boufi', icon: <FiLinkedin />, label: 'Professional_Link' },
  ];

  return (
    <section id="contact" className="relative py-16 md:py-26 px-4 sm:px-10 bg-zinc-950 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('/textures/carbon-fibre.png')]" />

      <div className="container px-0 mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">

          {/* Column 1: The Branding/Info — slides from left, staggers internally */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={staggerContainer}
            className="lg:col-span-5"
          >
            <div className="sticky top-32">
              <motion.div
                variants={fadeUpItem}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffe1c1]/5 border border-[#ffe1c1]/10 text-[#ffe1c1] text-[10px] font-mono tracking-[0.3em] uppercase mb-8"
              >
                <Terminal className="w-3 h-3" />
                Connection_Gateway
              </motion.div>

              <motion.h2
                variants={fadeUpItem}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8 leading-none"
              >
                Let's Build <br />
                <span className="italic font-serif font-light text-[#ffe1c1]">Something.</span>
              </motion.h2>

              <motion.div
                variants={fadeUpItem}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-zinc-500 text-lg font-light max-w-md mb-12 space-y-4"
              >
                <p>Available for <span className="text-zinc-200">Technical Architecture</span> and <span className="text-zinc-200">Full-Stack Development</span>.</p>
                <div className="h-px w-12 bg-zinc-800" />
                <p className="text-sm">Response latency: &lt; 24h</p>
              </motion.div>

              <motion.div
                variants={fadeUpItem}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap gap-4 items-center"
              >
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setIsDialogOpen(true)}
                  className="px-6 py-3 bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-full hover:border-[#ffe1c1]/50 hover:text-white transition-colors text-xs font-mono uppercase tracking-widest flex items-center gap-3 group"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ffe1c1] group-hover:animate-pulse" />
                  Access_Direct_Lines
                </motion.button>

                <div className="flex gap-2">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-11 h-11 grid place-items-center bg-zinc-900/50 border border-zinc-800 rounded-full text-zinc-500 hover:text-[#ffe1c1] hover:border-[#ffe1c1]/30 transition-colors"
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Column 2: The Form — slides from right, fields stagger in */}
          <motion.div
            initial={{ opacity: 0, x: 30, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <form
              action="https://getform.io/f/azylmkjb"
              method="POST"
              className="p-6 md:p-12 bg-zinc-900/30 border border-zinc-900 rounded-[2rem] backdrop-blur-sm"
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={staggerContainer}
                className="grid md:grid-cols-2 gap-8 mb-8"
              >
                <motion.div variants={fadeUpItem} transition={{ duration: 0.5 }} className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600 ml-1">Requester_Name</label>
                  <input
                    name="name"
                    required
                    placeholder="Enter full name"
                    className="w-full bg-transparent border-b border-zinc-800 py-3 text-white focus:border-[#ffe1c1] outline-none transition-colors placeholder:text-zinc-800"
                  />
                </motion.div>
                <motion.div variants={fadeUpItem} transition={{ duration: 0.5 }} className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600 ml-1">Return_Address</label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="email@example.com"
                    className="w-full bg-transparent border-b border-zinc-800 py-3 text-white focus:border-[#ffe1c1] outline-none transition-colors placeholder:text-zinc-800"
                  />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-2 mb-12"
              >
                <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600 ml-1">Project_Brief</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Describe the scope of work or technical requirements..."
                  className="w-full bg-transparent border border-zinc-800 p-4 rounded-xl text-white focus:border-[#ffe1c1] outline-none transition-colors placeholder:text-zinc-800 resize-none"
                />
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full group relative overflow-hidden bg-white text-black font-bold py-5 rounded-xl uppercase text-[11px] tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-[#ffe1c1] transition-colors"
              >
                Execute_Send
                <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Dialog */}
      <AnimatePresence>
        {isDialogOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-zinc-950/90 backdrop-blur-md"
              onClick={() => setIsDialogOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-3xl p-10 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 font-mono text-[60px] text-white/[0.02] pointer-events-none">CONTACT</div>

              <button onClick={() => setIsDialogOpen(false)} className="absolute top-6 right-6 text-zinc-500 hover:text-white"><HiX size={24}/></button>

              <h3 className="text-white font-bold text-xl mb-10 tracking-tight flex items-center gap-3">
                <div className="w-2 h-2 bg-[#ffe1c1]" /> Communication_Lines
              </h3>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } } }}
                className="space-y-8"
              >
                {[
                  { icon: <HiMail />, label: "Email_Secure", value: "oboufi88@gmail.com", href: "mailto:oboufi88@gmail.com" },
                  { icon: <HiPhone />, label: "Voice_Line", value: "+212 611 852 414", href: "tel:+212611852414" },
                  { icon: <HiLocationMarker />, label: "Physical_Node", value: "Safi, Morocco", href: "#" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
                    transition={{ duration: 0.4 }}
                    className="group"
                  >
                    <p className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest mb-2">{item.label}</p>
                    <a href={item.href} className="text-zinc-200 text-lg hover:text-[#ffe1c1] transition-colors flex items-center gap-3">
                      {item.value} <FiArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;