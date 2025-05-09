import { motion } from 'framer-motion';
import profilePic from '../assets/IMG_6120_Original.jpg';

export default function About() {
  return (
    <motion.section
      id="about"
      className="max-w-3xl mx-auto py-16 px-4 md:px-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-3xl font-bold mb-4 text-gray-900">About Me</h2>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Image on the left */}
        {/* <img
            src={profilePic}
            alt="Kavya Agar"
            // style={{ width: "150px", height: "150px", objectFit: "cover"}}
            className='w-40 h-40 object-cover shadow-lg transition-transform duration-300 hover:scale-105'
        /> */}

        {/* Text on the right */}
        <div className="font-Mont lg:text-lg md:text-md sm:text-sm w-auto space-y-6 text-darkgreen text-opacity-70">
          <p>
            Howdy! My name is Kavya Agar, a chill guy that likes to do anything and everything. 
          </p>

          <p>
            I am an undergraduate Computer Science student at Texas A&M University with minors in Statistics 
            and Business. Outside of the regular academics, I like to watch Netflix, bake chocolate chip cookies,
            make terrible jokes, and train for a marathon.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
