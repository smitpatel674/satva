import { useState, useEffect } from 'react';
import { Calendar, Clock, User, Mail, Phone, MessageSquare, Stethoscope, CheckCircle } from 'lucide-react';
import Modal from './Modal';
import { services } from '../data/services';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDoctor?: any;
  selectedService?: any;
}

export default function AppointmentModal({
  isOpen,
  onClose,
  selectedDoctor,
  selectedService,
}: AppointmentModalProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    patient_name: '',
    patient_email: '',
    patient_phone: '',
    doctor_id: selectedDoctor?.id || null,
    service_id: selectedService?.id || null,
    appointment_date: '',
    appointment_time: '',
    message: '',
  });

  useEffect(() => {
    if (isOpen) {
      setSuccess(false);
      setError('');
    }
  }, [isOpen]);

  useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({ ...prev, service_id: selectedService.id }));
    }
  }, [selectedService]);

  useEffect(() => {
    if (selectedDoctor) {
      setFormData(prev => ({ ...prev, doctor_id: selectedDoctor.id }));
    }
  }, [selectedDoctor]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulate appointment booking
    console.log('Appointment booked:', formData);
    
    setLoading(false);
    setSuccess(true);
    
    setTimeout(() => {
      onClose();
      setFormData({
        patient_name: '',
        patient_email: '',
        patient_phone: '',
        doctor_id: null,
        service_id: null,
        appointment_date: '',
        appointment_time: '',
        message: '',
      });
      setSuccess(false);
    }, 2000);
  };

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
    '05:00 PM', '05:30 PM', '06:00 PM'
  ];

  const today = new Date().toISOString().split('T')[0];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Book an Appointment" size="lg">
      {success ? (
        <div className="text-center py-8">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4 animate-bounce" />
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Appointment Booked!</h3>
          <p className="text-gray-600">We'll contact you shortly to confirm your appointment.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <User className="w-4 h-4 inline mr-2" />
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.patient_name}
                onChange={(e) => setFormData({ ...formData, patient_name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-teal-500 transition-colors duration-300"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <Mail className="w-4 h-4 inline mr-2" />
                Email Address *
              </label>
              <input
                type="email"
                required
                value={formData.patient_email}
                onChange={(e) => setFormData({ ...formData, patient_email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-teal-500 transition-colors duration-300"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <Phone className="w-4 h-4 inline mr-2" />
                Phone Number *
              </label>
              <input
                type="tel"
                required
                value={formData.patient_phone}
                onChange={(e) => setFormData({ ...formData, patient_phone: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-teal-500 transition-colors duration-300"
                placeholder="+91 98765 43210"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <Stethoscope className="w-4 h-4 inline mr-2" />
                Select Service *
              </label>
              <select
                required
                value={formData.service_id || ''}
                onChange={(e) => setFormData({ ...formData, service_id: e.target.value || null })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-teal-500 transition-colors duration-300"
              >
                <option value="">Choose a service</option>
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.title}
                  </option>
                ))}
              </select>
            </div>


            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <Calendar className="w-4 h-4 inline mr-2" />
                Appointment Date *
              </label>
              <input
                type="date"
                required
                min={today}
                value={formData.appointment_date}
                onChange={(e) => setFormData({ ...formData, appointment_date: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-teal-500 transition-colors duration-300"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <Clock className="w-4 h-4 inline mr-2" />
                Preferred Time *
              </label>
              <select
                required
                value={formData.appointment_time}
                onChange={(e) => setFormData({ ...formData, appointment_time: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-teal-500 transition-colors duration-300"
              >
                <option value="">Select time</option>
                {timeSlots.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <MessageSquare className="w-4 h-4 inline mr-2" />
                Additional Message
              </label>
              <textarea
                rows={4}
                value={formData.message || ''}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-teal-500 transition-colors duration-300"
                placeholder="Any specific concerns or requirements..."
              ></textarea>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          <div className="flex gap-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-full font-semibold hover:bg-gray-300 transition-all duration-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-gradient-to-r from-blue-600 to-teal-500 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Booking...' : 'Book Appointment'}
            </button>
          </div>
        </form>
      )}
    </Modal>
  );
}
