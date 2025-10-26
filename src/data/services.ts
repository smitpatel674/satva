export interface Service {
  id: string;
  title: string;
  description: string;
  detailed_info: string;
  icon: string;
  color: string;
  image: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Medical Store',
    description: 'Complete pharmacy with all essential medicines and medical supplies available 24/7',
    detailed_info: 'Our in-house pharmacy stocks a comprehensive range of medicines, medical supplies, and healthcare products. Available round-the-clock with expert pharmacist consultation and home delivery services for your convenience.',
    icon: 'Pill',
    color: 'from-green-500 to-emerald-500',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=600&fit=crop&crop=center',
    features: ['24/7 Pharmacy', '10,000+ Medicines', 'Generic & Branded', 'Home Delivery', 'Insurance Claims', 'Expert Consultation']
  },
  {
    id: '2', 
    title: 'Pathology',
    description: 'Advanced laboratory services with accurate and timely diagnostic reports',
    detailed_info: 'State-of-the-art pathology lab equipped with modern instruments and experienced technicians. We offer comprehensive testing services including blood work, tissue analysis, and specialized diagnostic tests with same-day reporting.',
    icon: 'TestTube',
    color: 'from-purple-500 to-violet-500',
    image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=800&h=600&fit=crop&crop=center',
    features: ['Blood Tests', 'Urine Analysis', 'Tissue Biopsy', 'Microbiology', 'Immunology', 'Same Day Reports']
  },
  {
    id: '3',
    title: 'Digital X-Ray',
    description: 'State-of-the-art digital radiography for precise imaging and diagnostics',
    detailed_info: 'Advanced digital X-ray technology providing high-resolution images with minimal radiation exposure. Our expert radiologists ensure accurate diagnosis with instant results and digital storage capabilities.',
    icon: 'Scan',
    color: 'from-blue-500 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop&crop=center',
    features: ['Digital Imaging', 'Low Radiation', 'Instant Results', 'High Resolution', 'CD/USB Copy', 'Expert Radiologist']
  },
  {
    id: '4',
    title: '3D-4D Sonography',
    description: 'Advanced ultrasound technology for detailed fetal imaging and monitoring',
    detailed_info: 'Cutting-edge 3D and 4D ultrasound technology for comprehensive prenatal care. Our experienced sonographers provide detailed fetal imaging, health monitoring, and memorable video recordings for expecting parents.',
    icon: 'Baby',
    color: 'from-pink-500 to-rose-500',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=center',
    features: ['3D/4D Imaging', 'Fetal Health Check', 'Gender Determination', 'Pregnancy Monitoring', 'Color Doppler', 'Video Recording']
  },
  {
    id: '5',
    title: 'ICU on Wheels',
    description: 'Mobile intensive care unit with life support systems for critical patients',
    detailed_info: 'Advanced mobile ICU equipped with life support systems, cardiac monitors, and emergency medical equipment. Staffed with trained paramedics and critical care specialists for immediate response to emergencies.',
    icon: 'Truck',
    color: 'from-red-500 to-orange-500',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&crop=center',
    features: ['Mobile ICU', 'Life Support', 'Trained Paramedics', '24/7 Availability', 'Emergency Response', 'Advanced Equipment']
  },
  {
    id: '6',
    title: 'ECG',
    description: 'Electrocardiogram services for heart health monitoring and cardiac diagnostics',
    detailed_info: 'Comprehensive ECG services including 12-lead ECG, stress testing, and continuous monitoring. Our cardiology experts provide immediate interpretation and detailed reports for accurate cardiac assessment.',
    icon: 'Activity',
    color: 'from-teal-500 to-green-500',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=center',
    features: ['12-Lead ECG', 'Heart Rhythm Analysis', 'Instant Reports', 'Digital Storage', 'Expert Interpretation', 'Stress Testing']
  }
];
