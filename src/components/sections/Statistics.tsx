import { Users, Stethoscope, Award, Activity } from 'lucide-react';
import { useRef } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import AnimatedCounter from '../AnimatedCounter';

export default function Statistics() {
  const statsRef = useRef<HTMLDivElement>(null);
  const isStatsVisible = useIntersectionObserver(statsRef, { threshold: 0.3 });

  const stats = [
    { icon: Users, targetValue: 50, suffix: 'K+', label: 'Happy Patients', color: 'from-pink-500 to-purple-600' },
    { icon: Stethoscope, targetValue: 100, suffix: '+', label: 'Expert Doctors', color: 'from-indigo-500 to-cyan-500' },
    { icon: Award, targetValue: 25, suffix: '+', label: 'Years Experience', color: 'from-purple-600 to-pink-500' },
    { icon: Activity, targetValue: 24, suffix: '/7', label: 'Emergency Care', color: 'from-cyan-500 to-indigo-500' },
  ];

  return (
    <section className="py-16 bg-white" ref={statsRef}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-gray-50 to-white group animate-slide-up ${isStatsVisible ? 'scale-105 shadow-xl' : ''}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`inline-block p-4 rounded-full bg-gradient-to-br ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-gray-800 mb-2">
                <AnimatedCounter 
                  value={stat.targetValue} 
                  suffix={stat.suffix}
                  duration={2500 + (index * 300)} 
                  shouldStart={isStatsVisible}
                />
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
