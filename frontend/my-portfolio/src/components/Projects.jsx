import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/Project.css';

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="max-w-4xl mx-auto py-10 px-2 sm:px-4 md:px-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-8" style={{ color: '#0f420f' }}>
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Project 1 */}
        <div className="project-card bg-white shadow-lg rounded-lg p-4 sm:p-6 flex flex-col h-full">
          <h3 className="project-title text-lg sm:text-xl mb-2">
            FIN-ance
          </h3>
          <p className='description mb-2 text-sm sm:text-base'>
            A simple fish-themed finance tracker that allows users to track their income and expenses. The app provides a simple UI
            for users to manage their finances and get insights into their spendings to see where they can save money.
          </p>
          <h3 className='technologies text-sm sm:text-base'>
            Technologies Used:
          </h3>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <img 
              src="https://images.icon-icons.com/2415/PNG/512/react_original_wordmark_logo_icon_146375.png" 
              alt="React Logo" 
              className="technology-image"
              style={{ width: '32px', height: '32px', objectFit: 'contain' }}
            />
            <img
              src="https://images.icon-icons.com/2699/PNG/512/python_logo_icon_168886.png"
              alt="Python Logo"
              className="technology-image"
              style={{ width: '32px', height: '32px', objectFit: 'contain' }}
            />
            <img
              src="https://www.svgrepo.com/show/353657/django-icon.svg"
              alt="Django Logo"
              className="technology-image"
              style={{width: '32px', height: '32px', objectFit: 'contain' }}
            />
            <img
              src="https://static-00.iconduck.com/assets.00/tensorflow-icon-1911x2048-1m2s54vn.png"
              alt="Tensorflow Logo"
              className="technology-image"
              style={{ width: '32px', height: '32px', objectFit: 'contain' }}
            /> 
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png"
              alt="PostgreSQL Logo"
              className="technology-image"
              style={{ width: '32px', height: '32px', objectFit: 'contain' }}
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJl4fp0SkQbTPU5ZxVl6AKWYuKCwM0gIhNtQ&s"
              alt="Docker Logo"
              className="technology-image"
              style={{ width: '32px', height: '32px', objectFit: 'contain' }}
            />
          </div>
          <a href="https://github.com/Kavya-Agar/fin-ance" 
            className="project-link mt-auto"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>
        
        {/* Project 2 */}
        <div className="project-card bg-white shadow-lg rounded-lg p-4 sm:p-6 flex flex-col h-full">
          <h3 className="project-title text-lg sm:text-xl mb-2">
            Heart R8
          </h3>
          <p className="description mb-2 text-sm sm:text-base">
            A low-cost wristband for older adults that detects abnormal heart rhythms and alerts them in case of 
            arrythmias. The wristband is designed to be simple and easy to use, easing the process of managing cardiac 
            health.
          </p>
          <h3 className='technologies text-sm sm:text-base'>
            Technologies Used:
          </h3>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <img 
              src="https://www.electronics-lab.com/wp-content/uploads/2023/03/arduino-logo-1-1.png" 
              alt="Arduino Logo" 
              className="technology-image"
              style={{ width: '32px', height: '32px', objectFit: 'contain' }}
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png"
              alt="C++ Logo"
              className="technology-image"
              style={{ width: '32px', height: '32px', objectFit: 'contain' }}
            />
          </div>
          <a 
            href="https://devpost.com/software/heart-rate-pulse-sensor" 
            className="project-link mt-auto"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>

        {/* Project 3 */}
        <div className="project-card bg-white shadow-lg rounded-lg p-4 sm:p-6 flex flex-col h-full">
          <h3 className="project-title text-lg sm:text-xl mb-2">
            Personal Website
          </h3>
          <p className='description mb-2 text-sm sm:text-base'>
            A personal website to showcase my projects and skills so far as well as serve as a learning opportunity.
            The website was designed to be simple and easy to navigate, as well as responsive to different screen sizes. 
          </p>
          <h3 className='technologies text-sm sm:text-base'>
            Technologies Used:
          </h3>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <img 
              src="https://images.icon-icons.com/2415/PNG/512/react_original_wordmark_logo_icon_146375.png" 
              alt="React Logo" 
              className="technology-image"
              style={{ width: '32px', height: '32px', objectFit: 'contain' }}
            />
            <img
              src="https://images.seeklogo.com/logo-png/43/1/tailwind-css-logo-png_seeklogo-434090.png"
              alt="Tailwind Logo"
              className="technology-image"
              style={{ width: '32px', height: '32px', objectFit: 'contain' }}
            />  
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1200px-Vitejs-logo.svg.png"
              alt="Vite Logo"
              className="technology-image"
              style={{ width: '32px', height: '32px', objectFit: 'contain' }}
            />
            <img
              src="https://images.icon-icons.com/2699/PNG/512/python_logo_icon_168886.png"
              alt="Python Logo"
              className="technology-image"
              style={{ width: '32px', height: '32px', objectFit: 'contain' }}
            />
            <img
              src="https://www.svgrepo.com/show/353657/django-icon.svg"
              alt="Django Logo"
              className="technology-image"
              style={{width: '32px', height: '32px', objectFit: 'contain' }}
            />
          </div>
          <a href="https://www.kavyaagar.com/" 
            className="project-link mt-auto"
            target="_blank"
            rel="noopener noreferrer"
          >
            Viewing Project
          </a>
        </div>
      </div>
    </motion.section>
  );
}