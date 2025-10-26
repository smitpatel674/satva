export interface Testimonial {
  id: string;
  patient_name: string;
  treatment: string;
  rating: number;
  comment: string;
  image_url: string | null;
  is_approved: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    patient_name: 'Ramesh Mehta',
    treatment: 'Cardiac Surgery',
    rating: 5,
    comment: 'Dr. Anand Patel saved my life with his expert care. The entire cardiac team was exceptional. Best hospital in the city!',
    image_url: null,
    is_approved: true
  },
  {
    id: '2',
    patient_name: 'Anjali Sharma',
    treatment: 'Maternity Care',
    rating: 5,
    comment: 'Dr. Sneha Desai made my pregnancy journey wonderful. The maternity ward is excellent with caring nurses. Highly recommended!',
    image_url: null,
    is_approved: true
  },
  {
    id: '3',
    patient_name: 'Kiran Patel',
    treatment: 'Orthopedic Surgery',
    rating: 5,
    comment: 'Had knee replacement surgery by Dr. Vikram Singh. Amazing results! Now I can walk without pain. Thank you team Satva!',
    image_url: null,
    is_approved: true
  },
  {
    id: '4',
    patient_name: 'Deepak Shah',
    treatment: 'Pediatric Care',
    rating: 5,
    comment: 'Dr. Heli Patel is the best pediatrician. She handled my sons illness with great care and patience. Grateful to her!',
    image_url: null,
    is_approved: true
  },
  {
    id: '5',
    patient_name: 'Neha Gupta',
    treatment: 'General Surgery',
    rating: 4,
    comment: 'Dr. Satvik Patel performed my surgery excellently. The hospital facilities are top-notch. Recovery was smooth and quick.',
    image_url: null,
    is_approved: true
  },
  {
    id: '6',
    patient_name: 'Sunita Agarwal',
    treatment: 'Dermatology',
    rating: 5,
    comment: 'Dr. Meera Joshi treated my skin condition perfectly. The treatment was effective and the staff was very supportive.',
    image_url: null,
    is_approved: true
  }
];
