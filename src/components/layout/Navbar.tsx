import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: "WORKS", link: "#works" },
  { label: "ABOUT", link: "#about" },
  { label: "CONTACT", link: "#contact" }
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-white/10">
      <div className="max-w-[1600px] mx-auto px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="text-2xl tracking-wider font-light">TKC</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-12">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.link}
                className="text-sm tracking-[0.2em] text-gray-300 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.link}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-sm tracking-[0.2em] text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;