import { Heart, Activity, Stethoscope, Users, Award, ChevronRight, Pill, TestTube, Scan, Baby, Truck } from 'lucide-react';
import { services } from '../../data/services';

interface ServicesProps {
  onServiceClick: (service: any) => void;
}

export default function Services({ onServiceClick }: ServicesProps) {
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Heart': return Heart;
      case 'Activity': return Activity;
      case 'Stethoscope': return Stethoscope;
      case 'Users': return Users;
      case 'Award': return Award;
      case 'Pill': return Pill;
      case 'TestTube': return TestTube;
      case 'Scan': return Scan;
      case 'Baby': return Baby;
      case 'Truck': return Truck;
      default: return Stethoscope;
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-transparent bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text">Services</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive healthcare services with state-of-the-art facilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = getIconComponent(service.icon);

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => onServiceClick(service)}
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-70`}></div>
                  <div className="absolute inset-0 bg-black opacity-20"></div>
                  <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:bg-opacity-30 transition-all duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold">{service.title}</h3>
                    </div>
                  </div>
                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white bg-opacity-10 rounded-full animate-float"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 bg-white bg-opacity-10 rounded-full animate-float animation-delay-2000"></div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  
                  {/* Features Preview */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          {feature}
                        </span>
                      ))}
                      {service.features.length > 3 && (
                        <span className="text-xs bg-teal-100 text-teal-600 px-2 py-1 rounded-full">
                          +{service.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <button className="text-pink-500 font-semibold flex items-center gap-2 group-hover:gap-4 transition-all duration-300 hover:text-purple-600">
                    Learn More <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
