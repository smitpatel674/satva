import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { services } from '../../data/services';

export default function Footer() {
  const navItems = ['Home', 'Services', 'About', 'Doctors', 'Testimonials', 'Gallery', 'FAQ', 'Contact'];

  return (
    <footer className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <img src="/image.png" alt="Hospital Logo" className="h-16 mb-4" />
            <p className="text-pink-200 mb-4">
              Providing quality healthcare services with compassion and excellence since 1999.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-purple-700 hover:bg-pink-500 flex items-center justify-center transition-colors duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-pink-200 hover:text-white transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-pink-200">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>{service.title}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <div className="space-y-3 text-pink-200">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Emergency 24/7</p>
                  <p>+91 99999 88888</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p>info@satvo.hospital</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p>Medical And Heart Hospital</p>
                  <p>Gujarat, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-purple-700 pt-8 text-center text-pink-200">
          <p>&copy; 2025 Satva Medical And Heart Hospital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
