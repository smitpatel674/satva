import { motion } from 'framer-motion';

const ECGLine = () => {
  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
      }
    }
  };

  return (
    <motion.svg
      viewBox="0 0 400 100"
      className="w-full h-20 absolute bottom-0 left-0 opacity-10"
      initial="hidden"
      animate="visible"
    >
      <motion.path
        d="M 0 50 L 50 50 L 70 20 L 90 80 L 110 20 L 130 80 L 150 50 L 400 50"
        fill="transparent"
        strokeWidth="2"
        stroke="currentColor"
        className="text-teal-500"
        variants={pathVariants}
      />
    </motion.svg>
  );
};

export default ECGLine;