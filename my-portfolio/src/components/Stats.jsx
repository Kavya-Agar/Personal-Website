import {motion} from 'framer-motion'

export default function Stats() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Stats
      </motion.h1>
      <p className="text-lg text-gray-700">Here are some of my stats!</p>
    </div>
  );
}

