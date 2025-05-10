import { motion } from 'framer-motion';
import profilePic from '../assets/IMG_6120_Original.jpg';

export default function About() {
  return (
    <motion.section
      id="about"
      className="max-w-4xl mx-auto py-16 px-4 md:px-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-3xl font-bold mb-8 text-gray-900">About Me</h2>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Image on the left */}
        <img
          src={profilePic}
          alt="Kavya Agar"
          className="w-64 h-64 object-cover rounded-lg shadow-lg flex-shrink-0" // <-- Changed commas to spaces here
        />

        {/* Text on the right */}
        <div className="font-sans lg:text-lg md:text-md sm:text-sm w-full md:w-2/3 space-y-6 text-darkgreen text-opacity-70">
          <p>
            Howdy! My name is Kavya Agar, a chill guy that likes to do anything and everything. 
          </p>
          <p>
            I am an undergraduate Computer Science student at Texas A&M University with minors in Statistics 
            and Business. Outside of the regular academics, I like to watch Netflix, bake chocolate chip cookies,
            make terrible jokes, and train for a marathon.
          </p>
          <p>
            Join my journey as I explore the world of technology and share my experiences along the way!
          </p>
        </div>
      </div>
    </motion.section>
  );
}
