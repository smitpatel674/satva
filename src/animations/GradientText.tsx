import { motion } from 'framer-motion';

interface GradientTextProps {
  text: string;
  delay?: number;
  className?: string;
}

const GradientText = ({ text, delay = 0, className = '' }: GradientTextProps) => {
  const words = text.split(' ');

  return (
    <div className={`overflow-hidden ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: delay + i * 0.2,
            ease: [0.2, 0.65, 0.3, 0.9],
          }}
        >
          {word}{' '}
        </motion.span>
      ))}
    </div>
  );
};

export default GradientText;