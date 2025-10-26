import { Users } from 'lucide-react';
import { doctors } from '../../data/doctors';

interface DoctorsProps {
  onDoctorClick: (doctor: any) => void;
  onBookAppointment: (doctor: any) => void;
}

export default function Doctors({ onDoctorClick, onBookAppointment }: DoctorsProps) {
  return (
    <section id="doctors" className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Expert <span className="text-transparent bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text">Doctors</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Meet our team of highly qualified and experienced medical professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <div
              key={doctor.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
              onClick={() => onDoctorClick(doctor)}
            >
              <div className="h-64 relative overflow-hidden">
                <img 
                  src={doctor.image_url || 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face'} 
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-teal-500 opacity-60"></div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{doctor.name}</h3>
                <p className="text-pink-500 font-semibold mb-1">{doctor.specialty}</p>
                <p className="text-gray-600 text-sm mb-1">{doctor.qualification}</p>
                <p className="text-gray-500 text-sm mb-4">Experience: {doctor.experience_years} Years</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onBookAppointment(doctor);
                  }}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
