import { useState } from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/kavya_image.jpg';
import '../styles/About.css';

export default function About() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <motion.section
      id="about"
      className="max-w-4xl mx-auto py-16 px-4 md:px-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-3xl font-bold mb-8" style={{ color: '#0f420f' }}>About Me</h2>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Image on the left */}
        <img
          src={profilePic}
          alt="Kavya Agar"
          className="kavyaPic w-64 h-64 object-cover rounded-lg shadow-lg flex-shrink-0 cursor-pointer"
          onClick={() => setModalOpen(true)}
        />

        {/* Text and buttons on the right */}
        <div className="font-sans lg:text-lg md:text-md sm:text-sm w-full md:w-2/3 space-y-6 text-opacity-70" style={{ color: '#0f420f' }}>
          <p>
            Hullo! My name is Kavya Agar, a chill guy that likes to try anything and everything. 
          </p>
          <p>
            I am an undergraduate Computer Science student at Texas A&M University with minors in Statistics 
            and Business. Outside of academics, I like to watch Netflix, bake chocolate chip cookies,
            make terrible jokes, read books of all kind, while simultaneously running side quests.
          </p>
          <p>
            Join my journey as I explore the world of technology and share my experiences along the way!
          </p>
          {/* Move the button row here */}
          <div className="mt-6 flex flex-row items-center gap-6 justify-start">
            <a
              href="https://drive.google.com/file/d/1ZHGajliORAa753fGa-TU-7vMmP0L32Gz/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-button"
            >
              Resume
            </a>
            <a
              href="https://www.linkedin.com/in/kavya-agar/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-button"
            >
              LinkedIn
            </a>
            <span className="font-semibold text-black"style={{ color: '#0f420f' }}>
              kavyaagar0@gmail.com
            </span>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setModalOpen(false)}
        >
          <img
            src={profilePic}
            alt="Kavya Agar Large"
            className="max-w-full max-h-full rounded-lg shadow-2xl"
          />
        </div>
      )}
    </motion.section>
  );
}
