import { motion, Variants } from 'framer-motion';

interface TextSpanProps {
  children: string;
  className?: string;
  delay?: number;
}

export default function TextSpan({ children, className = "", delay = 0 }: TextSpanProps) {
  const letterAnimation: Variants = {
    hidden: { 
      y: 400,
      opacity: 0,
      rotateX: -90,
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
        delayChildren: delay,
      },
    },
  };

  return (
    <span className="inline-block overflow-hidden">
      {children.split("").map((char, index) => (
        <motion.span
          key={index}
          className={`inline-block ${className}`}
          variants={letterAnimation}
          initial="hidden"
          animate="visible"
          custom={index}
          style={{ 
            transformOrigin: "0% 100%",
            display: char === " " ? "inline" : "inline-block",
            whiteSpace: "pre",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}