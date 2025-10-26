import { useState, useEffect } from 'react';
import { Phone, ChevronDown, CheckCircle } from 'lucide-react';
import AppointmentModal from './components/AppointmentModal';
import Modal from './components/Modal';
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import Statistics from './components/sections/Statistics';
import Services from './components/sections/Services';
import Doctors from './components/sections/Doctors';
import Testimonials from './components/sections/Testimonials';
import Footer from './components/sections/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [serviceModalOpen, setServiceModalOpen] = useState(false);
  const [doctorModalOpen, setDoctorModalOpen] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleServiceClick = (service: any) => {
    setSelectedService(service);
    setServiceModalOpen(true);
  };

  const handleDoctorClick = (doctor: any) => {
    setSelectedDoctor(doctor);
    setDoctorModalOpen(true);
  };

  const handleBookAppointment = (doctor?: any, service?: any) => {
    setSelectedDoctor(doctor || null);
    setSelectedService(service || null);
    setAppointmentModalOpen(true);
    setDoctorModalOpen(false);
    setServiceModalOpen(false);
  };

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const message = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    // Simulate form submission
    console.log('Contact form submitted:', message);
    setContactSuccess(true);
    e.currentTarget.reset();
    setTimeout(() => setContactSuccess(false), 3000);
  };

  const faqs = [
    {
      question: 'What are your visiting hours?',
      answer: 'Our OPD timings are Monday to Saturday, 9:00 AM to 8:00 PM. For emergency services, we are available 24/7.'
    },
    {
      question: 'Do you accept insurance?',
      answer: 'Yes, we accept all major health insurance plans. Our dedicated insurance desk will help you with the cashless facility and claim procedures.'
    },
    {
      question: 'How can I book an appointment?',
      answer: 'You can book an appointment through our website, by calling our helpline +91 99999 88888, or by visiting the hospital reception.'
    },
    {
      question: 'Do you provide ambulance services?',
      answer: 'Yes, we have 24/7 ambulance services with trained paramedics and advanced life support equipment. Call +91 99999 88888 for emergency ambulance.'
    },
    {
      question: 'What documents do I need for admission?',
      answer: 'You need to bring a valid ID proof, insurance card (if applicable), previous medical records, and any referral letters from your doctor.'
    },
    {
      question: 'Do you have a pharmacy on premises?',
      answer: 'Yes, we have a 24/7 pharmacy with a comprehensive stock of medicines at competitive prices.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header scrolled={scrolled} onBookAppointment={() => handleBookAppointment()} />
      
      <Hero onBookAppointment={() => handleBookAppointment()} />
      
      <Statistics />
      
      <Services onServiceClick={handleServiceClick} />
      
      <Doctors onDoctorClick={handleDoctorClick} onBookAppointment={handleBookAppointment} />
      
      <Testimonials />

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Why Choose <span className="text-transparent bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text">Satva Hospital</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              With over 25 years of excellence in healthcare, we are committed to providing world-class medical services with compassion and care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { icon: 'Shield', title: 'Experienced Doctors', desc: '100+ specialist doctors with international training' },
              { icon: 'Building2', title: 'Modern Facilities', desc: 'State-of-the-art infrastructure and equipment' },
              { icon: 'HeartPulse', title: '24/7 Emergency', desc: 'Round-the-clock emergency and critical care' },
              { icon: 'Award', title: 'Quality Care', desc: 'NABH accredited with highest standards' }
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="inline-block p-4 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 mb-4">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our <span className="text-transparent bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text">Facilities</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Take a look at our modern infrastructure and advanced medical equipment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                title: 'Modern ICU Ward', 
                category: 'Critical Care', 
                color: 'from-blue-600 to-blue-400',
                image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&crop=center',
                icon: '🏥'
              },
              { 
                title: 'Advanced Operation Theater', 
                category: 'Surgery', 
                color: 'from-teal-600 to-teal-400',
                image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop&crop=center',
                icon: '⚕️'
              },
              { 
                title: 'Spacious Reception', 
                category: 'Facilities', 
                color: 'from-blue-700 to-teal-500',
                image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&h=600&fit=crop&crop=center',
                icon: '🏢'
              },
              { 
                title: 'Comfortable Patient Rooms', 
                category: 'Accommodation', 
                color: 'from-teal-700 to-blue-500',
                image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop&crop=center',
                icon: '🛏️'
              },
              { 
                title: 'Cardiac Catheterization Lab', 
                category: 'Cardiology', 
                color: 'from-purple-600 to-blue-500',
                image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=center',
                icon: '❤️'
              },
              { 
                title: 'Dedicated Medical Team', 
                category: 'Staff', 
                color: 'from-blue-600 to-teal-500',
                image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop&crop=center',
                icon: '👨‍⚕️'
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-60`}></div>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 text-4xl opacity-80 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <p className="text-teal-300 text-sm font-semibold mb-1">{item.category}</p>
                  <h3 className="text-white text-xl font-bold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Frequently Asked <span className="text-transparent bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text">Questions</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Find answers to common questions about our services and facilities
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-blue-50 transition-colors duration-300"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-bold text-gray-800 text-lg">{faq.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-pink-500 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 py-4 text-gray-600 bg-white">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Get in <span className="text-transparent bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text">Touch</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We're here to help. Reach out to us for appointments or inquiries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Phone, title: 'Phone', info: '+91 99999 88888', link: 'tel:+919999988888', color: 'from-blue-600 to-blue-400' },
              { icon: 'Mail', title: 'Email', info: 'info@satvo.hospital', link: 'mailto:info@satvo.hospital', color: 'from-teal-600 to-teal-400' },
              { icon: 'MapPin', title: 'Address', info: 'Medical And Heart Hospital, Gujarat, India', link: '#', color: 'from-blue-700 to-teal-500' },
            ].map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-slide-up block"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`inline-block p-4 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 mb-4`}>
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{contact.title}</h3>
                <p className="text-gray-600">{contact.info}</p>
              </a>
            ))}
          </div>

          <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-lg animate-slide-up animation-delay-500">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Send us a Message</h3>
            {contactSuccess && (
              <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Message sent successfully! We'll get back to you soon.</span>
              </div>
            )}
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-teal-500 transition-colors duration-300"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-teal-500 transition-colors duration-300"
                />
              </div>
              <input
                type="text"
                name="subject"
                required
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-teal-500 transition-colors duration-300"
              />
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-teal-500 transition-colors duration-300"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />

      {/* Emergency Call Button */}
      <a
        href="tel:+919999988888"
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full shadow-2xl flex items-center justify-center animate-pulse-glow hover:scale-110 transition-transform duration-300 z-40"
      >
        <Phone className="w-8 h-8" />
      </a>

      {/* Modals */}
      <AppointmentModal
        isOpen={appointmentModalOpen}
        onClose={() => setAppointmentModalOpen(false)}
        selectedDoctor={selectedDoctor}
        selectedService={selectedService}
      />

      <Modal
        isOpen={serviceModalOpen}
        onClose={() => setServiceModalOpen(false)}
        title={selectedService?.title}
        size="lg"
      >
        {selectedService && (
          <div className="space-y-6">
            {/* Service Image Header */}
            <div className="relative h-64 rounded-xl overflow-hidden">
              <img 
                src={selectedService.image} 
                alt={selectedService.title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${selectedService.color} opacity-70`}></div>
              <div className="absolute inset-0 bg-black opacity-20"></div>
              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    {(() => {
                      const iconName = selectedService.icon;
                      const IconComponent = iconName === 'Pill' ? '💊' :
                                            iconName === 'TestTube' ? '🧪' :
                                            iconName === 'Scan' ? '📡' :
                                            iconName === 'Baby' ? '👶' :
                                            iconName === 'Truck' ? '🚑' :
                                            iconName === 'Activity' ? '❤️' : '⚕️';
                      return <span className="text-4xl">{IconComponent}</span>;
                    })()}
                  </div>
                  <h3 className="text-2xl font-bold">{selectedService.title}</h3>
                </div>
              </div>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed">{selectedService.detailed_info}</p>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Key Features & Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedService.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                    <CheckCircle className="w-5 h-5 text-pink-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => handleBookAppointment(undefined, selectedService)}
                className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Book Appointment for {selectedService.title}
              </button>
              <a
                href="tel:+919999988888"
                className="flex-1 bg-transparent border-2 border-pink-500 text-pink-500 py-4 rounded-full font-semibold hover:bg-pink-500 hover:text-white transition-all duration-300 hover:scale-105 text-center"
              >
                Call Now
              </a>
            </div>
          </div>
        )}
      </Modal>

      <Modal
        isOpen={doctorModalOpen}
        onClose={() => setDoctorModalOpen(false)}
        title={selectedDoctor?.name}
        size="lg"
      >
        {selectedDoctor && (
          <div className="space-y-6">
            <div className="flex items-start gap-6">
              <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src={selectedDoctor.image_url || 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face'} 
                  alt={selectedDoctor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedDoctor.specialty}</h3>
                <p className="text-gray-600 mb-2">{selectedDoctor.qualification}</p>
                <p className="text-pink-500 font-semibold">
                  {selectedDoctor.experience_years} Years of Experience
                </p>
                <p className="text-gray-700 mt-2">
                  Consultation Fee: ₹{selectedDoctor.consultation_fee}
                </p>
              </div>
            </div>

            {selectedDoctor.bio && (
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">About</h4>
                <p className="text-gray-700">{selectedDoctor.bio}</p>
              </div>
            )}

            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">Available Days</h4>
              <div className="flex flex-wrap gap-2">
                {selectedDoctor.available_days.map((day: string) => (
                  <span
                    key={day}
                    className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full text-sm font-semibold"
                  >
                    {day}
                  </span>
                ))}
              </div>
            </div>

            {selectedDoctor.phone && (
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">Contact</h4>
                <p className="text-gray-700">
                  <Phone className="w-4 h-4 inline mr-2" />
                  {selectedDoctor.phone}
                </p>
                {selectedDoctor.email && (
                  <p className="text-gray-700 mt-1">
                    <span className="w-4 h-4 inline mr-2">📧</span>
                    {selectedDoctor.email}
                  </p>
                )}
              </div>
            )}

            <button
              onClick={() => handleBookAppointment(selectedDoctor)}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Book Appointment with {selectedDoctor.name}
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default App;