import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand text-white border-t border-brand-dark mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {/* Brand Section */}
        <div className="sm:col-span-2 md:col-span-1">
          <Link to="/" className="block mb-3">
            <img 
              src="/logo.png" 
              alt="Fynryx Tech Logo" 
              className="h-16 w-auto"
            />
          </Link>
          <p className="text-brand-100 text-sm">
            Empowering learners to achieve their dreams with cutting-edge technology skills and expert guidance.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Quick Links</h3>
          <ul className="space-y-2 text-brand-100">
            <li><Link to="/" className="hover:text-brand-200 transition">Home</Link></li>
            <li><Link to="/courses" className="hover:text-brand-200 transition">Courses</Link></li>
            <li><Link to="/ignite-program" className="hover:text-brand-200 transition">Ignite Program</Link></li>
            <li><Link to="/about" className="hover:text-brand-200 transition">About</Link></li>
            <li><Link to="/contact" className="hover:text-brand-200 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Contact Us</h3>
          <ul className="space-y-2 text-brand-100">
            <li className="flex items-start">
              <svg className="h-5 w-5 mr-2 mt-0.5 text-brand-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Email: support@fynryx.in</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 mr-2 mt-0.5 text-brand-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Phone: +91 7416659911/ +91 7416646611</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 mr-2 mt-0.5 text-brand-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Location: Hyderabad, India</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/fynryx" target="_blank" rel="noopener noreferrer" className="hover:text-brand-200 transition">
              <Facebook size={20} />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="https://www.instagram.com/fynryx/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-200 transition">
              <Instagram size={20} />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="https://www.linkedin.com/company/fynryx-tech-private-limited/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-200 transition">
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-brand-dark py-4 text-center text-brand-200 text-sm">
        © {new Date().getFullYear()} Fynryx Tech. All rights reserved.
      </div>
    </footer>
  );
}