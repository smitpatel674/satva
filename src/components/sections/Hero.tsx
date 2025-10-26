import { Calendar, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import '../../styles/animations.css';

interface HeroProps {
  onBookAppointment: () => void;
}

export default function Hero({ onBookAppointment }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section 
      ref={sectionRef}
      id="home" 
      className="relative min-h-screen flex items-center bg-[#004040] overflow-hidden py-20"
    >
      <div className="absolute inset-0 overflow-hidden">
        {/* Simple gradient overlay */}
        <motion.div 
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#FFA07A]/20 to-transparent rounded-full mix-blend-overlay filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left space-y-6"
            >
              <motion.div 
                className="max-w-3xl mx-auto text-center"
                initial="hidden"
                animate="visible"
              >
                <div className="space-y-3">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-3xl md:text-4xl xl:text-5xl font-bold text-white"
                  >
                    We Are
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="text-3xl md:text-4xl xl:text-5xl font-bold text-white"
                  >
                    Providing
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 1.0 }}
                    className="text-3xl md:text-4xl xl:text-5xl font-bold text-[#FFA07A]"
                  >
                    Best & Affordable
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 1.4 }}
                    className="text-3xl md:text-4xl xl:text-5xl font-bold text-white"
                  >
                    Health Care
                  </motion.div>
                </div>

                <motion.div
                  className="mt-8 space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.8 }}
                >
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                    Our mission is to deliver the highest quality healthcare services.
                    <br />
                    Everyone deserves access to excellent medical care without
                    <br />
                    compromising on quality.
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-[#FFA07A] text-white rounded-full font-semibold flex items-center gap-2 justify-center"
                  onClick={onBookAppointment}
                >
                  <span>Book Appointment</span>
                  <Calendar className="w-5 h-5" />
                </motion.button>
                <motion.a
                  href="tel:+919999988888"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-[#FFA07A] text-[#FFA07A] hover:bg-[#FFA07A] hover:text-white transition-colors duration-300 rounded-full font-semibold flex items-center gap-2 justify-center"
                >
                  <Phone className="w-5 h-5" />
                  <span>Emergency Care</span>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Doctor Images */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-[600px] h-[600px] mx-auto">
                {/* Circle Background */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 0.1, scale: 1 }}
                  transition={{ duration: 1.5 }}
                  className="absolute inset-0 rounded-full border-[30px] border-[#FFA07A]/20"
                />
                
                {/* Main Doctor Image */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0, y: -20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="absolute right-10 top-10 w-[320px] h-[320px]"
                >
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#FFA07A]/30 shadow-lg">
                    <motion.div
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1.5 }}
                      className="w-full h-full"
                    >
                      <img
                        src="/doctor1.png"
                        alt="Doctor"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </div>
                  <motion.div 
                    className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-white/90 text-sm font-medium bg-[#004040]/90 px-6 py-2 rounded-full shadow-lg"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    Senior Doctor
                  </motion.div>
                </motion.div>
                
                {/* Team Image */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="absolute bottom-10 left-10 w-[280px] h-[280px]"
                >
                  <div className="relative w-full h-full">
                    {/* Pulsing effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-4 border-[#FFA07A]/20"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.15, 0.3]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    />
                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#FFA07A]/30 shadow-lg">
                      <motion.div
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.5 }}
                        className="w-full h-full"
                      >
                        <img
                          src="doctor2.jpeg"
                          alt="Medical Team"
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    </div>
                    <motion.div 
                      className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-white/90 text-sm font-medium bg-[#004040]/90 px-6 py-2 rounded-full shadow-lg"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      Medical Specialists
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
