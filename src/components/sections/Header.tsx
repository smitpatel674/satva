import { useState } from 'react';
import { Menu, X, Calendar } from 'lucide-react';

interface HeaderProps {
  scrolled: boolean;
  onBookAppointment: () => void;
}

export default function Header({ scrolled, onBookAppointment }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['Home', 'Services', 'About', 'Doctors', 'Testimonials', 'Gallery', 'FAQ', 'Contact'];

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-white shadow-lg py-3' : 'bg-white/95 backdrop-blur-sm shadow-md py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 animate-fade-in">
            <img src="/image.png" alt="Hospital Logo" className="h-12 md:h-16 transition-all duration-300" />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium transition-all duration-300 hover:text-teal-600 relative group text-gray-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button
              onClick={onBookAppointment}
              className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </button>
          </nav>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div className={`md:hidden transition-all duration-500 overflow-hidden ${
        isMenuOpen ? 'max-h-96' : 'max-h-0'
      }`}>
        <nav className="bg-white px-4 py-6 space-y-4 shadow-lg">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-gray-700 hover:text-teal-500 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
