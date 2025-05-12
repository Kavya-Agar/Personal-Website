import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
      {jokefunnyaboutme()}
    </div>

    
  );

  function jokefunnyaboutme() {
    return (
      <motion.div
        className="mt-4"
        whileHover={{ scale: 1.05 }}
      >
        <Link
          to="/about"
          className="px-8 py-3 bg-black text-white rounded-lg text-lg hover:bg-gray-800 transition nav-button"
        >
          Wanna know more? Just click here
        </Link>
      </motion.div>
    );
  }
}