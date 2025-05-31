import { motion } from 'framer-motion';
import Movies from './Movies.jsx';
import WorldMap from './WorldMap.jsx';

export default function Extras() {
  return (
    <div className="page-title flex flex-col h-screen bg-white">
      <motion.h1
        className="text-3xl font-bold mb-8"
        style={{ color: '#0f420f' }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Extras
      </motion.h1>
      <p className="text-lg"style={{ color: '#0f420f' }}>Here are some extra random bits!</p>
      <Movies />
      <WorldMap />
    </div>
  );
}

