"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Heart } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-24 bg-white dark:bg-black text-black dark:text-white border-t border-stroke dark:border-strokedark">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Link href="/" className="inline-block mb-4">
              <Image
                width={110}
                height={80}
                src="/images/logo/shanticaPNG.png"
                alt="Shantica Logo"
              />
            </Link>
            <p className="text-sm text-titlebgdark dark:text-manatee leading-relaxed">
              Bridging the gap between education, confidence, and employability in Northeast India.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-medium text-black dark:text-white mb-4">Explore</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Success Stories", href: "/stories" },
                { label: "Contact Us", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-titlebgdark dark:text-manatee hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-medium text-black dark:text-white mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-titlebgdark dark:text-manatee">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                Northeast India
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                hello@shantica.org
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                +91 00000 00000
              </li>
            </ul>
          </motion.div>

          {/* Newsletter + Socials */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-medium text-black dark:text-white mb-4">Stay Connected</h4>
            <p className="text-sm text-titlebgdark dark:text-manatee mb-4">
              Subscribe for updates on new cohorts and community initiatives.
            </p>
            <div className="relative mb-6">
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-full border border-stroke dark:border-white/10 bg-stroke/10 dark:bg-white/5 px-5 py-3 text-sm text-black dark:text-white placeholder-titlebgdark dark:placeholder-waterloo focus:border-primary focus:outline-none"
              />
              <button
                aria-label="Subscribe to newsletter"
                className="absolute right-1 top-1 bottom-1 px-4 rounded-full bg-primary text-white text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Join
              </button>
            </div>

            <div className="flex gap-3">
              {[
                { href: "https://www.facebook.com/share/18sYKnUJoA/?mibextid=wwXIfr", icon: <FaFacebook className="h-4 w-4" />, label: "Facebook" },
                { href: "https://www.instagram.com/shantica_org?igsh=eTgyYXE1bm44cTds", icon: <FaInstagram className="h-4 w-4" />, label: "Instagram" },
                { href: "https://www.linkedin.com/company/shantica-leadership-academy/", icon: <FaLinkedin className="h-4 w-4" />, label: "LinkedIn" },
                { href: "https://youtube.com/@shanticatraininginstitute1098?si=DYwZuzQy3erxuIAB", icon: <FaYoutube className="h-4 w-4" />, label: "YouTube" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="h-10 w-10 rounded-full bg-stroke dark:bg-white/5 hover:bg-primary border border-stroke dark:border-white/10 flex items-center justify-center transition-colors text-black dark:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-stroke dark:border-strokedark flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-titlebgdark dark:text-waterloo">
          <p>© {new Date().getFullYear()} Shantica Leadership Academy. All rights reserved.</p>
          <ul className="flex gap-5">
            {["Privacy Policy", "Support", "English"].map((item) => (
              <li key={item}>
                <a href="#" className="text-titlebgdark dark:text-waterloo hover:text-primary transition-colors">{item}</a>
              </li>
            ))}
          </ul>
          <p>
            Crafted with <Heart className="inline h-3 w-3 text-primary fill-primary" /> for Northeast India.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;