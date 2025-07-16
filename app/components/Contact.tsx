'use client';

import { HiPaperAirplane, HiPhone, HiMail, HiLocationMarker, HiX } from "react-icons/hi";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FlipWords } from "./ui/flip-words";
import { motion } from "framer-motion";
import { ReactElement, useState } from "react";
import { Building2 } from "lucide-react";

interface SocialLink {
  href: string;
  icon: ReactElement;
  label: string;
}

interface InputFieldProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
}

const Contact = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const socialLinks: SocialLink[] = [
    {
      href: 'https://www.github.com/king-sws',
      icon: <FiGithub className="text-xl" />,
      label: 'GitHub',
    },
    {
      href: 'https://www.linkedin.com/in/oussama-boufi',
      icon: <FiLinkedin className="text-xl" />,
      label: 'LinkedIn',
    },
    {
      href: 'https://blutto.vercel.app/',
      icon: <Building2 className="text-xl" />,
      label: 'Blutto',
    },
    
  ];

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  return (
    <>
      <section id="contact" className="sec py-20 bg-zinc-900/50">
        <div className="container lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-24">
          {/* Contact Info */}
          <div className="mb-12 lg:mb-0 lg:flex lg:flex-col lg:justify-center">
            <div className="max-w-[550px] lg:max-w-none">
              <motion.div
                className="mb-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                  Let&apos;s Create Something
                  <div className="block mt-1">
                    <FlipWords
                      words={["Impactful", "Innovative", "Scalable", "Remarkable"]}
                      className="text-cyan-400"
                      duration={2800}
                    />
                  </div>
                </h2>
                <p className="text-sm sm:text-base text-zinc-300">
                  Reach out to discuss your project or just say hello. I typically respond within 24 hours.
                </p>
              </motion.div>

              {/* Contact Info Button */}
              <div className="mb-6">
                <button
                  onClick={openDialog}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-cyan-400 rounded-lg transition-colors border border-zinc-700 hover:border-cyan-400/50"
                >
                  <HiPhone className="w-5 h-5" />
                  Contact Info
                </button>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map(({ href, icon, label }) => (
                  <div
                    key={href}
                    className="group relative w-12 h-12 rounded-lg bg-zinc-800 hover:bg-cyan-400/10 transition-all duration-300 hover:-translate-y-1"
                  >
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-full h-full grid place-items-center text-zinc-300 hover:text-cyan-400 transition-colors"
                    >
                      {icon}
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-800 text-xs text-white px-2 py-1 rounded-md whitespace-nowrap">
                        {label}
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            action="https://getform.io/f/azylmkjb"
            method="POST"
            className="space-y-6 xl:pl-10"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <InputField
                id="name"
                label="Name *"
                type="text"
                placeholder="John Doe"
              />

              <InputField
                id="email"
                label="Email *"
                type="email"
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-zinc-300 font-medium"
              >
                Message *
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                placeholder="Hello Oussama, I have a project idea..."
                className="w-full px-4 py-3 bg-zinc-800 rounded-lg border border-zinc-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 outline-none transition-all resize-y min-h-[120px]"
              />
            </div>

            <SubmitButton />
          </form>
        </div>
      </section>

      {/* Contact Info Dialog */}
      {isDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeDialog}
          />
          
          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative bg-zinc-900 rounded-xl p-6 mx-4 max-w-md w-full border border-zinc-700 shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={closeDialog}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors"
            >
              <HiX className="w-6 h-6" />
            </button>

            {/* Dialog Content */}
            <div className="pr-8">
              <h3 className="text-xl font-bold text-white mb-4">Get In Touch</h3>
              
              <div className="space-y-4 text-zinc-300">
                <div className="flex items-start gap-3">
                  <HiMail className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <a 
                      href="mailto:oboufi88@gmail.com"
                      className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      oboufi88@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <HiPhone className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Phone</h4>
                    <a 
                      href="tel:+212611852414"
                      className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      +212 611 852 414
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <HiLocationMarker className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Location</h4>
                    <p className="text-sm">Safi, Morocco</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <FiGithub className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">GitHub</h4>
                    <a 
                      href="https://www.github.com/king-sws"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      github.com/king-sws
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <FiLinkedin className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/in/oussama-boufi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      linkedin.com/in/oussama-boufi
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-700">
                <p className="text-xs text-zinc-400">
                  Available for freelance projects and full-time opportunities. Let&lsquo;s build something amazing together!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

const InputField = ({ id, label, type, placeholder }: InputFieldProps) => (
  <div className="space-y-2">
    <label htmlFor={id} className="block text-zinc-300 font-medium">
      {label}
    </label>
    <input
      type={type}
      name={id}
      id={id}
      required
      placeholder={placeholder}
      className="w-full px-4 py-3 bg-zinc-800 rounded-lg border border-zinc-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 outline-none transition-all"
    />
  </div>
);

const SubmitButton = () => (
  <button
    type="submit"
    className="w-full bg-gradient-to-r from-cyan-400 to-sky-500 text-zinc-900 font-semibold py-3 px-8 rounded-lg hover:opacity-80 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-md"
  >
    Send Message
    <HiPaperAirplane className="w-5 h-5 rotate-45" />
  </button>
);

export default Contact;