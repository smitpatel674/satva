export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  qualification: string;
  experience_years: number;
  email: string | null;
  phone: string | null;
  bio: string | null;
  image_url: string | null;
  available_days: string[];
  consultation_fee: number;
}

export const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Anand Patel',
    specialty: 'Cardiologist',
    qualification: 'MD, DM (Cardiology), FACC',
    experience_years: 15,
    email: 'anand.patel@satvahospital.com',
    phone: '+91 98765 43210',
    bio: 'Specialized in interventional cardiology with expertise in complex cardiac procedures. Performed over 5000 successful angioplasties.',
    image_url: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face',
    available_days: ['Monday', 'Tuesday', 'Wednesday', 'Friday', 'Saturday'],
    consultation_fee: 1000
  },
  {
    id: '2',
    name: 'Dr. Heli Patel',
    specialty: 'Pediatrician',
    qualification: 'MD (Pediatrics), IAP Fellow',
    experience_years: 12,
    email: 'heli.patel@satvahospital.com',
    phone: '+91 98765 43211',
    bio: 'Expert in child healthcare with special interest in neonatology and child development. Compassionate care for infants and children.',
    image_url: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face',
    available_days: ['Monday', 'Tuesday', 'Thursday', 'Friday', 'Saturday'],
    consultation_fee: 700
  },
  {
    id: '3',
    name: 'Dr. Satvik Patel',
    specialty: 'General Surgeon',
    qualification: 'MS (Surgery), FICS',
    experience_years: 18,
    email: 'satvik.patel@satvahospital.com',
    phone: '+91 98765 43212',
    bio: 'Experienced in laparoscopic and minimally invasive surgeries. Specializes in gastrointestinal and emergency surgeries.',
    image_url: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face',
    available_days: ['Monday', 'Wednesday', 'Thursday', 'Friday'],
    consultation_fee: 900
  },
  
];
