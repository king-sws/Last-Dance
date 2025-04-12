'use client';

import { HiPaperAirplane } from "react-icons/hi";
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from "react-icons/fi";
import { FlipWords } from "./ui/flip-words";
import { motion } from "framer-motion";
import { ReactElement } from "react";

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
      href: 'https://twitter.com/yourprofile',
      icon: <FiTwitter className="text-xl" />,
      label: 'Twitter',
    },
    {
      href: 'https://instagram.com/yourprofile',
      icon: <FiInstagram className="text-xl" />,
      label: 'Instagram',
    },
  ];

  return (
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
