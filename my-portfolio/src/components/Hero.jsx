import { motion } from 'framer-motion';

export default function Hero({ onContinue }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm Kavya.
      </motion.h1>
      <motion.button
        className="mt-4 px-8 py-3 bg-black text-white rounded-lg text-lg hover:bg-gray-800 transition"
        whileHover={{ scale: 1.05 }}
        onClick={onContinue}
      >
        Wanna know more? Just click here
      </motion.button>
    </div>

    
  );
}